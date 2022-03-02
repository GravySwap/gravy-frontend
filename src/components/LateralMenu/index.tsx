// region import
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

// components
import { HomeIcon, ChartIcon, ArrowDropDownIcon, ArrowDropUpIcon } from '@gravyswap/uikit'

// styles
import {
  SubmenuContainer,
  StyledCloseIcon,
  SubmenuContent,
  SubmenuTab,
  Container,
  RemoveContainer,
  Tab,
  TabContainer,
  TextSup,
  TextTab,
  MaterialIcon,
} from './style'
// endregion

function Submenu(props: PropsWithChildren<{ TabContent: any; maxHeight: string }>) {
  const [open, setOpen] = useState(false)
  const { children, TabContent, maxHeight } = props
  return (
    <SubmenuContainer open={open}>
      <SubmenuTab onClick={() => setOpen(!open)}>
        {TabContent}
        <ArrowDropUpIcon display={open ? 'block' : 'none'} marginLeft="auto" width={24} />
        <ArrowDropDownIcon display={open ? 'none' : 'block'} marginLeft="auto" width={24} />
      </SubmenuTab>
      <SubmenuContent maxHeight={maxHeight} open={open}>
        {children}
      </SubmenuContent>
    </SubmenuContainer>
  )
}

const LateralMenu: React.FC<{ open: boolean; onClose?: (value: boolean) => void }> = (props) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { open, onClose } = props

  useEffect(() => {
    if (open) {
      const listener = (e: MouseEvent) => {
        if (refContainer.current && e.target instanceof Node) {
          if (!refContainer.current.contains(e.target)) {
            onClose(false)
          }
        }
      }
      window.addEventListener('click', listener)
      return () => window.removeEventListener('click', listener)
    }

    return () => null
  }, [open, onClose])

  return (
    <Container ref={refContainer} open={open}>
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
          <Tab to="#">
            <MaterialIcon className="material-icons-outlined">local_offer</MaterialIcon>
            <TextTab>
              IFO
              <TextSup>soon</TextSup>
            </TextTab>
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
