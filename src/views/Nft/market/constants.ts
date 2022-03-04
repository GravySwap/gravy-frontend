import collections from 'config/constants/nftsCollections'
import { CollectionKey } from 'config/constants/nftsCollections/types'
import { getAddress } from 'utils/addressHelpers'

export const nftsBaseUrl = '/nfts'
export const gravyBunniesAddress = getAddress(collections[CollectionKey.GRAVY].address)
export const gravySquadAddress = getAddress(collections[CollectionKey.SQUAD].address)
