import axios from 'axios';
import React, { useState } from 'react';
import ImageForm from './ImageForm';
import CountryCode from './CountryCode';

export default function UserRegister({setOption}) {
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
    <div className="fixed top-0 left-0 z-20 h-[100vh] w-full flex items-center justify-center bg-gray-700/90" >
      <form className='text-violet-950 dark:text-white from-blue-50 to-blue-50 bg-gradient-to-b  dark:from-blue-900/50 dark:via-cyan-950/90 dark:to-blue-950/60 shadow-[0_0_4px_black] dark:shadow-[0_0_4px_white] w-[98%] max-w-[600px] rounded-2xl px-1 sm:px-2 py-2 xs:py-[10px] gap-1 flex flex-col items-center justify-center' autoComplete='on' onSubmit={handleUserRegistration}>
        <div className={`w-full flex items-center justify-around pb-2 drop-shadow-[0_0_2px_gray]`}>
          <h1 className="flex rounded-lg text-3xl lg:text-4xl font-bold sm:font-extrabold text-center w-fit dark:text-white text-red-950 drop-shadow-[0_0_2px_black]">New Resistration</h1>
        </div>
        <div className="flex flex-row sm:flex-row gap-2 items-center justify-evenly w-[98%] max-w-[600px]">
          <ImageForm img_url={img_url} setImgUrl={setImgUrl} border_radius={"rounded-full"}/>
          <div className="flex flex-col gap-2 items-center justify-center">
            <select name="status" value={user_gender} onChange={(e) => setGender(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-[6px] px-3 rounded-md text-center ring-cyan-600 ring-2' >
              <option value="male" className=''>male</option>
              <option value="female" className=''>female</option>
              <option value="others" className=''>others</option>
            </select>
            <select name="status" value={user_role} onChange={(e) => setRole(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-[6px] px-3 rounded-md text-center ring-cyan-600 ring-2' >
              <option value="seller" className=''>Seller</option>
              <option value="customer" className=''>Customer</option>
            </select>
          </div>
        </div>

        <div className="w-[98%] max-w-[600px] flex flex-col xs:flex-row gap-2 items-center justify-between relative">
          <p className="w-full xs:w-fit outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 py-2 px-4 rounded-md flex gap-3 items-center justify-between" onClick={e => setSearchable(prev => !prev)}>{country_code.length > 20 ? country_code.substring(0, 20) : country_code} <span className='text-gray-600 font-bold rotate-90 scale-y-150 cursor-default'>&gt;</span></p>

          <input name='mobileNo' type="Number" value={mobile_no} onChange={e => setMobileNo(e.target.value)} className='w-full xs:w-fit flex-1 outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='your contact number' required />
          <CountryCode country_code={country_code} setCountryCode={setCountryCode} search={search.toLowerCase()} setSearch={setSearch} setSearchable={setSearchable} searchable={searchable} />
        </div>

        <input name='name' type="text" value={user_name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your name' required />

        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your email-id' required />

        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='create a password' required />

        <textarea name='mobileNo' type="text" rows={4} value={user_address} onChange={e => setAddress(e.target.value)} className=' outline-none invalid:text-pink-600 w-[98%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='enter your current address' required ></textarea>

        <div className="flex w-[98%] items-center justify-between gap[2px] border-[2px] border-cyan-500 dark:border-cyan-600 rounded-lg overflow-hidden">
          <div className="w-[50%] text-white/80 bg-orange-900 hover:bg-orange-700 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer border-r-[2px] border-cyan-500 dark:border-cyan-600" onClick={e => setOption(0)}>cancel</div>
          <input type="submit" value={'Register'} className='w-[50%] text-white/80 bg-red-800 hover:bg-red-600 active:bg-violet-900 p-2 text-center outline-none font-semibold cursor-pointer' required />
        </div>
      </form>
    </div>
  )
}