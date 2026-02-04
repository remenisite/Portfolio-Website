"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" data-aos="fade-up" className=" pb-32.5">
      <div className="container flex justify-between items-center ">
                <div className="hidden lg:block lg:w-[460px] lg:h-[554px] xl:w-[460px] xl:h-[554px] bg-[#131313] border-15 border-[#1E1E1E]  rounded-[10px]  overflow-hidden ">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/iamges/aboutImg.png')`,
            }}
          />
        </div>

        {/* Right Content */}
        <div className="">
          <h2 className="text-[20px] font-normal font-main text-[#ffffffa6] mb-7.5">About Me</h2>
          <h3 className="text-[40px] font-normal font-main text-text w-[500px]">Driven, <span className="text-white">innovative</span> <span className="text-white">Javascript</span> Developer</h3>
          <p className="w-[690px] text-[20px] font-normal font-main text-white py-[20px]">
           Focus on building responsive, visually engaging user interfaces using popular frameworks and libraries such as React, Angular, and Vue.js. These tools allow developers to create fast, component-based interfaces that enhance user experience and improve application performance. They ensure websites and applications are mobile-friendly, accessible, and compatible across different browsers and devices. By optimizing load times and improving responsiveness, JavaScript Developers help deliver smooth and intuitive user interactions.
          </p>

          {/* Skills List */}
          <ul className="text-[20px] font-normal font-main text-white space-y-6">
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" />Develop dynamic and interactive user interfaces using JavaScript</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" />Build modern web applications with ES6+ features</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" />API integration using Fetch API and Axios</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" />Secure client-side logic and error handling</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
