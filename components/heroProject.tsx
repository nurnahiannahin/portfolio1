import React from 'react'
import Projects from './project'

const HeroProjects = () => {
  return (
    // Added a semantic section wrapper with consistent padding
    <section className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-24">
      
      {/* Header Container for better alignment */}
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Featured Projects
        </h2>
        <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full" />
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg">
          A selection of projects I've built, ranging from SaaS platforms to custom web applications.
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className="mt-8">
        <Projects />
      </div>
      
    </section>
  )
}

export default HeroProjects