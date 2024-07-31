"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './_components/ProductCard'
import axios from 'axios';

export default function Page() {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios.get('api/products')
      .then(res => res.data)
      .then(result => {
        if(result.success) {
          setProducts(result.data);
        } else {
          alert(result.messgae);
        }
      })
      .catch(error => console.log(error.messgae))
  } , []);

return (
  <div className='flex items-center justify-center' style={{minHeight:'calc(100vh - 4rem'}}>
    {
      products ? 
      <div className="flex gap-7">        
        {products.map((product , index) => <ProductCard key={index} product={product}/>)}
      </div>
      :
      <div className="mx-auto h-40 w-40 rounded-full animate-spin border-t-4 border-slate-900 dark:border-white flex items-center justify-center"><div className="h-24 w-24 rounded-full border-r-4 border-slate-700 dark:border-white"></div></div>
    }
  </div>
)
}
