import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box, Flex, Text } from '@gravyswap/uikit'
import { useAppDispatch } from 'state'
import { fetchCollection } from 'state/nftMarket/reducer'
import { useGetCollection } from 'state/nftMarket/hooks'
import { useTranslation } from 'contexts/Localization'
import Select, { OptionProps } from 'components/Select/Select'
import Container from 'components/Layout/Container'
import { gravyBunniesAddress } from '../../constants'
import GravyBunniesCollectionNfts from './GravyBunniesCollectionNfts'
import Header from '../Header'
import CollectionWrapper from './CollectionWrapper'

const Items = () => {
  const { collectionAddress } = useParams<{ collectionAddress: string }>()
  const [sortBy, setSortBy] = useState('updatedAt')
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const collection = useGetCollection(collectionAddress)
  const isPBCollection = collectionAddress.toLowerCase() === gravyBunniesAddress.toLowerCase()

  const { address } = collection || {}

  const sortByItems = [
    { label: t('Recently listed'), value: 'updatedAt' },
    { label: t('Lowest price'), value: 'currentAskPrice' },
  ]

  const handleChange = (newOption: OptionProps) => {
    setSortBy(newOption.value)
  }

  useEffect(() => {
    if (address) {
      dispatch(fetchCollection(address))
    }
  }, [address, dispatch])

  return (
    <>
      <Header collection={collection} />
      {isPBCollection ? (
        <Container mb="24px">
          <Flex alignItems="center" justifyContent={['flex-start', null, null, 'flex-end']} mb="24px">
            <Box minWidth="165px">
              <Text fontSize="12px" textTransform="uppercase" color="textSubtle" fontWeight={600} mb="4px">
                {t('Sort By')}
              </Text>
              <Select options={sortByItems} onOptionChange={handleChange} />
            </Box>
          </Flex>
          <GravyBunniesCollectionNfts collection={collection} sortBy={sortBy} />
        </Container>
      ) : (
        <CollectionWrapper collection={collection} />
      )}
    </>
  )
}

export default Items
