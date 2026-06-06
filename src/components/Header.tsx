"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import ThemeAccent from "./ThemeAccent";
import { useLanguage } from "@/context/LanguageContext";

interface SubItem { label: string; href: string }
interface NavItem { label: string; href?: string; sub?: SubItem[] }

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDropdown(null); }, [pathname]);

  const navItems: NavItem[] = [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.courses"),
      sub: [
        { label: t("nav.courses.english_companies"), href: "/courses/english-for-companies" },
        { label: t("nav.courses.esp"), href: "/courses/esp-courses" },
        { label: t("nav.courses.arabic"), href: "/courses/learn-arabic" },
        { label: t("nav.courses.young_learners"), href: "/courses/young-learners" },
        { label: t("nav.courses.online"), href: "/courses/online-classes" },
        { label: t("nav.courses.placement"), href: "/courses/placement-test" },
      ],
    },
    {
      label: t("nav.teacher_training"),
      sub: [
        { label: t("nav.teacher_training.celta"), href: "/teacher-training" },
      ],
    },
    { label: t("nav.study_abroad"), href: "/study-abroad" },
    { label: t("nav.faqs"), href: "/faqs" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <ThemeAccent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <img
              src="/logo.png"
              alt="International House Saudi Arabia"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.sub ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-blue-700 ${
                      openDropdown === item.label ? "text-blue-700 bg-blue-50" : "text-gray-700"
                    }`}
                    style={openDropdown === item.label ? { color: "var(--color-primary)" } : {}}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div
                      className={`absolute top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${
                        lang === "ar" ? "right-0" : "left-0"
                      }`}
                    >
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  style={pathname === item.href ? { background: "var(--color-primary)" } : {}}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 ml-2 transition-all"
            >
              <Globe size={14} />
              {t("nav.language")}
            </button>
          </nav>

          {/* Mobile Controls */}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-screen overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) =>
              item.sub ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className={`mt-1 space-y-1 ${lang === "ar" ? "pr-4" : "pl-4"}`}>
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-3 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-700"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    pathname === item.href ? "text-white" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  style={pathname === item.href ? { background: "var(--color-primary)" } : {}}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
