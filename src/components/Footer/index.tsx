// region import
import React from 'react'
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

const ElementSection = styled.div`
  font-weight: 800;
  margin-bottom: 15px;
`
const LineSeparator = styled.div`
  background-color: #348183;
  width: 100%;
  height: 6px;
  opacity: 16%;

  margin: 25px 0;
`

const WrapIcon = styled.div`
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
            <ElementSection>Contact</ElementSection>
            <ElementSection>Brand kit</ElementSection>
            <ElementSection>Blog</ElementSection>
            <ElementSection>Community</ElementSection>
          </Section>

          <Section>
            <TitleSection>Help</TitleSection>
            <ElementSection>Customer Support</ElementSection>
            <ElementSection>Troubleshooting</ElementSection>
            <ElementSection>Guides</ElementSection>
          </Section>

          <Section>
            <TitleSection>Developers</TitleSection>
            <ElementSection>Github</ElementSection>
            <ElementSection>Documentation</ElementSection>
            <ElementSection>Bug Bounty</ElementSection>
            <ElementSection>Audits</ElementSection>
            <ElementSection>Careers</ElementSection>
          </Section>
        </InfoElements>
      </SectionsContainer>

      <LineSeparator />

      <EndContainer>
        <SocialIconsContainer>
          <WrapIcon>
            <DiscordIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon>
            <RedditIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon>
            <TwitterIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon>
            <InstagramIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon>
            <TelegramIcon fill="#884024" width={11} />
          </WrapIcon>
          <WrapIcon>
            <GithubIcon fill="#884024" width={11} />
          </WrapIcon>
        </SocialIconsContainer>
        <Button
          maxWidth={200}
          as="a"
          href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
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
