"use client";
import ContactForm from "./ContactForm";
import LeftSection from "./LeftSection";


const ContactSection = () => {
  return (
    <section data-aos="fade-up" className=" pt-[57px] pb-[90px]">
      <div className="container  grid grid-cols-2">
        <LeftSection />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
