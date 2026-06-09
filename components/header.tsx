import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    // 1. The Main Global Wrapper
    <div className="w-full px-4 py-4 md:px-8">
      
      {/* 2. The Floating Navbar Card */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        
        {/* 3. Logo Component */}
        <Link href="/" className="flex items-center gap-2">
          {/* Box wrapping the 4 squares */}
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200/50">
            {/* The 4-square Grid */}
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-black rounded-sm"></div>
              <div className="bg-black rounded-tr-md rounded-sm"></div>
              <div className="bg-black rounded-bl-md rounded-sm"></div>
              <div className="bg-black rounded-sm"></div>
            </div>
          </div>
          {/* Logo Text */}
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Nahin.
          </span>
        </Link>

        {/* 4. Navigation Menu & Button Container */}
        <nav className="flex items-center gap-6">
          {/* List of Links */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <li>
              <Link href="/projects" className="hover:text-gray-900 transition-colors duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900 transition-colors duration-200">
                About
              </Link>
            </li>
          </ul>

          {/* 5. Call to Action Button */}
          <Link 
            href="/contact" 
            className="bg-[#1d2bf1] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-[#1520cc] transition-all duration-200 active:scale-95"
          >
            Contact me
          </Link>

          {/* THE THEME TOGGLE ELEMENT */}
          <ModeToggle />

        </nav>

      </header>

    </div>
  )
}

export default Header
