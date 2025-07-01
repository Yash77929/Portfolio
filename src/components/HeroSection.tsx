import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, DownloadIcon } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  introduction?: string;
  onExploreClick?: () => void;
  onDownloadResumeClick?: () => void;
}

const HeroSection = ({
  title = "Full Stack Web Developer",
  tagline = "Blending Code, Creativity, and Insights",
  introduction = "Transforming ideas into digital experiences. I specialize in crafting responsive full-stack applications that are fast, functional, and visually engaging—bridging the gap between creativity and code.",
  onExploreClick = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  },
  onDownloadResumeClick = () => {
    const link = document.createElement("a");
    link.href = "/YashCV.pdf";
    link.download = "YashCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-slate-900 text-white">
      {/* Content */}
      <div className="relative z-10 max-w-6xl px-4 md:px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Profile */}
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-xs font-semibold text-white px-2 py-1 rounded-full animate-pulse">
              👨‍💻 Open to Work
            </span>
          </div>

          {/* Text */}
          <div className="max-w-xl space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              {title}
            </h1>
            <p className="text-xl font-semibold bg-gradient-to-r from-yellow-300 to-red-400 text-transparent bg-clip-text">
              {tagline}
            </p>
            <p className="text-base md:text-lg text-white/80">{introduction}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={onExploreClick}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Explore Projects <ArrowDownIcon className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onDownloadResumeClick}
                className="border-white text-white hover:bg-white/10"
              >
                Download Resume <DownloadIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowDownIcon className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
