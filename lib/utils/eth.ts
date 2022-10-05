import Web3 from 'web3'

export const testWeb3 = (apiKey?: string, fromAddress?: string) => {
    if (!apiKey) {
        console.log('INFURA API KEY is not defined')
        return false
    }

    const provider = `https://mainnet.infura.io/v3/${apiKey}`
    const web3 = new Web3(provider)

    web3.eth.getBlockNumber().then((result) => {
        console.log('Latest Ethereum Block is ', result)
    })

    web3.eth
        .sendTransaction({ from: fromAddress, data: '' })
        .once('sending', function (payload) {
            console.log('sending', payload)
        })
        .once('sent', function (payload) {
            console.log('sending', payload)
        })
        .once('transactionHash', function (hash) {
            console.log('transactionHash', hash)
        })
        .once('receipt', function (receipt) {
            console.log('receipt', receipt)
        })
        .on('confirmation', function (confNumber, receipt, latestBlockHash) {
            console.log('confirmation', confNumber, receipt, latestBlockHash)
        })
        .on('error', function (error) {
            console.log('error', error)
        })
        .then(function (receipt) {
            // will be fired once the receipt is mined
            console.log('receipt', receipt)
        })
}
