import { whoWeAreFeatures } from "../data";
import { Award, Clock, ShieldCheck, Compass, Flame, Users, Heart, Sparkles, Layers } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturesGrid() {
  const getFeatureIcon = (iconName: string) => {
    const classStyle = "w-7 h-7 text-gold-400";
    switch (iconName) {
      case "Award":
        return <Award className={classStyle} />;
      case "Clock":
        return <Clock className={classStyle} />;
      case "ShieldCheck":
        return <ShieldCheck className={classStyle} />;
      case "Compass":
        return <Compass className={classStyle} />;
      case "Flame":
        return <Flame className={classStyle} />;
      case "Users":
        return <Users className={classStyle} />;
      case "Heart":
        return <Heart className={classStyle} />;
      case "Sparkles":
        return <Sparkles className={classStyle} />;
      case "Layers":
        return <Layers className={classStyle} />;
      default:
        return <Sparkles className={classStyle} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section id="about" className="py-20 bg-stone-950 relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-stone-800/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold font-mono">الريادة والقيمة المضافة</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            لماذا تختار <span className="gold-gradient-text">VIP GYM</span>؟
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            نحن لسنا مجرد صالة تمرين عادية، بل نحن مجتمع رياضي وصحي متكامل ومجهز بأفضل الخبرات لخدمة كافة الأعمار بنادي المنيا الرياضي.
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {whoWeAreFeatures.map((feat, index) => {
            // Give some grids a slightly different span/aspect ratio for bento-box design rhythmic feels
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-card p-6 sm:p-8 rounded-3xl border border-stone-800 hover:border-gold-500/30 transition-all duration-300 group hover:scale-[1.01] relative overflow-hidden ${
                  isWide ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle linear gold background lines on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="bg-stone-900 w-14 h-14 rounded-2xl flex items-center justify-center border border-stone-800 mb-6 group-hover:border-gold-500/50 transition-all shadow-inner">
                  {getFeatureIcon(feat.icon)}
                </div>

                <h3 className="text-lg sm:text-xl font-display font-black text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed font-sans">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Short motivational block */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 to-stone-950 border border-gold-500/15 p-8 rounded-3xl text-center max-w-4xl mx-auto">
          <h4 className="text-xl font-display font-black text-white mb-2">رؤيتنا ورسالتنا</h4>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            "أن نمكّن كل مشترك من بلوغ قمة لياقته البدنية وصحته النفسية، عبر تقديم رعاية شخصية، وتدريب احترافي، في بيئة مريحة وإطلالة نيلية هادئة تحفز على الاستمرار والإنجاز."
          </p>
        </div>
      </div>
    </section>
  );
}
