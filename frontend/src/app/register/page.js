"use client"
import React, { useState } from 'react';

export default function Page() {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [mobileNo , setMobileNo] = useState();
  const [name , setName] = useState();

  return (
    <div className="flex flex-col items-center" style={{ minHeight: "clc(100vh - 4rem)" }}>
      <form className='text-white relative top-3 bg-gradient-to-t from-slate-700 to-slate-950 shadow-[0_0_10px_white] w-[95%] max-w-[900px] m-auto rounded-2xl py-5 sm:py-14 flex flex-col gap-3 items-center justify-center' autoComplete='on'>
        <h1 className='mx-auto text-center mb-4 py-4 xs:px-8 xs:my-2 text-3xl xs:text-4xl rounded-md sm:border-2 w-[95%] xs:w-fit sm:shadow-[0_0_5px_pink] font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>New Registration</h1>
        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='email' required />
        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='password' required />
        <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Name' required />
        <input name='mobileNo' type="Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='semester' required />
        <input type="submit" className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-md mx-auto temd-center focus:bg-cyan-950 bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>
    </div>
  )
}
