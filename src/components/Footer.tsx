"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import ThemeAccent from "./ThemeAccent";
import { useLanguage } from "@/context/LanguageContext";

// Inline SVG social icons (social icons removed from lucide-react v0.x)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("footer.arabic_info"), href: "/" },
    { label: t("footer.young_learners"), href: "/courses/young-learners" },
    { label: t("footer.placement"), href: "/courses/placement-test" },
    { label: t("footer.careers"), href: "/contact" },
    { label: t("footer.teacher_training"), href: "/teacher-training" },
    { label: t("footer.privacy"), href: "/" },
  ];

  const socials = [
    { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
    { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
    { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
    { icon: <TiktokIcon />, href: "https://tiktok.com", label: "TikTok" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <YoutubeIcon />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer style={{ background: "var(--color-primary)" }} className="text-white">
      <ThemeAccent height="h-2.5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm inline-block">
                <img
                  src="/logo.png"
                  alt="International House Saudi Arabia"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              World-class English language education in the Kingdom since 2001.
            </p>
            <div className="flex items-center gap-1.5 mb-2">
              <Phone size={13} className="text-blue-300 shrink-0" />
              <a href="tel:+966920000364" className="text-sm text-blue-100 hover:text-white transition-colors font-medium">
                +966 920 000 364
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={13} className="text-blue-300 shrink-0" />
              <a href="mailto:info@ih-saudiarabia.com" className="text-sm text-blue-100 hover:text-white transition-colors">
                info@ih-saudiarabia.com
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">
              {t("footer.branches")}
            </h3>
            <div className="space-y-4">
              {["DAMMAM", "JEDDAH", "RIYADH"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin size={13} className="text-blue-300 shrink-0 mt-0.5" />
                  <span className="text-sm text-blue-100 font-medium">{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">{t("footer.hotline")}</p>
              <a href="tel:+966920000364" className="text-xl font-bold text-white hover:text-yellow-300 transition-colors">
                +966 920 000 364
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-blue-300 mb-4">
              {t("footer.follow")}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <p className="text-xs text-blue-300">{t("footer.copyright")}</p>
          <p className="text-xs text-blue-400">
            Affiliated with{" "}
            <a href="https://ihworld.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              IH World Organization
            </a>
          </p>
        </div>
      </div>
      {/* Rainbow stripe at the very bottom */}
      <ThemeAccent height="h-2" pills />
    </footer>
  );
}
