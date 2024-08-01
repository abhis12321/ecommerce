import { NextResponse } from "next/server";
import Product from "../lib/models/ProductModel";

export async function GET() {
    try {
        let data = await Product.find();
        return NextResponse.json({data, success:true});
    } catch(error) {
        return NextResponse.json({success:false, message:error.message});
    }
}

export async function POST(req , res) {
    try {
        const body = await req.json();
        const newProduct = new Product(body);
        await newProduct.save();
        return NextResponse.json({message:newProduct , success:true})
    } catch(error) {
        return NextResponse.json({message:error.message , success:false})
    }
}