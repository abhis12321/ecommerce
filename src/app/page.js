"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './_components/ProductCard'
import ImageSlider from './_components/ImageSlider';
import ProductFullInfo from './_components/ProductFullInfo';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [showFullInfo, setShowFullInfo] = useState();

  const handleFullInfo = (product) => {
    setShowFullInfo(product);
  }

  useEffect(() => {
    axios.get('api/products')
      .then(res => res.data)
      .then(data => data.success ? setProducts(data.products) : alert(data.messgae))
      .catch(error => console.error(error.messgae))
  }, []);

  return (
    <div className='flex flex-col items-center justify-center' style={{ minHeight: 'calc(100vh - 4rem' }}>
      <ImageSlider />
      {
        showFullInfo ? <ProductFullInfo product={showFullInfo} handleFullInfo={() => handleFullInfo()} />
          :
          products ?
            <div className="flex gap-7 flex-wrap items-center justify-around py-8">
              {products.map((product, index) => <ProductCard key={product._id} product={product} handleFullInfo={() => handleFullInfo(product)} />)}
            </div>
            :
            <div className="mx-auto h-40 w-40 rounded-full animate-spin border-t-4 border-slate-900 dark:border-white flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-r-4 border-slate-700 dark:border-white"></div>
            </div>
      }
    </div>
  )
}
