import Image from 'next/image'
import React from 'react'

export default function ProductFullInfo({ product, handleFullInfo }) {
    return (
        <div className='min-h-[100vh] w-full max-w-[800px] bg-blue-50 flex items-center justify-center'>
            <div className="p-4 sm:p-8 bg-white rounded-lg relative flex flex-col justify-between gap-6 shadow-[0px_0px_15px_gray_inset] text-gray-900">
                <div className="absolute top-3 right-3 px-4 py-2 rounded-full ring-1 ring-red-600 bg-red-600/20 hover:bg-red-600 text-red-600 hover:text-white font-semibold text-xl cursor-pointer" onClick={handleFullInfo}>X</div>
                <Image src={product.img_url || "/productImg.jpg"} alt='product-img' className='w-full h-fit max-w-[]' width={500} height={500} />
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{product.product_name} <span className="text-xs font-normal">({ product.product_category })</span></h1>
                    <h1 className="font-bold"><span className="text-gray-500">Rs. </span>{product.price}</h1>
                </div>
                <h1 className=""><span className="text-gray-500">Available stocks : </span>{product.available_stock}</h1>
                <h1 className="font-mono font-semibold">{product.product_description}</h1>
            </div>
        </div>
    )
}