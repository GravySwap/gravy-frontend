// region import
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import { CloseIcon, HomeIcon, FarmIcon, PoolIcon, ChartIcon, SwapIcon, CommunityIcon } from '@gravyswap/uikit'
// endregion

const Container = styled.div<{ open: boolean }>`
  position: fixed;

  transition: left ease 0.5s;
  background-color: white;
  height: 100%;
  z-index: 10;
  top: 0;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 20%);

  width: 100%;
  left: ${(props) => (props.open ? '0' : '-100%')};

  ${(props) => props.theme.mediaQueries.md} {
    width: 350px;
    left: ${(props) => (props.open ? '0' : '-350px')};
  }
`

const RemoveContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 75px 25px;
`

const Tab = styled(Link)`
  display: flex;
  align-items: center;
  padding: 25px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    opacity: 0.75;
  }
`

const TextTab = styled.div`
  margin-left: 15px;
`

const TabContainer = styled.div`
  /* padding: 0 25px; */
`

const StyledCloseIcon = styled(CloseIcon)`
  border-radius: 100%;
  width: 48px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    opacity: 0.75;
  }
`

const LateralMenu: React.FC<{ open: boolean; onClose?: (value: boolean) => void }> = (props) => {
  const { open, onClose } = props
  return (
    <Container open={open}>
      <RemoveContainer>
        <StyledCloseIcon onClick={() => onClose(false)} />
      </RemoveContainer>
      <TabContainer>
        <Tab to="/">
          <HomeIcon width={24} />
          <TextTab>Home</TextTab>
        </Tab>
        <Tab to="/swap">
          <SwapIcon width={24} />
          <TextTab>Swap</TextTab>
        </Tab>
        <Tab to="/farms">
          <FarmIcon width={24} />
          <TextTab>Farms</TextTab>
        </Tab>
        <Tab to="/liquidity">
          <CommunityIcon width={24} />
          <TextTab>Liquidity</TextTab>
        </Tab>
        <Tab to="/pools">
          <PoolIcon width={24} />
          <TextTab>Pools</TextTab>
        </Tab>
        <Tab to="/info">
          <ChartIcon width={24} />
          <TextTab>Info</TextTab>
        </Tab>
      </TabContainer>
    </Container>
  )
}

export default LateralMenu
