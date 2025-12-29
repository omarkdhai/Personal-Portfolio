import { motion } from "framer-motion";

const Form = () => {
  const inputClass = "w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-2">Full Name</label>
          <input type="text" placeholder="Type your full name" className={inputClass} required />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-2">Email Address</label>
          <input type="email" placeholder="example@example.com" className={inputClass} required />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-2">Subject</label>
        <input type="text" placeholder="Project Inquiry" className={inputClass} required />
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 ml-2">Message</label>
        <textarea 
          rows="5" 
          placeholder="Tell me about your project..." 
          className={`${inputClass} resize-none`}
          required
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full md:w-fit bg-[#1A1A1A] text-white px-12 py-5 rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-xl flex items-center justify-center gap-3"
      >
        Send Message
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.button>
    </form>
  );
};

export default Form;