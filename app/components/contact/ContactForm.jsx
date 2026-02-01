// pages/ContactForm.jsx
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegEdit,
} from "react-icons/fa";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";




const ContactForm = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-[#0b0b0b] p-8 rounded-xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            placeholder="Tery Humfy D. Tawez"
            icon={FaUser}
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="tery@humfy.org"
            icon={FaEnvelope}
          />

          <InputField
            label="Phone Number"
            placeholder="+821 (123) 45678"
            icon={FaPhone}
          />

          <InputField
            label="Subject"
            placeholder="Subject"
            icon={FaRegEdit}
          />

          <TextAreaField
            label="Message"
            placeholder="Write your message..."
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
