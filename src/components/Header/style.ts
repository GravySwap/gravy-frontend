import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Pinned = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  width: 100%;
  z-index: 100;

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 0 24px;
`

export const LateralSpacing = styled.div`
  padding: 0 24px;
`

export const Container = styled.div`
  max-width: 1350px;

  display: flex;
  align-items: center;
  min-height: 147px;
  justify-content: space-between;

  margin: auto;
  /* padding: 0 24px; */
  flex-direction: row-reverse;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
  }

  ${(props) => props.theme.mediaQueries.xxl} {
    justify-content: flex-start;
  }
`

export const Svg = styled.svg`
  z-index: 1;
  cursor: pointer;

  &:active {
    opacity: 0.75;
  }
`

export const UserMenuContainer = styled.div`
  margin-left: auto;
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
  }
`

export const LinkLogo = styled(Link)`
  ${({ theme }) => theme.mediaQueries.sm} {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.9;
  }
`
