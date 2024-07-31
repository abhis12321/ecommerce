"use client"
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from './AuthenticationProvider';

export default function ProductForm() {
  const USER = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Garments');
  const [availableStocks, setAvailableStocks] = useState('');

  const handleNewProduct = e => {
    e.preventDefault();
    axios.post('/api/products', {
        name,
        description ,
        price,
        category,
        availableStocks,
        sellerId:USER.user._id,
    })
      .then(res => res.data)
      .then(data => console.log(data))

    // console.log(email, password, mobileNo, name, role);
    
    setName('');
    setDescription('');
    setPrice('');
    setCategory('Garments');
    setAvailableStocks('');
  }


  return (
      <form className='text-white bg-gradient-to-t from-cyan-900 dark:from-slate-900 via-gray-500 dark:via-cyan-950 to-cyan-900 dark:to-slate-950 shadow-[0_0_7px_white] w-[96%] max-w-[800px] m-auto rounded-2xl py-8 flex flex-col gap-3 items-center justify-center' autoComplete='on' onSubmit={handleNewProduct}>
        <h1 className='mx-auto text-center py-1 text-3xl xs:text-4xl rounded-md w-fit font-bold xs:font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 drop-shadow-[0_0_1px_white]'>Add New Product</h1>

        <div className="flex gap-2 items-center justify-evenly w-[96%] max-w-[600px]">
          <h1 className="hidden sm:block w-fit text-yellow-400 drop-shadow-[0_0_3px_black]">Fill all the fields to add the product</h1>
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-2 px-3 rounded-md text-center ring-cyan-600 ring-2' >
            <option value="Sports" className=''>Sports</option>
            <option value="Garments" className=''>Garments</option>
            <option value="Laptops" className=''>Laptops</option>
            <option value="Cameras" className=''>Cameras</option>
            <option value="Headphones" className=''>Headphones</option>
            <option value="Electronics" className=''>Electronics</option>
            <option value="Accessories" className=''>Accessories</option>
          </select>
        </div>
        <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Name' required />
        <input name='Number' type="price" value={price} onChange={e => setPrice(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='price' required />
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Enter your message/description' cols="30" rows="10" className='outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2' required></textarea>
        <input name='stock' type="Number" value={availableStocks} onChange={e => setAvailableStocks(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='available stock' required />
        <input type="submit" value="add product" className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-md mx-auto temd-center bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>
  )
}