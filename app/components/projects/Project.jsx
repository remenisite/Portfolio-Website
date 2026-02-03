import React from "react";
import ProjectSection from "./ProjectSection";

const Project = () => {
  return (
    <>
      <section data-aos="fade-up" className=" pt-[130px] pb-[60px]">
        <div className="text-center">
          <h2 className="text-[24px] fonr-normal font-main text-white">
            My <span className="text-text"> Talent</span>
          </h2>
          <h3 className="text-[40px] font-medium font-main text-white mt-[12px] mb-[64px]">
            Professional Skills
          </h3>
        </div>
        <div className="flex flex-col gap-[70px]">
          <ProjectSection proH2={'nexton'} ProP={'website'} Prodis={'a e-commarce website using react.js tailwind css npm fatching api'} flexdirection={"flex-row-reverse"} />
          <ProjectSection flexdirection={'flex-row-reverse'} />
          <ProjectSection />
          <ProjectSection />
        </div>
      </section>
    </>
  );
};

export default Project;
