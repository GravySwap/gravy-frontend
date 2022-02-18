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
  flex-direction: column;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DividerSectionGravy: React.FC = () => {
  const { t } = useTranslation()
  return (
    <DividerSection color="white">
      <InformationContainer>
        <HeadingContainer>
          <div>
            <StyledHeading black scale="xl" color="secondary">
              Everything tastes better with{' '}
            </StyledHeading>
            <StyledHeading black scale="xl" color="primary">
              GRAVY
            </StyledHeading>
            <StyledHeading black scale="xl" color="secondary">
              .
            </StyledHeading>
          </div>
        </HeadingContainer>

        <DescriptionContainer>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t('GRAVY token is the life force of the GravySwap ecosystem.')}
          </Heading>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t(
              'Pour it, collect it, spend it, send it, stake it, buy it, win it… you might not be able to taste it, but you sure can vote with it.',
            )}
          </Heading>
        </DescriptionContainer>
        <Link to="/farms">
          <Button variant="primary">{t('Start earning')}</Button>
        </Link>
      </InformationContainer>
      <img src="/images/gravy.png" alt="Swap coins" />
    </DividerSection>
  )
}

export default DividerSectionGravy
