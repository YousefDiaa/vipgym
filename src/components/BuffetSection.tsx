import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Utensils, Coffee, Leaf, CheckCircle2, TrendingUp, Flame } from "lucide-react";

interface MenuItem {
  name: string;
  price?: string;
  desc: string;
  nutrition: string; // e.g. "25g Protein, 120 Calories"
}

const shakesMenu: MenuItem[] = [
  {
    name: "مخفوق الواي بروتين شوكولاتة (Whey Protein Shake)",
    desc: "سكوب كامل من بروتين الواي سريع الامتصاص مخلوط بحليب خالي الدسم أو ماء ومكعبات ثلج.",
    nutrition: "24g بروتين • 140 كالوري • 0g دهون ضارة"
  },
  {
    name: "سموذي الموز وزبدة الفول السوداني (Peanut Butter Blast)",
    desc: "موز طبيعي، زبدة فول سوداني هيلثي، حليب كامل أو خالي الدسم، عسل أبيض طبيعي وشوفان مطحون.",
    nutrition: "12g بروتين • 350 كالوري • وجبة طاقة كاملة"
  },
  {
    name: "بروتين شيك التوت والأفوكادو (Green Power Smoothie)",
    desc: "أفوكادو طازج، أوراق سبانخ غنية بالحديد، حليب لوز، عسل طبيعي، توت مجمد وسكوب بروتين.",
    nutrition: "20g بروتين • 220 كالوري • دهون صحية ممتازة"
  }
];

const hotDrinksMenu: MenuItem[] = [
  {
    name: "إسبريسو سينجل / دبل (Premium Espresso)",
    desc: "بن إيطالي فاخر محمص ومستخلص بالضغط العالي لرفع التركيز ومعدل التمثيل الغذائي قبل التمرين.",
    nutrition: "0g دهون • 0g بروتين • طاقة كافيين قصوى"
  },
  {
    name: "القهوة التركي / الأمريكي (Turkish & Black Coffee)",
    desc: "معدة بعناية وبدون سكر لتنقية الذهن وحرق السعرات الحرارية بكفاءة.",
    nutrition: "كافيين طبيعي ومضادات أكسدة ممتازة"
  },
  {
    name: "الشاي الأخضر بالليمون والنعناع",
    desc: "مضاد أكسدة طبيعي يدعم تنظيف السموم من الجسم ويدعم حرق الدهون العنيدة.",
    nutrition: "0 سعرات • غني بالكاتيكين المنشط للحرق"
  }
];

const mealsMenu: MenuItem[] = [
  {
    name: "وجبة صدور الدجاج المشوية مع أرز بسمتي وجبن دايت",
    desc: "صدور دجاج مخلية ومتبلة بالتوابل الصحية بدون زيوت مهدرجة، مع أرز بسمتي مسلوق وخضروات.",
    nutrition: "40g بروتين • 45g كربوهيدرات • 480 كالوري"
  },
  {
    name: "علبة تونة دايت بالخضار وزيت الزيتون",
    desc: "تونة قطعة واحدة مصفاة تماماً من الزيت الصناعي ومضاف إليها بقدونس، جزر، فلفل ألوان وقليل من زيت الزيتون البكر.",
    nutrition: "28g بروتين • 5g كربوهيدرات • 210 كالوري"
  },
  {
    name: "شوفان بالحليب والمكسرات والعسل",
    desc: "رقائق الشوفان الكاملة المطبوخة بحليب دافئ، مضاف إليها لوز مقشر، كاجو، قطع موز، وقليل من عسل النحل.",
    nutrition: "10g بروتين • 55g كربوهيدرات • 320 كالوري"
  },
  {
    name: "بروتين بار صحي (High-Protein Energy Bar)",
    desc: "قطع الحلوى الصحية الغنية بالبروتين ومحلاة بالستيفيا وخالية من السكر الأبيض المضاف.",
    nutrition: "20g بروتين • 180 كالوري • ألياف غذائية"
  }
];

export default function BuffetSection() {
  const [activeMenu, setActiveMenu] = useState<"shakes" | "drinks" | "meals">("shakes");

  const getMenuData = () => {
    switch (activeMenu) {
      case "shakes":
        return shakesMenu;
      case "drinks":
        return hotDrinksMenu;
      case "meals":
        return mealsMenu;
      default:
        return shakesMenu;
    }
  };

  return (
    <section id="buffet" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الثامن • 08</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            البوفيه الرياضي <span className="neon-gradient-text uppercase">مأكولات ومشروبات صحية</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            بناء العضلات وخسارة الدهون يبدأ من المطبخ! نوفر لك بوفيه صحي متكامل يقدم أشهى الوجبات والمشروبات المحضرة خصيصاً لدعم نظامك الغذائي قبل وبعد التمرين.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12 px-2">
          <div className="bg-[#131618]/90 border border-stone-800/80 p-1.5 sm:p-1 rounded-2xl sm:rounded-full flex flex-col sm:flex-row gap-1.5 sm:gap-1 w-full max-w-md sm:max-w-none sm:w-auto">
            <button
              onClick={() => setActiveMenu("meals")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto ${
                activeMenu === "meals"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>الوجبات والمأكولات الدايت</span>
            </button>
            <button
              onClick={() => setActiveMenu("drinks")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto ${
                activeMenu === "drinks"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Coffee className="w-4 h-4" />
              <span>قهوة ومشروبات ساخنة</span>
            </button>
            <button
              onClick={() => setActiveMenu("shakes")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto ${
                activeMenu === "shakes"
                  ? "bg-secondary text-black shadow-lg"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>بروتين شيك وسموذي طبيعي</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {getMenuData().map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131618] border border-stone-850 p-6 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300 group"
            >
              <div>
                {/* Icons & Badges */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-sans font-bold bg-secondary/15 text-secondary px-2.5 py-0.5 rounded">
                    القيمة الغذائية مدروسة
                  </span>
                  <div className="p-2 bg-stone-900 border border-stone-800 rounded-lg group-hover:bg-stone-800 transition-colors">
                    {activeMenu === "shakes" ? (
                      <Leaf className="w-4 h-4 text-secondary" />
                    ) : activeMenu === "drinks" ? (
                      <Coffee className="w-4 h-4 text-secondary" />
                    ) : (
                      <Utensils className="w-4 h-4 text-secondary" />
                    )}
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-base sm:text-lg font-display font-extrabold text-white mb-2 group-hover:text-secondary transition-colors">
                  {item.name}
                </h4>

                {/* Description */}
                <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Nutrition Facts block */}
              <div className="bg-[#181b1d] border border-stone-850/60 p-3 rounded-lg flex items-center justify-between text-xs">
                <span className="text-stone-400 font-sans">معلومات وجدول التغذية:</span>
                <span className="text-secondary font-bold font-sans">{item.nutrition}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ordering instructions info box */}
        <div className="mt-12 bg-stone-900/40 border border-stone-800 rounded-xl p-5 max-w-3xl mx-auto text-center space-y-2">
          <p className="text-stone-300 text-xs sm:text-sm font-sans">
            🥬 يتم تحضير جميع الأغذية والمشروبات من مواد طازجة يومية وبأعلى اشتراطات النظافة والصحة العامة.
          </p>
          <p className="text-stone-500 text-[11px] font-sans">
            * يمكنك حجز وجبتك مسبقاً قبل التمرين لتستلمها جاهزة وساخنة فور انتهائك من حصتك التدريبية من موظف بوفيه الجيم.
          </p>
        </div>

      </div>
    </section>
  );
}
