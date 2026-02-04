"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({
  items,
  title,
  content,
  h2,
  p,
}) => {
  // ✅ NEW: normalize data (array OR single props)
  const normalizedItems = items
    ? items
    : [{ id: 1, title, content, h2, p }];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {normalizedItems.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content, h2, p }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[600px] relative border-t border-r border-text">
      {/* Header */}
      <div className="flex justify-between">
        <div className="px-[20px]">
          <h2 className="text-[24px] pt-[30px] font-bold font-main text-white">
            {title}
          </h2>

          <p className="text-[24px] py-[35px] font-normal font-kalam flex justify-between text-white">
            {h2}
            <span className="text-[20px] font-normal font-kalam text-white">
              {p}
            </span>
          </p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="
            text-left text-text text-[30px]
            bg-[#131313] transition-all duration-300
            border rounded-full w-[55px] h-[55px]
            flex justify-center items-center
            absolute top-[-28px] left-[571px] z-[9999]
          "
        >
          {open ? <FiMinus /> : <FiPlus />}
        </button>
      </div>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out
        ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden px-[20px] pb-4 text-[18px] font-normal font-main text-white">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
