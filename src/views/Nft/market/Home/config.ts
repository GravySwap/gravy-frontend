import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('Are there any fees to sell my NFTs on GravySwap?'),
      description: [
        t(
          'The fee to use the GravySwap NFT Marketplace is 2% of sales price. Creators also set their own fees on initial sales as well as royalties on revolving sales',
        ),
        t(
          'All platform fees go towards the GravySwap Treasury to be allocated to either burns or additional prizes in the lotteries!',
        ),
      ],
    },
    {
      title: t('Am I able to trade other NFT collection?'),
      description: [
        t(
          'Currently, GravySwap NFTs are the only ones able to be traded at this time. Once we roll out our next phase then you’ll be able to see the collections that we onboard and an announcement will be made to our community',
        ),
      ],
    },
    {
      title: t('How do I list an NFT collection on GravySwap market?'),
      description: [
        t(
          "Please apply here to be considered for listing on our NFT marketplace. Our goal is to keep the marketplace free of bad actors and enhance our users' experience by giving the best projects the opportunity to list their collections.",
        ),
      ],
    },
    {
      title: t('If I sell an NFT, how do I find my sales proceeds?'),
      description: [
        t(
          'Sales on the GravySwap NFT marketplace are made in WBNB, which stands for wrapped BNB. WBNB is the same price as BNB and will show up in your wallet where you can then swap for BNB.',
        ),
      ],
    },
  ]
}

export default config
