"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MessageSquare, Mail, Search, HelpCircle, CheckCircle2, Globe, BookOpen, Briefcase, Award, Plane, GraduationCap, ArrowRight } from "lucide-react";

const categoriesConfig = {
  general: { icon: Globe, color: "text-blue-600 bg-blue-50 border-blue-100" },
  courses: { icon: BookOpen, color: "text-red-600 bg-red-50 border-red-100" },
  corporate: { icon: Briefcase, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
  exams: { icon: Award, color: "text-purple-600 bg-purple-50 border-purple-100" },
  studyAbroad: { icon: Plane, color: "text-amber-600 bg-amber-50 border-amber-100" },
  teacherTraining: { icon: GraduationCap, color: "text-teal-600 bg-teal-50 border-teal-100" }
};

const content = {
  en: {
    hero: {
      badge: "HELP CENTER",
      title: "Frequently Asked Questions",
      subtitle: "Find fast answers to commonly asked questions about our language programs, corporate training, study abroad opportunities, and teacher qualifications."
    },
    categories: {
      all: "All Categories",
      general: "General Questions",
      courses: "Courses & Learning",
      corporate: "Corporate Training",
      exams: "Examinations & Certification",
      studyAbroad: "Study Abroad",
      teacherTraining: "Teacher Training"
    },
    contactCard: {
      title: "Need Personal Guidance?",
      desc: "Our academic advisors are available to help identify the best learning pathway for you or your team.",
      btnChat: "Chat on WhatsApp",
      btnMail: "Send an Email"
    },
    faqs: [
      // 1. General Questions
      {
        q: "What is International House Saudi Arabia?",
        a: "IH Saudi Arabia is part of the International House World Organization (IHWO), a globally respected network of language schools and teacher training centers.",
        cat: "general"
      },
      {
        q: "Where are your centers located?",
        a: "We currently serve learners and organizations through our centers and operations in Riyadh, Jeddah, and Dammam/Dhahran, as well as through online learning solutions.",
        cat: "general"
      },
      // 2. Courses & Learning
      {
        q: "How do I know my English level?",
        a: "Our academic team provides placement testing to help determine the most suitable course for your current level and goals.",
        cat: "courses"
      },
      {
        q: "Do you offer online classes?",
        a: "Yes. We offer face-to-face, online, and hybrid learning options depending on the program.",
        cat: "courses"
      },
      {
        q: "Do you provide certificates?",
        a: "Yes. Learners who successfully complete eligible programs may receive certificates of completion.",
        cat: "courses"
      },
      // 3. Corporate Training
      {
        q: "Can training be delivered at our company?",
        a: "Yes. Corporate programs can be delivered at client premises, at IH Saudi Arabia centers, online, or through hybrid learning solutions.",
        cat: "corporate"
      },
      {
        q: "Can training programs be customized?",
        a: "Yes. Corporate programs are designed around the specific objectives and requirements of each organization.",
        cat: "corporate"
      },
      // 4. Examinations & Certification
      {
        q: "Do you offer IELTS preparation?",
        a: "Yes. We offer IELTS preparation programs designed to help learners achieve their target scores.",
        cat: "exams"
      },
      {
        q: "Do you support other international qualifications?",
        a: "Yes. We aim to support a range of internationally recognized qualifications and certification pathways.",
        cat: "exams"
      },
      // 5. Study Abroad
      {
        q: "Do you offer study abroad guidance?",
        a: "Yes. We provide educational consultation and guidance regarding international learning opportunities and study abroad pathways.",
        cat: "studyAbroad"
      },
      {
        q: "Can I study at other International House schools?",
        a: "Depending on availability and program requirements, learners may have access to opportunities through the International House network and partner institutions.",
        cat: "studyAbroad"
      },
      // 6. Teacher Training
      {
        q: "Do you offer teacher development programs?",
        a: "Yes. We provide professional development opportunities and teacher training initiatives designed to support educators at different stages of their careers.",
        cat: "teacherTraining"
      },
      {
        q: "Will additional teacher qualifications be available in the future?",
        a: "IH Saudi Arabia continues to explore opportunities to expand teacher training and professional development offerings.",
        cat: "teacherTraining"
      }
    ]
  },
  ar: {
    hero: {
      badge: "مركز المساعدة والدعم",
      title: "الأسئلة الشائعة والاستفسارات",
      subtitle: "احصل على إجابات سريعة ووافية حول برامج اللغة، تدريب الشركات والمؤسسات، فرص الابتعاث والدراسة بالخارج، وتأهيل المعلمين."
    },
    categories: {
      all: "جميع الأقسام",
      general: "أسئلة عامة واستفسارات",
      courses: "الدورات والتعلم",
      corporate: "تدريب الشركات",
      exams: "الاختبارات والشهادات",
      studyAbroad: "الدراسة في الخارج",
      teacherTraining: "تدريب وتأهيل المعلمين"
    },
    contactCard: {
      title: "هل تحتاج لتوجيه مباشر؟",
      desc: "مستشارونا الأكاديميون على استعداد تام لمساعدتك في اختيار وتحديد المسار الأكاديمي الأنسب لك أو لموظفي شركتك.",
      btnChat: "محادثة واتساب مباشرة",
      btnMail: "إرسال بريد إلكتروني"
    },
    faqs: [
      // 1. General Questions
      {
        q: "ما هو معهد الهاوس الدولي السعودية؟",
        a: "الهاوس الدولي السعودية هو جزء من منظمة الهاوس الدولي العالمية (IHWO)، وهي شبكة تحظى باحترام عالمي من مدارس اللغات ومراكز تدريب المعلمين.",
        cat: "general"
      },
      {
        q: "أين تقع مراكزكم؟",
        a: "نحن نخدم المتعلمين والمؤسسات حالياً من خلال مراكزنا وعملياتنا في الرياض، وجدة، والدمام/الظهران، بالإضافة إلى حلول التعلم عبر الإنترنت.",
        cat: "general"
      },
      // 2. Courses & Learning
      {
        q: "كيف أعرف مستواي في اللغة الإنجليزية؟",
        a: "يقدم فريقنا الأكاديمي اختبار تحديد مستوى لمساعدتك في تحديد الدورة الأكثر ملاءمة لمستواك الحالي وأهدافك.",
        cat: "courses"
      },
      {
        q: "هل تقدمون دروساً عبر الإنترنت؟",
        a: "نعم. نحن نقدم خيارات التعلم الحضوري (وجهاً لوجه)، وعبر الإنترنت، والتعليم المدمج (الهجين) اعتماداً على البرنامج.",
        cat: "courses"
      },
      {
        q: "هل تقدمون شهادات؟",
        a: "نعم. قد يحصل المتعلمون الذين يكملون بنجاح البرامج المؤهلة على شهادات إتمام معتمدة.",
        cat: "courses"
      },
      // 3. Corporate Training
      {
        q: "هل يمكن تقديم التدريب في مقر شركتنا؟",
        a: "نعم. يمكن تقديم برامج الشركات في مقرات العملاء، أو في مراكز الهاوس الدولي السعودية، أو عبر الإنترنت، أو من خلال حلول التعلم المدمج.",
        cat: "corporate"
      },
      {
        q: "هل يمكن تخصيص البرامج التدريبية؟",
        a: "نعم. يتم تصميم برامج الشركات حول الأهداف والمتمليات المحددة لكل مؤسسة.",
        cat: "corporate"
      },
      // 4. Examinations & Certification
      {
        q: "هل تقدمون برامج التحضير لاختبار آيلتس (IELTS)؟",
        a: "نعم. نحن نقدم برامج التحضير لاختبار آيلتس المصممة لمساعدة المتعلمين على تحقيق درجاتهم المستهدفة.",
        cat: "exams"
      },
      {
        q: "هل تدعمون المؤهلات الدولية الأخرى؟",
        a: "نعم. نحن نهدف إلى دعم مجموعة من المؤهلات المعترف بها دولياً ومسارات الشهادات المهنية.",
        cat: "exams"
      },
      // 5. Study Abroad
      {
        q: "هل تقدمون إرشادات للدراسة في الخارج؟",
        a: "نعم. نحن نقدم الاستشارات التعليمية والتوجيه فيما يتعلق بفرص التعلم الدولية ومسارات الدراسة في الخارج.",
        cat: "studyAbroad"
      },
      {
        q: "هل يمكنني الدراسة في مدارس الهاوس الدولي الأخرى؟",
        a: "اعتماداً على التوفر ومتطلبات البرنامج، قد يتاح للمتعلمين الوصول إلى فرص من خلال شبكة الهاوس الدولي والمؤسسات الشريكة.",
        cat: "studyAbroad"
      },
      // 6. Teacher Training
      {
        q: "هل تقدمون برامج لتطوير المعلمين؟",
        a: "نعم. نحن نقدم فرص التطوير المهني ومبادرات تدريب المعلمين المصممة لدعم التربويين في مراحل مختلفة من حياتهم المهنية.",
        cat: "teacherTraining"
      },
      {
        q: "هل ستتوفر مؤهلات إضافية للمعلمين في المستقبل؟",
        a: "يستمر معهد الهاوس الدولي السعودية في استكشاف الفرص لتوسيع عروض تدريب المعلمين والتطوير المهني.",
        cat: "teacherTraining"
      }
    ]
  }
};

export default function FAQPage() {
  const { lang, isRTL } = useLanguage();
  const c = content[lang] || content.en;

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Filters questions based on query and active Category selector
  const filteredFaqs = c.faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.cat === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ThemeAccent />

      {/* 1. High-End Help Center Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-100 text-blue-600 mb-6"
          >
            {c.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#002f6c]"
          >
            {c.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {c.hero.subtitle}
          </motion.p>
          
          {/* Visual Search input block inside hero */}
          <div className="relative mt-10 max-w-lg mx-auto">
            <input
              type="text"
              placeholder={lang === "ar" ? "ابحث بالكلمات المفتاحية (مثال: آيلتس، الشركات)..." : "Search by keyword (e.g. IELTS, Online)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4.5 pl-14 rtl:pl-6 rtl:pr-14 rounded-2xl border border-gray-200 focus:outline-none focus:border-blue-500 text-sm text-gray-800 bg-white shadow-sm transition-all focus:shadow-md"
            />
            <Search size={20} className="absolute left-5 rtl:left-auto rtl:right-5 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 2. Main Help Center Layout */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Sticky Sidebar Left */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              
              {/* Category Navigation Panel */}
              <div className="bg-white rounded-3xl border border-slate-150 p-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-4 px-2">
                  {lang === "ar" ? "تصفية حسب القسم" : "FILTER BY CATEGORY"}
                </span>
                
                {/* All Category Link */}
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setExpandedFaq(null);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                    activeCategory === "all"
                      ? "bg-slate-50 text-[#002f6c] border border-slate-200"
                      : "text-gray-600 hover:bg-slate-50/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={16} className={activeCategory === "all" ? "text-blue-600" : "text-gray-400"} />
                    <span>{c.categories.all}</span>
                  </div>
                  <span className="text-[10px] bg-slate-200/50 px-2 py-0.5 rounded-full font-bold text-gray-600">
                    {c.faqs.length}
                  </span>
                </button>

                {/* Individual Categories */}
                {Object.keys(categoriesConfig).map((key) => {
                  const item = categoriesConfig[key as keyof typeof categoriesConfig];
                  const IconComp = item.icon;
                  const count = c.faqs.filter(faq => faq.cat === key).length;
                  const isActive = activeCategory === key;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveCategory(key);
                        setExpandedFaq(null);
                      }}
                      className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-slate-50 text-[#002f6c] border border-slate-200"
                          : "text-gray-600 hover:bg-slate-50/50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComp size={16} className={isActive ? "text-blue-600" : "text-gray-400"} />
                        <span>{c.categories[key as keyof typeof c.categories]}</span>
                      </div>
                      <span className="text-[10px] bg-slate-200/50 px-2 py-0.5 rounded-full font-bold text-gray-600">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Advisory Card */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8 space-y-5 text-start">
                <span className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                  <MessageSquare size={20} />
                </span>
                <h3 className="text-sm font-extrabold text-gray-800">{c.contactCard.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed font-light">{c.contactCard.desc}</p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/966920000364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-3xs"
                  >
                    <MessageSquare size={14} />
                    {c.contactCard.btnChat}
                  </a>
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-[#002f6c] hover:bg-[#0050b3] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail size={14} />
                    {c.contactCard.btnMail}
                  </Link>
                </div>
              </div>
            </div>

            {/* Accordion Questions Right */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Grouped Accordions list */}
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, idx) => {
                    const globalIndex = c.faqs.indexOf(faq);
                    const isExpanded = expandedFaq === globalIndex;
                    const catInfo = categoriesConfig[faq.cat as keyof typeof categoriesConfig];
                    const IconComponent = catInfo ? catInfo.icon : HelpCircle;
                    
                    return (
                      <motion.div
                        key={globalIndex}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all duration-300 hover:border-slate-200"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full px-6 py-5 flex justify-between items-center text-start gap-4 focus:outline-none hover:bg-slate-50/20 transition-colors"
                        >
                          <div className="flex gap-4 items-center">
                            <span className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${catInfo ? catInfo.color : "text-gray-500 bg-gray-50 border-gray-100"}`}>
                              <IconComponent size={14} />
                            </span>
                            <span className="text-xs sm:text-sm font-extrabold text-gray-800">{faq.q}</span>
                          </div>
                          <ChevronDown
                            size={16}
                            className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className="overflow-hidden border-t border-slate-100"
                            >
                              <div className="p-6 pl-18 rtl:pl-6 rtl:pr-18 text-[11px] sm:text-xs text-gray-500 leading-relaxed font-light bg-slate-50/20">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-center py-16 bg-white rounded-3xl border border-slate-150 text-gray-400 text-sm">
                    {lang === "ar" ? "لم يتم العثور على أي نتائج تطابق استفسارك." : "No matching questions found in this category."}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
