import Web3 from 'web3'

export const testWeb3 = () => {
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')
    const from = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5'

    web3.eth
        .sendTransaction({ from, data: '' })
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
