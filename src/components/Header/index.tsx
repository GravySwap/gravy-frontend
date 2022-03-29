// region import
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'

// components
import { LogoWithTextIcon } from '@gravyswap/uikit'
import LateralMenu from 'components/LateralMenu'
import UserMenu from 'components/Menu/UserMenu'
import ConnectWalletButton from 'components/ConnectWalletButton'

// styles
import { Container, Svg, LinkLogo, UserMenuContainer, Pinned, LateralSpacing } from './style'
// endregion

const Header: React.FC = () => {
  const [pinned, setPinned] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { account } = useWeb3React()

  useEffect(() => {
    const setScrollPinned = () => {
      if (document.documentElement.scrollTop > 150) {
        if (!pinned) {
          setPinned(true)
        }
      } else if (pinned) {
        setPinned(false)
      }
    }
    window.addEventListener('scroll', setScrollPinned)
    return () => window.removeEventListener('scroll', setScrollPinned)
  }, [pinned])

  if (location.pathname !== '/' || pinned) {
    return (
      <>
        {pinned && (
          <Pinned>
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
          </Pinned>
        )}
        <LateralSpacing>
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
        </LateralSpacing>
      </>
    )
  }
  return null
}

export default Header
