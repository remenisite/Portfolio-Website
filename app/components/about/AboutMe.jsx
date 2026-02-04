"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" data-aos="fade-up" className=" pb-[130px]">
      <div className="container flex justify-between items-center ">
        {/* Left Image */}
        <div className="">
          <div className="w-[460px] h-[554px] bg-[#131313] border-15 border-[#1E1E1E]  rounded-[10px] ">
            <Image
              src="/iamges/aboutImg.png" // Replace with actual image path
              alt="Wilson Kinyua"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="">
          <h2 className="text-[20px] font-normal font-main text-[#ffffffa6] mb-[30px]">About Me</h2>
          <h3 className="text-[40px] font-normal font-main text-text w-[500px]">Driven, <span className="text-white">innovative</span> <span className="text-white">Software</span> Engineer</h3>
          <p className="w-[690px] text-[20px] font-normal font-main text-white py-[20px]">
            More than 5 years Experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organisational objectives.
          </p>

          {/* Skills List */}
          <ul className="text-[20px] font-normal font-main text-white space-y-6">
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Develop highly interactive Front end / User Interfaces for the web</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Progressive Web Applications (PWA) in normal and SPA Stacks</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Integration of third party services such as AWS / Digital Ocean</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-500" /> Integration of payment services such as M-Pesa and PayPal</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
