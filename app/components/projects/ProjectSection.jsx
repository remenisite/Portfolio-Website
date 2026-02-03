import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectSection = ({ proH2, ProP, Prodis, flexdirection }) => {
  return (
    <div
      className={`container grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-center ${flexdirection}`}
    >
      {/* Left: Project Image */}
      <div>
        <div className="w-[616px] h-[421px] bg-[#1e1e1e9a] flex items-center justify-center rounded-[10px] border border-[#444444]">
          <Image
            src={"/images/logo.png"}
            alt="img"
            width={593}
            height={341}
            className="bg-red-50"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-4 text-gray-200">
        <span className="text-[20px] font-normal font-main text-text uppercase tracking-wider">
          {ProP}
        </span>

        <h2 className="text-3xl md:text-[40px] font-normal font-main leading-snug">
          {proH2} <br /> {proH2}
        </h2>

        <p className="text-[20px] font-normal font-main text-white max-w-md">
          {Prodis}
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
  );
};

export default ProjectSection;
