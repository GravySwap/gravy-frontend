// region import
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import DividerSection from 'components/DividerSection'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Heading, Button } from '@gravyswap/uikit'
// endregion

const StyledHeading = styled(Heading)`
  display: inline;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
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
`

const StyledImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`

const Divider = styled.div`
  position: relative;

  min-height: 500px;
  background-color: #faebc1;
  padding: 200px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const DividerSectionStart: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Divider>
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
        <Link to="/farms">
          <Button variant="primary">{t('Start earning')}</Button>
        </Link>
      </InformationContainer>
      <StyledImg src="/images/gravy_conductor.png" alt="Gravy support" />
    </Divider>
  )
}

export default DividerSectionStart
