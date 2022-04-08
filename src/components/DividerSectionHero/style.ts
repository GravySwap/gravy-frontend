import styled from 'styled-components'
import { LogoWithTextIcon, Heading } from '@gravyswap/uikit'

export const StyledHeading = styled(Heading)`
  display: inline;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const DescriptionContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

export const InformationContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-top: 250px;
  margin-bottom: 100px;
`

export const HeroIconRightContainer = styled.svg`
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

export const HeroIconLeftContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 125%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 90%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 39%;
  }
`

export const LogoWhite = styled(LogoWithTextIcon)`
  display: none;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.9;
  }
`

export const LogoDark = styled(LogoWithTextIcon)`
  z-index: 1;

  ${(props) => props.theme.mediaQueries.sm} {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`

export const UserMenuContainer = styled.div`
  margin-left: auto;
  z-index: 1;
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
  }
`

export const Buttons = styled.div`
  display: flex;
`

export const ButtonWallet = styled.div`
  margin-right: 20px;
`

export const Img = styled.img`
  width: 800px;
  z-index: 0;

  ${(props) => props.theme.mediaQueries.xl} {
    padding-top: 150px;
  }
`

export const Head = styled.div`
  max-width: 1350px;

  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  flex-direction: row-reverse;

  ${(props) => props.theme.mediaQueries.sm} {
    justify-content: flex-start;
    flex-direction: row;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 1350px;

  ${(props) => props.theme.mediaQueries.xl} {
    flex-direction: row;
  }
`

export const Container = styled.div`
  z-index: 2;
`

export const MainContainer = styled.div`
  overflow: hidden;
  min-height: 1080px;
  background-color: white;
  padding: 50px 20px 250px 20px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 50px;
  }
`

export const Svg = styled.svg`
  z-index: 1;
  cursor: pointer;

  &:active {
    opacity: 0.75;
  }
`
