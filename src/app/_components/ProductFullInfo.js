import React from 'react'

export default function ProductFullInfo({ product, handleFullInfo }) {
    return (
        <div className='h-[100vh] w-full fixed top-0 left-0 z-10 bg-blue-50 flex items-center justify-center'>
            <div className="p-4 sm:p-8 bg-white rounded-lg relative flex flex-col justify-between gap-6 shadow-[0px_0px_15px_gray_inset] text-red-950">
                <div className="absolute top-[-3rem] right-[-1rem] px-4 py-2 rounded-full ring-1 ring-red-600 bg-red-600/20 hover:bg-red-600 text-red-600 hover:text-white font-bold text-xl cursor-pointer" onClick={handleFullInfo}>X</div>
                <h1 className=""><span className="text-gray-500">Name : </span>{product.product_name}</h1>
                <h1 className=""><span className="text-gray-500">category : </span>{product.product_category}</h1>
                <h1 className=""><span className="text-gray-500">price : </span>{product.price}</h1>
                <h1 className=""><span className="text-gray-500">stocks : </span>{product.available_stock}</h1>
                <h1 className=""><span className="text-gray-500">description : </span>{product.product_description}</h1>
            </div>
        </div>
    )
}
