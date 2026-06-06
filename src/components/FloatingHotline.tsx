"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingHotline() {
  const { lang, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed bottom-6 z-50 transition-all duration-300 ${
        isRTL ? "left-6" : "right-6"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Pulse Rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#002F6C] to-[#e85d4a] opacity-35 animate-ping -z-10 scale-125" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b3275] to-[#1fa968] opacity-20 animate-pulse -z-10 scale-150" />

      <a
        href="tel:+966920000364"
        className="flex items-center gap-2 p-3 sm:p-4 rounded-full bg-gradient-to-r from-[#002F6C] via-[#8b3275] to-[#e85d4a] text-white shadow-[0_12px_36px_rgba(0,47,108,0.35)] border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
        style={{
          boxShadow: "0 12px 36px -5px color-mix(in srgb, var(--color-primary) 40%, transparent)",
        }}
      >
        {/* Animated Graduation Cap / Degree Logo */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/25 text-white"
        >
          <GraduationCap size={20} className="sm:size-22" />
          {/* Subtle phone badge on the logo to indicate call/contact */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#1fa968] border border-white flex items-center justify-center text-[8px] font-bold text-white">
            <Phone size={8} className="fill-white" />
          </span>
        </motion.div>

        {/* Expandable text banner */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap flex flex-col items-start pr-2 pl-1 rtl:pr-1 rtl:pl-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
            {lang === "ar" ? "الاستشارات الأكاديمية" : "Academic Advisory"}
          </span>
          <span className="text-sm font-extrabold text-white">
            +966 920 000 364
          </span>
        </motion.div>
      </a>
    </div>
  );
}
