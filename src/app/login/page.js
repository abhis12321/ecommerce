"use client"
import Link from 'next/link';
import React from 'react';

export default function Page() {
  const [password , setPass] = React.useState("");
  const [email , setEmail] = React.useState("");

  return (
    <div className="flex flex-col gap-5 items-center justify-center bg-slate-950 bg-no-repeat bg-center bg-contain ">
        <h1 className='mx-auto text-center py-4 px-8 sm:my-2 text-4xl rounded-md border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit'>Login Page</h1>
        <form className='bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_0_10px_white] w-[98%] sm:w-[95%] md:w-[60%] py-8 rounded-xl min-h-[280px] text-white opacity-90' autoComplete='on'>
          <h1 className=" mb-5 text-center text-2xl font-semibold drop-shadow-[0_0_5px_black]">Login with your email-id</h1>
          
          <input type="email" value = {email} onChange={(e)=> setEmail(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none bg-slate-950 block m-4 p-2 rounded mx-auto text-center w-[90%] max-w-[500px] bg-inherit shadow-[0_0_4px_white]' placeholder='email' name='email' required/>
          <input type="password" value = {password} onChange={(e)=> setPass(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none bg-slate-950 block m-4 p-2 rounded mx-auto text-center w-[90%] max-w-[500px] bg-inherit shadow-[0_0_4px_white]' placeholder='password' name='password' required/>
          <div className="flex items-center justify-evenly" >
            <Link href={`/verification/resend`} className="drop-shadow-[0_0_5px_red]">Resend Verification Link</Link>
            <Link href={`/login/forgot`} className="drop-shadow-[0_0_5px_red]">forgot password</Link>
          </div>
          <div className="w-[90%] max-w-[500px] m-auto flex justify-between pt-2">
            <button type='submit' className='w-[120px] xm:w-[150px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 font-mono' >Login</button>
            <Link href={`/register`} className='w-[120px] xm:w-[150px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 font-mono' >Resister New</Link>
          </div>
        </form>
    </div>
  )
}
