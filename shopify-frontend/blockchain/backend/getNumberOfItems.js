/*
	This file contains the code which will fetch number of items in the supply chain from smart contract
*/
const { blockchainInfo } = require('./blockchainInfo.js');

const { Web3 } = require('web3');
const web3 = new Web3(blockchainInfo.endpoint);

const supplyChainContract = new web3.eth.Contract(blockchainInfo.abiOfContract, blockchainInfo.contractAddress);

async function getNumberOfItemsInSupplyChain() {
    try {
        const numberOfItems = await supplyChainContract.methods.getNumberOfItemsInSupplyChain().call();
        return numberOfItems;
    } catch (error) {
        console.error("Error fetching number of items:", error);
        throw error;
    }
}

module.exports = {
    getNumberOfItemsInSupplyChain
};