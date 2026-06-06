"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle, Users, Clock, BookOpen, Globe,
  Star, Award, TrendingUp, MessageSquare, Monitor, FileCheck,
  ChevronRight, Phone, Mail, Sparkles, AlertCircle
} from "lucide-react";
import { fadeUp } from "@/utils/animations";
import ThemeAccent from "@/components/ThemeAccent";

/* ─── 1. ENGLISH FOR COMPANIES VIEW ──────────────────────────────── */
export const companiesData = {
  en: {
    hero: {
      title: "English for Companies",
      tagline: "Elevate your workforce. Power your business forward.",
      badge: "Corporate Solutions",
    },
    whoWeWorkWith: {
      title: "Who We Work With",
      subtitle: "Trusted by Saudi Industry Leaders",
      text1: "IH Saudi Arabia works with a vast range of companies from those in the energy industry and utilities to those in banking and finance.",
      text2: "Our client feedback is excellent and over three decades; IH Saudi Arabia has established a loyal client base even as it continues to expand into new sectors.",
      text3: "We teach English online and face to face in client training centers.",
      sectors: [
        { name: "Energy & Utilities", desc: "Technical communication for petrochemical, oil, gas, and utility sectors." },
        { name: "Banking & Finance", desc: "Professional English for financial analysts, investment firms, and banks." },
        { name: "Logistics & Aviation", desc: "Operational English for global supply chains, transport, and aviation." },
        { name: "Manufacturing & Construction", desc: "Safety-first technical English for factories and site engineering." },
        { name: "Tourism & Hospitality", desc: "Guest-facing communication for Saudi Arabia's booming tourism sector." },
        { name: "Medical & Banking", desc: "Specialist terminology for healthcare professionals and corporate banking." }
      ]
    },
    solutions: {
      title: "Customized Language Solutions",
      subtitle: "Tailored to Your Corporate Goals",
      text1: "IH Saudi Arabia offers flexible training methods for each client’s needs. These include face to face classes, blended learning, and online virtual classes so that your employees can study English 24/7 whenever they wish and wherever they are.",
      text2: "The course’s delivery method isn’t the only thing that is based on client need; it is also the training content itself.",
      text3: "IH programs are competency based to give employees the practical skills they need to achieve better job performance. Whether our instructors teach at your facilities, the employees learn at the location of IH Saudi Arabia, or they study in an online virtual class – the learning outcomes that add value through better job performance are all aligned to your corporate goals.",
      text4: "IH Saudi Arabia offers 6 levels of General English, Business English, Technical English (Beginner to Advance) for Saudi companies, although courses very often need to be designed according to the learners’ professional needs. While these requirements may relate to business communication skills like writing emails, technical report writing, giving presentations, and telephoning, they might also mean specialist programs in areas like the oil and gas industry, logistics, aviation, manufacturing, construction, security, tourism and hospitality, medical English, and banking.",
      text5: "Regardless of the method of course delivery or course content, IH Saudi Arabia will work with you from the outset to achieve shared goals.",
      text6: "IH’s decades of experience in Saudi Arabia working at the heart of Saudi industry where we have trained thousands of learners means that our organization understands your business environment."
    },
    overview: {
      title: "In-Company Programs Overview",
      subtitle: "Comprehensive Language Development",
      text1: "IH Saudi Arabia offers multi-level Business English, Technical English, and specialist programs to suit individual professions.",
      text2: "For those classes that are from very diverse job backgrounds, or for low level learners who simply require basic language acquisition, General English programs are also available on a stand-alone or support basis for a wider ESP-focused curriculum.",
      text3: "Whichever option is finally agreed upon, it will be the result of consultation, needs analysis, and a client centered approach to meeting shared goals. The training plan will be comprehensive offering practical solutions to your needs in key areas like program objectives, curriculum design, materials selection, supplementary support like remedial classes to reduce risk, benchmarking with your company’s job competency framework, and assessment.",
      text4: "All IH programs are subject to both our organization’s internal quality checks, and IH Saudi Arabia welcomes ongoing feedback from clients throughout the program."
    },
    generalEnglish: {
      title: "General English Program",
      desc: "There are 6 IH levels benchmarked to the Common European Framework, or CEF. There are 6 Levels of English available up to C1. As per standard client requirements, IH Saudi Arabia offers 6 levels of General English, Business English, and Technical English for companies from A1 to C1 which is from Beginner to Lower Advanced. We use Oxford and Cambridge English teaching materials for the General English and Business English courses. Each ability band is 120 hours of direct contact teaching either online in a virtual class or in the client’s training center. Full time courses are usually for 1 month."
    },
    onlineClasses: {
      title: "Online / Virtual Classes",
      desc: "International House Saudi Arabia Online General English Classes for the public. Learn English online and certify your language skills to take your ambitions to the next level. Learn with one of the most prestigious language teaching organizations in the world and improve your Speaking, Reading, Writing, and Listening skills at all levels. Courses are available for both Saudi male and female learners. Certify your English skills with a prestigious International House qualification. International House, established in 1953, is one of the largest language teaching organizations in the world with 140 schools in over 45 countries. International House Saudi Arabia has operated in the Kingdom for over 30 years where it has helped tens of thousands of learners to achieve their true potential. Now, following our 12-level online learning system, you can study English in an online live class with an instructor who will support and motivate you to even greater success from the comfort of your own home.",
      subTitle: "Online English Benchmarking System",
      subDesc: "International House Saudi Arabia offers certified General English online courses that are recognized by Saudi industry. Certifying your English language skills with IH Saudi Arabia is a vital step in ensuring that you have met the language requirements of today’s job market.",
      statTitle: "Saudi Employment Insights",
      stat1: "Over 80% of Saudi employers say they require new employees to have English skills.",
      stat2: "Major employers such as SABIC and Aramco are constantly recruiting new Saudi employees, but in most cases, the majority of companies in Saudi Arabia now require new hires to have proven English language skills."
    },
    outcomes: {
      title: "Learning Outcomes",
      subtitle: "You will be able to:",
      items: [
        "Communicate more fluently",
        "Improve your accuracy",
        "Use strategies and techniques to develop all four skills – listening, reading, writing and speaking (including pronunciation)",
        "Feel more confident in English-speaking environments and interacting with other English speakers."
      ]
    },
    content: {
      title: "Course Content",
      items: [
        "Teachers adapt the course for the needs and level of each class.",
        "Regular individual tutorials with your teacher help you to achieve your learning goals.",
        "Working with other students develops your communication skills through class discussions and project work.",
        "Develop your grammar and vocabulary.",
        "Use a wide range of motivating materials including digital resources and course books."
      ]
    },
    portfolio: {
      title: "Our Training Portfolios",
      subtitle: "Tailored educational products for companies and individuals",
      items: [
        {
          title: "General English",
          desc: "6 levels benchmarked to CEFR (A1 to C1) using Oxford and Cambridge materials. 120 contact hours per ability band.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Online Classes",
          desc: "12-level system with live native instructors. Maximum 13 students per small virtual class. Subscription plans available.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "IELTS Training",
          desc: "60 or 120 hours of focused preparation. Tailored study plans focusing on writing, speaking, and test techniques.",
          shadow: "shadow-ih-purple",
          color: "#8b3275",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Private Tuition",
          desc: "General English IH levels 1a-12b, Saudi High School curriculum support (Grades 10-12), and Math tuition.",
          shadow: "shadow-ih-coral",
          color: "#e85d4a",
          img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Exam Classes",
          desc: "Cambridge prep for children (Starters, Movers, Flyers, A2/B1 Preliminary) and adults. 15-25 hours per week.",
          shadow: "shadow-ih-yellow",
          color: "#f6c96a",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    steps: {
      title: "Take the Next Step",
      subtitle: "Our simple onboarding process to start learning",
      list: [
        { step: "Step 1", title: "Free Consultation", desc: "Contact IH Saudi Arabia for a free academic consultation." },
        { step: "Step 2", title: "Placement Test", desc: "IH will arrange for you to take our online placement test which is totally free." },
        { step: "Step 3", title: "Select Start Date", desc: "Once you have registered, choose your start date. Courses begin each Sunday." },
        { step: "Step 4", title: "Choose Timetable", desc: "Select a timetable that best suits you. Classes run from 8am to 9pm daily." },
        { step: "Step 5", title: "Group Allocation", desc: "Get allocated to a study group based on your level of English and schedule." },
        { step: "Step 6", title: "Receive Class Link", desc: "IH administration will email your first 24-hour active virtual class link in the evening." },
        { step: "Step 7", title: "Certify Achievement", desc: "Complete your 60-hour course, pass assessments, and receive your IH Certificate." }
      ]
    },
    essentialInfo: {
      title: "Essential Information",
      study: "Study: General English Online",
      levels: "IH Levels: 1A-12B | Ages: 17+",
      cert: "Certification: All Levels",
      teachers: "Teachers: UK, USA and fully certified & experienced.",
      classSize: "Class Size: Maximum 13 students in virtual classes.",
      subPlans: "Monthly Subscription Plans & Part/Full-Time classes are available."
    }
  },
  ar: {
    hero: {
      title: "الإنجليزية للشركات",
      tagline: "رفّع كفاءة موظفيك. قدّم أعمالك للأمام.",
      badge: "حلول الشركات والمؤسسات",
    },
    whoWeWorkWith: {
      title: "الجهات التي نعمل معها",
      subtitle: "موثوقون من قبل رواد الصناعة السعودية",
      text1: "تعمل الهاوس الدولي السعودية مع مجموعة واسعة من الشركات، بدءاً من قطاعات الطاقة والمرافق الخدمية إلى القطاعات المصرفية والمالية.",
      text2: "تقييمات عملائنا ممتازة؛ وعلى مدار ثلاثة عقود، نجحت الهاوس الدولي السعودية في بناء قاعدة عملاء مخلصة بالتزامن مع توسعها المستمر في قطاعات جديدة.",
      text3: "نحن ندرس اللغة الإنجليزية عبر الإنترنت وحضورياً في مراكز التدريب الخاصة بالعملاء.",
      sectors: [
        { name: "الطاقة والمرافق", desc: "التواصل التقني لقطاعات البتروكيماويات والنفط والغاز والمرافق العامة." },
        { name: "الخدمات المصرفية والمالية", desc: "اللغة الإنجليزية المهنية للمحللين الماليين وشركات الاستثمار والبنوك." },
        { name: "الخدمات اللوجستية والطيران", desc: "الإنجليزية التشغيلية لسلاسل التوريد العالمية والنقل والطيران." },
        { name: "التصنيع والتشييد", desc: "الإنجليزية الفنية مع التركيز على السلامة للمصانع وهندسة المواقع." },
        { name: "السياحة والضيافة", desc: "التواصل المباشر مع الضيوف لقطاع السياحة الواعد في المملكة." },
        { name: "الطبية والخدمات البنكية الخاصة", desc: "المصطلحات التخصصية لمتخصصي الرعاية الصحية والخدمات المصرفية للشركات." }
      ]
    },
    solutions: {
      title: "حلول لغوية مخصصة",
      subtitle: "مصممة لتتوافق مع أهداف شركتكم",
      text1: "تقدم الهاوس الدولي السعودية طرق تدريب مرنة تناسب احتياجات كل عميل. ويشمل ذلك الفصول الحضورية والتعليم المدمج والفصول الافتراضية عبر الإنترنت ليتمكن موظفوكم من دراسة الإنجليزية على مدار الساعة طوال أيام الأسبوع في أي وقت وأي مكان.",
      text2: "طريقة تقديم الدورة ليست الشيء الوحيد المعتمد على حاجة العميل؛ بل يشمل ذلك المحتوى التدريبي نفسه.",
      text3: "برامج الهاوس الدولي قائمة على الجدارات لتزويد الموظفين بالمهارات العملية اللازمة لتحسين أدائهم الوظيفي. وسواء قام مدربونا بالتدريس في منشآتكم، أو تعلم الموظفون في مقرات الهاوس الدولي السعودية، أو درسوا في فصول افتراضية - فإن جميع مخرجات التعلم التي تضيف قيمة للأداء الوظيفي تتماشى تماماً مع أهداف شركتكم.",
      text4: "تقدم الهاوس الدولي السعودية 6 مستويات من اللغة الإنجليزية العامة، وإنجليزي الأعمال والإنجليزية التقنية (من المبتدئ إلى المتقدم) للشركات السعودية، على الرغم من أن الدورات غالباً ما يتم تصميمها وفقاً للاحتياجات المهنية للمتدربين. وقد تتعلق هذه المتطلبات بمهارات التواصل في الأعمال مثل كتابة رسائل البريد الإلكتروني، وكتابة التقارير الفنية، وتقديم العروض التقديمية، والمحادثات الهاتفية، أو برامج تخصصية في مجالات مثل قطاع النفط والغاز، والخدمات اللوجستية، والطيران، والتصنيع، والتشييد، والأمن، والسياحة والضيافة، والإنجليزية الطبية، والخدمات المصرفية.",
      text5: "بغض النظر عن طريقة تقديم الدورة أو محتواها، ستعمل الهاوس الدولي السعودية معكم منذ البداية لتحقيق أهدافنا المشتركة.",
      text6: "إن عقود الخبرة الطويلة التي تمتلكها الهاوس الدولي في المملكة العربية السعودية بالعمل في قلب الصناعة السعودية، حيث دربنا آلاف المتعلمين، تعني أن مؤسستنا تتفهم تماماً بيئة أعمالكم."
    },
    overview: {
      title: "نظرة عامة على البرامج الداخلية للشركات",
      subtitle: "تطوير لغوي شامل ومتكامل",
      text1: "تقدم الهاوس الدولي السعودية برامج متعددة المستويات في إنجليزية الأعمال والإنجليزية التقنية والبرامج التخصصية لتناسب المهن الفردية.",
      text2: "بالنسبة للفصول ذات الخلفيات الوظيفية المتنوعة، أو للمتعلمين ذوي المستويات المبتدئة الذين يحتاجون ببساطة إلى اكتساب اللغة الأساسية، تتوفر أيضاً برامج اللغة الإنجليزية العامة بشكل مستقل أو كدعم لمنهج أوسع يركز على اللغة الإنجليزية لأغراض خاصة (ESP).",
      text3: "أياً كان الخيار الذي يتم الاتفاق عليه في النهاية، فإنه سيكون ثمرة الاستشارة وتحليل الاحتياجات والنهج المتمحور حول العميل لتحقيق الأهداف المشتركة. ستكون الخطة التدريبية شاملة وتقدم حلولاً عملية لاحتياجاتكم في مجالات رئيسية مثل أهداف البرنامج، وتصميم المناهج الدراسية، واختيار المواد التدريبية، والدعم الإضافي مثل الفصول التعويضية لتقليل المخاطر، والمواءمة مع إطار الكفاءات الوظيفية لشركتكم، والتقييم.",
      text4: "تخضع جميع برامج الهاوس الدولي لفحوصات الجودة الداخلية لمؤسستنا، وترحب الهاوس الدولي السعودية بملاحظات العملاء المستمرة طوال فترة البرنامج."
    },
    generalEnglish: {
      title: "برنامج اللغة الإنجليزية العامة",
      desc: "هناك 6 مستويات معتمدة من الهاوس الدولي متوافقة مع الإطار الأوروبي المشترك (CEFR). تتوفر 6 مستويات من اللغة الإنجليزية حتى المستوى C1. ووفقاً لمتطلبات العملاء القياسية، تقدم الهاوس الدولي السعودية 6 مستويات من الإنجليزية العامة وإنجليزي الأعمال والإنجليزية التقنية للشركات من A1 إلى C1، وهو من المبتدئ إلى المتقدم المنخفض. نستخدم مواد تدريس أكسفورد وكامبريدج المعتمدة. تبلغ مدة تدريس كل مستوى 120 ساعة تدريس مباشرة، إما عبر الإنترنت في فصل افتراضي أو في مركز التدريب الخاص بالعميل. وعادة ما تكون الدورات بدوام كامل لمدة شهر واحد."
    },
    onlineClasses: {
      title: "الفصول الافتراضية وعبر الإنترنت",
      desc: "فصول لغة إنجليزية عامة عبر الإنترنت للجمهور من الهاوس الدولي السعودية. تعلم الإنجليزية عبر الإنترنت ووثق مهاراتك اللغوية لتنتقل بطموحاتك إلى المستوى التالي. تعلم مع واحدة من أعرق منظمات تعليم اللغات في العالم وحسّن مهارات التحدث والقراءة والكتابة والاستماع في جميع المستويات. الدورات متاحة للطلاب والطالبات السعوديين على حد سواء. وثق مهاراتك بشهادة الهاوس الدولي المرموقة. تأسست الهاوس الدولي عام 1953، وهي واحدة من أكبر منظمات تدريس اللغات في العالم ولديها 140 مدرسة في أكثر من 45 دولة. تعمل الهاوس الدولي السعودية في المملكة منذ أكثر من 30 عاماً حيث ساعدت عشرات الآلاف من المتعلمين على تحقيق إمكاناتهم الحقيقية. الآن، باتباع نظام التعلم عبر الإنترنت المكون من 12 مستوى، يمكنك دراسة اللغة الإنجليزية في فصل افتراضي مباشر مع معلم يدعمك ويحفزك لتحقيق نجاح أكبر من راحة منزلك.",
      subTitle: "نظام المواءمة للإنجليزية عبر الإنترنت",
      subDesc: "تقدم الهاوس الدولي السعودية دورات إنجليزية عامة معتمدة عبر الإنترنت ومعترف بها في قطاع الصناعة السعودي. شهادة مهاراتك مع الهاوس الدولي هي خطوة حيوية لضمان تلبية متطلبات اللغة في سوق العمل اليوم.",
      statTitle: "رؤية حول التوظيف في السعودية",
      stat1: "أكثر من 80% من أصحاب العمل في السعودية يطلبون مهارات اللغة الإنجليزية لدى الموظفين الجدد.",
      stat2: "تستمر الشركات الكبرى مثل سابك وأرامكو في توظيف مواطنين سعوديين جدد، ولكن في معظم الحالات، تطلب غالبية الشركات في المملكة الآن من الموظفين الجدد إثبات مهاراتهم في اللغة الإنجليزية."
    },
    outcomes: {
      title: "مخرجات التعلم",
      subtitle: "ستكون قادراً على:",
      items: [
        "التواصل بمزيد من الطلاقة والسهولة",
        "تحسين دقة وصحة لغتك وصحتها",
        "استخدام استراتيجيات وتقنيات لتطوير المهارات الأربع - الاستماع والقراءة والكتابة والتحدث (بما في ذلك النطق الصحيح)",
        "الشعور بمزيد من الثقة في البيئات الناطقة بالإنجليزية والتفاعل مع المتحدثين بها."
      ]
    },
    content: {
      title: "محتوى الدورة",
      items: [
        "يقوم المعلمون بتعديل وتكييف الدورة لتناسب احتياجات ومستوى كل فصل.",
        "تساعدك الدروس الفردية المنتظمة مع معلمك على تحقيق أهدافك التعليمية.",
        "العمل مع الطلاب الآخرين ينمي مهارات التواصل لديك من خلال المناقشات الصفية والمشاريع المشتركة.",
        "تطوير القواعد اللغوية والمفردات الخاصة بك.",
        "استخدام مجموعة واسعة من المواد المحفزة بما في ذلك المصادر الرقمية والكتب المنهجية."
      ]
    },
    portfolio: {
      title: "حقائبنا التدريبية للشركات",
      subtitle: "منتجات تعليمية مصممة خصيصاً للشركات والأفراد لتناسب بيئة العمل الحديثة",
      items: [
        {
          title: "اللغة الإنجليزية العامة",
          desc: "6 مستويات متوافقة مع الإطار الأوروبي (A1 إلى C1) بمواد أكسفورد وكامبريدج. 120 ساعة اتصال لكل مستوى.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "الفصول الدراسية عبر الإنترنت",
          desc: "نظام من 12 مستوى مع معلمي لغة إنجليزية مباشرين. 13 متعلماً كحد أقصى في فصول صغيرة. تتوفر اشتراكات شهرية.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "التدريب على آيلتس (IELTS)",
          desc: "دورات مكثفة 60 أو 120 ساعة. خطط شخصية تركز على الكتابة والمحادثة وتجاوز متطلبات مراكز الاختبار الشريكة.",
          shadow: "shadow-ih-purple",
          color: "#8b3275",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "الدروس الخصوصية",
          desc: "تدريس خصوصي في الإنجليزية العامة (مستويات 1a-12b)، ودعم مناهج الثانوية السعودية (10-12) والرياضيات.",
          shadow: "shadow-ih-coral",
          color: "#e85d4a",
          img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "فصول التحضير للامتحانات",
          desc: "التحضير لشهادات كامبريدج للصغار (Starters, Movers, Flyers, A2/B1 Preliminary) والبالغين. 15-25 ساعة أسبوعياً.",
          shadow: "shadow-ih-yellow",
          color: "#f6c96a",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    steps: {
      title: "اتخذ الخطوة التالية",
      subtitle: "خطوات بسيطة وميسرة للتسجيل وبدء رحلتك التعليمية معنا",
      list: [
        { step: "الخطوة 1", title: "استشارة أكاديمية مجانية", desc: "اتصل بالهاوس الدولي السعودية للحصول على استشارة أكاديمية مجانية." },
        { step: "الخطوة 2", title: "اختبار تحديد المستوى", desc: "سوف ترتب الهاوس الدولي خضوعك لاختبار تحديد المستوى عبر الإنترنت مجاناً بالكامل." },
        { step: "الخطوة 3", title: "اختيار تاريخ البدء", desc: "بمجرد التسجيل في الدورة، يمكنك تحديد تاريخ بدء دراستك. تبدأ الدورات كل يوم أحد." },
        { step: "الخطوة 4", title: "تحديد الجدول الدراسي", desc: "اختر الجدول الذي يناسبك. تعمل الفصول عبر الإنترنت من 8 صباحاً حتى 9 مساءً لأقصى مرونة." },
        { step: "الخطوة 5", title: "توزيع المجموعات", desc: "يتم تخصيصك لمجموعة دراسية بناءً على مستواك في اللغة الإنجليزية وخيارات جدولك." },
        { step: "الخطوة 6", title: "استلام رابط الفصل الافتراضي", desc: "ترسل الإدارة رابط الفصل الافتراضي في المساء ويكون صالحاً لمدة 24 ساعة للانضمام المباشر." },
        { step: "الخطوة 7", title: "الحصول على الشهادة المعتمدة", desc: "بمجرد إكمال الدورة (60 ساعة) واجتياز التقييمات، تحصل على شهادة إنجاز معتمدة." }
      ]
    },
    essentialInfo: {
      title: "معلومات أساسية",
      study: "الدراسة: الإنجليزية العامة عبر الإنترنت",
      levels: "مستويات IH: 1A-12B | الأعمار: +17 سنة",
      cert: "الشهادات: متوفرة لجميع المستويات",
      teachers: "المعلمون: من بريطانيا وأمريكا، مؤهلون تأهيلاً كاملاً وذوو خبرة.",
      classSize: "حجم الفصل: فصول افتراضية صغيرة بحد أقصى 13 طالباً وطالبة.",
      subPlans: "تتوفر خطط اشتراك شهري مرنة وفصول بدوام كامل أو جزئي."
    }
  }
};

export function EnglishForCompaniesView({ lang }: { lang: string }) {
  const d = companiesData[lang as "en" | "ar"] || companiesData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <Image
          src="/arab_education_bg.png"
          alt="Arab education background"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            
            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 mb-10 max-w-4xl">
              {d.portfolio.items.map((item, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.title}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على استشارة مجانية" : "Free Consultation"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
              >
                <Phone size={16} /> +966 920 000 364
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* WHO WE WORK WITH */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
                  {d.whoWeWorkWith.title}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {d.whoWeWorkWith.subtitle}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  {d.whoWeWorkWith.text1}
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  {d.whoWeWorkWith.text2}
                </p>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mt-6">
                  <div className="w-10 h-10 rounded-xl bg-[#002F6C]/10 flex items-center justify-center text-[#002F6C] shrink-0">
                    <Globe size={20} />
                  </div>
                  <p className="text-sm font-bold text-[#002F6C]">
                    {d.whoWeWorkWith.text3}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {d.whoWeWorkWith.sectors.map((sec, idx) => {
                  const colors = [
                    { bg: "bg-blue-50/50", border: "border-blue-100", text: "text-blue-700" },
                    { bg: "bg-emerald-50/50", border: "border-emerald-100", text: "text-emerald-700" },
                    { bg: "bg-purple-50/50", border: "border-purple-100", text: "text-purple-700" },
                    { bg: "bg-rose-50/50", border: "border-rose-100", text: "text-rose-700" },
                    { bg: "bg-amber-50/50", border: "border-amber-100", text: "text-amber-700" },
                    { bg: "bg-sky-50/50", border: "border-sky-100", text: "text-sky-700" }
                  ];
                  const c = colors[idx % 6];
                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={idx}
                      className={`p-6 rounded-2xl border ${c.bg} ${c.border} transition-all duration-300 hover:shadow-md`}
                    >
                      <h4 className={`font-bold text-base mb-2 ${c.text}`}>{sec.name}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{sec.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* CUSTOMIZED LANGUAGE SOLUTIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {d.solutions.title}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-6">
              {d.solutions.subtitle}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-slate-600 text-base leading-relaxed mb-4 font-semibold">
                  {d.solutions.text1}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.solutions.text2}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.solutions.text3}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.solutions.text4}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 space-y-4">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1fa968] flex items-center justify-center shrink-0">
                    <CheckCircle size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base mb-1">{lang === "ar" ? "أهداف متطابقة تماماً مع الشركة" : "Perfect Corporate Alignment"}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{d.solutions.text5}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002F6C] flex items-center justify-center shrink-0">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base mb-1">{lang === "ar" ? "خبرة في السوق السعودي" : "Saudi Industrial Expertise"}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{d.solutions.text6}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IN-COMPANY PROGRAMS OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
                  {d.overview.title}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {d.overview.subtitle}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.overview.text1}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.overview.text2}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {d.overview.text3}
                </p>
                <p className="text-slate-500 text-xs italic leading-relaxed">
                  {d.overview.text4}
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: lang === "ar" ? "تحليل الاحتياجات اللغوية" : "Language Needs Analysis", desc: lang === "ar" ? "تحديد الثغرات والأهداف بشكل دقيق عبر اختبارات ونماذج متقدمة" : "Precise mapping of skills gaps and professional goals before training begins" },
                { title: lang === "ar" ? "تصميم مناهج مخصصة" : "Tailored Curriculum", desc: lang === "ar" ? "تطوير مناهج لتناسب المصطلحات الخاصة بقطاعكم الوظيفي" : "Syllabus customized to target business jargon, email writing, and presentations" },
                { title: lang === "ar" ? "تخفيف المخاطر بفصول علاجية" : "Remedial Classes to Reduce Risk", desc: lang === "ar" ? "دروس دعم إضافية للتأكد من مواكبة جميع المتدربين للمنهج" : "Targeted supplementary support to help slower learners keep pace" },
                { title: lang === "ar" ? "تقييم الكفاءة والامتثال" : "Competency & Compliance Assessment", desc: lang === "ar" ? "مواءمة مخرجات التعلم مع أطر الكفاءات الوظيفية بالشركة" : "Aligning assessments directly with your company's HR job competency framework" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className="p-6 rounded-3xl border border-slate-100 bg-[#f8f9fc] hover:bg-[#f0f4ff]/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#002F6C] font-extrabold mb-4 border border-slate-100">
                    {idx + 1}
                  </div>
                  <h4 className="font-extrabold text-slate-800 text-base mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* PORTFOLIO GRID: English Courses for Companies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {lang === "ar" ? "حقائبنا التدريبية" : "Our Educational Offerings"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-4">
              {d.portfolio.title}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-500 text-sm sm:text-base">
              {d.portfolio.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.portfolio.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className={`relative overflow-hidden p-8 asymmetric-card border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{
                    borderColor: cardBorder,
                  }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 70%, #000000) 100%)`,
                  }}
                >
                  {/* Photo background inside card (35% default opacity, 65% hover opacity) */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  
                  {/* Soft overlay on hover to guarantee text readability */}
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover/card:scale-110"
                        style={{ backgroundColor: item.color }}
                      >
                        {idx === 0 && <BookOpen size={24} />}
                        {idx === 1 && <Monitor size={24} />}
                        {idx === 2 && <TrendingUp size={24} />}
                        {idx === 3 && <Users size={24} />}
                        {idx === 4 && <Star size={24} />}
                      </div>
                      
                      <h3 className="font-extrabold text-xl mb-4 text-slate-800 transition-colors duration-500 group-hover/card:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium transition-colors duration-500 group-hover/card:text-white/90">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 transition-colors duration-500 group-hover/card:text-white">
                      <span>{lang === "ar" ? "عرض المزيد" : "Learn More"}</span>
                      <ChevronRight size={14} className="transition-transform duration-300 group-hover/card:translate-x-1 rtl:rotate-180 rtl:group-hover/card:-translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ONLINE CLASSES SPECIFICS + STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-emerald-50 text-[#1fa968]">
                  {d.onlineClasses.title}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {d.onlineClasses.subTitle}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {d.onlineClasses.desc}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {d.onlineClasses.subDesc}
                </p>
              </motion.div>

              {/* Stats Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={1}
                  className="p-6 rounded-3xl border border-slate-100 bg-[#f8f9fc] hover:shadow-ih-soft transition-all duration-300"
                >
                  <h4 className="font-extrabold text-[#1fa968] text-3xl mb-2">80%+</h4>
                  <p className="text-slate-700 text-xs font-semibold leading-relaxed">{d.onlineClasses.stat1}</p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={2}
                  className="p-6 rounded-3xl border border-slate-100 bg-[#f8f9fc] hover:shadow-ih-soft transition-all duration-300"
                >
                  <h4 className="font-extrabold text-[#002F6C] text-xl mb-2">{d.onlineClasses.statTitle}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{d.onlineClasses.stat2}</p>
                </motion.div>
              </div>
            </div>

            {/* Essential Info Sidebar */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-3xl border-2 border-slate-100 bg-slate-50/50 shadow-md space-y-6"
              >
                <h3 className="font-extrabold text-lg text-[#002F6C] border-b pb-3 border-slate-200/60 flex items-center gap-2">
                  <FileCheck size={20} /> {d.essentialInfo.title}
                </h3>
                
                <div className="space-y-4 text-slate-700 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span className="font-semibold">{d.essentialInfo.study}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span>{d.essentialInfo.levels}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span>{d.essentialInfo.cert}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span>{d.essentialInfo.teachers}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span>{d.essentialInfo.classSize}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#002F6C] mt-0.5 shrink-0" />
                    <span className="text-slate-500 font-medium italic">{d.essentialInfo.subPlans}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-white shadow-md hover:scale-[1.02] transition-all bg-[#002F6C]"
                  >
                    {lang === "ar" ? "سجل الآن" : "Apply for Courses"} <ArrowRight size={15} className="rtl:rotate-180" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* LEARNING OUTCOMES & COURSE CONTENT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Outcomes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl mb-2 text-[#002F6C]">{d.outcomes.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{d.outcomes.subtitle}</p>
              <div className="space-y-4">
                {d.outcomes.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#002F6C] flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight size={14} className="rtl:rotate-180" />
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content Details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl mb-6 text-[#002F6C]">{d.content.title}</h3>
              <div className="space-y-4">
                {d.content.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#1fa968] mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE: TAKE THE NEXT STEP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#002F6C]">
              {lang === "ar" ? "خطوات بسيطة" : "How it Works"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#002F6C] mb-4">
              {d.steps.title}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-500 text-sm">
              {d.steps.subtitle}
            </motion.p>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#002F6C]/10 -translate-x-1/2" />

            <div className="space-y-8">
              {d.steps.list.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Empty block for layout spacing on large screens */}
                    <div className="hidden lg:block w-[45%]" />

                    {/* Timeline Node Badge */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#002F6C] text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-md my-4 lg:my-0">
                      {idx + 1}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="w-full lg:w-[45%] p-6 rounded-3xl border border-slate-100 bg-[#f8f9fc] hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-[#002F6C] text-xs font-extrabold uppercase tracking-wide block mb-1">{step.step}</span>
                      <h4 className="font-extrabold text-slate-800 text-base mb-2">{step.title}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* EXAM PREP & IELTS DETAILS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-amber-50 text-[#f0a950]">
                  {lang === "ar" ? "التحضير للامتحانات الدولية" : "International Exam Classes"}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">
                  {lang === "ar" ? "التحضير لاختبارات كامبريدج وآيلتس" : "Prepare for Cambridge & IELTS Exams"}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {lang === "ar" 
                    ? "تساعد الهاوس الدولي السعودية المتعلمين من سن 8 إلى 80 عاماً على الاستعداد للاختبارات الدولية. يمكنك الدراسة مع مدربين خبراء بينما ترتب لك الهاوس الدولي التقدم للامتحان عبر مراكز اختبار شريكة."
                    : "IH Saudi Arabia helps learners from 8-80 prepare for international exams. You can prepare to take the exam with IH’s expert trainers while IH will arrange for you to take the exam via our partner testing centers."}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {lang === "ar"
                    ? "تتراوح خيارات الدراسة من خيار غير مكثف يبلغ 15 ساعة في الأسبوع إلى خيار أكثر كثافة يبلغ 25 ساعة في الأسبوع."
                    : "You can study from a non-intensive 15 hours per week to a more intensive option of 25 hours per week."}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: lang === "ar" ? "أهداف مرنة" : "Flexible Learning", desc: lang === "ar" ? "من 15 إلى 25 ساعة تدريب أسبوعياً" : "15 - 25 hours per week to suit your schedule" },
                  { title: lang === "ar" ? "اعتماد جامعي" : "No Expiry Date", desc: lang === "ar" ? "شهادات كامبريدج صالحة مدى الحياة" : "Cambridge qualifications do not expire" },
                  { title: lang === "ar" ? "آيلتس مخصص" : "60/120 Hours", desc: lang === "ar" ? "دورات آيلتس شاملة ومخصصة لمستواك" : "IELTS training packages in full or part-time options" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm text-center"
                  >
                    <h4 className="font-bold text-[#002F6C] text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm"
              >
                <h4 className="font-extrabold text-slate-800 text-base mb-3 flex items-center gap-2">
                  <Star size={18} className="text-amber-500" />
                  {lang === "ar" ? "امتحانات كامبريدج للصغار والكبار" : "Cambridge Exams Preparation"}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {lang === "ar"
                    ? "تشمل امتحانات كامبريدج للصغار (Starters, Movers, Flyers) والامتحانات التمهيدية للمدارس (A2 & B1 Preliminary)، بالإضافة إلى دورات مخصصة للكبار."
                    : "Offering Young Learner training based on Starters, Movers, Flyers, and A2 & B1 Preliminary for Schools, as well as adult tracks."}
                </p>
                <div className="text-[#002F6C] text-xs font-bold">
                  {lang === "ar" ? "كامبريدج جزء من جامعة كامبريدج المرموقة." : "Cambridge English is part of the University of Cambridge."}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm"
              >
                <h4 className="font-extrabold text-slate-800 text-base mb-3 flex items-center gap-2">
                  <TrendingUp size={18} className="text-purple-500" />
                  {lang === "ar" ? "التدريب على آيلتس (IELTS)" : "IELTS Training & Assessment"}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {lang === "ar"
                    ? "بمجرد تحديد مستواك في اللغة الإنجليزية، سيتم وضعك في مسار آيلتس مناسب. يتضمن ذلك خطة دراسية تركز على مجالات التطوير التي تحتاجها مثل الكتابة أو التحدث."
                    : "Once tested to find your level, you will be placed on an IELTS course that fits your needs. Benefit from a personal study plan focusing on writing or speaking."}
                </p>
                <div className="text-slate-400 text-xs mt-3 italic">
                  {lang === "ar" ? "* تطبق رسوم منفصلة لتقديم الاختبار مع مراكز التدريب الشريكة." : "* Separate fees apply for taking exams with our partner testing centers."}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "جاهز للارتقاء بمهاراتك أو كفاءة فريقك؟" : "Ready to Empower Your Team?"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar" 
                ? "تواصل معنا اليوم للحديث مع المستشار الأكاديمي وبدء التدريب المخصص لشركتك." 
                : "Contact our advisory team today to design a bespoke training plan that meets your corporate goals."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل معنا الآن" : "Contact Advisory Team"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
              <a
                href="tel:+966920000364"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm font-bold text-sm text-white hover:bg-white/25 hover:scale-105 transition-all duration-300"
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

/* ─── 2. ESP COURSES VIEW ────────────────────────────────────────── */
export const espData = {
  en: {
    hero: {
      title: "ESP Courses",
      tagline: "Master the language of your industry.",
      badge: "English for Specific Purposes",
    },
    business: {
      title: "Business English (BE: Levels 1-6)",
      desc: "For employees in business related fields from A1 to C1 in a variety of administrative, financial, and management related professions. Options include intensive business English and non-intensive. The courses focus on emailing, technical reports writing, presentation skills, telephoning, negotiating, and business communication."
    },
    technical: {
      title: "Technical English (TE: Levels 1-6)",
      desc: "For operators, electricians, plant workers, and those working in manufacturing. The IH Saudi Arabia Technical English courses are broad technical programs that focus on building wider language awareness for industry within applied contexts. These programs are often customized to the demands of a particular industry, especially in areas like vocabulary and language functions, while remaining suitable for employees from different departments and job backgrounds."
    },
    portfolio: {
      title: "Specialised ESP Modules",
      subtitle: "Targeted language certifications matching specific industrial roles",
      items: [
        { title: "English for Security Guards", level: "A1 – B1", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80" },
        { title: "English for the Oil & Gas Industry", level: "B1+", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Offshore Workers", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Logistics", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Nurses", level: "A2+", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Doctors", level: "B2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Airport Ground Services", level: "B1+", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80" },
        { title: "Legal English", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80" },
        { title: "Business Writing", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Engineers", level: "B2+", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80" },
        { title: "English for Hospitality & Tourism", level: "A2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    testing: {
      title: "Placement Testing",
      desc: "IH Saudi Arabia offers a highly reliable corporate placement testing service to ensure that all employees receive the English language training they need. There are computer and paper based versions of this test with confidential results collated and available within a turnaround time of one business day."
    },
    executive: {
      title: "Executive Training",
      desc: "IH Saudi Arabia’s executive programs include classes with small groups and 1-1 training. Choose to study at work, at IH Jubail, or online. Classes include daytime, weekend, and evening class options. Courses are designed around your needs and include tailored programs from Legal to Medical English. You can also simply improve your conversational skills, or focus on Business Communication. Both intensive and non-intensive options are available."
    }
  },
  ar: {
    hero: {
      title: "دورات الإنجليزية لأغراض خاصة",
      tagline: "أتقن لغة صناعتك وسيطر على مستقبلك المهني.",
      badge: "الإنجليزية لأغراض خاصة (ESP)",
    },
    business: {
      title: "الإنجليزية للأعمال (BE: المستويات 1-6)",
      desc: "للموظفين في المجالات ذات الصلة بالأعمال من المستوى A1 إلى C1 في مجموعة متنوعة من المهن الإدارية والمالية والتنفيذية. تشمل الخيارات دورات إنجليزية للأعمال مكثفة وغير مكثفة. تركز الدورات على المراسلات الإلكترونية، كتابة التقارير الفنية، مهارات العروض التقديمية، الاتصالات الهاتفية، التفاوض، وتواصل الأعمال."
    },
    technical: {
      title: "الإنجليزية التقنية (TE: المستويات 1-6)",
      desc: "للمشغلين، الفنيين الكهربائيين، عمال المصانع، والمنخرطين في قطاع التصنيع. دورات الإنجليزية التقنية من الهاوس الدولي السعودية هي برامج تقنية واسعة تركز على بناء وعي لغوي أشمل للصناعة ضمن سياقات تطبيقية. غالباً ما يتم تخصيص هذه البرامج وفقاً لمتطلبات صناعة معينة، لا سيما في مجالات المفردات والوظائف اللغوية، مع بقائها مناسبة للموظفين من مختلف الأقسام والخلفيات الوظيفية."
    },
    portfolio: {
      title: "برامج ESP التخصصية",
      subtitle: "شهادات لغوية موجهة لتناسب الأدوار المهنية المختلفة",
      items: [
        { title: "الإنجليزية لحراس الأمن", level: "A1 – B1", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية لصناعة النفط والغاز", level: "B1+", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية لعمال المنصات البحرية", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للخدمات اللوجستية", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للتمريض والرعاية الصحية", level: "A2+", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للأطباء والكوادر الطبية", level: "B2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للخدمات الأرضية للمطارات", level: "B1+", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية القانونية", level: "B2+", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80" },
        { title: "الكتابة وصياغة الأعمال", level: "B1+", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للمهندسين والفنيين", level: "B2+", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&q=80" },
        { title: "الإنجليزية للضيافة والسياحة", level: "A2+", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    testing: {
      title: "اختبارات تحديد المستوى للشركات",
      desc: "تقدم الهاوس الدولي السعودية خدمة اختبارات تحديد المستوى المؤسسية الموثوقة للغاية لضمان حصول جميع الموظفين على التدريب اللغوي الذي يحتاجونه. تتوفر نسخ ورقية وإلكترونية من هذا الاختبار مع تجميع نتائج سرية كاملة وإتاحتها في غضون يوم عمل واحد فقط."
    },
    executive: {
      title: "تدريب التنفيذيين والقيادات",
      desc: "تشمل البرامج التنفيذية من الهاوس الدولي السعودية فصولاً لمجموعات صغيرة وتدريباً فردياً (1-1). اختر الدراسة في مقر العمل، أو في فرع الهاوس الدولي بالجبيل، أو عبر الإنترنت. تشمل الفصول خيارات دراسية نهارية، وعطلة نهاية الأسبوع، ومسائية. تم تصميم الدورات التدريبية حول احتياجاتك المحددة وتشمل برامج مخصصة من الإنجليزية القانونية إلى الطبية. يمكنك أيضاً ببساطة تحسين مهارات المحادثة لديك أو التركيز على تواصل الأعمال. تتوفر خيارات مكثفة وغير مكثفة."
    }
  }
};

export function EspCoursesView({ lang }: { lang: string }) {
  const d = espData[lang as "en" | "ar"] || espData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#8b3275] via-[#752661] to-[#601a4e]">
        <Image
          src="/arab_education_bg.png"
          alt="ESP Courses"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#8b3275] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على استشارة" : "Enquire Now"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* BUSINESS & TECHNICAL ENGLISH COMPARISON */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-[#8b3275] mb-4">{d.business.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{d.business.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#8b3275]">
                {["Emailing", "Technical Reports", "Presentations", "Negotiating"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#8b3275]/10">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-sm"
            >
              <h3 className="text-2xl font-extrabold text-[#002F6C] mb-4">{d.technical.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{d.technical.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-[#002F6C]">
                {["Operators", "Electricians", "Manufacturing", "Safety Context"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-[#002F6C]/10">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* SPECIALISED ESP PLACEMENT LIST */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f0f4ff] text-[#8b3275]">
              {lang === "ar" ? "برامج خاصة مهنية" : "Industry Specific Tracks"}
            </motion.span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-extrabold text-[#8b3275] mb-4">
              {d.portfolio.title}
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="text-slate-500 text-sm">
              {d.portfolio.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.portfolio.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-6 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.30] group-hover/card:opacity-[0.60] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white mb-3 tracking-wide" style={{ backgroundColor: item.color }}>
                        {item.level}
                      </span>
                      <h4 className="font-extrabold text-base text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition-colors duration-500 group-hover/card:text-white pt-4">
                      <span>{lang === "ar" ? "تواصل للتسجيل" : "Enquire Track"}</span>
                      <ChevronRight size={12} className="transition-transform duration-300 group-hover/card:translate-x-1 rtl:rotate-180 rtl:group-hover/card:-translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* PLACEMENT TESTING & EXECUTIVE SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testing */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl border border-slate-100 bg-[#f8f9fc] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#8b3275] flex items-center justify-center font-bold mb-4 shadow-sm">
                  <FileCheck size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-lg mb-3">{d.testing.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{d.testing.desc}</p>
              </div>
              <Link href="/courses/placement-test" className="text-xs font-bold text-[#8b3275] flex items-center gap-1 hover:underline">
                {lang === "ar" ? "اعرف المزيد عن اختبار التحديد" : "Placement Test Details"} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </motion.div>

            {/* Executive */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl border border-slate-100 bg-[#f8f9fc] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#002F6C]/10 text-[#002F6C] flex items-center justify-center font-bold mb-4 shadow-sm">
                  <Users size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-lg mb-3">{d.executive.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{d.executive.desc}</p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-[#002F6C] flex items-center gap-1 hover:underline">
                {lang === "ar" ? "اتصل بمستشاري تدريب التنفيذيين" : "Contact Executive Advisory"} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#8b3275] via-[#752661] to-[#601a4e]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "جاهز لتصميم تدريب مخصص لشركتك؟" : "Ready to Start Specialized Training?"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar" 
                ? "تواصل مع خبرائنا في الجبيل أو الظهران لتصميم الحل اللغوي الأنسب لاحتياجات فريقك." 
                : "Connect with our coordinators in Jubail or Dhahran to design a targeted syllabus for your industrial track."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#8b3275] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اتصل بنا الآن" : "Apply for ESP Tracks"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 3. LEARN ARABIC VIEW ───────────────────────────────────────── */
export const arabicData = {
  en: {
    hero: {
      title: "Learn Arabic",
      tagline: "Connect with the Kingdom on a deeper level.",
      badge: "Arabic Language Programmes",
    },
    intro: {
      title: "Arabic: A Beautiful and Enigmatic Language",
      text1: "Arabic is a beautiful and enigmatic language whose influence extends from Morocco to Iraq while through Islam, it has infused languages as diverse as Persian and Swahili with its unique character.",
      text2: "Interest in learning Arabic is on the rise: Travelers, tourists, expat workers, and professionals working in the fields of journalism, humanitarian aid, research, and the military all have their own reasons for learning Arabic which is the official language of 26 states and spoken by over 300 million people.",
      text3: "International House has always been about intercultural dialogue and language is a key part of any genuine cultural communication.",
      text4: "That’s why IH Saudi Arabia believes that the country that was the historical cradle of Old Arabic some 2,000 years ago should today be one of the prime destinations for those wishing to study its linguistic descendants.",
      text5: "This is particularly so as the recent visa liberalization system now makes Saudi Arabia more accessible than ever before with no off-putting red tape and surprisingly affordable accommodation options once in the country. But Arabic differs from other languages in that how it is written differs from its spoken form. Not only that, but there are multiple dialects, while Arabic pronunciation requires learning and practice both with a teacher and through wider real life usage. Arabic grammar is complex and most of all – Arabic can’t be separated from Arab culture."
    },
    advantages: {
      title: "Why Learn Arabic in Saudi Arabia with IH?",
      items: [
        { title: "Timeless Milieu Exposure", desc: "Exposing the learner to the same cultural milieu in which Arabic first formed. From the oasis of Al Hassa to the bustling markets of Jeddah and the mysterious Saudi Arabian hinterland where Bedouin tents and camel herds still dot the desert kingdom’s landscape, learning Arabic with IH Saudi Arabia offers a timeless experience." },
        { title: "Field Trips & Visits", desc: "Providing opportunity to use Arabic on visits, field trips, and remote excursions from Saudi Arabia’s lush southern Provinces to the rugged northern borders." },
        { title: "Spiritual & Cultural Setting", desc: "For Muslim learners, combine Arab studies with Hajj or Umra to finalize your studies. Non-Muslims are invited to note that Beirut and Cairo are all within easy reach for extended field visits." },
        { title: "Functional Communicative Method", desc: "Giving the learner opportunity to study a functional, communicative program that gets students using Arabic fast so that grammar is taught inductively." },
        { title: "Dialect Diversity", desc: "Offering a wide choice of dialects with Gulf Arabic, Levantine, and Egyptian options available." }
      ]
    },
    facts: {
      title: "Did You Know?",
      items: [
        "Arabic is a Semitic language related to Aramaic and Hebrew.",
        "Old Arabic first emerged in southern Saudi Arabia.",
        "Arabic is a sacred language and the language of the Holy Quran.",
        "There is a critical shortage in the West of trained linguists specializing in Arabic.",
        "Saying that you have studied Arabic in Saudi Arabia on your CV will mean that you immediately stand out as an exceptional candidate for that coveted job."
      ]
    },
    portfolio: {
      title: "Arabic Language Courses",
      items: [
        {
          code: "AS-MSA:X",
          title: "Arabic Studies",
          desc: "This program focuses on providing students with a foundation in Modern Standard Arabic. Reading & writing focus for university prep/headlines. 120 hours total.",
          schedule: "Intensive: 6 Weeks | Non-intensive: 12 Weeks",
          note: "* Minimum payment is for 60 hours.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
        },
        {
          code: "AR-CV:X",
          title: "Conversational Arabic",
          desc: "Functional everyday vocabulary, traveling/working themes, and immersive real life practice. Recommended for expats in Saudi Arabia.",
          schedule: "Intensive: 6 Weeks | Non-intensive: 12 Weeks",
          note: "120-hour program with field trips around the Kingdom.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
        },
        {
          code: "AR-ISTX",
          title: "Arabic & Islamic Studies",
          desc: "Classical Arabic and Quranic recitation. Designed for Muslim visitors doing Hajj/Umrah or expats wanting to study Islamic culture.",
          schedule: "Intensive: 6 Weeks | Non-intensive: 12 Weeks",
          note: "Taught by skilled Saudi religious specialists under MoE guidance.",
          shadow: "shadow-ih-purple",
          color: "#8b3275",
          img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  },
  ar: {
    hero: {
      title: "تعلم اللغة العربية",
      tagline: "تواصل مع المملكة على مستوى أعمق.",
      badge: "برامج اللغة العربية لغير الناطقين بها",
    },
    intro: {
      title: "اللغة العربية: لغة الجمال والغموض",
      text1: "اللغة العربية هي لغة جميلة وغامضة يمتد تأثيرها من المغرب إلى العراق، ومن خلال الإسلام، صبغت لغات متنوعة مثل الفارسية والسواحيلية بطابعها الفريد.",
      text2: "يزداد الاهتمام بتعلم اللغة العربية باستمرار: فالمسافرون، والسياح، والموظفون المغتربون، والمهنيون العاملون في مجالات الصحافة، والمساعدات الإنسانية، والأبحاث، والجيش، لديهم جميعاً أسبابهم الخاصة لتعلم اللغة العربية، وهي اللغة الرسمية لـ 26 دولة ويتحدث بها أكثر من 300 مليون شخص.",
      text3: "لطالما كان الهاوس الدولي مهتماً بالحوار بين الثقافات، وتعد اللغة جزءاً أساسياً من أي تواصل ثقافي حقيقي.",
      text4: "ولهذا السبب، تعتقد الهاوس الدولي السعودية أن الدولة التي كانت المهد التاريخي للغة العربية القديمة قبل حوالي 2000 عام يجب أن تكون اليوم واحدة من الوجهات الرئيسية لأولئك الذين يرغبون في دراسة أحفادها اللغويين.",
      text5: "هذا صحيح بشكل خاص لأن نظام تحرير تأشيرات الدخول الأخير يجعل المملكة العربية السعودية الآن أكثر سهولة في الوصول إليها من أي وقت مضى مع التخلص من الروتين المزعج وخيارات السكن المعقولة التكلفة داخل البلاد. لكن اللغة العربية تختلف عن غيرها من اللغات في أن طريقة كتابتها تختلف عن طريقة نطقها الشفهية. ليس هذا فحسب، بل إن هناك لهجات متعددة، في حين يتطلب النطق العربي تعلماً وممارسة مع المعلم ومن خلال الاستخدام العملي في الحياة اليومية. قواعد اللغة العربية معقدة، وقبل كل شيء - لا يمكن فصل اللغة العربية عن الثقافة العربية."
    },
    advantages: {
      title: "لماذا تدرس العربية في السعودية مع الهاوس الدولي؟",
      items: [
        { title: "البيئة الثقافية الأصيلة", desc: "تعريض المتعلم للبيئة الثقافية نفسها التي تشكلت فيها اللغة العربية لأول مرة. من واحة الأحساء إلى أسواق جدة الصاخبة والمناطق الداخلية السعودية الغامضة حيث لا تزال خيام البدو وقطعان الإبل تزين مشهد الصحراء، فإن تعلم العربية مع الهاوس الدولي يقدم تجربة خالدة." },
        { title: "الرحلات والزيارات الميدانية", desc: "توفير فرص لاستخدام اللغة العربية في الزيارات الميدانية والرحلات الاستكشافية من المناطق الجنوبية الخضراء في المملكة إلى الحدود الشمالية الوعرة." },
        { title: "السياق الروحي والثقافي", desc: "للمتعلمين المسلمين، يمكن الجمع بين الدراسات العربية وأداء مناسك الحج أو العمرة لختام دراستهم. وغير المسلمين مدعوون لزيارة بيروت والقاهرة كجزء من زيارات ميدانية ممتدة." },
        { title: "منهجية تواصلية وظيفية", desc: "إعطاء المتعلم فرصة لدراسة برنامج وظيفي وتواصلي يضمن استخدام العربية سريعاً بحيث تُدرس القواعد بشكل استقرائي." },
        { title: "تنوع خيارات اللهجات", desc: "تقديم خيارات واسعة من اللهجات بما في ذلك اللهجة الخليجية، والشامية، والمصرية." }
      ]
    },
    facts: {
      title: "هل تعلم؟",
      items: [
        "اللغة العربية هي لغة سامية ترتبط بالآرامية والعبرية.",
        "ظهرت العربية القديمة لأول مرة في جنوب المملكة العربية السعودية.",
        "اللغة العربية هي لغة مقدسة وهي لغة القرآن الكريم.",
        "هناك نقص حاد في الغرب في اللغويين المدربين المتخصصين في اللغة العربية.",
        "إدراج دراسة اللغة العربية في السعودية في سيرتك الذاتية يعني تميزك الفوري كمرشح استثنائي لتلك الوظيفة المرموقة."
      ]
    },
    portfolio: {
      title: "برامج اللغة العربية المتاحة",
      items: [
        {
          code: "AS-MSA:X",
          title: "الدراسات العربية",
          desc: "يركز هذا البرنامج على تزويد الطلاب بأساس متين في العربية الفصحى الحديثة. مخصصة لمن يفكرون بالدراسة الجامعية أو قراءة العناوين الصحفية. 120 ساعة.",
          schedule: "مكثف: 6 أسابيع | غير مكثف: 12 أسبوعاً",
          note: "* الحد الأدنى للدفع هو 60 ساعة.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80"
        },
        {
          code: "AR-CV:X",
          title: "العربية للمحادثة",
          desc: "برنامج من العربية الوظيفية التي تركز على المفردات اليومية، والمواضيع الظرفية للسفر والعيش والعمل في العالم العربي مع رحلات ميدانية تفاعلية.",
          schedule: "مكثف: 6 أسابيع | غير مكثف: 12 أسبوعاً",
          note: "دورة 120 ساعة مع رحلات تطبيقية في أنحاء المملكة.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
        },
        {
          code: "AR-ISTX",
          title: "الدراسات العربية والإسلامية",
          desc: "العربية الكلاسيكية والقرآن الكريم وتلاوته. مصممة للزوار المسلمين لأداء الحج/العمرة أو الوافدين الراغبين بدراسة الثقافة الإسلامية.",
          schedule: "مكثف: 6 أسابيع | غير مكثف: 12 أسبوعاً",
          note: "تحت إشراف متخصصين سعوديين معتمدين من وزارة التعليم.",
          shadow: "shadow-ih-purple",
          color: "#8b3275",
          img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80"
        }
      ]
    }
  }
};

export function LearnArabicView({ lang }: { lang: string }) {
  const d = arabicData[lang as "en" | "ar"] || arabicData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#1fa968] via-[#178a55] to-[#11683f]">
        <Image
          src="/arab_education_bg.png"
          alt="Arabic background"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#1fa968] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "سجل الآن" : "Apply for Courses"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO TEXT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 text-slate-700">
            <h2 className="text-3xl font-extrabold text-[#1fa968] mb-6">{d.intro.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed font-semibold">{d.intro.text1}</p>
            <p className="text-sm leading-relaxed">{d.intro.text2}</p>
            <p className="text-sm leading-relaxed">{d.intro.text3}</p>
            <div className="p-6 rounded-3xl bg-[#f0f9f4] border border-[#1fa968]/20 my-8">
              <p className="text-[#11683f] text-sm leading-relaxed font-medium">{d.intro.text4}</p>
            </div>
            <p className="text-sm leading-relaxed">{d.intro.text5}</p>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* ADVANTAGES OF STUDYING IN KSA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#1fa968]">{d.advantages.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.advantages.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1fa968] flex items-center justify-center font-bold mb-5">
                  <CheckCircle size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-3 leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DID YOU KNOW PANEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <h3 className="font-extrabold text-xl text-[#1fa968] mb-6 flex items-center gap-2">
              <Sparkles size={20} /> {d.facts.title}
            </h3>
            <div className="space-y-4">
              {d.facts.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#11683f] flex items-center justify-center font-bold shrink-0 text-2xs mt-0.5">{idx + 1}</span>
                  <p className="leading-relaxed font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* ARABIC COURSE TRACKS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#1fa968]">{d.portfolio.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {d.portfolio.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-8 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[240px]">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-[10px] font-extrabold mb-4 uppercase tracking-wider">
                        {item.code}
                      </span>
                      <h3 className="font-extrabold text-lg mb-3 text-slate-800 transition-colors duration-500 group-hover/card:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed mb-4 transition-colors duration-500 group-hover/card:text-white/90">
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      <div className="text-2xs font-bold text-slate-400 group-hover/card:text-white/70 transition-colors duration-500 mb-2">
                        {item.note}
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 transition-colors duration-500 group-hover/card:text-white border-t border-slate-100 group-hover/card:border-white/20 pt-3">
                        <span>{item.schedule}</span>
                        <ChevronRight size={14} className="rtl:rotate-180 transition-transform group-hover/card:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1fa968] via-[#178a55] to-[#11683f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "ابدأ رحلة تعلم اللغة العربية اليوم" : "Ready to Start Learning Arabic?"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "سجل اهتمامك الآن وسيتواصل معك منسقو البرامج لتحديد جدولك وبدء فصولك الدراسية."
                : "Register your interest today and our coordinators will guide you through start dates and dialect options."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#1fa968] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل مع المنسقين" : "Contact Program Advisors"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 4. YOUNG LEARNERS VIEW ─────────────────────────────────────── */
export const youngData = {
  en: {
    hero: {
      title: "Young Learners",
      tagline: "extended assistance with Saudi Arabia’s official national curriculum.",
      badge: "School Curriculum Support",
    },
    intro: {
      title: "Online English support for Grades 5-12",
      text1: "International House Saudi Arabia offers parents the opportunity to register their children for online English classes that offer extended assistance with Saudi Arabia’s official national curriculum of English language.",
      text2: "Online classes for Young Learners from Grades 5-12 are taught by expert certified teachers and native speakers at flexible times from 3pm to 7pm.",
      text3: "Flexible programs allow students to study for as long as they need, from 3 to 8 hours per week, using the same course materials as those taught in the Saudi school system."
    },
    objectives: {
      title: "Program Objectives",
      subtitle: "Empowering children to excel in their academic English goals:",
      items: [
        "Review and consolidate the Saudi school system’s English language curriculum to guarantee exam success.",
        "Develop practical English skills through further practice.",
        "Review and practice in context the Saudi national curriculum’s vocabulary base.",
        "Practice the Saudi national curriculum’s grammar syllabus through conversation, games, activities, and language tasks.",
        "Use English collaboratively in online English classes in a friendly and supportive atmosphere.",
        "Provide individual attention for your child."
      ]
    },
    facts: {
      title: "Did You Know?",
      items: [
        "Most professional jobs in Saudi Arabia require sophisticated English language skills.",
        "As the Saudi economy diversifies under Vision 2030, English language skills are going to be even more important for those young people entering the job market.",
        "The earlier a school student learns English, the higher are his/her chances of long-term success as a language user.",
        "Now, wherever you are in Saudi Arabia, and from the comfort of your own home, you can put your child on the path to language learning success with IH Saudi Arabia – a proud member of one of the most prestigious language teaching organizations in the world.",
        "Saudi Arabia’s educational system is excellent and continues to make great progress under Vision 2030."
      ]
    },
    comparison: {
      title: "Why Choose IH Online Over Traditional Tutors?",
      tutors: {
        title: "Traditional Unregulated Tutors",
        items: [
          "Very expensive with private teachers demanding as much as SR150 per hour.",
          "Complete lack of quality control.",
          "Parents have very little choice as they rely on a very limited number of locally available English teachers.",
          "Students study alone with little opportunity to learn in a group.",
          "There is no academic organization or supervision."
        ]
      },
      ih: {
        title: "The IH Online Learning Solution",
        items: [
          "Complete online English language learning system with virtual classes for Grades 5-12.",
          "Higher quality training at much lower cost as compared to private classes taught in Saudi homes.",
          "Dozens of qualified male & female teachers at extremely affordable prices, giving parents wider choice.",
          "Teachers registered from Egypt, Jordan, Tunisia, India, Pakistan, and the Philippines holding international qualifications.",
          "Option to register for US, UK, Canadian, or Australian native speakers to empower your children to meet school goals."
        ]
      }
    },
    benefits: {
      title: "Benefits of the Program",
      items: [
        { title: "Communicative Learning", desc: "Young Learners study communicatively so that they learn naturally." },
        { title: "Practical Skills Focus", desc: "There is less focus on rote grammar and more focus on practical skills." },
        { title: "Curriculum Alignment", desc: "The training content is the same as that offered in Saudi schools." },
        { title: "Exam Preparation", desc: "There is a strong focus on how to pass exams successfully." },
        { title: "Small Group Sizes", desc: "Groups are small with just 8 students in an online virtual group." },
        { title: "Continuous Support", desc: "The course supports learning in schools at every single step." }
      ]
    },
    steps: {
      title: "Steps to Register Your Child",
      list: [
        { step: "Step 1", desc: "Contact International House Saudi Arabia for further details." },
        { step: "Step 2", desc: "Your child will take the IH online English language placement test." },
        { step: "Step 3", desc: "As a parent, log on to the IH online learning platform to select a teacher that you would like." },
        { step: "Step 4", desc: "IH will enroll your child with the teacher that you have chosen in an online group." },
        { step: "Step 5", desc: "Confirm the number of hours required, course duration, and payment." },
        { step: "Step 6", desc: "Begin online classes." }
      ]
    }
  },
  ar: {
    hero: {
      title: "المتعلمون الصغار",
      tagline: "دعم تعليمي مكثف ومساعد للمنهج الدراسي الوطني الرسمي لمدارس المملكة.",
      badge: "دعم المنهج الوطني للمدارس",
    },
    intro: {
      title: "دعم اللغة الإنجليزية عبر الإنترنت من الصف 5-12",
      text1: "تقدم الهاوس الدولي السعودية لأولياء الأمور الفرصة لتسجيل أطفالهم في فصول اللغة الإنجليزية عبر الإنترنت والتي تقدم دعماً إضافياً ومكثفاً للمناهج الوطنية الرسمية لوزارة التعليم.",
      text2: "يتم تدريس الفصول الدراسية عبر الإنترنت للمتعلمين الصغار من الصف الخامس إلى الثاني عشر بواسطة معلمين خبراء معتمدين ومتحدثين أصليين في أوقات مرنة من 3 مساءً إلى 7 مساءً.",
      text3: "تتيح البرامج المرنة للطلاب الدراسة للفترة التي يحتاجونها، من 3 إلى 8 ساعات أسبوعياً، باستخدام المواد والكتب الدراسية نفسها المعتمدة في المدارس السعودية."
    },
    objectives: {
      title: "أهداف البرنامج",
      subtitle: "تمكين الطلاب الصغار من التفوق الأكاديمي واجتياز اختباراتهم المدرسية بنجاح:",
      items: [
        "مراجعة وتثبيت منهج اللغة الإنجليزية المعتمد في المدارس لضمان النجاح الباهر في الامتحانات.",
        "تطوير المهارات اللغوية العملية للمتحدث من خلال التطبيق العملي المستمر.",
        "مراجعة وتطبيق المفردات والكلمات الأساسية للمنهج السعودي الوطني في سياقاتها الصحيحة.",
        "التدريب على قواعد المنهج الدراسي الوطني من خلال المحادثات، والألعاب، والأنشطة اللغوية الممتعة.",
        "استخدام الإنجليزية بشكل تعاوني في فصول افتراضية تفاعلية ودية وداعمة.",
        "تقديم رعاية واهتمام فردي مخصص لطفلك."
      ]
    },
    facts: {
      title: "هل تعلم؟",
      items: [
        "تتطلب معظم الوظائف المهنية والمستقبلية في المملكة مهارات إنجليزية متطورة وقوية.",
        "مع تنوع الاقتصاد السعودي تحت مظلة رؤية 2030، ستصبح مهارات الإنجليزية أكثر أهمية للشباب الداخلين لسوق العمل.",
        "كلما بدأ الطالب في تعلم اللغة الإنجليزية مبكراً، زادت فرصه في التفوق الدراسي واستخدام اللغة بطلاقة مستقبلاً.",
        "الآن، أينما كنت في المملكة ومن راحة منزلك، يمكنك وضع طفلك على طريق النجاح لتعلم اللغة مع الهاوس الدولي السعودية.",
        "يتميز النظام التعليمي في المملكة العربية السعودية بالتميز ويستمر في تحقيق تقدم كبير في ظل رؤية 2030."
      ]
    },
    comparison: {
      title: "لماذا تختار منصة الهاوس الدولي بدلاً من الدروس الخصوصية المنزلية؟",
      tutors: {
        title: "المعلمون الخصوصيون غير الخاضعين للرقابة",
        items: [
          "مكلفون للغاية مع مطالبة بعض المعلمين بمبالغ تصل إلى 150 ريالاً في الساعة.",
          "غياب تام للرقابة على جودة التدريس والمنهج.",
          "خيارات أولياء الأمور محدودة لارتكازهم على عدد قليل من المعلمين المتاحين محلياً.",
          "يدرس الطالب بمفرده تماماً دون فرصة للتفاعل والمشاركة مع مجموعة من أقرانه.",
          "عدم وجود إشراف أكاديمي أو متابعة من مؤسسة تعليمية."
        ]
      },
      ih: {
        title: "حل التعلم الإلكتروني من الهاوس الدولي",
        items: [
          "نظام تعليمي متكامل ومبسط عبر الإنترنت مع فصول افتراضية من الصف 5 إلى 12.",
          "جودة تدريب أعلى بكثير وبتكلفة منخفضة وميسرة مقارنة بالدروس الخصوصية المنزلية.",
          "عشرات المعلمين والمعلمات المؤهلين بأسعار مناسبة تتيح لأولياء الأمور خيارات أوسع.",
          "معلمون مسجلون وموثقون من مصر، الأردن، تونس، الهند، باكستان، والفلبين يحملون مؤهلات دولية.",
          "إمكانية اختيار معلمين متحدثين أصليين (أمريكان، بريطانيين، كنديين، أستراليين) لضمان تفوق طفلك."
        ]
      }
    },
    benefits: {
      title: "مزايا البرنامج الأكاديمية",
      items: [
        { title: "التعلم التواصل التفاعلي", desc: "يتعلم الصغار بأسلوب تواصل نشط يتيح لهم اكتساب اللغة بشكل طبيعي وسلس." },
        { title: "التركيز العملي المباشر", desc: "تركيز أقل على القواعد النظرية الجافة وأكبر على المهارات العملية للتحدث والكتابة." },
        { title: "التوافق مع المنهج المدرسي", desc: "محتوى التدريب متطابق بالكامل مع ما يتم تدريسه في المدارس السعودية." },
        { title: "التدريب على الامتحانات", desc: "تركيز مكثف على تدريب الطلاب وتجهيزهم لاجتياز الاختبارات المدرسية بنجاح وتفوق." },
        { title: "مجموعات صغيرة تفاعلية", desc: "الفصول الافتراضية صغيرة ومحدودة بحد أقصى 8 طلاب فقط لضمان التركيز." },
        { title: "دعم مدرسي متكامل", desc: "تدعم دوراتنا التحصيل المدرسي للطالب في كل خطوة ومرحلة دراسية." }
      ]
    },
    steps: {
      title: "خطوات تسجيل طفلك معنا",
      list: [
        { step: "الخطوة 1", desc: "تواصل مع الهاوس الدولي السعودية للحصول على مزيد من التفاصيل والخيارات المتاحة." },
        { step: "الخطوة 2", desc: "يخضع طفلك لاختبار تحديد مستوى اللغة الإنجليزية عبر الإنترنت المخصص للصغار." },
        { step: "الخطوة 3", desc: "كولي أمر، سجل الدخول إلى المنصة لاختيار وتحديد المعلم أو المعلمة الأنسب لطفلك." },
        { step: "الخطوة 4", desc: "تدرج الهاوس الدولي طفلك مع المعلم المختار في مجموعة افتراضية نشطة." },
        { step: "الخطوة 5", desc: "تأكيد عدد الساعات المطلوبة، مدة البرنامج، وإتمام عملية الدفع والموافقة." },
        { step: "الخطوة 6", desc: "بدء فصول طفلك التفاعلية مباشرة عبر الإنترنت ومتابعة تقدمه." }
      ]
    }
  }
};

export function YoungLearnersView({ lang }: { lang: string }) {
  const d = youngData[lang as "en" | "ar"] || youngData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#e85d4a] via-[#db4b38] to-[#c93b28]">
        <Image
          src="/arab_education_bg.png"
          alt="Young learners"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#e85d4a] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "احصل على تفاصيل التسجيل" : "Enquire for Child"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO AND OBJECTIVES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-rose-50 text-[#e85d4a]">
                  {lang === "ar" ? "دعم وتأسيس" : "Assistance & Support"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#e85d4a] leading-tight mb-4">
                  {d.intro.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.intro.text1}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-semibold">{d.intro.text2}</p>
                <p className="text-slate-500 text-xs leading-relaxed italic">{d.intro.text3}</p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
              >
                <h3 className="font-extrabold text-lg text-slate-800 mb-2">{d.objectives.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-6">{d.objectives.subtitle}</p>
                <div className="space-y-4">
                  {d.objectives.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                      <CheckCircle size={18} className="text-[#e85d4a] shrink-0 mt-0.5" />
                      <p className="leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* TUTORS VS IH SYSTEM COMPARISON */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.comparison.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tutors */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl bg-white border border-rose-100/50 shadow-sm shadow-ih-coral/10"
            >
              <h3 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
                <AlertCircle size={22} className="text-[#e85d4a]" />
                {d.comparison.tutors.title}
              </h3>
              <div className="space-y-4">
                {d.comparison.tutors.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e85d4a] mt-2 shrink-0" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IH */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl bg-white border border-emerald-100/50 shadow-md shadow-ih-green/10"
            >
              <h3 className="text-xl font-extrabold text-[#1fa968] mb-6 flex items-center gap-2">
                <CheckCircle size={22} className="text-[#1fa968]" />
                {d.comparison.ih.title}
              </h3>
              <div className="space-y-4">
                {d.comparison.ih.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1fa968] mt-2 shrink-0" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DID YOU KNOW FACTS PANEL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <h3 className="font-extrabold text-xl text-[#e85d4a] mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-[#e85d4a]" /> {d.facts.title}
            </h3>
            <div className="space-y-4">
              {d.facts.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-[#e85d4a] flex items-center justify-center font-bold shrink-0 text-2xs mt-0.5">{idx + 1}</span>
                  <p className="leading-relaxed font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* PROGRAM BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.benefits.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.benefits.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-ih-coral transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#e85d4a] flex items-center justify-center font-bold mb-5">
                  <Award size={20} />
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-3 leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#e85d4a]">{d.steps.title}</h2>
          </div>

          <div className="space-y-4">
            {d.steps.list.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-ih-soft hover:shadow-ih-coral transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e85d4a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#e85d4a] uppercase tracking-wide block mb-0.5">{step.step}</span>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#e85d4a] via-[#db4b38] to-[#c93b28]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "امنح طفلك التميز الدراسي والدعم اللغوي" : "Equip Your Child for Language Success"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل مع مستشاري التعليم لتحديد المستوى واختيار المعلم الأنسب لبدء الفصول الافتراضية."
                : "Contact our coordinators to arrange placement testing, browse accredited teachers, and confirm schedules."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#e85d4a] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل مع المنسقين" : "Contact Program Advisors"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 5. ONLINE CLASSES VIEW ─────────────────────────────────────── */
export const onlineClassesData = {
  en: {
    hero: {
      title: "Online / Virtual Classes",
      tagline: "World-class instruction. Anywhere. Anytime.",
      badge: "Virtual School & Blended Learning",
    },
    intro: {
      title: "Convenient Learning with IH Virtual School",
      text1: "Learning English has never been more convenient than with IH’s virtual school. The IH virtual school is open to both companies and the general public.",
      text2: "As training budgets tighten, IH allows our corporate clients to enroll employees on English programs that will not disrupt shift patterns. Quite simply, the benefits are enormous.",
      text3: "There is now no need to arrange gate passes for teachers, organize shift cover, or leave sections undermanned as employees attend English courses in order to qualify for promotion. Why? Because IH Saudi Arabia offers companies the opportunity to learn English with a native speaker instructor at the click of a mouse.",
      text4: "IH’s live group classes bring the immersive experience of collaborative learning with an instructor and fellow students right to you at any time from 7.30am to 9pm – six days a week.",
      text5: "Whether it’s staff located at remote locations, or offshore workers on oil platforms, IH’s virtual school means that distance is no longer a barrier.",
      text6: "Our expert instructors motivate, guide, and empower learners from the moment the class goes live to create real world situations and a genuine need to communicate."
    },
    specs: {
      title: "What Do You Need?",
      items: [
        "A desktop computer, laptop, tablet device, or smartphone.",
        "A stable internet connection.",
        "Webcam and microphone for live interactive participation."
      ],
      tagline: "Saudi Arabia’s educational system is excellent and continues to make great progress under Vision 2030."
    },
    blended: {
      title: "How IH Blended Learning Works for Companies",
      subtitle: "A 360-degree training system designed for modern industry in the Kingdom",
      consultation: "IH offers a FREE consultation. Contact us to learn exactly what online English learning can mean for your company right now on +966 (0)13 814 58 36 ext 32.",
      items: [
        { title: "30 Years in Saudi Industry", desc: "International House is your training partner that has been on the ground, in Saudi Arabia, and embedded in Saudi industry for over 30 years.", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
        { title: "360 Degree Service Setup", desc: "IH offers a 360 degree service from needs analysis, placement testing, consultation with your HR/TDD specialists, to designing the most efficient online training plan.", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "Hybrid Orientation Session", desc: "Direct contact orientation session where instructors meet employees to explain goals in person and help learners adjust to live online classes.", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80" },
        { title: "Transition Support Setup", desc: "Full support when issues with technical aptitude, age, or motivation are identified so candidates can adapt, with face-to-face classes remaining a primary option.", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" },
        { title: "Dhahran & Local Centers Support", desc: "Local instructors on hand in Jubail & Yanbu branches, with all programs subject to ongoing quality control from our business office in Dhahran.", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80" },
        { title: "Custom HR Reporting System", desc: "Attendance and progress reports are key parts of our online LMS, fully customized to the requirements of each corporate client.", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    offerings: {
      title: "Online Programs & Short Courses Offered",
      list: [
        "Technical English (specific for refineries, utilities, energy, hospitals, government)",
        "Business English and General English programs",
        "Specialist ESP programs",
        "Short courses: Technical Report Writing",
        "Short courses: Meetings and Negotiating",
        "Short courses: Professional Emailing"
      ]
    },
    teachers: {
      title: "IH Online Teachers",
      desc1: "No matter how good the technology — the teachers have to be even better. All IH teachers are highly trained, experienced, and fully familiar with the Saudi learning environment.",
      desc2: "Delivered by instructors who normally work in Saudi industry delivering face-to-face programs, ensuring motivate employees and optimized training time.",
      ladyTitle: "International Lady Instructors Database",
      ladyDesc: "For Young Learners (Ages 7-11) and female students, IH provides a database of international lady instructors. Parents can select based on hourly rates or nationality. Database also includes hundreds of male/female native speakers in the U.S., Canada, and the U.K. ideal for private tuition, exam prep (TOEFL, IELTS), conversation, and General English."
    }
  },
  ar: {
    hero: {
      title: "الفصول الافتراضية وعبر الإنترنت",
      tagline: "تعليم عالمي المستوى. في أي مكان. في أي وقت.",
      badge: "المدرسة الافتراضية والتعلم المدمج",
    },
    intro: {
      title: "تعلم ميسر عبر مدرسة الهاوس الدولي الافتراضية",
      text1: "لم يكن تعلم اللغة الإنجليزية أكثر ملاءمة ومرونة من أي وقت مضى كما هو الحال مع المدرسة الافتراضية للهاوس الدولي، المتاحة للشركات والجمهور العام.",
      text2: "مع تشديد ميزانيات التدريب، تسمح الهاوس الدولي لعملائنا من الشركات بتسجيل الموظفين في برامج إنجليزية لن تؤثر على نوبات العمل بالشركة.",
      text3: "الآن، لا داعي لتنظيم تصاريح الدخول للمعلمين، أو ترتيب تغطية نوبات العمل، أو ترك الأقسام بإنتاجية منخفضة أثناء حضور الموظفين للدورات للترقية. لماذا؟ لأن الهاوس الدولي السعودية تتيح للشركات فرصة تعلم الإنجليزية مع مدرب متحدث أصلي بنقرة زر واحدة.",
      text4: "تجمع فصولنا الجماعية المباشرة تجربة تفاعلية غنية ومثمرة مع مدرب ومجموعة من الزملاء من الساعة 7:30 صباحاً وحتى 9 مساءً - ستة أيام في الأسبوع.",
      text5: "سواء كان الموظفون متواجدين في مواقع نائية بعيدة، أو عمال منصات بحرية على حقول النفط، فإن مدرسة الهاوس الدولي الافتراضية تعني أن البعد والمسافات لم تعد عائقاً.",
      text6: "معلمونا الخبراء يحفزون ويوجهون ويمكنون المتعلمين منذ لحظة بدء الفصل المباشر لخلق بيئات محاكاة حقيقية وتوليد دافع حقيقي للتواصل باللغة."
    },
    specs: {
      title: "ماذا تحتاج للبدء؟",
      items: [
        "جهاز كمبيوتر مكتبي، لابتوب، جهاز تابلت، أو هاتف ذكي.",
        "اتصال إنترنت مستقر وموثوق.",
        "كاميرا ويب وميكروفون للمشاركة التفاعلية في المحاضرة المباشرة."
      ],
      tagline: "النظام التعليمي في المملكة العربية السعودية ممتاز ويستمر في إحراز تقدم رائع تحت مظلة رؤية 2030."
    },
    blended: {
      title: "كيف يعمل التعلم المدمج (Blended) للشركات؟",
      subtitle: "نظام تدريب متكامل 360 درجة مدمج ومصمم لمواكبة متطلبات الصناعة الحديثة",
      consultation: "تقدم الهاوس الدولي استشارة مجانية بالكامل. اتصل بنا لمعرفة ما يمكن أن يقدمه التعلم الإلكتروني لشركتك الآن على +966 (0)13 814 58 36 تحويلة 32.",
      items: [
        { title: "30 عاماً في قلب الصناعة السعودية", desc: "الهاوس الدولي هي شريك التدريب المعتمد المتواجد في الميدان والمندمج في قلب الصناعة والشركات السعودية لأكثر من 30 عاماً.", shadow: "shadow-ih-blue", color: "#002F6C", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" },
        { title: "إعداد خدمة 360 درجة شاملة", desc: "نقدم دورة متكاملة تبدأ من تحليل الاحتياجات واختبار تحديد المستوى، والاستشارة الفنية مع مسؤولي الموارد البشرية والتطوير لتصميم الخطة التدريبية المخصصة.", shadow: "shadow-ih-green", color: "#1fa968", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" },
        { title: "جلسة توجيه حضورية مدمجة", desc: "جلسة حضورية أولية مباشرة يلتقي فيها المدربون بالموظفين لشرح الأهداف اللغوية شخصياً ومساعدة المتعلمين على التأقلم السريع مع الفصول الرقمية.", shadow: "shadow-ih-purple", color: "#8b3275", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80" },
        { title: "دعم التكيف الفني والذهني", desc: "دعم فني ونفسي كامل للمرشحين الذين يواجهون صعوبات تتعلق بالتقنية، السن، أو الحافز لمساعدتهم على التأقلم مع إبقاء التدريب الحضوري خياراً أساسياً.", shadow: "shadow-ih-coral", color: "#e85d4a", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" },
        { title: "دعم فروع الجبيل وينبع ومكتب الظهران", desc: "مدربون محليون متواجدون للدعم الإضافي في فروع الجبيل وينبع، مع خضوع البرامج لرقابة دورية على الجودة من مكتب أعمالنا الرئيسي في الظهران.", shadow: "shadow-ih-peach", color: "#f09550", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80" },
        { title: "تقارير ونظام إدارة تعلم LMS مخصص", desc: "تعد تقارير الحضور الأكاديمي وتقارير التقدم الفردية جزءاً أساسياً من نظام إدارة التعلم لدينا، والمصمم ليلبي احتياجات كل شركة.", shadow: "shadow-ih-yellow", color: "#f6c96a", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80" }
      ]
    },
    offerings: {
      title: "الدورات والبرامج الإلكترونية القصيرة المتاحة",
      list: [
        "الإنجليزية التقنية (المتخصصة للمصافي، المرافق، الطاقة، القطاع الصحي والحكومي)",
        "الإنجليزية للأعمال وبرامج اللغة الإنجليزية العامة عبر الإنترنت",
        "برامج الإنجليزية لأغراض خاصة (ESP) المتنوعة",
        "دورات قصيرة: كتابة التقارير الفنية بالإنجليزية",
        "دورات قصيرة: إدارة الاجتماعات والتفاوض بالأعمال",
        "دورات قصيرة: كتابة رسائل البريد الإلكتروني المهنية"
      ]
    },
    teachers: {
      title: "معلمو الهاوس الدولي أونلاين",
      desc1: "مهما كانت التقنية متطورة - يجب أن يكون المعلمون أفضل. جميع معلمي الهاوس الدولي مدربون تدريباً عالياً ولديهم خبرة ومعرفة تامة ببيئة التعليم والتدريب في المملكة.",
      desc2: "يتم تقديم البرامج من قبل مدربين يقدمون البرامج الحضورية عادة لقطاعات الصناعة السعودية، لضمان إدارة التعلم وتحفيز الموظفين بكفاءة.",
      ladyTitle: "قاعدة بيانات المعلمات الدوليات المعتمدات",
      ladyDesc: "لتعليم الصغار (أعمار 7-11) والطالبات، توفر الهاوس الدولي قاعدة بيانات معلمات دوليات متميزات مع إمكانية التصفية حسب الأجر أو الجنسية. كما تضم قاعدة البيانات مئات المعلمين والمعلمات المتحدثين الأصليين في أمريكا وكندا وبريطانيا لإعطاء الدروس الخصوصية والتحضير لـ IELTS وتوفل والمحادثة."
    }
  }
};

export function OnlineClassesView({ lang }: { lang: string }) {
  const d = onlineClassesData[lang as "en" | "ar"] || onlineClassesData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#f09550] via-[#df8540] to-[#ce7530]">
        <Image
          src="/arab_education_bg.png"
          alt="Online classes"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#f09550] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اطلب استشارة مجانية" : "Free Consultation"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* VIRTUAL SCHOOL INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 text-slate-700">
            <h2 className="text-3xl font-extrabold text-[#f09550] mb-6">{d.intro.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed font-semibold">{d.intro.text1}</p>
            <p className="text-sm leading-relaxed">{d.intro.text2}</p>
            <p className="text-sm leading-relaxed">{d.intro.text3}</p>
            <div className="p-6 rounded-3xl bg-[#fef5ee] border border-[#f09550]/20 my-8">
              <p className="text-[#ce7530] text-sm leading-relaxed font-medium">{d.intro.text4}</p>
            </div>
            <p className="text-sm leading-relaxed">{d.intro.text5}</p>
            <p className="text-sm leading-relaxed">{d.intro.text6}</p>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* BLENDED LEARNING GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#f09550] mb-4">{d.blended.title}</h2>
            <p className="text-slate-500 text-sm mb-6">{d.blended.subtitle}</p>
            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 text-xs sm:text-sm font-semibold text-[#ce7530] max-w-2xl mx-auto">
              {d.blended.consultation}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {d.blended.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-8 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed transition-colors duration-500 group-hover/card:text-white/95">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 transition-colors duration-500 group-hover/card:text-white pt-4">
                      <span>{lang === "ar" ? "تفاصيل الخدمة" : "Service Details"}</span>
                      <ChevronRight size={12} className="transition-transform duration-300 group-hover/card:translate-x-1 rtl:rotate-180 rtl:group-hover/card:-translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECS AND offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* specs */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl text-slate-800 mb-6 flex items-center gap-2">
                <Monitor className="text-[#f09550]" /> {d.specs.title}
              </h3>
              <div className="space-y-4 mb-6">
                {d.specs.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm">
                    <CheckCircle size={18} className="text-[#f09550] shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-2xs italic leading-relaxed pt-4 border-t border-slate-200">{d.specs.tagline}</p>
            </motion.div>

            {/* offerings */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <h3 className="font-extrabold text-xl text-[#002F6C] mb-6 flex items-center gap-2">
                <BookOpen className="text-[#002F6C]" /> {d.offerings.title}
              </h3>
              <div className="space-y-3">
                {d.offerings.list.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002F6C] mt-2 shrink-0" />
                    <p className="leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" />

      {/* TEACHERS DATABASE & LADY INSTRUCTORS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-orange-50 text-[#ce7530]">
                  {lang === "ar" ? "قاعدة بيانات الكوادر التعليمية" : "World-Class Educators"}
                </span>
                <h2 className="text-3xl font-extrabold mb-6 text-[#002F6C]">{d.teachers.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.teachers.desc1}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-semibold">{d.teachers.desc2}</p>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-md shadow-ih-peach/10"
              >
                <h4 className="font-extrabold text-slate-800 text-base mb-3 flex items-center gap-2">
                  <Star size={18} className="text-[#f09550]" />
                  {d.teachers.ladyTitle}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{d.teachers.ladyDesc}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#f09550] via-[#df8540] to-[#ce7530]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "ابدأ الدراسة أونلاين اليوم" : "Empower Your Training Online"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل معنا اليوم لبدء استشارتك المجانية وتخطيط تدريب فريقك أونلاين."
                : "Get in touch today to schedule your academic needs analysis and select your instructors."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#f09550] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "سجل استشارتك الآن" : "Apply for Online Classes"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── 6. PLACEMENT TEST VIEW ─────────────────────────────────────── */
export const placementData = {
  en: {
    hero: {
      title: "Placement Test",
      tagline: "Know exactly where your team stands — and where to go next.",
      badge: "Validated Assessment Solutions",
    },
    intro: {
      title: "30+ Years of Corporate Placement Testing",
      text1: "For over 30 years, IH Saudi Arabia has offered comprehensive English language placement testing services for our corporate clients in the Kingdom.",
      text2: "IH Saudi Arabia specializes in providing highly accurate placement test results for major clients such as SABIC, CHEMANOL, SASREF, ARAMCO, TASNEE, SATORP, SEC, SIPCHEM, and hundreds of other companies all over the Kingdom. IH has also processed thousands of tests for HRDF, the Colleges of Excellence Program, and diverse sectors including hospitals, banks, and hotels.",
      text3: "The data generated from these IH English language placement tests is then benchmarked to globalized language learning standards so that recruitment specialists can select the best candidates for current job vacancies, identify qualified new hires for initial training programs, or identify any language competency gaps that current employees may need to close before they are fully eligible for promotion.",
      text4: "This ensures training efficiency as learners are allocated the precise English level that they need to progress."
    },
    formats: {
      title: "Flexible Testing Options",
      subtitle: "Choose the administration format that fits your operations",
      consultation: "For an entirely free consultation, all corporate clients are invited to contact IH Saudi Arabia for further details and to select the option that works best.",
      items: [
        {
          title: "Distance Placement Testing",
          desc: "Avoid the cost incurred of flying hundreds of job applicants to your company’s site where they then need to be issued gate passes. Highly recommended for shift workers and offshore oil platforms.",
          details: "Includes a unique online test, an individual writing test, and an oral interview via Skype/Zoom/Teams with an assessor. High security with rigorous ID checks. Candidates need a PC/laptop, webcam, and stable internet.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "Testing at Selected Venues",
          desc: "IH instructors visit any location in the Kingdom to administer paper-based placement tests, including grammar, writing, listening, and oral tests. Ideal for massive candidate numbers.",
          details: "Additionally, all IH projects include an inbuilt placement testing service. Visiting instructors are fully trained to manage testing requirements under their normal scope of work.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    validation: {
      title: "Global Benchmarking & Standards",
      desc1: "All IH placement test results are benchmarked to the Common European Framework (CEFR) from A1 to C2.",
      desc2: "Testing instruments have been designed by our world-class academic partners and internationally validated for use in global industry."
    }
  },
  ar: {
    hero: {
      title: "اختبار تحديد المستوى للشركات",
      tagline: "اعرف بالضبط أين يقف فريقك — وإلى أين يتجه.",
      badge: "حلول تقييم معتمدة",
    },
    intro: {
      title: "أكثر من 30 عاماً في اختبارات التحديد للشركات",
      text1: "لأكثر من 30 عاماً، تقدم الهاوس الدولي السعودية خدمات اختبارات تحديد مستوى اللغة الإنجليزية الشاملة لعملائنا من الشركات في المملكة.",
      text2: "تتخص الهاوس الدولي السعودية في تقديم نتائج اختبارات تحديد المستوى بدقة عالية لعملاء بارزين مثل سابك، كيمانول، ساسرف، أرامكو، التصنيع، ساتورب، الشركة السعودية للكهرباء، سبكيم، ومئات الشركات الأخرى في جميع أنحاء المملكة. كما قامت الهاوس الدولي بمعالجة آلاف الاختبارات لصندوق تنمية الموارد البشرية (هدف)، وبرنامج كليات التميز، وقطاعات متنوعة تشمل المستشفيات والبنوك والفنادق.",
      text3: "يتم بعد ذلك قياس البيانات الناتجة عن هذه الاختبارات وفقاً لمعايير تعلم اللغة العالمية (CEFR) بحيث يمكن لمتخصصي التوظيف اختيار أفضل المرشحين للوظائف الشاغرة الحالية، وتحديد الموظفين الجدد المؤهلين لبرامج التدريب الأولية، أو تحديد أي فجوات في الكفاءة اللغوية يحتاج الموظفون الحاليون إلى سدها قبل ترقيتهم.",
      text4: "يضمن هذا كفاءة التدريب حيث يتم تخصيص المستوى الدقيق الذي يحتاجه المتعلمون للتقدم."
    },
    formats: {
      title: "خيارات اختبارات مرنة وميسرة",
      subtitle: "اختر صيغة التقييم التي تناسب سير العمليات في منشأتك",
      consultation: "للحصول على استشارة مجانية بالكامل، ندعو جميع الشركات للتواصل مع الهاوس الدولي السعودية لتحديد الخيار الأنسب لبيئة عملهم.",
      items: [
        {
          title: "اختبار التحديد عن بعد",
          desc: "تجنب التكاليف المترتبة على نقل مئات المتقدمين للوظائف إلى مقر شركتك واستخراج تصاريح الدخول. خيار مثالي لعمال الورديات ومنصات النفط البحرية.",
          details: "يتضمن اختباراً عبر الإنترنت، واختبار كتابة فردي، ومقابلة شفهية عبر زووم أو تيمز بإشراف مقيم لغوي معتمد من الهاوس الدولي. يتميز بالأمان العالي مع التحقق من الهوية. يتطلب جهاز كمبيوتر/لابتوب مع كاميرا ويب وإنترنت مستقر.",
          shadow: "shadow-ih-blue",
          color: "#002F6C",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
        },
        {
          title: "الاختبار في مواقع محددة بالزيارة",
          desc: "يمكن لمدربي الهاوس الدولي زيارة أي موقع في المملكة لإجراء الاختبارات الورقية الشاملة، بما في ذلك القواعد والكتابة والاستماع والمقابلة الشفهية. ممتاز للأعداد الكبيرة.",
          details: "تتضمن مشاريع الهاوس الدولي خدمة اختبار تحديد مستوى مدمجة. المدربون في موقعك مدربون بالكامل لإدارة وإجراء اختبارات التحديد ضمن نطاق عملهم المعتاد.",
          shadow: "shadow-ih-green",
          color: "#1fa968",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=500&q=80"
        }
      ]
    },
    validation: {
      title: "المعايرة والاعتمادات العالمية",
      desc1: "جميع نتائج اختبارات تحديد المستوى من الهاوس الدولي مواءمة ومبنية على مستويات الإطار الأوروبي المشترك (CEFR) من A1 إلى C2.",
      desc2: "تم تصميم أدوات التقييم من قبل شركائنا الأكاديميين المرموقين عالمياً وتم التحقق من صحتها دولياً للاستخدام في قطاعات الصناعة العالمية."
    }
  }
};

export function PlacementTestView({ lang }: { lang: string }) {
  const d = placementData[lang as "en" | "ar"] || placementData.en;

  return (
    <div className="pt-[72px]">
      {/* HERO SECTION */}
      <section className="py-24 sm:py-32 relative overflow-hidden group bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <Image
          src="/arab_education_bg.png"
          alt="Placement test"
          fill
          className="object-cover object-center opacity-25 group-hover:opacity-40 transition-opacity duration-500 ease-in-out mix-blend-overlay pointer-events-none"
          priority
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-32 translate-x-32 bg-white" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-16 -translate-x-16 bg-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {d.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {d.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
              {d.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-lg hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "اطلب استشارة مجانية" : "Free Consultation"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-2" />

      {/* INTRO CONTEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 text-slate-700">
            <h2 className="text-3xl font-extrabold text-[#002F6C] mb-6">{d.intro.title}</h2>
            <p className="text-base sm:text-lg leading-relaxed font-semibold">{d.intro.text1}</p>
            <p className="text-sm leading-relaxed">{d.intro.text2}</p>
            <p className="text-sm leading-relaxed">{d.intro.text3}</p>
            <div className="p-5 rounded-2xl bg-[#f0f4ff] border border-blue-100 my-6">
              <p className="text-[#002F6C] text-sm leading-relaxed font-bold">{d.intro.text4}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ThemeAccent height="h-1.5" pills />

      {/* TESTING FORMATS COMPARISON GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#002F6C] mb-4">{d.formats.title}</h2>
            <p className="text-slate-500 text-sm mb-6">{d.formats.subtitle}</p>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm font-semibold text-[#002F6C] max-w-2xl mx-auto">
              {d.formats.consultation}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
            {d.formats.items.map((item, idx) => {
              const cardBorder = `color-mix(in srgb, ${item.color} 20%, transparent)`;
              const cardHoverBorder = `color-mix(in srgb, ${item.color} 50%, transparent)`;
              return (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={idx}
                  className={`relative overflow-hidden p-8 rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-1.5 group/card cursor-pointer ${item.shadow}`}
                  style={{ borderColor: cardBorder }}
                  whileHover={{
                    borderColor: cardHoverBorder,
                    background: `linear-gradient(135deg, ${item.color} 0%, color-mix(in srgb, ${item.color} 75%, #000000) 100%)`
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-center opacity-[0.35] group-hover/card:opacity-[0.65] transition-opacity duration-500 pointer-events-none z-0 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/30 transition-colors duration-500 pointer-events-none z-0" />

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[260px]">
                    <div>
                      <h4 className="font-extrabold text-lg text-slate-800 transition-colors duration-500 group-hover/card:text-white leading-snug mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed transition-colors duration-500 group-hover/card:text-white/95 mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 group-hover/card:border-white/20">
                      <p className="text-slate-500 text-2xs sm:text-xs leading-relaxed transition-colors duration-500 group-hover/card:text-white/80 font-medium">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALIDATION BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#002F6C] flex items-center justify-center font-bold mb-6 mx-auto shadow-sm">
              <Award size={24} />
            </div>
            <h3 className="font-extrabold text-xl text-[#002F6C] mb-4">{d.validation.title}</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4 font-semibold">{d.validation.desc1}</p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{d.validation.desc2}</p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-[#002F6C] via-[#083e87] to-[#0c4ea6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              {lang === "ar" ? "جاهز لتقييم كفاءة موظفيك؟" : "Assess Your Workforce Capabilities"}
            </h2>
            <p className="text-white/80 mb-10 text-base sm:text-lg">
              {lang === "ar"
                ? "تواصل معنا اليوم لبدء استشارتك المجانية واختيار خيار اختبار التحديد المناسب."
                : "Schedule a free consultation with our academic specialists to select Distance or On-site testing."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white font-bold text-sm text-[#002F6C] shadow-xl hover:scale-105 transition-all duration-300"
              >
                {lang === "ar" ? "تواصل مع مستشاري التقييم" : "Enquire for Assessment"} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
