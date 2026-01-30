"use client";
import Link from 'next/link';
import React from 'react'

import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const IconSection = () => {
  return (
    
    <>
    

          {/* Social Icons */}
          <div className="flex gap-[20px]">
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            {/* <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li> */}

          </div>

    
    </>
  )
}

export default IconSection