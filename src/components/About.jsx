"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/roescodynex89-sketch",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/estiak-aktar-roes",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/RoisiRileyX777",
      label: "X",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:roescody.nex89@gmail.com",
      label: "Email",
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#222831] text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🔷 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-[#00ADB5]">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed border-l-4 border-[#00ADB5] pl-4 mb-8">
            Hey there! I’m{" "}
            <span className="text-[#00ADB5] font-bold">EA.ROES</span>, a
            relentless digital craftsman and a{" "}
            <span className="text-[#00ADB5] font-bold">
              Full-Stack Developer
            </span>
            . I don’t just build websites; I construct high-performance web
            applications with a focus on cutting-edge efficiency and attention
            to detail.
            <br />
            <br />
            My journey kicked off with a fundamental curiosity: 'How does the
            web tick?'. Over time, I’ve refined this into a specialization in
            modern technology stacks like{" "}
            <span className="text-[#00ADB5] font-semibold">Next.js</span> to
            architect robust frontends and intuitive user experiences.
            <br />
            <br />I thrive in the intersection of functionality and aesthetics.
            Currently, I’m integrating advanced{" "}
            <span className="text-[#00ADB5] font-semibold">AI tools</span> and
            automation pipelines to not only make applications smarter, but
            truly intelligent and adaptive.
          </p>

          {/* 🔗 SOCIAL ACCOUNTS */}
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`text-2xl text-gray-400 transition-colors duration-300 ${item.color}`}
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 🔷 RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#393E46]/40 backdrop-blur-lg border border-[#393E46] rounded-2xl p-8 shadow-[0_0_25px_rgba(0,173,181,0.1)] relative overflow-hidden"
        >
          {/* Background Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ADB5] opacity-10 blur-3xl rounded-full"></div>

          <h3 className="text-xl font-semibold mb-6 text-[#00ADB5]">
            What I Focus On
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#00ADB5]" />
              <span>Clean UI/UX focused🔥</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#00ADB5]" />
              <span>Responsive & fast websites🔥</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#00ADB5]" />
              <span>Exploring AI & automation🔥</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-center">
            <div className="bg-[#222831]/60 p-4 rounded-xl border border-white/5 hover:border-[#00ADB5]/30 transition-colors">
              <h4 className="text-2xl font-bold text-[#00ADB5]">49+</h4>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div className="bg-[#222831]/60 p-4 rounded-xl border border-white/5 hover:border-[#00ADB5]/30 transition-colors">
              <h4 className="text-2xl font-bold text-[#00ADB5]">1+</h4>
              <p className="text-sm text-gray-400">Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
