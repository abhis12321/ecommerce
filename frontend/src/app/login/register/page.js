"use client"
import React, { useState } from 'react';

export default function Page() {
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [mobileNo , setMobileNo] = useState();
  const [name , setName] = useState();

  return (
    <div className="flex flex-col items-center" style={{ minHeight: "calc(100vh - 4rem)" }}>      
      {/* <h1 className="mx-auto mb-4 text-center py-4 xs:px-8 my-2 text-3xl xs:text-4xl rounded-md xs:border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-full xs:w-fit">
          Registration Page         
        </h1> */}
      <form className='text-white relative top-3 bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_0_10px_white] w-[95%] max-w-[900px] m-auto rounded-2xl py-14 flex flex-col gap-3 items-center justify-center' autoComplete='on'>
        <h1 className="mx-auto mb-4 py-4  xs:px-8 rounded-xl text-3xl font-bold bg-teal-950 text-center w-[95%] xs:w-fit shadow-[0_0_5px_white]">New Resistration</h1>
        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-xl mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='email' required />
        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-xl mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='password' required />
        <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-xl mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Name' required />
        <input name='mobileNo' type="Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950 py-2 px-3 rounded-xl mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='semester' required />
        <input type="submit" className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-xl mx-auto text-center focus:bg-cyan-950 bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>

    </div>
  )
}
