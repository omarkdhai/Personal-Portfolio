import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card1.png";
import card2 from "../../assets/images/portfolio-images/card2.jpg";
import card3 from "../../assets/images/portfolio-images/card3.png";
import card4 from "../../assets/images/portfolio-images/card4.png";

const projectData = [
  {
    id: 1,
    title: "Hybrid Web2/Web3 Marketplace",
    hostingCompany: "Keyrus",
    year: "2025",
    description: "Developed a microservices architecture using Java (Quarkus), Angular, and MongoDB. Implemented a hybrid trust flow linking Web2 payments (Stripe) with Web3 blockchain records via Solidity smart contracts, incorporating electronic signature through MetaMask digital wallet to enhance security. Managed identity and access using Keycloak and handled API routing and security through Kong API Gateway.",
    techStack: ["Java", "Quarkus", "Angular","MongoDB", "Solidity", "Web3", "Blockchain", "Stripe", "Docker", "Keycloak", "PostreSQL", "Kong Gateway"],
    image: card1,
  },
  {
    id: 2,
    title: "Internship Management Web App",
    hostingCompany: "SIGA",
    year: "2024",
    description: "Built a full-stack platform to automate internship offers and application management for SIGA. Implemented secure authentication using Spring Security and JWT, following the Agile SCRUM methodology to ensure iterative quality delivery.",
    techStack: ["Java", "SpringBoot", "Angular", "MySQL", "Spring Security", "JWT"],
    image: card2,
  },
  {
    id: 3,
    title: "Smart Home Desktop Application",
    hostingCompany: "Academic Project",
    year: "2023",
    description: "Designed a JavaFX interface to control smart home devices (lighting, heating, security). Optimized energy management algorithms by 22% and utilized MQTT protocols for real-time device communication.",
    techStack: ["Java", "JavaFX", "Thymeleaf", "MQTT", "Algorithms"],
    image: card3,
  },
  {
    id: 4,
    title: "Automated CI/CD Pipeline",
    hostingCompany: "Academic Project",
    year: "2024",
    description: "Conceived and implemented an automated CI/CD pipeline using Azure DevOps for a Spring Boot/Angular application. Containerized the environment with Docker and orchestrated with Kubernetes to ensure scalability.",
    techStack: ["Azure DevOps", "Docker", "Kubernetes", "Pipelines", "CI/CD"],
    image: card4,
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-20 lg:py-10" id="portfolio">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16 lg:mb-24">
        <div className="max-w-xl">
          <span className="px-5 py-2 rounded-full border border-gray-200 text-[11px] font-bold uppercase tracking-[2px] text-gray-500">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-[#1A1A1A]">
            A full collection of web applications I have built
          </h2>
        </div>
        <p className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed">
          A selection of projects built using best practices and modern technologies — 
          focused on microservices, clean code, and performance.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projectData.map((project) => (
          <Projects key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;