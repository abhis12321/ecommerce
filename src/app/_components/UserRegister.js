
import axios from 'axios';
import React, { useState } from 'react';
import ImageForm from './ImageForm';
import CountryCode from './CountryCode';

export default function UserRegister(props) {
  const [user_role, setRole] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country_code, setCountryCode] = useState('+91');
  const [mobile_no, setMobileNo] = useState('');
  const [user_name, setName] = useState('');
  const [user_address, setAddress] = useState('');
  const [img_url, setImgUrl] = useState("/profileImg.jpg");
  const [search, setSearch] = useState('');
  const [searchable, setSearchable] = useState(false);

  const handleUserRegistration = e => {
    e.preventDefault();
    axios.post('/api/users', {
      email,
      password,
      mobile_no,
      user_name,
      user_role,
    })
      .then(res => res.data)
      .then(data => console.log(data))

    // console.log(email, password, mobileNo, name, role);
    setRole('customer');
    setEmail('');
    setPassword("");
    setMobileNo('');
    setName('');
    props.setLogin(true);
  }


  return (
    <div className="flex flex-col items-center justify-center" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <form className='text-white bg-gradient-to-t from-cyan-900 dark:from-slate-900 via-gray-500 dark:via-cyan-950 to-cyan-900 dark:to-slate-950 relative top-3 shadow-[0_0_7px_white] w-[96%] max-w-[800px] m-auto rounded-2xl py-8 flex flex-col gap-1 items-center justify-center' autoComplete='on' onSubmit={handleUserRegistration}>
        <h1 className='mx-auto text-center py-1 text-3xl xs:text-4xl rounded-md w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 drop-shadow-[0_0_1px_white]'>New Registration</h1>

        <div className="flex flex-col sm:flex-row gap-2 items-center justify-evenly w-[96%] max-w-[600px]">
          <h1 className="w-fit text-yellow-400 drop-shadow-[0_0_3px_black]">Fill all the fields to register</h1>
          <select name="status" value={user_role} onChange={(e) => setRole(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-2 px-3 rounded-md text-center ring-cyan-600 ring-2' >
            <option value="seller" className=''>Seller Login</option>
            <option value="customer" className=''>Customer Login</option>
          </select>
        </div>
        <ImageForm img_url={img_url} setImgUrl={setImgUrl} />
        <input name='name' type="text" value={user_name} onChange={e => setName(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Name' required />
        <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='Email' required />
        <input name='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='password' required />
        <div className="w-[96%] max-w-[600px] flex gap-2 items-center justify-between relative">
          <p className="outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 py-2 px-4 rounded-md flex gap-3 items-center" onClick={e => setSearchable(prev => !prev)}>{country_code} <span className='text-gray-600 font-bold rotate-90 scale-y-150 cursor-default'>&gt;</span></p>
          {searchable && <input name='search' type="text" value={search} onChange={e => setSearch(e.target.value)} className='max-w-[150px] outline-none invalid:text-pink-600 font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md focus:ring-cyan-600 focus:ring-2 ' placeholder='country name' required />}
          <input name='mobileNo' type="Number" value={mobile_no} onChange={e => setMobileNo(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='contact number' required />
          <CountryCode country_code={country_code} setCountryCode={setCountryCode} search={search.toLowerCase()} setSearchable={setSearchable} searchable={searchable} />
        </div>
        <input name='mobileNo' type="text" value={user_address} onChange={e => setAddress(e.target.value)} className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='address' required />
        <input type="submit" className=' outline-none invalid:text-pink-600 w-[96%] max-w-[600px] font-semibold shadow-[0_0_3px_white] py-2 px-3 rounded-md mx-auto temd-center focus:bg-cyan-950 bg-red-900 hover:bg-red-700 active:bg-violet-700 cursor-pointer' />
      </form>
    </div>
  )
}