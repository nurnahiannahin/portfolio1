"use client"; // REQUIRED: This enables useState to work

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[100] w-full px-4 py-4 md:px-8">
      {/* Navbar Container */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-[60]">
          <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
             <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
               <div className="bg-black dark:bg-white rounded-sm"></div>
               <div className="bg-black dark:bg-white rounded-sm"></div>
               <div className="bg-black dark:bg-white rounded-sm"></div>
               <div className="bg-black dark:bg-white rounded-sm"></div>
             </div>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Nahin.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li><Link href="/projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</Link></li>
          </ul>
          <Link href="/contact" className="bg-[#1d2bf1] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1520cc] transition-all">Contact</Link>
          <ModeToggle />
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
            className="md:hidden p-2 z-[60] text-gray-900 dark:text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 z-[50]">
          <Link href="/projects" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>About</Link>
          
          {/* Action Row: Contact (3/4) and ModeToggle (1/4) */}
          <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link 
              href="/contact" 
              className="col-span-3 bg-[#1d2bf1] text-white py-3 rounded-xl font-medium text-center flex items-center justify-center" 
              onClick={() => setIsOpen(false)}
            >
              Contact me
            </Link>
            <div className="col-span-1 flex items-center justify-center">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}