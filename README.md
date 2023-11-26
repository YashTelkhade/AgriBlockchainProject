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

### A Breif Overview
The agricultural supply chain project is an innovative solution designed to enhance transparency and efficiency in the farming sector using blockchain technology. At its core, the system integrates a Next.js frontend with a Strapi backend, PostgreSQL database, and an Ethereum blockchain. Farmers, as primary users, have the capability to add their products to the blockchain, ensuring that every item is traceable right from its point of origin. Retailers and distributors interact with the system to scan shipments, updating their status directly onto the blockchain. This feature is crucial for maintaining an immutable record of the product journey, enhancing trust and reliability across the supply chain. Customers, on the other hand, have access to tracking functionalities, allowing them to see the real-time status and history of their purchased products. The entire user information, including profiles of farmers, retailers, distributors, and customers, is securely managed within the Strapi backend and stored in a PostgreSQL database. This setup not only facilitates smooth user interactions but also bolsters the system with robust data management capabilities. The frontend, designed with user experience in mind, provides an intuitive interface where users of different roles can easily navigate and perform their respective tasks such as adding products, scanning, and tracking shipments. By leveraging blockchain technology, the system ensures that all product-related data is tamper-proof and transparent, thereby fostering trust among all stakeholders in the agricultural supply chain.



### Technology Stack

- Frontend: Next.js
- Backend: Strapi
- Database: PostgreSQL
- Blockchain: Ethereum Blockchain

### Features
- Farmers: Add products to the blockchain for traceability.
- Retailers and Distributors: Scan and update shipment statuses on the blockchain.
- Customers: Track shipments and view product journey.
- User Management: Handled through Strapi with PostgreSQL.

## Installation
### Prerequisites
- Node.js
- PostgreSQL
- Ganache (for local Ethereum blockchain)
- Metamask (for Ethereum network interaction)

## Setup

### Clone the Repository

```bash
git clone [https://github.com/YashTelkhade/AgriBlockchainProject]
```

## Install Dependencies

### Frontend:
```bash
cd frontend
npm install
```
### Backend:
```bash
cd backend
npm install
```

### Frontend:
```bash
cd frontend
npm install
```

### Database Setup

- Ensure PostgreSQL is running and set up the strapi_app database and tables.

## Running Project

### Frontend:
```bash
npm run dev
```
### Backend:
```bash
npm run develop
```

## Usage
- Farmers: Use the frontend to add products, which are then stored on the blockchain.
- Retailers/Distributors: Scan and update shipment statuses; reflected on the blockchain.
- Customers: Track shipments and view product journey.
- User Management: Handled through the backend.

## Contributing
Contributions are welcome! Follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make changes and commit (git commit -am 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.


