// components/InputField.jsx
import React from "react";

const InputField = ({ label, type = "text", placeholder, icon: Icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-300">{label}</label>

      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Icon size={18} />
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-lg bg-[#111]
            border border-gray-800
            px-10 py-3 text-sm text-gray-200
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600
            transition`}
        />
      </div>
    </div>
  );
};

export default InputField;
