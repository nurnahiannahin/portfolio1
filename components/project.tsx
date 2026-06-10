"use client"; // Required for components using React hooks or icons in Next.js

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiSupabase, 
  SiTypescript 
} from 'react-icons/si';
import Image from 'next/image';

// 1. Defined a proper type for your projects
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

// 2. Functional helper to avoid serialization errors during build
const getTechIcon = (tag: string) => {
  const className = "text-xl";
  switch (tag) {
    case "React": return <SiReact className={`${className} text-[#61DAFB]`} />;
    case "Node.js": return <SiNodedotjs className={`${className} text-[#339933]`} />;
    case "Express": return <SiExpress className={`${className} text-gray-700 dark:text-gray-300`} />;
    case "MongoDB": return <SiMongodb className={`${className} text-[#47A248]`} />;
    case "Next.js": return <SiNextdotjs className={`${className} text-black dark:text-white`} />;
    case "Supabase": return <SiSupabase className={`${className} text-[#3ECF8E]`} />;
    case "TypeScript": return <SiTypescript className={`${className} text-[#3178C6]`} />;
    default: return null;
  }
};

export default function Projects() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
        Featured Projects
      </h2>
      
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

              {/* Tech Stack */}
              <div className="flex items-center gap-3 mb-6">
                {project.tags.map((tag) => (
                  <div key={tag} title={tag}>
                    {getTechIcon(tag)}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto">
                <a href={project.githubLink} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiGithub size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}