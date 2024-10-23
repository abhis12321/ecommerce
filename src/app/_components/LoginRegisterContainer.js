"use client"
import Loading from './Loading'
import { useState } from 'react'
import UserLoginForm from './UserLoginForm'
import UserRegistrationForm from './UserRegistrationForm'

export default function LoginRegisterContainer() {
  const [option, setOption] = useState(1);

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center p-4'>
      {
          <div className='w-full max-w-[500px] min-h-[327px] flex flex-col gap-2 bg-white rounded-md overflow-hidden shadow-[0_0_2px_gray]'>
            <div className="flex font-bold items-center justify-around">
              <div className={`px-4 pt-3 pb-2 text-center cursor-pointer ${option == 0 ? "border-b-[2.5px] border-orange-600 text-orange-600" : "text-gray-600"}`} onClick={() => setOption(0)}>Register</div>
              <div className={`px-4 pt-3 pb-2 text-center cursor-pointer ${option == 1 ? "border-b-[2.5px] border-orange-600 text-orange-600" : "text-gray-600"}`} onClick={() => setOption(1)}>Login</div>
            </div>
            <div className="flex-1 flex justify-center itemscenter">
              {
                option == 1 ?
                  <UserLoginForm setOption={setOption}/>
                  :
                  <UserRegistrationForm setOption={setOption}/>}
            </div>
          </div>
      }

      {option === 4 && <Loading />}
    </div>
  )
}
