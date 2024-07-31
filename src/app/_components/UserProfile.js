
import React from 'react';
import { useAuth } from './AuthenticationProvider';
import Link from 'next/link';

export default function UserProfile() {
    const USER = useAuth();

    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-no-repeat bg-center bg-contain " style={{ minHeight: "calc(100vh - 4rem)" }}>
            <div className='text-white bg-gradient-radial from-rose-900 via-sky-700 to-cyan-900 dark:bg-gradient-to-tr dark:from-slate-900 dark:via-cyan-950 dark:to-slate-950 shadow-[0_0_7px_black] dark:shadow-[0_0_7px_white] w-[98%] max-w-[700px] min-h-[50vh] flex flex-col gap-3 items-center justify-evenly p-4 rounded-2xl'>
                <h1 className='text-yellow-400 drop-shadow-[0_0_3px_pink]'>You are Welcome, At Your Profile</h1>
                <p className=""><span className="text-gray-400">Name : </span>{USER.user?.name} <span className="text-gray-400">({USER.user?.role})</span></p>
                <p className=""><span className="text-gray-400">Email : </span>{USER.user?.email}</p>
                <p className=""><span className="text-gray-400">MobileNo : </span>{USER.user?.mobileNo}</p>
                <button className='py-2 px-5 bg-red-900 hover:bg-red-800 hover:ring-2 ring-gray-400 rounded-lg' onClick={USER.logout}>Logout</button>
                <Link href={'/profile/newproducts'} className='' >add new product</Link>
            </div>
        </div>
    )
}
