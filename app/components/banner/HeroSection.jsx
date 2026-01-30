"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-black text-white pb-[137px]">
      <div className="container flex justify-between items-end">
        {/* Left Content */}
        <div className="">
          <p className="text-[20px] font-normal font-main text-[#ffffffa6] uppercase">Hello, my name is</p>
          <h1 className="text-4xl md:text-[64px] font-semibold font-main mt-[41px] mb-[21px]  text-text">
            Antor <span className="text-white">Karmoker</span>
            
          </h1>
          <h2 className="text-[20px] font-normal font-main text-[#ffffffa6]">Software Engineer</h2>
          <p className="w-[676px] text-[20px] font-normal font-main text-white mt-[51px]">
            From Nairobi, Kenya. I have rich experience in development cycle for dynamic web projects, app development, and I am also proficient in UX/UI design.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-[38px] mb-[52px]">
            <Link href="#" className="border-text border px-[20px] py-[18px] rounded-[10px] hover:bg-text transition duration-300 text-[20px] font-normal font-main text-white">
              Download Resume
            </Link>
            <Link href="#" className="border-text border px-[20px] py-[22px] rounded-[10px] hover:bg-text transition duration-300 text-[20px] font-normal font-main text-white">
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-[20px]">
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li>
            {/* <li className="w-[46px] h-[46px] bg-[#1E1E1E] rounded-[10px] flex items-center  justify-center">  <Link href="#"><FaGithub className="text-[22px] text-text" /></Link> </li> */}

          </div>
        </div>
        {/* Right Image */}
        <div className="">
          <div className="w-[430px] h-[430px] rounded-full border-4 border-text overflow-hidden">
            <Image
              src="/iamges/my_img.png"
              alt="Wilson Kinyua"
              width={500}
              height={500}
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
