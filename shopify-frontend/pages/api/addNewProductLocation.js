import { addNewProductLocation } from "../../blockchain/backend/addingNewState";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log("Scan Blockchain region")

            const productID = req.body.productID; // Adjust according to the actual data structure
            const stageInfo = req.body.stageInfo;

            console.log(productID)
            console.log(stageInfo)

            console.log("Scan Blockchain region")
            const receipt = await addNewProductLocation(productID, stageInfo);
            res.status(200).json({ success: true});
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
