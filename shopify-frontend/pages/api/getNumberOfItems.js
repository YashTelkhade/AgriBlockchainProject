// pages/api/addBlockchainItem.js

import { getNumberOfItemsInSupplyChain } from "../../blockchain/backend/getNumberOfItems";

getNumberOfItemsInSupplyChain

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const numberOfItems = await getNumberOfItemsInSupplyChain();
            console.log("Hi"+ numberOfItems.toString())
            res.status(200).json({ 
                data:{
                success: true, 
                numberOfItems: numberOfItems.toString()
                }
            });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}