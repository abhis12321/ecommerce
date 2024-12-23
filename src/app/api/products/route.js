import { Product } from "@/lib/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await Product.find();
        return NextResponse.json({success:true , products});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}

export async function POST(req , res) {
    try {
        const data = await req.json();
        const newProduct = new Product(data);
        await newProduct.save();
        return NextResponse.json({success:true , message:"New product is uploaded and you should wait for the verifcation!"});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}