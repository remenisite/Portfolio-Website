import React from "react";

const Button = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center gap-2
        px-6 py-[20px]
        border border-text
        text-[20px] font-normal font-main text-white
        rounded-lg
        transition-all duration-300 ease-in-out
        hover:bg-text hover:text-white
        focus:bg-text focus:text-white
        active:scale-95
        text-sm sm:text-base
      "
    >
      {text}
      {Icon && <Icon className="text-lg" />}
    </button>
  );
};

export default Button;
