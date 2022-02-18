import React from 'react'
import styled from 'styled-components'

interface DividerSectionProps {
  color: string
}

const MainContainer = styled.div`
  min-height: 850px;
  background-color: ${({ color }) => color};
  padding: 200px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const DividerSection: React.FC<DividerSectionProps> = ({ children, color }) => {
  return <MainContainer color={color}>{children}</MainContainer>
}

export default DividerSection
