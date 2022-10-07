# web3 playground project

Install dependecies:

`npm i`

## Front end app

Start webpack hot reload build:

`npm run hot`

In a separate terminal window, start assets server:

`npm run server`

Go to [http://localhost:8080/](http://localhost:8080/)

## Ethereum smart contracts

### Testing

Run truffle tests:

`npm test`

### Deployment

- start a ganache instance, either ui or cli version
- update `truffle-config.js` with the correct port if needed

To deploy contracts (`ruffle migrate`) and generate ABI files:

`npm run deploy` 


## Questions

-   how to get first/second address from ganache? or start with a seed?

