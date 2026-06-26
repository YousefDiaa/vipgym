import React from "react";
import { motion } from "motion/react";
import { Heart, Activity, ShieldCheck, Lock, Sparkles, ShowerHead, Smile, CheckCircle } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  isFree: boolean;
  tag?: string;
}

const servicesList: ServiceItem[] = [
  {
    title: "تحليل إنبودي (InBody Analysis)",
    desc: "تقرير متكامل ومطبوع يوضح نسبة المياه، العضلات، الدهون المتراكمة، والدهون الحشوية لتوجيه خطة التدريب بدقة.",
    isFree: false,
    tag: "خصم 50% للأعضاء"
  },
  {
    title: "المصلى والمسجد المجهز",
    desc: "منطقة هادئة، نظيفة، ومجهزة بالكامل لأداء الصلوات في مواعيدها بسلام وراحة.",
    isFree: true,
    tag: "متاح مجاناً"
  },
  {
    title: "لوكرز وأمانات خاصة (Private Lockers)",
    desc: "خزائن خاصة ومحمية لوضع الملابس والحقائب والمتعلقات الشخصية الثمينة بأمان تام أثناء فترة التمرين.",
    isFree: true,
    tag: "متاح مجاناً"
  },
  {
    title: "الساونا والجاكوزي والنادي الصحي",
    desc: "غرف الاستشفاء الحراري والعضلي لمساعدتك على استعادة حيوية العضلات والتخلص من حمض اللاكتيك المتراكم.",
    isFree: false,
    tag: "مجاني لـ Private"
  },
  {
    title: "تأهيل الإصابات والعلاج الطبيعي",
    desc: "جلسات علاجية متخصصة لعلاج آلام العمود الفقري، الركبتين، وإصابات الملاعب تحت إشراف أخصائي علاج طبيعي معتمد.",
    isFree: false,
    tag: "خصم خاص للأعضاء"
  },
  {
    title: "استشارات وبرامج التغذية الشخصية",
    desc: "برامج تفصيلية للتخسيس أو التضخيم أو علاج السمنة الناتجة عن خلل هرموني، مصممة بواسطة خبراء تغذية رياضية.",
    isFree: false,
    tag: "برنامج متابعة"
  },
  {
    title: "منطقة ألعاب الأطفال (Kids Area)",
    desc: "مساحة آمنة ومسلية ومؤمنة بالكامل للأطفال الصغار، مما يمنح الآباء والأمهات فرصة تمرين مريحة وتركيز مضاعف.",
    isFree: true,
    tag: "متاح مجاناً"
  },
  {
    title: "واي فاي سريع ومجاني (Free Wi-Fi)",
    desc: "اتصال بالإنترنت عالي السرعة في جميع أرجاء الجيم لمتابعة عملك أو الاستماع لموسيقاك المفضلة دون انقطاع.",
    isFree: true,
    tag: "متاح مجاناً"
  }
];

export default function DiverseServices() {
  return (
    <section id="services" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16">
      {/* Visual Ambient */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم السادس • 06</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            الخدمات المتنوعة <span className="neon-gradient-text uppercase">والمزايا الإضافية</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            نهتم بكافة تفاصيل يومك الرياضي. نوفر لك باقة متكاملة من الخدمات المريحة والصحية لضمان حصولك على تجربة رفاهية تليق بك.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Services Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131618] border border-stone-850 p-6 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300 group"
            >
              <div>
                {/* Header elements */}
                <div className="flex justify-between items-center mb-5">
                  <span className={`text-[10px] font-bold font-sans px-2 py-0.5 rounded ${
                    service.isFree ? "bg-secondary/10 text-secondary" : "bg-stone-800 text-stone-300"
                  }`}>
                    {service.tag || "خدمة أساسية"}
                  </span>
                  
                  <div className="p-2 bg-stone-900 border border-stone-850 rounded-lg group-hover:bg-stone-800 transition-colors">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-display font-extrabold text-white mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 pt-3 border-t border-stone-850/60 flex items-center justify-end gap-1.5 text-xs text-stone-500 font-sans">
                <span>تخضع لمعايير الجودة والتعقيم</span>
                <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
