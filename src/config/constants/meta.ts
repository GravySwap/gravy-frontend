import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'GravySwap',
  description:
    'The most popular AMM on BSC by user count! Earn GRAVY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by GravySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('GravySwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('GravySwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('GravySwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('GravySwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('GravySwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('GravySwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('GravySwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('GravySwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('GravySwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('GravySwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('GravySwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('GravySwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('GravySwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('GravySwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('GravySwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('GravySwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('GravySwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('GravySwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('GravySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('GravySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('GravySwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('GravySwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('GravySwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('GravySwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('GravySwap')}`,
      }
    default:
      return null
  }
}
