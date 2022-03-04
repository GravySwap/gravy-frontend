const GRAVY_EXTENDED = 'https://tokens.gravyswap.com/gravyswap-extended.json'
const GRAVY_TOP100 = 'https://tokens.gravyswap.com/gravyswap-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  GRAVY_TOP100,
  GRAVY_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
