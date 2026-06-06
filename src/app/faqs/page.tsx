"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Phone, MessageSquare, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUpFast } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

const fadeUp = fadeUpFast;

const faqCategories = [
  {
    category: "General",
    color: "var(--color-ih-blue)",
    faqs: [
      {
        q: "What is International House Saudi Arabia?",
        a: "International House Saudi Arabia (IH SA) is a premier English language training organisation operating across the Kingdom — in Riyadh, Jeddah, Dammam, Jubail, Yanbu, Khafji and Abha. We are affiliated with IH World, the global network of over 130 language schools operating in 45+ countries since 1953. IH SA holds accreditation from the Saudi Ministry of Education, TVTC, and Cambridge Assessment English.",
      },
      {
        q: "How long has IH Saudi Arabia been operating?",
        a: "IH Saudi Arabia has been delivering English language education in the Kingdom since 2001, with over two decades of experience serving individuals, families and corporate clients across all major cities in the KSA.",
      },
      {
        q: "Are IH Saudi Arabia's qualifications officially recognised in KSA?",
        a: "Yes. IH Saudi Arabia holds formal recognition from the Saudi Ministry of Education and the Technical and Vocational Training Corporation (TVTC). Our Cambridge CELTA certifications are internationally recognised in 100+ countries.",
      },
      {
        q: "Are classes available for both men and women?",
        a: "Yes. IH Saudi Arabia provides separate, dedicated sessions for men and women in a safe, professional and respectful environment, in full compliance with Saudi cultural norms and regulations.",
      },
    ],
  },
  {
    category: "English Courses",
    color: "var(--color-ih-green)",
    faqs: [
      {
        q: "What English courses do you offer?",
        a: "IH Saudi Arabia offers a comprehensive range of English programmes: General English (all levels A1–C2), English for Companies (corporate), English for Specific Purposes (ESP) including Oil & Gas, Medical, Legal and Engineering English, Young Learners (ages 5–17), IELTS/Cambridge Exam Preparation, Online English, and Corporate Placement Testing.",
      },
      {
        q: "How do I know which level to join?",
        a: "Every new student completes our free online placement test before starting. Results are available instantly and are CEFR-aligned (A1–C2). For corporate groups, we offer a comprehensive full-skills assessment for your entire workforce.",
      },
      {
        q: "How long are English courses?",
        a: "Standard group courses run in 3-month semesters (approximately 60 contact hours). Intensive programmes can be completed in 4–6 weeks. Corporate programmes are designed around your organisation's schedule — from short intensives to ongoing monthly delivery.",
      },
      {
        q: "Do you offer one-to-one private lessons?",
        a: "Yes — IH Saudi Arabia offers private one-to-one instruction with qualified native-speaking teachers, with flexible scheduling 6 days a week. Contact your nearest branch for current rates.",
      },
      {
        q: "What is the maximum class size?",
        a: "Our standard group classes have a maximum of 15 students, with Young Learner classes capped at 12. This ensures every student receives meaningful teacher attention and ample speaking practice time.",
      },
    ],
  },
  {
    category: "CELTA & Teacher Training",
    color: "var(--color-ih-purple)",
    faqs: [
      {
        q: "What is CELTA and why is it important?",
        a: "CELTA (Certificate in English Language Teaching to Adults) is awarded by Cambridge Assessment English — it is the world's most widely recognised entry-level qualification for English language teachers. It is accepted by language schools, universities and training institutions in over 100 countries and is significantly more respected than generic TEFL or TESOL certificates.",
      },
      {
        q: "Do I need teaching experience to enrol in CELTA?",
        a: "No prior teaching experience is required. CELTA is specifically designed for motivated individuals looking to enter the EFL teaching profession. You do need to demonstrate a high level of English proficiency (near-native C1/C2) and pass a brief pre-course interview and task.",
      },
      {
        q: "What are the CELTA delivery formats?",
        a: "IH Saudi Arabia offers three CELTA tracks: Full-time intensive (4 weeks), Part-time standard (3 months), and a Blended/Online option combining online input with in-person or online teaching practice. All tracks lead to the same Cambridge CELTA certificate.",
      },
      {
        q: "Can I get a job at IH Saudi Arabia after completing CELTA?",
        a: "CELTA graduates are eligible to apply for teaching positions within IH Saudi Arabia and across the entire IH World network of 130+ schools. We actively recruit our own CELTA graduates and provide career guidance as part of the post-CELTA experience.",
      },
    ],
  },
  {
    category: "Study Abroad",
    color: "var(--color-accent)",
    faqs: [
      {
        q: "Can IH Saudi Arabia arrange study abroad for the whole family?",
        a: "Yes — we design programmes for individuals, couples and families. Young learners can enrol in IH junior programmes while parents study at the adult school. Our advisors handle all logistics including accommodation, airport transfers and orientation.",
      },
      {
        q: "Which countries are available for study abroad?",
        a: "Through the IH World network, we can place you in 50+ destinations across the UK, USA, Canada, Ireland, Australia, Malta, Spain, France, Italy, Germany, Japan, Costa Rica, South Africa, UAE and more.",
      },
      {
        q: "How far in advance should I apply for a study abroad programme?",
        a: "We recommend applying at least 3 months before your intended start date to allow sufficient time for programme planning, visa processing and accommodation booking. Summer programmes (June–August) book up fast — apply 4–6 months ahead.",
      },
      {
        q: "Does IH Saudi Arabia help with the student visa process?",
        a: "Yes. Our advisors provide a comprehensive visa guidance service — including preparing your invitation letter from the host school, reviewing your supporting documents and advising on the requirements for your specific destination country.",
      },
    ],
  },
  {
    category: "Fees & Enrolment",
    color: "var(--color-ih-coral)",
    faqs: [
      {
        q: "How do I enrol at IH Saudi Arabia?",
        a: "You can enrol by visiting any of our branches in person, calling our hotline (+966 920 000 364), sending an email to info@ih-saudiarabia.com, or completing our online enquiry form. Our team will respond within one business day.",
      },
      {
        q: "Is the placement test free?",
        a: "Yes — the online individual placement test is completely free of charge and available 24/7 at all IH Saudi Arabia centres and online. Corporate bulk testing packages are available at competitive rates for organisations.",
      },
      {
        q: "What payment methods do you accept?",
        a: "IH Saudi Arabia accepts bank transfers, mada, VISA, Mastercard and corporate purchase orders. Corporate clients may arrange invoicing through their procurement departments — contact our corporate team for details.",
      },
      {
        q: "Are there discounts for families or groups?",
        a: "Yes — family discounts apply when two or more family members enrol simultaneously. Corporate group bookings of 5+ participants receive preferential pricing. Contact your nearest branch for current offers.",
      },
    ],
  },
];

export default function FAQsPage() {
  const { t, lang } = useLanguage();
  const [openCategory, setOpenCategory] = useState<string>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs = faqCategories.find(c => c.category === openCategory)?.faqs ?? [];
  const activeColor = faqCategories.find(c => c.category === openCategory)?.color ?? "var(--color-primary)";

  return (
    <div className="pt-[72px]">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden group"
        style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #0a4a9f 100%)" }}
      >
        <Image
          src="/arab_education_bg.png"
          alt="Arab education background"
          fill
          className="object-cover object-center opacity-30 group-hover:opacity-60 transition-opacity duration-400 ease-in-out mix-blend-overlay"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-24 -translate-x-16" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-white/15 border border-white/25"
            >
              <MessageSquare size={28} className="text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              {t("faqs.hero.title")}
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              {t("faqs.hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* ─── CATEGORY TABS ────────────────────────────── */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setOpenCategory(cat.category); setOpenIndex(null); }}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{
                  background: openCategory === cat.category ? cat.color : "transparent",
                  color: openCategory === cat.category ? "white" : "var(--color-primary)",
                  border: `2px solid ${openCategory === cat.category ? cat.color : "#e5e7eb"}`,
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            key={openCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            {activeFaqs.map((faq, i) => (
              <motion.div
                key={i} custom={i}
                initial="hidden" animate="visible" variants={fadeUp}
                className="asymmetric-card border border-gray-100 overflow-hidden shadow-ih-soft"
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group transition-colors"
                  style={{
                    background: openIndex === i ? activeColor : "white",
                  }}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span
                    className="text-sm sm:text-base font-semibold pr-4 leading-snug"
                    style={{ color: openIndex === i ? "white" : "var(--color-primary)" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    style={{ color: openIndex === i ? "white" : activeColor }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 text-sm text-gray-600 leading-relaxed border-t"
                        style={{ background: "#f8f9ff", borderColor: activeColor + "25" }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ─── STILL HAVE QUESTIONS ─────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-light)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--color-primary)" }}>
              {lang === "ar" ? "لم تجد إجابتك؟" : "Still Have a Question?"}
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              {lang === "ar"
                ? "فريقنا متاح للمساعدة في جميع استفساراتك"
                : "Our team is here to help — reach out through any of the channels below and we'll respond within one business day."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone size={24} />,
                title: lang === "ar" ? "اتصل بنا" : "Call Us",
                body: "+966 920 000 364",
                sub: lang === "ar" ? "السبت – الخميس" : "Sat – Thu, 8am – 8pm",
                href: "tel:+966920000364",
                color: "var(--color-ih-blue)",
              },
              {
                icon: <Mail size={24} />,
                title: lang === "ar" ? "راسلنا" : "Email Us",
                body: "info@ih-saudiarabia.com",
                sub: lang === "ar" ? "نرد خلال يوم عمل واحد" : "Reply within 1 business day",
                href: "mailto:info@ih-saudiarabia.com",
                color: "var(--color-ih-green)",
              },
              {
                icon: <ArrowRight size={24} />,
                title: lang === "ar" ? "أرسل لنا رسالة" : "Contact Form",
                body: lang === "ar" ? "نموذج التواصل" : "Send us a message",
                sub: lang === "ar" ? "الرد السريع مضمون" : "Quick response guaranteed",
                href: "/contact",
                color: "var(--color-accent)",
              },
            ].map((c, i) => (
              <motion.a
                key={i} custom={i}
                href={c.href}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-3xl p-7 shadow-ih-soft border border-gray-100 hover:-translate-y-1 transition-all group flex flex-col items-center text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: c.color }}
                >
                  {c.icon}
                </div>
                <h3 className="font-extrabold text-sm mb-1" style={{ color: "var(--color-primary)" }}>{c.title}</h3>
                <p className="font-semibold text-sm mb-1 text-gray-800">{c.body}</p>
                <p className="text-xs text-gray-500">{c.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
