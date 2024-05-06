"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faCartShopping,
  faHome,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ToggleModeButton from "./ToggleModeButton";



export default function NavBar() {
  const handleRight = () => {
    document.querySelector(".right-navbar").classList.toggle("hidden");
    document.querySelector(".cutX").classList.toggle("hidden");
    document.querySelector(".hamberger").classList.toggle("hidden");
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-500 to-lime-900 dark:from-slate-950 dark:to-lime-900 text-gray-300 font-semibold flex items-center justify-between h-16 px-4 xm:px-8 overflow-hidden">
      <div className="">
        <Link href={'/'} className="font-extrabold text-3xl text-center rounded-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 w-fit leading-[4rem] drop-shadow-[0_0_1px_black]"><span>E</span>commerse</Link>
      </div>

      <div className="right-navbar fixed lg:static top-0 right-0 hidden lg:flex gap-8 bg-gradient-to-l lg:[background:none] from-gray-500 to-lime-900 dark:from-gray-950 dark:to-lime-900 min-h-[100vh] lg:min-h-fit z-10 items-center min-w-[170px] dark:font-normal font-medium">
        <div
          className="text-4xl py-2 text-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faXmark} size="sm" className="hidden cutX hover:text-red-800"
            onClick={handleRight} />
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/"
            className="w-full text-2xl overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray] hover:ring-2 ring-gray-300"
          >
            <FontAwesomeIcon icon={faHome} className="text-xl w-full " />
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/blogs"
            className="w-full text-2xl overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray] hover:ring-2 ring-gray-300"
          >
            <FontAwesomeIcon icon={faBlog} className="text-xl" />
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/login"
            className="w-full text-3xl overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray] hover:ring-2 ring-gray-300"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Link>
        </div>

        <div className="w-full lg:w-fit flex items-center justify-center">
          <Link
            href="/cart"
            className="w-full text-2xl overflow-hidden flex items-center justify-center py-4 lg:py-3 lg:px-4 lg:rounded-lg hover:bg-slate-950/30 hover:text-white dark:hover:bg-gray-400/30 hover:lgshadow-[0_0_3px_gray] hover:ring-2 ring-gray-300"
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          </Link>
        </div>

        <ToggleModeButton />
      </div>

      <div className="lg:hidden text-3xl py-2">
        <FontAwesomeIcon
          icon={faBars}
          size="sm"
          className="hamberger cursor-pointer text-gray-200"
          onClick={handleRight}
        />
      </div>
    </div>
  );
}
