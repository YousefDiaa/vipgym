import { useState } from "react";
import { gymHallComponents, gymActivities } from "../data";
import { Dumbbell, Activity, Smile, ShowerHead, Music, Compass, Swords, Flame, Accessibility, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ActivitiesGrid() {
  const [activeTab, setActiveTab] = useState<"facilities" | "activities">("facilities");

  const getHallIcon = (iconName: string) => {
    const classStyle = "w-6 h-6 text-secondary";
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className={classStyle} />;
      case "Activity":
        return <Activity className={classStyle} />;
      case "Smile":
        return <Smile className={classStyle} />;
      case "ShowerHead":
        return <ShowerHead className={classStyle} />;
      default:
        return <Dumbbell className={classStyle} />;
    }
  };

  const getActivityIcon = (iconName: string) => {
    const classStyle = "w-5 h-5 text-secondary";
    switch (iconName) {
      case "Music":
        return <Music className={classStyle} />;
      case "Compass":
        return <Compass className={classStyle} />;
      case "Smile":
        return <Smile className={classStyle} />;
      case "Activity":
        return <Activity className={classStyle} />;
      case "Swords":
        return <Swords className={classStyle} />;
      case "Flame":
        return <Flame className={classStyle} />;
      case "Accessibility":
        return <Accessibility className={classStyle} />;
      case "CheckCircle":
        return <CheckCircle className={classStyle} />;
      default:
        return <CheckCircle className={classStyle} />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-surface-lowest relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
            تجهيزات الصالة <span className="neon-gradient-text uppercase">والأنشطة الفنية</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            نفتخر بتقديم بنية تحتية رياضية فخمة ومجهزة بالكامل. تعرف على مكونات صالاتنا، والرياضات المتخصصة التي نوفرها لك.
          </p>
        </div>

        {/* Tab switch with 4px rounded radius */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("facilities")}
            className={`px-6 py-3 rounded font-bold text-base transition-all flex items-center gap-2.5 border cursor-pointer ${
              activeTab === "facilities"
                ? "bg-secondary text-black border-secondary neon-glow"
                : "bg-surface-container text-stone-300 border-stone-800 hover:border-stone-700"
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            تجهيزات ومكونات القاعات
          </button>

          <button
            onClick={() => setActiveTab("activities")}
            className={`px-6 py-3 rounded font-bold text-base transition-all flex items-center gap-2.5 border cursor-pointer ${
              activeTab === "activities"
                ? "bg-secondary text-black border-secondary neon-glow"
                : "bg-surface-container text-stone-300 border-stone-800 hover:border-stone-700"
            }`}
          >
            <Activity className="w-5 h-5" />
            الأنشطة والرياضات المتوفرة
          </button>
        </div>

        {/* Display Container */}
        <AnimatePresence mode="wait">
          {activeTab === "facilities" ? (
            <motion.div
              key="facilities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {gymHallComponents.map((comp, idx) => (
                <div key={idx} className="glass-card p-6 sm:p-8 rounded-xl border border-stone-800 flex flex-col md:flex-row gap-6 items-start hover:border-secondary/20 transition-all duration-300">
                  <div className="bg-[#191c1e] p-4 rounded border border-stone-800 flex items-center justify-center shrink-0">
                    {getHallIcon(comp.icon)}
                  </div>
                  <div className="space-y-2 text-right">
                    {comp.brand && (
                      <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded uppercase tracking-wider font-mono">
                        ماركة {comp.brand}
                      </span>
                    )}
                    <h3 className="text-xl font-display font-black text-white pt-1">{comp.title}</h3>
                    <p className="text-stone-300 text-sm leading-relaxed font-sans">{comp.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {gymActivities.map((act, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl border border-stone-800 hover:border-secondary/20 hover:scale-[1.01] transition-all duration-300 flex flex-col text-right justify-between"
                >
                  <div className="space-y-4">
                    <div className="bg-[#191c1e] w-10 h-10 rounded flex items-center justify-center border border-stone-800">
                      {getActivityIcon(act.icon)}
                    </div>
                    <h3 className="text-lg font-display font-black text-white">{act.title}</h3>
                    <p className="text-stone-400 text-xs leading-relaxed font-sans">{act.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Facilities visual indicators */}
        <div className="mt-12 bg-surface-container/60 p-6 rounded-xl border border-stone-800/80 flex flex-wrap gap-4 items-center justify-center text-stone-400 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 font-sans"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>مكان مخصص للصلاة</span>
          <span className="hidden sm:inline text-stone-800">|</span>
          <span className="flex items-center gap-1.5 font-sans"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>منطقة كيدز أريا للأطفال</span>
          <span className="hidden sm:inline text-stone-800">|</span>
          <span className="flex items-center gap-1.5 font-sans"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>بوفيه صحي للمشروبات والأغذية</span>
          <span className="hidden sm:inline text-stone-800">|</span>
          <span className="flex items-center gap-1.5 font-sans"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>عيادة تغذية وإنبودي دوري</span>
          <span className="hidden sm:inline text-stone-800">|</span>
          <span className="flex items-center gap-1.5 font-sans"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>خدمات الحجامة والمساج</span>
        </div>
      </div>
    </section>
  );
}
