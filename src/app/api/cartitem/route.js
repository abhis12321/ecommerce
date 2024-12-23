import { NextResponse } from "next/server";
import { getJWTUser } from "@/utils/getJWTUser";
import { CartItem } from "@/lib/models/CartModel";


export const GET = async () => {
    try {
        const user = getJWTUser();
        if (!user) {
            return NextResponse.json({}, { status: 404 })
        }
        const cartItems = await CartItem.find({ user_id: user?._id });
        return NextResponse.json({ cartItems });
    } catch (error) {
        return NextResponse.json({}, { status: 404 });
    }
}

export const POST = async (req) => {
    try {
        const { user_id, product_id, product_quantity } = await req.json();
        const nvcartItem = new CartItem({ user_id, product_id, product_quantity });
        await nvcartItem.save();
        return NextResponse.json({ success: true, message: "product added to your cart" });
    } catch (error) {
        return NextResponse.json({}, { status: 404 });
    }
}