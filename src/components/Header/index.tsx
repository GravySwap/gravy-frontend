// region import
import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'

// components
import { LogoWithTextIcon } from '@gravyswap/uikit'
import LateralMenu from 'components/LateralMenu'
import UserMenu from 'components/Menu/UserMenu'
import ConnectWalletButton from 'components/ConnectWalletButton'
// endregion

const Container = styled.div`
  max-width: 1350px;

  display: flex;
  align-items: center;
  min-height: 147px;
  justify-content: space-between;

  margin: auto;
  padding: 0 24px;
  flex-direction: row-reverse;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
  }

  ${(props) => props.theme.mediaQueries.xxl} {
    justify-content: flex-start;
  }
`

const Svg = styled.svg`
  z-index: 1;
  cursor: pointer;

  &:active {
    opacity: 0.75;
  }
`

const UserMenuContainer = styled.div`
  margin-left: auto;
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const LinkLogo = styled(Link)`
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

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { account } = useWeb3React()

  if (location.pathname === '/') return null
  return (
    <Container>
      <LateralMenu onClose={setMenuOpen} open={menuOpen} />
      <Svg
        onClick={() => setMenuOpen(true)}
        width={40}
        height={21}
        viewBox="0 0 40 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#000">
          <rect transform="matrix(-1 0 0 1 40 0)" width={40} height={3} rx={1.5} />
          <rect transform="matrix(-1 0 0 1 31 0)" y={9} width={31} height={3} rx={1.5} />
          <rect transform="matrix(-1 0 0 1 40 0)" y={18} width={40} height={3} rx={1.5} />
        </g>
      </Svg>
      <LinkLogo to="/">
        <LogoWithTextIcon isDark={false} />
      </LinkLogo>
      <UserMenuContainer>
        {!account && <ConnectWalletButton />}
        {account && <UserMenu />}
      </UserMenuContainer>
    </Container>
  )
}

export default Header
