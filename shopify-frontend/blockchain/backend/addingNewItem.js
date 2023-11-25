/*
	This file contains the code which invokes a function in the deployed smart contract which adds a new item in the supply chain
*/
const { blockchainInfo } = require('./blockchainInfo.js');
const { Web3 } = require('web3');
const web3 = new Web3(blockchainInfo.endpoint);

const supplyChainContract = new web3.eth.Contract(blockchainInfo.abiOfContract, blockchainInfo.contractAddress);

async function addProductToBlockchain(productDetails, stageDetails) {

    try {
        const receipt = await supplyChainContract.methods.addNewItem(productDetails, stageDetails).send({
            from: blockchainInfo.accountAddress,
            gas: 3000000 
        });

        return receipt;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addProductToBlockchain
};


// data: supplyChainContract.methods.addNewItem(["Adidas Shoes", "Winter season footwear", "Shoes"], ["Manufactured", "All steps completed", "20.00", "Mon Nov 20 2023 21:28:08 GMT-0700 (Mountain Standard Time)", "Tempe, AZ"]).encodeABI(),

/*

The following code must be used when interacting with Polygon Mumbai


const contractAddress = "0x90e98571715b0923aFf8dE981250E6D8779ECF84";

const supplyChainContract = new web3.eth.Contract(abiOfContract, contractAddress);

const privateKey = "Private Key of account";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

var _gasPrice = "100000";
var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());

var _hex_Gas = web3.utils.toHex('900');

const tx = {
	from: accountAddress,
	to: contractAddress,
	gasPrice: _hex_gasPrice,
	gas: _hex_Gas,
	value: '0x0',
	data: supplyChainContract.methods.addNewItem(["Adidas Shoes", "Winter season footwear", "Shoes"], ["Manufactured", "All steps completed", "20.00", "Mon Nov 20 2023 21:28:08 GMT-0700 (Mountain Standard Time)", "Tempe, AZ"]).encodeABI(),
};

const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

signPromise.then((signedTx) => {

	const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
	sentTx.on("receipt", receipt => {
		console.log("Receipt");
		console.log(receipt);
	});
	sentTx.on("error", err => {
		console.log(err);
	});
}).catch((err) => {
	console.log(err);
});
*/