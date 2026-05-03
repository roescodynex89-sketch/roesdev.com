
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiMail,
  HiMenuAlt3,
  HiX,
  HiCog,
  HiBadgeCheck,
} from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", id: "home", icon: <HiHome /> },
  { name: "About", id: "about", icon: <HiUser /> },
  { name: "Skills", id: "skills", icon: <HiCode /> },
  { name: "Service", id: "service", icon: <HiCog /> },
  { name: "Projects", id: "projects", icon: <HiBriefcase /> },
  { name: "Contact", id: "contact", icon: <HiMail /> },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Scroll Spy (Scroll korle nav link change hobe)
  useEffect(() => {
    if (!mounted) return;

    const handleScrollSpy = () => {
      const offset = 150; // Section detection distance
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in view
          if (rect.top <= offset && rect.bottom >= offset) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [mounted]);

  const handleScroll = (id) => {
    setActive(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-4 left-0 w-full z-100 flex justify-center px-4">
      <div
        className="w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-2xl 
        bg-[#222831]/80 dark:bg-[#222831]/80 light:bg-white/80
        backdrop-blur-xl border border-[#00ADB5]/30 
        shadow-[0_0_20px_rgba(0,173,181,0.2)] hover:shadow-[0_0_30px_rgba(0,173,181,0.3)] 
        transition-all duration-500 relative"
      >
        {/* 🔷 LOGO */}
        <div onClick={() => handleScroll("home")} className="flex items-center cursor-pointer group">
          <span className="text-2xl font-black dark:text-white text-gray-800 group-hover:text-[#00ADB5] transition-colors">E</span>
          <span className="text-2xl font-black text-[#00ADB5] -ml-1 transform group-hover:translate-x-1 transition-transform drop-shadow-[0_0_8px_rgba(0,173,181,0.5)]">A</span>
        </div>

        {/* 🔷 DESKTOP NAV ITEMS */}
        <ul className="hidden md:flex gap-5 lg:gap-8 dark:text-[#EEEEEE] text-gray-700 font-medium text-sm">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`flex items-center gap-2 cursor-pointer relative py-1 transition-all ${
                active === item.id ? "text-[#00ADB5]" : "hover:text-[#00ADB5]"
              }`}
            >
              <span className={`text-lg transition-all ${active === item.id ? "drop-shadow-[0_0_5px_#00ADB5]" : ""}`}>
                {item.icon}
              </span>
              {item.name}
              {active === item.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#00ADB5] shadow-[0_0_10px_#00ADB5]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://www.linkedin.com/in/estiak-aktar-roes"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2 bg-[#00ADB5] text-[#222831] rounded-full text-xs font-bold 
            shadow-[0_0_15px_rgba(0,173,181,0.5)] hover:shadow-[0_0_25px_rgba(0,173,181,0.8)] 
            hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <HiBadgeCheck className="text-lg" />
            HIRE ME
          </a>

          <button className="md:hidden text-2xl text-[#00ADB5] focus:outline-none drop-shadow-[0_0_5px_#00ADB5]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* 🔷 MOBILE DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-17.5 left-0 w-full bg-[#222831]/95 dark:bg-[#222831]/95 light:bg-white/95 backdrop-blur-xl border border-[#00ADB5]/20 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {navItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    active === item.id ? "bg-[#00ADB5]/10 text-[#00ADB5]" : "text-gray-300"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;