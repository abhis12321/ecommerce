import { NextResponse } from "next/server";
import { Product } from "@/lib/models/ProductModel";

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
        const nvProduct = new Product(data);
        await nvProduct.save();
        return NextResponse.json({success:true , message:"New product is uploaded and you should wait for the verifcation!"});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}