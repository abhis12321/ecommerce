import { NextResponse } from "next/server"
import { getJWTUser } from "@/utils/getJWTUser"
import { CartItem } from "@/lib/models/CartModel"


export const GET = async() => {
    try {
        const user = getJWTUser();
        if(!user) {
            return NextResponse.json({} , { status:404 })            
        }
        const cartItems = await CartItem.find({ user_id: user?._id });
        return NextResponse.json({ cartItems });
    } catch(error) {
        return NextResponse.json({} , { status:404 })
    }
}