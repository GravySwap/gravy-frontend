import React from 'react'
import { Flex, Text } from '@gravyswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceGravyBusd } from 'state/farms/hooks'
import { useGravyVault } from 'state/pools/hooks'
import { getGravyVaultEarnings } from 'views/Pools/helpers'
import RecentGravyProfitBalance from './RecentGravyProfitBalance'

const RecentGravyProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { gravyAtLastUserAction, userShares, lastUserActionTime },
  } = useGravyVault()
  const gravyPriceBusd = usePriceGravyBusd()
  const { hasAutoEarnings, autoGravyToDisplay, autoUsdToDisplay } = getGravyVaultEarnings(
    account,
    gravyAtLastUserAction,
    userShares,
    pricePerFullShare,
    gravyPriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent GRAVY profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentGravyProfitBalance
          gravyToDisplay={autoGravyToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentGravyProfitCountdownRow
