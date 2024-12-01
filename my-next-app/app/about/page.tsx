"use client"
import Image from "next/image";
import { Lora } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "700"]
});
  
export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-[#0D1B2A] via-[#102A43] to-[#1A375D] text-white min-h-screen flex flex-col items-center justify-center w-full py-16 px-4 overflow-hidden">
       
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full"
            style={{
              width: "4px",
              height: "4px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className={`${lora.className} max-w-4xl w-full relative z-10 space-y-8`}>
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-7xl font-extrabold text-yellow-400 pt-16 pb-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
            About Me
          </h1>
        </motion.div>
        
        {[
          {
            title: "Introduction",
            content: (
              <p className="text-lg leading-relaxed text-gray-300">
                Hi, I am Muhammad Saad, a 20-year-old BSCS student at Dawood University of Engineering and Technology (DUET). I am passionate about Web 3.0, Metaverse, and Generative AI, aiming to innovate the future with my skills and creativity.
              </p>
            )
          },
          {
            title: "Education",
            content: (
              <>
                <p className="text-lg leading-relaxed">
                  <strong>Intermediate in Pre-Engineering (2023)</strong> <br />
                  <strong>Matriculation in Science (2021)</strong>
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  <strong>Currently pursuing :</strong> BSCS at DUET (2023-2027)
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  <strong>Certifications :</strong> Enrolled in Web 3.0, Metaverse, and Generative AI course from GIAIC
                </p>
              </>
            )
          },
          {
            title: "Skills and Expertise",
            content: (
              <>
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                  Proficient in front-end and back-end development, leveraging tools and frameworks like HTML, CSS, TypeScript, Tailwind CSS, MySQL, and more.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Web Dev", skills: ["Next.js", "TypeScript", "TailwindCSS"] },
                    { title: "Backend", skills: ["Java", "MySQL", "C++"] },
                    { title: "Technologies", skills: ["Web", "Metaverse", "AI"] }
                  ].map((category, index) => (
                    <div 
                      key={index} 
                      className="bg-[#1E3A5F] p-4 rounded-lg hover:scale-105 transition-transform"
                    >
                      <h3 className="text-xl font-semibold text-[#00B0FF] mb-2">
                        {category.title}
                      </h3>
                      <ul className="space-y-1 text-gray-300">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-base font-medium flex items-center">
                             
                            <Image
                            src={`/icons/${skill.toLowerCase().replace(/\s+/g,  "-")}.png`}
                            alt={`${skill} icon`}
                            width={6}
                            height={6}
                            className="w-6 h-6 mr-2 m-1 "
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link href="/skills" className="block mt-6">
                  <button className="text-lg font-bold py-2 px-7 bg-white text-[#0048ff] hover:text-blue-400 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-full w-full sm:w-auto mx-auto shadow-md">
                    More Details
                  </button>
                </Link>
              </>
            )
          },
          {
            title: "Personality",
            content: (
              <p className="text-lg leading-relaxed text-gray-300">
                I am a dedicated and goal-oriented individual, striving to achieve success for myself and my loved ones. My determination fuels my journey to turn dreams into reality.
              </p>
            )
          },
          {
            title: "Call-to-Action",
            content: (
              <>
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                  Feel free to connect with me if you are interested in exploring potential collaborations!
                </p>
                <Link href="/contact" className="block">
                  <button className="text-xl font-bold py-2 px-7 bg-white text-[#0048ff] hover:text-blue-400 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-full w-full sm:w-auto mx-auto shadow-md">
                    Contact Me
                  </button>
                </Link>
              </>
            )
          }
        ].map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#102A43] rounded-xl shadow-2xl p-8 space-y-4 border-l-4 border-[#00B0FF]"
          >
            <div className="text-4xl font-bold text-[#00B0FF] mb-4">
              {section.title}
            </div>
            {section.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}