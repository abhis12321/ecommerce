"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBlog, faCartShopping, faHome, faMagnifyingGlass, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [search, setSearch] = useState('');
  const handleRight = () => {
    document.querySelector('.right-navbar').classList.toggle('hidden');
    document.querySelector('.cutX').classList.toggle('hidden');
    document.querySelector('.hamberger').classList.toggle('hidden');
  }
  const handleSearchProduct = e => {

    setSearch('');
  }


  return (
    <div className="w-full bg-gradient-to-b from-slate-950 to-slate-800  text-white flex items-center justify-between h-16 leading-[4rem] px-4 xm:px-8 overflow-hidden">
      <div className="">
        <Link href={'/'} className="font-bold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit leading-[4rem] font-mono"><span>E</span>commerse</Link>
      </div>

      {/* <div className="hidden lg:block search-bar w-[35%] relative leading-10">
        <input type="text" placeholder="type to search" className="px-4 py-2 outline-none bg-cyan-900/20 focus:bg-cyan-800/30 focus:border-cyan-900 rounded-2xl border-2 border-indigo-900 w-full text-lg" value={search} onChange={e => setSearch(e.target.value)} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-0 right-0 text-xl leading-10 py-3 px-4 cursor-pointer text-gray-100 hover:scale-110 hover:text-gray-400 active:text-blue-900" onClick={handleSearchProduct} size="x" />
      </div> */}

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex gap-1 bg-gradient-to-b lg:[background:none] from-slate-900 via-cyan-950 to-slate-950 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px]">
        <div className="text-4xl py-3 hover:text-red-800 hover:bg-gray-950/80 text-center cursor-pointer" onClick={handleRight}>
          <FontAwesomeIcon icon={faXmark} size='sm' className="hidden cutX" />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-lg flex items-center justify-center py-6 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/80 hover:lg:shadow-[0_0_3px_gray]" >
          <FontAwesomeIcon icon={faHome} className="text-xl w-full " />
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-lg flex items-center justify-center py-6 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/80 hover:lg:shadow-[0_0_3px_gray]" >
          <FontAwesomeIcon icon={faBlog} className="text-xl" />
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-lg flex items-center justify-center py-6 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/80 hover:lg:shadow-[0_0_3px_gray]" >
          <FontAwesomeIcon icon={faUser} className="text-lg" />
        </Link></div>

        <div className="w-full lg:w-fit flex items-center justify-center"><Link href="/" className="w-full text-lg flex items-center justify-center py-6 lg:py-3 lg:px-7 lg:rounded-lg font-semibold hover:bg-gray-950/80 hover:lg:shadow-[0_0_3px_gray]" >
          <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
        </Link></div>

      </div>
      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon icon={faBars} size='sm' className="hamberger cursor-pointer" onClick={handleRight} />
      </div>
    </div>

    // parent-relative(position)
    //  after:absolute after:bottom-3 after:left-[25%] hover:after:content-[''] hover:after:w-[50%] hover:after:h-1 hover:after:bg-green-800 after:rounded-md

  );
}
