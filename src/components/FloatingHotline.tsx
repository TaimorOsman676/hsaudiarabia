"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingHotline() {
  const { lang, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`fixed bottom-6 z-50 ${
        isRTL ? "left-6" : "right-6"
      }`}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* CSS Animation for Iridescent Color Rotation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate-hue {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        .animate-iridescent-glow {
          animation: rotate-hue 6s linear infinite;
        }
      `}} />

      {/* Main Interactive Button Link */}
      <a
        href="https://wa.me/966920000364"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        {/* Iridescent Glow Border Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#ffc700] animate-iridescent-glow rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glow Spread effect behind the button */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#ffc700] animate-iridescent-glow rounded-full opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />

        {/* Inner Glassmorphic Pill */}
        <div className="relative flex items-center p-2.5 rounded-full bg-slate-950/85 backdrop-blur-xl text-white transition-all duration-300">
          
          {/* Custom 3D Glassmorphic Chat Bubble Icon */}
          <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,240,255,0.4)] animate-iridescent-glow">
              <defs>
                {/* Iridescent Border Gradient */}
                <linearGradient id="bubble-border" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="25%" stopColor="#ff007f" />
                  <stop offset="50%" stopColor="#ffc700" />
                  <stop offset="75%" stopColor="#00ff7f" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>

                {/* Glass Fill Gradient */}
                <linearGradient id="bubble-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.18)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0.03)" />
                </linearGradient>

                {/* Reflection Highlight */}
                <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.45)" />
                  <stop offset="40%" stopColor="rgba(255, 255, 255, 0.05)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>

              {/* Chat Bubble Base (Glass) */}
              <path
                d="M10 8 h28 a6 6 0 0 1 6 6 v18 a6 6 0 0 1 -6 6 h-18 l-8 10 c-1.5 2 -4.5 1 -4.5 -1.5 v-8.5 a6 6 0 0 1 -6 -6 v-18 a6 6 0 0 1 6 -6 z"
                fill="url(#bubble-fill)"
                stroke="url(#bubble-border)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Glossy Overlay Reflection */}
              <path
                d="M10 9 h28 a5 5 0 0 1 5 5 v7 c-5 -2 -15 -3 -25 -1 v-6 a5 5 0 0 1 5 -5 z"
                fill="url(#gloss)"
                opacity="0.75"
              />

              {/* WhatsApp Phone Logo inside the bubble */}
              <g transform="translate(14.4, 13.4) scale(0.8)">
                <path
                  d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.46 3.48 1.332 5l-1.416 5.178 5.3-.14A9.957 9.957 0 0 0 12.012 22c5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm3.666 14.18c-.226.634-1.312 1.222-1.8 1.272-.443.045-.99.07-2.924-.69-2.47-.976-4.066-3.5-4.19-3.666-.123-.166-1-1.332-1-2.54 0-1.208.634-1.8 1.343-1.87.21-.02.434-.028.608-.028.174 0 .385-.008.558.412.181.442.618 1.51.67 1.623.053.113.09.245.015.396-.075.15-.113.245-.226.377-.113.132-.24.3-.34.4-.113.113-.23.237-.1.464.13.226.577.95 1.238 1.54.853.762 1.57.996 1.796 1.11.226.113.355.094.487-.06.132-.15.566-.66.717-.887.15-.226.302-.188.506-.113.208.075 1.317.62 1.543.732.226.113.377.17.43.264.053.094.053.543-.173 1.177z"
                  fill="#ffffff"
                />
              </g>
            </svg>

            {/* Online Green Indicator Dot */}
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-950 shadow-[0_0_8px_#22c55e] animate-pulse" />
          </div>

          {/* Expandable Text Banner */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap flex flex-col items-start px-0 group-hover:px-2"
          >
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-cyan-400 leading-tight">
              {lang === "ar" ? "تواصل معنا" : "ONLINE ADVISOR"}
            </span>
            <span className="text-xs font-bold text-white/90 leading-snug">
              {lang === "ar" ? "محادثة واتساب مباشرة" : "Chat on WhatsApp"}
            </span>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
}

