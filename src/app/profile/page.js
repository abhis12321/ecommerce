"use client"
import React, { useState } from 'react'
import UserLogin from '../_components/UserLogin'
import { useAuth } from '../_components/AuthenticationProvider';
import UserProfile from '../_components/UserProfile';
import UserRegister from '../_components/UserRegister';

export default function Page() {
  const USER = useAuth();
  const [login , setLogin] = useState(true);

  return (
    <>
    
      { 
        !USER.user ? (login ? <UserLogin setLogin={setLogin} /> : <UserRegister setLogin={setLogin} />)  :  <UserProfile />
      }
    </>
  )
}
