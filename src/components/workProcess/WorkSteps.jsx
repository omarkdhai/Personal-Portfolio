const WorkSteps = ({ data }) => {
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex items-start gap-6 transition-all duration-300 hover:bg-white hover:shadow-xl group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#007BFF] rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current"
        >
          <path d={data?.svgPath} />
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-1">
          STEP 0{data.id}
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
          {data.title}
        </h3>
        <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-gray-500">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;