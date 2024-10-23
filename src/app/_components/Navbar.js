"use client"
import Link from "next/link"
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBlog,
  faCartShopping,
  faHome,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";



export default function NavBar() {
  const _Ref = useRef();
  const rightBarRef = useRef();

  const handleRight = () => {
    _Ref.current.classList.toggle("hidden");
    rightBarRef.current.classList.toggle("hidden");
  };

  return (
    <div className="w-full sticky z-[500] top-0 left-0 px-8 h-[60px] flex items-center justify-between bg-gray-600/10 backdrop-blur-md">
      <div className="">
        <Link href={'/'} className="text-2xl font-extrabold font-serif">Ecommerce</Link>
      </div>

      <FontAwesomeIcon icon={faBars} size="sm" className="h-6 lg:hidden cursor-pointer" ref={_Ref} onClick={handleRight} />

      <div className="h-[100vh] w-[160px] lg:w-fit lg:h-fit hidden flex lg:flex gap-3 lg:gap-8 items-center flex-col lg:flex-row bg-white lg:bg-transparent fixed lg:static top-0 right-0 shadow-[0_0_1px_gray] lg:shadow-none" ref={rightBarRef}>
        <div className="mt-[18px] mx-auto" onClick={handleRight}>
          <FontAwesomeIcon size="xs" icon={faXmark} className="h-6 lg:hidden cursor-pointer" />
        </div>

        <Link
          href="/"
          className="w-full lg:w-fit text-center lg:rounded-md hover:bg-gray-600/20 pt-[19px] pb-[14px] lg:pt-[10px] lg:pb-2 px-4"
        >
          <FontAwesomeIcon size="xs" icon={faHome} className="h-5" />
        </Link>

        <Link
          href="/blogs"
          className="w-full lg:w-fit text-center lg:rounded-md hover:bg-gray-600/20 pt-[19px] pb-[14px] lg:pt-[10px] lg:pb-2 px-4"
        >
          <FontAwesomeIcon size="xs" icon={faBlog} className="h-5" />
        </Link>

        <Link
          href="/profile"
          className="w-full lg:w-fit text-center lg:rounded-md hover:bg-gray-600/20 pt-[19px] pb-[14px] lg:pt-[10px] lg:pb-2 px-[18px]"
        >
          <FontAwesomeIcon size="xs" icon={faUser} className="h-5 scale-x-110" />
        </Link>

        <Link
          href="/cart"
          className="w-full lg:w-fit text-center lg:rounded-md hover:bg-gray-600/20 pt-[19px] pb-[14px] lg:pt-[12px] lg:pb-2 px-[15px]"
        >
          <FontAwesomeIcon size="xs" icon={faCartShopping} className="h-5" />
        </Link>

      </div>
    </div>
  );
}
