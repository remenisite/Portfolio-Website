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

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="flex justify-between text-sm italic text-gray-400">
          <span>{subtitle}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
