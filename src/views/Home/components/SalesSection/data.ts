import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gravyswap.com/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'GRAVY', alt: 'GRAVY token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'GravySwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gravyswap.com/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
    ],
  },
}

export const gravySectionData: SalesSectionProps = {
  headingText: 'GRAVY makes our world go round.',
  bodyText:
    'GRAVY token is at the heart of the GravySwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x5eA26D0d36EAF02d63a3023521A7924e19c34454',
    text: 'Buy GRAVY',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.gravyswap.com/tokenomics/gravy',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/gravy/',
    attributes: [{ src: 'coin', alt: 'GRAVY token' }],
  },
}
