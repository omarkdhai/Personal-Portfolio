import { useEffect, useState } from "react";
import logo from "../../../assets/portfolio-photo.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About Me", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "My Portfolio", url: "portfolio" },
  { id: 5, name: "Associative Life", url: "blog" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        position > 50 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3" 
          : "bg-white py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        
        {/* LEFT: Logo Section */}
        <Link
          to="introduction"
          smooth={true}
          className="flex items-center cursor-pointer group"
        >
          <img 
            src={logo} 
            className="h-10 w-10 rounded-lg object-cover bg-black p-0.5" 
            alt="logo" 
          />
          <p className="text-xl ms-3 font-black tracking-tighter text-[#1A1A1A] uppercase">
            Koudhai <span className="font-light text-gray-400">Omar</span>
          </p>
        </Link>

        {/* CENTER: All Navigation Links */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.url}
                  smooth={true}
                  spy={true}  
                  offset={-100}   
                  activeClass="nav-active"
                  className="text-[11px] uppercase tracking-[2px] font-bold text-gray-400 hover:text-black cursor-pointer transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: High Contrast Button */}
        <div className="flex items-center">
          <Link
            to="contact"
            smooth={true}
            duration={900}
            className="bg-[#1A1A1A] text-white text-[11px] sm:text-[13px] font-bold px-4 py-2.5 sm:px-7 sm:py-3 rounded-[10px] sm:rounded-[14px] hover:bg-black transition-all whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Icon */}
          <div className="dropdown dropdown-end lg:hidden ms-4">
            <div tabIndex={0} role="button" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-64 uppercase tracking-widest text-[11px] gap-4">
              {navItems.map((item) => (
                <li key={item.id}><Link to={item.url} smooth={true} spy={true} activeClass="text-black" onClick={handleMenuClick}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Internal CSS for the Active State */}
      <style>{`
        .nav-active {
          color: #000000 !important;
          font-weight: 900 !important;
        }
      `}</style>
    </div>
  );
};

export default NavBar;