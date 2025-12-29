import person from "../../assets/images/portfolio-photo.png";
import infoBg from "../../assets/backgroung-img.jpg";
import my_CV from "../../assets/CV_KOUDHAI_Omar.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Introduction = () => {
  const socialLinks = [
    { icon: faLinkedin, link: "https://www.linkedin.com/in/omar-koudhai/" },
    { icon: faGithub, link: "https://github.com/omarkdhai" },
    { icon: faEnvelope, link: "mailto:omarkdhai@gmail.com" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-20 pb-32" id="introduction">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-[2px]">
              Available for work
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1A1A1A] leading-[1.1]">
            Hello, <br /> 
            <span className="text-gray-800">I'm Omar Koudhai</span>
          </h1>

          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            A Software Engineer specializing in Full-Stack Development. As a fresh graduate,
            I am dedicated to building scalable, high-performance web applications by bridging the gap between
            robust backend logic and intuitive, pixel-perfect user interfaces.
          </p>

          {/* Download CV Button */}
          <a
            href={my_CV}
            download="CV_KOUDHAI_Omar.pdf"
            className="inline-block bg-[#1A1A1A] text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-black transition-all hover:shadow-xl cursor-pointer"
          >
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE: Bento Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-12 gap-4">
          
          <div className="col-span-7 relative group">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-[#D4D9E2]">
              <img 
                src={person} 
                alt="Omar Koudhai" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="col-span-5 flex flex-col gap-4">
            <div 
              className="relative p-6 rounded-[32px] flex-1 flex flex-col justify-center overflow-hidden bg-cover bg-center text-white"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${infoBg})` }}
            >
              <h3 className="text-xl font-bold z-10">Omar Koudhai</h3>
              <p className="opacity-80 text-sm mb-4 z-10">Manouba, Tunisia</p>
              
              <div className="bg-white/20 backdrop-blur-md self-start px-3 py-2 rounded-full shadow-sm border border-white/30 flex items-center gap-2 mb-2 z-10">
                <FontAwesomeIcon icon={faCode} className="text-white text-xs" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Software Engineer</span>
              </div>
              
              <div className="bg-blue-500/80 backdrop-blur-sm self-start px-4 py-2 rounded-full z-10">
                <span className="text-white text-[10px] font-black tracking-widest uppercase">
                  9+ M. Internship Exp.
                </span>
              </div>
            </div>
          </div>

          {/* Redirect Social Grid */}
          <div className="col-span-4 grid grid-cols-2 gap-3">
            {socialLinks.map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noreferrer" 
                className="aspect-square bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl text-gray-700" />
              </a>
            ))}
          </div>

          {/* Expanded Specialized Section */}
          <div className="col-span-8 bg-[#2B84FF] p-6 rounded-[32px] flex flex-col justify-between overflow-hidden relative text-white">
            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-[2px]">
              Specialized in:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
              <span className="font-bold text-xl opacity-100">Java</span>
              <span className="font-bold text-xl opacity-90">Angular</span>
              <span className="font-bold text-xl opacity-90">SpringBoot</span>
              <span className="font-bold text-xl opacity-80">Quarkus</span>
              <span className="font-bold text-xl opacity-70">Typescript</span>
              <span className="font-bold text-xl opacity-60">SQL</span>
              <span className="font-bold text-xl opacity-50">Blockchain</span>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Introduction;