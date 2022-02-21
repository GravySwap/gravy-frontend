// region import
import React from 'react'
// import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

// components
import {
  LogoWithTextIcon,
  DiscordIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  TelegramIcon,
  RedditIcon,
  ArrowForwardIcon,
  Button,
  LinkExternal,
  Link,
} from '@gravyswap/uikit'
// endregion

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #1c1349;
  padding: 25px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 50px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 18px;
  margin-bottom: 20px;
  flex: 1;

  ${(props) => props.theme.mediaQueries.md} {
    margin-left: 10px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 25px;
  flex: 1;
  font-size: 15px;
`

const TitleSection = styled.div`
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
`

const ElementSection = styled(Link)`
  font-weight: 800;
  margin-bottom: 15px;
  color: white;
`
const LineSeparator = styled.div`
  background-color: #348183;
  width: 100%;
  height: 6px;
  opacity: 16%;

  margin: 25px 0;
`

const WrapIcon = styled(Link)`
  background-color: white;
  height: 33px;
  width: 33px;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 10px;
`

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  ${(props) => props.theme.mediaQueries.md} {
    justify-content: flex-start;
  }
`

const InfoElements = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Footer: React.FC = () => {
  const theme = useTheme()
  return (
    <Container>
      <SectionsContainer>
        <LogoContainer>
          <LogoWithTextIcon isDark />
        </LogoContainer>
        <InfoElements>
          <Section>
            <TitleSection>Gravyswap</TitleSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/contact-us/email">Contact</ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/brand-kit">Brand kit</ElementSection>
            <ElementSection href="https://gravyswap.medium.com/">Blog</ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/contact-us/telegram">
              Community
            </ElementSection>
          </Section>

          <Section>
            <TitleSection>Help</TitleSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/looking-for-help">
              Customer Support
            </ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/looking-for-help/troubleshooting">
              Troubleshooting
            </ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/getting-started">Guides</ElementSection>
          </Section>

          <Section>
            <TitleSection>Developers</TitleSection>
            <ElementSection href="https://github.com/GravySwap/">Github</ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/">Documentation</ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/contact-us/email">
              Bug Bounty
            </ElementSection>
            <ElementSection href="#">Audits</ElementSection>
            <ElementSection href="https://gravyswap-1.gitbook.io/gravyswap-1/join-us/make-some-gravy">
              Careers
            </ElementSection>
          </Section>
        </InfoElements>
      </SectionsContainer>

      <LineSeparator />

      <EndContainer>
        <SocialIconsContainer>
          <WrapIcon external href="https://discord.gg/gravyswap">
            <DiscordIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon external href="https://twitter.com/swapgravy">
            <TwitterIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon external href="https://instagram.com/swapgravy">
            <InstagramIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon external href="https://t.me/+XuejWFLwO0NkZDUx">
            <TelegramIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon external href="https://github.com/GravySwap">
            <GithubIcon fill="#884024" width={11} />
          </WrapIcon>
        </SocialIconsContainer>
        <Button
          maxWidth={200}
          as="a"
          href="/swap?outputCurrency=0x5eA26D0d36EAF02d63a3023521A7924e19c34454"
          target="_blank"
          scale="sm"
          endIcon={<ArrowForwardIcon color={theme.colors.backgroundAlt} />}
        >
          Buy GRAVY
        </Button>
      </EndContainer>
    </Container>
  )
}

export default Footer
