import * as React from 'react'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { Wallet } from './wallet'
import metaCoinAbi from '../../build/abi/MetaCoin.json'
import convertLibAbi from '../../build/abi/ConvertLib.json'

const metaCoinAddress = '0x03BCce64A27d64B2d1bFD9FE6e2164fc3Abd0057'
const convertLibAddress = '0x2De112030a939DaA04e5030CDA195337eC6C2E34'
const provider = 'ws://localhost:7545'
const address = '0xb28d290EC228EDfe48Ab61AeAcE78285B802a774'

export default () => {
    const web3 = new Web3(provider)

    const metaCoinContract = new web3.eth.Contract(
        metaCoinAbi as AbiItem[],
        metaCoinAddress,
        {
            from: address,
        }
    )

    const convertLibContract = new web3.eth.Contract(
        convertLibAbi as AbiItem[],
        convertLibAddress,
        {
            from: address,
        }
    )

    const onClick = async () => {
        const balance = await metaCoinContract.methods.getSome().call()
        const conversion = await convertLibContract.methods.convert(2, 3).call()

        console.log(balance, conversion)
    }

    return (
        <>
            <button onClick={onClick}>Load</button>
            <p>--------</p>
            <Wallet />
        </>
    )
}
