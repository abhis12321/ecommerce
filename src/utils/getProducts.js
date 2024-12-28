import { Product } from "@/lib/models/ProductModel";

export const getAllProducts = async () => {
    try {
        const products = await Product.find({ is_verified: true });
        return products;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}


export const getProductById = async ({ _id }) => {
    try {
        const products = await Product.findOne({ is_verified: true, _id });
        return products;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}