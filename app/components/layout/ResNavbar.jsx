"use cllient"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const ResNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e1e1e92]  shadow-md px-6 py-4 flex items-center justify-between">
            <Link data-aos="flip-right" href={"/"} ><Image src="/iamges/logo.png" width={60} height={0} alt="logo" /></Link>
        <div data-aos="fade-up-left">
<a href="https://mail.google.com/mail/?view=cm&to=antor.web.bd@gmail.com" target="_blank"className="text-[20px] font-medium font-main text-white bg-text pt-2.75 pb-4 rounded-[10px] px-[35px]"
>Hire Me
</a>
        </div>
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          <FaBarsStaggered />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[#1e1e1e92] shadow-lg rounded-md py-2">
            <Link href="/" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Home</Link>
            <Link href="#about" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">About</Link>
            <Link href="#service" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Services</Link>
            <Link href="#resume" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Resume</Link>
            <Link href="#skill" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Skills</Link>
            <Link href="#project" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Projects</Link>
            <Link href="#contact" className="block px-4 py-2 text-[18px] font-medium font-main text-[#ffffffa6]">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ResNavbar;



