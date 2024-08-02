"use client"
import React, { useState } from 'react'
import UserLogin from '../_components/UserLogin'
import { useAuth } from '../_components/AuthenticationProvider';
import UserProfile from '../_components/UserProfile';
import UserRegister from '../_components/UserRegister';

export default function Page() {
  const USER = useAuth();
  const [option , setOption] = useState(0);

  return (
    <>
    
      { 
        !USER.user ? (option == 0 ? <UserLogin setOption={setOption} /> : <UserRegister setOption={setOption} />)  :  <UserProfile />
      }
    </>
  )
}
