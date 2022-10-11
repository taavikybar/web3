const MetaCoin = artifacts.require('MetaCoin')
const assert = require('assert')

contract('MetaCoin', (accounts) => {
    it('should put 10000 MetaCoin in the first account', async () => {
        const instance = await MetaCoin.deployed()
        const balance = await instance.getBalance.call(accounts[0])

        assert.equal(balance.valueOf(), 10000)
    })

    it('should call a function that depends on a linked library', async () => {
        const instance = await MetaCoin.deployed()
        const outCoinBalance = await instance.getBalance.call(accounts[0])
        const outCoinBalanceEth = await instance.getBalanceInEth.call(accounts[0])

        assert.equal(parseInt(outCoinBalanceEth), 2 * parseInt(outCoinBalance))
    })

    it('should send coin correctly', async () => {
        const accountOne = accounts[0]
        const accountTwo = accounts[1]
        const amount = 10

        const instance = await MetaCoin.deployed()
        const acc1Balance = await instance.getBalance.call(accountOne)
        const acc2Balance = await instance.getBalance.call(accountTwo)

        await instance.sendCoin(accountTwo, amount, { from: accountOne })

        const acc1BalanceAfter = await instance.getBalance.call(accountOne)
        const acc2BalanceAfter = await instance.getBalance.call(accountTwo)

        assert.equal(parseInt(acc1BalanceAfter), parseInt(acc1Balance) - amount)
        assert.equal(parseInt(acc2BalanceAfter), parseInt(acc2Balance) + amount)
    })
})
