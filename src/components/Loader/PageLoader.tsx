import React from 'react'
import styled, { keyframes } from 'styled-components'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const Container = styled.div`
  position: relative;
  width: 115px;
  height: 120px;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LoaderImg src="/images/loading.png" alt="Gravy loader" />
      </Container>
    </Wrapper>
  )
}

export default PageLoader
