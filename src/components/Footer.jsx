"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/roescodynex89-sketch",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/estiak-aktar-roes",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/RoisiRileyX777",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:roescody.nex89@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-[#222831] pt-20 pb-10 border-t border-white/5">
      {/* 🟢 BACKGROUND GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-[#00ADB5]/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* 🔷 BRAND COLUMN */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-black tracking-tighter"
            >
              EA <span className="text-[#00ADB5]">ROES</span>
            </motion.h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer focused on building scalable web experiences
              and AI-powered automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[#393E46] flex items-center justify-center text-gray-400 hover:bg-[#00ADB5] hover:text-[#222831] transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🔷 NAVIGATION COLUMN */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-center">
            <div className="space-y-4">
              <h4 className="text-[#EEEEEE] font-bold uppercase tracking-widest text-xs">
                Explore
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#home" className="hover:text-[#00ADB5] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#00ADB5] transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-[#00ADB5] transition">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#EEEEEE] font-bold uppercase tracking-widest text-xs">
                Work
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#00ADB5] transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#00ADB5] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 🔷 STATUS COLUMN */}
          <div className="md:text-right space-y-4">
            <h4 className="text-[#EEEEEE] font-bold uppercase tracking-widest text-xs">
              Status
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for Remote Job
            </div>
            <p className="text-gray-500 text-[10px] mt-4 uppercase tracking-[0.2em]">
              📍Bangladesh
            </p>
          </div>
        </div>

        {/* 🔷 BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} ML_ROES • Built with Next.js
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gray-500 hover:text-[#00ADB5] transition-all"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Back to top
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#393E46] flex items-center justify-center group-hover:bg-[#00ADB5] group-hover:text-[#222831] transition-all">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
