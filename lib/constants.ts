import { AddEthereumChainParameter } from '@raydeck/metamask-ts'

export const NETWORKS: { [key: string]: AddEthereumChainParameter } = {
    ropstein: {
        chainId: '0x3',
        chainName: 'Ropstein',
        rpcUrls: ['https://ropsten.infura.io/v3/'],
        nativeCurrency: {
            name: 'RopstenETH',
            symbol: 'RopstenETH',
            decimals: 18,
        },
    },
    mainnet: {
        chainId: '0x1',
        chainName: 'Ethereum Mainnet',
        rpcUrls: ['https://mainnet.infura.io/v3/'],
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    bsc: {
        chainId: '0x38',
        chainName: 'BSC Smart Chain',
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        blockExplorerUrls: ['https://bscscan.com'],
    },
}
