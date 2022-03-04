import BigNumber from 'bignumber.js'
import { convertSharesToGravy } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import gravyyVaultAbi from 'config/abigravyvyVault.json'
import { getGravyVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestGravyRewards',
      'calculateTotalPendingGravyRewards',
    ].map((method) => ({
      address: getGravyVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedGravyBountyReward], [totalPendingGravyHarvest]] = await multicallv2(
      gravyyVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalGravyInVaultEstimate = convertSharesToGravy(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalGravyInVault: totalGravyInVaultEstimate.gravyAsBigNumber.toJSON(),
      estimatedGravyBountyReward: new BigNumber(estimatedGravyBountyReward.toString()).toJSON(),
      totalPendingGravyHarvest: new BigNumber(totalPendingGravyHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalGravyInVault: null,
      estimatedGravyBountyReward: null,
      totalPendingGravyHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getGravyVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(gravyyVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
