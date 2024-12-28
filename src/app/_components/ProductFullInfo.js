"use client"
import axios from 'axios';
import Image from 'next/image';
import { addToCart } from '@/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


export default function ProductFullInfo({ product }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);
    const [activeImage, setActiveImage] = useState(product?.images[0]);

    const handleAddToCart = () => {
        if (!user?._id) {
            alert("you are not logged in");
        } else {
            const payload = { ...product, product_quantity: 1, user_id: user?._id, product_id: product?._id };
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
        <div className='h-nav w-full bg-blue-50 flex items-center justify-center'>
            <div className="w-full max-w-[800px] p-4 sm:p-8 bg-white rounded-lg relative flex flex-col justify-between items-center gap-6 shadow-[0px_0px_15px_gray_inset] text-gray-900">
                <div className="w-full flex flex-wrap items-center justify-around overflow-hidden">
                    <div className="w-[330px] h-[400px] flex items-center justify-center">
                        <Image src={activeImage || "/productImg.jpg"} alt='product-img' className='w-fit max-w-[330px] max-h-[400px] h-fit' width={500} height={500} />
                    </div>
                    <div className="flex flex-col gap-[3px]">{
                        product?.images?.map(imgUrl => <div key={imgUrl} className={`w-[100px] h-[100px] shadow-[0_0_1px_black] flex items-center justify-center rounded hover:bg-cyan-300/20 cursor-pointer bg-gray-100 ${activeImage === imgUrl && "bg-indigo-100"}`} onClick={() => setActiveImage(imgUrl)}>
                            <Image src={imgUrl || "/productImg.jpg"} alt='product-img' className='w-fit max-w-[100px] max-h-[100px] h-fit' width={500} height={500} />
                        </div>)
                    }</div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{product.product_title} <span className="text-xs font-normal">({product.product_category})</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product.price.toFixed(2)}</h1>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className=""><span className="text-gray-500">Available stocks : </span>{product.available_stock}</div>
                    <FontAwesomeIcon size='xs' icon={faCartPlus} className='h-6 cursor-pointer text-red-950 hover:text-blue-900 active:text-violet-700' onClick={handleAddToCart} />
                </div>
                <h1 className="font-mono font-semibold">{product.product_description}</h1>
            </div>
        </div>
    )
}
