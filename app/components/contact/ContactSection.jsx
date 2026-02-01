"use client";

import ContactForm from "./ContactForm";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ContactSection = () => {
  return (
    <section className="bg-black pt-[57px] pb-[90px]">
      <div className="container  grid grid-cols-2">

        <LeftSection />
        <ContactForm />
        

      </div>
    </section>
  );
};

export default ContactSection;
