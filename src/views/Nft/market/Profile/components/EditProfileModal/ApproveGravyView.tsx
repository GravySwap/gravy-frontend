import React, { useState } from 'react'
import { AutoRenewIcon, Button, Flex, InjectedModalProps, Text } from '@gravyswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGravy } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { useProfile } from 'state/profile/hooks'
import { getGravyProfileAddress } from 'utils/addressHelpers'
import { formatBigNumber } from 'utils/formatBalance'
import useGetProfileCosts from 'views/Nft/market/Profile/hooks/useGetProfileCosts'
import { UseEditProfileResponse } from './reducer'

interface ApproveGravyPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
}

const ApproveGravyPage: React.FC<ApproveGravyPageProps> = ({ goToChange, onDismiss }) => {
  const [isApproving, setIsApproving] = useState(false)
  const { profile } = useProfile()
  const { t } = useTranslation()
  const {
    costs: { numberGravyToUpdate, numberGravyToReactivate },
  } = useGetProfileCosts()
  const gravyContract = useGravy()
  const { toastError } = useToast()
  const cost = profile.isActive ? numberGravyToUpdate : numberGravyToReactivate

  const handleApprove = async () => {
    const tx = await gravyContract.approve(getGravyProfileAddress(), cost.mul(2).toString())
    setIsApproving(true)
    const receipt = await tx.wait()
    if (receipt.status) {
      goToChange()
    } else {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setIsApproving(false)
    }
  }

  if (!profile) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text>{profile.isActive ? t('Cost to update:') : t('Cost to reactivate:')}</Text>
        <Text>{formatBigNumber(cost)} GRAVY</Text>
      </Flex>
      <Button
        disabled={isApproving}
        isLoading={isApproving}
        endIcon={isApproving ? <AutoRenewIcon spin color="currentColor" /> : null}
        width="100%"
        mb="8px"
        onClick={handleApprove}
      >
        {t('Enable')}
      </Button>
      <Button variant="text" width="100%" onClick={onDismiss} disabled={isApproving}>
        {t('Close Window')}
      </Button>
    </Flex>
  )
}

export default ApproveGravyPage
