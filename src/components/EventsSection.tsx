import React from "react";
import { motion } from "motion/react";
import { Trophy, Star, Sparkles, Footprints, Calendar, Gift, CheckCircle } from "lucide-react";

interface EventItem {
  title: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
}

export default function EventsSection() {
  const events: EventItem[] = [
    {
      title: "بطولة القوة البدنية وكباش اليدين السنوية",
      badge: "منافسة سنوية كبرى",
      desc: "تنظيم بطولة كبرى برعاية إدارة نادي المنيا الرياضي، يتنافس فيها أبطال الجيم في رفعات الـ Bench Press، الـ Squat، والـ Deadlift، مع توزيع كؤوس وميداليات وجوائز مالية ضخمة.",
      icon: <Trophy className="w-6 h-6 text-secondary" />
    },
    {
      title: "ماراثون الجري الأسبوعي على الكورنيش",
      badge: "صباح كل جمعة (مجاني)",
      desc: "تجمع رياضي حماسي رائع لجميع الأعضاء والمشتركين للجري الجماعي المنظم في الهواء الطلق على كورنيش النيل بالمنيا، لرفع اللياقة القلبية التنفسية وتغيير جو التمرين التقليدي.",
      icon: <Footprints className="w-6 h-6 text-secondary" />
    },
    {
      title: "تحديات اللياقة البدنية والـ CrossFit الأسبوعية",
      badge: "مسابقات تحدي القدرة",
      desc: "تحديات تطلقها الإدارة أسبوعياً (مثل تحدي أسرع تجديف أو أطول فترة ثبات بلانك)، مع مكافأة الفائزين باشتراكات مجانية وهدايا مكملات غذائية لدعم حماس المتدربين.",
      icon: <Sparkles className="w-6 h-6 text-secondary" />
    },
    {
      title: "احتفاليات العيد وتوزيع الجوائز الرياضية",
      badge: "مناسبات خاصة واجتماعية",
      desc: "إقامة احتفاليات حيوية في المناسبات والأعياد، تجمع طاقم العمل بالعملاء في سهرات نيلية مميزة تتخللها مسابقات وجوائز تحفيزية ممتازة لتعزيز روح العائلة الواحدة بالجيم.",
      icon: <Gift className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <section id="events" className="py-20 bg-surface-base relative overflow-hidden scroll-mt-16">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم التاسع • 09</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            الحفلات والإيفنتات <span className="neon-gradient-text uppercase">والبطولات التنافسية</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            الحياة داخل VIP GYM مليئة بالحماس والأنشطة! لسنا مجرد مكان للأوزان، بل نصنع مجتمعاً اجتماعياً ورياضياً نابضاً بالحيوية والجوائز.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((ev, idx) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#131618] border border-stone-850 p-6 sm:p-8 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />

              <div>
                {/* Header indicators */}
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold font-sans px-3 py-1 rounded-full">
                    {ev.badge}
                  </span>
                  <div className="p-3 bg-stone-900 border border-stone-850 rounded-xl">
                    {ev.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-extrabold text-white mb-3 group-hover:text-secondary transition-colors">
                  {ev.title}
                </h3>

                {/* Description */}
                <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed">
                  {ev.desc}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-stone-850 flex items-center gap-2 justify-end text-xs text-stone-500 font-sans">
                <span>تُنظم تحت إشراف الإدارة بالكامل</span>
                <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing summary box */}
        <div className="mt-12 bg-stone-900/40 border border-stone-800 rounded-xl p-5 max-w-3xl mx-auto text-center">
          <p className="text-stone-400 text-xs sm:text-sm font-sans">
            🏆 نهدف دائماً من خلال هذه الأنشطة إلى كسر روتين التمرين، ورفع مستوى دافعية الأعضاء، وتوطيد العلاقات الطيبة وبناء عائلة رياضية حقيقية.
          </p>
        </div>

      </div>
    </section>
  );
}
