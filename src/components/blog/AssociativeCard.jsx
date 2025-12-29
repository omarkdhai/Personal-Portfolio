const AssociativeCard = ({ data }) => {
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-[32px] h-full flex flex-col justify-between border border-transparent hover:border-gray-200 transition-all duration-300 group">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-black uppercase tracking-[2px] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {data.date}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-blue-600 transition-colors">
          {data.organization}
        </h3>
        <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
          {data.role}
        </p>
        
        <p className="text-gray-500 leading-relaxed text-[15px]">
          {data.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {data.tags.map((tag, index) => (
          <span 
            key={index}
            className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AssociativeCard;