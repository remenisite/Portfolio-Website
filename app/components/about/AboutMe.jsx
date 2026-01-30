"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden grayscale">
            <Image
              src="/about-photo.png" // Replace with actual image path
              alt="Wilson Kinyua"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-pink-500">About Me</h2>
          <h3 className="text-xl font-semibold text-white">Driven, innovative Software Engineer</h3>
          <p className="text-gray-300">
            More than 5 years Experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organisational objectives.
          </p>

          {/* Skills List */}
          <ul className="space-y-2 text-gray-300">
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
