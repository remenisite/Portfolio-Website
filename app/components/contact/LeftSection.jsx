"use client";
import React from 'react'

import {
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import IconSection from '../banner/IconSection';

const LeftSection = () => {
  return (
    <>
    

        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-[20px] font-normal font-main text-white">Get In Touch</h2>
          <h3 className="text-[40px] font-medium font-main text-white">Let's Talk For your <br /> <span className='text-text'> Next Projects</span></h3>
          <p className="w-[367px] text-[20px] font-normal font-main text-white">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.</p>

          {/* Highlights */}
          <ul className="space-y-2 text-[20px] font-normal font-main text-white mb-[53px]">
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> 5+ Years of Experience</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Professional Web Designer</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Mobile Apps Design</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Technical Mentor</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Fullstack Developer</li>
          </ul>
           <IconSection/>
        </div>
    
    </>
  )
}

export default LeftSection