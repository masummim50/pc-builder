import { NextResponse } from "next/server";
import connectToMongodb from "../../../../lib/mongodb";
import productModel from "../../../../models/productModel";


export default async function handler(req, res) {
    const { method } = req
  
    await connectToMongodb()
  
    switch (method) {
      case 'GET':
        try {
          const allProducts = await productModel.find({});
          for (let i = allProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
          }
          const selectedProducts = allProducts.slice(0, 6);
          res.status(200).json({ success: true, data: selectedProducts })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }