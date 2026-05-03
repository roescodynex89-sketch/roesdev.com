
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCartPlus, FaUserFriends, FaSun, FaRocket } from "react-icons/fa";


import cta2 from "../assets/cta2.png"; // DigiTools
import cta3 from "../assets/cta3.png"; // KeenKeeper
import cta4 from "../assets/cta4.png"; // SunCart

const projects = [
  {
    title: "DigiTools — Digital Tools Store",
    category: "E-commerce",
    tagline: "MODERN DIGITAL PRODUCT STORE",
    description: "A modern digital products e-commerce store. Browse digital tools, add them to your cart, and manage your selections with a smooth, responsive UI.",
    tech: ["React 19", "Vite", "Tailwind CSS", "React Toastify"],
    live: "https://radiant-torte-df16bf.netlify.app",
    github: "https://github.com/roescodynex89-sketch/hero-ass-06",
    image: cta4,
    icon: <FaCartPlus className="text-xl" />,
  },
  {
    title: "KeenKeeper — CRM App",
    category: "Friendship Tracking App",
    tagline: "RELATIONSHIP MANAGEMENT SYSTEM",
    description: "A personal relationship management app to stay connected. Visualize interaction history with Pie Charts and manage contact status efficiently.",
    tech: ["Next.js 14", "Recharts", "LocalStorage", "Tailwind CSS"],
    live: "https://hero-ass-07.vercel.app/",
    github: "https://github.com/roescodynex89-sketch/hero-ass-07",
    image: cta3,
    icon: <FaUserFriends className="text-xl" />,
  },
  {
    title: "SunCart – Summer Essentials",
    category: "Full Stack Store",
    tagline: "SEASONAL E-COMMERCE PLATFORM",
    description: "Secure eCommerce platform featuring BetterAuth integration, Social login, and MongoDB-driven profile management for summer products.",
    tech: ["Next.js", "MongoDB", "BetterAuth", "Protected Routes"],
    live: "https://hero-ass-08-tau.vercel.app/",
    github: "https://github.com/roescodynex89-sketch/hero-ass-08",
    image: cta2,
    icon: <FaSun className="text-xl" />,
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#222831] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔷 UNIQUE SECTION HEADER */}
        <div className="text-center mb-24 relative">
          {/* Background Gradient Glow for Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#00ADB5] opacity-10 blur-[100px] pointer-events-none"></div>

          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-3 p-2 px-6 rounded-full bg-[#393E46]/50 border border-white/5 mb-6 backdrop-blur-md"
          >
            {/* Animated Rocket Icon */}
            <motion.div
              animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FaRocket className="text-[#00ADB5]" />
            </motion.div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Selected Builds</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-black leading-tight tracking-tight mb-6"
          >
            Real structure, <br className="hidden md:block" /> 
            <span className="text-[#00ADB5] drop-shadow-[0_0_20px_rgba(0,173,181,0.3)]">clean interfaces.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed italic border-t border-white/5 pt-6"
          >
            "A showcase of my best projects, including live previews, source code, and development challenges."
          </motion.p>
        </div>

        {/* 🔷 PROJECTS LIST */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#00ADB5]/10 rounded-4xl blur-2xl group-hover:bg-[#00ADB5]/20 transition duration-500"></div>
                <div className="relative bg-[#393E46]/30 border border-gray-800 rounded-4xl p-4 overflow-hidden group-hover:border-[#00ADB5]/30 transition duration-500">
                   <div className="relative h-62.5 md:h-87.5 w-full rounded-2xl overflow-hidden">
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute bottom-4 left-4">
                        <div className="bg-[#222831]/80 backdrop-blur-md border border-gray-700 p-2 px-4 rounded-full flex items-center gap-2 text-xs font-medium">
                           <span className="animate-pulse text-[#00ADB5]">✦</span> Hover preview
                        </div>
                    </div>
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gray-700 text-[#00ADB5] text-[10px] font-bold uppercase tracking-widest">
                    {project.icon} {project.tagline}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] text-[10px] font-bold uppercase tracking-widest">
                     Frontend
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-[#EEEEEE]">
                  {project.title.split('—')[0]}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#393E46] text-gray-300 text-xs rounded-lg border border-gray-700 hover:border-[#00ADB5]/50 transition cursor-default">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={project.live} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-[#00ADB5] text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,173,181,0.4)] transition transform hover:-translate-y-1">
                    View Project <FaExternalLinkAlt size={14} />
                  </a>
                  <a href={project.github} target="_blank" className="flex items-center gap-3 px-8 py-4 bg-transparent border border-gray-700 text-gray-300 rounded-xl font-bold hover:bg-white/5 transition">
                    <FaGithub size={20} /> Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;