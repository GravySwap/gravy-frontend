import React from 'react'
import { useParams } from 'react-router'
import { gravyBunniesAddress } from '../../constants'
import IndividualGravyBunnyPage from './GravyBunnyPage'
import IndividualNFTPage from './OneOfAKindNftPage'

const IndividualNFTPageRouter = () => {
  // For GravyBunnies tokenId in url is really bunnyId
  const { collectionAddress, tokenId } = useParams<{ collectionAddress: string; tokenId: string }>()

  const isPBCollection = collectionAddress.toLowerCase() === gravyBunniesAddress.toLowerCase()
  if (isPBCollection) {
    return <IndividualGravyBunnyPage bunnyId={tokenId} />
  }

  return <IndividualNFTPage collectionAddress={collectionAddress} tokenId={tokenId} />
}

export default IndividualNFTPageRouter
