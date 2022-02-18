// region import
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import DividerSection from 'components/DividerSection'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Heading, Button, LogoWithTextIcon } from '@gravyswap/uikit'
// endregion

const StyledHeading = styled(Heading)`
  display: inline;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DescriptionContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 1;
`

const HeroIconRightContainer = styled.svg`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 400px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 500px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 600px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 700px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 800px;
  }
`

const HeroIconLeftContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 200px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 200px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 300px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 400px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 450px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 600px;
  }
`

const Logo = styled(LogoWithTextIcon)`
  position: absolute;
  width: 250px;
  right: 50%;
  transform: translateX(50%);
  top: 50px;
`

const StyledConnectWalletButton = styled(ConnectWalletButton)`
  display: none;
  position: absolute;
  top: 40px;
  right: 100px;
  z-index: 2;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const Buttons = styled.div`
  display: flex;
`

const ButtonWallet = styled.div`
  margin-right: 20px;
`

const Img = styled.img`
  z-index: 2;
  width: 800px;
`

const DividerSectionHero: React.FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <DividerSection color="white">
      <Logo isDark={false} />
      <StyledConnectWalletButton />
      <HeroIconLeftContainer theme={theme} viewBox="0 0 543 222" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0-2h543c-19.001 81.191-79.962 142.731-182.882 184.62C282.038 214.398 161.998 226.525 0 219V-2Z"
          fill="#441F95"
          fillRule="evenodd"
        />
      </HeroIconLeftContainer>
      <HeroIconRightContainer theme={theme} viewBox="0 0 737 640" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M335.475 64.732 746-1v643L333.298 536.843C111.1 476.649 0 381.403 0 251.103c0-84.034 111.825-146.158 335.475-186.371Z"
          fill="#FAEBC1"
          fillRule="evenodd"
        />
      </HeroIconRightContainer>

      <InformationContainer>
        <HeadingContainer>
          <div>
            <StyledHeading black scale="xxl" color="secondary">
              Trade better
            </StyledHeading>
            <StyledHeading black scale="xxl" color="primary">
              .
            </StyledHeading>
          </div>
        </HeadingContainer>

        <DescriptionContainer>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t(
              'Using GravySwap you wll be able to instantly swap crypto tokens and access the latest in DeFi technology.',
            )}
          </Heading>
        </DescriptionContainer>

        <Buttons>
          <ButtonWallet>
            <ConnectWalletButton />
          </ButtonWallet>
          <Link to="/swap">
            <Button variant="secondary">{t('Trade Now')}</Button>
          </Link>
        </Buttons>
      </InformationContainer>
      <Img src="/images/train_launch.png" alt="Launch" />
    </DividerSection>
  )
}

export default DividerSectionHero
