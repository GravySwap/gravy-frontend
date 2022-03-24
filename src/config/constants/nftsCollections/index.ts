import { Collections, CollectionKey } from './types'

const collections: Collections = {
  [CollectionKey.GRAVY]: {
    name: 'Gravy Conductors',
    slug: 'gravy-conductors',
    address: {
      56: '0x4B12229Da4Fc337A13c12050334F6821e120798A',
      97: '0x7EDE37bdd4348e9E7c69BAc1dCEb395D793899FE',
    },
  },
  [CollectionKey.SQUAD]: {
    name: 'Pancake Squad',
    description: "GravySwap's first official generative NFT collection.. Join the squad.",
    slug: 'pancake-squad',
    address: {
      56: '0x0a8901b0E25DEb55A87524f0cC164E9644020EBA',
      97: '0xEf12ef570300bFA65c4F022deAaA3dfF4f5d5c91',
    },
  },
}

export default collections
