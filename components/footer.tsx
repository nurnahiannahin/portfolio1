import Link from 'next/link';
import { FiGithub } from 'react-icons/fi'; // Import the GitHub icon

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background px-6 py-12 mt-auto flex justify-center border-t border-gray-200 dark:border-gray-800">
      
      <div className="w-full max-w-[1200px] flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-gray-100">Nahin.</span>
          <span> © {currentYear} All rights reserved.</span>
        </div>

        {/* Right Side: Headline and Buttons */}
        <div className="text-center md:text-right">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Let's build something great.
          </h3>
          
          <div className="flex items-center justify-center md:justify-end gap-3">
            {/* GitHub Button: Styled as a 'Secondary' button */}
            <a 
              href="https://github.com/nurnahiannahin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95"
            >
              <FiGithub size={16} />
              GitHub
            </a>

            {/* Contact Button: Styled as a 'Primary' button */}
            <Link 
              href="/contact"
              className="px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Get in touch →
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}