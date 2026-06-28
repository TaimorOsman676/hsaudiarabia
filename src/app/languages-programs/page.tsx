"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";
import { motion } from "framer-motion";
import { BookOpen, Compass, Globe, Sparkles, Languages, CheckCircle2, Landmark, GraduationCap } from "lucide-react";

const content = {
  en: {
    hero: {
      tag: "Cultural Understanding Through Language",
      title: "Languages & Cultural Programs",
      subtitle: "Connecting Saudi Arabia with the world through comprehensive language training and cross-cultural workshops."
    },
    sections: {
      arabic: {
        title: "Arabic Language & Cultural Studies",
        subtitle: "Modern Standard Arabic & Dialect Training",
        desc: "Designed for expatriates, corporate teams, and diplomatic staff, our Arabic programs offer a comprehensive gateway to communicating effectively and understanding local customs in Saudi Arabia. We combine language instruction with cultural immersion experiences to ensure practical fluency.",
        features: ["Modern Standard Arabic (MSA) for formal contexts", "Saudi Dialect (Hejazi, Najdi) for daily interactions", "Business Arabic for professional meetings and negotiations", "Cultural etiquette, customs, and history modules"]
      },
      french: {
        title: "French Language Programs",
        subtitle: "Parlez-vous Français?",
        desc: "French language programs are designed for learners of all levels, from absolute beginners to advanced speakers. Our curriculum focuses on communicative competence, preparing you for academic study, professional opportunities, or international examinations.",
        features: ["Bilingual courses aligned with CEFRL standards", "DELF/DALF international exam preparation", "Business French for corporate communications", "Interactive conversation workshops"]
      },
      spanish: {
        title: "Spanish Language Programs",
        subtitle: "Aprende Español",
        desc: "Spanish is one of the most widely spoken languages in the world. Our interactive classes utilize modern communicative methodologies to build conversational confidence, grammar accuracy, and vocabulary depth.",
        features: ["General Spanish programs (Levels A1 to C2)", "DELE examination preparation", "Travel and tourism conversational preparation", "Spanish for Business"]
      },
      chinese: {
        title: "Chinese Language Programs",
        subtitle: "Mandarin Chinese for Global Trade",
        desc: "As Mandarin Chinese grows in global economic importance, our specialized courses provide corporate professionals and students with key language skills, vocabulary, and cultural insights required for international business.",
        features: ["Mandarin Chinese fundamentals and pronunciation", "HSK standardized exam preparation", "Chinese Business Etiquette and Negotiation", "Conversational fluency programs"]
      },
      additional: {
        title: "Additional World Languages",
        subtitle: "Broaden Your Horizons",
        desc: "We offer tailored training solutions in several other major global languages, delivering standard CEFRL-aligned courses with certified instructors.",
        languagesList: [
          { name: "German (Deutsch)", img: "/lang_german.png" },
          { name: "Italian (Italiano)", img: "/lang_italian.png" },
          { name: "Japanese (日本語)", img: "/lang_japanese.png" },
          { name: "Korean (한국어)", img: "/lang_korean.png" },
          { name: "Turkish (Türkçe)", img: "/lang_turkish.png" }
        ]
      },
      cultural: {
        title: "Cultural Learning & International Experiences",
        subtitle: "Bridging Communities and Traditions",
        desc: "Effective communication goes beyond language vocabulary. Our cultural workshops prepare international professionals to operate smoothly in the Kingdom and help Saudi students navigate cultural changes during their study abroad journeys.",
        features: ["Expatriate Relocation and Saudi Cultural Onboarding", "Cross-Cultural Workshops for Corporate Teams", "Pre-departure briefings for study abroad programs", "Bilingual exchange events and community programs"]
      }
    }
  },
  ar: {
    hero: {
      tag: "الفهم الثقافي من خلال اللغة",
      title: "برامج اللغات والثقافة",
      subtitle: "ربط المملكة العربية السعودية بالعالم من خلال تدريب اللغات الشامل وورش العمل بين الثقافات."
    },
    sections: {
      arabic: {
        title: "اللغة العربية والدراسات الثقافية",
        subtitle: "تدريب على العربية الفصحى الحديثة واللهجة المحلية",
        desc: "تم تصميم برامج اللغة العربية للمغتربين وفرق الشركات والموظفين الدبلوماسيين، لتوفر مدخلاً شاملاً للتواصل الفعال وفهم العادات المحلية في المملكة. نحن نجمع بين تعليم اللغة وخبرات الانغماس الثقافي لضمان الطلاقة العملية.",
        features: ["العربية الفصحى الحديثة (MSA) للسياقات الرسمية", "اللهجة السعودية (الحجازية، النجدية) للتفاعلات اليومية", "العربية للأعمال للاجتماعات والمفاوضات المهنية", "وحدات حول الآداب الثقافية والعادات والتاريخ"]
      },
      french: {
        title: "برامج اللغة الفرنسية",
        subtitle: "تحدث الفرنسية بطلاقة",
        desc: "تم تصميم برامج اللغة الفرنسية للمتعلمين من جميع المستويات، من المبتدئين تماماً إلى المتحدثين المتقدمين. يركز منهجنا على الكفاءة التواصلية، وإعدادك للدراسة الأكاديمية، الفرص المهنية، أو الامتحانات الدولية.",
        features: ["دورات ثنائية اللغة متوافقة مع معايير CEFRL", "التحضير لاختبارات DELF/DALF الدولية", "الفرنسية للأعمال للتواصل المؤسسي", "ورش عمل محادثة تفاعلية"]
      },
      spanish: {
        title: "برامج اللغة الإسبانية",
        subtitle: "تعلم اللغة الإسبانية",
        desc: "تعد الإسبانية واحدة من أكثر اللغات انتشاراً في العالم. تستخدم فصولنا التفاعلية منهجيات تواصل حديثة لبناء الثقة في المحادثة، ودقة القواعد، وعمق المفردات.",
        features: ["برامج الإسبانية العامة (المستويات A1 إلى C2)", "التحضير لاختبارات DELE الدولية", "التحضير للمحادثة الخاصة بالسفر والسياحة", "الإسبانية للأعمال المهنية"]
      },
      chinese: {
        title: "برامج اللغة الصينية",
        subtitle: "اللغة الصينية الماندرين للتجارة العالمية",
        desc: "مع نمو الأهمية الاقتصادية العالمية للصينية الماندرين، توفر دوراتنا المتخصصة لمهنيي الشركات والطلاب المهارات اللغوية والمفردات والرؤى الثقافية المطلوبة للأعمال الدولية.",
        features: ["أساسيات لغة الماندرين الصينية والنطق السليم", "التحضير لاختبار HSK المعياري", "آداب العمل والمفاوضات الصينية", "برامج الطلاقة في المحادثة"]
      },
      additional: {
        title: "لغات عالمية إضافية",
        subtitle: "وسّع آفاقك المعرفية",
        desc: "نحن نقدم حلول تدريب مخصصة في العديد من اللغات العالمية الكبرى الأخرى، مع تقديم دورات معيارية متوافقة مع CEFRL مع مدربين معتمدين.",
        languagesList: [
          { name: "الألمانية (Deutsch)", img: "/lang_german.png" },
          { name: "الإيطالية (Italiano)", img: "/lang_italian.png" },
          { name: "اليابانية (日本語)", img: "/lang_japanese.png" },
          { name: "الكورية (한국어)", img: "/lang_korean.png" },
          { name: "التركية (Türkçe)", img: "/lang_turkish.png" }
        ]
      },
      cultural: {
        title: "التعلم الثقافي والتجارب الدولية",
        subtitle: "جسر يربط المجتمعات والتقاليد",
        desc: "يتجاوز التواصل الفعال مجرد مفردات اللغة. تجهز ورش العمل الثقافية المهنيين الدوليين للعمل بسلاسة في المملكة وتساعد الطلاب السعوديين على التكيف مع التغييرات الثقافية أثناء رحلات دراستهم في الخارج.",
        features: ["توجيه المغتربين والتهيئة الثقافية السعودية", "ورش عمل التفاعل بين الثقافات لفرق الشركات", "جلسات إرشادية قبل المغادرة لبرامج الدراسة بالخارج", "فعاليات التبادل اللغوي ثنائي اللغة والبرامج المجتمعية"]
      }
    }
  }
};

export default function LanguagesPage() {
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
            {c.hero.tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#002f6c]"
          >
            {c.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {c.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Language Section Wrapper */}
      <div className="space-y-16 py-20 lg:py-24">
        {/* Arabic Studies */}
        <section id="arabic" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.arabic.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.arabic.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.arabic.desc}
              </p>
              <ul className="space-y-3">
                {c.sections.arabic.features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#cf1430] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/lang_arabic.png" alt="Arabic Language studies" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* French Programs */}
        <section id="french" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.french.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.french.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.french.desc}
              </p>
              <ul className="space-y-3">
                {c.sections.french.features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#cf1430] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/lang_french.png" alt="French Language studies" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* Spanish Programs */}
        <section id="spanish" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.spanish.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.spanish.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.spanish.desc}
              </p>
              <ul className="space-y-3">
                {c.sections.spanish.features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#cf1430] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/lang_spanish.png" alt="Spanish Language studies" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* Chinese Programs */}
        <section id="chinese" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="lg:order-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.chinese.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.chinese.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.chinese.desc}
              </p>
              <ul className="space-y-3">
                {c.sections.chinese.features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#cf1430] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/lang_chinese.png" alt="Chinese Language studies" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>

        {/* Additional Languages */}
        <section id="additional" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm"
          >
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-2">
                {c.sections.additional.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-4">
                {c.sections.additional.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {c.sections.additional.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {c.sections.additional.languagesList.map((langItem, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden text-center flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden shrink-0">
                    <Image src={langItem.img} alt={langItem.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 flex-grow flex items-center justify-center gap-2">
                    <Languages size={16} className="text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-gray-800">{langItem.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Cultural Learning */}
        <section id="cultural" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-150 shadow-sm grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest block mb-3">
                {c.sections.cultural.subtitle}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#002f6c] mb-6">
                {c.sections.cultural.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                {c.sections.cultural.desc}
              </p>
              <ul className="space-y-3">
                {c.sections.cultural.features.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-[#cf1430] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/values_mission.png" alt="Cultural Exchange learning" fill className="object-cover pointer-events-none" />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
