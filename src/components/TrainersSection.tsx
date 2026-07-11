import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  ShieldCheck, 
  Dumbbell, 
  Sparkles, 
  X, 
  Send, 
  Check, 
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Briefcase,
  GraduationCap
} from "lucide-react";

interface Coach {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  avatar: string;
  age: string;
  workHours: string;
  experience: string;
}

const maleCoaches: Coach[] = [
  {
    id: "m-mohamed",
    name: "الكابتن محمد علي",
    role: "المدير الفني وأخصائي كمال الأجسام",
    specialties: [
      "تخطيط وتصميم البرامج التدريبية المتقدمة",
      "تضخيم وبناء الكتلة العضلية بكفاءة",
      "تأهيل أبطال كمال الأجسام والتحضير للبطولات"
    ],
    certifications: [
      "شهادة معتمدة من الاتحاد الدولي لبناء الأجسام (IFBB)",
      "دبلوم التغذية الرياضية والعلاجية المتقدمة",
      "رخصة التدريب الرياضي من وزارة الشباب والرياضة"
    ],
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
    age: "34 عاماً",
    workHours: "الشيفت الصباحي (8:00 ص - 4:00 م)",
    experience: "10 سنوات خبرة في التدريب الاحترافي"
  },
  {
    id: "m-mostafa",
    name: "الكابتن مصطفى كمال",
    role: "أخصائي التأهيل البدني والتأهيل العسكري",
    specialties: [
      "تأهيل المتقدمين للكليات العسكرية والشرطة",
      "تأهيل إصابات الملاعب والعلاج الطبيعي الحركي",
      "رفع معدلات اللياقة البدنية والتحمل العضلي"
    ],
    certifications: [
      "بكالوريوس التربية الرياضية - جامعة المنيا",
      "دورة تأهيل الإصابات الرياضية والتحريك الوظيفي المتقدم",
      "شهادة الإسعافات الأولية والإنعاش القلبي الرئوي"
    ],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    age: "29 عاماً",
    workHours: "الشيفت المسائي (2:00 ظ - 10:00 م)",
    experience: "7 سنوات خبرة عملية بالتأهيل البدني"
  },
  {
    id: "m-ahmed",
    name: "الكابتن أحمد سعد",
    role: "مدرب الكروس فيت والفتنس المعتمد",
    specialties: [
      "كلاسات حرق الدهون وتخسيس الوزن السريع",
      "تدريبات الكروس فيت (CrossFit) عالية الشدة",
      "تأسيس اللياقة والرشاقة الحركية للشباب والأطفال"
    ],
    certifications: [
      "شهادة مدرب CrossFit Level 2 الدولية المعتمدة",
      "شهادة تدريب الكارديو واللياقة البدنية عالية الكثافة",
      "حزام أسود دان 2 في رياضة الكاراتيه والدفاع عن النفس"
    ],
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    age: "27 عاماً",
    workHours: "الشيفت المسائي (4:00 م - 12:00 ص)",
    experience: "5 سنوات خبرة في تدريب الفتنس والكروس فيت"
  }
];

const femaleCoaches: Coach[] = [
  {
    id: "w-yasmin",
    name: "الكابتن ياسمين طارق",
    role: "أخصائية الفتنس والزومبا والأيروبكس",
    specialties: [
      "إدارة كلاسات الزومبا والأيروبكس الجماعية الحماسية",
      "برامج شد الترهلات وتشكيل القوام النسائي",
      "متابعة تطور قياسات الوزن ونسبة الدهون الحشوية"
    ],
    certifications: [
      "شهادة مدرب زومبا مرخص ومسجل دولياً (ZIN)",
      "شهادة تدريب الفتنس والأيروبكس من الأكاديمية العربية",
      "دورة الكارديو والتمارين السويدية للسيدات"
    ],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    age: "28 عاماً",
    workHours: "شيفت السيدات (9:00 ص - 3:00 م)",
    experience: "6 سنوات في التدريب الشخصي والزومبا"
  },
  {
    id: "w-sara",
    name: "الكابتن سارة محمود",
    role: "أخصائية اليوجا والاستطالة والسبا",
    specialties: [
      "تمارين التأمل والتوازن والتحسين النفسي والجسدي",
      "كلاسات الاستطالة (Stretching) العميقة وزيادة المرونة",
      "تأهيل القوام للسيدات والحوامل وكبار السن"
    ],
    certifications: [
      "شهادة مدرب يوجا واستطالة معتمد دولياً (RYT-200)",
      "دورة التدريب الصحي والرياضي المتكامل للسيدات",
      "شهادة أخصائية استشفاء حراري وعضلي"
    ],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    age: "31 عاماً",
    workHours: "شيفت السيدات (10:00 ص - 4:00 م)",
    experience: "8 سنوات خبرة في اليوجا واللياقة البدنية"
  },
  {
    id: "w-norhan",
    name: "الكابتن نورهان أحمد",
    role: "أخصائية تغذية السيدات واللياقة النسائية",
    specialties: [
      "تصميم وجبات دايت مرنة ومحسوبة السعرات دون حرمان",
      "علاج وتخسيس حالات تكيس المبيضين ومقاومة الأنسولين",
      "متابعة دقيقة وتدريب برايفت شخصي لمشتركات النادي"
    ],
    certifications: [
      "دبلومة التغذية العلاجية والرياضية المعتمدة",
      "كورس التدريب الشخصي المتخصص للسيدات من (NASM)",
      "شهادة معتمدة في تصميم البرامج الغذائية للرياضيين"
    ],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    age: "26 عاماً",
    workHours: "شيفت السيدات (1:00 م - 7:00 م)",
    experience: "4 سنوات في التغذية الرياضية والتدريب النسائي"
  }
];

export default function TrainersSection() {
  const [genderTab, setGenderTab] = useState<"men" | "women">("men");
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  const currentCoaches = genderTab === "men" ? maleCoaches : femaleCoaches;

  const handleOrderCoach = (coach: Coach) => {
    const coachTitle = genderTab === "men" ? "الكابتن" : "الكابتن المتميزة";
    const text = `السلام عليكم كابتن إدارة VIP GYM، أود الاستفسار وحجز التدريب الخاص (Private Personal Training) مع:
    
🏅 المدرب المختار: ${coachTitle} ${coach.name}
💼 المسمى الوظيفي: ${coach.role}
🕒 شيفت العمل المناسب لي: ${coach.workHours}

أرجو التواصل لتوضيح رسوم التدريب الخاص والباقات المتاحة ومواعيد الحصص. شكراً لكم! 🥇`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/201007555737?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="trainers" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16 text-right" dir="rtl">
      {/* Background radial shine */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الرابع • 04</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            نخبة من <span className="neon-gradient-text uppercase">المدربين والمدربات المحترفين</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            فريق تدريبي معتمد دولياً وحاصل على أعلى المؤهلات العلمية لمساعدتك في رسم مسارك التدريبي ومتابعة أدائك خطوة بخطوة.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Gender Tabs Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#131618] border border-stone-800 p-1 rounded-full flex gap-1">
            <button
              onClick={() => setGenderTab("women")}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                genderTab === "women"
                  ? "bg-pink-500 text-white shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>طاقم المدربات (السيدات)</span>
            </button>
            <button
              onClick={() => setGenderTab("men")}
              className={`px-8 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                genderTab === "men"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>طاقم المدربين (الرجال)</span>
            </button>
          </div>
        </div>

        {/* Trainers Cards Grid with concentric circles behind background-free round portraits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {currentCoaches.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-[#121517]/95 border rounded-2xl p-6 text-center flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group ${
                genderTab === "women" 
                  ? "border-stone-850 hover:border-pink-500/20 shadow-lg shadow-pink-950/5" 
                  : "border-stone-850 hover:border-secondary/20 shadow-lg shadow-stone-950/10"
              }`}
            >
              <div>
                {/* Circular Mask & Concentric Circles Background */}
                <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center overflow-visible">
                  {/* Outer Pulsing Glow Circle using Website Theme */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-[spin_40s_linear_infinite] transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/30 animate-[spin_40s_linear_infinite]" : "border-secondary/30 animate-[spin_40s_linear_infinite]"
                  }`} />
                  
                  {/* Concentric Rotating Ring */}
                  <div className={`absolute w-[90%] h-[90%] rounded-full border border-solid transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/20" : "border-secondary/20"
                  }`} />

                  {/* Inner Textured Grid Backdrop */}
                  <div className="absolute w-[82%] h-[82%] rounded-full overflow-hidden bg-stone-950/80 border border-stone-800 flex items-center justify-center">
                    {/* SVG Dotted Grid Texture styled with Website Color */}
                    <svg className="absolute inset-0 w-full h-full opacity-35" width="100%" height="100%">
                      <defs>
                        <pattern id={`dotPattern-${coach.id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill={genderTab === "women" ? "#ec4899" : "#dbe124"} />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dotPattern-${coach.id})`} />
                    </svg>

                    {/* Glowing radial center */}
                    <div className={`absolute w-16 h-16 rounded-full blur-xl transition-colors duration-300 ${
                      genderTab === "women" ? "bg-pink-500/20" : "bg-secondary/20"
                    }`} />
                  </div>

                  {/* High Contrast Accent Rings behind image */}
                  <div className={`absolute w-[72%] h-[72%] rounded-full border-2 border-dotted animate-[spin_20s_linear_infinite] transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/40" : "border-secondary/40"
                  }`} />

                  <div className={`absolute w-[64%] h-[64%] rounded-full border border-solid transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/30" : "border-secondary/30"
                  }`} />

                  {/* The Coach Portrait: Masked into a beautiful circle portal */}
                  <div className={`w-36 h-36 rounded-full overflow-hidden border-2 relative z-10 transition-all duration-300 ${
                    genderTab === "women" 
                      ? "border-pink-500 group-hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.3)]" 
                      : "border-secondary group-hover:border-secondary shadow-[0_0_20px_rgba(219,225,36,0.3)]"
                  }`}>
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Coach Name & Role */}
                <h4 className="text-xl font-display font-black text-white mt-2 group-hover:text-secondary transition-colors">
                  {coach.name}
                </h4>
                <p className="text-stone-400 text-xs font-sans mt-1.5 leading-relaxed">
                  {coach.role}
                </p>

                {/* Small Badges / Info summary */}
                <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-stone-500 font-sans">
                  <span className="bg-[#171a1c] border border-stone-850 px-2 py-0.5 rounded-md">
                    {coach.experience}
                  </span>
                  <span className="bg-[#171a1c] border border-stone-850 px-2 py-0.5 rounded-md">
                    {coach.age}
                  </span>
                </div>
              </div>

              {/* Action - Know More Button */}
              <div className="mt-6 pt-4 border-t border-stone-850/60">
                <button
                  onClick={() => setSelectedCoach(coach)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-display font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    genderTab === "women"
                      ? "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20 border border-pink-500/20"
                      : "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
                  }`}
                >
                  <span>استعراض السيرة والتفاصيل</span>
                  <ArrowLeft className="w-4 h-4 transform -rotate-45 group-hover:translate-x-[-2px] transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern High-End Popup Modal with Captain Details & WhatsApp CTA */}
      <AnimatePresence>
        {selectedCoach && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCoach(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#101314] border border-stone-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto text-right relative z-10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedCoach(null)}
                className="absolute top-4 left-4 p-2.5 bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white rounded-xl transition-all cursor-pointer backdrop-blur-sm z-30"
                title="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Popup Header with Concentric Circles Background */}
              <div className="relative py-12 px-6 bg-gradient-to-b from-[#131718] to-[#101314] border-b border-stone-850/60 overflow-hidden text-center">
                {/* Visual Accent Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-stone-800/40 animate-[spin_80s_linear_infinite] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-stone-850 pointer-events-none" />

                {/* Large Circle Portrait with Concentric Circles & Textures */}
                <div className="relative w-44 h-44 mx-auto mb-4 flex items-center justify-center overflow-visible">
                  {/* Outer Pulsing Glow Circle using Website Theme */}
                  <div className={`absolute inset-0 rounded-full border-2 border-dashed animate-[spin_35s_linear_infinite] transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/30 animate-[spin_35s_linear_infinite]" : "border-secondary/30 animate-[spin_35s_linear_infinite]"
                  }`} />
                  
                  {/* Concentric Rotating Ring */}
                  <div className={`absolute w-[90%] h-[90%] rounded-full border border-solid transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/20" : "border-secondary/20"
                  }`} />

                  {/* Inner Textured Grid Backdrop */}
                  <div className="absolute w-[82%] h-[82%] rounded-full overflow-hidden bg-stone-950/80 border border-stone-800 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full opacity-35" width="100%" height="100%">
                      <defs>
                        <pattern id={`dotPattern-modal-${selectedCoach.id}`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill={genderTab === "women" ? "#ec4899" : "#dbe124"} />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#dotPattern-modal-${selectedCoach.id})`} />
                    </svg>

                    <div className={`absolute w-16 h-16 rounded-full blur-xl transition-colors duration-300 ${
                      genderTab === "women" ? "bg-pink-500/20" : "bg-secondary/20"
                    }`} />
                  </div>

                  {/* High Contrast Accent Rings */}
                  <div className={`absolute w-[72%] h-[72%] rounded-full border-2 border-dotted animate-[spin_15s_linear_infinite] transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/40" : "border-secondary/40"
                  }`} />

                  <div className={`absolute w-[64%] h-[64%] rounded-full border border-solid transition-colors duration-300 ${
                    genderTab === "women" ? "border-pink-500/30" : "border-secondary/30"
                  }`} />
                  
                  <div className={`w-32 h-32 rounded-full overflow-hidden border-2 relative z-10 ${
                    genderTab === "women" ? "border-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.35)]" : "border-secondary shadow-[0_0_25px_rgba(219,225,36,0.35)]"
                  }`}>
                    <img
                      src={selectedCoach.avatar}
                      alt={selectedCoach.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                </div>

                {/* Captain Name & Tag */}
                <h3 className="text-xl sm:text-2xl font-display font-black text-white relative z-10">
                  {selectedCoach.name}
                </h3>
                <p className={`text-xs font-display font-black mt-1.5 tracking-wider uppercase relative z-10 ${
                  genderTab === "women" ? "text-pink-400" : "text-secondary"
                }`}>
                  {selectedCoach.role}
                </p>
              </div>

              {/* Popup Body */}
              <div className="p-6 space-y-6">
                
                {/* Info Card Grid */}
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Experience */}
                  <div className="bg-[#14181a] border border-stone-850 p-3 rounded-xl text-center">
                    <Briefcase className={`w-4 h-4 mx-auto mb-1.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                    <span className="block text-[10px] text-stone-500 font-sans">سنوات الخبرة</span>
                    <span className="text-xs font-display font-bold text-white mt-1 block">
                      {selectedCoach.experience.split(" ")[0]} {selectedCoach.experience.split(" ")[1] || "سنوات"}
                    </span>
                  </div>

                  {/* Age */}
                  <div className="bg-[#14181a] border border-stone-850 p-3 rounded-xl text-center">
                    <User className={`w-4 h-4 mx-auto mb-1.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                    <span className="block text-[10px] text-stone-500 font-sans">عمر الكابتن</span>
                    <span className="text-xs font-display font-bold text-white mt-1 block">
                      {selectedCoach.age}
                    </span>
                  </div>

                  {/* Work Hours */}
                  <div className="bg-[#14181a] border border-stone-850 p-3 rounded-xl text-center">
                    <Clock className={`w-4 h-4 mx-auto mb-1.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                    <span className="block text-[10px] text-stone-500 font-sans">دوام العمل</span>
                    <span className="text-[10px] font-display font-bold text-white mt-1 block leading-tight truncate" title={selectedCoach.workHours}>
                      {selectedCoach.workHours.replace("الشيفت ", "")}
                    </span>
                  </div>

                </div>

                {/* Specialties Checklist */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-display font-black text-white flex items-center gap-1.5 justify-start">
                    <Sparkles className={`w-4 h-4 shrink-0 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                    <span>مجالات التدريب والتخصص الرياضي:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedCoach.specialties.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-stone-300 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                        <span className="leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications Box */}
                <div className="space-y-3 border-t border-stone-850/60 pt-5">
                  <h4 className="text-xs sm:text-sm font-display font-black text-white flex items-center gap-1.5 justify-start">
                    <GraduationCap className={`w-4 h-4 shrink-0 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                    <span>الشهادات والاعتمادات الرسمية:</span>
                  </h4>
                  <div className="bg-[#14181a] border border-stone-850 rounded-xl p-4 space-y-3">
                    {selectedCoach.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Award className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                        <span className="text-stone-300 text-xs font-sans leading-relaxed">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions & WhatsApp Booking CTA */}
                <div className="pt-4 border-t border-stone-850/50 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedCoach(null)}
                    className="px-4 py-2.5 rounded-xl border border-stone-850 text-stone-400 hover:text-white hover:bg-stone-900 text-xs font-display font-bold transition-all cursor-pointer"
                  >
                    إغلاق
                  </button>
                  <button
                    onClick={() => handleOrderCoach(selectedCoach)}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-black font-display font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-emerald-950/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black transform rotate-180" />
                    <span>حجز وتدريب خاص مع الكابتن 💬</span>
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
