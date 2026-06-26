import React, { useState } from "react";
import { motion } from "motion/react";
import { Layers, ShieldAlert, Sparkles, Sun, Flame, Wind, Eye, CheckCircle2, Award } from "lucide-react";

export default function HallsSection() {
  const [activeHall, setActiveHall] = useState<"indoor" | "outdoor">("indoor");

  return (
    <section id="halls" className="py-20 bg-surface-base relative overflow-hidden scroll-mt-16">
      {/* Decorative Blur */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الثالث • 03</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            قاعات التمرين <span className="neon-gradient-text uppercase">الداخلية والخارجية</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            مساحات واسعة مصممة بطريقة علمية لزيادة هرمونات الحماس وبناء العضلات، موزعة على قاعتين رئيسيتين فريدتين من نوعهما.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#131618] border border-stone-800 p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => setActiveHall("outdoor")}
              className={`px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeHall === "outdoor"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              القاعة الخارجية (المفتوحة على النيل)
            </button>
            <button
              onClick={() => setActiveHall("indoor")}
              className={`px-6 py-2 sm:px-8 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeHall === "indoor"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              القاعة الداخلية (المكيفة والمغلقة)
            </button>
          </div>
        </div>

        {/* Interactive Content View */}
        <div className="max-w-5xl mx-auto">
          {activeHall === "indoor" ? (
            <motion.div
              key="indoor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-800 h-64 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800"
                  alt="Indoor Gym Hall"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-black/80 border border-secondary/20 rounded px-3 py-1 text-[11px] text-secondary font-bold font-sans">
                  تكييف مركزي متكامل وحرارة مضبوطة
                </div>
              </div>

              {/* Text Specs Side */}
              <div className="lg:col-span-7 text-right space-y-6">
                <div>
                  <span className="text-secondary text-xs font-bold font-mono tracking-wider">100% PRIVATE • LUXURY STYLE</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                    القاعة الداخلية (صالة القوة والاستشفاء المغلقة)
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-3 font-sans">
                    صالة مجهزة بالكامل ومغلقة بعيداً عن صخب العالم الخارجي، صُممت بعناية لتوفير خصوصية تامة للسيدات في شيفت السيدات، مع تكييف هواء فائق التبريد وأنظمة صوت محيطية تحفزك لتقديم أفضل أداء.
                  </p>
                </div>

                {/* Bullets List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">أجهزة كارديو متطورة</h4>
                    <p className="text-stone-400 text-xs font-sans">تضم مشايات ذات شاشات تفاعلية، دراجات، وأجهزة الـ Elliptical المتكاملة.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Layers className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">أرضية مطاطية ماصة للصدمات</h4>
                    <p className="text-stone-400 text-xs font-sans">أرضيات فاخرة مضادة للانزلاق ومصممة خصيصاً لحماية مفاصل الركبتين والظهر.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Wind className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">تكييف وتهوية كاملة</h4>
                    <p className="text-stone-400 text-xs font-sans">نظام تدوير هواء يسحب ثاني أكسيد الكربون ويضخ أكسجيناً معقماً طوال الوقت.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Sparkles className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">غرفة الصوتيات والإضاءة</h4>
                    <p className="text-stone-400 text-xs font-sans">إضاءة نيون رياضية مدروسة تدفعك نحو التركيز ورفع مستويات هرمون الأدرينالين.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="outdoor"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-stone-800 h-64 sm:h-96">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
                  alt="Outdoor Gym Hall"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-black/80 border border-secondary/20 rounded px-3 py-1 text-[11px] text-secondary font-bold font-sans">
                  مفتوحة في الهواء الطلق طوال 24 ساعة
                </div>
              </div>

              {/* Text Specs Side */}
              <div className="lg:col-span-7 text-right space-y-6">
                <div>
                  <span className="text-secondary text-xs font-bold font-mono tracking-wider">OPEN AIR • PURE NILE BREEZE</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
                    القاعة الخارجية (صالة الهواء الطلق وإطلالة النيل البانورامية)
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-3 font-sans">
                    تجربة تمرينية منقطعة النظير ومحفزة للأبطال! قاعة خارجية مفتوحة تقع مباشرة على النيل العظيم بنادي المنيا الرياضي. يمتزج فيها الأكسجين الصافي القادم من النهر مع التمرين الثقيل، لتستمتع بأجمل غروب وهواء طبيعي منعش طوال اليوم.
                  </p>
                </div>

                {/* Bullets List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Flame className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">أوزان حرة فائقة الحمولة</h4>
                    <p className="text-stone-400 text-xs font-sans">تحتوي على دامبلز تصل إلى 50 كيلوجرام وأجهزة ضخمة لبناء القوة القصوى.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Sun className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">طاقة حيوية ومتجددة</h4>
                    <p className="text-stone-400 text-xs font-sans">أشعة الشمس الطبيعية والهواء المتجدد بالكامل يدعمان نشاطك وصحتك النفسية.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Award className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">منصة رفع الأوزان الأولمبية</h4>
                    <p className="text-stone-400 text-xs font-sans">أرضيات معززة لتمارين الـ Deadlift والـ Squat الثقيلة بدون اهتزازات.</p>
                  </div>

                  <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-2">
                    <Eye className="w-5 h-5 text-secondary mr-auto" />
                    <h4 className="text-white font-bold text-sm">فيو بانورامي خلاب</h4>
                    <p className="text-stone-400 text-xs font-sans">استمتع بتأمل حركة النيل والغروب الرائع الذي ينسيك تعب التمرين وضغوط الحياة.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
