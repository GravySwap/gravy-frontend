import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  size?: number
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const Container = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`

const LoaderImage: React.FC<Props> = ({ size }) => (
  <Container>
    <Img
      style={{
        ...(size ? { height: size, width: size } : null),
      }}
      src="/images/loading.png"
      alt="Gravy loader"
    />
  </Container>
)

export default LoaderImage
