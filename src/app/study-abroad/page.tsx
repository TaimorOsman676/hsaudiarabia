"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane, Home, Map, Globe, ArrowRight, CheckCircle,
  Star, Clock, Award, Users, Phone, ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const destinations = [
  { city: "London", country: "UK", flag: "🇬🇧", desc: "Home of IH London — the world's most famous language school", cardImg: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=400&q=80" },
  { city: "Aberdeen", country: "UK", flag: "🇬🇧", desc: "IH Aberdeen — gateway to stunning Scottish highlands", cardImg: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=400&q=80" },
  { city: "New York", country: "USA", flag: "🇺🇸", desc: "IH New York — the city that never sleeps", cardImg: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80" },
  { city: "Toronto", country: "Canada", flag: "🇨🇦", desc: "IH Toronto — one of the world's most multicultural cities", cardImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=400&q=80" },
  { city: "Madrid", country: "Spain", flag: "🇪🇸", desc: "IH Madrid — combine Spanish culture with English study", cardImg: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=400&q=80" },
  { city: "Rome", country: "Italy", flag: "🇮🇹", desc: "IH Rome — language immersion in the Eternal City", cardImg: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80" },
  { city: "Paris", country: "France", flag: "🇫🇷", desc: "IH Paris — the language of culture and sophistication", cardImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" },
  { city: "Berlin", country: "Germany", flag: "🇩🇪", desc: "IH Berlin — Europe's most dynamic capital", cardImg: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80" },
  { city: "Dubai", country: "UAE", flag: "🇦🇪", desc: "IH Dubai — world-class English learning in the Gulf", cardImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
  { city: "Cairo", country: "Egypt", flag: "🇪🇬", desc: "IH Cairo — Arabic immersion in the Arab world's cultural heart", cardImg: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺", desc: "IH Sydney — sunshine, beaches and world-class English", cardImg: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400&q=80" },
  { city: "Cape Town", country: "South Africa", flag: "🇿🇦", desc: "IH Cape Town — English immersion at the tip of Africa", cardImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80" },
];

const languages = [
  { name: "English", flag: "🇬🇧", destinations: 40 },
  { name: "Spanish", flag: "🇪🇸", destinations: 6 },
  { name: "French", flag: "🇫🇷", destinations: 4 },
  { name: "Italian", flag: "🇮🇹", destinations: 3 },
  { name: "German", flag: "🇩🇪", destinations: 3 },
  { name: "Arabic", flag: "🇸🇦", destinations: 2 },
];

const services = [
  {
    icon: <Plane size={24} />,
    title: "Visa & Pre-Departure Support",
    body: "Our dedicated student advisors guide you through every step — from choosing your destination and programme to completing visa applications and preparing for departure.",
    colorClass: "bg-ih-blue",
    hoverTextClass: "group-hover/card:text-ih-blue",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-blue) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)",
    border: "rgba(59, 63, 168, 0.25)",
    borderHover: "rgba(59, 63, 168, 0.55)",
    shadow: "shadow-ih-blue",
    cardImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-ih-blue)",
  },
  {
    icon: <Home size={24} />,
    title: "Accommodation Guaranteed",
    body: "Choose from homestay with a local host family, student residences, or approved shared apartments. All options are inspected and quality-assured by IH.",
    colorClass: "bg-ih-green",
    hoverTextClass: "group-hover/card:text-ih-green",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-green) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)",
    border: "rgba(31, 169, 104, 0.25)",
    borderHover: "rgba(31, 169, 104, 0.55)",
    shadow: "shadow-ih-green",
    cardImg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-ih-green)",
  },
  {
    icon: <Map size={24} />,
    title: "Airport Transfers & Orientation",
    body: "From the moment you land, IH's partner schools take care of you — airport pick-up, local orientation, and a dedicated point of contact throughout your stay.",
    colorClass: "bg-ih-purple",
    hoverTextClass: "group-hover/card:text-ih-purple",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-purple) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-purple) 0%, #611f51 100%)",
    border: "rgba(139, 50, 117, 0.25)",
    borderHover: "rgba(139, 50, 117, 0.55)",
    shadow: "shadow-ih-purple",
    cardImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-ih-purple)",
  },
  {
    icon: <Award size={24} />,
    title: "Internationally Recognised Certificates",
    body: "Complete your programme and receive a certificate recognised by employers and universities worldwide — with the prestige of the IH World name behind it.",
    colorClass: "bg-accent",
    hoverTextClass: "group-hover/card:text-accent",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-accent) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)",
    border: "rgba(207, 20, 48, 0.25)",
    borderHover: "rgba(207, 20, 48, 0.55)",
    shadow: "shadow-ih-coral",
    cardImg: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-accent)",
  },
  {
    icon: <Users size={24} />,
    title: "Multicultural Learning Environment",
    body: "Study alongside learners from 50+ nationalities, developing not just language skills but genuine global cultural understanding and lifelong international friendships.",
    colorClass: "bg-ih-coral",
    hoverTextClass: "group-hover/card:text-ih-coral",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-coral) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-coral) 0%, var(--color-accent-dark) 100%)",
    border: "rgba(232, 93, 74, 0.25)",
    borderHover: "rgba(232, 93, 74, 0.55)",
    shadow: "shadow-ih-coral",
    cardImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-ih-coral)",
  },
  {
    icon: <Clock size={24} />,
    title: "Flexible Programme Lengths",
    body: "From intensive 2-week summer programmes to full academic years — every programme can be tailored to your learning goals, budget and timeline.",
    colorClass: "bg-ih-peach",
    hoverTextClass: "group-hover/card:text-ih-peach",
    bg: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-ih-peach) 8%, white) 100%)",
    hoverBg: "linear-gradient(135deg, var(--color-ih-peach) 0%, #a85210 100%)",
    border: "rgba(240, 149, 80, 0.25)",
    borderHover: "rgba(240, 149, 80, 0.55)",
    shadow: "shadow-ih-peach",
    cardImg: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80",
    color: "var(--color-ih-peach)",
  },
];

const steps = [
  { num: "01", title: "Free Consultation", body: "Meet with our Study Abroad advisor to discuss your goals, budget, preferred destination and study timeline." },
  { num: "02", title: "Programme Selection", body: "We match you with the ideal IH partner school, course type and accommodation — with options tailored to your English level." },
  { num: "03", title: "Application & Visa", body: "We prepare your application, letter of acceptance and guide you through the student visa process for your chosen country." },
  { num: "04", title: "Depart & Study", body: "Fly to your destination with full pre-departure support. Study, explore and immerse yourself in a new culture and language." },
  { num: "05", title: "Return with Certification", body: "Return to Saudi Arabia with an internationally recognised certificate, global experience and a network of international contacts." },
];

export default function StudyAbroadPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="pt-[72px]">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section 
        className="relative min-h-[65vh] flex items-center overflow-hidden group"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        <Image
          src="/arab_education_bg.png"
          alt="Arab education at IH Saudi Arabia"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"
          priority
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(0,26,63,0.95) 0%, rgba(0,47,108,0.75) 55%, rgba(0,47,108,0.2) 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white"
              style={{ background: "var(--color-accent)" }}
            >
              {t("abroad.hero.tag")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              {t("abroad.hero.title")}
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">{t("abroad.hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white shadow-xl hover:scale-105 transition-all"
                style={{ background: "var(--color-accent)" }}
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2.5" />

      {/* ─── HIGHLIGHT BAR ────────────────────────────── */}
      <div style={{ background: "var(--color-primary)" }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "50+", label: "Global Destinations" },
              { val: "45+", label: "Countries" },
              { val: "6", label: "Languages Available" },
              { val: "1953", label: "IH Established" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-extrabold text-white">{s.val}</div>
                <div className="text-xs text-blue-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ABOUT STUDY ABROAD ───────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{ background: "var(--color-light)", color: "var(--color-primary)" }}
              >
                The IH World Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight" style={{ color: "var(--color-primary)" }}>
                {t("abroad.core.title")}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5">{t("abroad.core.body")}</p>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                As part of the IH World Organisation, IH Saudi Arabia has direct partnerships with over 130 accredited language schools across 45+ countries. This means our students don't just get a language course — they get a fully managed, end-to-end international education experience backed by 70 years of expertise.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Whether you are a professional seeking career advancement through an advanced English programme in London, a teenager dreaming of a summer in New York, or an executive looking to gain business French in Paris — our advisors will design the perfect programme for you.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "var(--color-primary)" }}>
                Study Languages Available
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--color-primary)" }}>{lang.name}</p>
                      <p className="text-xs text-gray-500">{lang.destinations} destinations</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DESTINATIONS GRID ────────────────────────── */}
      <section className="py-24" style={{ background: "var(--color-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {t("abroad.locations.title")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From iconic global capitals to charming university cities — find your perfect study destination.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest, i) => {
              const theme = [
                {
                  shadow: "shadow-ih-coral",
                  border: "rgba(232, 93, 74, 0.25)",
                  borderHover: "rgba(232, 93, 74, 0.55)",
                  hoverBg: "linear-gradient(135deg, var(--color-ih-coral) 0%, var(--color-accent-dark) 100%)"
                },
                {
                  shadow: "shadow-ih-green",
                  border: "rgba(31, 169, 104, 0.25)",
                  borderHover: "rgba(31, 169, 104, 0.55)",
                  hoverBg: "linear-gradient(135deg, var(--color-ih-green) 0%, #126b41 100%)"
                },
                {
                  shadow: "shadow-ih-blue",
                  border: "rgba(59, 63, 168, 0.25)",
                  borderHover: "rgba(59, 63, 168, 0.55)",
                  hoverBg: "linear-gradient(135deg, var(--color-ih-blue) 0%, var(--color-primary-dark) 100%)"
                },
                {
                  shadow: "shadow-ih-peach",
                  border: "rgba(240, 149, 80, 0.25)",
                  borderHover: "rgba(240, 149, 80, 0.55)",
                  hoverBg: "linear-gradient(135deg, var(--color-ih-peach) 0%, #a85210 100%)"
                }
              ][i % 4];
              return (
                <motion.div
                  key={dest.city} custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative z-10 overflow-hidden asymmetric-card p-5 border transition-all duration-300 group/card cursor-pointer ${theme.shadow}`}
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, color-mix(in srgb, var(--color-primary) 5%, white) 100%)",
                    borderColor: theme.border
                  }}
                  whileHover={{
                    borderColor: theme.borderHover,
                    background: theme.hoverBg
                  }}
                >
                  {/* Visible background photo inside the card */}
                  <Image
                    src={dest.cardImg}
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                  />
                  
                  {/* Soft darken overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <span className="text-2xl">{dest.flag}</span>
                    <div>
                      <p className="font-extrabold text-sm text-primary group-hover/card:text-white transition-colors duration-300">{dest.city}</p>
                      <p className="text-xs text-slate-400 group-hover/card:text-white/80 transition-colors duration-300">{dest.country}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed group-hover/card:text-white/90 transition-colors duration-300 relative z-10">{dest.desc}</p>
                  <ChevronRight size={14} className="mt-3 text-slate-400 group-hover/card:text-white transition-colors relative z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── SERVICES ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {t("abroad.services.title")}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Full concierge support from first enquiry to safe return home.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => {
              return (
                <motion.div
                  key={i} custom={i}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`relative z-10 overflow-hidden asymmetric-card p-8 border transition-all duration-300 group/card cursor-pointer ${s.shadow}`}
                  style={{
                    background: s.bg,
                    borderColor: s.border
                  }}
                  whileHover={{
                    borderColor: s.borderHover,
                    background: s.hoverBg
                  }}
                >
                  {/* Visible background photo inside the card */}
                  <Image
                    src={s.cardImg}
                    alt=""
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-300 pointer-events-none z-0"
                  />
                  
                  {/* Soft darken overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-colors duration-300 pointer-events-none z-0" />

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover/card:scale-110 group-hover/card:bg-white ${s.colorClass} ${s.hoverTextClass} transition-all duration-300 relative z-10`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-base font-extrabold mb-3 text-primary group-hover/card:text-white transition-colors duration-300 relative z-10">{s.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium group-hover/card:text-white/90 transition-colors duration-300 relative z-10">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────── */}
      <section className="py-24" style={{ background: "var(--color-light)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              How It Works — 5 Simple Steps
            </h2>
          </motion.div>
          <div className="space-y-5">
            {steps.map((step, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className="text-2xl font-extrabold shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="font-extrabold text-base mb-2" style={{ color: "var(--color-primary)" }}>{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* ─── CTA ──────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #0a4a9f 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Star size={40} className="mx-auto text-yellow-300 mb-4" />
            <h2 className="text-3xl font-extrabold text-white mb-4">Your Adventure Starts Here</h2>
            <p className="text-blue-200 text-lg leading-relaxed mb-10">
              Book a free, no-obligation Study Abroad consultation with our advisors today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-base shadow-2xl hover:scale-105 transition-all"
                style={{ color: "var(--color-primary)" }}
              >
                {t("abroad.cta")} <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 font-bold text-base text-white hover:bg-white/25 transition-all"
              >
                <Phone size={16} /> +966 920 000 364
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
