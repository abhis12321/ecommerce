import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";

export default function CartItemCard({ product }) {
    const dispatch = useDispatch();
    const handleDeleteItem = () => {
        dispatch(removeFromCart({ removeById: product?._id }));
    }

    const handleAddItemQuantity = () => {
        dispatch(addToCart({ ...product, count: 1 }));
    }

    return (
        <div className="w-full max-w-[700px] flex itm justify-center gap-4 p-4 bg-white">
            <Image src={product?.img_url || "/productImg.jpg"} alt="" className="w-1/3" width={400} height={400} />
            <div className="flex flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{product?.product_name} <span className="text-xs font-normal">({product?.product_category})</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product?.price}</h1>
                </div>
                <h1 className="font-mono">{product?.product_description?.substring(0, 100)}...</h1>

                <div className="flex items-center justify-between">
                    <div className="w-fit flex items-center justify-around gap-3 px-6 rounded-3xl shadow-[0_0_2px_black]">
                        <FontAwesomeIcon size="xs" icon={faTrashCan} className="h-[14px] cursor-pointer hover:text-red-800 active:scale-105" onClick={handleDeleteItem} />
                        <div className="text-blue-800 font-bold text-lg">{product?.count}</div>
                        <FontAwesomeIcon size="xs" icon={faPlus} className="h-[14px] cursor-pointer hover:text-red-800 active:scale-105" onClick={handleAddItemQuantity} />
                    </div>
                    <div className="flex gap-2">
                        <div className="font-bold text-gray-400">total : </div>
                        <div className="text-gray-950">Rs.{product.count * product.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
