import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiMysql,
  SiAngular,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
} from "react-icons/si";

// Icon map for tech stack
const iconMap: Record<string, JSX.Element> = {
  "React": <FaReact className="text-cyan-400" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  "PHP": <FaPhp className="text-indigo-500" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-300" />,
  "MySQL": <SiMysql className="text-orange-400" />,
  "Angular": <SiAngular className="text-red-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Framer Motion": <SiFramer className="text-pink-400" />,
};

interface ProjectCardProps {
  title?: string;
  description?: string;
  techStack?: string[];
  features?: string[];
  outcome?: string;
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its purpose.",
  techStack = ["React", "Node.js", "MongoDB"],
  features = ["Feature 1", "Feature 2", "Feature 3"],
  outcome = "The outcome and impact of this project.",
  githubLink = "#",
  demoLink = "#",
  imageUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full relative rounded-xl overflow-hidden border border-white/10"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg4.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-950/90" />
      </div>

      <Card className="relative z-10 h-full flex flex-col text-white backdrop-blur-md bg-transparent border-none shadow-none">
        <div className="relative overflow-hidden h-36">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs flex items-center gap-1 px-2 py-1 bg-slate-700/40 text-white border border-white/10"
              >
                {iconMap[tech] || null}
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-slate-300 mb-4">
            {description}
          </CardDescription>

          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-semibold text-white">Key Features:</h4>
              <ul className="text-xs text-slate-400 list-disc pl-4 mt-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Outcome:</h4>
              <p className="text-xs text-slate-400 mt-1">{outcome}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-2 border-t border-white/10">
          <Button
            size="sm"
            className="bg-blue-500 hover:bg-blue-600 text-white transition"
            asChild
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
