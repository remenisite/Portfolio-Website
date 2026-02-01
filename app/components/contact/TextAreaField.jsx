
const TextAreaField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 col-span-2">
      <label className="text-[24px] font-second font-main text-white">{label}</label>

      <textarea
        placeholder={placeholder}
        rows={4}
        className="bg-[#1e1e1ea2] rounded-[10px]
          border border-gray-800
          px-4 py-3
          placeholder-text-[24px] font-semibold font-main text-[#444444]
          focus:outline-none focus:ring-2 focus:ring-purple-600
          transition resize-none"
      />
    </div>
  );
};

export default TextAreaField;
