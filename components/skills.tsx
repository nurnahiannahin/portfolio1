import React from 'react';
import { 
  SiNextdotjs, SiTypescript, SiReact, SiNodedotjs, 
  SiPostgresql, SiPython, SiPandas, SiMongodb, 
  SiSupabase, SiJavascript, SiTailwindcss, SiShopify, 
  SiWordpress, SiExpress, SiHtml5, SiCss 
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface SkillItem { name: string; icon: IconType; color: string; }

const skillCategories = [
  {
    title: "Core Development",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS", icon: SiCss, color: "text-blue-500" },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express", icon: SiExpress, color: "text-gray-800 dark:text-gray-200" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-800" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ]
  },
  {
    title: "Data & Platforms",
    skills: [
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
      { name: "Pandas", icon: SiPandas, color: "text-purple-600" },
      { name: "Shopify", icon: SiShopify, color: "text-green-700" },
      { name: "WordPress", icon: SiWordpress, color: "text-gray-700" },
    ]
  }
];

export default function Skills() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">Technical Expertise</h2>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-sm"
                >
                  <skill.icon className={`w-5 h-5 ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <span className="text-[12px] font-medium text-gray-600 dark:text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}