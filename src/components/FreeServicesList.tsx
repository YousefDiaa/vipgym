import { freeServices } from "../data";
import { Tv, TrendingUp, Trophy, Footprints, Sparkles, UserPlus } from "lucide-react";
import { motion } from "motion/react";

export default function FreeServicesList() {
  const getServiceIcon = (iconName: string) => {
    const classStyle = "w-6 h-6 text-secondary";
    switch (iconName) {
      case "Tv":
        return <Tv className={classStyle} />;
      case "TrendingUp":
        return <TrendingUp className={classStyle} />;
      case "Trophy":
        return <Trophy className={classStyle} />;
      case "Footprints":
        return <Footprints className={classStyle} />;
      case "Sparkles":
        return <Sparkles className={classStyle} />;
      case "UserPlus":
        return <UserPlus className={classStyle} />;
      default:
        return <Sparkles className={classStyle} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="freebies" className="py-20 bg-surface-base relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">هدايا ومزايا إضافية</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            الخدمات المجانية <span className="neon-gradient-text uppercase">لأعضاء الجيم</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            نؤمن بأهمية دعم الأعضاء وتحفيزهم. نقدم لك باقة من الميزات الفاخرة المجانية تماماً الملحقة بالاشتراك دون أي رسوم إضافية.
          </p>
        </div>

        {/* List Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {freeServices.map((service, idx) => {
            const isPrivateOnly = service.tag === "PRIVATE ONLY";
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] ${
                  isPrivateOnly
                    ? "bg-purple-950/20 border-purple-500/35 hover:border-purple-500/50"
                    : "glass-card border-stone-800 hover:border-secondary/30"
                }`}
              >
                {/* Free Badge */}
                <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isPrivateOnly
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-green-500/15 text-green-400 border border-green-500/30"
                }`}>
                  {service.tag}
                </span>

                <div>
                  <div className={`w-12 h-12 rounded flex items-center justify-center mb-6 border ${
                    isPrivateOnly
                      ? "bg-purple-900/30 border-purple-500/20 text-purple-400"
                      : "bg-[#191c1e] border-stone-800 text-secondary group-hover:border-secondary/40 transition-all"
                  }`}>
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-black text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
