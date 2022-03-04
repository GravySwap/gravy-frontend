import React from 'react'
import { Text, TooltipText, useTooltip } from '@gravyswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentGravyProfitBalanceProps {
  gravyToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentGravyProfitBalance: React.FC<RecentGravyProfitBalanceProps> = ({
  gravyToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={gravyToDisplay} decimals={3} bold unit=" GRAVY" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={gravyToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentGravyProfitBalance
