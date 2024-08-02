
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useAuth } from './AuthenticationProvider';

export default function UserLogin({setOption}) {
    const USER = useAuth();
    const [role, setRole] = React.useState('customer');
    const [email, setEmail] = React.useState("");
    const [password, setPass] = React.useState("");

    const handleUserLogin = e => {
        e.preventDefault();
        console.log(email, password, role);

        axios.patch('/api/users/', {
            role,
            email,
            password,
        })
            .then(res => res.data)
            .then(data => {
                if (data.success) {
                    USER.login(data.user)
                } else {
                    alert(data.message)
                }
            });

        setEmail('');
        setPass('');
        setRole('customer')
    }


    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <form onSubmit={handleUserLogin} className='text-white bg-gradient-radial from-rose-900 via-sky-700 to-cyan-900 dark:bg-gradient-to-tr  dark:from-slate-900 dark:via-cyan-950 dark:to-slate-950 shadow-[0_0_7px_yellow] dark:shadow-[0_0_7px_white] w-[98%] max-w-[700px] py-8 rounded-xl min-h-[280px] opacity-90 flex flex-col gap-3 items-center' autoComplete='on'>
                <h1 className='mx-auto text-center py-1 text-3xl xs:text-4xl rounded-md w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-700 drop-shadow-[0_0_1px_white]'>Login Page</h1>

                <div className="flex flex-col sm:flex-row gap-2 items-center justify-evenly w-[95%] max-w-[600px]">
                    <h1 className="w-fit text-yellow-400 drop-shadow-[0_0_3px_black]">Login with your email-id & Password</h1>
                    <select name="status" value={role} onChange={(e) => setRole(e.target.value)} className='outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-2 px-3 rounded-md text-center ring-cyan-600 ring-2' >
                        <option value="seller" className=''>Seller Login</option>
                        <option value="admin" className=''>Admin Login</option>
                        <option value="customer" className=''>Customer Login</option>
                    </select>
                </div>

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='email' name='email' required />
                <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className=' outline-none invalid:text-pink-600 w-[95%] max-w-[600px] font-semibold shadow-[0_0_3px_white] bg-slate-950/50 hover:bg-slate-950/70 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center focus:ring-cyan-600 focus:ring-2 ' placeholder='password' name='password' required />

                <div className="w-[95%] max-w-[600px] flex items-center justify-evenly text-xs xs:text-sm sm:text-base" >
                    <Link href={`/`} className="drop-shadow-[0_0_3px_black] underline hover:text-blue-500">Resend Verification Link</Link>
                    <Link href={`/forgotPassword`} className="drop-shadow-[0_0_3px_black] underline hover:text-blue-500">forgot password</Link>
                </div>
                <div className="w-[95%] max-w-[600px] m-auto flex justify-between text-sm sm:text-base">
                    <p className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' onClick={e => setOption(1)}>Resister New</p>
                    <button type='submit' className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' >Login</button>
                </div>
            </form>
        </div>
    )
}
