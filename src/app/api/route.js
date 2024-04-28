import { NextResponse } from "next/server";
import product from "../../../backend/model/product";

export async function GET() {
    try {
        let data = await product.find();
        return NextResponse.json({data, success:true});
    } catch(error) {
        return NextResponse.json({success:false, message:error.message});
    }
}

export async function POST(req , res) {
    try {
        const body = await req.json();
        const newProduct = new product(body);
        await newProduct.save();
        return NextResponse.json({message:newProduct , success:true})
    } catch(error) {
        return NextResponse.json({message:error.message , success:false})
    }
}