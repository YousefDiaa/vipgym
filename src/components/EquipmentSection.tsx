import React, { useState } from "react";
import { motion } from "motion/react";
import { Dumbbell, Activity, ShieldCheck, Flame, Cpu, Eye, CheckCircle2 } from "lucide-react";

interface EquipmentItem {
  name: string;
  brand: string;
  category: "strength" | "cardio" | "accessory";
  desc: string;
}

const indoorEquipment: EquipmentItem[] = [
  {
    name: "مشايات الجري CYBEX الذكية",
    brand: "CYBEX (أمريكي أصلي)",
    category: "cardio",
    desc: "مشايات ذكية مزودة بامتصاص صدمات فائق لحماية المفاصل، مع شاشات تتبع معدل نبضات القلب وسعرات الحرق."
  },
  {
    name: "أجهزة الـ Elliptical والدراجات الثابتة",
    brand: "CYBEX (أمريكي أصلي)",
    category: "cardio",
    desc: "أجهزة تتبع مسارات الحركة الطبيعية للجسم لرفع مستويات الحرق واللياقة دون أي عبء على عظام ومفاصل الركبة."
  },
  {
    name: "جهاز سحب الظهر العلوي (Lat Pulldown)",
    brand: "CYBEX Prestige",
    category: "strength",
    desc: "جهاز عزل وتوسيع عضلات الظهر العلوية بزوايا ميكانيكية دقيقة جداً تحمي الفقرات وتضمن أقصى تفعيل عضلي."
  },
  {
    name: "جهاز دفع وتدريب الأرجل (Leg Press)",
    brand: "CYBEX VR3 Series",
    category: "strength",
    desc: "جهاز دفع الأرجل ذو المقعد المريح لتفعيل العضلات الأمامية والخلفية والأرداف بأعلى معاملات الأمان والأوزان."
  },
  {
    name: "جهاز تدريب الصدر بالبكرات الدوارة",
    brand: "CYBEX Selectorized",
    category: "strength",
    desc: "عزل وتفتيح عضلات الصدر بشكل متكامل من مختلف الزوايا بفضل نظام الكابلات الهيدروليكية المريحة."
  }
];

const outdoorEquipment: EquipmentItem[] = [
  {
    name: "أجهزة دفع الصدر والأكتاف Plate-Loaded",
    brand: "Hammer Strength (أمريكي)",
    category: "strength",
    desc: "أجهزة بناء القوة وتكبير عضلات الصدر والأكتاف بالتحميل المباشر للأقراص الأولمبية، مسارات ثنائية معزولة لتوازن القوة."
  },
  {
    name: "حامل الدامبلز المزدوج (العملاق)",
    brand: "Cybex & Steel Dumbbells",
    category: "strength",
    desc: "مجموعة دامبلز وحرة كاملة الوزن تبدأ من 1 كجم وتصل إلى 50 كجم لمقابلة متطلبات التدريب الفائق والمحترفين."
  },
  {
    name: "القفص الرياضي الأولمبي (Power Cage)",
    brand: "Hammer Strength Heavy",
    category: "strength",
    desc: "لتمارين السكوات (Squat) والضغط العالي والرفعات المميتة (Deadlift) بأعلى مستويات الأمان ومساعدات التدريب الفردي."
  },
  {
    name: "جهاز الكابل كروس ذو الـ 5 محطات (Multi-Jungle)",
    brand: "CYBEX Cable System",
    category: "strength",
    desc: "محطة كوابل متكاملة تتيح تمرين عضلات الباي، التراي، الظهر، الصدر، الأكتاف لـ 5 متدربين في نفس الوقت."
  },
  {
    name: "أجهزة تمرين الظهر والسحب الأرضي الحر",
    brand: "Hammer Strength Row",
    category: "strength",
    desc: "أجهزة محاكاة التجديف لاستهداف سماكة عضلات الظهر بدقة وبدون تحميل ضار على أسفل الظهر."
  }
];

export default function EquipmentSection() {
  const [activeTab, setActiveTab] = useState<"indoor" | "outdoor">("indoor");

  const currentEquipment = activeTab === "indoor" ? indoorEquipment : outdoorEquipment;

  return (
    <section id="equipment" className="py-20 bg-surface-base relative overflow-hidden scroll-mt-16">
      {/* Visual neon lines */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الخامس • 05</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            أقوى وأحدث <span className="neon-gradient-text uppercase">الأجهزة الرياضية والآلات</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            تجهيزات من كبرى الماركات الأمريكية العالمية (CYBEX & Hammer Strength) مجهزة هندسياً بزوايا علمية تعزل العضلات وتحمي المفاصل تماماً.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#131618] border border-stone-800 p-1 rounded-full flex gap-1">
            <button
              onClick={() => setActiveTab("outdoor")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "outdoor"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>أجهزة القاعة الخارجية (الهواء الطلق)</span>
            </button>
            <button
              onClick={() => setActiveTab("indoor")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "indoor"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>أجهزة القاعة الداخلية (المكيفة)</span>
            </button>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentEquipment.map((eq, idx) => (
            <motion.div
              key={eq.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131618] border border-stone-850 p-6 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/30 transition-all duration-300 group"
            >
              <div>
                {/* Header icon and category badge */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[10px] font-bold font-mono tracking-widest bg-stone-800 text-stone-300 border border-stone-700 px-2.5 py-0.5 rounded-full uppercase">
                    {eq.category === "cardio" ? "كارديو وفتنس" : "بناء القوة والعضلات"}
                  </span>
                  <div className="p-2 bg-stone-900 border border-stone-800 rounded-lg group-hover:border-secondary/20 transition-all">
                    {eq.category === "cardio" ? (
                      <Activity className="w-5 h-5 text-secondary" />
                    ) : (
                      <Dumbbell className="w-5 h-5 text-secondary" />
                    )}
                  </div>
                </div>

                {/* Name & Brand */}
                <h4 className="text-lg font-display font-black text-white mb-1 group-hover:text-secondary transition-colors">
                  {eq.name}
                </h4>
                <span className="text-xs text-secondary/80 font-bold font-mono block mb-3">
                  {eq.brand}
                </span>

                {/* Description */}
                <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {eq.desc}
                </p>
              </div>

              {/* Verified standard */}
              <div className="mt-5 pt-4 border-t border-stone-850 flex items-center gap-1.5 justify-end text-xs text-stone-500 font-sans">
                <span>أداء حركي آمن ومثالي</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
