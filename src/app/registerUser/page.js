"use client"
import React, { useState } from 'react'
import UserRegister from '../_components/UserRegister'

export default function Page() {
  const [role , setRole] = useState('customer');

  return (
    <div className=''>
      <UserRegister role={role} setRole={setRole} />
    </div>
  )
}
