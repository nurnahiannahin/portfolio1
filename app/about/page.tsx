'use client';

import React from 'react';
import Image from 'next/image';
import { FiMail, FiGithub } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-24">
      {/* Page Header */}
      <div className="mb-16">
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-xs">About Me</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">Full-Stack Architect</h1>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left Side: Photo Container (5/12 width) */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white group">
            <Image 
              src="/project-images/Nahian.jpeg" 
              alt="Nur Nahian Nahin - Full Stack Developer" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Description Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 dark:bg-black/90 backdrop-blur-md p-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide uppercase">
                Nur Nahian Nahin
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                B.Sc Computer Science & Engineering | Full-Stack Architect
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Paragraphs (7/12 width) */}
        <div className="md:col-span-7 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          <p className="text-lg text-gray-900 dark:text-gray-100 font-medium">
            I'm Nur Nahian Nahin, a full-stack web developer based in Dhaka, Bangladesh, 
            with a B.Sc in Computer Science and Engineering from Daffodil International University, Dhaka.
          </p>
          <p>
            I discovered web development the way most people do — by accident and curiosity. 
            The moment I realized I could build something like Facebook or YouTube from scratch, 
            I couldn't stop. I taught myself HTML, CSS, and JavaScript, made my first static page, 
            and felt genuinely amazed that I had built something real. That feeling never left.
          </p>
          <p>
            Since then I've gone from static pages to full-stack applications — learning React, 
            Node.js, MongoDB, Python, SQL, and now Next.js with TypeScript and Supabase. 
            My final year university project was a complete Doctor Management System built 
            with the MERN stack, which earned me a strong grade and more importantly proved 
            to me that I could deliver a real product end to end.
          </p>
        </div>
      </div>

      {/* Full Width Content */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed mb-20 text-justify max-w-[800px]">
        <p>
          But I'm not just a developer. I run First Wear, a clothing brand where I built 
          and managed the Shopify store, ran Facebook ad campaigns, and handled everything 
          from product to customer. I've also built and marketed two content websites — 
          one covering home products, one covering travel in Germany — where I learned 
          SEO and what it actually takes to grow an audience from zero.
        </p>
        <p>
          That combination — technical ability and real business experience — is rare. 
          I don't just write code. I understand why a business needs a website, what it 
          needs to do, and how to build it properly.
        </p>
        <p>
          My goal is bigger than freelancing. I'm building toward launching multiple 
          SaaS products that solve real problems for people in Bangladesh and beyond. 
          I already have the ideas. I'm building the skills to execute them. I'm not stopping.
        </p>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 p-12 rounded-3xl border border-gray-100 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Work Together</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400 text-justify max-w-[600px]">
          If you need a web application built — a business website, a booking system, 
          an e-commerce store, or something more complex — I'd like to work with you.
        </p>

        <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:nahiann90@gmail.com" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <FiMail size={18} /> Email me
            </a>
            <a 
              href="https://github.com/nurnahiannahin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiGithub size={18} /> GitHub Profile
            </a>
        </div>
      </section>
    </main>
  );
}