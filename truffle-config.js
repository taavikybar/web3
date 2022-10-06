module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 7545,
            network_id: '*', // Match any network id
            gas: 5000000,
        },
    },

    compilers: {
        solc: {
            version: 'pragma',
            settings: {
                optimizer: {
                    enabled: true, // Default: false
                    runs: 200, // Default: 200
                },
            },
        },
    },
}

/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 *
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// const HDWalletProvider = require("truffle-hdwallet-provider");

// networks: {
//     // Configuration for mainnet
//     mainnet: {
//       provider: function () {
//         // Setting the provider with the Infura Mainnet address and Token
//         return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/YOUR_TOKEN")
//       },
//       network_id: "1"
//     },
//     // Configuration for rinkeby network
//     rinkeby: {
//       // Special function to setup the provider
//       provider: function () {
//         // Setting the provider with the Infura Rinkeby address and Token
//         return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/YOUR_TOKEN")
//       },
//       // Network id is 4 for Rinkeby
//       network_id: 4
//     }
