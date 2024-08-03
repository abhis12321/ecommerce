
import React from 'react';
import { useAuth } from './AuthenticationProvider';
import Link from 'next/link';
import Image from 'next/image';

export default function UserProfile() {
    const USER = useAuth();
    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <div className='text-white bg-gradient-radial from-rose-900 via-sky-700 to-cyan-900 dark:bg-gradient-to-tr dark:from-slate-900 dark:via-cyan-950 dark:to-slate-950 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] w-[98%] max-w-[700px] min-h-[50vh] flex flex-col gap-3 items-center justify-evenly px-1 py-4 rounded-2xl'>
                <h1 className='text-yellow-400 drop-shadow-[0_0_3px_pink]'>You are Welcome, At Your Profile</h1>
                <Image src={USER.user?.img_url ? USER.user?.img_url : "/profileImg.jpg"} alt='logo' className='rounded-full h-[250px] w-[250px] xs:h-[300px] xs:w-[300px]' width={300} height={300}/>
                <p className=""><span className="text-gray-400">Name : </span>{USER.user?.user_name} <span className="text-gray-400">({USER.user?.user_role})</span></p>
                <p className=""><span className="text-gray-400">Email : </span>{USER.user?.email}</p>
                <p className=""><span className="text-gray-400">MobileNo : </span>{USER.user?.mobile_no}</p>
                <button className='py-[5px] px-6 bg-red-800 hover:bg-red-800/40 ring-2 ring-red-800 rounded-lg text-sm font-semibold' onClick={USER.logout}>Logout</button>
                <Link href={'/profile/newproducts'} className={`${USER.user?.user_role === "customer" && "hidden"} py-[5px] px-6 rounded-lg bg-blue-700/50 hover:bg-blue-700/30 ring-2 ring-blue-700/50 text-sm font-semibold`} >add new product</Link>
            </div>
        </div>
    )
}
