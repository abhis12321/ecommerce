"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product?._id}`} className='h-[400px] w-[285px] rounded-sm shadow-[0_0_2px_black] bg-white flex items-center flex-col overflow-hidden'>
      <div className="flex items-center justify-center h-[300px] flex-1">
        <Image src={product.images[0] || "/productImg.jpg"} alt='product-img' className='w-fit h-fit max-h-[300px]' width={500} height={500} />
      </div>
      <div className="w-full px-8 py-2 flex gap-2 flex-col items-center justify-center my-auto font-mono text-gray-500">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-gray-900">{product.product_title}</h1>
          <h3 className="text-lg font-semibold">Rs.{product.price.toFixed(2)}</h3>
        </div>
        <div className="w-full flex items-center justify-between text-xs">
          <h1 className="">Available {product.product_category} : </h1>
          <h1 className="">~{product.available_stock || 0}</h1>
        </div>
      </div>
    </Link>
  )
}
