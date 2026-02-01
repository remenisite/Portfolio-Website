// components/ProjectSection.jsx
import { FiArrowUpRight } from "react-icons/fi";

const ProjectSection = () => {
  return (
    <section className="bg-black">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-center">
        
        {/* Left: Project Image */}
        <div className="">
          <div className="w-[616px] h-[421px] bg-[#1e1e1e9a] rounded-[10px] border border-[#444444]">
         
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-4 text-gray-200">
          <span className="text-[20px] font-normal font-main text-text uppercase tracking-wider">
            Website
          </span>

          <h2 className="text-3xl md:text-[40px] font-normal font-main leading-snug">
            Mount Kenya <br /> Wildlife Conservancy
          </h2>

          <p className="text-[20px] font-normal font-main text-white max-w-md">
            A non-profit trust dedicated to preserving the environment
            and the wildlife within.
          </p>

          {/* Icon Button */}
          <div className="pt-4">
            <button
              className="w-12 h-12 flex items-center justify-center
              rounded-full border border-gray-700
              text-gray-300 hover:bg-white hover:text-black
              transition-all duration-300"
            >
              <FiArrowUpRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
