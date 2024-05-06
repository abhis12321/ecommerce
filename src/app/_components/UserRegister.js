
import React, { useState } from 'react';

export default function UserRegister({ role , setRole }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [name, setName] = useState('');

  const handleUserRegistration = e => {
    e.preventDefault();
    // axios.post('/api/newUserRegister' , {
    //     email,
    //     password,
    //     mobileNo,
    //     name,
    //     role:"seller",
    // })

    console.log(email, password, mobileNo, name, role);
  }


  return (
    <div className="flex flex-col items-center justify-center" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <form className='text-white relative top-3 bg-gradient-to-t from-slate-900 via-cyan-950 to-slate-950 shadow-[0_0_7px_white] w-[98%] max-w-[800px] m-auto rounded-2xl py-8 flex flex-col gap-3 items-center justify-center' autoComplete='on' onSubmit={handleUserRegistration}>
        <h1 className='mx-auto text-center xs:px-8 py-4 text-3xl xs:text-4xl rounded-md w-[98%] xs:w-fit font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>New Registration</h1>
        <input name='name' type="text" value={name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Name' required />
        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Email' required />
        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='password' required />
        <input name='mobileNo' type="Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Contact Number' required />
        <select name="status" value={role} onChange={(e) => setRole(e.target.value)} className=" outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 " >
          <option value="customer" className=''>Customer Registration</option>
          <option value="seller" className=''>Seller Registration</option>
        </select>
        <input type="submit" className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-md mx-auto temd-center focus:bg-cyan-950 bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>
    </div>
  )
}