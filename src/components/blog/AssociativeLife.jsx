import React from 'react';

const associativeData = [
  {
    id: 1,
    organization: "Melkart Junior Entreprise",
    role: "Marketing & Communication Member",
    date: "Sep 2023 – Present",
    description: "Active member of the marketing pole dedicated to strengthening the entity's brand image. Involved in the organization of the 'Pitch For Change' flagship event.",
    tags: ["Marketing", "Branding", "Event Planning"],
  },
  {
    id: 2,
    organization: "Forum des Entreprises ENICARTHAGE",
    role: "Media Committee Manager",
    date: "Oct 2023 – Nov 2023",
    description: "Responsible for the media committee for the flagship career forum of the École Nationale d’Ingénieurs de Carthage.",
    tags: ["Media Management", "Public Relations"],
  },
  {
    id: 3,
    organization: "AIESEC Carthage",
    role: "OGV Program Member",
    date: "Feb 2023 – Feb 2024",
    description: "Promoted international volunteer opportunities for students and collaborated with international partners to facilitate projects and ensure success.",
    tags: ["Volunteerism", "International Relations", "Sales"],
  },
];

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

const AssociativeLife = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-10" id="blog">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 lg:mb-24">
        <div className="max-w-xl">
          <span className="px-5 py-2 rounded-full border border-gray-200 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-[#1A1A1A]">
            Associative Life & <br /> Community Impact
          </h2>
        </div>
        <p className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed text-right">
          Beyond engineering, I am committed to leadership and soft skill development through active participation in student organizations and international networks.
        </p>
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {associativeData.map((item) => (
          <AssociativeCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AssociativeLife;