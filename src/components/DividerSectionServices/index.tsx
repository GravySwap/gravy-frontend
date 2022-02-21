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
  justify-content: center;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaQueries.xl} {
    justify-content: space-between;
  }
`

const Card = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  min-height: 304px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;

  border-radius: 24px;

  font-weight: 900;
  font-size: 25px;
  color: white;

  text-align: center;

  ${(props) => props.theme.mediaQueries.sm} {
    width: auto;
    min-width: 368px;
    margin: 25px;
  }

  ${(props) => props.theme.mediaQueries.xl} {
    margin: 0;
    margin-bottom: 25px;
  }
`

const ComingSoon = styled.div`
  color: #e2534d;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 7px;
`

const ContainerTextCard = styled.div`
  margin-bottom: 50px;
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
          <Card color={colors.secondary}>
            <ContainerTextCard>{t('Lotto')}</ContainerTextCard>
            <svg width="76" height="80" viewBox="0 0 76 80" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.77 0c-4.906 0-11.778 3.017-11.778 9.654 0 9.063 6.402 16.919 10.64 22.144 1.014 1.256 2.195 2.755 2.87 3.782-1.064-.454-2.574-1.282-3.96-2.04-5.04-2.768-11.944-6.569-19.15-6.569-1.534 0-5.314.305-7.67 3.284-1.683 2.128-2.14 4.964-1.336 8.46.6 2.606 1.503 4.111 2.177 5.175.371.578.656.989.742 1.393.093.448.025 1.325-.05 2.29-.135 1.766-.346 4.217.199 6.817.903 4.292 4.15 9.305 10.342 9.305.798 0 1.676-.124 2.524-.298 7.014-1.419 12.507-8.335 16.528-13.386a76.91 76.91 0 0 1 3.068-3.633c-1.175 8.84-.897 20.216 5.048 30.007l.148.248c1.132 1.904 3.248 2.986 5.79 2.986 1.88 0 4.25-.678 5.048-2.14.39-.715.377-1.511-.05-2.19a2.003 2.003 0 0 0-.297-.348c-7.59-6.786-9.829-17.118-11.629-29.857 2.048 1.02 4.46 3.372 6.978 5.822 3.927 3.826 8.418 8.18 13.757 10.003a9.281 9.281 0 0 0 3.018.497c4.3 0 8.165-3.004 9.007-7.016.55-2.613.334-4.796.197-6.37-.074-.864-.092-1.598 0-2.04.087-.423.334-.87.693-1.493.644-1.12 1.528-2.65 2.079-5.275.606-2.898.426-6.991-1.88-9.852-1.145-1.419-3.329-3.135-7.226-3.135-7.2 0-14.115 4.043-19.15 6.966-1.225.71-2.599 1.53-3.663 2.04.73-1.169 1.893-2.786 2.92-4.18 4.435-6.02 10.491-14.294 10.491-22.193C57.195 3.72 52.259 0 45.417 0c-2.647 0-4.354.46-5.591.796-1.386.373-2.066.38-3.464 0C35.124.46 33.417 0 30.77 0Z"
                fill="#FFF"
              />
            </svg>
          </Card>
          <Card color={colors.secondary}>
            <ContainerTextCard>
              {t('Horse Races')}
              <ComingSoon>{t('Coming soon')}</ComingSoon>
            </ContainerTextCard>
            <svg width="76" height="83" viewBox="0 0 76 83" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M66.632 73.575H64.85a334.342 334.342 0 0 1 1.608-3.665C70.254 61.296 76 48.278 76 38.18 76 17.124 58.956 0 38 0S0 17.124 0 38.179c0 10.1 5.746 23.117 9.548 31.731.588 1.337 1.137 2.57 1.602 3.665H9.368a3.525 3.525 0 0 0-3.519 3.529v2.36A3.527 3.527 0 0 0 9.368 83h11.498a3.527 3.527 0 0 0 3.518-3.535v-3.957a1.31 1.31 0 0 0-.02-.233l-.077-.539a1.202 1.202 0 0 0-.051-.246c-.607-1.991-5.953-19.946-5.953-36.311 0-11.695 10.194-19.557 19.717-19.557 9.523 0 19.717 7.862 19.717 19.557 0 16.359-5.34 34.32-5.953 36.31a1.155 1.155 0 0 0-.051.26l-.078.513c-.013.084-.02.162-.02.24v3.963A3.527 3.527 0 0 0 55.136 83h11.497a3.527 3.527 0 0 0 3.519-3.535v-2.361a3.525 3.525 0 0 0-3.519-3.529ZM7.263 46.105c-.484-2.503-.73-4.76-.73-6.713 0-1.161.071-2.31.194-3.444l3.034.343a27.468 27.468 0 0 0-.174 3.1c0 1.759.226 3.821.672 6.13l-2.996.584Zm4.248 14.004s-.73-1.75-1.627-4.39l2.886-1c.859 2.517 1.55 4.184 1.562 4.21l-2.821 1.18Zm.762-32.665-2.763-1.31a32.313 32.313 0 0 1 5.726-8.407l2.221 2.102a29.243 29.243 0 0 0-5.184 7.615Zm12.46-13.226-1.446-2.692a30.76 30.76 0 0 1 9.606-3.32l.504 3.022a28.069 28.069 0 0 0-8.664 2.99Zm26.482-.026a27.751 27.751 0 0 0-8.664-2.97l.498-3.03a30.87 30.87 0 0 1 9.613 3.302l-1.447 2.698Zm18.252 25.2c0 1.926-.246 4.164-.717 6.648l-3.002-.577c.445-2.296.665-4.34.665-6.071 0-1.064-.065-2.121-.18-3.165l3.027-.344a30.12 30.12 0 0 1 .207 3.509Zm-8.748-21.717a32.349 32.349 0 0 1 5.745 8.4l-2.763 1.317a28.958 28.958 0 0 0-5.197-7.602l2.215-2.115Zm.949 41.26c.013-.025.703-1.699 1.562-4.216l2.886 1a73.276 73.276 0 0 1-1.633 4.397l-2.815-1.18Z"
                fill="#FFF"
              />
            </svg>
          </Card>
          <Card color={colors.secondary}>
            <ContainerTextCard>
              {t('B-I-N-G-O')}
              <ComingSoon>{t('Comming soon')}</ComingSoon>
            </ContainerTextCard>
            <svg width="76" height="84" viewBox="0 0 76 84" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M37.97 0a1.91 1.91 0 0 0-1.87 1.932v9.509a1.913 1.913 0 0 0 .943 1.671 1.916 1.916 0 0 0 1.914 0c.594-.349.95-.988.943-1.671V1.93A1.905 1.905 0 0 0 37.97 0ZM11.304 13.328a1.89 1.89 0 0 0-1.745 1.352 1.888 1.888 0 0 0 .705 2.087l7.6 5.706a1.89 1.89 0 0 0 2.657-.386c.631-.84.46-2.029-.385-2.66l-7.6-5.705a1.843 1.843 0 0 0-1.232-.394Zm53.34 0a1.868 1.868 0 0 0-1.18.394l-7.6 5.705a1.894 1.894 0 0 0-.385 2.66 1.89 1.89 0 0 0 2.657.386l7.6-5.706a1.905 1.905 0 0 0 .697-2.117 1.904 1.904 0 0 0-1.788-1.322ZM38 17.146c-5.7 0-10.257 1.902-11.4 5.706-.475 1.434-2.969 15.638-3.89 20.92H3.8A3.81 3.81 0 0 0 0 47.576v32.33a3.81 3.81 0 0 0 3.8 3.804h68.4a3.81 3.81 0 0 0 3.8-3.804v-32.33a3.81 3.81 0 0 0-3.8-3.804H53.319c-.869-5.163-3.132-18.55-3.919-20.92-1.143-3.804-5.7-5.706-11.4-5.706Zm0 3.804c3.229 0 7.029.758 7.786 3.038.571 1.523 2.285 11.605 3.614 19.784H26.6c1.521-8.365 3.229-18.64 3.614-19.784.565-1.901 3.607-3.038 7.786-3.038ZM5.7 36.165a1.91 1.91 0 0 0-1.67.943 1.921 1.921 0 0 0 0 1.917c.349.594.987.95 1.67.943h9.5a1.91 1.91 0 0 0 1.67-.943 1.921 1.921 0 0 0 0-1.917 1.91 1.91 0 0 0-1.67-.943H5.7Zm55.1 0a1.91 1.91 0 0 0-1.67.943 1.921 1.921 0 0 0 0 1.917c.349.594.987.95 1.67.943h9.5a1.91 1.91 0 0 0 1.67-.943 1.921 1.921 0 0 0 0-1.917 1.91 1.91 0 0 0-1.67-.943h-9.5ZM9.5 53.28h3.8s3.421 14.07 3.8 16.165c.379-2.28 3.8-16.165 3.8-16.165h3.8s3.421 13.692 3.8 15.787c.379-2.281 3.8-15.787 3.8-15.787h3.8L30.4 74.2h-3.8s-3.607-14.264-3.8-16.544C22.421 59.937 19 74.2 19 74.2h-3.8L9.5 53.28Zm28.5 0h3.8V74.2H38V53.28Zm7.6 0h4.371s7.6 13.313 8.929 15.215V53.28h3.8V74.2h-3.986S51.68 62.791 49.4 58.986v15.215h-3.8v-20.92Z"
                fill="#FFF"
              />
            </svg>
          </Card>
        </CardsContainer>
      </ColumnContainer>
    </DividerSection>
  )
}

export default DividerSectionServices
