// region import
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
// contexts
import { useTranslation } from 'contexts/Localization'

// components
import LateralMenu from 'components/LateralMenu'
import UserMenu from 'components/Menu/UserMenu'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Heading, Button } from '@gravyswap/uikit'

// styles
import {
  MainContainer,
  HeroIconLeftContainer,
  HeroIconRightContainer,
  Container,
  Head,
  Svg,
  LogoWhite,
  LogoDark,
  UserMenuContainer,
  Content,
  InformationContainer,
  HeadingContainer,
  StyledHeading,
  DescriptionContainer,
  ButtonWallet,
  Buttons,
  Img,
} from './style'
// endregion

const DividerSectionHero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const theme = useTheme()
  return (
    <MainContainer color="white">
      <LateralMenu onClose={setMenuOpen} open={menuOpen} />
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
          <Svg
            onClick={() => setMenuOpen(true)}
            width={40}
            height={21}
            viewBox="0 0 40 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFF">
              <rect transform="matrix(-1 0 0 1 40 0)" width={40} height={3} rx={1.5} />
              <rect transform="matrix(-1 0 0 1 31 0)" y={9} width={31} height={3} rx={1.5} />
              <rect transform="matrix(-1 0 0 1 40 0)" y={18} width={40} height={3} rx={1.5} />
            </g>
          </Svg>
          <LogoWhite isDark={false} />
          <LogoDark isDark />
          <UserMenuContainer>
            {!account && <ConnectWalletButton />}
            {account && <UserMenu />}
          </UserMenuContainer>
        </Head>

        <Content>
          <InformationContainer>
            <HeadingContainer>
              <div>
                <StyledHeading black scale="xl" color="secondary">
                  Everything is better with{' '}
                </StyledHeading>
                <StyledHeading black scale="xl" color="primary">
                  GRAVY
                </StyledHeading>
                <StyledHeading black scale="xl" color="secondary">
                  .
                </StyledHeading>
              </div>
            </HeadingContainer>

            <DescriptionContainer>
              <Heading maxWidth={640} scale="md" mb="38px">
                {t(
                  'Using GravySwap you will be able to instantly swap crypto tokens and access the latest in DeFi technology.',
                )}
              </Heading>
            </DescriptionContainer>

            <Buttons>
              <ButtonWallet>{!account && <ConnectWalletButton />}</ButtonWallet>
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
