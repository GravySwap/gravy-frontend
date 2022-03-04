import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Button, Flex, Text, InjectedModalProps } from '@gravyswap/uikit'
import { formatBigNumber } from 'utils/formatBalance'
import { getGravyProfileAddress } from 'utils/addressHelpers'
import { useGravy } from 'hooks/useContract'
import { FetchStatus, useGetGravyBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import useGetProfileCosts from 'views/Nft/market/Profile/hooks/useGetProfileCosts'
import { useProfile } from 'state/profile/hooks'
import ProfileAvatarWithTeam from 'components/ProfileAvatarWithTeam'
import { UseEditProfileResponse } from './reducer'

interface StartPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
  goToRemove: UseEditProfileResponse['goToRemove']
  goToApprove: UseEditProfileResponse['goToApprove']
}

const DangerOutline = styled(Button).attrs({ variant: 'secondary' })`
  border-color: ${({ theme }) => theme.colors.failure};
  color: ${({ theme }) => theme.colors.failure};
  margin-bottom: 24px;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-color: ${({ theme }) => theme.colors.failure};
    opacity: 0.8;
  }
`

const AvatarWrapper = styled.div`
  height: 64px;
  width: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 128px;
    width: 128px;
  }
`

const StartPage: React.FC<StartPageProps> = ({ goToApprove, goToChange, goToRemove, onDismiss }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const gravyContract = useGravy()
  const { profile } = useProfile()
  const { balance: gravyBalance, fetchStatus } = useGetGravyBalance()
  const {
    costs: { numberGravyToUpdate, numberGravyToReactivate },
    isLoading: isProfileCostsLoading,
  } = useGetProfileCosts()
  const [needsApproval, setNeedsApproval] = useState(null)
  const minimumGravyRequired = profile.isActive ? numberGravyToUpdate : numberGravyToReactivate
  const hasMinimumGravyRequired = fetchStatus === FetchStatus.SUCCESS && gravyBalance.gte(minimumGravyRequired)

  /**
   * Check if the wallet has the required GRAVY allowance to change their profile pic or reactivate
   * If they don't, we send them to the approval screen first
   */
  useEffect(() => {
    const checkApprovalStatus = async () => {
      const response = await gravyContract.allowance(account, getGravyProfileAddress())
      setNeedsApproval(response.lt(minimumGravyRequired))
    }

    if (account && !isProfileCostsLoading) {
      checkApprovalStatus()
    }
  }, [account, minimumGravyRequired, setNeedsApproval, gravyContract, isProfileCostsLoading])

  if (!profile) {
    return null
  }

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <AvatarWrapper>
        <ProfileAvatarWithTeam profile={profile} />
      </AvatarWrapper>
      <Flex alignItems="center" style={{ height: '48px' }} justifyContent="center">
        <Text as="p" color="failure">
          {!isProfileCostsLoading &&
            !hasMinimumGravyRequired &&
            t('%minimum% GRAVY required to change profile pic', { minimum: formatBigNumber(minimumGravyRequired) })}
        </Text>
      </Flex>
      {profile.isActive ? (
        <>
          <Button
            width="100%"
            mb="8px"
            onClick={needsApproval === true ? goToApprove : goToChange}
            disabled={isProfileCostsLoading || !hasMinimumGravyRequired || needsApproval === null}
          >
            {t('Change Profile Pic')}
          </Button>
          <DangerOutline width="100%" onClick={goToRemove}>
            {t('Remove Profile Pic')}
          </DangerOutline>
        </>
      ) : (
        <Button
          width="100%"
          mb="8px"
          onClick={needsApproval === true ? goToApprove : goToChange}
          disabled={isProfileCostsLoading || !hasMinimumGravyRequired || needsApproval === null}
        >
          {t('Reactivate Profile')}
        </Button>
      )}
      <Button variant="text" width="100%" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Flex>
  )
}

export default StartPage
