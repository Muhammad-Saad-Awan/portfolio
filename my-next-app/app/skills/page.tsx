import React from 'react';
import Image from 'next/image';
import { LucideIcon, Code, Shield, Star } from 'lucide-react';
import { Poppins } from  "@next/font/google";
const poppins = Poppins({
  subsets: [  "latin"],
  weight: [  "400",   "600"]
});

 
 

interface SkillsSectionProps {
  title: string;
  skills: string[];
  Icon: LucideIcon;
  colorClass: string;
}



const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills, Icon, colorClass }) => {
  return (
    <div className={`${poppins.className} "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-6 transform transition-all duration-300 hover:scale-105" `}>
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 ${colorClass} mr-3`} />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className={skills.length > 5 ? "grid grid-cols-2 gap-3" : "space-y-3"}>
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="bg-white/10 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors border border-white/10"
          >
            {title === "Technical Skills" && (
              <Image
              src={`/icons/${skill.toLowerCase().replace(/\s+/g,  "-")}.png`}
              alt={`${skill} icon`}
              width={6}
              height={6}
              className="w-6 h-6 mr-2 m-1 "
              />
            )}
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  const skillsSections: SkillsSectionProps[] = [
    {
      title: "Technical Skills",
      skills: ['HTML', 'TailwindCSS', 'Typescript', 'Next.js', 'Node.js', 'MySQL', 'C++', 'Java', 'Github', 'GraphicDesigning'],
      Icon: Code,
      colorClass: "text-blue-400"
    },
    {
      title: "Core Concepts",
      skills: ['Programming Fundamental', 'Object Oriented Programming', 'Data Structure Algorithms', 'Data Base Management System','Responsive Design'],
      Icon: Shield,
      colorClass: "text-green-400"
    },
    {
      title: "Soft Skills",
      skills: ['Problem Solving', 'Creativity and Communication', 'Time Management','Team Collaboration','Stress Management'],
      Icon: Star,
      colorClass: "text-purple-400"
    }
  ];

  return (
    <div className=" mt-16 min-h-screen bg-[#0D1B2A] bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:16px_16px]">
      <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white relative inline-block">
            My Expertise
            <span className="absolute bottom-[-10px] left-0 right-0 h-1 bg-blue-500 rounded"></span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsSections.map((section) => (
            <SkillsSection 
              key={section.title}
              title={section.title}
              skills={section.skills}
              Icon={section.Icon}
              colorClass={section.colorClass}
              
            />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;