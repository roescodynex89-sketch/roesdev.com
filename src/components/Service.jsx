
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiCode,
  HiColorSwatch,
  HiLightningBolt,
  HiArrowNarrowRight,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    desc: "I build fast, responsive and modern websites using technologies like Next.js.",
    icon: <HiCode />,
  },
  {
    title: "UI/UX Design",
    desc: "I design clean and user-friendly interfaces that improve user experience.",
    icon: <HiColorSwatch />,
  },
  {
    title: "AI & Automation",
    desc: "I integrate AI tools and automation to make websites smarter and more efficient.",
    icon: <HiLightningBolt />,
  },
];

const Service = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ ২. GSAP 
  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none", 
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // ক্লিনআপ
  }, [mounted]);


  if (!mounted) return <div className="py-24 bg-[#222831]" />;

  return (
    <section
      id="service"
      ref={sectionRef}
      className="py-24 bg-[#222831] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#00ADB5] font-bold tracking-[0.3em] uppercase text-xs mb-3">
            What I can do for you
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-[#00ADB5]">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 bg-[#393E46]/20 border border-white/5 rounded-4xl backdrop-blur-sm 
                         hover:border-[#00ADB5]/40 hover:shadow-[0_20px_50px_rgba(0,173,181,0.15)] 
                         transition-all duration-500"
            >
              <div
                className="w-14 h-14 bg-[#00ADB5]/10 rounded-2xl flex items-center justify-center text-[#00ADB5] text-3xl mb-6 
                              group-hover:bg-[#00ADB5] group-hover:text-[#222831] transition-all duration-500 shadow-inner"
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 text-xs font-bold text-[#00ADB5] uppercase tracking-widest group/btn"
              >
                Let's Talk
                <HiArrowNarrowRight className="text-lg group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;