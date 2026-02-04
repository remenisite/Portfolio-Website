"use client";
import Link from 'next/link';
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { TbBrandTwitter } from "react-icons/tb";

const IconSection = () => {
  return (
    <>
          {/* Social Icons */}
          <div data-aos="zoom-in-down" className="flex gap-[20px]">
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center hover:scale-90  justify-center">  <a href="https://github.com/remenisite" target='_black'><FiGithub className="text-[22px] text-text" /></a> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  hover:scale-90  justify-center">  <a href="https://www.linkedin.com/in/remenisite/" target='_black' ><LuLinkedin className="text-[22px] text-text" /></a> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center hover:scale-90 justify-center">  <Link href="#"><FiMail className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  hover:scale-90 justify-center">  <a href="https://x.com/remenisite" target='_black' ><TbBrandTwitter className="text-[22px] text-text" /></a> </li>
          </div>

    </>
  )
}

export default IconSection