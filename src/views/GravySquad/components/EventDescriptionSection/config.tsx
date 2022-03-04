import React from 'react'
import { Text } from '@gravyswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { Link } from 'react-router-dom'

type EventDescriptionType = {
  t: ContextApi['t']
}

const eventDescriptionConfigBuilder = ({ t }: EventDescriptionType) => ({
  headingText: t('Fair, Random, Rare'),
  subHeadingText: t(
    'All Gravy Squad NFTs are allocated to Squad Ticket holders through a provably-fair system based on ChainLink at the time of minting.',
  ),
  bodyTextHeader: t('Out of the 10,000 total NFTs in the squad,'),
  bodyText: [
    {
      id: 1,
      content: (
        <>{t('490 are available in the pre-sale for owners of Gen 0 Gravy Bunnies (bunnyID 0, 1, 2, 3, 4)')}</>
      ),
    },
    { id: 2, content: t('120 are reserved by the team for community giveaways, etc;') },
    {
      id: 3,
      content: (
        <>
          {t('and the remaining NFTs can be minted by anyone with a ')}
          <Link to="/profile">
            <Text display="inline-block" color="primary" bold>
              {t('Gravy Profile!')}
            </Text>
          </Link>
        </>
      ),
    },
  ],
  primaryButton: {
    to: 'https://docs.gravyswap.com/',
    text: t('View Documentation'),
    external: true,
    isDisplayed: false,
  },
  image: { src: '/images/gravySquad/moonBunny/body.png', alt: 'moon bunny' },
  accessoriesImages: [
    { src: '/images/gravySquad/moonBunny/band.png', alt: 'headband' },
    { src: '/images/gravySquad/moonBunny/cloth.png', alt: 'cloth' },
    { src: '/images/gravySquad/moonBunny/glasses.png', alt: 'glasses' },
    { src: '/images/gravySquad/moonBunny/gravy.png', alt: 'gravy' },
  ],
})

export default eventDescriptionConfigBuilder
