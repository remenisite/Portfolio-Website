import React from "react";
import EducationAccordion from "./EducationAccordion";

const Experience = () => {
  return (
    <section data-aos="fade-up" className=" pt-[130px] px-6">
      <div className="container ">
        <div className="text-center mb-16">
          <h2 className="text-[24px] font-normal font-main text-white">
            My <span className="text-text">Resume</span>
          </h2>
          <h3 className="text-[40px] font-medium font-main text-white mt-[12px]">
            Real <span className="text-text">Problem Solutions</span> <br />{" "}
            Experience
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[300px] ">
          <div className="space-y-8">
            <EducationAccordion Education={"Education"} />
            <EducationAccordion />
          </div>
          <div className="space-y-8">
            <EducationAccordion Education={"Experience"} />
            <EducationAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
