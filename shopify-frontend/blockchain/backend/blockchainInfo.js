
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
    contractAddress: "0xDCd7edb0DfC305A0600f4602B2630fDbE3948800",
    accountAddress: "0x1ca9E72c0664f699222A24BA67f4eA9c7048fcaa",
    abiOfContract : contractABI,
    endpoint: 'http://127.0.0.1:8545',
};



module.exports = { blockchainInfo };