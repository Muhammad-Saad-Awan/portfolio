import { Lora } from '@next/font/google';
import Link from 'next/link';
const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'], // Add the desired font weights
  });
export default function about() {
  return (
    <body className={`${lora.className} mt-24 mx-6 md:mx-10 bg-[#0D1B2A] text-white min-h-screen flex flex-col items-center`}>
    <div className="w-full max-w-6xl px-6 sm:px-12">
      <h1 className="text-7xl font-extrabold text-center text-yellow-400 py-12">About Me</h1>
      
     
      <div className="py-8 px-6 bg-[#102A43] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#00B0FF] mb-4">Introduction</h2>
        <p className="text-lg leading-relaxed">
          Hi, I’m Muhammad Saad, a 20-year-old BSCS student at Dawood
          University of Engineering and Technology (DUET). <br /> I am
          passionate about Web 3.0, Metaverse, and Generative AI, aiming to
          innovate the future with my skills and creativity.
        </p>
      </div>
  
      
      <div className="py-8 px-6 mt-8 bg-[#102A43] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#00B0FF] mb-4">Education</h2>
        <p className="text-lg leading-relaxed">
          <strong>Intermediate in Pre-Engineering (2023)</strong> <br />
          <strong>Matriculation in Science (2021)</strong>
        </p>
        <p className="text-lg leading-relaxed mt-4">
          <strong>Currently pursuing :</strong> BSCS at DUET (2023-2027)
        </p>
        <p className="text-lg leading-relaxed mt-4">
          <strong>Certifications :</strong> Enrolled in Web 3.0, Metaverse, and Generative AI
          course from GIAIC
        </p>
      </div>
  
       
      <div className="py-8 px-6 mt-8 bg-[#102A43] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#00B0FF] mb-4">Skills and Expertise</h2>
        <p className="text-lg leading-relaxed mb-4">
          Proficient in front-end and back-end development, leveraging tools and
          frameworks like HTML, CSS, TypeScript, Tailwind CSS, MySQL, and more.
          <br /> I have experience in building responsive and user-friendly web
          applications and CLI-based tools.
        </p>
        <p className="text-2xl text-yellow-300 mb-4 "><strong>In addition, I have a solid foundation in:</strong></p>
        <ol className="text-lg list-disc pl-8 space-y-2">
          <li>Java and Java Swing for GUI-based applications</li>
          <li>C++ for problem-solving</li>
          <li>Object-Oriented Programming in Java</li>
          <li>Database Management Systems (DBMS) and Data Structures & Algorithms (DSA)</li>
          <li>Graphic Designing for creating visually appealing designs and layouts</li>
        </ol>
        <p className="text-lg leading-relaxed mt-4">
          My diverse skill set enables me to tackle challenges across various
          domains effectively.
        </p>

        <button className=" mb-1 mt-5 text-lg font-bold p-3 bg-white text-[#0048ff] hover:text-blue-400 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-full w-full sm:w-auto mx-auto shadow-md">
          <Link href="/skills">More Details</Link>
        </button>
        
      </div>
  
       
      <div className="py-8 px-6 mt-8 bg-[#102A43] rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#00B0FF] mb-4">Personality</h2>
        <p className="text-lg leading-relaxed">
          I am a dedicated and goal-oriented individual, striving to achieve success
          for myself and my loved ones. <br /> My determination fuels my journey to turn
          dreams into reality.
        </p>
      </div>
  
      {/* Call-to-Action Section */}
      <div className="py-8 px-6 mt-8 bg-[#102A43] rounded-lg shadow-lg mb-24">
        <h2 className="text-4xl font-bold text-[#00B0FF] mb-4">Call-to-Action</h2>
        <p className="text-lg leading-relaxed mb-4">Feel free to connect with me if you’re interested in learning more about my journey or exploring potential collaborations!</p>
        <button className="text-xl font-bold p-4 bg-white text-[#0048ff] hover:text-blue-400 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out rounded-full w-full sm:w-auto mx-auto shadow-md">
          <Link href="/contact">Contact Me</Link>
        </button>
      </div>
  
    </div>
  </body>
  
  
  
   
  
  );
}
