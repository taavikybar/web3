import * as React from 'react'
import { useState, useEffect } from 'react'
import { switchChain } from '../utils/metamask'
import { NETWORKS } from '../constants'

export default () => {
    const { ethereum } = window

    if (typeof ethereum === 'undefined') {
        return <>Please install metamask</>
    }

    const [account, setAccount] = useState('')
    const [chainId, setChainId] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setAccount(ethereum.selectedAddress)
        setChainId(ethereum.chainId)
    }, [])

    const onConnect = async () => {
        // should be in try/catch
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        setAccount(accounts[0])
    }

    ethereum.on('accountsChanged', (accounts: string[]): void => {
        console.log('accountsChanged')
        if (accounts.length === 0) setAccount('')
        else setAccount(accounts[0])
    })

    ethereum.on('chainChanged', (chainId: string) => {
        console.log('chainChanged', chainId)
        window.location.reload()
    })

    const onGetPermissions = async () => {
        try {
            const permissions = await ethereum.request({
                method: 'wallet_requestPermissions',
                params: [{ eth_accounts: {} }],
            })
            console.log(permissions)
        } catch (err: any) {
            if (err.code === 4001) {
                setError('permissions must be provided')
            } else {
                setError('an error occurred')
                console.log(err)
            }
        }
    }

    return (
        <>
            <p>Chain ID {chainId}</p>
            <button onClick={onConnect}>
                {!account && 'Connect'}
                {account && `Connected: ${account}`}
            </button>
            <br />
            <button onClick={onGetPermissions}>get permissions</button>
            {error}
            <br />
            <button onClick={async () => await switchChain(NETWORKS.ropstein)}>
                switch to ropstein
            </button>
            <button onClick={() => switchChain(NETWORKS.mainnet)}>
                switch to mainnet
            </button>
            <button onClick={() => switchChain(NETWORKS.bsc)}>
                switch to bsc
            </button>
        </>
    )
}
