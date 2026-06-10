import React from 'react';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">About Me</h1>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Side: Photo */}
        <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
          <Image 
            src="/nahian-profile.jpg" 
            alt="Nahian" 
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: First two paragraphs - Justified for all screens */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          <p>
            I'm Nur Nahian Nahin, a full-stack web developer based in Dhaka, Bangladesh, 
            with a B.Sc in Computer Science and Engineering from Daffodil International University, Dhaka.
          </p>
          <p>
            I discovered web development the way most people do — by accident and curiosity. 
            The moment I realized I could build something like Facebook or YouTube from scratch, 
            I couldn't stop. I taught myself HTML, CSS, and JavaScript, made my first static page, 
            and felt genuinely amazed that I had built something real. That feeling never left.
          </p>
        </div>
      </div>

      {/* Full Width Content - Justified for all screens */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed mb-16 text-justify">
        <p>
          Since then I've gone from static pages to full-stack applications — learning React, 
          Node.js, MongoDB, Python, SQL, and now Next.js with TypeScript and Supabase. 
          My final year university project was a complete Doctor Management System built 
          with the MERN stack, which earned me a strong grade and more importantly proved 
          to me that I could deliver a real product end to end.
        </p>
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
      <section className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Let's Work Together</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400 text-justify">
          If you need a web application built — a business website, a booking system, 
          an e-commerce store, or something more complex — I'd like to work with you.
        </p>

        <div className="flex flex-wrap gap-4">
            {/* Email Button */}
            <a 
            href="mailto:nahiann90@gmail.com" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1d2bf1] text-white font-medium text-sm transition-all duration-300 hover:bg-[#1520cc] hover:shadow-lg hover:shadow-blue-500/20"
            >
            <FiMail size={16} /> {/* The Icon */}
            Email me
            </a>
            {/* GitHub Button */}
            <a 
                href="https://github.com/nurnahiannahin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium text-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                GitHub Profile
            </a>
        </div>
      </section>
    </main>
  );
}