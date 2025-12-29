import { Link } from "react-scroll";
import logo from "../../../assets/portfolio-photo.png";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", url: "introduction" },
    { name: "About Me", url: "profile" },
    { name: "Process", url: "work-process" },
    { name: "My Portfolio", url: "portfolio" },
    { id: 5, name: "Associative Life", url: "blog" },
  ];

  const socialLinks = [
    { name: "Linkedin", url: "https://linkedin.com/in/omar-koudhai" },
    { name: "Github", url: "https://github.com/omarkdhai" },
    { name: "Email", url: "mailto:omarkdhai@gmail.com" },
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
          
          {/* LEFT */}
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-5 lg:gap-8 order-2 md:order-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                smooth={true}
                className="text-[10px] lg:text-[11px] uppercase tracking-[2px] font-bold text-gray-400 hover:text-black cursor-pointer transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CENTER */}
          <div className="flex justify-center order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link to="introduction" smooth={true} className="cursor-pointer">
              <img 
                src={logo} 
                className="h-10 w-10 rounded-lg object-cover bg-black p-0.5" 
                alt="logo" 
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end gap-6 lg:gap-8 order-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.name === "Email" ? "_self" : "_blank"}
                rel="noreferrer"
                className="text-[10px] lg:text-[11px] uppercase tracking-[2px] font-bold text-gray-400 hover:text-black transition-colors whitespace-nowrap"
              >
                {social.name}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-black py-6 px-6">
        <p className="text-white text-center text-[12px] tracking-wide font-medium">
          ©Omar Koudhai {copyrightYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;