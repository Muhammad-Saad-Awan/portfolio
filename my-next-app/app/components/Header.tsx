 "use client"
import Link from "next/link";
import { Lora } from "@next/font/google";
import { Anton } from "@next/font/google";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"]
});


const anton = Anton({
  subsets: ["latin"], 
  weight: "400", 
});




export default function Header() {
 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/skills', label: 'Skills' },
      { href: '/projects', label: 'Projects' },
      { href: '/contact', label: 'Contact Me' }
    ];
  return (
    <header className={lora.className}>
  <div
    className="flex items-center justify-between gap-14 pt-6 pr-16 px-4 py-3 text-xl  text-[#D9E2EC] bg-[#102A43] fixed top-0 left-0 z-50 w-full"
  >
    <div className="text-6xl md:text-nowrap ml-10 max-sm:ml-2 max-md:text-3xl">
      <div className={anton.className}>
        <span className="text-[#00B0FF] relative hover:text-yellow-400 hover:shadow-xl lg:animate-pulse">
          My Portfolio
        </span>
      </div>
    </div>

    <div className="flex gap-8 max-md:hidden max-[1052px]:text-nowrap max-[1012px]:hidden">
      <button>
        <Link
          className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          href="/"
        >
          Home
        </Link>
      </button>

      <button>
        <Link
          className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          href="/about"
        >
          About Me
        </Link>
      </button>

      <button>
        <Link
          className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          href="/skills"
        >
          My Skills
        </Link>
      </button>

      <button>
        <Link
          className=""
          href="/projects"
        >
          My Projects
        </Link>
      </button>

      <button>
        <Link
          className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
          href="/contact"
        >
          Contact Me
        </Link>
      </button>
    </div>
    
    <div className="[1032px]:hidden relative">
      
      <button 
        onClick={toggleMenu}
        className="p-2 z-50 relative"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-9 h-9 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#102A43] z-40  flex flex-col items-center justify-center">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block text-2xl font-bold text-white   hover:text-blue-400 hover:shadow-lg  hover:scale-105  duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
    </div>
  
</header>
  )
}
    