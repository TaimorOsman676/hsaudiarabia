"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Plane,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  Upload,
  AlertCircle,
  ArrowLeft,
  Send,
  Loader2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ThemeAccent from "@/components/ThemeAccent";

/* ═══════════════════════════════════════════════════════════════════════
   TYPES & INTERFACES
   ═══════════════════════════════════════════════════════════════════════ */

type FormType = "student" | "teacher" | "study-abroad" | "corporate" | "quotation";

interface FormStates {
  student: {
    name: string;
    email: string;
    phone: string;
    ageGroup: string;
    branch: string;
    course: string;
    studyTime: string;
    message: string;
  };
  teacher: {
    name: string;
    email: string;
    phone: string;
    nationality: string;
    location: string;
    qualification: string;
    experience: string;
    position: string;
    cvFile: File | null;
    cvFileName: string;
    cover: string;
  };
  "study-abroad": {
    name: string;
    email: string;
    phone: string;
    destination: string;
    programType: string;
    duration: string;
    startDate: string;
    accommodation: string;
    message: string;
  };
  corporate: {
    companyName: string;
    contactName: string;
    businessEmail: string;
    phone: string;
    industry: string;
    learnersCount: string;
    trainingFocus: string;
    deliveryMode: string;
    message: string;
  };
  quotation: {
    name: string;
    email: string;
    phone: string;
    category: string;
    programName: string;
    message: string;
  };
}

const initialFormStates: FormStates = {
  student: {
    name: "",
    email: "",
    phone: "",
    ageGroup: "",
    branch: "",
    course: "",
    studyTime: "",
    message: "",
  },
  teacher: {
    name: "",
    email: "",
    phone: "",
    nationality: "",
    location: "",
    qualification: "",
    experience: "",
    position: "",
    cvFile: null,
    cvFileName: "",
    cover: "",
  },
  "study-abroad": {
    name: "",
    email: "",
    phone: "",
    destination: "",
    programType: "",
    duration: "",
    startDate: "",
    accommodation: "",
    message: "",
  },
  corporate: {
    companyName: "",
    contactName: "",
    businessEmail: "",
    phone: "",
    industry: "",
    learnersCount: "",
    trainingFocus: "",
    deliveryMode: "",
    message: "",
  },
  quotation: {
    name: "",
    email: "",
    phone: "",
    category: "",
    programName: "",
    message: "",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT WITH SUSPENSE BOUNDARY
   ═══════════════════════════════════════════════════════════════════════ */

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24">
        <Loader2 className="animate-spin text-[#002f6c]" size={40} />
      </div>
    }>
      <FormsPortalContent />
    </Suspense>
  );
}

function FormsPortalContent() {
  const { t, lang, isRTL } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Active form tab state
  const [activeTab, setActiveTab] = useState<FormType>("student");

  // Form states & submission status
  const [formStates, setFormStates] = useState<FormStates>(initialFormStates);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Sync tab with URL search parameter (?form=...)
  useEffect(() => {
    const formParam = searchParams.get("form");
    if (formParam && ["student", "teacher", "study-abroad", "corporate", "quotation"].includes(formParam)) {
      setActiveTab(formParam as FormType);
    }
  }, [searchParams]);

  // Handle Tab Switch
  const handleTabSwitch = (tab: FormType) => {
    setActiveTab(tab);
    setValidationErrors({});
    // Update URL query parameters
    const params = new URLSearchParams(window.location.search);
    params.set("form", tab);
    router.push(`${window.location.pathname}?${params.toString()}`, { scroll: false });
  };

  /* ─── Validation & Handlers ─── */
  const validateFields = (): boolean => {
    const errors: Record<string, string> = {};
    const commonReq = t("forms.common.required");

    if (activeTab === "student") {
      const f = formStates.student;
      if (!f.name.trim()) errors.name = commonReq;
      if (!f.email.trim()) errors.email = commonReq;
      if (!f.phone.trim()) errors.phone = commonReq;
      if (!f.ageGroup) errors.ageGroup = commonReq;
      if (!f.branch) errors.branch = commonReq;
      if (!f.course) errors.course = commonReq;
      if (!f.studyTime) errors.studyTime = commonReq;
    } else if (activeTab === "teacher") {
      const f = formStates.teacher;
      if (!f.name.trim()) errors.name = commonReq;
      if (!f.email.trim()) errors.email = commonReq;
      if (!f.phone.trim()) errors.phone = commonReq;
      if (!f.nationality.trim()) errors.nationality = commonReq;
      if (!f.location) errors.location = commonReq;
      if (!f.qualification) errors.qualification = commonReq;
      if (!f.experience) errors.experience = commonReq;
      if (!f.position) errors.position = commonReq;
      if (!f.cvFile) errors.cvFile = commonReq;
    } else if (activeTab === "study-abroad") {
      const f = formStates["study-abroad"];
      if (!f.name.trim()) errors.name = commonReq;
      if (!f.email.trim()) errors.email = commonReq;
      if (!f.phone.trim()) errors.phone = commonReq;
      if (!f.destination) errors.destination = commonReq;
      if (!f.programType) errors.programType = commonReq;
      if (!f.duration) errors.duration = commonReq;
      if (!f.startDate) errors.startDate = commonReq;
      if (!f.accommodation) errors.accommodation = commonReq;
    } else if (activeTab === "corporate") {
      const f = formStates.corporate;
      if (!f.companyName.trim()) errors.companyName = commonReq;
      if (!f.contactName.trim()) errors.contactName = commonReq;
      if (!f.businessEmail.trim()) errors.businessEmail = commonReq;
      if (!f.phone.trim()) errors.phone = commonReq;
      if (!f.industry) errors.industry = commonReq;
      if (!f.learnersCount) errors.learnersCount = commonReq;
      if (!f.trainingFocus) errors.trainingFocus = commonReq;
      if (!f.deliveryMode) errors.deliveryMode = commonReq;
    } else if (activeTab === "quotation") {
      const f = formStates.quotation;
      if (!f.name.trim()) errors.name = commonReq;
      if (!f.email.trim()) errors.email = commonReq;
      if (!f.phone.trim()) errors.phone = commonReq;
      if (!f.category) errors.category = commonReq;
      if (!f.programName.trim()) errors.programName = commonReq;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: any) => {
    setFormStates((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value,
      },
    }));

    // Clear error on modify
    if (validationErrors[field]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleInputChange("cvFile", file);
      handleInputChange("cvFileName", file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form states
      setFormStates(initialFormStates);
    }, 1200);
  };

  /* ─── Tabs Consolidated Configuration ─── */
  const tabs = [
    { id: "student", label: t("forms.tab.student"), icon: GraduationCap },
    { id: "teacher", label: t("forms.tab.teacher"), icon: Briefcase },
    { id: "study-abroad", label: t("forms.tab.abroad"), icon: Plane },
    { id: "corporate", label: t("forms.tab.corporate"), icon: Building2 },
    { id: "quotation", label: t("forms.tab.quotation"), icon: FileSpreadsheet },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50/60 pb-20">
      <ThemeAccent />

      {/* ─── Hero Header ─── */}
      <section className="relative bg-gradient-to-br from-slate-100 via-white to-slate-50 border-b border-slate-200 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,47,108,0.03)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#002f6c]">
            {t("forms.title")}
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 font-light leading-relaxed">
            {t("forms.subtitle")}
          </p>
        </div>
      </section>

      {/* ─── Main Portal Area ─── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Tab switchers (Desktop) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-sm space-y-2 sticky top-28">
            <h3 className="text-xs font-black tracking-widest text-[#002f6c] uppercase px-3 pb-2 border-b border-slate-100">
              {lang === "ar" ? "الفئات المتاحة" : "Available Categories"}
            </h3>
            <div className="flex flex-col gap-1.5 pt-2">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSwitch(tab.id as FormType)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all relative overflow-hidden group select-none text-start cursor-pointer ${
                      isActive
                        ? "text-white bg-[#002f6c] shadow-sm"
                        : "text-slate-600 hover:text-[#002f6c] hover:bg-slate-50 border border-transparent hover:border-slate-100"
                    }`}
                  >
                    <TabIcon size={18} className={`shrink-0 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-[#002f6c]"}`} />
                    <span className="flex-1">{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute right-0 top-0 bottom-0 w-1 bg-red-500"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="h-1.5 absolute top-0 left-0 right-0 bg-[#002f6c]" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {activeTab === "student" && (
                  <motion.div
                    key="student-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                      <GraduationCap className="text-red-500" />
                      {t("forms.tab.student")}
                    </h2>

                    {/* Full Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formStates.student.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.name ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                        {validationErrors.name && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formStates.student.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.email ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                        {validationErrors.email && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Age Group */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.phone")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +966 50 000 0000"
                          value={formStates.student.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all ${
                            validationErrors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                          }`}
                        />
                        {validationErrors.phone && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.student.age")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.student.ageGroup}
                          onChange={(e) => handleInputChange("ageGroup", e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer ${
                            validationErrors.ageGroup ? "border-red-500" : "border-slate-200"
                          }`}
                        >
                          <option value="">{t("forms.student.age.placeholder")}</option>
                          <option value="adult">{t("forms.student.age.adult")}</option>
                          <option value="young">{t("forms.student.age.young")}</option>
                        </select>
                        {validationErrors.ageGroup && (
                          <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                            <AlertCircle size={10} /> {validationErrors.ageGroup}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Branch & Course */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.student.branch")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.student.branch}
                          onChange={(e) => handleInputChange("branch", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.student.branch.placeholder")}</option>
                          <option value="dhahran">{lang === "ar" ? "فرع الظهران" : "Dhahran Branch"}</option>
                          <option value="dammam">{lang === "ar" ? "فرع الدمام" : "Dammam Branch"}</option>
                          <option value="jeddah">{lang === "ar" ? "فرع جدة" : "Jeddah Branch"}</option>
                          <option value="online">{lang === "ar" ? "عبر الإنترنت / افتراضي" : "Online / Virtual"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.student.course")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.student.course}
                          onChange={(e) => handleInputChange("course", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.student.course.placeholder")}</option>
                          <option value="general">{lang === "ar" ? "اللغة الإنجليزية العامة" : "General English"}</option>
                          <option value="business">{lang === "ar" ? "اللغة الإنجليزية للأعمال" : "Business English"}</option>
                          <option value="ielts">{lang === "ar" ? "التحضير لاختبار آيلتس" : "IELTS Preparation"}</option>
                          <option value="young-learners">{lang === "ar" ? "برامج الصغار والشباب" : "Young Learners Program"}</option>
                          <option value="arabic">{lang === "ar" ? "تعلم العربية مع IH" : "Learn Arabic with IH"}</option>
                          <option value="esp">{lang === "ar" ? "إنجليزية لأغراض خاصة (ESP)" : "English for Specific Purposes (ESP)"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Study Time */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.student.time")} <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formStates.student.studyTime}
                        onChange={(e) => handleInputChange("studyTime", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                      >
                        <option value="">{t("forms.student.time.placeholder")}</option>
                        <option value="morning">{t("forms.student.time.morning")}</option>
                        <option value="afternoon">{t("forms.student.time.afternoon")}</option>
                        <option value="evening">{t("forms.student.time.evening")}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.common.message")}
                      </label>
                      <textarea
                        rows={4}
                        value={formStates.student.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "teacher" && (
                  <motion.div
                    key="teacher-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                      <Briefcase className="text-red-500" />
                      {t("forms.tab.teacher")}
                    </h2>

                    {/* Full Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formStates.teacher.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formStates.teacher.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Phone & Nationality */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.phone")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formStates.teacher.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.teacher.nationality")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t("forms.teacher.nationality.placeholder")}
                          value={formStates.teacher.nationality}
                          onChange={(e) => handleInputChange("nationality", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Current Location & Highest Qualification */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.teacher.location")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.teacher.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.teacher.location.placeholder")}</option>
                          <option value="ksa">{t("forms.teacher.location.ksa")}</option>
                          <option value="abroad">{t("forms.teacher.location.abroad")}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.teacher.qualification")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.teacher.qualification}
                          onChange={(e) => handleInputChange("qualification", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.teacher.qualification.placeholder")}</option>
                          <option value="celta">CELTA</option>
                          <option value="delta">DELTA</option>
                          <option value="ma_tesol">MA TESOL / Linguistics</option>
                          <option value="ba_english">BA English / Education</option>
                          <option value="tefl_120">TEFL Certificate (120+ hours)</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Experience & Target Position */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.teacher.experience")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.teacher.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.teacher.experience.placeholder")}</option>
                          <option value="less_than_1">{t("forms.teacher.experience.less1")}</option>
                          <option value="1_to_3">{t("forms.teacher.experience.1to3")}</option>
                          <option value="3_to_5">{t("forms.teacher.experience.3to5")}</option>
                          <option value="5_plus">{t("forms.teacher.experience.5plus")}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.teacher.position")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.teacher.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.teacher.position.placeholder")}</option>
                          <option value="English Teacher">{lang === "ar" ? "معلم لغة إنجليزية" : "English Language Instructor"}</option>
                          <option value="Corporate ESP Trainer">{lang === "ar" ? "مدرب لغة إنجليزية للشركات" : "Corporate ESP Trainer"}</option>
                          <option value="CELTA Trainer">{lang === "ar" ? "مدرب دورات سيلتا معتمد" : "CELTA Teacher Trainer"}</option>
                          <option value="Academic Leader">{lang === "ar" ? "منسق / موجه أكاديمي" : "Academic Coordinator"}</option>
                          <option value="Advisor">{lang === "ar" ? "مستشار طلابي / شؤون تسجيل" : "Student Advisor / Registrar"}</option>
                        </select>
                      </div>
                    </div>

                    {/* CV File Upload */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.teacher.cv")} <span className="text-red-500">*</span>
                      </label>
                      <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-slate-50/30 hover:bg-slate-50 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required={!formStates.teacher.cvFile}
                          onChange={handleFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                        />
                        <Upload size={24} className="text-slate-400 group-hover:text-[#002f6c] mb-2 transition-colors" />
                        <p className="text-xs font-bold text-slate-700 mb-1">
                          {formStates.teacher.cvFileName ? (
                            <span className="text-green-600 flex items-center gap-1.5 justify-center">
                              <CheckCircle2 size={14} />
                              {t("forms.teacher.cv.uploaded")} {formStates.teacher.cvFileName}
                            </span>
                          ) : (
                            t("forms.teacher.cv.desc")
                          )}
                        </p>
                        <p className="text-[10px] text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                      {validationErrors.cvFile && (
                        <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                          <AlertCircle size={10} /> {validationErrors.cvFile}
                        </p>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.teacher.cover")}
                      </label>
                      <textarea
                        rows={4}
                        value={formStates.teacher.cover}
                        onChange={(e) => handleInputChange("cover", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "study-abroad" && (
                  <motion.div
                    key="study-abroad-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                      <Plane className="text-red-500" />
                      {t("forms.tab.abroad")}
                    </h2>

                    {/* Full Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formStates["study-abroad"].name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formStates["study-abroad"].email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Phone & Destination */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.phone")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formStates["study-abroad"].phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.abroad.destination")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates["study-abroad"].destination}
                          onChange={(e) => handleInputChange("destination", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.abroad.destination.placeholder")}</option>
                          <option value="UK">{lang === "ar" ? "المملكة المتحدة" : "United Kingdom"}</option>
                          <option value="US">{lang === "ar" ? "الولايات المتحدة الأمريكية" : "United States"}</option>
                          <option value="Canada">{lang === "ar" ? "كندا" : "Canada"}</option>
                          <option value="Australia">{lang === "ar" ? "أستراليا" : "Australia"}</option>
                          <option value="France">{lang === "ar" ? "فرنسا" : "France"}</option>
                          <option value="Spain">{lang === "ar" ? "إسبانيا" : "Spain"}</option>
                          <option value="Germany">{lang === "ar" ? "ألمانيا" : "Germany"}</option>
                          <option value="Italy">{lang === "ar" ? "إيطاليا" : "Italy"}</option>
                          <option value="South Africa">{lang === "ar" ? "جنوب أفريقيا" : "South Africa"}</option>
                          <option value="UAE">{lang === "ar" ? "الإمارات العربية المتحدة" : "United Arab Emirates"}</option>
                        </select>
                      </div>
                    </div>

                    {/* Program Type & Intended Duration */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.abroad.program")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates["study-abroad"].programType}
                          onChange={(e) => handleInputChange("programType", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.abroad.program.placeholder")}</option>
                          <option value="general">{lang === "ar" ? "برامج اللغة العامة" : "General English Programs"}</option>
                          <option value="intensive">{lang === "ar" ? "دورات لغة مكثفة" : "Intensive Language Courses"}</option>
                          <option value="summer">{lang === "ar" ? "مخيم صيفي للشباب" : "Summer Youth Programs"}</option>
                          <option value="university">{lang === "ar" ? "تأهيل وقبول جامعي" : "University Foundation Prep"}</option>
                          <option value="exams">{lang === "ar" ? "تحضير للاختبارات الدولية" : "International Exam Prep"}</option>
                          <option value="teacher_training">{lang === "ar" ? "تطوير المعلمين (CELTA)" : "Teacher Development (CELTA)"}</option>
                          <option value="exchange">{lang === "ar" ? "تبادل ثقافي" : "Cultural Exchange"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.abroad.duration")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates["study-abroad"].duration}
                          onChange={(e) => handleInputChange("duration", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.abroad.duration.placeholder")}</option>
                          <option value="2_4_weeks">{t("forms.abroad.duration.2to4w")}</option>
                          <option value="1_3_months">{t("forms.abroad.duration.1to3m")}</option>
                          <option value="3_6_months">{t("forms.abroad.duration.3to6m")}</option>
                          <option value="6_months_plus">{t("forms.abroad.duration.6mplus")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Start Date & Accommodation */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.abroad.date")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formStates["study-abroad"].startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.abroad.accommodation")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates["study-abroad"].accommodation}
                          onChange={(e) => handleInputChange("accommodation", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.abroad.accommodation.placeholder")}</option>
                          <option value="homestay">{t("forms.abroad.accommodation.homestay")}</option>
                          <option value="residence">{t("forms.abroad.accommodation.residence")}</option>
                          <option value="apartment">{t("forms.abroad.accommodation.apartment")}</option>
                          <option value="none">{t("forms.abroad.accommodation.none")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.common.message")}
                      </label>
                      <textarea
                        rows={4}
                        value={formStates["study-abroad"].message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "corporate" && (
                  <motion.div
                    key="corporate-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                      <Building2 className="text-red-500" />
                      {t("forms.tab.corporate")}
                    </h2>

                    {/* Company Name & Contact Person */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.company")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t("forms.corporate.company.placeholder")}
                          value={formStates.corporate.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.contact")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t("forms.corporate.contact.placeholder")}
                          value={formStates.corporate.contactName}
                          onChange={(e) => handleInputChange("contactName", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Business Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t("forms.corporate.email.placeholder")}
                          value={formStates.corporate.businessEmail}
                          onChange={(e) => handleInputChange("businessEmail", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.phone")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formStates.corporate.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Industry Sector & Number of Learners */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.industry")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.corporate.industry}
                          onChange={(e) => handleInputChange("industry", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.corporate.industry.placeholder")}</option>
                          <option value="oil_gas">{lang === "ar" ? "النفط والغاز / البتروكيماويات" : "Oil & Gas / Energy"}</option>
                          <option value="healthcare">{lang === "ar" ? "الرعاية الصحية والخدمات الطبية" : "Healthcare & Medical"}</option>
                          <option value="finance">{lang === "ar" ? "المالية والمصرفية" : "Banking & Finance"}</option>
                          <option value="engineering">{lang === "ar" ? "الهندسة والإنشاءات" : "Engineering & Construction"}</option>
                          <option value="government">{lang === "ar" ? "القطاع الحكومي" : "Government & Public"}</option>
                          <option value="it">{lang === "ar" ? "تقنية المعلومات والاتصالات" : "IT & Telecom"}</option>
                          <option value="hospitality">{lang === "ar" ? "الضيافة والسياحة" : "Hospitality & Tourism"}</option>
                          <option value="other">{lang === "ar" ? "قطاعات أخرى" : "Other Sector"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.learners")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          required
                          min="1"
                          placeholder={t("forms.corporate.learners.placeholder")}
                          value={formStates.corporate.learnersCount}
                          onChange={(e) => handleInputChange("learnersCount", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Training Focus & Delivery format */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.focus")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.corporate.trainingFocus}
                          onChange={(e) => handleInputChange("trainingFocus", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.corporate.focus.placeholder")}</option>
                          <option value="business_english">{lang === "ar" ? "إنجليزية الأعمال" : "Business English"}</option>
                          <option value="technical_esp">{lang === "ar" ? "الإنجليزية الفنية والتخصصية" : "Technical & ESP English"}</option>
                          <option value="placement_testing">{lang === "ar" ? "اختبارات التحديد والتدقيق" : "Language Auditing & Assessment"}</option>
                          <option value="exam_prep">{lang === "ar" ? "التحضير للاختبارات الدولية" : "IELTS/Cambridge Exam Prep"}</option>
                          <option value="teacher_upskilling">{lang === "ar" ? "تطوير وتأهيل معلمي اللغة" : "Teacher Upskilling"}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.corporate.delivery")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.corporate.deliveryMode}
                          onChange={(e) => handleInputChange("deliveryMode", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.corporate.delivery.placeholder")}</option>
                          <option value="onsite">{t("forms.corporate.delivery.onsite")}</option>
                          <option value="virtual">{t("forms.corporate.delivery.virtual")}</option>
                          <option value="blended">{t("forms.corporate.delivery.blended")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Requirements Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.common.message")}
                      </label>
                      <textarea
                        rows={4}
                        value={formStates.corporate.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "quotation" && (
                  <motion.div
                    key="quotation-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#002f6c] mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
                      <FileSpreadsheet className="text-red-500" />
                      {t("forms.tab.quotation")}
                    </h2>

                    {/* Full Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.name")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formStates.quotation.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.email")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formStates.quotation.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Phone & Inquiry Category */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.common.phone")} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formStates.quotation.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                          {t("forms.quotation.category")} <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formStates.quotation.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          <option value="">{t("forms.quotation.category.placeholder")}</option>
                          <option value="individual">{t("forms.quotation.category.individual")}</option>
                          <option value="corporate">{t("forms.quotation.category.corporate")}</option>
                          <option value="exam">{t("forms.quotation.category.exam")}</option>
                          <option value="celta">{t("forms.quotation.category.celta")}</option>
                          <option value="abroad">{t("forms.quotation.category.abroad")}</option>
                        </select>
                      </div>
                    </div>

                    {/* Program/Exam Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.quotation.program")} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("forms.quotation.program.placeholder")}
                        value={formStates.quotation.programName}
                        onChange={(e) => handleInputChange("programName", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Specific Requirements Message */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                        {t("forms.common.message")}
                      </label>
                      <textarea
                        rows={4}
                        value={formStates.quotation.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-gray-800 bg-slate-50/50 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-[#002f6c] to-blue-800 hover:to-blue-700 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 select-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      <span>{lang === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>{t("forms.common.submit")}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* ─── Success Modal Overlay ─── */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-[32px] border border-slate-100 p-8 sm:p-12 text-center max-w-md w-full relative shadow-[0_32px_64px_rgba(0,0,0,0.18)]"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#002f6c] mb-3">
                {t("forms.common.success.title")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light mb-8">
                {t("forms.common.success.desc")}
              </p>
              
              <button
                onClick={() => {
                  setIsSuccess(false);
                  router.push("/");
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm rounded-xl cursor-pointer border border-slate-200/50"
              >
                <ArrowLeft size={16} className={isRTL ? "rotate-180" : ""} />
                {t("forms.common.success.btn")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
