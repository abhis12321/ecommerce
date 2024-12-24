import { NextResponse } from "next/server";
import { getJWTUser } from "@/utils/getJWTUser";
import { CartItem } from "@/lib/models/CartModel";
import { getCartItems } from "@/utils/getCartItems";


export const GET = async () => {
    try {
        const cartItems = await getCartItems();
        return NextResponse.json({ cartItems });
    } catch (error) {
        return NextResponse.json({}, { status: 404 });
    }
}

export const POST = async (req) => {
    try {
        const { user_id, product_id, product_quantity } = await req.json();
        const cartItem = await getProduct({ user_id, product_id });
        cartItem.product_quantity += product_quantity;
        if(cartItem.product_quantity >= 1) {
            await cartItem.save();
        } else {
            await CartItem.findByIdAndDelete(cartItem?._id);
        }
        return NextResponse.json({ success: true, message: "product added to your cart" });
    } catch (error) {
        // console.log(error.message)
        return NextResponse.json({}, { status: 404 });
    }
}

const getProduct = async ({ user_id, product_id }) => {
    const oldCartItem = await CartItem.findOne({ user_id, product_id });
    if (oldCartItem) {
        return oldCartItem;
    }
    return new CartItem({ user_id, product_id, product_quantity: 0 });
}



export const DELETE = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const product_id = searchParams.get('product_id');
        const user_id = searchParams.get('user_id');
        const user = getJWTUser();
        if (!user || !user_id || !product_id || user?._id != user_id) {
            return NextResponse.json({}, { status: 404 });
        }
        await CartItem.findOneAndDelete({ product_id, user_id });
        return NextResponse.json({ message: "product deleted from your cart", success: true }, { status: 200 });
    } catch (error) {
        // console.log(error.message)
        return NextResponse.json({}, { status: 404 });
    }
}