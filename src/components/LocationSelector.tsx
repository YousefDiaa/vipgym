import React from "react";
import { motion } from "motion/react";
import { MapPin, ArrowLeft, Lock, ExternalLink, Compass } from "lucide-react";
import Logo from "./Logo";

interface LocationSelectorProps {
  onSelect: () => void;
}

export default function LocationSelector({ onSelect }: LocationSelectorProps) {
  const handleSelectActive = () => {
    localStorage.setItem("vip_gym_location_selected", "minya_club");
    onSelect();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-[#0d0f10] text-stone-200 overflow-y-auto px-4 select-none"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Centering Wrapper that supports vertical scrolling if content overflows */}
      <div className="min-h-full w-full flex flex-col items-center justify-center py-8 sm:py-16 relative z-10">
        <div className="max-w-4xl w-full flex flex-col items-center">
          
          {/* Premium Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 sm:mb-12 text-center px-2"
          >
            <Logo size="lg" showText={true} className="mb-4 scale-90 sm:scale-100 transition-transform" />
            <p className="text-stone-400 font-sans text-xs sm:text-base tracking-wide max-w-md mx-auto mt-2 leading-relaxed">
              مرحباً بك في المنصة الرسمية لـ <span className="text-secondary font-bold">VIP GYM HEALTH CLUB</span>. يرجى اختيار الفرع لاستكشاف الخدمات والاشتراك.
            </p>
          </motion.div>

          {/* Location Selection Grid */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-3xl px-2">
            
            {/* Branch 1: Minya Sports Club (ACTIVE) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative bg-[#131618] border-2 border-secondary/30 hover:border-secondary rounded-2xl p-5 sm:p-8 flex flex-col justify-between text-right transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(164,214,76,0.15)] overflow-hidden cursor-pointer"
              onClick={handleSelectActive}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
                    الفرع الحالي (نشط)
                  </span>
                  <MapPin className="text-secondary w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 sm:mb-3 group-hover:text-secondary transition-colors">
                  فرع نادي المنيا الرياضي
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed mb-4 sm:mb-6">
                  المقر الرئيسي الواقع على كورنيش النيل مباشرة. يضم أحدث أجهزة الكارديو والقوة من كبرى الماركات العالمية، مع فريق تدريب محترف ومساحات تمرين متكاملة.
                </p>
              </div>

              {/* Actions Section */}
              <div className="relative z-10 border-t border-stone-800/80 pt-4 sm:pt-5 mt-2 sm:mt-4 space-y-3">
                {/* Google Maps Button */}
                <a
                  href="https://maps.app.goo.gl/ajBBevKaQVSVVKWz6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent trigger active click selection
                  }}
                  className="w-full bg-[#191c1e] hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white py-2.5 px-3.5 rounded font-bold text-[11px] sm:text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5 font-sans">
                    <ExternalLink className="w-3.5 h-3.5 text-secondary" />
                    موقع الفرع بخرائط Google
                  </span>
                  <Compass className="w-4 h-4 text-stone-400" />
                </a>

                {/* Enter Main Page Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectActive();
                  }}
                  className="w-full bg-secondary hover:bg-[#86bf30] text-black font-extrabold py-3 px-4 rounded text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>دخول وتصفح موقع الفرع</span>
                </button>
              </div>
            </motion.div>

            {/* Branch 2: Cityscape Mall New Minya (COMING SOON / DISABLED) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative bg-[#111314]/70 border border-stone-800 rounded-2xl p-5 sm:p-8 flex flex-col justify-between text-right opacity-60 overflow-hidden cursor-not-allowed select-none"
            >
              {/* Overlay grid representing locked state */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <span className="bg-stone-800/80 text-stone-400 border border-stone-700/50 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
                    قريباً جداً
                  </span>
                  <Lock className="text-stone-500 w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-stone-400 mb-2 sm:mb-3">
                  فرع سيتي سكيب مول
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-sans leading-relaxed mb-4 sm:mb-6">
                  فرعنا الجديد الفاخر بمدينة المنيا الجديدة. مجهز بأرقى التجهيزات الرياضية والترفيهية، بوفيه صحي، وعيادات متكاملة ليقدم تجربة لياقة استثنائية لجميع رواد سيتي سكيب مول.
                </p>
              </div>

              {/* Lock indicator at footer */}
              <div className="relative z-10 border-t border-stone-900 pt-4 sm:pt-5 mt-2 sm:mt-4">
                <div className="w-full bg-stone-950/40 border border-stone-900 text-stone-500 py-2.5 px-4 rounded font-bold text-[10px] sm:text-xs text-center font-sans">
                  الفرع تحت التجهيز والافتتاح قريباً
                </div>
              </div>
            </motion.div>
          </div>

          {/* Powered label and welcome credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 sm:mt-12 text-center text-[10px] sm:text-xs text-stone-500 font-sans flex items-center gap-1.5"
          >
            <span>نادي المنيا الرياضي</span>
            <span>•</span>
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
