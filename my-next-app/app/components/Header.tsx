"use client"
import Link from "next/link";
import { Lora } from '@next/font/google';
import { Protest_Revolution } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],  
});
const protestRevolution = Protest_Revolution({
  subsets: ['latin'],
  weight: '400',  
});



export default function Header() {
  return (
    <header className={lora.className}>
      <div
        className="flex items-center justify-between gap-14 pt-6 pr-16 px-4 py-3 text-xl font-bold text-[#D9E2EC]  bg-[#102A43] fixed top-0 left-0 z-50 w-full "
      >
        
        <div className="text-6xl">
        
          <div className={protestRevolution.className}>
          <span className=" text-[#00B0FF] ml-10  relative hover:text-yellow-400 hover:shadow-xl animate-pulse">My Portfolio</span>
          </div>
           
        </div>

         
        <div className="flex gap-8">
          <button>
            <Link className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" href="/">
              Home
            </Link>
          </button>

          <button>
            <Link className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" href="/about">
              About Me
            </Link>
          </button>
          
          <button>
            <Link className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" href="/skills">
              My Skills
            </Link>
          </button>
          <button>
            <Link className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" href="/projects">
              My Projects
            </Link>
          </button>
          <button>
            <Link className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" href="/contact">
              Contact Me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
