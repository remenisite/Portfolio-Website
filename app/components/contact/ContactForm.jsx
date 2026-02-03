import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegEdit,
  FaPaperPlane,
} from "react-icons/fa";
import InputField from "../ui/InputField";
import TextAreaField from "./TextAreaField";




const ContactForm = () => {
  return (

      <div className="mt-[62px]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" placeholder="Tery Humfy D. Tawez"   icon={FaUser}  />

          <InputField  label="Email Address"  type="email" placeholder="tery@humfy.org" icon={FaEnvelope}     />

          <InputField   label="Phone Number"  placeholder="+821 (123) 45678"  icon={FaPhone}/>

          <InputField label="Subject" placeholder="Subject" icon={FaRegEdit}   />

          <TextAreaField    label="Message" placeholder="Write your message..." />

                   <button
            type="submit"
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition duration-300 font-semibold"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    
  );
};

export default ContactForm;
