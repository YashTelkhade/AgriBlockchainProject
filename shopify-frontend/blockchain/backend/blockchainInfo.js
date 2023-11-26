
var contractABI = [
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

const blockchainInfo = {
    contractAddress: "0x938F173FB7D80E5Feb3ee17c66fAA0239a3AdB7e",
    accountAddress: "0x780dB8e23358E22505e87429b06894cCD3ac2404",
    abiOfContract : contractABI,
    endpoint: 'http://127.0.0.1:8545',
};



module.exports = { blockchainInfo };