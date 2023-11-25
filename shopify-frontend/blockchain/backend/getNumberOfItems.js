/*
	This file contains the code which will fetch number of items in the supply chain from smart contract
*/
const { Web3 } = require('web3');
const web3 = new Web3('http://127.0.0.1:8545');

const abiOfContract = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "itemInfo",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "stageInfo",
				"type": "string[]"
			}
		],
		"name": "addNewItem",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productID",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "stageInfo",
				"type": "string[]"
			}
		],
		"name": "addNewState",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "result",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfItemsInSupplyChain",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productID",
				"type": "uint256"
			}
		],
		"name": "getProductInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const contractAddress = "0x88e87aa9cc459db5cb513df52e653e9710085bb1";
const supplyChainContract = new web3.eth.Contract(abiOfContract, contractAddress);

async function getNumberOfItemsInSupplyChain() {
    try {
		console.log("Hi inside main function")
        const numberOfItems = await supplyChainContract.methods.getNumberOfItemsInSupplyChain().call();
        console.log("Number of Items in Supply Chain:", numberOfItems);
        return numberOfItems;
    } catch (error) {
        console.error("Error fetching number of items:", error);
        throw error;
    }
}

module.exports = {
    getNumberOfItemsInSupplyChain
};