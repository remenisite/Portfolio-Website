"use client";
import React from 'react'
import Image from "next/image";

const skills = [
  { name: "JavaScript", img: "/iamges/javascript.png" },
  { name: "TypeScript", img: "/iamges/typescript.png" },
  { name: "React", img: "/iamges/react-js.png" },
  { name: "Bootstrap", img: "/iamges/bootstrap.png" },
  { name: "Html", img: "/iamges/react-js.png" },
  { name: "Next.js", img: "/iamges/react-js.png" },
  { name: "CSS", img: "/iamges/react-js.png" },
  { name: "Angular", img: "/iamges/react-js.png" },
  { name: "Laravel", img: "/iamges/react-js.png" },
  { name: "Figma", img: "/iamges/react-js.png" },
  { name: "Django", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
  { name: "Tailwind CSS", img: "/iamges/react-js.png" },
];


const page = () => {
  return (
    <>
    
      <div className="container text-center pb-[100px] ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px]  ">
          {skills.map(({ name, img }, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] w-[190px] h-[200px] rounded-lg flex flex-col items-center justify-center hover:shadow-pink-500/30 transition duration-300"
            >
                <Image src={img} alt={`${name} logo`} width={50} height={50}  className=" object-contain" />
              <p className="text-[20px] font-bold font-main mt-[18px] text-white">   {name}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default page