import person from "../../assets/images/portfolio-photo.png";
import myCV from "../../assets/CV_KOUDHAI_Omar.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, 
  faLocationDot, 
  faChevronLeft, 
  faChevronRight,
  faArrowDownLong 
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Profile = () => {
  const skills = [
    "Java", "SpringBoot", "Quarkus", "Angular", "React.js", "Typescript", "Blockchain", "Web3", "PostgreSQL", 
    "MySQL", "MongoDB", "Docker", "CI/CD", "Azure DevOps", "Kubernetes", "Git", "Figma"
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-15 bg-white" id="profile">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-3/5">
          {/* Header Section */}
          <h1 className="text-4xl font-bold text-[#1A1A1A] uppercase tracking-tight">
            OMAR KOUDHAI
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-4 text-gray-600 font-medium">
            <span>Software Engineer</span>
            <span className="text-gray-300 text-xl">•</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
              <span>Based in Manouba, Tunisia</span>
            </div>
          </div>

          <hr className="my-8 border-gray-100" />

          {/* Overview Section */}
          <div className="space-y-4">
            <p className="text-[11px] font-black uppercase tracking-[2px] text-gray-400">
              OVERVIEW
            </p>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
              I believe that great software is as much about solving human problems as it is about writing clean code. My approach is rooted in clarity and efficiency—taking complex technical requirements and turning them into straightforward, high-performance solutions. My focus remains on building accessible, maintainable systems that empower users and grow with your business.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-1.5 bg-[#EBF5FF] text-[#3B82F6] rounded-full text-sm font-semibold border border-[#D1E9FF]"
              >
                {skill}
              </span>
            ))}
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "11+", label: "Finished projects" },
              { val: "95%", label: "Dedication rate" },
              { val: "9+ M.", label: "Internship Exp." }
            ].map((stat, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-[32px] text-center space-y-2">
                <p className="text-4xl font-bold text-[#1A1A1A]">{stat.val}</p>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-8 mt-12">
            <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95 cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                duration={900}
              >
                Start a Project
              </Link>
            </button>
            <a 
              href={myCV} 
              download="CV_KOUDHAI_Omar.pdf"
              className="group flex items-center gap-2 font-bold text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Download CV 
              <FontAwesomeIcon icon={faArrowDownLong} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/5 relative group">
          <div className="rounded-[48px] overflow-hidden aspect-[4/5] relative">
            <img 
              src={person} 
              alt="Omar Working" 
              className="w-full h-full object-cover"
            />            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white/70 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;