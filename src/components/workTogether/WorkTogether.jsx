import { motion } from "framer-motion";

const WorkTogether = () => {
  return (
    <div className="bg-white w-full">
    <section className="max-w-[1400px] mx-auto mt-[-200px] px-6 lg:px-20 py-20 lg:py-38">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        
        className="relative w-full bg-[#0A0A0A] rounded-[48px] overflow-hidden py-10 px-8 text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
            <div className="absolute -left-20 -top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-gray-800 to-transparent blur-3xl opacity-50" />
            <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-gray-800 to-transparent blur-3xl opacity-30" />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border border-white/5 bg-white/5" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full border border-white/5 bg-white/5" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="text-[11px] font-black uppercase tracking-[3px] text-gray-500">
            Start a Project!
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Got an idea? Let’s make it happen.
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Let’s connect and see what we can create together.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:omarkdhai@gmail.com"
            className="mt-6 bg-[#F3F3F3] text-[#0A0A0A] px-12 py-5 rounded-[20px] font-bold text-sm shadow-xl hover:bg-white transition-colors cursor-pointer"
          >
            Let's Connect
          </motion.a>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default WorkTogether;