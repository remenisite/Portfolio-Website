import React from "react";

const Button = ({ text, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        px-6 py-2
        border border-pink-500
        text-pink-500
        rounded-lg
        transition-all duration-300 ease-in-out
        hover:bg-pink-500 hover:text-white
        focus:bg-pink-500 focus:text-white
        active:scale-95
        text-sm sm:text-base
      "
    >
      {Icon && <Icon className="text-lg" />}
      {text}
    </button>
  );
};

export default Button;
