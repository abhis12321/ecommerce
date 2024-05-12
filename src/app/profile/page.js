"use client"
import React from 'react'
import UserLogin from '../_components/UserLogin'
import { useAuth } from '../_components/AuthenticationProvider';
import UserProfile from '../_components/UserProfile';

export default function Page() {
  const USER = useAuth();

  return (
    <>
      { 
        !USER.user ?  <UserLogin />  :  <UserProfile />
      }
    </>
  )
}
