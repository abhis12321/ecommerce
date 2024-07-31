"use client"
import React, { useState } from 'react'

export default function ProductCard({product}) {
  return (
    <div className='h-[400px] w-[300px] shadow-[0_0_5px_white] bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-around px-2 flex-col rounded-lg'>
        <h1 className=""><span className="text-gray-500">Name : </span>{product.name}</h1>
        <h1 className=""><span className="text-gray-500">category : </span>{product.category}</h1>
        <h1 className=""><span className="text-gray-500">price : </span>{product.price}</h1>
        <h1 className=""><span className="text-gray-500">stocks : </span>{product.stock}</h1>
        <h1 className=""><span className="text-gray-500">description : </span>{product.description}</h1>
    </div>
  )
}
