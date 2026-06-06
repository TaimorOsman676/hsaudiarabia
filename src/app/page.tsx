"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award, Globe2, BookOpen, Building2, ArrowRight, MapPin,
  Heart, MessageCircle, Send, Bookmark, ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const locations = ["Riyadh", "Jeddah", "Dammam", "Jubail", "Yanbu", "Khafji", "Abha"];

const partners = [
  { name: "IH World Organization", icon: <Globe2 size={20} /> },
  { name: "Saudi Ministry of Education", icon: <BookOpen size={20} /> },
  { name: "TVTC", icon: <Building2 size={20} /> },
  { name: "Cambridge CELTA", icon: <Award size={20} /> },
];

const instaPosts = [
  { img: "/insta_post_1.png", likes: "1.2K", caption: "افتح له أبواب العالم مع معاهد إنترناشونال هاوس السعودية", hashtags: "#IHSaudiArabia #تعلم_الانجليزية" },
  { img: "/insta_post_2.png", likes: "984", caption: "English for Young Learners — Ages 6-12. Learn with Confidence!", hashtags: "#YoungLearners #EnglishKids" },
  { img: "/insta_post_3.png", likes: "1.5K", caption: "Corporate English Training for Saudi businesses. Enquire today.", hashtags: "#CorporateEnglish #BusinessEnglish" },
  { img: "/insta_post_4.png", likes: "2.1K", caption: "IELTS Preparation with certified IH instructors. Achieve your target score.", hashtags: "#IELTS #IELTSPrep #StudyAbroad" },
  { img: "/insta_post_5.png", likes: "876", caption: "CELTA Teacher Training — the world's most recognised EFL qualification.", hashtags: "#CELTA #TeacherTraining #Vision2030" },
  { img: "/insta_post_6.png", likes: "1.8K", caption: "Study Abroad in 50+ global destinations. Your journey starts here.", hashtags: "#StudyAbroad #IHWorld #London" },
];

export default function HomePage() {
  const { t, lang } = useLanguage();

  /* Pre-compute particle positions to avoid SSR hydration mismatches */
  const particles = useMemo(() => {
    const seed = (i: number) => ((i * 9301 + 49297) % 233280) / 233280;
    return Array.from({ length: 20 }, (_, i) => ({
      w: 2 + seed(i) * 4,
      left: 5 + seed(i + 100) * 90,
      top: 5 + seed(i + 200) * 90,
      shadow: 6 + seed(i + 300) * 8,
      yMid: -30 - seed(i + 400) * 40,
      yEnd: -60 - seed(i + 500) * 60,
      xDrift: (seed(i + 600) - 0.5) * 40,
      dur: 4 + seed(i + 700) * 5,
      delay: seed(i + 800) * 6,
      color: i % 3,
    }));
  }, []);

  return (
    <div className="pt-[72px]">

      {/* ═══════════════════════════════════════════════════
          HERO — SPLIT LAYOUT
      ═══════════════════════════════════════════════════ */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden group"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        {/* Background city image */}
        <Image
          src="/riyadh_hero.png"
          alt="Riyadh skyline"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 ease-in-out"
          priority
        />

        {/* Animated aurora gradient overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(100deg, rgba(0,26,63,0.97) 0%, rgba(0,47,108,0.90) 45%, rgba(0,47,108,0.60) 70%, rgba(0,47,108,0.30) 100%)",
          }}
        />

        {/* ── Animated floating orbs ── */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-[2] blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(207,20,48,0.55) 0%, transparent 65%)", top: "-5%", left: "-5%" }}
          animate={{ x: [0, 70, -20, 0], y: [0, -50, 40, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none z-[2] blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(255,195,0,0.35) 0%, transparent 65%)", top: "35%", right: "-5%" }}
          animate={{ x: [0, -60, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.85, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[380px] h-[380px] rounded-full pointer-events-none z-[2] blur-[70px]"
          style={{ background: "radial-gradient(circle, rgba(0,180,255,0.30) 0%, transparent 65%)", bottom: "-5%", left: "35%" }}
          animate={{ x: [0, 40, -50, 0], y: [0, -40, 20, 0], scale: [1, 1.25, 0.8, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulsing center glow ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[2] border border-white/10"
          animate={{ width: ["300px","520px","300px"], height: ["300px","520px","300px"], opacity: [0.15, 0.04, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[2] border border-white/[0.06]"
          animate={{ width: ["500px","700px","500px"], height: ["500px","700px","500px"], opacity: [0.08, 0.02, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* ── Animated shimmer particles ── */}
        {particles.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full pointer-events-none z-[3]"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              background: p.color === 0 ? "var(--color-ih-yellow)" : p.color === 1 ? "rgba(255,255,255,0.9)" : "var(--color-accent)",
              left: `${p.left}%`,
              top: `${p.top}%`,
              boxShadow: `0 0 ${Math.round(p.shadow * 0.4)}px 1px currentColor`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, p.yMid, p.yEnd],
              x: [0, p.xDrift],
              scale: [0.4, 1.1, 0.2],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ── Animated grid lines ── */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden opacity-[0.07]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* ── Sweeping light beam (left → right) ── */}
        <motion.div
          className="absolute top-0 w-[180px] h-full pointer-events-none z-[3] opacity-[0.10]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
          }}
          animate={{ left: ["-180px", "110%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
        />
        {/* ── Sweeping light beam (right → left, offset timing) ── */}
        <motion.div
          className="absolute top-0 w-[120px] h-full pointer-events-none z-[3] opacity-[0.05]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,220,100,0.7) 50%, transparent 100%)",
          }}
          animate={{ right: ["-120px", "110%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 3, delay: 4 }}
        />
        {/* ── Corner accent lines ── */}
        <div className="absolute top-8 left-8 w-16 h-16 pointer-events-none z-[3] opacity-30" style={{ borderTop: "2px solid rgba(255,195,0,0.6)", borderLeft: "2px solid rgba(255,195,0,0.6)" }} />
        <div className="absolute bottom-8 right-8 w-16 h-16 pointer-events-none z-[3] opacity-30" style={{ borderBottom: "2px solid rgba(255,195,0,0.6)", borderRight: "2px solid rgba(255,195,0,0.6)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

            {/* ── LEFT: Content ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col justify-center"
            >
              {/* Top tag */}
              <motion.div variants={fadeUp} custom={0}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white"
                  style={{ background: "var(--color-accent)" }}
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  {t("home.hero.tag")}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white mb-5 leading-[1.1]"
              >
                {lang === "ar" ? (
                  <>
                    الهاوس الدولي<br />
                    <span style={{ color: "var(--color-ih-yellow)" }}>المملكة العربية السعودية</span>
                  </>
                ) : (
                  <>
                    International House<br />
                    <span style={{ color: "var(--color-ih-yellow)" }}>Saudi Arabia</span>
                  </>
                )}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed max-w-lg"
              >
                {t("home.hero.subtitle")}
              </motion.p>

              {/* Key stats row */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-5 mb-10">
                {[
                  { val: "130+", label: lang === "ar" ? "مدرسة عالمية" : "Schools Worldwide" },
                  { val: "45+", label: lang === "ar" ? "دولة" : "Countries" },
                  { val: "1953", label: lang === "ar" ? "سنة التأسيس" : "Founded" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-extrabold" style={{ color: "var(--color-ih-yellow)" }}>{s.val}</span>
                    <span className="text-xs text-blue-300">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
                <Link
                  href="/courses/english-for-companies"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white shadow-[0_10px_25px_rgba(207,20,48,0.25)] hover:scale-105 transition-all"
                  style={{ background: "var(--color-accent)" }}
                >
                  {t("home.hero.cta")} <ArrowRight size={16} />
                </Link>
                <Link
                  href="/courses/placement-test"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 hover:scale-105 transition-all"
                >
                  {t("home.hero.cta2")}
                </Link>
              </motion.div>

              {/* Trusted by bar */}
              <motion.div variants={fadeUp} custom={5} className="mt-10 pt-8 border-t border-white/15">
                <p className="text-xs text-blue-400 uppercase tracking-widest mb-3">
                  {lang === "ar" ? "معتمد من قِبَل" : "Recognised by"}
                </p>
                <div className="flex flex-wrap gap-3">
                  {["TVTC", "Ministry of Education", "IH World", "Cambridge"].map((b) => (
                    <span key={b} className="px-3 py-1 rounded-lg bg-white/10 text-white/80 text-xs font-medium border border-white/15">
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Student image ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center relative min-h-[620px]"
            >
              {/* Glowing circle background */}
              <div
                className="absolute w-[500px] h-[500px] rounded-full bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 60%, transparent 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
              {/* Decorative ring */}
              <div
                className="absolute w-[570px] h-[570px] rounded-full bottom-0 left-1/2 -translate-x-1/2"
                style={{ border: "1px dashed rgba(255,255,255,0.10)" }}
              />

              {/* Student photo */}
              <div 
                className="relative z-10 w-[480px] h-[600px]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              >
                <Image
                  src="/hero_student_v2.png"
                  alt="IH Saudi Arabia student holding International House workbook"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badge 1 — Cambridge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "backOut" }}
                className="absolute top-12 right-2 bg-white asymmetric-card px-4 py-3 flex items-center gap-3 border border-gray-100 shadow-ih-soft"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-ih-green)" }}>
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-gray-800">Cambridge Certified</p>
                  <p className="text-[10px] text-gray-500">CELTA Provider</p>
                </div>
              </motion.div>

              {/* Floating badge 2 — IH World */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "backOut" }}
                className="absolute bottom-36 left-0 bg-white asymmetric-card px-4 py-3 flex items-center gap-3 border border-gray-100 shadow-ih-soft"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-accent)" }}>
                  <Globe2 size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-gray-800">IH World Network</p>
                  <p className="text-[10px] text-gray-500">130+ Schools · 45+ Countries</p>
                </div>
              </motion.div>

              {/* Floating badge 3 — Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, ease: "backOut" }}
                className="absolute top-1/2 -translate-y-1/2 -left-2 bg-white asymmetric-card px-4 py-3 flex items-center gap-3 border border-gray-100 shadow-ih-soft"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--color-ih-blue)" }}>
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-gray-800">7 KSA Branches</p>
                  <p className="text-[10px] text-gray-500">Riyadh · Jeddah · Dammam +4</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full animate-pulse" />
        </div>
      </section>

      <ThemeAccent height="h-2" pills />

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ background: "var(--color-light)", color: "var(--color-primary)" }}
              >
                {lang === "ar" ? "من نحن" : "Who We Are"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: "var(--color-primary)" }}>
                {t("home.about.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-5">{t("home.about.body")}</p>
              <p className="text-gray-600 leading-relaxed text-base">{t("home.ops.body")}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="relative asymmetric-card overflow-hidden aspect-[4/3] shadow-ih-soft">
                <Image src="/about_classroom.png" alt="IH Saudi Arabia English language classroom" fill className="object-cover" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 asymmetric-card border border-gray-100 bg-gray-50/80 hover:border-blue-200 hover:bg-blue-50/90 transition-all">
                    <div style={{ color: "var(--color-primary)" }}>{p.icon}</div>
                    <span className="text-xs font-semibold text-gray-700">{p.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VALUE BLOCKS
      ═══════════════════════════════════════════════════ */}
      <section 
        className="py-24 relative overflow-hidden group" 
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        {/* Background image: Diriyah architectural texture */}
        <Image
          src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80"
          alt="Saudi heritage architecture"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 ease-in-out -z-10"
        />
        {/* Dark gradient overlay to preserve contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3f]/85 via-[#001a3f]/75 to-[#001a3f]/90 pointer-events-none -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              {t("home.values.title")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t("home.values.1.title"),
                body: t("home.values.1.body"),
                icon: <Globe2 size={26} />,
                colorClass: "bg-ih-coral",
                hoverTextClass: "group-hover/card:text-ih-coral",
                bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-coral) 12%, white) 100%)",
                hoverBg: "linear-gradient(135deg, var(--color-ih-coral) 0%, var(--color-accent-dark) 100%)",
                border: "rgba(232, 93, 74, 0.25)",
                borderHover: "rgba(232, 93, 74, 0.55)",
                shadow: "shadow-ih-coral",
                cardImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
              },
              {
                title: t("home.values.2.title"),
                body: t("home.values.2.body"),
                icon: <BookOpen size={26} />,
                colorClass: "bg-ih-green",
                hoverTextClass: "group-hover/card:text-ih-green",
                bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 12%, white) 100%)",
                hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
                border: "rgba(31, 169, 104, 0.25)",
                borderHover: "rgba(31, 169, 104, 0.55)",
                shadow: "shadow-ih-green",
                cardImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80"
              },
              {
                title: t("home.values.3.title"),
                body: t("home.values.3.body"),
                icon: <Building2 size={26} />,
                colorClass: "bg-ih-yellow",
                hoverTextClass: "group-hover/card:text-ih-yellow",
                bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-yellow) 15%, white) 100%)",
                hoverBg: "linear-gradient(135deg, var(--color-ih-yellow) 0%, #ba8a25 100%)",
                border: "rgba(246, 201, 106, 0.35)",
                borderHover: "rgba(246, 201, 106, 0.65)",
                shadow: "shadow-ih-yellow",
                cardImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"
              },
              {
                title: t("home.values.4.title"),
                body: t("home.values.4.body"),
                icon: <Award size={26} />,
                colorClass: "bg-ih-peach",
                hoverTextClass: "group-hover/card:text-ih-peach",
                bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-peach) 15%, white) 100%)",
                hoverBg: "linear-gradient(135deg, var(--color-ih-peach) 0%, #a85210 100%)",
                border: "rgba(240, 149, 80, 0.35)",
                borderHover: "rgba(240, 149, 80, 0.65)",
                shadow: "shadow-ih-peach",
                cardImg: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80"
              },
            ].map((v, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative z-10 overflow-hidden asymmetric-card p-8 border transition-all duration-300 group/card cursor-pointer ${v.shadow}`}
                style={{
                  background: v.bg,
                  borderColor: v.border
                }}
                whileHover={{
                  borderColor: v.borderHover,
                  background: v.hoverBg
                }}
              >
                {/* Visible background photo inside the card */}
                <Image
                  src={v.cardImg}
                  alt=""
                  fill
                  className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                />
                
                {/* Soft darken overlay on hover to blend the photo and text */}
                <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                <div 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover/card:scale-110 group-hover/card:bg-white ${v.colorClass} ${v.hoverTextClass} transition-all duration-300 relative z-10`}
                >
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-lg mb-3 text-primary group-hover/card:text-white transition-colors duration-300 relative z-10 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium group-hover/card:text-white/90 transition-colors duration-300 relative z-10">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* ═══════════════════════════════════════════════════
          LOCATIONS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
            style={{ color: "var(--color-primary)" }}
          >
            {t("home.locations.title")}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm hover:scale-105 transition-all cursor-default"
                style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
              >
                <MapPin size={14} /> {loc}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════════════════ */}
      <section 
        className="py-20 relative overflow-hidden group" 
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
          alt="Modern corporate office"
          fill
          className="object-cover object-center opacity-20 group-hover:opacity-45 transition-opacity duration-400 ease-in-out -z-10"
        />
        <div className="absolute inset-0 bg-red-950/15 pointer-events-none -z-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-white mb-5">
              {t("home.cta.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              {t("home.cta.title")}
            </h2>
            <p className="text-red-100 text-lg mb-10 leading-relaxed">{t("home.cta.body")}</p>
            <Link
              href="/courses/placement-test"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-base shadow-[0_15px_30px_rgba(0,47,108,0.12)] hover:scale-105 transition-all"
              style={{ color: "var(--color-accent)" }}
            >
              {t("home.cta.button")} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" pills />

      {/* ═══════════════════════════════════════════════════
          INSTAGRAM FEED
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-12"
          >
            <div className="flex items-center gap-4">
              {/* Instagram gradient icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(0,47,108,0.12)]"
                style={{
                  background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold" style={{ color: "var(--color-primary)" }}>
                  {lang === "ar" ? "تابعنا على انستقرام" : "Follow Us on Instagram"}
                </h2>
                <p className="text-sm text-gray-500">@ih.saudiarabia</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/ih.saudiarabia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white hover:scale-105 transition-all shadow-[0_6px_15px_rgba(0,47,108,0.1)]"
              style={{
                background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <ExternalLink size={14} />
              {lang === "ar" ? "زيارة الصفحة" : "Visit Profile"}
            </a>
          </motion.div>

          {/* Instagram grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instaPosts.map((post, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative aspect-square asymmetric-card overflow-hidden cursor-pointer border border-gray-100/10"
              >
                <Image
                  src={post.img}
                  alt={`IH Saudi Arabia Instagram post ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 p-3">
                  <div className="flex items-center gap-3 text-white text-sm font-bold">
                    <span className="flex items-center gap-1"><Heart size={14} fill="white" /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> 48</span>
                  </div>
                  <p className="text-white text-[9px] text-center leading-tight line-clamp-3">{post.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Wider post strip — the 3-column featured view */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {instaPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group relative asymmetric-card overflow-hidden shadow-ih-soft cursor-pointer"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={post.img} alt={post.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-xs leading-relaxed line-clamp-2 mb-1">{post.caption}</p>
                  <p className="text-white/60 text-[10px]">{post.hashtags}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-white text-xs"><Heart size={12} fill="white" /> {post.likes}</span>
                    <span className="flex items-center gap-1 text-white text-xs"><Send size={12} /> Share</span>
                    <Bookmark size={12} className="text-white ml-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Follow CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            custom={1}
            className="text-center mt-10"
          >
            <p className="text-gray-500 text-sm mb-4">
              {lang === "ar"
                ? "تابعنا للاطلاع على آخر الأخبار والعروض والفعاليات"
                : "Follow us for the latest news, offers and events from IH Saudi Arabia"}
            </p>
            <a
              href="https://www.instagram.com/ih.saudiarabia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm border-2 hover:scale-105 transition-all"
              style={{ borderColor: "#dc2743", color: "#dc2743" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @ih.saudiarabia · {lang === "ar" ? "تابع الآن" : "Follow Now"}
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
