"use client";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ContactSection = () => {
  return (
    <section className="bg-black">
      <div className="container  grid grid-cols-2">

        <LeftSection />
        <RightSection />


      </div>
    </section>
  );
};

export default ContactSection;
