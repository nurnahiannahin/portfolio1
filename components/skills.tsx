import React from 'react';
import { 
  SiNextdotjs, SiTypescript, SiReact, SiNodedotjs, 
  SiPostgresql, SiPython, SiPandas, SiMongodb, 
  SiSupabase, SiJavascript, SiTailwindcss, SiShopify, 
  SiWordpress, SiExpress, SiHtml5, SiCss, SiPostgresql as SiSql 
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  // Core Stack
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Express", icon: SiExpress, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  
  // Database & Backend
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-800" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "SQL", icon: SiSql, color: "text-blue-700" },
  
  // Data & Platforms
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-600" },
  { name: "Shopify", icon: SiShopify, color: "text-green-700" },
  { name: "WordPress", icon: SiWordpress, color: "text-gray-700" },
];

export default function Skills() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-[20px] font-semibold text-gray-900 dark:text-gray-100 mb-12">
        Technical Expertise
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg hover:border-blue-400 transition-all duration-300 bg-white dark:bg-gray-950"
          >
            <skill.icon className={`w-8 h-8 mb-3 ${skill.color}`} />
            <span className="text-[13px] font-medium text-gray-600 dark:text-gray-400 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}