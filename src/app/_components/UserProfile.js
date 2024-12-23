import Link from 'next/link';
import Image from 'next/image';
import { logout } from '@/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UserProfile() {
    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();

    return (
        <div className='w-[98%] max-w-[700px] min-h-[50vh] text-gray-800 bg-white shadow-[0_0_7px_black] flex flex-col gap-3 items-center justify-evenly px-1 py-4 rounded-2xl'>
            <h1 className='text-yellow-400 drop-shadow-[0_0_3px_pink]'>You are Welcome, At Your Profile</h1>
            <Image src={user?.img_url ? user?.img_url : "/profileImg.jpg"} alt='logo' className='h-[250px] w-[250px] xs:h-[300px] xs:w-[300px] rounded-full' width={300} height={300} />
            <p className=""><span className="text-gray-400">Name : </span>{user?.user_name} <span className="text-gray-400">({user?.user_role})</span></p>
            <p className=""><span className="text-gray-400">Email : </span>{user?.email}</p>
            <p className=""><span className="text-gray-400">MobileNo : </span>{user?.mobile_no}</p>
            <button className='py-[5px] px-6 text-white hover:text-red-600 hover:font-bold bg-red-800 hover:bg-red-600/40 ring-2 ring-red-800 hover:ring-red-600 rounded-lg text-sm font-semibold' onClick={() => dispatch(logout())}>Logout</button>
            <Link href={'/profile/newproducts'} className={`${user?.user_role === "customer" && "hidden"} py-[5px] px-6 rounded-lg bg-blue-700/50 hover:bg-blue-700/30 ring-2 ring-blue-700/50 text-sm font-semibold`} >add new product</Link>
        </div>
    )
}
