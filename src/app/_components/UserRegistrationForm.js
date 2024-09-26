import axios from 'axios';
import React, { useState } from 'react';
import ImageForm from './ImageForm';
import CountryCode from './CountryCode';

export default function UserRegistrationForm({ setOption }) {
  const [user_name, setName] = useState('');
  const [user_gender, setGender] = useState("male");
  const [user_role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country_code, setCountryCode] = useState('+91 (India)');
  const [mobile_no, setMobileNo] = useState('');
  const [user_address, setAddress] = useState('');
  const [img_url, setImgUrl] = useState("/profileImg.jpg");
  // temporary hooks
  const [search, setSearch] = useState('');
  const [searchable, setSearchable] = useState(false);

  const handleUserRegistration = e => {
    e.preventDefault();
    const body = { user_name, user_gender, user_role, email, password, country_code, mobile_no, user_address, img_url };

    axios.post('/api/users', body)
      .then(res => res.data)
      .then(data => alert(data.message))
      .catch(error => alert("bad request!" , error.message));
      
    setRole('customer');
    setEmail('');
    setPassword("");
    setMobileNo('');
    setName('');
    setOption(0);
  }


  return (
      <form className='w-[92%] max-w-[600px] pb-4 text-gray-600 bg-white shadow[0_0_4px_black] rounded-2xl gap-1 flex flex-col items-center justify-center' autoComplete='on' onSubmit={handleUserRegistration}>
        <div className="flex flex-row sm:flex-row gap-2 items-center justify-evenly w-[98%] max-w-[600px]">
          {/* <ImageForm img_url={img_url} setImgUrl={setImgUrl} border_radius={"rounded-full"}/> */}
          {/* <div className="flex flex-col gap-2 items-center justify-center"> */}
            <select name="status" value={user_gender} onChange={(e) => setGender(e.target.value)} className='w-1/2 outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-[6px] px-3 rounded-md text-center' >
              <option value="male" className=''>male</option>
              <option value="female" className=''>female</option>
              <option value="others" className=''>others</option>
            </select>
            <select name="status" value={user_role} onChange={(e) => setRole(e.target.value)} className='w-1/2 outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-[6px] px-3 rounded-md text-center' >
              <option value="seller" className=''>Seller</option>
              <option value="customer" className=''>Customer</option>
            </select>
          {/* </div> */}
        </div>

        <div className="w-[98%] max-w-[600px] flex flex-col xs:flex-row gap-2 items-center justify-between relative">
          <p className={`w-full xs:w-fit outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 py-2 px-4 rounded-md flex gap-3 items-center justify-between ${searchable && "ring-cyan-600 ring-1"}`} onClick={e => setSearchable(prev => !prev)}>{country_code.length > 20 ? country_code.substring(0, 20) : country_code} <span className='text-gray-600 font-bold rotate-90 scale-y-150 cursor-default'>&gt;</span></p>

          <input name='mobileNo' type="Number" value={mobile_no} onChange={e => setMobileNo(e.target.value)} className='w-full xs:w-fit flex-1 outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-2 px-3 rounded-md mx-auto text-center ' placeholder='your contact number' required />
          <CountryCode country_code={country_code} setCountryCode={setCountryCode} search={search.toLowerCase()} setSearch={setSearch} setSearchable={setSearchable} searchable={searchable} />
        </div>

        <input name='name' type="text" value={user_name} onChange={e => setName(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-2 px-3 rounded-md mx-auto text-center ' placeholder='enter your name' required />

        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-2 px-3 rounded-md mx-auto text-center ' placeholder='enter your email-id' required />

        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-2 px-3 rounded-md mx-auto text-center ' placeholder='create a password' required />

        <input type="submit" value={'Register'} className='w-[98%] rounded-md text-white/90 bg-red-800 hover:bg-red-600 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer' required />

        {/* <textarea name='mobileNo' type="text" rows={4} value={user_address} onChange={e => setAddress(e.target.value)} className='w-[98%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_gray_inset] bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-600/20 py-2 px-3 rounded-md mx-auto text-center ' placeholder='enter your current address' required ></textarea> */}
      </form>
  )
}