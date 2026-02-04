
import ProjectSection from "@/app/components/projects/ProjectSection";
import React from "react";


const page = () => {
  return (
    <>

        <div className="flex flex-col gap-[70px] pb-[100px] pt-[200px]">
          <ProjectSection proH2={'Upcoming'}  />
          <ProjectSection proH2={'Upcoming'}  flexdirection={"lg:flex-row-reverse"} />
          <ProjectSection  proH2={'Upcoming'}   />
          <ProjectSection  proH2={'Upcoming'} flexdirection={"lg:flex-row-reverse"}  />
           </div>
          <div className="flex flex-col gap-[70px] pb-[100px] pt-[200px]">
          <ProjectSection  proH2={'Upcoming'}    />
          <ProjectSection proH2={'Upcoming'}  flexdirection={"lg:flex-row-reverse"} />
          <ProjectSection  proH2={'Upcoming'}   />
          <ProjectSection  proH2={'Upcoming'} flexdirection={"lg:flex-row-reverse"}  />
          </div>
          <div className="flex flex-col gap-[70px] pb-[100px] pt-[200px]">
          <ProjectSection  proH2={'Upcoming'} />
          <ProjectSection proH2={'Upcoming'}  flexdirection={"lg:flex-row-reverse"} />
          <ProjectSection  proH2={'Upcoming'}   />
          <ProjectSection proH2={'Upcoming'}  flexdirection={"lg:flex-row-reverse"} />
            </div>

    </>
  )
}

export default page