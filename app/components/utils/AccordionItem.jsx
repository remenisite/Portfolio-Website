import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({ title, subtitle, date, content, isOpen, onToggle }) => {
  return (
    <div className="relative pl-8 pb-12 border-l border-red-600">

      {/* Toggle Icon */}
      <button
        onClick={onToggle}
        className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-black border border-red-600 flex items-center justify-center text-red-600"
      >
        {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
      </button>

      {/* Content */}
      {isOpen && (
        <p className="text-[18px] font-normal font-main text-white max-w-xl leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
