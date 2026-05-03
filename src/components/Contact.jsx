"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const socials = [
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
      label: "X (Twitter)",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:roescody.nex89@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#222831] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔷 HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Let's build <span className="text-[#00ADB5]">together.</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-lg italic italic">
            "Have a project in mind? Drop a message and let's create something
            sharp."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 🔷 LEFT: SOCIAL CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-300">
              Quick Connect
            </h3>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                className="flex items-center justify-between p-5 bg-[#393E46]/30 border border-gray-800 rounded-2xl hover:border-[#00ADB5]/50 hover:bg-[#393E46]/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-[#00ADB5] group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="font-medium text-gray-300">
                    {social.label}
                  </span>
                </div>
                <span className="text-gray-600 group-hover:text-[#00ADB5] transition-colors">
                  ↗
                </span>
              </a>
            ))}
          </motion.div>

          {/* 🔷 RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#393E46]/20 p-8 rounded-[2.5rem] border border-gray-800 backdrop-blur-md"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#222831] border border-gray-700 rounded-xl p-4 focus:border-[#00ADB5] outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#222831] border border-gray-700 rounded-xl p-4 focus:border-[#00ADB5] outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#222831] border border-gray-700 rounded-xl p-4 focus:border-[#00ADB5] outline-none transition-all"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-[#00ADB5] text-[#222831] font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,173,181,0.4)] transition-all transform hover:-translate-y-1">
                Send Message <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
