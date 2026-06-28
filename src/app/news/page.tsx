"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, Award, Users, GraduationCap, Heart, CheckCircle2, ChevronRight, Globe, Share2, Mail } from "lucide-react";

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
        "New Programs",
        "Educational Initiatives",
        "Partnerships & Collaborations",
        "Events & Workshops",
        "Examination Updates",
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
        "International Examinations",
        "Study Abroad Preparation",
        "Corporate Training Trends",
        "Educational Technology",
        "Lifelong Learning"
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
        "إطلاق البرامج الجديدة",
        "المبادرات التعليمية المبتكرة",
        "الشراكات والتعاون الاستراتيجي",
        "الفعاليات وورش العمل الأكاديمية",
        "تحديثات الاختبارات الدولية",
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
        "الاستعداد النفسي والأكاديمي للدراسة بالخارج",
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

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ThemeAccent />

      {/* Hero Section - Clean Light Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#002f6c]"
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

      {/* Main Sections */}
      <div className="space-y-16 py-20 lg:py-24">
        
        {/* 1. Latest News */}
        <section id="latest-news" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.latestNews.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.latestNews.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.latestNews.list.map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-600 font-semibold items-center">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/news_latest_news.png" alt="Latest News Updates" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* 2. Educational Insights */}
        <section id="educational-insights" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.insights.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.insights.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.insights.list.map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-600 font-semibold items-center">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/news_insights.png" alt="Educational Insights" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* 3. Student Success Stories */}
        <section id="success-stories" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-red-600 uppercase tracking-widest block mb-3">
                {c.success.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.success.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {c.success.desc}
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/news_success_stories.png" alt="Student Success Stories" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* 4. Corporate Training Insights */}
        <section id="corporate-insights" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.corpInsights.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {c.corpInsights.desc}
              </p>
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/news_corporate_insights.png" alt="Corporate Training Insights" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* 5. Teacher Development */}
        <section id="teacher-development" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.teacherDev.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {c.teacherDev.desc}
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/news_teacher_development.png" alt="Teacher Development" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>
      </div>

      {/* 6. Stay Connected */}
      <section id="connect" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <Globe size={48} className="text-[#cf1430] mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-[#002f6c]">{c.connect.title}</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {c.connect.desc}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={lang === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
              className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 text-xs text-gray-800 bg-slate-50"
            />
            <button className="px-6 py-3 bg-[#002f6c] hover:bg-[#0050b3] text-white font-bold rounded-xl text-xs transition-colors shrink-0">
              {c.connect.btn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
