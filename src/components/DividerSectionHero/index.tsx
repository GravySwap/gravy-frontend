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
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 250px;
  margin-bottom: 100px;
`

const HeroIconRightContainer = styled.svg`
  position: absolute;
  right: 0;
  bottom: 35%;
  transform: translateY(50%);
  width: 75%;

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 50%;
    bottom: 50%;
  }
`

const HeroIconLeftContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 39%;
  }
`

const LogoWhite = styled(LogoWithTextIcon)`
  position: absolute;
  right: 50%;
  transform: translateX(50%);
`

const LogoDark = styled(LogoWithTextIcon)`
  position: absolute;
  right: 50%;
  transform: translateX(50%);

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

const StyledConnectWalletButton = styled(ConnectWalletButton)`
  margin-left: auto;
  z-index: 1;
  display: none;

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
  width: 800px;
  z-index: 1;

  ${(props) => props.theme.mediaQueries.xl} {
    padding-top: 150px;
  }
`

const Head = styled.div`
  max-width: 1350px;

  display: flex;
  align-items: center;
  margin: auto;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 1350px;

  ${(props) => props.theme.mediaQueries.xl} {
    flex-direction: row;
  }
`

const Container = styled.div`
  z-index: 2;
`

const MainContainer = styled.div`
  background-color: white;
  padding: 50px;
  padding-bottom: 250px;
  position: relative;
`

const Svg = styled.svg`
  z-index: 1;
`

const DividerSectionHero: React.FC = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <MainContainer color="white">
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
      <Container>
        <Head>
          <Svg width={40} height={21} viewBox="0 0 40 21" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF">
              <rect transform="matrix(-1 0 0 1 40 0)" width={40} height={3} rx={1.5} />
              <rect transform="matrix(-1 0 0 1 31 0)" y={9} width={31} height={3} rx={1.5} />
              <rect transform="matrix(-1 0 0 1 40 0)" y={18} width={40} height={3} rx={1.5} />
            </g>
          </Svg>
          <LogoWhite isDark={false} />
          <LogoDark isDark />
          <StyledConnectWalletButton />
        </Head>

        <Content>
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
        </Content>
      </Container>
    </MainContainer>
  )
}

export default DividerSectionHero
