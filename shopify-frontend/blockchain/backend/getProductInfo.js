/*
	This file contains the code which will fetch information of the product with a given ID from the smart contract
*/
const { blockchainInfo } = require('./blockchainInfo.js');
const { Web3 } = require('web3');
const web3 = new Web3(blockchainInfo.endpoint);

const supplyChainContract = new web3.eth.Contract(blockchainInfo.abiOfContract, blockchainInfo.contractAddress);

async function getProductInfo(productId) {
    try {
        const result = await supplyChainContract.methods.getProductInfo(productId).call({ from: blockchainInfo.accountAddress });
        console.log("Product Info:", result);
        return result;
    } catch (error) {
        console.error("Error fetching product info:", error);
        throw error;
    }
}

module.exports = {
    getProductInfo
};