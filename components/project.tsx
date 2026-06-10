import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiNextdotjs, SiSupabase, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

// Map your tech stack strings to actual icons
const techIcons: { [key: string]: JSX.Element } = {
  "React": <SiReact className="text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="text-[#339933]" />,
  "Express": <SiExpress className="text-gray-700 dark:text-gray-300" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Supabase": <SiSupabase className="text-[#3ECF8E]" />,
  "TypeScript": <SiTypescript className="text-[#3178C6]" />,
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Doctor Management System",
    description: "A centralized platform to manage patient records, doctor schedules, and appointment bookings with real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    image: "/project-images/doctor-system.png",
  },
];

export default function Projects() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex items-center gap-3 mb-6">
                {project.tags.map((tag) => (
                  <div key={tag} className="text-lg" title={tag}>
                    {techIcons[tag] || null}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.githubLink} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiGithub size={18} /> Code
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <FiExternalLink size={18} /> Live
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