"use client"
import { motion } from   "framer-motion";

import { Poppins } from  "@next/font/google";
 
const poppins = Poppins({
  subsets: [  "latin"],
  weight: [  "400",   "600"]
});
 

export default function Home() {
  return (
    <div className="mt-14  bg-[#183049] text-white w-full min-h-screen  md:px-16 max-md:pt-10   max-md:px-5 ">
      <div className={poppins.className}>
        <div className="p-5 pt-24 max-md:pt-8  ">
          <h1 className="text-5xl font-extrabold text-[#FFD700] pb-3 transition-transform duration-500 transform hover:scale-105 hover:text-[#00B0FF] min-w-fit   max-md:text-3xl max-md:text-nowrap max-md:pl-5 pl-7 max max-lg:text-3xl ">

           

            Hi, I am Muhammad Saad
          </h1>
          <motion.div className=""
            
            initial={{ x:-620 }}
            animate={{ x:10 , y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-5xl text-[#00B0FF]  scale-105 pl-12   hover:text-[#FFD700]  max-md:font-bold max-md:text-3xl max-md:pl-5 max-lg:text-3xl   ">

          

              Frontend Developer
            </div>
          </motion.div>
          <br />
          <div className="text-wrap  max-md:text-base ml-5 max-md:ml-0 max-sm:pr-4  max-md:pl-5 xl:w-[700px] max-lg:text-lg xl:bg-gradient-to-br from-[#224161] via-[#14324e] to-[#0c1e36] lg:px-4 xl:py-4 xl:rounded-xl xl:text-gray-200">
            <p className="pb-3 text-lg ">
              I am a Frontend Developer skilled in HTML, CSS, Tailwind CSS, and Next.js. <br />
              I focus on building responsive and user-friendly web interfaces that are clean and functional.
            </p>
            <p className="pb-3 text-lg">
              My work emphasizes combining aesthetics and functionality to create designs that enhance the user experience. <br />
              I strive to maintain high standards of quality and efficiency in every project.
            </p>
            <p className="pb-10 text-lg">
              I am committed to continuous learning, staying updated with the latest web development trends, <br />
              and improving my skills to deliver innovative solutions that meet users needs.
            </p>
          </div>
  
          <hr className="pb-3" />
  
         
        </div>
      </div>
    </div>
  );
};