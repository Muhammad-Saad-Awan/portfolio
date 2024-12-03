"use client";
import React from "react";
import Image from "next/image";
import { Github,ExternalLink } from "lucide-react";
import { Lora } from "@next/font/google";
import { motion } from "framer-motion";
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProjectsPage = () => {
  const projects = [
    {
      title: "CLI-Based ATM Machine",
      description:
        "A command-line ATM simulation developed using Node.js and TypeScript, published as an npm package.",
      technologies: ["Node.js", "TypeScript", "npm"],
      githubLink: "https://github.com/Muhammad-Saad-Awan/ATM-Machine-",
      liveLink: "",
      image: "/icons/atm.png",
    },
    {
      title: "CLI-Based To-Do List",
      description:
        "A command-line task management application developed using Node.js and TypeScript, published as an npm package.",
      technologies: ["Node.js", "TypeScript", "npm"],
      githubLink: "https://github.com/Muhammad-Saad-Awan/To-Do-List",
      liveLink: "",
      image: "/icons/todo.png",
    },
    {
      title: "Responsive Personal Resume",
      description:
        "A fully responsive personal resume website created using HTML5 and CSS3.",
      technologies: ["HTML5", "CSS3"],
      githubLink: "https://github.com/Muhammad-Saad-Awan/Resume",
      liveLink: "https://resume-pi-pearl.vercel.app/",
      image: "/icons/resume2.png",
    },
    {
      title: "Figma Design to Responsive Website",
      description:
        "Converted a Figma design into a fully responsive website using HTML and Tailwind CSS.",
      technologies: ["HTML", "Tailwind CSS", "Figma"],
      githubLink:
        "https://github.com/Muhammad-Saad-Awan/First-Figma-Design-by-using-HTML-Tailwind-CSS-in-Next.js",
      liveLink:
        "https://first-figma-design-by-using-html-tailwind-css-in-next-js.vercel.app/",
      image: "/icons/figma.png",
    },
    {
      title: "Library Management System",
      description:
        "A comprehensive library management application developed using Java and Java Swing in NetBeans.",
      technologies: ["Java", "Java Swing", "NetBeans"],
      githubLink:
        "https://github.com/Muhammad-Saad-Awan/LIBRARY/tree/main/LibraryManagement",
      liveLink: "",
      image: "/icons/library2.png",
    },
  ];

  return (
    <div
      className={`${lora.className} mt-16  bg-[#183049] text-white min-h-screen p-8 font-sans `}
    >
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
      <div className=" pt-10 max-w-5xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 className="text-7xl max-sm:text-5xl font-extrabold text-yellow-400 pb-12 drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
            My Projects
          </h1>
        </motion.div>

        <div className="space-y-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-lg shadow-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-[#00B0FF] mb-3 p-2 ">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4 pl-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#00B0FF] mb-2  p-1 pl-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 p-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-[#0A192F] text-[#00B0FF] px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 p-1">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#00B0FF] hover:text-white"
                    >
                      <Github className="mr-2" /> GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#00B0FF] hover:text-white"
                      >
                        <ExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A192F] border border-[#00B0FF]/20 rounded-lg overflow-hidden  w-72  ">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className=" object-contain  hover:scale-105 transition-transform duration-300 min-w-full min-h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
