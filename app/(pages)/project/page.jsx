
import ProjectSection from "@/app/components/projects/ProjectSection";
import React from "react";


const page = () => {
  return (
    <>

        <div className="flex flex-col gap-[70px] pb-[100px]">
          <ProjectSection proH2={'nexton'} ProP={'website'} Prodis={'a e-commarce website using react.js tailwind css npm fatching api'} flexdirection={"flex-row-reverse"} />
          <ProjectSection flexdirection={'flex-row-reverse'} />
          <ProjectSection />
          <ProjectSection />
        </div>

    </>
  )
}

export default page