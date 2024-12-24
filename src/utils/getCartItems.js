import { CartItem } from "@/lib/models/CartModel";
import { getJWTUser } from "./getJWTUser";


export const getCartItems = async () => {
    try {
        const user = getJWTUser();
        if (!user) {
            return [];
        }
        const cartItems = (await CartItem.find({ user_id: user?._id })
            .populate({
                path: 'product_id',   // targeting through
                model: 'Products',       // targeting to
                select: 'product_title product_description product_category images price discountPercentage product_brand' // field to select
            })
            .lean() //  Mongoose documents => js objects
            .exec())?.map(item => ({            // serializing the objects
                ...item,
                _id: item._id.toString(),
                user_id: item.user_id.toString(),
                product_id: {
                    ...item.product_id,
                    _id: item.product_id._id.toString(),
                },
            }));
            
        return cartItems;
    } catch (_) {
        return [];
    }
}