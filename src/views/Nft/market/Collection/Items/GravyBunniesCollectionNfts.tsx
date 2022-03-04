import React from 'react'
import { Grid } from '@gravyswap/uikit'
import orderBy from 'lodash/orderBy'
import { Collection } from 'state/nftMarket/types'
import { CollectibleLinkCard } from '../../components/CollectibleCard'
import useAllGravyBunnyNfts from '../../hooks/useAllGravyBunnyNfts'
import GridPlaceholder from '../../components/GridPlaceholder'

interface CollectionNftsProps {
  collection: Collection
  sortBy?: string
}

const GravyBunniesCollectionNfts: React.FC<CollectionNftsProps> = ({ collection, sortBy = 'updatedAt' }) => {
  const { address } = collection
  const allGravyBunnyNfts = useAllGravyBunnyNfts(address)

  const sortedNfts = allGravyBunnyNfts
    ? orderBy(allGravyBunnyNfts, (nft) => (nft.meta[sortBy] ? Number(nft?.meta[sortBy]) : 0), [
        sortBy === 'currentAskPrice' ? 'asc' : 'desc',
      ])
    : []

  if (!sortedNfts.length) {
    return <GridPlaceholder />
  }

  return (
    <>
      <Grid
        gridGap="16px"
        gridTemplateColumns={['1fr', null, 'repeat(3, 1fr)', null, 'repeat(4, 1fr)']}
        alignItems="start"
      >
        {sortedNfts.map((nft) => {
          return <CollectibleLinkCard key={`${nft.tokenId}-${nft.collectionName}`} nft={nft} />
        })}
      </Grid>
    </>
  )
}

export default GravyBunniesCollectionNfts
