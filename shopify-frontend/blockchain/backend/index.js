const { Web3 } = require('web3');
const web3 = new Web3('https://polygon-mumbai.infura.io/v3/01705ddc8e8e41d0ad76f342055e6e47');

const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "inputData",
				"type": "string[]"
			}
		],
		"name": "addFarmProduct",
		"outputs": [
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "buyerInfo",
				"type": "string[]"
			}
		],
		"name": "buyFarmersProduct",
		"outputs": [
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "buyerInfo",
				"type": "string[]"
			}
		],
		"name": "buyRetailItems",
		"outputs": [
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFarmersProduce",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "productID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pickUpLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "price",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "farmName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "harvestingTime",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "available",
						"type": "bool"
					}
				],
				"internalType": "struct FoodSupplyChain.FarmProduce[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			}
		],
		"name": "getItemHistory",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "productID",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "productName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "pickUpLocation",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "price",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "farmName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "quantity",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "harvestingTime",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "available",
								"type": "bool"
							}
						],
						"internalType": "struct FoodSupplyChain.FarmProduce",
						"name": "farm",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "productID",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "productName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "category",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "storageLocation",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "purchasePrice",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "retailerName",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "quantity",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "purchaseTime",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "available",
								"type": "bool"
							}
						],
						"internalType": "struct FoodSupplyChain.RetailItem",
						"name": "retail",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "productID",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "productName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "category",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "storeName",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "storeLocation",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "aisle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "sellingPrice",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "arrivalTime",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "quantity",
								"type": "uint256"
							}
						],
						"internalType": "struct FoodSupplyChain.StoreProduct",
						"name": "store",
						"type": "tuple"
					}
				],
				"internalType": "struct FoodSupplyChain.ItemHistory",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getItemsInRetail",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "productID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "storageLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "purchasePrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "retailerName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "purchaseTime",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "available",
						"type": "bool"
					}
				],
				"internalType": "struct FoodSupplyChain.RetailItem[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getItemsInStore",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "productID",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "storeName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "storeLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "aisle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sellingPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "arrivalTime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					}
				],
				"internalType": "struct FoodSupplyChain.StoreProduct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "quant",
				"type": "string"
			}
		],
		"name": "purchaseItemInStore",
		"outputs": [
			{
				"internalType": "string",
				"name": "result",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

// const contractAddress = "0xcd5e6ef3b4160ac563fae0576abc8587133268a7"

const contractAddress = "0x71733553EF9572634A392D6792C4a97e7eFF8541"

const myContract = new web3.eth.Contract(contractABI, contractAddress)

// console.log('******************************')
// console.log(myContract);

// console.log(myContract.methods.getFarmersProduce().call(this));
// myContract.methods.getFarmersProduce().call(this).then((res) => {
//     console.log(res)
// });



// .call((err, res) => {
//     if (!err) {
//         console.log('***********************************************************')
//         console.log(res)
//         console.log('*******************************************************')
//     } else {
//         console.log('#####################################')
//         console.log(err);
//     }
// })

// const account = '0x9E871F6ce23956b0C7B1F66efb85AA323BC1bFfb'

// const privateKey = Buffer.from('4219a4e5e29b657094b80535c94733580b2a0ce940e129110276bf7f558b51d2', 'hex')

// const d = new Date().toLocaleString();
// console.log(d);
// const res = myContract.methods.addFarmProduct(['prod1', 'Apples', 'Tempe', '10', 'State Farm', '15', d]).send({
// 	from: account,
// 	gas: 3000000,
// })
// .then((transactionReceipt) => {
// 	console.log("Transaction Receipt");
// 	console.log(transactionReceipt)
// })
// .catch((error) => {
// 	console.log("error")
// 	console.log(error)
// })

// res.call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// })

// myContract.methods.getFarmersProduce().call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// });

// myContract.methods.getItemsInRetail().call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// });

// myContract.methods.getItemsInStore().call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// });

// myContract.methods.getItemHistory("prod1").call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// });

// const account = '0x9E871F6ce23956b0C7B1F66efb85AA323BC1bFfb'

// const res = myContract.methods.addFarmProduct(["prod3", 'Jackfruit', 'Tempe', '10', 'State Farm', "15", "12/12/2020 1:15"]).send({
// 	from: account,
// 	gas: 30000000,
// });

// res.then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// })

// myContract.methods.getFarmersProduce().call(this).then((res) => {
// 	console.log("*******")
//     console.log(res)
// 	console.log("**********")
// });

const privateKey = "0x4219a4e5e29b657094b80535c94733580b2a0ce940e129110276bf7f558b51d2";
const accountAddress = "0x9E871F6ce23956b0C7B1F66efb85AA323BC1bFfb";

const account = web3.eth.accounts.privateKeyToAccount(privateKey);

web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

// web3.eth.getBlock("latest", false, (error, result) => {
// 	var _gasLimit = result.gasLimit;

// 	console.log("Inside Get block");
// 	web3.eth.getGasPrice(function (error, result1) {

// 		console.log("Inside Gas Price");
// 		var _gasPrice = result1;

// 		var _hex_gasLimit = web3.utils.toHex((_gasLimit + 1000000).toString());
// 		var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
// 		var _hex_Gas = web3.utils.toHex('80000');

// 		web3.eth.getTransactionCount(accountAddress).then(
// 			nonce => {

// 				console.log("Inside Transaction Count");
// 				var _hex_nonce = web3.utils.toHex(nonce); 

// 				const tx = {
// 					nonce: _hex_nonce,
// 					from: accountAddress,
// 					to: contractAddress,
// 					gasPrice: _hex_gasPrice,
// 					gasLimit: _hex_gasLimit,
// 					gas: _hex_Gas,
// 					value: '0x0',
// 					data: myContract.methods.addFarmProduct(["prod3", "Jackfruit", "Tempe", "10", "State Farm", "15", "12/12/2020 1:15"]).encodeABI(),
// 				};

// 				const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

// 				signPromise.then((signedTx) => {
// 					// raw transaction string may be available in .raw or 
// 					// .rawTransaction depending on which signTransaction
// 					// function was called

// 					console.log("Inside Sign Promise");
// 					const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
// 					sentTx.on("receipt", receipt => {
// 					// do something when receipt comes back
// 					console.log("Receipt");
// 					console.log(receipt);
// 					});
// 					sentTx.on("error", err => {
// 					// do something on transaction error
// 					console.log(error);
// 					});
// 				}).catch((err) => {
// 					console.log(err);
// 					// do something when promise fails
// 				});
// 			});
// 	});
// })

console.log("Going into Gas Price");

// web3.eth.getGasPrice(function (error, result1) {

// 	console.log("Inside Gas Price");
	
// });

var _gasPrice = "10";
var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());

var _hex_Gas = web3.utils.toHex('900');

const tx = {
	// nonce: _hex_nonce,
	from: accountAddress,
	to: contractAddress,
	gasPrice: _hex_gasPrice,
	// gasLimit: _hex_gasLimit,
	gas: _hex_Gas,
	value: '0x0',
	data: myContract.methods.addFarmProduct(["prod3", "Jackfruit", "Tempe", "10", "State Farm", "15", "12/12/2020 1:15"]).encodeABI(),
};

const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

signPromise.then((signedTx) => {
	// raw transaction string may be available in .raw or 
	// .rawTransaction depending on which signTransaction
	// function was called

	console.log("Inside Sign Promise");
	const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
	sentTx.on("receipt", receipt => {
	// do something when receipt comes back
		console.log("Receipt");
		console.log(receipt);
	});
	sentTx.on("error", err => {
	// do something on transaction error
		console.log(err);
	});
}).catch((err) => {
	console.log(err);
	// do something when promise fails
});






// const transaction = myContract.methods.addFarmProduct(["prod3", "Jackfruit", "Tempe", "10", "State Farm", "15", "12/12/2020 1:15"]);

// const transactionObject = {
// 	to: web3.eth.defaultAccount,
// 	gas: 20000000,
// 	data: transaction.encodeABI()
//   };

//   web3.eth.sen

// transaction.send(transactionObject)
//   .on('transactionHash', (hash) => {
//     console.log('Transaction Hash:', hash);
//   })
//   .on('receipt', (receipt) => {
//     console.log('Transaction Receipt:', receipt);
//   })
//   .on('error', (error) => {
//     console.error('Transaction Error:', error);
//   });

// const transaction = myContract.methods.addFarmProduct(["prod3", "Jackfruit", "Tempe", "10", "State Farm", "15", "12/12/2020 1:15"]);
// const options = {
// 	to      : transaction._parent._address,
// 	data    : transaction.encodeABI(),
// 	gas     : await transaction.estimateGas({from: account}),
// 	gasPrice: 200000000
// };
// const signed  = await web3.eth.accounts.signTransaction(options, privateKey);
// const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

// console.log("Receipt");
// console.log(receipt);