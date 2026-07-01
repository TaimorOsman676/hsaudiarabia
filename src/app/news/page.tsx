"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Mail, CheckCircle2, ArrowUpRight, X, ArrowRight
} from "lucide-react";

const content = {
  en: {
    hero: {
      badge: "NEWS & INSIGHTS",
      title: "Ideas, Innovation, and Educational Perspectives",
      desc1: "Welcome to the IH Saudi Arabia News & Insights Center.",
      desc2: "This section shares educational news, industry developments, professional insights, success stories, and updates from IH Saudi Arabia and our international network.",
      desc3: "Our goal is to provide valuable information that supports learners, educators, organizations, and educational partners."
    },
    latestNews: {
      title: "Latest News",
      subtitle: "Stay informed about:",
      list: [
        "New Programs & Curriculums",
        "Educational Initiatives in KSA",
        "Partnerships & Collaborations",
        "Events & Training Workshops",
        "Examination & Testing Updates",
        "Study Abroad Opportunities",
        "Teacher Training Activities"
      ]
    },
    insights: {
      title: "Educational Insights",
      subtitle: "Explore practical articles and resources on topics such as:",
      list: [
        "Language Learning Strategies",
        "English for Professional Success",
        "International Examinations Prep",
        "Study Abroad Readiness",
        "Corporate Training Trends",
        "Educational Technology Tools",
        "Lifelong Learning Pathways"
      ]
    },
    success: {
      title: "Student Success Stories",
      subtitle: "Celebrate the achievements of our learners, teachers, and partners.",
      desc: "Discover inspiring stories of personal growth, academic success, professional development, and international experiences."
    },
    corpInsights: {
      title: "Corporate Training Insights",
      desc: "Learn about workforce development, communication skills, leadership training, and best practices that help organizations succeed in today's competitive environment."
    },
    teacherDev: {
      title: "Teacher Development & Educational Excellence",
      desc: "Explore articles, workshops, and professional development resources that support educators in enhancing teaching effectiveness and learner engagement."
    },
    connect: {
      title: "Stay Connected",
      desc: "Follow our latest news, educational resources, and upcoming opportunities through our website and social media channels.",
      btn: "Join Newsletter"
    }
  },
  ar: {
    hero: {
      badge: "الأخبار والمقالات والآراء",
      title: "الأفكار، الابتكار، والآفاق التعليمية",
      desc1: "مرحباً بكم في مركز الأخبار والأفكار التعليمية في الهاوس الدولي السعودية.",
      desc2: "يشارك هذا القسم الأخبار التعليمية، تطورات قطاع التعليم، الأفكار المهنية، قصص النجاح، وآخر التحديثات من الهاوس الدولي السعودية وشبكتنا العالمية.",
      desc3: "هدفنا هو تقديم معلومات قيمة تدعم المتعلمين، المعلمين، المؤسسات، والشركاء التعليميين."
    },
    latestNews: {
      title: "آخر الأخبار والتحديثات",
      subtitle: "ابق على اطلاع دائم بكل من:",
      list: [
        "إطلاق البرامج والمناهج الجديدة",
        "المبادرات التعليمية المبتكرة بالمملكة",
        "الشراكات والتعاون الاستراتيجي",
        "الفعاليات وورش العمل الأكاديمية",
        "تحديثات الاختبارات والتقييمات",
        "فرص الدراسة والابتعاث بالخارج",
        "أنشطة تدريب وتأهيل المعلمين"
      ]
    },
    insights: {
      title: "الأفكار والآراء التعليمية",
      subtitle: "استكشف مقالات وموارد عملية حول مواضيع مثل:",
      list: [
        "استراتيجيات تعلم اللغات الفعالة",
        "الإنجليزية للنجاح المهني والترقي",
        "تقييمات واختبارات اللغة الدولية",
        "الاستعداد النفسي والأكاديمي للابتعاث",
        "اتجاهات التدريب المؤسسي الحديثة",
        "تكنولوجيا التعليم والتعليم الذكي",
        "التعلم مدى الحياة والتطوير الذاتي"
      ]
    },
    success: {
      title: "قصص نجاح الطلاب",
      subtitle: "نحتفي بإنجازات طلابنا ومعلمينا وشركائنا المتميزين.",
      desc: "اكتشف قصصاً ملهمة عن النمو الشخصي، النجاح الأكاديمي المبهر، التطوير المهني، والتجارب الدولية الفريدة التي غيرت مسار متعلمينا."
    },
    corpInsights: {
      title: "آراء وأفكار تدريب الشركات",
      desc: "تعرف على سبل تطوير القوى العاملة الوطنية، مهارات الاتصال الفعال، التدريب القيادي، وأفضل الممارسات التي تساعد المؤسسات على التميز والنجاح في بيئة الأعمال التنافسية اليوم."
    },
    teacherDev: {
      title: "تطوير المعلمين والتميز التعليمي",
      desc: "استكشف المقالات وورش العمل وموارد التطوير المهني التخصصية التي تدعم المعلمين والتربويين في تعزيز فعالية التدريس وتحفيز تفاعل المتعلمين داخل الفصل."
    },
    connect: {
      title: "ابق على تواصل معنا",
      desc: "تابع آخر أخبارنا، ومواردنا التعليمية، والفرص التعليمية والمهنية القادمة من خلال موقعنا الإلكتروني وقنوات التواصل الاجتماعي الخاصة بنا.",
      btn: "اشترك بالنشرة البريدية"
    }
  }
};

export default function NewsPage() {
  const { lang, isRTL } = useLanguage();
  const c = content[lang] || content.en;

  const [activeModal, setActiveModal] = useState<number | null>(null);

  const cardsData = [
    {
      id: 0,
      title: c.latestNews.title,
      subtitle: c.latestNews.subtitle,
      list: c.latestNews.list,
      date: lang === "ar" ? "آخر الأخبار والتحديثات" : "Latest Updates",
      bgClass: "bg-[#ec9a5f]",
      image: "/news_latest_news.png",
      cta: lang === "ar" ? "عرض التفاصيل" : "Read more",
      description: lang === "ar" ? "ابق على اطلاع دائم بأحدث البرامج والورش والمبادرات التعليمية بالمملكة." : "Stay informed about our latest academic initiatives, collaborations, workshops, and announcements."
    },
    {
      id: 1,
      title: c.insights.title,
      subtitle: c.insights.subtitle,
      list: c.insights.list,
      date: lang === "ar" ? "رؤى تعليمية" : "Educational Insights",
      bgClass: "bg-[#f5cf8e]",
      image: "/news_insights.png",
      cta: lang === "ar" ? "عرض التفاصيل" : "Read more",
      hasAccent: true,
      description: lang === "ar" ? "استكشف مقالات علمية ومقالات عملية حول استراتيجيات تعلم اللغة والإنجليزية المهنية." : "Explore practical articles and resources covering effective language learning strategies and professional English training."
    },
    {
      id: 2,
      title: c.success.title,
      subtitle: c.success.subtitle,
      list: [],
      date: lang === "ar" ? "قصص النجاح" : "Success Stories",
      bgClass: "bg-[#a6d67b]",
      image: "/news_success_stories.png",
      cta: lang === "ar" ? "عرض التفاصيل" : "Read more",
      description: c.success.desc
    },
    {
      id: 3,
      title: c.corpInsights.title,
      subtitle: lang === "ar" ? "التدريب المؤسسي" : "Workforce Training",
      list: [],
      date: lang === "ar" ? "تدريب الشركات" : "Corporate Insights",
      bgClass: "bg-[#8bc3eb]",
      image: "/news_corporate_insights.png",
      cta: lang === "ar" ? "عرض التفاصيل" : "Read more",
      description: c.corpInsights.desc
    },
    {
      id: 4,
      title: c.teacherDev.title,
      subtitle: lang === "ar" ? "التميز التعليمي" : "Educational Excellence",
      list: [],
      date: lang === "ar" ? "تطوير المعلمين" : "Teacher Development",
      bgClass: "bg-[#c7a3eb]",
      image: "/news_teacher_development.png",
      cta: lang === "ar" ? "عرض التفاصيل" : "Read more",
      description: c.teacherDev.desc
    }
  ];

  const selectedCard = activeModal !== null ? cardsData.find((card) => card.id === activeModal) : null;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ThemeAccent />

      {/* Hero Section - Clean Light Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-50 border border-red-100 text-red-600 mb-6"
          >
            {c.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#002f6c] font-heading"
          >
            {c.hero.title}
          </motion.h1>
          <div className="max-w-3xl mx-auto space-y-4 text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#002f6c] font-semibold"
            >
              {c.hero.desc1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {c.hero.desc2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 italic"
            >
              {c.hero.desc3}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Grid Section (Parent Website Card Aesthetics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-wrap gap-8 justify-center">
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex"
            >
              <motion.div
                onClick={() => setActiveModal(card.id)}
                className={`${card.bgClass} w-full rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none text-slate-800 relative group overflow-hidden`}
              >
                {/* Top Row: Category Date / Tag and Circular Arrow Up-Right */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-wider uppercase opacity-75">
                    {card.date}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform group-hover:rotate-45 duration-300 shrink-0">
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Title & Underlined Read More */}
                <div className="my-7 text-start flex-1 flex flex-col justify-between min-h-[110px]">
                  <h3 className="text-xl md:text-2xl font-black font-heading leading-tight tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <div className="mt-4">
                    <span className="underline font-bold text-xs text-slate-900 group-hover:text-slate-950 transition-colors">
                      {card.cta}
                    </span>
                  </div>
                </div>

                {/* Bottom Nested Image with padding (framed look) */}
                <div className="relative w-full aspect-[4/3] rounded-[1.8rem] overflow-hidden border border-black/5 shadow-inner bg-white/10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlapping Theme Accent color strip (Mockup style for card 2) */}
                  {card.hasAccent && (
                    <div className="absolute bottom-3 right-3 w-28 p-1.5 bg-white/20 backdrop-blur-md rounded-xl border border-white/20">
                      <ThemeAccent overlapping height="h-2" />
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Stay Connected Form */}
      <section id="connect" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Globe size={48} className="text-[#cf1430] mx-auto mb-2 animate-pulse" />
          <h2 className="text-3xl font-extrabold text-[#002f6c] font-heading">{c.connect.title}</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            {c.connect.desc}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50"
            />
            <button className="px-6 py-3 bg-[#002f6c] hover:bg-[#0050b3] text-white font-black rounded-xl text-xs transition-colors shrink-0">
              {c.connect.btn}
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Details Modal */}
      <AnimatePresence>
        {activeModal !== null && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 10 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="bg-white rounded-[2rem] shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 flex flex-col text-start relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Strip */}
              <ThemeAccent overlapping height="h-2.5" />

              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className={`absolute top-5 ${isRTL ? "left-5" : "right-5"} p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors border border-slate-200/50`}
              >
                <X size={16} />
              </button>

              {/* Modal Body Container */}
              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-600">
                    {selectedCard.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mt-1 font-heading">
                    {selectedCard.title}
                  </h3>
                </div>

                {/* Primary Description */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                  {selectedCard.description}
                </p>

                {/* Topics / Bullet List */}
                {selectedCard.list && selectedCard.list.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h5 className="text-[10px] font-black text-[#002f6c] uppercase tracking-wider">
                      {lang === "ar" ? "التفاصيل والمحاور الرئيسية:" : "Included Programs & Focus Areas:"}
                    </h5>
                    <div className="grid grid-cols-1 gap-2 max-h-[180px] overflow-y-auto pr-1">
                      {selectedCard.list.map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 text-xs text-slate-600 font-bold items-center bg-slate-50 p-3 rounded-xl border border-slate-150/40">
                          <CheckCircle2 size={15} className="text-red-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer Call To Action */}
                <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-xl"
                  >
                    {lang === "ar" ? "إغلاق" : "Close"}
                  </button>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 bg-[#002f6c] text-white text-xs font-black rounded-xl hover:shadow-lg hover:shadow-blue-500/20 hover:bg-[#002452] flex items-center gap-1.5 transition-all"
                  >
                    <span>{lang === "ar" ? "تواصل معنا" : "Contact Us"}</span>
                    <ArrowRight size={13} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
