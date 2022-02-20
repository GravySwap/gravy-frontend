// region import
import React from 'react'
import styled from 'styled-components'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Heading } from '@gravyswap/uikit'
// endregion

const StyledHeading = styled(Heading)`
  display: inline;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  text-align: center;
`

const DescriptionContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
  margin: auto;
`

const StyledImg = styled.img`
  position: absolute;
  right: -100px;
  bottom: -100px;
  width: 100px;
  margin-left: auto;

  ${(props) => props.theme.mediaQueries.md} {
    width: 200px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    width: auto;
    bottom: auto;
  }
`

const Divider = styled.div`
  position: relative;

  min-height: 500px;
  background-color: #faebc1;
  padding: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  position: relative;

  max-width: 1350px;

  display: flex;
  flex-direction: column;
  width: 100%;
`

const DividerSectionStart: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Divider>
      <Content>
        <InformationContainer>
          <HeadingContainer>
            <div>
              <StyledHeading black scale="xl" color="secondary">
                Start in{' '}
              </StyledHeading>
              <StyledHeading black scale="xl" color="primary">
                seconds
              </StyledHeading>
              <StyledHeading black scale="xl" color="secondary">
                .
              </StyledHeading>
            </div>
          </HeadingContainer>

          <DescriptionContainer>
            <Heading maxWidth={640} scale="md" mb="38px">
              {t('Connect your crypto wallet to start using the app in seconds. No registration needed.')}
            </Heading>
          </DescriptionContainer>
          <ConnectWalletButton />
        </InformationContainer>
        <StyledImg src="/images/gravy_conductor.png" alt="Gravy support" />
      </Content>
    </Divider>
  )
}

export default DividerSectionStart
