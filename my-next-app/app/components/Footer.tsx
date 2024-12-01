import { FontAwesomeIcon } from   "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faUpwork } from   "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from  "@fortawesome/free-solid-svg-icons";
import Link from  "next/link";

export default function Footer(){
    return(
        <div className="  bg-[#183049] text-white flex items-center gap-5 justify-center p-2 pt-5 ">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/muhammad-saad-awan-61b077299/"
          passHref
        >
          <button
            className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
          </button>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Muhammad-Saad-Awan"
          passHref
        >
          <button
            className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[ ] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
          </button>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/saad_awan46/?hl=en"
          passHref
        >
          <button
            className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[ ] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
          </button>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.upwork.com/freelancers/~01e16402f3e5bc4228"
          passHref
        >
          <button
            className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[ ] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Upwork"
          >
            <FontAwesomeIcon icon={faUpwork} className="w-8 h-8" />
          </button>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:muhammadsaadawan461@gmail.com"
          passHref
        >
          <button
            className="text-white relative hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[ ] after:block after:h-0.5 after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
          </button>
        </Link>
      </div>
    )
}