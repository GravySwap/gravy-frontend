import React, { useState, useEffect } from 'react'
import { Text, Flex, Skeleton, Image } from '@gravyswap/uikit'
import { useFarmAuctionContract } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import { usePriceGravyBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { ethersToBigNumber } from 'utils/bigNumber'
import Balance from 'components/Balance'
import styled from 'styled-components'

const BurnedText = styled(Text)`
  font-size: 52px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 64px;
  }
`

const AuctionGravyBurn: React.FC = () => {
  const [burnedGravyAmount, setBurnedGravyAmount] = useState(0)
  const { t } = useTranslation()
  const farmAuctionContract = useFarmAuctionContract()
  const gravyyPriceBusd = usePriceGravyBusd()

  const burnedAmountAsUSD = gravyyPriceBusd.times(burnedGravyAmount)

  useEffect(() => {
    const fetchBurnedGravyAmount = async () => {
      try {
        const amount = await farmAuctionContract.totalCollected()
        const amountAsBN = ethersToBigNumber(amount)
        setBurnedGravyAmount(getBalanceNumber(amountAsBN))
      } catch (error) {
        console.error('Failed to fetch burned auction gravyy', error)
      }
    }
    if (burnedGravyAmount === 0) {
      fetchBurnedGravyAmount()
    }
  }, [burnedGravyAmount, farmAuctionContract])
  return (
    <Flex flexDirection={['column-reverse', null, 'row']}>
      <Flex flexDirection="column" flex="2">
        {burnedGravyAmount !== 0 ? (
          <Balance fontSize="64px" bold value={burnedGravyAmount} decimals={0} unit=" GRAVY" />
        ) : (
          <Skeleton width="256px" height="64px" />
        )}
        <BurnedText textTransform="uppercase" bold color="secondary">
          {t('Burned')}
        </BurnedText>
        <Text fontSize="24px" bold>
          {t('through community auctions so far!')}
        </Text>
        {!burnedAmountAsUSD.isNaN() && !burnedAmountAsUSD.isZero() ? (
          <Text color="textSubtle">
            ~${burnedAmountAsUSD.toNumber().toLocaleString('en', { maximumFractionDigits: 0 })}
          </Text>
        ) : (
          <Skeleton width="128px" />
        )}
      </Flex>
      <Image width={350} height={320} src="/images/burnt-gravy.png" alt={t('Burnt GRAVY')} />
    </Flex>
  )
}

export default AuctionGravyBurn
