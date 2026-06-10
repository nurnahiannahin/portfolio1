import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background px-6 py-12 mt-auto flex justify-center border-t border-gray-200 dark:border-gray-800">
      
      {/* Main Container */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Copyright (Kept clean and professional) */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-gray-100">Nahin.</span>
          <span> © {currentYear} All rights reserved.</span>
        </div>

        {/* Right Side: Larger Headline/CTA */}
        <div className="text-center md:text-right">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Let's build something great.
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1 font-medium hover:underline">
            <Link href="/contact">Get in touch →</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}