// components/TextAreaField.jsx
const TextAreaField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 col-span-2">
      <label className="text-sm text-gray-300">{label}</label>

      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-lg bg-[#111]
          border border-gray-800
          px-4 py-3 text-sm text-gray-200
          placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-purple-600
          transition resize-none"
      />
    </div>
  );
};

export default TextAreaField;
