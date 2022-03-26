import React from 'react'
import styled from 'styled-components'
import LoaderImage from 'components/LoaderImage'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <LoaderImage />
      </Container>
    </Wrapper>
  )
}

export default PageLoader
