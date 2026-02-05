"use client";

import React from "react";
import ProjectSection from "./ProjectSection";
import Button from "../ui/Button";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();
  return (
    <>
      <section
        id="project"
        data-aos="fade-up"
        className=" pt-[130px] pb-[60px]"
      >
        <div className="text-center">
          <h2 className="text-[24px] fonr-normal font-main text-white">
            My <span className="text-text"> Talent</span>
          </h2>
          <h3 className="text-[40px] font-medium font-main text-white mt-[12px] mb-[64px]">
            Professional Skills
          </h3>
        </div>
        <div className="flex flex-col gap-[70px]">
          <ProjectSection mainImg="/iamges/nexton.png" protitle={'e-commarce'} proH2={"nexton"}   ProP={"frontend"} link="https://nex-ton.vercel.app/"  Prodis={ "a e-commarce website using react.js tailwind css npm fatching api"  }   />
          <ProjectSection flexdirection={"lg:flex-row-reverse"} mainImg="/iamges/dasboard.png" protitle={'e-commarce'} proH2={"Admin Dasboard"} link="https://react-js-admin-dashboard-beta.vercel.app/"   ProP={"frontend"}  Prodis={ "a e-commarce website using react.js tailwind css npm fatching api"  }   />
          <ProjectSection mainImg="/iamges/exclu.png" protitle={'e-commarce'} proH2={"Exclusive"}   ProP={"frontend"} link="https://react-project-exclusive.vercel.app/"  Prodis={ "a e-commarce website using react.js tailwind css npm fatching api"  }   />
          <ProjectSection flexdirection={"lg:flex-row-reverse"} mainImg="/iamges/url.png" protitle={'URL'} proH2={"Shortner"}   ProP={"Backend"}  Prodis={ "a e-commarce website using react.js tailwind css npm fatching api"  }   />
        </div>
        <div className="mt-[50px] text-center flex justify-center">
          {" "}
          <Button
            text="More Project's"
            icon={IoArrowForward}
            onClick={() => router.push("/project")}
          />{" "}
        </div>
      </section>
    </>
  );
};

export default Project;
