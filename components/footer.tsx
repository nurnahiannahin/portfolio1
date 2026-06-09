import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background px-4 py-8 sm:px-8 md:px-12 mt-auto flex justify-center items-center">
      
      {/* Container matching the 1200px max-width of your navbar */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/60">
        
        {/* Left Side: Copyright info */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Nahin.</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Right Side: Secondary Links */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <li>
              <Link href="/privacy" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>

      </div>

    </footer>
  );
}