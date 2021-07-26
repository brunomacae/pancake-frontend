import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x145ccc1fda088c448fa3d8753bee6ffa87fca41d',
      56: '0x145ccc1fda088c448fa3d8753bee6ffa87fca41d',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x9f7f7f0ea75702bf7b5d943923e3357bccc9674a',
      56: '0x9f7f7f0ea75702bf7b5d943923e3357bccc9674a',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 415,
    lpSymbol: 'DG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8b2824d57eebf07f5aff5c91fa67ed7c501a9f43',
    },
    token: tokens.$dg,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 414,
    lpSymbol: 'WOO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x89eE0491CE55d2f7472A97602a95426216167189',
    },
    token: tokens.woo,
    quoteToken: tokens.wbnb,
    },
    token: tokens.bake,
    quoteToken: tokens.wbnb,
  },
]

export default farms
