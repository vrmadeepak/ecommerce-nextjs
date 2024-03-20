import Link from "next/link"
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { PiVideoFill } from "react-icons/pi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiLanguage, HiMiniLanguage, HiHome } from "react-icons/hi2";


interface FooterLinkProps {
  href: string;
  icon: React.ElementType;
}

export default function MobileFooter() {
  return (
      <div className="fixed bottom-0 left-0 right-0 p-3 px-6 flex items-center justify-between bg-gray-900 shadow-3xl text-gray-400 z-1000">
      {/* <div className="sticky bottom-2  p-5 px-6 m-2   flex items-center justify-between   bg-gray-900 shadow-3xl text-gray-400 rounded-2xl"> */}
        <FooterLink href="/" icon={HiHome} />
        <FooterLink href="/search" icon={HiOutlineSearch} />
        <FooterLink href="/some-page" icon={PiVideoFill} />
        <FooterLink href="/search" icon={HiMiniLanguage} />
        <FooterLink href="/profile" icon={MdAccountCircle} />
        {/* <Link href="/">
          <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 cursor-pointer">
            Home */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
              </path>
            </svg> */}
          {/* </div>
        </Link>
        <Link href="/search">
          <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 cursor-pointer">
            Search */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> */}
          {/* </div>
        </Link> */}
        {/* <div className="flex flex-col items-center  hover:text-blue-400 ">
          <div className="absolute bottom-5 shadow-2xl text-center flex items-center justify-center rounded-full border-4 text-3xl border-gray-50 hover:border-blue-500 bg-blue-500 w-20 h-20 p-2 text-white transition ease-in duration-200 ">
            <i className="fas fa-phone-alt"></i>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full border-4 opacity-50"></span>
          </div>
        </div> */}
        {/* <Link href="/some-page">
          <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 cursor-pointer">
            Some */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg> */}
          {/* </div>
        </Link>

        <Link href="/profile">
          <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 cursor-pointer">
            Account */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
              </path>
            </svg> */}
          {/* </div>
        </Link> */}

      </div>
  );
}

function FooterLink({ href, icon: Icon }: FooterLinkProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 text-2xl cursor-pointer">
        {<Icon />}
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
          </path>
        </svg> */}
      </div>
    </Link>
  );
}