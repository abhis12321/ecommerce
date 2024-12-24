import axios from 'axios';
import Image from 'next/image';
import { addToCart } from '@/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ProductFullInfo({ product, handleFullInfo }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);

    const handleAddToCart = () => {
        if (!user?._id) {
            alert("you are not logged in");
        } else {
            const payload = { ...product, product_quantity: 1, user_id: user?._id, product_id: product?._id };
            axios.post("/api/cartitem" , payload)
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

    return (
        <div className='absolute top-0 left-0 h-nav w-full bg-blue-50 flex items-center justify-center'>
            <div className="w-full max-w-[800px] p-4 sm:p-8 bg-white rounded-lg relative flex flex-col justify-between gap-6 shadow-[0px_0px_15px_gray_inset] text-gray-900">
                <div className="absolute top-3 right-3 px-4 py-2 rounded-full ring-1 ring-red-600 bg-red-600/20 hover:bg-red-600 text-red-600 hover:text-white font-semibold text-xl cursor-pointer" onClick={handleFullInfo}>X</div>
                <Image src={product.images[0] || "/productImg.jpg"} alt='product-img' className='w-full h-fit' width={500} height={500} />
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{product.product_title} <span className="text-xs font-normal">({product.product_category})</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product.price}</h1>
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
