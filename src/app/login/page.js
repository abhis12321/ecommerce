"use client"
import React from 'react'
import UserLogin from '../_components/UserLogin'

export default function Page() {
  const [role , setRole] = React.useState('customer');

  return (
    <>
     <UserLogin role={role} setRole={setRole} /> 
    </>
  )
}
