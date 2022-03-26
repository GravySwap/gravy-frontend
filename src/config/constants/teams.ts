import { IPFS_GATEWAY } from '../index'
import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'Monster Mashers',
    description: 'These monsters are mashing their way to victory, watch out, or you’ll get mashed too!',
    images: {
      lg: 'monster-mashers-lg.png',
      md: 'monster-mashers-md.png',
      sm: 'monster-mashers-sm.png',
      alt: 'monster-mashers-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmSGwXUtRMo8cqVi4LsZnhF55WaZtjcaS1QBZeNDiM1TxX/monster_mashers1.png`,
    },
    background: 'monster-mashers-bg.png',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
  {
    id: 2,
    name: 'Monster',
    description:
      'It’s a bird, it’s a plane, no, it’s a flying flock of turkeys! These turkeys mean total business, and they’re in it to win it.',
    images: {
      lg: 'monster-lg.png',
      md: 'monster-md.png',
      sm: 'monster-sm.png',
      alt: 'monster-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmSGwXUtRMo8cqVi4LsZnhF55WaZtjcaS1QBZeNDiM1TxX/total_turkeys1.png`,
    },
    background: 'monster-bg.png',
    textColor: '#FFFFFF',
    users: 0,
    points: 0,
  },
  {
    id: 3,
    name: 'Stuffing Stuffers',
    description:
      'How much stuffing could a stuffing stuffer stuff if a stuffing stuffer could stuff stuff? Join em, and find out.',
    images: {
      lg: 'stuffing-stuffers-lg.png',
      md: 'stuffing-stuffers-md.png',
      sm: 'stuffing-stuffers-sm.png',
      alt: 'stuffing-stuffers-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmSGwXUtRMo8cqVi4LsZnhF55WaZtjcaS1QBZeNDiM1TxX/stuffing_stuffers1.png`,
    },
    background: 'stuffing-stuffers-bg.png',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
]

export default teams
