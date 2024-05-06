
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
            <form className='text-white bg-gradient-to-t from-cyan-900 dark:from-slate-900 via-gray-500 dark:via-cyan-950 to-cyan-900 dark:to-slate-950 shadow-[0_0_7px_white] w-[98%] max-w-[800px] py-8 rounded-xl min-h-[280px] opacity-90 flex flex-col gap-3' autoComplete='on' onSubmit={handleUserLogin}>
                <h1 className='mx-auto py-1 text-center text-4xl rounded-md font-extrabold drop-shadow-[0_0_1px_black] text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 w-fit'>Login Page</h1>
                <h1 className="mb-2 text-center text-lg text-yellow-600 font-semibold drop-shadow-[0_0_5px_black]">Login with your email-id & Password</h1>

                <select name="status" value={role} onChange={(e) => setRole(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none  bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 block p-2 rounded mx-auto text-center w-[95%] max-w-[600px] shadow-[0_0_3px_white]' >
                    <option value="customer" className=''>Customer Registration</option>
                    <option value="seller" className=''>Seller Registration</option>
                </select>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none  bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 block p-2 rounded mx-auto text-center w-[95%] max-w-[600px] shadow-[0_0_3px_white]' placeholder='email' name='email' required />
                <input type="password" value={password} onChange={(e) => setPass(e.target.value)} className=' focus:ring-cyan-600 focus:ring-2 outline-none  bg-slate-950/70 hover:bg-slate-950 focus:bg-slate-950 block p-2 rounded mx-auto text-center w-[95%] max-w-[600px] shadow-[0_0_3px_white]' placeholder='password' name='password' required />

                <div className="flex items-center justify-evenly" >
                    <Link href={`/verification/resend`} className="drop-shadow-[0_0_5px_red]">Resend Verification Link</Link>
                    <Link href={`/login/forgot`} className="drop-shadow-[0_0_5px_red]">forgot password</Link>
                </div>
                <div className="w-[95%] max-w-[600px] m-auto flex justify-between">
                    <Link href={`/registerUser`} className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' >Resister New</Link>
                    <button type='submit' className='w-[130px] xs:w-[160px] text-center rounded-md bg-red-900 py-2 hover:bg-red-700 active:bg-indigo-950 font-mono' >Login</button>
                </div>
            </form>
        </div>
    )
}
