import BigNumber from 'bignumber.js'
import { getGravyVaultContract } from 'utils/contractHelpers'

const gravyVaultContract = getGravyVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await gravyVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      gravyAtLastUserAction: new BigNumber(userContractResponse.gravyAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      gravyAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
