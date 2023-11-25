/*
	This file contains the code which will add a new state in the life cycle of a product with a given ID by invoking a function in the smart contract
*/

const { blockchainInfo } = require('./blockchainInfo.js');
const { Web3 } = require('web3');
const web3 = new Web3(blockchainInfo.endpoint);

const supplyChainContract = new web3.eth.Contract(blockchainInfo.abiOfContract, blockchainInfo.contractAddress);

async function addNewProductLocation(productID, stageInfo) {

    try {
        const receipt = await supplyChainContract.methods.addNewState(productID, stageInfo).send({
            from: blockchainInfo.accountAddress,
            gas: 300000
        });

        return receipt;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addNewProductLocation
};


// Use following code when interacting with the live environment of Polygon Mumbai



// const account = web3.eth.accounts.privateKeyToAccount(privateKey);

// web3.eth.accounts.wallet.add(account);
// web3.eth.defaultAccount = account.address;

// var _gasPrice = "100000";
// var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());

// var _hex_Gas = web3.utils.toHex('90000');

// const tx = {
// 	from: accountAddress,
// 	to: contractAddress,
// 	gasPrice: _hex_gasPrice,
// 	gas: _hex_Gas,
// 	value: '0x0',
// 	data: supplyChainContract.methods.addNewState(0, ["Retailer", "All steps completed", "20.00", "Mon Nov 20 2023 21:28:08 GMT-0700 (Mountain Standard Time)", "Tempe, AZ"]).encodeABI(),
// };

// const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

// signPromise.then((signedTx) => {

// 	const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
// 	sentTx.on("receipt", receipt => {
// 		console.log("Receipt");
// 		console.log(receipt);
// 	});
// 	sentTx.on("error", err => {
// 		console.log(err);
// 	});
// }).catch((err) => {
// 	console.log(err);
// });
