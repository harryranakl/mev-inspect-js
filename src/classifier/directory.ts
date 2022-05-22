import { SwapProtocol, LendingProtocol } from './base.js';

const ETHEREUM = 1;
const POLYGON = 137;
const ARBITRUM = 42161;

type ChainId = typeof ETHEREUM | typeof POLYGON | typeof ARBITRUM;

const nativeAsset: Record<ChainId, string> = {
  [ETHEREUM]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [POLYGON]: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  [ARBITRUM]: '',
};

const swapFactories: Record<ChainId, Record<SwapProtocol, string[]>> = {
  [ETHEREUM]: {
    UniswapV2: [
      // Uniswap
      '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
      // Sushiswap
      '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
      // Shibaswap
      '0x115934131916c8b277dd010ee02de363c09d037c',
      // Mooniswap
      '0x71cd6666064c3a1354a3b4dca5fa1e2d3ee7d303',
      // DefiSwap
      '0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d',
      // SashimiSwap
      '0xf028f723ed1d0fe01cc59973c49298aa95c57472',
      // LuaSwap
      '0x0388c1e0f210abae597b7de712b9510c6c36c857',
      // FraxSwap
      '0x54f454d747e037da288db568d4121117eab34e79',
      // SakeSwap
      '0x75e48c954594d64ef9613aeef97ad85370f13807',
    ],
    UniswapV3: ['0x1f98431c8ad98523631ae4a59f267346ea31f984'],
    BalancerV1: ['0x9424b1412450d0f8fc2255faf6046b98213b76bd'],
    BalancerV2: ['0xba12222222228d8ba445958a75a0704d566bf2c8'],
  },
  [POLYGON]: {
    UniswapV2: [
      // Sushiswap
      '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
      // Quickswap
      '0x5757371414417b8c6caad45baef941abc7d3ab32',
    ],
    UniswapV3: ['0x1f98431c8ad98523631ae4a59f267346ea31f984'],
    BalancerV1: [],
    BalancerV2: ['0xba12222222228d8ba445958a75a0704d566bf2c8'],
  },
  [ARBITRUM]: {
    UniswapV2: [
      // Sushiswap
      '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
    ],
    UniswapV3: ['0x1f98431c8ad98523631ae4a59f267346ea31f984'],
    BalancerV1: [],
    BalancerV2: ['0xba12222222228d8ba445958a75a0704d566bf2c8'],
  },
};

const lendingPools: Record<ChainId, Record<LendingProtocol, string[][]>> = {
  [ETHEREUM]: {
    CompoundV2: [['0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b']],
    AaveV2: [
      [
        '0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9',
        '0x7937d4799803fbbe595ed57278bc4ca21f3bffcb',
      ],
    ],
    AaveV3: [],
  },
  [POLYGON]: {
    CompoundV2: [],
    AaveV2: [['0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf']],
    AaveV3: [['0x794a61358d6845594f94dc1db02a252b5b4814ad']],
  },
  [ARBITRUM]: {
    CompoundV2: [],
    AaveV2: [],
    AaveV3: [['0x794a61358d6845594f94dc1db02a252b5b4814ad']],
  },
};

export { ChainId, nativeAsset, swapFactories, lendingPools };
