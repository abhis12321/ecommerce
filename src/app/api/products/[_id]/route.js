import { Product } from "@/lib/models/ProductModel";
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    try {
        const product = (await Product.findById(params?._id)).toObject();
        return NextResponse.json({ product, success: true });
    } catch (error) {
        return NextResponse.json({}, { status: 404 });
    }
}