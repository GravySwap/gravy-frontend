import React from 'react'
import { Text, Flex } from '@gravyswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { formatNumber } from 'utils/formatBalance'
import { VotingBox, ModalInner } from './styles'

interface DetailsViewProps {
  total: number
  gravyBalance: number
  gravyVaultBalance: number
  gravyPoolBalance: number
  poolsBalance: number
  gravyBnbLpBalance: number
}

const DetailsView: React.FC<DetailsViewProps> = ({
  total,
  gravyBalance,
  gravyVaultBalance,
  gravyPoolBalance,
  poolsBalance,
  gravyBnbLpBalance,
}) => {
  const { t } = useTranslation()

  return (
    <ModalInner mb="0">
      <Text as="p" mb="24px" fontSize="14px" color="textSubtle">
        {t(
          'Your voting power is determined by the amount of GRAVY you held at the block detailed below. GRAVY held in other places does not contribute to your voting power.',
        )}
      </Text>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Overview')}
      </Text>
      <VotingBox>
        <Text color="secondary">{t('Your Voting Power')}</Text>
        <Text bold fontSize="20px">
          {formatNumber(total, 0, 3)}
        </Text>
      </VotingBox>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Your Gravy Held Now')}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Wallet')}
        </Text>
        <Text textAlign="right">{formatNumber(gravyBalance, 0, 3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Manual GRAVY Pool')}
        </Text>
        <Text textAlign="right">{formatNumber(gravyPoolBalance, 0, 3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Auto GRAVY Pool')}
        </Text>
        <Text textAlign="right">{formatNumber(gravyVaultBalance, 0, 3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Other Syrup Pools')}
        </Text>
        <Text textAlign="right">{formatNumber(poolsBalance, 0, 3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('GRAVY BNB LP')}
        </Text>
        <Text textAlign="right">{formatNumber(gravyBnbLpBalance, 0, 3)}</Text>
      </Flex>
    </ModalInner>
  )
}

export default DetailsView
