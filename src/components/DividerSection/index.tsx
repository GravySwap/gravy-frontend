import React from 'react'
import styled from 'styled-components'

interface DividerSectionProps {
  color: string
}

const MainContainer = styled.div`
  position: relative;

  min-height: 850px;
  background-color: ${({ color }) => color};
  padding: 200px 50px;
`

const Content = styled.div`
  display: grid;
  gap: 75px;

  justify-items: center;
  max-width: 1350px;
  margin: auto;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    gap: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`

const DividerSection: React.FC<DividerSectionProps> = ({ children, color }) => {
  return (
    <MainContainer color={color}>
      <Content>{children}</Content>
    </MainContainer>
  )
}

export default DividerSection
