import WorkSteps from "./WorkSteps";
import workProcess from "../../assets/work-process1.jpg";


const workStepData = [
  {
    id: 1,
    title: "Discover",
    description: "I gather requirements, study user needs, and define project goals so the solution aligns with business and user outcomes.",
    svgPath: "M13.3333 4C8.18 4 4 8.18 4 13.3333C4 18.4867 8.18 22.6667 13.3333 22.6667C15.5333 22.6667 17.5467 21.8933 19.1333 20.6133L25.2533 26.7333C25.6667 27.1467 26.3333 27.1467 26.7467 26.7333C27.16 26.32 27.16 25.6533 26.7467 25.24L20.6267 19.12C21.9067 17.5333 22.6667 15.52 22.6667 13.3333C22.6667 8.18 18.4867 4 13.3333 4ZM13.3333 6.66667C17.02 6.66667 20 9.64667 20 13.3333C20 17.02 17.02 20 13.3333 20C9.64667 20 6.66667 17.02 6.66667 13.3333C6.66667 9.64667 9.64667 6.66667 13.3333 6.66667Z",
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "I create wireframes and visual designs, establish information architecture, and iterate on UX to ensure clarity and usability.",
    svgPath: "M18.6667 2.66675V5.33341H13.3333V2.66675H8C6.53333 2.66675 5.33333 3.86675 5.33333 5.33341V26.6667C5.33333 28.1334 6.53333 29.3334 8 29.3334H24C25.4667 29.3334 26.6667 28.1334 26.6667 26.6667V5.33341C26.6667 3.86675 25.4667 2.66675 24 2.66675H18.6667ZM16 5.33341C16.7333 5.33341 17.3333 5.93341 17.3333 6.66675C17.3333 7.40008 16.7333 8.00008 16 8.00008C15.2667 8.00008 14.6667 7.40008 14.6667 6.66675C14.6667 5.93341 15.2667 5.33341 16 5.33341ZM21.3333 13.3334L13.3333 21.3334L10.6667 18.6667L9.33333 20.0001L13.3333 24.0001L22.6667 14.6667L21.3333 13.3334Z",
  },
  {
    id: 3,
    title: "Development",
    description: "I build responsive, accessible, and performant front-end and back-end components using modern tools and best practices.",
    svgPath: "M12.5333 9.86675L11.3333 8.66675L4 16.0001L11.3333 23.3334L12.5333 22.1334L6.4 16.0001L12.5333 9.86675ZM19.4667 9.86675L20.6667 8.66675L28 16.0001L20.6667 23.3334L19.4667 22.1334L25.6 16.0001L19.4667 9.86675ZM17.2 5.33341L13.2 26.6667H14.8L18.8 5.33341H17.2Z",
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "I deploy the site, monitor analytics and feedback, and continuously refine features and performance after launch.",
    svgPath: "M16 2.66675C16 2.66675 9.33333 9.33341 9.33333 17.3334C9.33333 21.3334 11.3333 24.0001 16 24.0001C20.6667 24.0001 22.6667 21.3334 22.6667 17.3334C22.6667 9.33341 16 2.66675 16 2.66675ZM16 18.6667C14.5333 18.6667 13.3333 17.4667 13.3333 16.0001C13.3333 14.5334 14.5333 13.3334 16 13.3334C17.4667 13.3334 18.6667 14.5334 18.6667 16.0001C18.6667 17.4667 17.4667 18.6667 16 18.6667ZM6.66667 22.6667V29.3334L10.6667 25.3334C10.6667 25.3334 8.66667 24.6667 6.66667 22.6667ZM25.3333 22.6667V29.3334L21.3333 25.3334C21.3333 25.3334 23.3333 24.6667 25.3333 22.6667Z",
  },
];

const WorkProcess = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-10" id="work-process">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 lg:mb-24">
        <div className="max-w-xl">
          <span className="px-5 py-2 rounded-full border border-gray-200 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-[#1A1A1A]">
            A step by step look at my working process
          </h2>
        </div>
        <p className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed">
          A simple, structured approach to building modern web applications — from idea to deployment. Each step is focused on clarity, efficiency, and quality.
        </p>
      </div>

      {/* Main Grid: Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Image */}
        <div className="relative group h-full">
          <div className="sticky top-28 rounded-[48px] overflow-hidden aspect-[3/4] lg:aspect-auto h-full lg:max-h-[850px]">
            <img 
              src={workProcess} 
              alt="Working Process" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right Side: Step Stack */}
        <div className="flex flex-col gap-6 lg:justify-between">
          {workStepData.map((data) => (
            <WorkSteps key={data.id} data={data} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default WorkProcess;