import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useTranslation } from 'contexts/Localization'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/gravyProfile.json'
import { getGravyProfileAddress } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberGravyToReactivate: ethers.BigNumber.from(0),
    numberGravyToRegister: ethers.BigNumber.from(0),
    numberGravyToUpdate: ethers.BigNumber.from(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberGravyToReactivate', 'numberGravyToRegister', 'numberGravyToUpdate'].map((method) => ({
          address: getGravyProfileAddress(),
          name: method,
        }))
        const [[numberGravyToReactivate], [numberGravyToRegister], [numberGravyToUpdate]] = await multicallv2<
          [[ethers.BigNumber], [ethers.BigNumber], [ethers.BigNumber]]
        >(profileABI, calls)

        setCosts({
          numberGravyToReactivate,
          numberGravyToRegister,
          numberGravyToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve GRAVY costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return { costs, isLoading }
}

export default useGetProfileCosts
