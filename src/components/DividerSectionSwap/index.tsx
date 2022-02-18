// region import
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import DividerSection from 'components/DividerSection'
import { Heading, Button } from '@gravyswap/uikit'
// endregion

const StyledHeading = styled(Heading)`
  display: inline;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DescriptionContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DividerSectionSwap: React.FC = () => {
  const { t } = useTranslation()
  return (
    <DividerSection color="white">
      <InformationContainer>
        <HeadingContainer>
          <div>
            <StyledHeading black scale="xl" color="secondary">
              Say hello to{' '}
            </StyledHeading>
            <StyledHeading black scale="xl" color="primary">
              infinite trading
            </StyledHeading>
          </div>
        </HeadingContainer>

        <DescriptionContainer>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t('Say goodbye to registrations, hassles and KYC.')}
          </Heading>
        </DescriptionContainer>
        <Link to="/swap">
          <Button variant="primary">{t('Trade Now')}</Button>
        </Link>
      </InformationContainer>
      <img src="/images/coins.png" alt="Swap coins" />
    </DividerSection>
  )
}

export default DividerSectionSwap
