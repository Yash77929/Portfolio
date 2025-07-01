import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaTerminal,
  FaWindows,
  FaCode,
  FaWrench,
  FaTools,
} from "react-icons/fa";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const defaultCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <FaCode className="h-5 w-5" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500 text-2xl" /> },
    ],
  },
  {
    name: "Backend",
    icon: <FaTools className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500 text-2xl" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-600 text-2xl" /> },
    ],
  },
  {
    name: "Databases",
    icon: <FaDatabase className="h-5 w-5" />,
    skills: [
      { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-2xl" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500 text-2xl" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800 text-2xl" /> },
    ],
  },
  {
    name: "Dev Tools",
    icon: <FaWrench className="h-5 w-5" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300 text-2xl" /> },
    ],
  },
  {
    name: "Utilities",
    icon: <FaTerminal className="h-5 w-5" />,
    skills: [
      { name: "VS Code", icon: <FaTerminal className="text-blue-500 text-2xl" /> },
      { name: "XAMPP", icon: <FaWindows className="text-orange-400 text-2xl" /> },
    ],
  },
];

const SkillsGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(defaultCategories[0].name);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#1e1e2f] to-[#151522]">
      <div className="w-full max-w-6xl mx-auto p-8 rounded-3xl backdrop-blur-md bg-white/5 shadow-2xl border border-white/20">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white tracking-tight">
          Skills & Expertise
        </h2>

        <Tabs
          defaultValue={defaultCategories[0].name}
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-10">
            {defaultCategories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className={`flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 border
                  ${
                    activeTab === category.name
                      ? "bg-white/20 text-white border-white"
                      : "hover:bg-white/10 text-white border-transparent"
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {defaultCategories.map(
              (category) =>
                activeTab === category.name && (
                  <TabsContent
                    key={category.name}
                    value={category.name}
                    forceMount
                  >
                    <motion.div
                      className="flex flex-wrap justify-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                            transition: { duration: 0.3 },
                          }}
                          className="w-[130px] h-[130px] rounded-2xl bg-white text-black backdrop-blur-lg border border-white/20 shadow-md flex flex-col items-center justify-center p-4 text-center hover:ring-2 hover:ring-blue-400 transition-all duration-300"
                        >
                          <div className="text-4xl mb-2">{skill.icon}</div>
                          <h3 className="text-sm font-semibold">{skill.name}</h3>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                )
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsGrid;
