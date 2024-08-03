"use client"
import Image from 'next/image'
import React from 'react'

export default function ProductCard({ product }) {
  console.log(product);

  return (
    <div className='h-[400px] w-[300px] shadow-[0_0_5px_white] bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 flex items-center flex-col rounded-lg overflow-hidden'>
      <Image src={product.img_url} alt='product-img' className='w-full h-fit min-h-[230px]' width={500} height={500} />
      <div className="flex gap-3 flex-col items-center justify-center my-auto text-sm font-semibold font-mono">
        <h1 className=""><span className="text-gray-500">Name : </span>{product.product_name}</h1>
        <h1 className=""><span className="text-gray-500">category : </span>{product.product_category}</h1>
        <h1 className=""><span className="text-gray-500">price : </span>{product.price}</h1>
        <h1 className=""><span className="text-gray-500">stocks : </span>{product.available_stock}</h1>
        {/* <h1 className=""><span className="text-gray-500">description : </span>{product.product_description}</h1> */}
      </div>
    </div>
  )
}
