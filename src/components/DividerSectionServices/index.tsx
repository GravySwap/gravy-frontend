// region import
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Heading, LogoIcon } from '@gravyswap/uikit'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import DividerSection from 'components/DividerSection'
// endregion

const StyledHeading = styled(Heading)`
  display: inline;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DescriptionContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Card = styled.div`
  background-color: ${(props) => props.color};
  min-width: 368px;
  min-height: 304px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 24px;

  font-weight: 900;
  font-size: 25px;
  color: white;
`

const DividerSectionServices: React.FC = () => {
  const { colors } = useTheme()
  const { t } = useTranslation()
  return (
    <DividerSection color="#F1E7EB">
      <ColumnContainer>
        <HeadingContainer>
          <LogoIcon marginRight={25} width={55} />
          <div>
            <StyledHeading black scale="xl" color="secondary">
              Pour some{' '}
            </StyledHeading>
            <StyledHeading black scale="xl" color="primary">
              GRAVY
            </StyledHeading>
            <StyledHeading black scale="xl" color="secondary">
              {' '}
              on it!
            </StyledHeading>
          </div>
        </HeadingContainer>
        <DescriptionContainer>
          <Heading maxWidth={640} scale="md" mb="38px">
            {t(
              'GravySwap is building out the most comprehensive DeFi gaming suite, ever. Put your skills to the test today and win some GRAVY.',
            )}
          </Heading>
        </DescriptionContainer>

        <CardsContainer>
          <Card color={colors.secondary}>{t('Lotto')}</Card>
          <Card color={colors.secondary}>{t('Hourse Races')}</Card>
          <Card color={colors.secondary}>{t('B-I-N-G-O')}</Card>
        </CardsContainer>
      </ColumnContainer>
    </DividerSection>
  )
}

export default DividerSectionServices
