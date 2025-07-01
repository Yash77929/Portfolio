import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Award,
  Briefcase,
  Trophy,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: <Home className="h-5 w-5" />, href: "" },
    { name: "About", icon: <User className="h-5 w-5" />, href: "#about" },
    { name: "Skills", icon: <Code className="h-5 w-5" />, href: "#skills" },
    { name: "Projects", icon: <Code className="h-5 w-5" />, href: "#projects" },
    {
      name: "Certifications",
      icon: <Award className="h-5 w-5" />,
      href: "#certifications",
    },
    {
      name: "Experience",
      icon: <Briefcase className="h-5 w-5" />,
      href: "#experience",
    },
    {
      name: "Achievements",
      icon: <Trophy className="h-5 w-5" />,
      href: "#hackathons",
    },
    { name: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      // href: "https://github.com/Om-Prakash-Nehra",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      // href: "https://www.linkedin.com/in/om-prakash-nehra-695442252/",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      // href: "https://mail.google.com/mail/?view=cm&to=omprakashnehra078@gmail.com",
    },
  ];

  return (
    <div
      className={cn(
        "bg-[#0f172a]/90 backdrop-blur-lg fixed h-full w-[260px] border-r border-white/10 text-white flex flex-col z-50 transition-all duration-300 ease-in-out",
        isOpen ? "left-0" : "-left-[280px]",
        "md:left-0",
        className
      )}
    >
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold leading-tight">Yash Singh</h2>
        <p className="text-sm text-slate-400 mt-1">Full Stack Developer</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-blue-400">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-6 border-t border-white/10">
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              // href={link.href}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
