
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
const accountAddress = "0x29D3c09Ac96485F80bfc8FD75C5207a4356EC109";

async function addNewProductLocation(productID, stageInfo) {

	console.log(productID)
	console.log(stageInfo)
	

    try {
        const receipt = await supplyChainContract.methods.addNewState(productID, stageInfo).send({
            from: accountAddress,
            gas: 300000
        });

        console.log("Receipt", receipt);
		console.log("Status ok")
        return receipt;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

module.exports = {
    addNewProductLocation
};
