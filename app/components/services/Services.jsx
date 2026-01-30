"use client";
import { FaLaptopCode, FaPalette, FaMobileAlt, FaPlug, FaMoneyCheckAlt, FaUserGraduate } from "react-icons/fa";

const services = [
  {
    title: "WEB DEVELOPMENT",
    description: "Modern and mobile-ready website that will help you reach all of your marketing.",
    icon: <FaLaptopCode />,
  },
  {
    title: "UI/UX DESIGN",
    description: "Create intuitive interfaces and delightful user experiences by blending aesthetics with usability.",
    icon: <FaPalette />,
  },
  {
    title: "APP DEVELOPMENT",
    description: "Modern and mobile-ready application that will help you reach all of your marketing.",
    icon: <FaMobileAlt />,
  },
  {
    title: "API DESIGN / INTEGRATION",
    description: "Developing a highly secure, fast and scalable APIs both REST and GraphQL.",
    icon: <FaPlug />,
  },
  {
    title: "PAYMENT INTEGRATION",
    description: "Automate the process of payments to allow users pay right on your platform.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "MENTORSHIP",
    description: "Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.",
    icon: <FaUserGraduate />,
  },
];

const Services = () => {
  return (
    <section className="bg-black ">
      <div className="container text-center">
        <h2 className="text-[24px] font-normal font-main text-white">I like to make things easy and fun</h2>
        <h3 className="w-[600px] px-[30px] text-center text-[40px] font-medium font-main text-white">My <span className="text-text"> Special Services</span> For your Business <span className="text-text"> Development</span></h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1E1E1E] py-[35px] rounded-[10px] text-center flex justify-center flex-col items-center">
              <div className="text-text text-[50px]">{service.icon}</div>
              <h4 className="text-[20px] font-black font-primary text-white pt-[42px] pb-[37px]">{service.title}</h4>
              <p className="text-[18px] font-normal font-second text-white w-[320px] text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
