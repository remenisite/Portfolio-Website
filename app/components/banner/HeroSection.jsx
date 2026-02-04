"use client";
import Image from "next/image";
import Link from "next/link";
import IconSection from "./IconSection";
import Button from "../ui/Button";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className=" text-white pb-[160px] pt-[200px]">
      <div className="container flex justify-between items-end">
        {/* Left Content */}
        <div className="">
          <p
            data-aos="fade-right"
            className="text-[20px] font-normal font-main text-[#ffffffa6] uppercase"
          >
            Hello, my name is
          </p>
          <h1
            data-aos="fade-right"
            className="text-4xl md:text-[64px] font-semibold font-main mt-[41px] mb-[21px]  text-text"
          >
            Antor <span className="text-white">Karmoker</span>
          </h1>
          <h2
            data-aos="fade-right"
            className="text-[20px] font-normal font-main text-[#ffffffa6]"
          >
            Javascript Developer
          </h2>
          <p
            data-aos="fade-right"
            className="w-[411px] text-[20px] font-normal font-main text-white mt-[51px]"
          >
       A JavaScript Developer specializes in building interactive, fast, and scalable web applications using JavaScript and modern frameworks.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-[38px] mb-[52px]">
            <Button text="Download Resume" />
            <Button text="Contact Me" />
          </div>
          <IconSection />
        </div>
        {/* Right Image */}
        <div className="hidden lg:block lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] relative rounded-full border-4 border-text overflow-hidden ">
          <div
            className="w-[100%] h-[100%] bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              backgroundImage: `url('/iamges/my_img.png')`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
