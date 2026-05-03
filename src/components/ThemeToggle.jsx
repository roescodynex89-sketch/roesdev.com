"use client";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9 rounded-xl bg-[#393E46]/50 border border-gray-700 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl bg-[#393E46]/50 border border-gray-700 text-[#00ADB5] transition-all hover:scale-110 shadow-lg flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? <HiSun size={20} /> : <HiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
