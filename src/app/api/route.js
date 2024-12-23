import { NextResponse } from "next/server";
import { Product } from "@/lib/models/ProductModel";
import { cookies } from 'next/headers';

export async function GET() {
    try {
        let data = await Product.find();
        return NextResponse.json({ data, success:true });
    } catch(error) {
        return NextResponse.json({ success:false, message:error.message });
    }
}

export async function POST(req , res) {
    try {
        const body = await req.json();
        const newProduct = new Product(body);
        await newProduct.save();
        return NextResponse.json({ message:newProduct , success:true })
    } catch(error) {
        return NextResponse.json({ message:error.message , success:false })
    }
}

export async function PUT(req) {
    try {
        let { theme } = await req.json();
        cookies().set("theme" , theme);
        return NextResponse.json({ success:true , message:"theme updated." });
    } catch(error) {
        return NextResponse.json({ success:false , message:error.message });
    }
}