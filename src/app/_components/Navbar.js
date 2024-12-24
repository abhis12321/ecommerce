"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userSlice";
import { addToCart } from "@/redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faCartShopping,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";



export default function NavBar({ user, cartItems }) {
  const rightBarRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(user));
    dispatch(addToCart(cartItems));
  }, []);

  const handleHideRight = () => {
    if (!rightBarRef.current.classList.contains("-right-20")) {
      handleRight();
    }
  };

  const handleRight = () => {
    rightBarRef.current.classList.toggle("-right-20")
    rightBarRef.current.classList.toggle("right-1")
  };

  return (
    <div className="h-16 py-2 px-[4%] sm:px-8 md:px-10 lg:px-12 sticky top-0 left-0 z-[90] w-full bg-white text-gray-500 font-semibold flex items-center justify-between shadow-[0_0_1px_black]">
      <div className="">
        <Link href={'/'} className="font-extrabold italic text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-gray-400 w-fit overflow-hidden px-1 font-serif">Ecommerce</Link>
      </div>

      <div className="min-w-[60px] lg:py-[1px] lg:px-1 rounded-[1.4rem] lg:rounded-none fixed lg:static top-[20vh] -right-20 font-medium shadow-[-.3px_.3px_1.5px_black_inset] lg:shadow-none duration-300 backdrop-blur-md lg:backdrop-blur-none overflow-hidden lg:overflow-auto flex flex-col lg:flex-row items-center justify-center lg:gap-8" ref={rightBarRef}>
        <Link
          href="/"
          className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:text-cyan-700 hover:ring-1 ring-cyan-700 hover:bg-cyan-700/20 py-4 lg:py-[12px] lg:px-[18px]"
        >
          <FontAwesomeIcon size="xs" icon={faHome} className="h-7 w-7" />
        </Link>

        <Link
          href="/blogs"
          className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:text-cyan-700 hover:ring-1 ring-cyan-700 hover:bg-cyan-700/20 py-4 lg:py-[12px] lg:px-[18px]"
        >
          <FontAwesomeIcon size="xs" icon={faBlog} className="h-7 w-7" />
        </Link>

        <Link
          href="/dashboard"
          className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:text-cyan-700 hover:ring-1 ring-cyan-700 hover:bg-cyan-700/20 py-4 lg:py-[13px] lg:px-[18px]"
        >
          <FontAwesomeIcon size="xs" icon={faUser} className="h-[26px] w-7" />
        </Link>

        <Link
          href="/cart"
          className="w-full text-2xl overflow-hidden flex items-center justify-center lg:rounded-lg hover:text-cyan-700 hover:ring-1 ring-cyan-700 hover:bg-cyan-700/20 py-4 lg:py-[12px] lg:px-[18px]"
        >
          <FontAwesomeIcon size="xs" icon={faCartShopping} className="h-7 w-7" />
        </Link>
      </div>

      <button className="lg:hidden text-3xl py-2" onBlur={handleHideRight}>
        <FontAwesomeIcon icon={faBars} size="sm" className="h-6 lg:hidden cursor-pointer" onClick={handleRight} />
      </button>
    </div>
  );
}
