"use client";
import { IoArrowForward } from "react-icons/io5";
import Button from "../ui/Button";
import Image from "next/image";

const skills = [
  { name: "HTML5", img: "/iamges/html5.png" },
  { name: "CSS3", img: "/iamges/css3.png" },
  { name: "JavaScript", img: "/iamges/javascript.png" },
  { name: "TypeScript", img: "/iamges/typescript.png" },

  { name: "React.js", img: "/iamges/react-js.png" },
  { name: "Next.js", img: "/iamges/next-js.png" },
  { name: "Vue.js", img: "/iamges/vue-js.png" },
  { name: "Angular", img: "/iamges/angular.png" },

  { name: "Bootstrap", img: "/iamges/bootstrap.png" },
  { name: "Tailwind CSS", img: "/iamges/tailwind-css.png" },
  { name: "Sass", img: "/iamges/sass.png" },
  { name: "SCSS", img: "/iamges/scss.png" },

];

import { useRouter } from "next/navigation";
const SkillsGrid = () => {
  const router = useRouter();

  return (
    <section id="skill" data-aos="fade-up" className=" pt-[120px]">
      <div className="container text-center ">
        <h2 className="text-[24px] fonr-normal font-main text-white">
          My <span className="text-text"> Talent</span>
        </h2>
        <h3 className="text-[40px] font-medium font-main text-white mt-[12px] mb-[64px]">
          Professional Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px]   ">
          {skills.map(({ name, img }, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] w-[190px] h-[200px] hover:pt-[20px] hover:scale-90 rounded-lg flex flex-col items-center justify-center hover:shadow-pink-500/30 transition duration-300"
            >
              <Image    src={img}    alt={`${name} logo`}   width={50}   height={50} className=" object-contain" />
              <p className="text-[20px] font-bold font-main mt-[18px] text-white">  {name}</p>
            </div>
          ))}
        </div>
        <div className="mt-[50px] text-center flex justify-center">
          <Button
            text="View more"
            icon={IoArrowForward}
            onClick={() => router.push("/skill")}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
