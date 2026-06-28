"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Globe, Phone, Mail,
  BookOpen, Briefcase, Wrench, Award, Users, Laptop, UserCheck,
  ClipboardCheck, ArrowRight, Eye, Target, Heart, Rocket,
  Star, Shield, GraduationCap, TrendingUp, FileText,
  Layers, MapPin, Compass, Sparkles, Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeAccent from "./ThemeAccent";
import { useLanguage } from "@/context/LanguageContext";
import type { LucideIcon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════ */

interface SubItem {
  label: string;
  href: string;
  icon: LucideIcon;
  isCTA?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  desc?: string;
  sub?: SubItem[];
}

/* ═══════════════════════════════════════════════════════════════════════
   HEADER COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function Header() {
  const { t, toggleLang, lang, isRTL } = useLanguage();
  const pathname = usePathname();

  /* ─── State ─── */
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ─── Scroll handler ─── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── Close on navigation ─── */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  /* ─── Lock body scroll when mobile menu open ─── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ─── Mega-menu hover handlers with delay ─── */
  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 200);
  }, []);

  /* ─── Active page check ─── */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* ═══════════════════════════════════════════════════════════════════════
     NAVIGATION DATA
     ═══════════════════════════════════════════════════════════════════════ */

  const mainNavItems: NavItem[] = [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.who_we_are"),
      href: "/who-we-are",
      desc: t("nav.who_we_are.desc"),
      sub: [
        { label: t("nav.who_we_are.story"), href: "/who-we-are#our-story", icon: BookOpen },
        { label: t("nav.who_we_are.network"), href: "/who-we-are#global-network", icon: Globe },
        { label: t("nav.who_we_are.vision"), href: "/who-we-are#our-vision", icon: Eye },
        { label: t("nav.who_we_are.mission"), href: "/who-we-are#our-mission", icon: Target },
        { label: t("nav.who_we_are.values"), href: "/who-we-are#our-values", icon: Heart },
        { label: t("nav.who_we_are.future"), href: "/who-we-are#looking-ahead", icon: Rocket },
      ],
    },
    {
      label: t("nav.courses"),
      href: "/courses",
      desc: t("nav.courses.desc"),
      sub: [
        { label: t("nav.courses.general"), href: "/courses#general-english", icon: BookOpen },
        { label: t("nav.courses.business"), href: "/courses#business-english", icon: Briefcase },
        { label: t("nav.courses.technical"), href: "/courses#technical-professional", icon: Wrench },
        { label: t("nav.courses.exam_prep"), href: "/courses#exam-preparation", icon: Award },
        { label: t("nav.courses.young_learners_sub"), href: "/courses#young-learners", icon: Users },
        { label: t("nav.courses.online_hybrid"), href: "/courses#online-hybrid", icon: Laptop },
        { label: t("nav.courses.private_tuition"), href: "/courses#private-tuition", icon: UserCheck },
        { label: t("nav.courses.placement_testing"), href: "/courses#placement-testing", icon: ClipboardCheck },
        { label: t("nav.courses.start_learning"), href: "/courses", icon: ArrowRight, isCTA: true },
      ],
    },
    {
      label: t("nav.languages_programs"),
      href: "/languages-programs",
      desc: t("nav.languages.desc"),
      sub: [
        { label: t("nav.languages.arabic"), href: "/languages-programs#arabic", icon: BookOpen },
        { label: t("nav.languages.french"), href: "/languages-programs#french", icon: Globe },
        { label: t("nav.languages.spanish"), href: "/languages-programs#spanish", icon: Globe },
        { label: t("nav.languages.chinese"), href: "/languages-programs#chinese", icon: Globe },
        { label: t("nav.languages.additional"), href: "/languages-programs#additional", icon: Sparkles },
        { label: t("nav.languages.cultural"), href: "/languages-programs#cultural", icon: Compass },
      ],
    },
    {
      label: t("nav.corporate_training"),
      href: "/corporate-training",
      desc: t("nav.corporate.desc"),
      sub: [
        { label: t("nav.corporate.why"), href: "/corporate-training#why-ih", icon: Star },
        { label: t("nav.corporate.solutions"), href: "/corporate-training#solutions", icon: Layers },
        { label: t("nav.corporate.assessment"), href: "/corporate-training#assessment", icon: ClipboardCheck },
        { label: t("nav.corporate.process"), href: "/corporate-training#process", icon: TrendingUp },
        { label: t("nav.corporate.delivery"), href: "/corporate-training#delivery", icon: Laptop },
        { label: t("nav.corporate.workforce"), href: "/corporate-training#workforce", icon: Users },
        { label: t("nav.corporate.proposal"), href: "/corporate-training#proposal", icon: FileText, isCTA: true },
      ],
    },
    {
      label: t("nav.examinations"),
      href: "/examinations",
      desc: t("nav.exams.desc"),
      sub: [
        { label: t("nav.exams.why"), href: "/examinations#why-certification", icon: Shield },
        { label: t("nav.exams.english"), href: "/examinations#english-qualifications", icon: GraduationCap },
        { label: t("nav.exams.teacher"), href: "/examinations#teacher-qualifications", icon: Award },
        { label: t("nav.exams.corporate"), href: "/examinations#corporate-assessment", icon: Briefcase },
        { label: t("nav.exams.prep"), href: "/examinations#exam-preparation", icon: ClipboardCheck },
      ],
    },
    {
      label: t("nav.teacher_training"),
      href: "/teacher-training",
      desc: t("nav.teacher.desc"),
      sub: [
        { label: t("nav.teacher.why"), href: "/teacher-training#why-development", icon: Lightbulb },
        { label: t("nav.teacher.professional"), href: "/teacher-training#professional-development", icon: TrendingUp },
        { label: t("nav.teacher.celta"), href: "/teacher-training#celta-pathways", icon: Award },
        { label: t("nav.teacher.institutional"), href: "/teacher-training#institutional", icon: GraduationCap },
        { label: t("nav.teacher.commitment"), href: "/teacher-training#commitment", icon: Heart },
      ],
    },
    {
      label: t("nav.study_abroad"),
      href: "/study-abroad",
      desc: t("nav.abroad.desc"),
      sub: [
        { label: t("nav.abroad.why"), href: "/study-abroad#why-study-abroad", icon: Compass },
        { label: t("nav.abroad.network"), href: "/study-abroad#global-network", icon: Globe },
        { label: t("nav.abroad.opportunities"), href: "/study-abroad#opportunities", icon: Sparkles },
        { label: t("nav.abroad.destinations"), href: "/study-abroad#destinations", icon: MapPin },
        { label: t("nav.abroad.support"), href: "/study-abroad#support", icon: Heart },
      ],
    },
  ];

  const utilityItems: NavItem[] = [
    { label: t("nav.careers"), href: "/careers" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.faqs"), href: "/faqs" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  /* All items combined for mobile */
  const allNavItems = [...mainNavItems, ...utilityItems];

  /* ═══════════════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════════════ */

  return (
    <>
      {/* ── Background overlay when mega-menu open ── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-40 hidden lg:block"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <ThemeAccent />

        {/* ═══ TOP UTILITY BAR (Desktop) ═══ */}
        <div
          className={`hidden lg:block bg-gradient-to-r from-[#001a3f] to-[#002d6b] text-slate-300 text-xs transition-all duration-300 border-b border-white/5 select-none ${
            scrolled ? "h-0 overflow-hidden opacity-0 py-0" : "h-9 opacity-100 py-1.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+966920000364"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone size={12} className="text-blue-400 shrink-0" />
                <span className="font-medium">+966 920 000 364</span>
              </a>
              <div className="w-px h-3 bg-white/20" />
              <a
                href="mailto:info@ih-saudiarabia.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={12} className="text-blue-400 shrink-0" />
                <span>info@ih-saudiarabia.com</span>
              </a>
            </div>

            {/* Right: Utility Links */}
            <div className="flex items-center gap-4">
              {utilityItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-white transition-colors text-[11px] font-medium ${
                    isActive(item.href) ? "text-white" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══ MAIN NAVIGATION BAR ═══ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/logo.png"
                alt="International House Saudi Arabia"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="w-px h-6 bg-slate-200" />
              <img
                src="/ih_70years_v2.png"
                alt="70 Years"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* ── Desktop Nav Items ── */}
            <nav className="hidden lg:flex items-center h-full">
              {mainNavItems.map((item) =>
                item.sub && item.sub.length > 0 ? (
                  /* ── Item WITH mega dropdown ── */
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={closeMenu}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 py-1.5 px-1.5 xl:px-2 2xl:px-2.5 rounded-lg text-[11px] xl:text-xs 2xl:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap ${
                        activeMenu === item.label
                          ? "text-[#002f6c] bg-blue-50/80"
                          : isActive(item.href)
                          ? "text-[#002f6c]"
                          : "text-slate-700 hover:text-[#002f6c]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`shrink-0 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {/* Active indicator */}
                    {isActive(item.href) && !activeMenu && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-2 left-2 right-2 h-0.5 bg-[#cf1430] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                ) : (
                  /* ── Item WITHOUT dropdown (Home) ── */
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative py-1.5 px-1.5 xl:px-2 2xl:px-2.5 text-[11px] xl:text-xs 2xl:text-[13px] font-semibold transition-colors duration-200 whitespace-nowrap ${
                      isActive(item.href) ? "text-[#002f6c]" : "text-slate-700 hover:text-[#002f6c]"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-[-4px] left-2 right-2 h-0.5 bg-[#cf1430] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              )}

              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all ms-2"
              >
                <Globe size={13} />
                {t("nav.language")}
              </button>
            </nav>

            {/* ── Mobile Controls ── */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium border border-gray-200 text-gray-700"
              >
                <Globe size={12} />
                {t("nav.language")}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ═══ MEGA MENU PANELS (Desktop) ═══ */}
        <AnimatePresence>
          {activeMenu && (() => {
            const item = mainNavItems.find((i) => i.label === activeMenu);
            if (!item?.sub?.length) return null;

            const regularItems = item.sub.filter((s) => !s.isCTA);
            const ctaItems = item.sub.filter((s) => s.isCTA);
            const cols = regularItems.length > 6 ? "lg:grid-cols-3" : "lg:grid-cols-2";

            return (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="hidden lg:block border-t-[3px] border-[#cf1430] bg-white shadow-2xl shadow-black/10"
                onMouseEnter={() => openMenu(activeMenu)}
                onMouseLeave={closeMenu}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  {/* Section description */}
                  {item.desc && (
                    <p className="text-[11px] text-gray-400 font-semibold tracking-[0.15em] uppercase mb-6 pb-4 border-b border-gray-100">
                      {item.desc}
                    </p>
                  )}

                  {/* Items grid */}
                  <div className={`grid gap-1 ${cols}`}>
                    {regularItems.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-transparent"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-white group-hover:shadow-md group-hover:shadow-blue-100/50 flex items-center justify-center text-slate-400 group-hover:text-[#002f6c] transition-all duration-200 shrink-0 border border-transparent group-hover:border-blue-100">
                            <Icon size={19} strokeWidth={1.8} />
                          </div>
                          <span className="text-[13px] font-medium text-gray-600 group-hover:text-[#002f6c] transition-colors">
                            {sub.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* CTA button row */}
                  {ctaItems.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      {ctaItems.map((cta) => (
                        <Link
                          key={cta.href}
                          href={cta.href}
                          onClick={() => setActiveMenu(null)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#002f6c] to-[#0050b3] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 hover:brightness-110"
                        >
                          {cta.label}
                          <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* ═══ MOBILE MENU ═══ */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 64px)" }}
            >
              <div className="px-4 py-3 space-y-0.5">
                {allNavItems.map((item) =>
                  item.sub && item.sub.length > 0 ? (
                    <div key={item.label}>
                      {/* ── Accordion parent ── */}
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className={`flex items-center justify-between w-full px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                          mobileExpanded === item.label
                            ? "text-[#002f6c] bg-blue-50/70"
                            : isActive(item.href)
                            ? "text-[#002f6c] bg-blue-50/30"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180 text-[#002f6c]" : ""
                          }`}
                        />
                      </button>

                      {/* ── Accordion content ── */}
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className={`py-1 space-y-0.5 ${isRTL ? "pr-4" : "pl-4"}`}>
                              {/* Link to main page */}
                              <Link
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#002f6c] rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                <ArrowRight size={14} className={`shrink-0 ${isRTL ? "rotate-180" : ""}`} />
                                {isRTL ? "نظرة عامة" : "Overview"}
                              </Link>

                              {item.sub.filter((s) => !s.isCTA).map((sub) => {
                                const Icon = sub.icon;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-[#002f6c] transition-colors"
                                  >
                                    <Icon size={15} className="text-gray-400 shrink-0" />
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* ── Simple link item ── */
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-white bg-gradient-to-r from-[#002f6c] to-[#0050b3]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}

                {/* ── Mobile contact info ── */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 px-4 pb-6">
                  <a href="tel:+966920000364" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#002f6c] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Phone size={14} className="text-blue-600" />
                    </div>
                    +966 920 000 364
                  </a>
                  <a href="mailto:info@ih-saudiarabia.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#002f6c] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Mail size={14} className="text-blue-600" />
                    </div>
                    info@ih-saudiarabia.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
