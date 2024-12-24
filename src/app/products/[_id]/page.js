"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/app/_components/Loading";
import ProductFullInfo from "@/app/_components/ProductFullInfo";


export default function Page({ params }) {
  const [product, setProduct] = useState();

  const loadProduct = ({ _id }) => {
    axios.get(`/api/products/${_id}`)
      .then(res => res.data)
      .then(data => data.product)
      .then(product => setProduct(product))
      .catch(error => console.error(error.message))
  }
  useEffect(() => {
    loadProduct(params);
  }, [])

  return (
    <div className=''>
      {
        product ? <ProductFullInfo product={product} />
          :
          <Loading />
      }
    </div>
  )
}
