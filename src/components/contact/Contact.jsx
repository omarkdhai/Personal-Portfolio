import Address from "./Address";
import Form from "./Form";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const addressData = [
  {
    icon: faLocationDot,
    title: "Location",
    description: "Manouba, Tunisia",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "omarkdhai@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    description: "+216 27 808 574",
  },
];

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-10" id="contact">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 lg:mb-24">
        <div className="max-w-xl text-left">
          <span className="px-5 py-2 rounded-full border border-gray-200 text-[11px] font-black uppercase tracking-[2px] text-gray-400">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-[#1A1A1A]">
            Let's start a <br /> conversation
          </h2>
        </div>
        <p className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed">
          I’m always open to discussing new projects, creative ideas or 
          opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT SIDE: Contact Info Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {addressData.map((item, index) => (
            <Address item={item} key={index} />
          ))}
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="lg:col-span-8 bg-[#F9FAFB] p-8 md:p-12 rounded-[40px]">
          <Form />
        </div>

      </div>
    </div>
  );
};

export default Contact;