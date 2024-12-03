"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <div className="mt-14  bg-[#183049] text-white w-full  md:min-h-screen  md:px-16 max-md:pt-10   max-md:px-5 ">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: "4px",
              height: "4px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className={poppins.className}>
        <div className="p-5 max-md:p-1 pt-24 max-md:pt-8  ">
          <h1 className="text-5xl font-extrabold text-[#FFD700] pb-3 flex    transition-transform duration-500 transform hover:scale-105 hover:text-[#00B0FF] min-w-fit   max-md:text-2xl max-md:text-nowrap pl-7  max-sm:pl-5 max max-lg:text-2xl  ">
            Hi, I am Muhammad Saad
          </h1>
          <motion.div
            className=""
            initial={{ x: -620 }}
            animate={{ x: 7, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-5xl text-[#00B0FF]  scale-105 pl-12 xl:pl-[55px] hover:text-[#FFD700]  max-md:font-bold max-md:text-2xl max-md:pl-8 max-lg:text-3xl">
              Frontend Developer
            </div>
          </motion.div>
          <br />
          <div className="text-wrap  max-md:text-base ml-5 max-md:ml-0 max-sm:pr-4  max-md:pl-5 xl:w-[700px]  max-lg:text-lg xl:bg-gradient-to-br from-[#224161] via-[#14324e] to-[#0c1e36] lg:px-4 xl:py-4 xl:rounded-xl xl:text-gray-200  font-medium flex flex-col items-center max-md:bg-[#1E3A5F] max-md:p-4 max-md:rounded-lg max-md:hover:scale-105 max-md:transition-transform  ">
            <p className="pb-3 pt-3 text-lg ">
              I am a Frontend Developer skilled in HTML, CSS, Tailwind CSS, and
              Next.js. <br />I focus on building responsive and user-friendly
              web interfaces that are clean and functional.
            </p>
            <p className="pb-3 text-lg">
              My work emphasizes combining aesthetics and functionality to
              create designs that enhance the user experience. <br />I strive to
              maintain high standards of quality and efficiency in every
              project.
            </p>
            <p className="pb-5 text-lg">
              I am committed to continuous learning, staying updated with the
              latest web development trends, <br />
              and improving my skills to deliver innovative solutions that meet
              users needs.
            </p>
          </div>

          <hr className="pb-3" />
          <div className="absolute right-0 top-0 m-4 max-xl:hidden mt-[285px] mx-[200px]">
            <Image
              src="/icons/my5.svg"
              alt="Portfolio Decoration"
              width={150}
              height={150}
              className=" rounded-xl shadow-lg w-[392px] opacity-85"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
