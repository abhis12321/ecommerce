"use client"
import React, { useEffect } from 'react'
import UserRegister from '../_components/UserRegister'
import { useAuth } from '../_components/AuthenticationProvider'
import { useRouter } from 'next/navigation';

export default function Page() {
  const USER = useAuth();
  const router = useRouter();
  useEffect(() => {
    if(USER.user) {
      router.push('/login')
    }
  })
  
  return (
    <div className=''>
      <UserRegister  />
    </div>
  )
}
