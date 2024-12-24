import axios from "axios";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function CartItemCard({ product }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);

    const handleDeleteItem = () => {
        if (!user?._id) {
            alert("you are not logged in");
        } else {
            const payload = { user_id: user?._id, product_id: product?.product_id?._id };
            axios.delete("/api/cartitem", {
                params: payload,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.data)
                .then(async(data) => {
                    if(data.success) {
                        axios.get("/api/cartitem")
                            .then(res => res.data)
                            .then(data => dispatch(addToCart(data.cartItems)))
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    const handleAddItemQuantity = () => {
        if (!user?._id) {
            alert("you are not logged in");
        } else {
            const payload = { ...product, product_quantity: 1, user_id: user?._id, product_id: product?.product_id?._id };
            axios.post("/api/cartitem", payload)
                .then(res => res.data)
                .then(async (data) => {
                    if (data.success) {
                        axios.get("/api/cartitem")
                            .then(res => res.data)
                            .then(data => dispatch(addToCart(data.cartItems)))
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="w-full max-w-[700px] flex itm justify-center gap-4 p-4 bg-white">
            <Image src={product?.product_id?.img_url || "/productImg.jpg"} alt="" className="w-1/3" width={400} height={400} />
            <div className="flex flex-col gap-2">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{product?.product_id?.product_name} <span className="text-xs font-normal">({product?.product_id?.product_category})</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product?.product_id?.price}</h1>
                </div>
                <h1 className="font-mono">{product?.product_id?.product_description?.substring(0, 100)}...</h1>

                <div className="flex items-center justify-between">
                    <div className="w-fit flex items-center justify-around gap-3 px-6 rounded-3xl shadow-[0_0_2px_black]">
                        <FontAwesomeIcon size="xs" icon={faTrashCan} className="h-[14px] cursor-pointer hover:text-red-800 active:scale-105" onClick={handleDeleteItem} />
                        <div className="text-blue-800 font-bold text-lg">{product?.product_quantity}</div>
                        <FontAwesomeIcon size="xs" icon={faPlus} className="h-[14px] cursor-pointer hover:text-red-800 active:scale-105" onClick={handleAddItemQuantity} />
                    </div>
                    <div className="flex gap-2">
                        <div className="font-bold text-gray-400">total : </div>
                        <div className="text-gray-950">Rs.{product.product_quantity * product.product_id.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
