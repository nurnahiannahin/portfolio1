import { supabase } from '@/lib/utils/supabase';
import Link from 'next/link';

console.log("supabase initialized", supabase);

export default function HeroContent() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-6 py-16 md:min-h-[calc(80vh-80px)] flex flex-col justify-center items-start overflow-hidden">
      
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Primary Glow */}
        <div className="absolute -top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-blue-200 dark:bg-blue-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10s]" />
        
        {/* Secondary Glow */}
        <div className="absolute top-[20%] -left-[10%] w-[30vw] h-[30vw] bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Top Labels Container */}
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-[10px] font-bold text-gray-700 dark:text-gray-200 tracking-wider uppercase">
            Available for new projects
          </p>
        </div>
        <p className="text-[12px] md:text-[14px] font-medium text-gray-500 dark:text-gray-400 tracking-tight">
          Nur Nahian Nahin <span className="text-gray-300 dark:text-gray-600 mx-2">•</span> Dhaka, Bangladesh
        </p>
      </div>

      {/* Headline */}
      <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-extrabold tracking-tighter text-[#111111] dark:text-[#ffffff] leading-[1.1] max-w-[800px]">
        I build full-stack web apps for businesses, using{" "}
        <span className="relative inline-block italic text-[#1d2bf1] dark:text-[#4d59ff] whitespace-nowrap">
          Next.js and Supabase.
          <span className="absolute bottom-1 left-0 -z-10 w-full h-3 bg-blue-200/40 dark:bg-blue-900/30 rounded-sm" />
        </span>
      </h1>

      <p className="mt-5 text-sm md:text-lg text-gray-600 dark:text-gray-400 max-w-[500px] leading-relaxed">
        High-performance, scalable solutions tailored to your business goals. 
        Turning complex ideas into reality.
      </p>
      
      <div className="mt-6">
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm md:text-base font-medium rounded-xl text-white bg-[#1d2bf1] hover:bg-[#1520cc] transition-all">
          Let's work together
        </Link>
      </div>
    </div>
  );
}