import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CloseIcon } from '@gravyswap/uikit'

export const Container = styled.div<{ open: boolean }>`
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

export const RemoveContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 75px 25px;
`

export const Tab = styled(Link)`
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

export const TextTab = styled.div`
  margin-left: 15px;
`

export const TabContainer = styled.div`
  /* padding: 0 25px; */
`

export const StyledCloseIcon = styled(CloseIcon)`
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

export const SubmenuTab = styled.div`
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

export const SubmenuContainer = styled.div<{ open: boolean }>`
  background-color: ${(props) => props.open && 'rgba(0,0,0,0.05)'};
`

export const SubmenuContent = styled.div<{ open: boolean; maxHeight: string }>`
  overflow: hidden;
  max-height: ${(props) => (!props.open ? '0' : props.maxHeight)};
  transition: max-height 0.25s ease-in;
`

export const MaterialIcon = styled.span`
  color: #441f95;
`

export const TextSup = styled.sup`
  vertical-align: super;
  font-size: 12px;
  color: mediumvioletred;
  margin-left: 5px;
`
