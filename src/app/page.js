import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=''>
      home-page
      <Image src={'/img/profile.png'} alt='profile' height={200} width={200} />
    </div>
  )
}
