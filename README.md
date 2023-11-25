# AgriBlockchainProject

Blockchain powered food supply chain to allow shoppers at a supermarket track the origins and freshness of the items they are purchasing.

All stakeholders in the supply chain interact with a web application to record different stages in the life cycle of a product.

Eventually products end up on the website of a supermarket where consumers can track the history of the items which they are purchasing.

## Blockchain

Ganache has been used to set up an Ethereum based blockchain environment.

To install ganache run:

```
yarn global add ganache
```

Once installed ganache can be started using:

```
ganache-cli --defaultBalanceEther 9000000000
```

This command will set up a blockchain and create 10 accounts with having initial balance of 9000000000 ETH

After the blockchain has started deploy the smart contract "shopify-frontend/blockchain/backend/FoodSupplyChainSmartContract.sol" using Remix IDE

Make sure to select compiler version "0.8.20+"

Once compiled, deploy the smart contract in "Dev - Ganache Provider" environment

After the contract is deployed, copy the contract address and save it as a value of the "contractAddress" field in the "blockchainInfo" object inside "shopify-frontend/blockchain/backend/blockchainInfo.js"

Similarly copy the address of one of the accounts on Ganache having sufficient ETH and save it as the value of "accountAddress" field inside the same object

The value of Ganache JSON-RPC endpoint must be stored inside "endpoint" field of this object

If some changes are made to the functions defined inside the smart contract, then the updated contract ABI must be saved as the value of "contractABI" variable inside "shopify-frontend/blockchain/backend/blockchainInfo.js"

## Web Application

