import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, MessageSquare, Compass, ExternalLink, Image as ImageIcon, Sparkles, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    title: "أجهزة تمرين القوة الحديثة",
    desc: "أحدث الأجهزة الرياضية الأمريكية من ماركة CYBEX العالمية"
  },
  {
    url: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
    title: "إطلالة ساحرة على نيل المنيا",
    desc: "تمرين حيوي ومحفز بفيو بانورامي مفتوح مباشرة على الكورنيش"
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    title: "صالة الكارديو واللياقة البدنية",
    desc: "تجهيزات متكاملة لرفع اللياقة وحرق الدهون بأعلى كفاءة"
  },
  {
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    title: "المنطقة الخارجية المفتوحة",
    desc: "أجواء حماسية وتدريب في الهواء الطلق طوال 24 ساعة للرجال"
  }
];

export default function AboutAndContact() {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="py-20 bg-surface-base relative overflow-hidden scroll-mt-16">
      {/* Visual Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الأول • 01</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            من نحن <span className="neon-gradient-text uppercase">والعنوان وإطلالة النيل</span>
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Gallery & Nile View (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative bg-[#131618] border border-stone-800 rounded-2xl overflow-hidden shadow-2xl group">
              
              {/* Image Aspect Box */}
              <div className="relative h-[300px] sm:h-[400px] w-full bg-stone-900">
                <img
                  src={images[activeImgIndex].url}
                  alt={images[activeImgIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
                
                {/* Luminous Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Nile View Glowing Label */}
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-secondary/30 text-secondary text-xs font-bold font-sans py-1.5 px-3 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span>إطلالة نيلية بانورامية ساحرة</span>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-secondary hover:text-black border border-stone-800 text-stone-300 transition-all cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-secondary hover:text-black border border-stone-800 text-stone-300 transition-all cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Details Floating Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-right">
                  <h4 className="text-lg sm:text-xl font-display font-black text-white mb-1">
                    {images[activeImgIndex].title}
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm font-sans">
                    {images[activeImgIndex].desc}
                  </p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 py-4 bg-[#181b1d] border-t border-stone-950">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeImgIndex === idx ? "w-6 bg-secondary" : "w-2 bg-stone-700 hover:bg-stone-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Sub-label explaining the View Advantage */}
            <div className="bg-[#131618] border border-stone-800 rounded-xl p-5 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-secondary" />
              <h4 className="text-white font-display font-extrabold text-base mb-2 flex items-center gap-2 justify-end">
                <span>سحر الطبيعة والتهوية الذاتية</span>
                <Heart className="w-4 h-4 text-secondary" />
              </h4>
              <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
                يتميز الفرع بفيو زجاجي واسع يطل مباشرة على صفحة مياه نهر النيل وكورنيش المنيا الخلاب. يمنحك هذا المزيج طاقة نفسية هائلة، مع تجديد مستمر للأكسجين الطبيعي من النيل مما يقلل شعورك بالإرهاق ويزيد من إنتاجية تمرينك بنسبة 200%.
              </p>
            </div>
          </div>

          {/* Column 2: About info, Address, Contacts (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8 text-right">
            
            {/* 1. Who We Are - Beautiful Timeline Style */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 justify-end">
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                  تاريخ وعراقة <span className="text-secondary font-mono">VIP GYM</span>
                </h3>
              </div>
              
              <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
                نحن لسنا مجرد صالة رياضية، بل قصة نجاح ممتدة وصرح متكامل للياقة البدنية تأسس كعلامة فارقة لتقديم أرقى مستويات التدريب وصناعة الأبطال. إليك محطات مسيرتنا الحافلة بالتميز:
              </p>

              {/* Timeline Track */}
              <div className="relative border-r border-stone-800 pr-6 mr-3 space-y-6 pt-2">
                {[
                  {
                    year: "2006",
                    title: "افتتاح نادي المنيا",
                    desc: "التأسيس والانطلاقة الأولى كعلامة فارقة ومقر رسمي داخل نادي المنيا الرياضي العريق لتوفير صالة ألعاب رياضية رائدة وصناعة جيل جديد من الرياضيين."
                  },
                  {
                    year: "2019",
                    title: "افتتاح نادي السكة الحديد",
                    desc: "التوسع الاستراتيجي عبر افتتاح فرع نادي السكة الحديد بالمنيا لتقديم مستويات خدمة استثنائية لقطاع أكبر من محبي اللياقة البدنية والرياضة."
                  },
                  {
                    year: "2021",
                    title: "تطوير نادي المنيا",
                    desc: "أكبر عملية إعادة هيكلة وتحديث شامل للفرع الرئيسي وتزويده بأحدث خطوط الأجهزة الرياضية الفاخرة والذكية من كبرى الماركات العالمية."
                  },
                  {
                    year: "2026",
                    title: "افتتاح فرع سيتي سكيب مول",
                    desc: "أحدث فروعنا الفاخرة بمدينة المنيا الجديدة، لتوفير تجربة لياقة متطورة واستثنائية ببوفيه صحي، عيادات متكاملة، وأرقى الأجهزة الحديثة."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative group text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {/* Bullet Indicator centered on the parent border-r */}
                    <div className="absolute -right-[30px] top-4 w-3.5 h-3.5 rounded-full bg-[#101415] border-2 border-stone-800 group-hover:border-secondary transition-all duration-300 shadow-md group-hover:shadow-[0_0_10px_rgba(164,214,76,0.6)] z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-secondary transition-colors" />
                    </div>

                    {/* Content container */}
                    <div className="bg-[#131618]/50 hover:bg-[#131618] border border-stone-850 hover:border-secondary/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center justify-between gap-2 flex-row-reverse mb-2">
                        <span className="text-secondary font-mono font-black text-xs sm:text-sm bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20 shadow-[0_0_8px_rgba(164,214,76,0.1)]">
                          {item.year}
                        </span>
                        <h4 className="text-white font-display font-extrabold text-sm sm:text-base group-hover:text-secondary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-stone-450 text-xs sm:text-sm font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Address & Google Location */}
            <div className="bg-[#131618] border border-stone-850 p-6 rounded-2xl space-y-4">
              <h4 className="text-white font-display font-extrabold text-base flex items-center gap-2 justify-end">
                <span>المقر الجغرافي التفصيلي</span>
                <MapPin className="text-secondary w-5 h-5 shrink-0" />
              </h4>
              <p className="text-stone-300 text-sm font-sans leading-relaxed">
                داخل مقر <span className="text-white font-bold">نادي المنيا الرياضي</span> - بوابة الكورنيش - بجوار كنتاكي ومطعم أوركيد، كورنيش النيل، محافظة المنيا.
              </p>

              {/* Landmarks */}
              <div className="flex flex-wrap gap-2 justify-end pt-2">
                {["مطعم أوركيد", "كافيه لبنان", "بجوار كنتاكي", "بوابة كورنيش النيل"].map((landmark, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1a1d1f] border border-stone-800/80 text-stone-300 text-xs px-2.5 py-1 rounded font-sans flex items-center gap-1 shrink-0"
                  >
                    <Compass className="w-3 h-3 text-secondary" />
                    {landmark}
                  </span>
                ))}
              </div>

              {/* Real Google Maps Location Button */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/ajBBevKaQVSVVKWz6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-[#86bf30] text-black font-extrabold text-sm py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.01] shadow-lg"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  <span>فتح الموقع المباشر على خرائط Google</span>
                </a>
              </div>
            </div>

            {/* 3. Fast Contact Information */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              {/* Phone Numbers card */}
              <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl space-y-3">
                <span className="block text-xs text-stone-400 font-bold font-sans">أرقام الهواتف الرسمية للفرع:</span>
                <div className="space-y-2">
                  {["01007555737", "01004448982", "01018004007"].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-secondary hover:text-white font-mono font-bold text-sm py-1 border-b border-stone-800/50 hover:border-secondary transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Manager Complaints WhatsApp card */}
              <div className="bg-[#131618] border border-stone-850 p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="block text-xs text-stone-400 font-bold font-sans">التواصل الفوري مع المدير:</span>
                  <a
                    href="tel:0862323013"
                    className="flex items-center gap-2 text-stone-200 hover:text-secondary font-mono font-semibold text-sm mt-2"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>الخط الأرضي: 0862323013</span>
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80">
                  <span className="block text-xs text-stone-400 font-bold font-sans mb-1">رقم شكاوى الإدارة والمقترحات:</span>
                  <a
                    href="https://wa.me/201009244078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 font-mono font-black text-sm hover:underline"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0 text-green-500 animate-pulse" />
                    <span>01009244078</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
