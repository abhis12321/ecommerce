"use client"
import axios from 'axios';
import { useState } from 'react';
import ImageForm from './ImageForm';
import { useAuth } from './AuthenticationProvider';

export default function ProductForm() {
  const USER = useAuth();
  const [product_name, setName] = useState('');
  const [product_description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [product_category, setCategory] = useState('Garments');
  const [available_stock, setAvailableStocks] = useState('');
  const [img_url, setImgUrl] = useState("/productImg.jpg");

  const handleNewProduct = e => {
    e.preventDefault();
    let data = { product_name, product_description, price, product_category, available_stock, seller_id: USER.user._id, img_url };
    
    axios.post('/api/products', data)
      .then(res => res.data)
      .then(data => alert(data.message))
      .catch(error => alert(error.message));

    setName('');
    setDescription('');
    setPrice('');
    setCategory('Garments');
    setAvailableStocks('');
  }


  return (
    <div className="flex items-center justify-center w-full" style={{minHeight:"calc(100vh - 4rem)"}}>
      <form className='text-white bg-gradient-to-t from-cyan-900 dark:from-slate-900 via-gray-500 dark:via-cyan-950 to-cyan-900 dark:to-slate-950 shadow-[0_0_7px_white] w-[96%] max-w-[450px] m-auto rounded-2xl py-3 flex flex-col gap-[6px] items-center justify-center' autoComplete='on' onSubmit={handleNewProduct}>
        <h1 className="hidden sm:block w-fit text-yellow-400 drop-shadow-[0_0_3px_black] text-sm">Fill all the fields to add the product</h1>

        <div className="flex gap-2 items-center justify-evenly w-[96%] max-w-[380px]">
          <ImageForm img_url={img_url} setImgUrl={setImgUrl} border_radius={"rounded"}/>
          <select name="category" value={product_category} onChange={(e) => setCategory(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-[6px] xs:px-3 rounded-md text-center ring-cyan-600 ring-2' >
            <option value="Sports" className=''>Sports</option>
            <option value="Garments" className=''>Garments</option>
            <option value="Laptops" className=''>Laptops</option>
            <option value="Cameras" className=''>Cameras</option>
            <option value="Headphones" className=''>Headphones</option>
            <option value="Electronics" className=''>Electronics</option>
            <option value="Accessories" className=''>Accessories</option>
          </select>
        </div>

        <input name='name' type="text" value={product_name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter product name' required />

        <input name='Number' type="price" value={price} onChange={e => setPrice(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='product price' required />

        <textarea value={product_description} onChange={e => setDescription(e.target.value)} placeholder='enter product description' cols="30" rows="5" className='outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2' required></textarea>

        <input name='stock' type="Number" value={available_stock} onChange={e => setAvailableStocks(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='no. available stock' required />

        <input type="submit" value="add product" className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-md mx-auto temd-center bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>
    </div>
  )
}