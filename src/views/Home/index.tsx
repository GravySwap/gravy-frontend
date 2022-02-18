import React from 'react'
import styled from 'styled-components'
import { LogoWithTextIcon } from '@gravyswap/uikit'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import CompetitionBanner from './components/Banners/CompetitionBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 850px;
  background: white;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const HeroIconRightContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`

const HeroIconLeftContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const Logo = styled(LogoWithTextIcon)`
  position: absolute;
  width: 250px;
  right: 50%;
  transform: translateX(50%);
  top: 50px;
`

const StyledHero = styled.div`
  padding: 0 100px;
  z-index: 1;
`

const StyledConnectWalletButton = styled(ConnectWalletButton)`
  position: absolute;
  top: 40px;
  right: 100px;
  z-index: 2;
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <PageMeta />
      <HeroContainer>
        <Logo isDark={false} />
        <StyledConnectWalletButton />
        <HeroIconLeftContainer>
          <svg width={700} viewBox="0 0 543 222" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0-2h543c-19.001 81.191-79.962 142.731-182.882 184.62C282.038 214.398 161.998 226.525 0 219V-2Z"
              fill="#441F95"
              fillRule="evenodd"
            />
          </svg>
        </HeroIconLeftContainer>
        <StyledHero>
          <Hero />
        </StyledHero>
        <HeroIconRightContainer>
          <svg width={800} viewBox="0 0 737 640" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M335.475 64.732 746-1v643L333.298 536.843C111.1 476.649 0 381.403 0 251.103c0-84.034 111.825-146.158 335.475-186.371Z"
              fill="#FAEBC1"
              fillRule="evenodd"
            />
          </svg>
        </HeroIconRightContainer>
      </HeroContainer>
      {/* <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={theme.isDark ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)' : '#F4D8AA'}
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Flex
          pt={[account ? '220px' : '0', null, null, account ? '76px' : '0']}
          mt={[account ? '0' : '-16px', null, null, account ? '0' : '-48px']}
          pb="24px"
          minHeight={150}
        />
        <Hero />
      </StyledHeroSection> */}
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.gradients.cardHeader}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...earnSectionData} />
        {/* TODO: Inspect component to resolve performance issue. */}
        {/* <FarmsPoolsRow /> */}
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
        <CakeDataRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
