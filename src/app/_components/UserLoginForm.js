import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useAuth } from './AuthenticationProvider';

export default function UserLoginForm({ setOption }) {
    const USER = useAuth();
    const [user_role, setRole] = React.useState('customer');
    const [email, setEmail] = React.useState("");
    const [password, setPass] = React.useState("");

    const handleUserLogin = (e) => {
        e.preventDefault();
        let data = { user_role, email, password };
        axios.patch('/api/users/', data)
            .then(res => res.data)
            .then(data => data.success ? USER.login(data.user) : alert(data.message))
            .catch(error => alert("bad request", error.message));

        setEmail('');
        setPass('');
        setRole('customer')
    }


    return (
        <form onSubmit={handleUserLogin} className='w-[94%] max-w-[700px] py-4 rounded-xl flex flex-col gap-1 items-center' autoComplete='on'>
            <select name="status" value={user_role} onChange={(e) => setRole(e.target.value)} className='w-[96%] outline-none invalid:text-pink-600 font-semibold bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-800/20 shadow-[0_0_2px_gray_inset] py-2 px-3 rounded-md text-center' >
                <option value="seller" className=''>Seller Login</option>
                <option value="admin" className=''>Admin Login</option>
                <option value="customer" className=''>Customer Login</option>
            </select>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[96%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold  bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-800/20 shadow-[0_0_2px_gray_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder='email' name='email' required />

            <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className='w-[96%] max-w-[600px] outline-none invalid:text-pink-600 font-semibold  bg-slate-950/10 hover:bg-slate-950/15 focus:bg-blue-800/20 shadow-[0_0_2px_gray_inset] py-2 px-3 rounded-md mx-auto text-center' placeholder='password' name='password' required />

            <div className="w-[96%] max-w-[600px] flex items-center justify-evenly text-sm font-semibold text-blue-800" >
                <Link href={`/`} className="underline hover:text-blue-600">Resend Verification Link</Link>
                <Link href={`/forgotPassword`} className="underline hover:text-blue-600">forgot password</Link>
            </div>

            <input type="submit" value={"login"} className={`w-[96%] p-2 rounded-md text-center outline-none bg-red-700 hover:bg-red-600 active:bg-orange-600 font-semibold text-white cursor-pointer`} />
        </form>
    )
}
