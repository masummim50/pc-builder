import connectToMongodb from "../../../lib/mongodb";
import productModel from "../../../models/productModel";





export default async function handler(req, res) {
    const {method} = req;
    const id = req.query.productId;
    console.log("router: ",req.query)
  
    await connectToMongodb()
  
    switch (method) {
      case 'GET':
        try {
          const allProducts = await productModel.findById(id);
          res.status(200).json({ success: true, data: allProducts })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }