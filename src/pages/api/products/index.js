import { NextResponse } from "next/server";
import connectToMongodb from "../../../lib/mongodb"
import productModel from "../../../models/productModel";


export default async function handler(req, res) {
    const { method } = req
  
    await connectToMongodb()
  
    switch (method) {
      case 'GET':
        try {
          const products = await productModel.find({});
          console.log("products array: ", products) /* find all the data in our database */
          res.status(200).json({ success: true, data: products })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }