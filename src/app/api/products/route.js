import Product from "@/app/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await Product.find();
        return NextResponse.json({success:true , data});
    } catch(error) {
        return NextResponse.json({success:false , message:error.message});
    }
}