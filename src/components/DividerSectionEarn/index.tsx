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
  max-width: 500px;
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

const DividerSectionEarn: React.FC = () => {
  const { t } = useTranslation()
  return (
    <DividerSection color="#EAF1F6">
      <img src="/images/gravy_earns.png" alt="Swap coins" />
      <InformationContainer>
        <HeadingContainer>
          <div>
            <StyledHeading black scale="xl" color="secondary">
              Hop on the Gravy Train and earn{' '}
            </StyledHeading>
            <StyledHeading black scale="xl" color="primary">
              passive income{' '}
            </StyledHeading>
            <StyledHeading black scale="xl" color="secondary">
              today.
            </StyledHeading>
          </div>
        </HeadingContainer>

        <DescriptionContainer>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t('With GravySwap, its easy to put your crypto to work today and earn for tomorrow.')}
          </Heading>
        </DescriptionContainer>
        <Link to="/farms">
          <Button variant="primary">{t('Start earning')}</Button>
        </Link>
      </InformationContainer>
    </DividerSection>
  )
}

export default DividerSectionEarn
