import { AddEthereumChainParameter } from '@raydeck/metamask-ts'

export const switchChain = async (network: AddEthereumChainParameter) => {
    const { ethereum } = window

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: network.chainId }],
        })
    } catch (switchError: any) {
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [network],
                })
            } catch (addError) {
                // handle "add" error
            }
        }
    }
}
