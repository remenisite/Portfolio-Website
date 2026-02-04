"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

const Navbar = () => {
useEffect(() => { Aos.init({ duration: 1000,}) }, [])


  return (
    <header className=" w-full fixed z-30 bg-[#1e1e1e92] py-[10px] ">
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <div>
            <Link data-aos="flip-right" href={"/"} ><Image src="/iamges/logo.png" width={60} height={0} alt="logo" /></Link>
        </div>

        {/* Menu */}
        <ul data-aos="zoom-in" className="hidden md:flex space-x-6 text-[24px] font-semibold font-main text-[#ffffffa6]">
          <li className="hover:border-b-3 border-text duration-300"><Link href="/" className="flex items-center gap-1 hover:text-text duration-300"> Home</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#about" className="flex items-center gap-1 hover:text-text duration-300"> About</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#service" className="flex items-center gap-1 hover:text-text duration-300"> Services</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#resume" className="flex items-center gap-1 hover:text-text duration-300"> Resume</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#skill" className="flex items-center gap-1 hover:text-text duration-300"> Skills</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#project" className="flex items-center gap-1 hover:text-text duration-300"> Projects</Link></li>
          <li className="hover:border-b-3 border-text duration-300"><Link href="#contact" className="flex items-center gap-1 hover:text-text duration-300"> Contact</Link></li>
        </ul>

        {/* Hire Me Button */}
        <div data-aos="fade-up-left">
          <Link href="#" className="text-[20px] font-medium font-main text-white bg-text pt-2.75 pb-4 rounded-[10px] px-[35px]">
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
