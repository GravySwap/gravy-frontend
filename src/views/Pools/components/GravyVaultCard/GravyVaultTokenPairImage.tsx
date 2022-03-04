import React from 'react'
import { TokenPairImage, ImageProps } from '@gravyswap/uikit'
import { mainnetTokens } from 'config/constants/tokens'

const GravyVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.gravy.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default GravyVaultTokenPairImage
