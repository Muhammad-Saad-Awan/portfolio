'use client'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Poppins } from '@next/font/google';
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],  
});
 

export default function Home() {
  return (
    <div className="mt-14 bg-[#102A43] text-white w-full min-h-screen pl-16 pr-16">
    <div className={poppins.className}>
      <div className="p-5 pt-36">
       
        <h1 className="text-5xl font-extrabold text-white mb-4 transition-transform duration-500 transform hover:scale-105 hover:text-yellow-400 w-fit">
          Hi, I'M Muhammad Saad
        </h1>
         
        <motion.div
        className=" "
        initial={{ x:-555}}
        animate={{ x:50, y: 0 }}
        transition={{ duration: 1.5}}
      >
        
        <div className="text-5xl text-yellow-400  hover:scale-105 hover:text-white w-fit">Frontend Developer</div>
        </motion.div>
        <br />
        <div className="text-wrap">
          <p className="pb-3 text-lg">
            I am a Frontend Developer skilled in HTML, CSS, Tailwind CSS, and Next.js. <br />
            I focus on building responsive and user-friendly web interfaces that are clean and functional.
          </p>
          <p className="pb-3 text-lg">
            My work emphasizes combining aesthetics and functionality to create designs that enhance the user experience. <br />
            I strive to maintain high standards of quality and efficiency in every project.
          </p>
          <p className="pb-10 text-lg">
            I am committed to continuous learning, staying updated with the latest web development trends, <br />
            and improving my skills to deliver innovative solutions that meet users' needs.
          </p>
        </div>
  
        <hr className="pb-3" />
  
        <div className="flex space-x-4 justify-center pt-4">
          <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-saad-awan-61b077299/" passHref>
            <button className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Muhammad-Saad-Awan" passHref>
            <button className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/saad_awan46/?hl=en" passHref>
            <button className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01e16402f3e5bc4228" passHref>
            <button className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" aria-label="Upwork">
              <FontAwesomeIcon icon={faUpwork} className="w-8 h-8" />
            </button>
          </Link>
          <Link target="_blank" rel="noopener noreferrer" href="mailto:muhammadsaadawan461@gmail.com" passHref>
            <button className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
  );
}