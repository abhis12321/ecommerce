"use client"
import React, { useEffect } from 'react';
import { useAuth } from '../_components/AuthenticationProvider';
import { useRouter } from 'next/navigation';

export default function Layout({children}) {
    const USER = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!USER.user) {
            router.push('/profile');
        }
    } , [USER.user, router])
  return (
    <>
      {
        children
      }
    </>
  )
}
