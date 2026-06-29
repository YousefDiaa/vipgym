import React from "react";
import { motion } from "motion/react";
import { MapPin, ArrowLeft, ExternalLink, Compass } from "lucide-react";
import Logo from "./Logo";

interface LocationSelectorProps {
  onSelect: () => void;
}

export default function LocationSelector({ onSelect }: LocationSelectorProps) {
  const handleSelectLocation = (location: string) => {
    localStorage.setItem("vip_gym_location_selected", location);
    onSelect();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-[#0d0f10] text-stone-200 overflow-hidden px-3 sm:px-6 select-none flex flex-col justify-center items-center"
    >
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Centering Wrapper */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center relative z-10 py-2 sm:py-4">
        <div className="w-full flex flex-col items-center">
          
          {/* Premium Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 sm:mb-8 text-center px-2"
          >
            <Logo size="md" showText={true} className="mb-2 sm:mb-4 scale-90 sm:scale-100 transition-transform" />
            <p className="text-stone-400 font-sans text-[10px] sm:text-sm tracking-wide max-w-md mx-auto mt-1 leading-relaxed">
              مرحباً بك في المنصة الرسمية لـ <span className="text-secondary font-bold font-sans">VIP GYM HEALTH CLUB</span>. يرجى اختيار الفرع للدخول وتصفح موقعنا.
            </p>
          </motion.div>

          {/* Location Selection Grid - side-by-side even on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-3xl px-1 sm:px-4">
            
            {/* Branch 1: Minya Sports Club (ACTIVE) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-[#131618] border-2 border-secondary/30 hover:border-secondary rounded-xl p-3 xs:p-4 sm:p-6 flex flex-col justify-between text-right transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(219,225,36,0.1)] overflow-hidden cursor-pointer"
              onClick={() => handleSelectLocation("minya_club")}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 text-[8px] xs:text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                    الفرع الحالي (نشط)
                  </span>
                  <MapPin className="text-secondary w-3.5 h-3.5 sm:w-5 sm:h-5 animate-pulse" />
                </div>

                {/* Title */}
                <h3 className="text-xs xs:text-sm sm:text-lg md:text-2xl font-display font-extrabold text-white mb-1 group-hover:text-secondary transition-colors leading-tight">
                  فرع نادي المنيا الرياضي
                </h3>
              </div>

              {/* Actions Section */}
              <div className="relative z-10 border-t border-stone-800/80 pt-2 sm:pt-4 mt-2 sm:mt-4 space-y-2">
                {/* Google Maps Button */}
                <a
                  href="https://maps.app.goo.gl/ajBBevKaQVSVVKWz6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent trigger click selection
                  }}
                  className="w-full bg-[#191c1e] hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white py-1.5 px-2 sm:py-2.5 sm:px-3 rounded font-bold text-[8px] xs:text-[10px] sm:text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1 font-sans">
                    <ExternalLink className="w-3 h-3 text-secondary" />
                    موقع الفرع بالخريطة
                  </span>
                  <Compass className="w-3 h-3 text-stone-500 hidden xs:block" />
                </a>

                {/* Enter Main Page Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectLocation("minya_club");
                  }}
                  className="w-full bg-secondary hover:bg-[#c2c820] text-black font-extrabold py-2 px-2 sm:py-2.5 sm:px-3 rounded text-[9px] xs:text-[10px] sm:text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>دخول وتصفح الفرع</span>
                </button>
              </div>
            </motion.div>

            {/* Branch 2: Cityscape Mall (ACTIVE) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative bg-[#131618] border-2 border-secondary/30 hover:border-secondary rounded-xl p-3 xs:p-4 sm:p-6 flex flex-col justify-between text-right transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(219,225,36,0.1)] overflow-hidden cursor-pointer"
              onClick={() => handleSelectLocation("cityscape_mall")}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none group-hover:bg-secondary/10 transition-colors" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="bg-secondary/10 text-secondary border border-secondary/20 text-[8px] xs:text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded">
                    الفرع الجديد (نشط)
                  </span>
                  <MapPin className="text-secondary w-3.5 h-3.5 sm:w-5 sm:h-5 animate-pulse" />
                </div>

                {/* Title */}
                <h3 className="text-xs xs:text-sm sm:text-lg md:text-2xl font-display font-extrabold text-white mb-1 group-hover:text-secondary transition-colors leading-tight">
                  فرع سيتي سكيب مول
                </h3>
              </div>

              {/* Actions Section */}
              <div className="relative z-10 border-t border-stone-800/80 pt-2 sm:pt-4 mt-2 sm:mt-4 space-y-2">
                {/* Google Maps Button */}
                <a
                  href="https://maps.app.goo.gl/xggdZo8xnjUzZ5vr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent trigger click selection
                  }}
                  className="w-full bg-[#191c1e] hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white py-1.5 px-2 sm:py-2.5 sm:px-3 rounded font-bold text-[8px] xs:text-[10px] sm:text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1 font-sans">
                    <ExternalLink className="w-3 h-3 text-secondary" />
                    موقع الفرع بالخريطة
                  </span>
                  <Compass className="w-3 h-3 text-stone-500 hidden xs:block" />
                </a>

                {/* Enter Main Page Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectLocation("cityscape_mall");
                  }}
                  className="w-full bg-secondary hover:bg-[#c2c820] text-black font-extrabold py-2 px-2 sm:py-2.5 sm:px-3 rounded text-[9px] xs:text-[10px] sm:text-xs flex items-center justify-between transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>دخول وتصفح الفرع</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Powered label and welcome credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 sm:mt-8 text-center text-[8px] sm:text-xs text-stone-500 font-sans flex items-center gap-1.5"
          >
            <span>VIP GYM HEALTH CLUB</span>
            <span>•</span>
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
