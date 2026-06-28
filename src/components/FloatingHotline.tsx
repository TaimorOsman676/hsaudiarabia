"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
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
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#002F6C] to-[#cf1430] opacity-25 animate-ping -z-10 scale-125" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#002F6C] to-green-500 opacity-15 animate-pulse -z-10 scale-150" />

      <a
        href="https://wa.me/966920000364"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#002f6c] to-green-600 text-white shadow-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
      >
        {/* Modern Live Chat Bubble Icon */}
        <motion.div
          animate={{
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-8.5 h-8.5 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white shrink-0"
        >
          <MessageSquare size={18} className="fill-white/10" />
          {/* Green online indicator dot */}
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border border-white flex items-center justify-center" />
        </motion.div>

        {/* Expandable text banner */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden whitespace-nowrap flex flex-col items-start pr-2.5 pl-1 rtl:pr-1 rtl:pl-2.5"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-green-300 leading-tight">
            {lang === "ar" ? "تواصل معنا" : "ONLINE ADVISOR"}
          </span>
          <span className="text-xs font-bold text-white leading-snug">
            {lang === "ar" ? "محادثة واتساب مباشرة" : "Chat on WhatsApp"}
          </span>
        </motion.div>
      </a>
    </div>
  );
}
