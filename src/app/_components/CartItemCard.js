import axios from "axios";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function CartItemCard({ product }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);

    const loadCartItems = () => {
        axios.get("/api/cartitem")
            .then(res => res.data)
            .then(data => dispatch(addToCart(data.cartItems)))
    }

    const handleAddItemQuantity = ({ product_quantity }) => {
        if (!user?._id) {
            alert("you are not logged in");
        } else {
            const payload = { ...product, product_quantity, user_id: user?._id, product_id: product?.product_id?._id };
            axios.post("/api/cartitem", payload)
                .then(res => res.data)
                .then(async (data) => {
                    if (data.success) {
                        loadCartItems();
                    }
                })
                .catch((error) => console.error(error));
        }
    }

    return (
        <div className="w-full max-w-[700px] flex itm justify-center gap-4 p-4 bg-white shadow-[0_0_1px_black_inset]">
            <div className="w-1/3 aspect-square flex items-center justify-center">
                <Image src={product?.product_id?.images[0] || "/productImg.jpg"} alt="" className="max-h-[150px] w-fit" width={400} height={400} />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="w-full flex justify-between">
                    <h1 className="text-2xl font-bold">{product?.product_id?.product_title} <span className="text-xs font-normal">({product?.product_id?.product_category})</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product?.product_id?.price.toFixed(2)}</h1>
                </div>
                <h1 className="w-full font-mono">{product?.product_id?.product_description?.substring(0, 100)}...</h1>
                <div className="w-full flex items-center justify-between">
                    <div className="w-fit flex items-center justify-around rounded-xl shadow-[0_0_2px_gray_inset] overflow-hidden">
                        <FontAwesomeIcon size="xs" icon={faMinus} className="h-[14px] py-[7px] cursor-pointer text-blue-900 hover:text-red-800 active:scale-105 active:bg-violet-700 active:text-white duration-300 hover:bg-blue-200 pl-[10px] pr-[8px]" onClick={() => handleAddItemQuantity({ product_quantity: -1 })} />
                        <h3 className="w-8 text-center bg-orange-200/50 text-cyan-900 font-semibold text-lg">{product?.product_quantity}</h3>
                        <FontAwesomeIcon size="xs" icon={faPlus} className="h-[14px] py-[7px] cursor-pointer text-blue-900 hover:text-red-800 active:scale-105 active:bg-violet-700 active:text-white duration-300 hover:bg-blue-200 pl-[8px] pr-[10px]" onClick={() => handleAddItemQuantity({ product_quantity: +1 })} />
                    </div>
                    <div className="flex gap-2">
                        <div className="font-bold text-gray-400">total : </div>
                        <div className="text-gray-950">Rs.{(product.product_quantity * product.product_id.price).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
