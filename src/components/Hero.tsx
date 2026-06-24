import { Flame, Clock, Award, Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#101415]/30 via-[#101415]/80 to-[#101415] z-10" />
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="VIP Gym Premium Nile View Concept"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 object-center scale-105 transform motion-safe:animate-[pulse_8s_infinite_alternate]"
        />
        {/* Nile-like blue-neon subtle glow mesh background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Main Content Info */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>القمة والتميز في نادي المنيا الرياضي</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white tracking-tight">
              ابدأ رحلة التميز مع <br />
              <span className="neon-gradient-text uppercase">VIP GYM ELITE</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-stone-300 text-lg sm:text-xl font-sans leading-relaxed max-w-2xl">
              النادي الرياضي المتكامل وصاحب الخبرة الممتدة منذ <span className="text-secondary font-bold">2006</span>. قاعتان مجهزتان بأحدث الأجهزة الأمريكية <span className="text-secondary font-bold">CYBEX</span> وإطلالة مباشرة ساحرة على كورنيش النيل بنادي المنيا الرياضي.
            </motion.p>

            {/* Quick Badges of Core Selling Points */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-[#191c1e] p-3 rounded-lg border border-stone-800">
                <Compass className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-stone-200">إطلالة على كورنيش النيل</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#191c1e] p-3 rounded-lg border border-stone-800">
                <Award className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-stone-200">أجهزة CYBEX الأمريكية</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#191c1e] p-3 rounded-lg border border-stone-800 col-span-2 sm:col-span-1">
                <Flame className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium text-stone-200">خصوصية تامة للسيدات</span>
              </div>
            </motion.div>

            {/* Action buttons with 4px rounded radius (rounded-sm/rounded) */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleScrollToSection("#pricing")}
                className="bg-secondary hover:bg-secondary/90 text-black px-8 py-3.5 rounded font-bold text-lg transition-all neon-glow-hover hover:scale-[1.02] active:scale-[0.98]"
              >
                استعرض باقات الاشتراك
              </button>
              <button
                onClick={() => handleScrollToSection("#about")}
                className="bg-surface-bright/80 hover:bg-surface-bright text-white border border-stone-700 hover:border-secondary/50 px-8 py-3.5 rounded font-semibold text-lg transition-all"
              >
                من نحن ومميزاتنا
              </button>
            </motion.div>
          </div>

          {/* Quick Schedule Status Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-sm glass-card p-6 rounded-xl border border-secondary/20 neon-glow relative overflow-hidden"
            >
              {/* Decorative light ring */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />

              <h3 className="text-xl font-display font-extrabold text-white mb-6 border-b border-stone-800 pb-3 flex items-center gap-2">
                <Clock className="text-secondary w-5 h-5" />
                مواعيد الصالات والعمل
              </h3>

              <div className="space-y-5">
                {/* Men Section */}
                <div className="bg-[#101415]/80 p-4 rounded-lg border border-stone-800/80 hover:border-secondary/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-secondary font-bold font-display">صالات الرجال (قاعة مفتوحة)</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                      مفتوح دائماً
                    </span>
                  </div>
                  <p className="text-sm text-stone-300">الصالات مجهزة بالكامل ومفتوحة على مدار <span className="font-bold text-white">24 ساعة</span> متواصلة.</p>
                </div>

                {/* Women Section */}
                <div className="bg-[#101415]/80 p-4 rounded-lg border border-stone-800/80 hover:border-secondary/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-secondary font-bold font-display">صالات السيدات (قاعة داخلية)</span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary/10 text-secondary border border-secondary/20">
                      خصوصية تامة
                    </span>
                  </div>
                  <p className="text-sm text-stone-300 mb-1">تعمل طوال أيام الأسبوع من الساعة <span className="font-bold text-white">7 صباحاً</span> حتى الساعة <span className="font-bold text-white">11 مساءً</span>.</p>
                  <p className="text-xs text-red-400 font-medium">🚫 يمنع منعاً باتاً التصوير خلال هذه الفترات.</p>
                </div>
              </div>

              {/* Slogan */}
              <div className="mt-6 pt-4 border-t border-stone-800 text-center">
                <p className="text-xs text-stone-400 italic">"نحن جميعاً في خدمتك فلا تتردد في طلب المساعدة"</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
