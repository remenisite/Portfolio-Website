"use client";

import {
  FaJsSquare,
  FaPython,
  FaPhp,
  FaReact,
  FaAngular,
  FaLaravel,
  FaFigma,
  FaBootstrap,
  FaWordpress,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiJquery,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: FaPython },
  { name: "PHP", Icon: FaPhp },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: FaReact },
  { name: "React Native", Icon: FaReact }, 
  { name: "Angular", Icon: FaAngular },
  { name: "Laravel", Icon: FaLaravel },
  { name: "Figma", Icon: FaFigma },
  { name: "Django", Icon: SiDjango },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "jQuery", Icon: SiJquery },
  { name: "WordPress", Icon: FaWordpress },
];

const SkillsGrid = () => {
  return (
    <section data-aos="fade-up" className=" pt-[120px]">
      <div className="container text-center ">
        <h2 className="text-[24px] fonr-normal font-main text-white">My <span className="text-text"> Talent</span></h2>
        <h3 className="text-[40px] font-medium font-main text-white mt-[12px] mb-[64px]">Professional Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px] ">
          {skills.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="bg-[#1E1E1E] w-[190px] h-[200px] rounded-lg flex flex-col items-center justify-center hover:shadow-pink-500/30 transition duration-300"
            >
              <Icon className="text-pink-500 text-4xl " />
              <p className="text-[20px] font-bold font-main mt-[18px] text-white">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
