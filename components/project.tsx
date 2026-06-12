"use client";

import { FiGithub } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiSupabase, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Doctor Management System",
    description: "A centralized platform to manage patient records, doctor schedules, and appointment bookings with real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    image: "/project-images/doctorM.jpg",
  },
];

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

export default function Projects({ className = "py-8" }: { className?: string }) {
  return (
    <section className={`w-full max-w-[1200px] mx-auto px-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="relative w-full h-56 overflow-hidden">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
              <div className="flex items-center gap-3 mb-6">
                {project.tags.map((tag) => (<div key={tag} title={tag}>{getTechIcon(tag)}</div>))}
              </div>
              <a href={project.githubLink} className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <FiGithub size={18} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}