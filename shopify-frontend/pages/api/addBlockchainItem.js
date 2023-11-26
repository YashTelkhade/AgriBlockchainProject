import { addProductToBlockchain } from "../../blockchain/backend/addingNewItem";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {

            const productDetails = req.body.productDetails; // Adjust according to the actual data structure
            const stageDetails = req.body.stageDetails;

            const receipt = await addProductToBlockchain(productDetails, stageDetails);
            res.status(200).json({ success: true});
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
