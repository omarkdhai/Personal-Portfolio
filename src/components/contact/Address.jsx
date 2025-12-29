import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-[32px] flex items-center gap-6 border border-transparent hover:border-blue-100 transition-all duration-300">
      <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-100">
        <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[2px] text-gray-400 mb-1">
          {item.title}
        </p>
        <p className="text-lg font-bold text-[#1A1A1A]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Address;