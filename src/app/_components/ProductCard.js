"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product, handleFullInfo }) {
  return (
    <Link href={'/'} className='h-[400px] w-[285px] rounded-sm shadow-[0_0_2px_black] bg-white flex items-center flex-col overflow-hidden' onClick={handleFullInfo}>
      <Image src={product.img_url || "/productImg.jpg"} alt='product-img' className='flex-1 w-full h-fit min-h-[300px]' width={500} height={500} />
      <div className="w-full px-8 py-2 flex gap-2 flex-col items-center justify-center my-auto font-mono text-gray-500">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-gray-900">{ product.product_name }</h1>
          <h3 className="text-lg font-semibold">Rs.{ product.price }</h3>
        </div>
        <div className="w-full flex items-center justify-between text-xs">
          <h1 className="">Available { product.product_category } : </h1>
          <h1 className="">~{ product.available_stock || 0 }</h1>
        </div>
      </div>
    </Link>
  )
}
