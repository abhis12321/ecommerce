
import React from 'react';
import Link from 'next/link';

export default function UserLogin({ role, setRole }) {
    const [email, setEmail] = React.useState("");
    const [password, setPass] = React.useState("");

    const handleUserLogin = e => {
        e.preventDefault();
        console.log(email, password);


        setEmail('');
        setPass('');
    }


    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <form className='text-white bg-gradient-to-t from-cyan-900 dark:from-slate-900 via-gray-400 dark:via-cyan-950 to-cyan-950 dark:to-slate-950 shadow-[0_0_7px_yellow] dark:shadow-[0_0_7px_white] w-[98%] max-w-[800px] py-8 rounded-xl min-h-[280px] opacity-90 flex flex-col gap-3 items-center' autoComplete='on' onSubmit={handleUserLogin}>

                <div className="flex flex-col sm:flex-row gap-2 items-center justify-around w-[98%] max-w-[600px] py-4">
                    <h1 className='mx-auto text-center py-1 text-3xl xs:text-4xl rounded-md w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-900 drop-shadow-[0_0_1px_black]'>Login Page</h1>
                    <select name="status" value={role} onChange={(e) => setRole(e.target.value)} className=' outline-none invalid:text-pink-600 w-fit font-semibold shadow-[0_0_3px_white] bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 py-2 px-3 rounded-md mx-auto text-center ring-cyan-600 ring-2' >
                        <option value="customer" className=''>Customer Login</option>
                        <option value="seller" className=''>Seller Login</option>
                    </select>
                </div>
                <h1 className="mb-2 text-center text-lg text-yellow-400 font-semibold drop-shadow-[0_0_3px_black]">Login with your email-id & Password</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none  bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 block p-2 rounded mx-auto text-center w-[95%] max-w-[600px] shadow-[0_0_3px_white]' placeholder='email' name='email' required />
                <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none  bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 block p-2 rounded mx-auto text-center w-[95%] max-w-[600px] shadow-[0_0_3px_white]' placeholder='password' name='password' required />

                <div className="w-[95%] max-w-[600px] flex items-center justify-evenly" >
                    <Link href={`/verification/resend`} className="drop-shadow-[0_0_5px_red] hover:text-yellow-400">Resend Verification Link</Link>
                    <Link href={`/login/forgot`} className="drop-shadow-[0_0_5px_red] hover:text-yellow-400">forgot password</Link>
                </div>
                <div className="w-[95%] max-w-[600px] m-auto flex justify-between">
                    <Link href={`/registerUser`} className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' >Resister New</Link>
                    <button type='submit' className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' >Login</button>
                </div>
            </form>
        </div>
    )
}
