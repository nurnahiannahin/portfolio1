import React from 'react';
import { 
  SiNextdotjs, SiTypescript, SiReact, SiNodedotjs, 
  SiPostgresql, SiPython, SiPandas
} from 'react-icons/si';
import { IconType } from 'react-icons';

// Define the interface for your skill objects
interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-800" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Pandas", icon: SiPandas, color: "text-purple-600" },
];

export default function Skills() {
  return (
    <section className="w-full max-w-[1200px] mt-8 mx-auto px-6 py-20">
      <h2 className="text-[20px] font-semibold text-gray-900 dark:text-gray-100 mb-12">
        My Tech Stack
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-950"
          >
            <skill.icon className={`w-8 h-8 mb-3 ${skill.color}`} />
            <span className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}