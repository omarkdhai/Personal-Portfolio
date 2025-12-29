import Marquee from "react-fast-marquee";

// 1. IMPORT YOUR SVG FILES
import googleLogo from "../../assets/icons/google.svg";
import dribbbleLogo from "../../assets/icons/dribbble.svg";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import stackOverflowLogo from "../../assets/icons/stackoverflow.svg";
import claudeLogo from "../../assets/icons/claude.svg";
import cursorLogo from "../../assets/icons/cursor.svg";

const toolLogos = [
  { name: "Google", src: googleLogo },
  { name: "Dribbble", src: dribbbleLogo },
  { name: "LinkedIn", src: linkedinLogo },
  { name: "Stack Overflow", src: stackOverflowLogo },
  { name: "Claude AI", src: claudeLogo },
  { name: "Cursor", src: cursorLogo },
];

const InspirationTools = () => {
  return (
    <div className="content py-16 md:py-10 flex flex-col items-center px-6" id="inspirations">
      <div className="max-w-2xl text-center mb-12 md:mb-20">
        <span className="px-5 py-2 rounded-full border border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400">
           Resources
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-[#1A1A1A]">
          Inspiration & Tools
        </h2>
        <p className="mt-6 text-gray-500 text-sm md:text-lg leading-relaxed">
          A selection of platforms and technologies that fuel my productivity, 
          sharpen my engineering skills, and inspire my creative process.
        </p>
      </div>

      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        <div className="flex items-center gap-16 md:gap-32 px-10">
          {toolLogos.map((tool, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <img 
                src={tool.src} 
                alt={tool.name} 
                className="h-8 sm:h-10 md:h-12 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#1A1A1A] transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default InspirationTools;