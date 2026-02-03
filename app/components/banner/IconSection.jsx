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
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FiGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><LuLinkedin className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FiMail className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><TbBrandTwitter className="text-[22px] text-text" /></Link> </li>
          </div>

    </>
  )
}

export default IconSection