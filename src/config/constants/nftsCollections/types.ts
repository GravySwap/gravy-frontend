import { Address } from '../types'

export enum CollectionKey {
  GRAVY = 'gravy',
  SQUAD = 'gravySquad',
}

export type Collection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type Collections = {
  [key in CollectionKey]: Collection
}
