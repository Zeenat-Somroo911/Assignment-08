'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent backdrop-blur-lg text-blue-900 shadow-lg sticky top-0 border-b-4 border-blue-500">
      <nav className="container mx-auto px-4 py-6 z-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            Cars Collection
          </Link>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={25} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
          <ul
            className={`lg:flex lg:space-x-6 lg:justify-center lg:flex-1 ${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 right-0 bg-indigo-700/80 lg:bg-transparent backdrop-blur-lg shadow-md lg:shadow-none p-4 lg:p-0 mt-2 lg:mt-0 z-50`}
          >
            <li>
              <Link href="/" className="block py-2 lg:py-0 hover:text-blue-700 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 lg:py-0 hover:text-blue-700 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
