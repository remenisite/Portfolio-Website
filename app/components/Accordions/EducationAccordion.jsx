'use client';
import { useState } from "react";
import AccordionItem from "../utils/AccordionItem";


const EducationAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);


  return (
    <section className="bg-black">
        <div className="container">

      <div className="w-[635px]">

        <h2 className="text-center text-2xl text-white font-semibold mb-12">
          Education
        </h2>

          <AccordionItem title={'Moringa School'} subtitle={'Software Development'} date={'2021 - 2021'} content={`Diligently attended software development courses,  advancing
skills and knowledge. With this being a continuous improvement,
got to learn to contribute effectively in software development roles.`} />
   <AccordionItem title={'Moringa School'} subtitle={'Software Development'} date={'2021 - 2021'} content={`Diligently attended software development courses,  advancing
skills and knowledge. With this being a continuous improvement,
got to learn to contribute effectively in software development roles.`} />
   <AccordionItem title={'Moringa School'} subtitle={'Software Development'} date={'2021 - 2021'} content={`Diligently attended software development courses,  advancing
skills and knowledge. With this being a continuous improvement,
got to learn to contribute effectively in software development roles.`} />
   <AccordionItem title={'Moringa School'} subtitle={'Software Development'} date={'2021 - 2021'} content={`Diligently attended software development courses,  advancing
skills and knowledge. With this being a continuous improvement,
got to learn to contribute effectively in software development roles.`} />


      </div>
</div>
    </section>
  );
};

export default EducationAccordion;
