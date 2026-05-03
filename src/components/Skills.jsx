
"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools, FaGraduationCap } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-[#00ADB5]" />,
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-[#00ADB5]" />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-[#00ADB5]" />,
    skills: ["MongoDB", "PostgreSQL", "NoSQL"],
  },
  {
    title: "UI/UX & AI Tools",
    icon: <FaTools className="text-[#00ADB5]" />,
    skills: ["UI/UX Design", "AI Integration", "Automation"],
  },
];

const educationData = [
  {
    title: "Honours (Bachelor’s Degree)",
    status: "Starting soon (Undergraduate studies)",
    icon: <FaGraduationCap />,
  },
  {
    title: "HSC (Higher Secondary Certificate)",
    status: "Completed",
    icon: <FaGraduationCap />,
  },
  {
    title: "SSC (Secondary School Certificate)",
    status: "Completed",
    icon: <FaGraduationCap />,
  },
];

const ProfessionalInfo = () => {
  return (
    <section className="py-20 bg-[#222831] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 🔷 SKILLS SECTION */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold"
            >
              My Technical <span className="text-[#00ADB5]">Skills</span>
            </motion.h2>
            <div className="w-20 h-1 bg-[#00ADB5] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-[#393E46]/40 backdrop-blur-md border border-[#00ADB5]/10 rounded-2xl hover:border-[#00ADB5]/40 transition-all group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#EEEEEE]">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#00ADB5] rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎓 EDUCATION SECTION (Timeline Style) */}
        <div>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold"
            >
              My <span className="text-[#00ADB5]">Education</span>
            </motion.h2>
            <div className="w-20 h-1 bg-[#00ADB5] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative max-w-3xl mx-auto border-l-2 border-[#393E46] ml-4 md:ml-auto">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="mb-10 ml-8 relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-10.25 top-0 w-5 h-5 bg-[#222831] border-2 border-[#00ADB5] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00ADB5] rounded-full"></div>
                </span>
                
                <div className="p-5 bg-[#393E46]/30 rounded-xl border border-gray-700 hover:border-[#00ADB5]/30 transition-colors">
                  <h3 className="text-xl font-bold text-[#EEEEEE]">{edu.title}</h3>
                  <p className="text-[#00ADB5] text-sm mt-1">{edu.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalInfo;