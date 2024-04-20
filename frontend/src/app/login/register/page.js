import React from 'react'

export default function page() {
  return (
    <div className='flex items-center justify-center' style={{minHeight:'calc(100vh - 4rem)'}}>
      <div className="w-[95%] p-4 sm:p-8 rounded-xl max-w-[700px] bg-slate-900 flex flex-col gap-4 items-center justify-center">
        <h1 className="mx-auto mb-4 text-center py-4 sm:px-8 my-2 text-3xl xs:text-4xl rounded-md xs:border-2 border-white font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-full sm:w-fit">
          Registration Page
        </h1>
        <input type="text" name='name' placeholder='Enter your name' className='w-full py-2 px-4 text-center rounded-md bg-inherit shadow-[0_0_2px_white]' />
        <input type="email" name='email' placeholder='Enter you email' className='w-full py-2 px-4 text-center rounded-md bg-inherit shadow-[0_0_2px_white]' />
        <input type="password" name='password' placeholder='Enter you password' className='w-full py-2 px-4 text-center rounded-md bg-inherit shadow-[0_0_2px_white]' />
        <input type="number" name='mobileNo' placeholder='Enter your contact number' className='w-full py-2 px-4 text-center rounded-md bg-inherit shadow-[0_0_2px_white]' />
        <input type="submit" className='w-full py-2 px-4 text-center rounded-md bg-inherit shadow-[0_0_2px_white] bg-red-900 hover:bg-red-700 active:bg-orange-700 font-semibold cursor-pointer' />
      </div>
    </div>
  )
}
