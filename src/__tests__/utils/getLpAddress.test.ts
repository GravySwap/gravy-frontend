import { Token, ChainId } from '@liquidslabs/gravyswap-sdk'
import getLpAddress from 'utils/getLpAddress'

const GRAVY_AS_STRING = '0x5eA26D0d36EAF02d63a3023521A7924e19c34454'
const BUSD_AS_STRING = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const GRAVY_AS_TOKEN = new Token(ChainId.MAINNET, GRAVY_AS_STRING, 18)
const BUSD_AS_TOKEN = new Token(ChainId.MAINNET, BUSD_AS_STRING, 18)
const GRAVY_BUSD_LP = '0x804678fa97d91B974ec2af3c843270886528a9E6'

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(GRAVY_AS_STRING, BUSD_AS_STRING)).toBe(GRAVY_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(GRAVY_AS_STRING, BUSD_AS_TOKEN)).toBe(GRAVY_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(GRAVY_AS_TOKEN, BUSD_AS_TOKEN)).toBe(GRAVY_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(GRAVY_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(GRAVY_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
