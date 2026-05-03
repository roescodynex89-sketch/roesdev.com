"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// React Icons
import { FaReact, FaDownload, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiFigma, SiExpress, SiMongodb } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";
import { HiHand } from "react-icons/hi";
import {
  MdOutlineAutoAwesome,
  MdOutlineDesignServices,
  MdSend,
} from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import profile from "../assets/cta.png";

const roles = [
  { text: "Full Stack Developer", icon: <FaCode size={14} /> },
  { text: "Modern Web Designer", icon: <MdOutlineDesignServices size={14} /> },
  { text: "AI Automation Expert", icon: <AiOutlineRobot size={14} /> },
  { text: "Next.js Solutions", icon: <MdOutlineAutoAwesome size={14} /> },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Resume Download handle function
  const handleResumeClick = () => {
    window.location.reload();
  };

  // Contact scroll function
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#222831] text-white px-6 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* 🔷 LEFT TEXT */}
        <div>
          <div className="flex items-center justify-start mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-white/5 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`icon-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[#00ADB5]"
                >
                  {roles[index].icon}
                </motion.span>
              </AnimatePresence>
              <div className="h-5 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`text-${index}`}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest"
                  >
                    {roles[index].text}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 🔷 TEXT CHANGES HERE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <span className="text-xl md:text-2xl font-medium text-gray-400 flex items-center gap-2 mb-2">
              Hey👋 I'm
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight flex items-center gap-3">
              <span className="text-[#00ADB5]">EA.ROES</span>
              <RiVerifiedBadgeFill className="text-2xl md:text-3xl text-[#00ADB5] drop-shadow-[0_0_10px_#00ADB5]" />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 border-l-4 border-[#00ADB5] pl-4 max-w-md text-sm md:text-base leading-relaxed"
          >
            Full-stack developer focused on building scalable web experiences
            and AI-powered automation 🚀..
          </motion.p>

          {/* 🔷 BUTTON LOGIC HERE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={handleResumeClick}
              className="flex items-center gap-2 px-6 py-3 bg-[#00ADB5] text-black rounded-lg font-bold hover:scale-105 transition shadow-[0_0_15px_rgba(0,173,181,0.4)]"
            >
              <FaDownload size={16} /> Resume
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 border border-[#00ADB5] text-[#00ADB5] rounded-lg hover:bg-[#00ADB5]/10 transition group"
            >
              Say Hello{" "}
              <MdSend className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* 🔷 RIGHT IMAGE + FIXED ORBIT */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-[#00ADB5]/10 blur-[100px] rounded-full"></div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="z-10"
          >
            <Image
              src={profile}
              alt="profile"
              width={300}
              height={300}
              priority
              className="w-57.5 h-57.5 md:w-75 md:h-75 object-cover rounded-full border-2 border-[#00ADB5]/20 p-2 bg-[#222831]/50 shadow-[0_0_40px_rgba(0,173,181,0.15)]"
            />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-72.5 h-72.5 md:w-97.5 md:h-97.5 rounded-full pointer-events-none"
          >
            <OrbitIcon
              Icon={FaReact}
              className="top-0 left-1/2 -translate-x-1/2 text-[#61DAFB]"
            />
            <OrbitIcon
              Icon={SiMongodb}
              className="top-[15%] right-[5%] text-[#47A248]"
            />
            <OrbitIcon
              Icon={AiOutlineRobot}
              className="top-1/2 -right-2.5 -translate-y-1/2 text-[#00ADB5]"
            />
            <OrbitIcon
              Icon={SiNextdotjs}
              className="bottom-0 left-1/2 -translate-x-1/2 text-white"
            />
            <OrbitIcon
              Icon={SiExpress}
              className="bottom-[15%] left-[5%] text-white"
            />
            <OrbitIcon
              Icon={SiFigma}
              className="top-1/2 -left-2.5 -translate-y-1/2 text-[#F24E1E]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OrbitIcon = ({ Icon, className }) => (
  <div
    className={`absolute p-2 bg-[#222831] border border-gray-800 rounded-full shadow-lg flex items-center justify-center ${className}`}
  >
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    >
      <Icon className="text-xl md:text-2xl" />
    </motion.div>
  </div>
);

export default Hero;
