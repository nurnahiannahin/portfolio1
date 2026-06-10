import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image'; // Import Next.js Image component

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image: string; // Added image URL field
}

const projects: Project[] = [
  {
    title: "Doctor Management System",
    description: "A centralized platform to manage patient records, doctor schedules, and appointment bookings with real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/nurnahiannahin/Fynnect-appoinment-webapp",
    image: "/project-images/doctor-system.png", // Path to your image in public/
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-[20px] font-semibold text-gray-900 dark:text-gray-100 mb-10">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-gray-950"
          >
            {/* Project Image Section */}
            <div className="relative w-full h-48">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 text-[12px] font-semibold flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                    <FiGithub size={14} /> GitHub
                </a>
                
                {project.liveLink && (
                    <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 text-[12px] font-semibold flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                    <FiExternalLink size={14} /> Live Site
                    </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}