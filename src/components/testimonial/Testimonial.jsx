import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonialData = [
  {
    quote: "Omar's ability to navigate the complexities of Web2 and Web3 was impressive. He successfully bridged the gap between traditional payment systems and blockchain registers, showing a level of technical maturity rare for an intern. A true problem solver.",
    name: "Najla Dridi",
    designation: "Full-Stack Project Lead @ Keyrus"
  },
  {
    quote: "During his time at SIGA, Omar demonstrated excellent learning ability of Spring Boot and Angular. He adapted quickly to our SCRUM methodology and was instrumental in automating our internship offer flow.",
    name: "Wassim Mhamdi",
    designation: "Senior Software Engineer @ SIGA"
  },
  {
    quote: "I worked alongside Omar on our automated CI/CD project. His dedication to writing clean, containerized code with Docker and Kubernetes ensured our deployment was seamless. He has a very strong engineering mindset.",
    name: "Adel Boussaidi",
    designation: "CS Engineering Student @ ENICarthage"
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-10" id="testimonials">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="px-5 py-2 rounded-full border border-gray-100 text-[11px] font-black uppercase tracking-[2px] text-gray-400">
          Feedbacks
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-[#1A1A1A]">
          What my co-workers say
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="pb-20"
        >
          {testimonialData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F9FAFB] rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden group">
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  className="absolute top-10 left-10 text-gray-100 text-md opacity-20"
                />
                
                <div className="relative z-10 space-y-8">
                  <p className="text-md md:text-xl font-medium leading-relaxed text-gray-700 italic">
                    "{data.quote}"
                  </p>
                  
                  <div className="pt-8">
                    <p className="text-lg font-bold text-[#1A1A1A]">
                      {data.name}
                    </p>
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">
                      {data.designation}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-pagination-bullet-active {
          background: #1A1A1A !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;