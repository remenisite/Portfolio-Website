"use client";
import { useState } from "react";
import AccordionItem from "../utils/AccordionItem";

const EducationAccordion = ({ Education , title , subtitle ,date }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="">
      <div className="w-[520px]">
        <h2 className="text-center text-2xl text-white font-semibold mb-12">
          {Education}
        </h2>

        
      {/* Header */}
      <div className="flex flex-col">
        <h3 className="text-[24px] font-bold font-main text-white">{title}</h3>
        <div className="flex justify-between my-[35px] text-[24px] font-normal font-kalam text-white">
          <span>{subtitle}</span>
          <span className="text-[20px]">{date}</span>
        </div>
      </div>
 


      </div>
    </section>
  );
};

export default EducationAccordion;
