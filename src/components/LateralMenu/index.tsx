// region import
import React, { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// components
import { CloseIcon, HomeIcon, ChartIcon, SwapIcon, ArrowDropDownIcon, ArrowDropUpIcon } from '@gravyswap/uikit'
// endregion

const Container = styled.div<{ open: boolean }>`
  position: fixed;

  overflow: auto;
  transition: left ease 0.5s;
  background-color: white;
  height: 100%;
  z-index: 1005;
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

const SubmenuTab = styled.div`
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

const SubmenuContainer = styled.div<{ open: boolean }>`
  background-color: ${(props) => props.open && 'rgba(0,0,0,0.05)'};
`

const SubmenuContent = styled.div<{ open: boolean; maxHeight: string }>`
  overflow: hidden;
  max-height: ${(props) => (!props.open ? '0' : props.maxHeight)};
  transition: max-height 0.25s ease-in;
`

const MaterialIcon = styled.span`
  color: #441f95;
`

const TextSup = styled.sup`
  vertical-align: super;
  font-size: 12px;
  color: mediumvioletred;
  margin-left: 5px;
`

function Submenu(props: PropsWithChildren<{ TabContent: any; maxHeight: string }>) {
  const [open, setOpen] = useState(false)
  const { children, TabContent, maxHeight } = props
  return (
    <SubmenuContainer open={open}>
      <SubmenuTab onClick={() => setOpen(!open)}>
        {TabContent}
        {open && <ArrowDropUpIcon marginLeft="auto" width={24} />}
        {!open && <ArrowDropDownIcon marginLeft="auto" width={24} />}
      </SubmenuTab>
      <SubmenuContent maxHeight={maxHeight} open={open}>
        {children}
      </SubmenuContent>
    </SubmenuContainer>
  )
}

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
        <Submenu
          maxHeight="200px"
          TabContent={
            <>
              <MaterialIcon className="material-icons-outlined">published_with_changes</MaterialIcon>
              <TextTab>Swap</TextTab>
            </>
          }
        >
          <Tab to="/swap">
            <MaterialIcon className="material-icons-outlined">swap_horiz</MaterialIcon>
            <TextTab>Exchange</TextTab>
          </Tab>
          <Tab to="/liquidity">
            <MaterialIcon className="material-icons-outlined">group_add</MaterialIcon>
            <TextTab>Liquidity</TextTab>
          </Tab>
        </Submenu>
        <Tab to="/farms">
          <MaterialIcon className="material-icons-outlined">agriculture</MaterialIcon>
          <TextTab>Farms</TextTab>
        </Tab>
        <Tab to="/pools">
          <MaterialIcon className="material-icons-outlined">savings</MaterialIcon>
          <TextTab>Pools</TextTab>
        </Tab>
        <Submenu
          maxHeight="250px"
          TabContent={
            <>
              <MaterialIcon className="material-icons-outlined">rocket_launch</MaterialIcon>
              <TextTab>Games</TextTab>
            </>
          }
        >
          <Tab to="/lottery">
            <MaterialIcon className="material-icons-outlined">local_activity</MaterialIcon>
            <TextTab>Lottery</TextTab>
          </Tab>
          <Tab to="#">
            <MaterialIcon className="material-icons-outlined">emoji_events</MaterialIcon>
            <TextTab>
              Horse Races
              <TextSup>soon</TextSup>
            </TextTab>
          </Tab>
          <Tab to="#">
            <MaterialIcon className="material-icons-outlined">app_registration</MaterialIcon>
            <TextTab>
              Bingo
              <TextSup>soon</TextSup>
            </TextTab>
          </Tab>
        </Submenu>
        <Tab to="/nfts">
          <MaterialIcon className="material-icons-outlined">wallpaper</MaterialIcon>
          <TextTab>NFT</TextTab>
        </Tab>

        <Submenu
          maxHeight="250px"
          TabContent={
            <>
              <MaterialIcon className="material-icons-outlined">more_horiz</MaterialIcon>
              <TextTab>More</TextTab>
            </>
          }
        >
          <Tab to="/info">
            <ChartIcon width={24} />
            <TextTab>Stats</TextTab>
          </Tab>
          <Tab to="/ifo">
            <MaterialIcon className="material-icons-outlined">local_offer</MaterialIcon>
            <TextTab>IFO</TextTab>
          </Tab>
          <Tab to="/voting">
            <MaterialIcon className="material-icons-outlined">how_to_vote</MaterialIcon>
            <TextTab>Voting</TextTab>
          </Tab>
        </Submenu>
      </TabContainer>
    </Container>
  )
}

export default LateralMenu
