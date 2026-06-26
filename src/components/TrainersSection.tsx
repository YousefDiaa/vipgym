import React, { useState } from "react";
import { motion } from "motion/react";
import { Users, Award, ShieldCheck, Dumbbell, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface Coach {
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  avatar: string;
}

const maleCoaches: Coach[] = [
  {
    name: "الكابتن محمد علي",
    role: "المدير الفني وأخصائي كمال الأجسام",
    specialties: ["تخطيط وتصميم البرامج التدريبية", "تضخيم وبناء الكتلة العضلية", "تأهيل أبطال كمال الأجسام"],
    certifications: ["شهادة معتمدة من الاتحاد الدولي لبناء الأجسام (IFBB)", "دبلوم التغذية الرياضية والعلاجية"],
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "الكابتن مصطفى كمال",
    role: "أخصائي التأهيل البدني والتأهيل العسكري",
    specialties: ["تأهيل المتقدمين للكليات العسكرية والشرطة", "تأهيل إصابات الملاعب والعلاج الطبيعي", "اللياقة البدنية العالية"],
    certifications: ["بكالوريوس التربية الرياضية", "دورة تأهيل الإصابات الرياضية والتحريك الوظيفي"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "الكابتن أحمد سعد",
    role: "مدرب الكروس فيت والفتنس المعتمد",
    specialties: ["كلاسات حرق الدهون وتخسيس الوزن السريع", "تدريبات الكروس فيت (CrossFit) عالية الشدة", "تأسيس حركي وبدني للأطفال"],
    certifications: ["شهادة مدرب CrossFit Level 2 الدولي", "شهادة في إسعافات الإصابات الرياضية الأولوية"],
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300"
  }
];

const femaleCoaches: Coach[] = [
  {
    name: "الكابتن ياسمين طارق",
    role: "أخصائية الفتنس والزومبا والأيروبكس",
    specialties: ["إدارة كلاسات الزومبا والأيروبكس الجماعية", "برامج شد الترهلات وتشكيل القوام النسائي", "متابعة تطور الوزن والدهون"],
    certifications: ["شهادة مدرب زومبا مرخص (ZIN)", "شهادة تدريب الفتنس والأيروبكس من الأكاديمية العربية"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "الكابتن سارة محمود",
    role: "أخصائية اليوجا والاستطالة والسبا",
    specialties: ["تمارين التأمل والتحسين النفسي والجسدي", "كلاسات الاستطالة (Stretching) وزيادة المرونة", "تأهيل الحوامل وكبار السن"],
    certifications: ["شهادة مدرب يوجا معتمد (RYT-200)", "دورة التدريب الصحي والرياضي المتكامل"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "الكابتن نورهان أحمد",
    role: "أخصائية تغذية السيدات واللياقة النسائية",
    specialties: ["تصميم وجبات دايت متوازنة وهيلثي", "علاج وتخسيس حالات تكيس المبيضين وضعف الحرق", "متابعة دقيقة لمشتركات البرايفت"],
    certifications: ["دبلومة التغذية العلاجية المعتمدة", "كورس التدريب الشخصي المتخصص للسيدات (NASM)"],
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  }
];

export default function TrainersSection() {
  const [genderTab, setGenderTab] = useState<"men" | "women">("men");

  const currentCoaches = genderTab === "men" ? maleCoaches : femaleCoaches;

  return (
    <section id="trainers" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16">
      {/* Background radial shine */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[110px]" />

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
        <div className="flex justify-center mb-12">
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

        {/* Trainers Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currentCoaches.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-[#131618] border rounded-2xl overflow-hidden text-right flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                genderTab === "women" ? "border-stone-800 hover:border-pink-500/30" : "border-stone-850 hover:border-secondary/30"
              }`}
            >
              {/* Card top banner with image and badge */}
              <div className="relative h-64 bg-stone-900 overflow-hidden">
                <img
                  src={coach.avatar}
                  alt={coach.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131618] via-[#131618]/30 to-transparent" />
                
                {/* Luminous Title */}
                <div className="absolute bottom-4 right-4 left-4">
                  <span className={`inline-block text-[10px] font-bold font-sans px-2.5 py-0.5 rounded-full mb-1 ${
                    genderTab === "women" ? "bg-pink-500/20 text-pink-400 border border-pink-500/30" : "bg-secondary/10 text-secondary border border-secondary/20"
                  }`}>
                    {coach.role}
                  </span>
                  <h4 className="text-xl font-display font-black text-white">
                    {coach.name}
                  </h4>
                </div>
              </div>

              {/* Card Body with description / lists */}
              <div className="p-6 space-y-5 flex-grow">
                {/* Specialties */}
                <div>
                  <span className="text-xs text-stone-400 block font-bold mb-2">مجالات التخصص والخبرة:</span>
                  <ul className="space-y-1.5 text-stone-200 text-xs sm:text-sm font-sans">
                    {coach.specialties.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 justify-end">
                        <span>{spec}</span>
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${genderTab === "women" ? "bg-pink-400" : "bg-secondary"}`} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="border-t border-stone-850 pt-4">
                  <span className="text-xs text-stone-400 block font-bold mb-2">الشهادات والاعتمادات:</span>
                  <div className="space-y-2">
                    {coach.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-1.5 justify-end">
                        <span className="text-stone-300 text-[11px] leading-relaxed font-sans font-medium text-right">
                          {cert}
                        </span>
                        <Award className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Motivating CTA */}
              <div className="p-4 bg-[#181b1d] border-t border-stone-850 flex items-center justify-between text-xs">
                <span className="text-stone-400">متواجد طوال شيفت العمل</span>
                <span className={`font-bold ${genderTab === "women" ? "text-pink-400" : "text-secondary"}`}>VIP Coach</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
