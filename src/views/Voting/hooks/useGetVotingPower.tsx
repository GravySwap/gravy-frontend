import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getActivePools } from 'utils/calls'
import { getAddress } from 'utils/addressHelpers'
import { simpleRpcProvider } from 'utils/providers'
import { getVotingPower } from '../helpers'

interface State {
  verificationHash: string
  gravyBalance: number
  gravyVaultBalance: number
  gravyPoolBalance: number
  poolsBalance: number
  gravyBnbLpBalance: number
  total: number
}

const initialState: State = {
  verificationHash: null,
  gravyBalance: 0,
  gravyVaultBalance: 0,
  gravyPoolBalance: 0,
  poolsBalance: 0,
  gravyBnbLpBalance: 0,
  total: 0,
}

const useGetVotingPower = (block?: number, isActive = true): State & { isLoading: boolean } => {
  const { account } = useWeb3React()
  const [votingPower, setVotingPower] = useState(initialState)
  const [isLoading, setIsLoading] = useState(!!account)

  useEffect(() => {
    const fetchVotingPower = async () => {
      setIsLoading(true)

      try {
        const blockNumber = block || (await simpleRpcProvider.getBlockNumber())
        const eligiblePools = await getActivePools(blockNumber)
        const poolAddresses = eligiblePools.map(({ contractAddress }) => getAddress(contractAddress))
        const {
          gravyBalance,
          gravyBnbLpBalance,
          gravyPoolBalance,
          total,
          poolsBalance,
          gravyVaultBalance,
          verificationHash,
        } = await getVotingPower(account, poolAddresses, blockNumber)

        if (isActive) {
          setVotingPower((prevVotingPower) => ({
            ...prevVotingPower,
            verificationHash,
            gravyBalance: parseFloat(gravyBalance),
            gravyBnbLpBalance: parseFloat(gravyBnbLpBalance),
            gravyPoolBalance: parseFloat(gravyPoolBalance),
            poolsBalance: parseFloat(poolsBalance),
            gravyVaultBalance: parseFloat(gravyVaultBalance),
            total: parseFloat(total),
          }))
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (account && isActive) {
      fetchVotingPower()
    }
  }, [account, block, setVotingPower, isActive, setIsLoading])

  return { ...votingPower, isLoading }
}

export default useGetVotingPower
