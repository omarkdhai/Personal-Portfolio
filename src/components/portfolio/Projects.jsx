import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="bg-[#F9FAFB] rounded-[48px] p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center mb-12">
      
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 bg-white rounded-[32px] p-4 shadow-sm border border-gray-100 overflow-hidden">
        <div className="rounded-[20px] overflow-hidden border border-gray-100">
           <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] uppercase">
          {data.title}
        </h2>

        <p className="text-gray-500 leading-relaxed text-lg">
          {data.description}
        </p>

        {/* Infos */}
        <div className="flex gap-20 border-t border-gray-200 pt-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2">hosting company</p>
            <p className="font-bold text-[#1A1A1A]">{data.hostingCompany}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-2">Year</p>
            <p className="font-bold text-[#1A1A1A]">{data.year}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-1.5 bg-[#EBF5FF] text-[#3B82F6] rounded-full text-[11px] font-bold uppercase tracking-wider border border-[#D1E9FF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;