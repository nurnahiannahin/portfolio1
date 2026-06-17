'use client'

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiSupabase, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

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
    title: "Foodies Restaurant",
    description: "A robust, full-stack management solution designed to streamline restaurant operations. This platform centralizes order management, inventory tracking, and customer reservation scheduling.",
    tags: ["Next.js", "TypeScript" , "Supabase"],
    githubLink: "https://github.com/nurnahiannahin/foodies-restaurant",
    liveLink: "https://foodies-restaurant-irkr.vercel.app/",
    image: "/project-images/foodies.png",
  },
  {
    title: "MediClick",
    description: "An intuitive, clinical management system designed to streamline patient appointment scheduling. It enables seamless doctor discovery and booking while providing administrators with a centralized dashboard to manage operations efficiently.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    githubLink: "https://github.com/nurnahiannahin/Mediclick---Clinic-appoinment", // Update this with your actual repository link
    liveLink: "https://mediclick-clinic-appoinment.vercel.app/", // Add your Vercel deployment URL here once live
    image: "/project-images/mediclick.png",
},
  {
    title: "Fynnect - Doctor Management System",
    description: "A centralized platform to manage patient records, doctor schedules, and appointment bookings with real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/nurnahiannahin/Fynnect-appoinment-webapp",
    liveLink: "#",
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
      {/* Changed lg:grid-cols-3 to lg:grid-cols-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="relative w-full h-56 overflow-hidden">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex items-center gap-3 mb-6">
                {project.tags.map((tag) => (<div key={tag} title={tag}>{getTechIcon(tag)}</div>))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiGithub size={18} /> Code
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors">
                    <FiExternalLink size={18} /> Live Demo
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