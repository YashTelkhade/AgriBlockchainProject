// pages/api/productInfo.js

import { getProductInfo } from "../../blockchain/backend/getProductInfo";


export default async function handler(req, res) {

    if (req.method === 'GET') {
        console.log("Hello")
        const productId  = req.query.productid;
        console.log(productId)

        if (!productId) {
            return res.status(400).json({ success: false, message: "Product ID is required" });
        }

        try {
            const productInfo = await getProductInfo(productId);
            console.log(productInfo)
            res.status(200).json({ success: true, productInfo:productInfo });
        } catch (error) {
            console.error("API Error:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
