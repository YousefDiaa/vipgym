import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  Users, 
  ShieldCheck, 
  Sun, 
  Moon, 
  Calendar, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2, 
  Sparkles, 
  Dumbbell, 
  Eye, 
  Info,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

interface ScheduleItem {
  day: string;
  englishDay: string;
  dayIndex: number; // 0 for Sunday, 1 for Monday... 6 for Saturday
  indoor: string;
  outdoor: string;
  indoorTimeEn: string;
  outdoorTimeEn: string;
}

export default function ScheduleSection() {
  const [activeGender, setActiveGender] = useState<"men" | "women">("men");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1);

  // Determine current day of the week to highlight
  useEffect(() => {
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday... 6 is Saturday
    setCurrentDayIndex(today);
  }, []);

  // Timetable data exactly according to the uploaded flyer image
  const schedules: Record<"men" | "women", ScheduleItem[]> = {
    men: [
      {
        day: "السبت",
        englishDay: "Saturday",
        dayIndex: 6,
        indoor: "7:00 ص - 11:00 ص | 7:00 م - 1:00 ص",
        outdoor: "على مدار 24 ساعة",
        indoorTimeEn: "7:00 AM - 11:00 AM | 7:00 PM - 1:00 AM",
        outdoorTimeEn: "24 Hours Active"
      },
      {
        day: "الأحد",
        englishDay: "Sunday",
        dayIndex: 0,
        indoor: "12:00 ظ - 6:00 م | 11:00 م - 1:00 ص",
        outdoor: "على مدار 24 ساعة",
        indoorTimeEn: "12:00 PM - 6:00 PM | 11:00 PM - 1:00 AM",
        outdoorTimeEn: "24 Hours Active"
      },
      {
        day: "الاثنين",
        englishDay: "Monday",
        dayIndex: 1,
        indoor: "7:00 ص - 11:00 ص | 7:00 م - 1:00 ص",
        outdoor: "على مدار 24 ساعة",
        indoorTimeEn: "7:00 AM - 11:00 AM | 7:00 PM - 1:00 AM",
        outdoorTimeEn: "24 Hours Active"
      },
      {
        day: "الثلاثاء",
        englishDay: "Tuesday",
        dayIndex: 2,
        indoor: "12:00 ظ - 6:00 م | 11:00 م - 1:00 ص",
        outdoor: "على مدار 24 ساعة",
        indoorTimeEn: "12:00 PM - 6:00 PM | 11:00 PM - 1:00 AM",
        outdoorTimeEn: "24 Hours Active"
      },
      {
        day: "الأربعاء",
        englishDay: "Wednesday",
        dayIndex: 3,
        indoor: "7:00 ص - 11:00 ص | 7:00 م - 1:00 ص",
        outdoor: "على مدار 24 ساعة",
        indoorTimeEn: "7:00 AM - 11:00 AM | 7:00 PM - 1:00 AM",
        outdoorTimeEn: "24 Hours Active"
      },
      {
        day: "الخميس",
        englishDay: "Thursday",
        dayIndex: 4,
        indoor: "12:00 ظ - 6:00 م | 11:00 م - 1:00 ص",
        outdoor: "من 12:00 ص حتى 1:00 ص (شفت ختامي)",
        indoorTimeEn: "12:00 PM - 6:00 PM | 11:00 PM - 1:00 AM",
        outdoorTimeEn: "Closes at 1:00 AM Friday"
      },
      {
        day: "الجمعة",
        englishDay: "Friday",
        dayIndex: 5,
        indoor: "7:00 م - 1:00 ص",
        outdoor: "3:00 م - 1:00 ص",
        indoorTimeEn: "7:00 PM - 1:00 AM",
        outdoorTimeEn: "3:00 PM - 1:00 AM"
      }
    ],
    women: [
      {
        day: "السبت",
        englishDay: "Saturday",
        dayIndex: 6,
        indoor: "11:00 ص - 7:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "11:00 AM - 7:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الأحد",
        englishDay: "Sunday",
        dayIndex: 0,
        indoor: "7:00 ص - 12:00 ظ | 6:00 م - 11:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "7:00 AM - 12:00 PM | 6:00 PM - 11:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الاثنين",
        englishDay: "Monday",
        dayIndex: 1,
        indoor: "11:00 ص - 7:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "11:00 AM - 7:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الثلاثاء",
        englishDay: "Tuesday",
        dayIndex: 2,
        indoor: "7:00 ص - 12:00 ظ | 6:00 م - 11:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "7:00 AM - 12:00 PM | 6:00 PM - 11:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الأربعاء",
        englishDay: "Wednesday",
        dayIndex: 3,
        indoor: "11:00 ص - 7:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "11:00 AM - 7:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الخميس",
        englishDay: "Thursday",
        dayIndex: 4,
        indoor: "7:00 ص - 12:00 ظ | 6:00 م - 11:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "7:00 AM - 12:00 PM | 6:00 PM - 11:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      },
      {
        day: "الجمعة",
        englishDay: "Friday",
        dayIndex: 5,
        indoor: "3:00 م - 7:00 م",
        outdoor: "مغلقة (للرجال فقط)",
        indoorTimeEn: "3:00 PM - 7:00 PM",
        outdoorTimeEn: "Closed (Men Only)"
      }
    ]
  };

  const gymImages = [
    { src: "/gym/IMG-20260629-WA0027.jpg", alt: "صالة التدريب والأجهزة الرياضية الفاخرة" },
    { src: "/gym/IMG-20260629-WA0028.jpg", alt: "إطلالة بانورامية ساحرة على النيل مباشرة" },
    { src: "/gym/IMG-20260629-WA0029.jpg", alt: "منطقة الأوزان الحرة والدامبلز الاحترافية" },
    { src: "/gym/IMG-20260629-WA0030.jpg", alt: "مشايات وأجهزة الكارديو التفاعلية الحديثة" },
    { src: "/gym/IMG-20260629-WA0031.jpg", alt: "منظومة الأثقال الحديدية المتطورة" },
    { src: "/gym/IMG-20260629-WA0032.jpg", alt: "تجهيزات اللياقة البدنية والكروسفت الشاملة" },
    { src: "/gym/IMG-20260629-WA0033.jpg", alt: "القاعة الداخلية المكيفة بتصميم نيون رياضي" },
    { src: "/gym/IMG-20260629-WA0034.jpg", alt: "أجهزة تمرين عضلات الظهر والكتف الأمريكية" },
    { src: "/gym/IMG-20260629-WA0035.jpg", alt: "الأكسجين النقي والغروب البديع من صالة الهواء الطلق" },
    { src: "/gym/IMG-20260629-WA0036.jpg", alt: "منصة الأوزان والرفعات الأولمبية المعززة" },
    { src: "/gym/IMG-20260629-WA0037.jpg", alt: "أجهزة الضغط والدمبلز المتنوعة للأبطال" },
    { src: "/gym/IMG-20260629-WA0039.jpg", alt: "أحدث الأجهزة الرياضية المعتمدة عالمياً" },
    { src: "/gym/IMG-20260629-WA0041.jpg", alt: "بيئة تمرين فاخرة ترفع مستوى حماسك" },
    { src: "/gym/IMG-20260629-WA0043.jpg", alt: "صالة متكاملة لضمان تحقيق أهدافك الرياضية" },
  ];

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gymImages.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + gymImages.length) % gymImages.length);
    }
  };

  const activeSchedules = schedules[activeGender];
  const todaySchedule = activeSchedules.find(s => s.dayIndex === currentDayIndex) || activeSchedules[0];

  return (
    <section id="schedules" className="space-y-16">
      {/* 1. Schedule & Timetable Dashboard */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-850 bg-[#101415] p-5 sm:p-8">
        {/* Glowing Ambient Light */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Header Summary */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] uppercase tracking-widest text-secondary font-black font-mono">القسم الثاني • 02</span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mt-1.5 mb-2">
            جدول التشغيل والمواعيد الرسمية
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-md mx-auto">
            قم باختيار فترتك المفضلة (رجال أو سيدات) لاستعراض مواعيد التدريب الدقيقة وساعات العمل التفصيلية للقاعتين الداخلية والخارجية.
          </p>
        </div>

        {/* Gender Filter Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#181d1f] border border-stone-800 p-1 rounded-xl flex gap-1.5 max-w-sm w-full">
            <button
              onClick={() => setActiveGender("women")}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-display font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeGender === "women"
                  ? "bg-pink-600 text-white shadow-lg shadow-pink-900/30 border border-pink-500/20"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>مواعيد السيدات 🚺</span>
            </button>
            <button
              onClick={() => setActiveGender("men")}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-display font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                activeGender === "men"
                  ? "bg-secondary text-black shadow-lg shadow-secondary/15"
                  : "text-stone-400 hover:text-stone-200"
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>مواعيد الرجال 🚹</span>
            </button>
          </div>
        </div>

        {/* Dynamic Timetable */}
        <div className="space-y-6">
          {/* Quick Notice Banner */}
          <div className="bg-stone-900/50 border border-stone-850 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-right">
              <div className={`p-2 rounded-lg shrink-0 ${activeGender === 'women' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' : 'bg-secondary/10 text-secondary border border-secondary/20'}`}>
                <Info className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-white text-xs sm:text-sm font-display font-bold">
                  {activeGender === "women" ? "نظام الخصوصية المطلقة 100% للسيدات" : "منظومة تشغيل الرجال الممتدة"}
                </p>
                <p className="text-stone-400 text-[10px] sm:text-xs font-sans">
                  {activeGender === "women" 
                    ? "القاعة الداخلية مغلقة بالكامل، ومكيفة، ويمنع فيها التصوير منعاً باتاً لراحة وحرية العضو المشترك."
                    : "القاعة الخارجية (في الهواء الطلق على النيل) مفتوحة للرجال طوال الـ 24 ساعة يومياً بدون توقف."}
                </p>
              </div>
            </div>
            {/* Quick stats for selected gender */}
            <div className="flex gap-2.5 shrink-0 text-xs font-mono">
              <span className="bg-stone-950 border border-stone-800 px-2.5 py-1 rounded-md text-stone-300">
                القاعة الداخلية: <strong className="text-secondary">{activeGender === 'women' ? 'مغلقة وآمنة' : 'مفتوحة بفترات'}</strong>
              </span>
              <span className="bg-stone-950 border border-stone-800 px-2.5 py-1 rounded-md text-stone-300">
                الخارجية: <strong className="text-secondary">{activeGender === 'women' ? 'مغلقة' : '24 ساعة'}</strong>
              </span>
            </div>
          </div>

          {/* Today Highlight Card */}
          <div className="bg-gradient-to-r from-stone-950 via-[#14181a] to-stone-950 border border-secondary/25 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-3 left-3 bg-secondary/10 border border-secondary/20 text-secondary text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
              <span>مواعيد تمرينك اليوم</span>
            </div>
            
            <div className="grid md:grid-cols-12 gap-4 items-center text-right">
              <div className="md:col-span-3">
                <span className="text-[10px] text-stone-500 block font-sans">اليوم الحالي</span>
                <span className="text-white font-display font-black text-xl sm:text-2xl flex items-center gap-2 justify-end mt-0.5">
                  <span>{todaySchedule.day}</span>
                  <Calendar className="w-5 h-5 text-secondary" />
                </span>
              </div>
              
              {/* Inside Hall Timing */}
              <div className="md:col-span-5 bg-[#0d0f10] border border-stone-850 p-3 rounded-xl flex items-center justify-between">
                <span className="text-[10px] text-stone-500 font-sans block text-left">INDOOR HALL</span>
                <div className="text-right">
                  <span className="text-stone-400 text-[10px] block font-display">القاعة الداخلية المغلقة</span>
                  <span className="text-white font-sans text-xs sm:text-sm font-bold mt-0.5 block">{todaySchedule.indoor}</span>
                </div>
              </div>

              {/* Outside Hall Timing */}
              <div className="md:col-span-4 bg-[#0d0f10] border border-stone-850 p-3 rounded-xl flex items-center justify-between">
                <span className="text-[10px] text-stone-500 font-sans block text-left">OUTDOOR NILE</span>
                <div className="text-right">
                  <span className="text-stone-400 text-[10px] block font-display">القاعة الخارجية (كورنيش النيل)</span>
                  <span className={`font-sans text-xs sm:text-sm font-bold mt-0.5 block ${todaySchedule.outdoor.includes("مغلقة") ? "text-red-400/90" : "text-white"}`}>{todaySchedule.outdoor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View Card List (RTL optimized) - Visible only on mobile screens */}
          <div className="block md:hidden space-y-4" dir="rtl">
            {activeSchedules.map((item) => {
              const isHighlighted = item.dayIndex === currentDayIndex;
              return (
                <div 
                  key={item.day}
                  className={`rounded-xl border p-4 transition-all duration-350 ${
                    isHighlighted 
                      ? "bg-gradient-to-br from-stone-900 to-stone-950 border-secondary/50 shadow-md shadow-secondary/5 relative" 
                      : "bg-[#0c0f10]/90 border-stone-850"
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent rounded-t-xl" />
                  )}

                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-stone-800/60 pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded-md ${isHighlighted ? "bg-secondary/15 text-secondary animate-pulse" : "bg-stone-900 text-stone-500"}`}>
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <span className={`font-display font-black text-sm sm:text-base ${isHighlighted ? "text-secondary" : "text-white"}`}>
                        {item.day}
                      </span>
                    </div>
                    
                    {isHighlighted ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary text-black text-[9px] font-display font-black rounded tracking-wide animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        اليوم الحالي
                      </span>
                    ) : (
                      <span className="text-[9px] text-stone-500 font-sans border border-stone-800 px-1.5 py-0.5 rounded">
                        نشط
                      </span>
                    )}
                  </div>

                  {/* Card Content (Times for the two halls) */}
                  <div className="space-y-3">
                    {/* Indoor Hall */}
                    <div className="bg-[#121617] border border-stone-850 p-3 rounded-xl flex flex-col gap-1 text-right relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-500 font-mono" dir="ltr">{item.indoorTimeEn}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="text-stone-300 text-[10px] font-display font-extrabold">القاعة الداخلية (المكيفة)</span>
                        </div>
                      </div>
                      <p className="text-white text-xs font-sans font-bold mt-1 leading-relaxed" dir="rtl">
                        {item.indoor}
                      </p>
                    </div>

                    {/* Outdoor Hall */}
                    <div className="bg-[#121617] border border-stone-850 p-3 rounded-xl flex flex-col gap-1 text-right relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-stone-500 font-mono" dir="ltr">{item.outdoorTimeEn}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                          <span className="text-stone-300 text-[10px] font-display font-extrabold">القاعة الخارجية (المطلة على النيل)</span>
                        </div>
                      </div>
                      <p className={`text-xs font-sans font-bold mt-1 leading-relaxed ${item.outdoor.includes("مغلقة") ? "text-red-400" : "text-white"}`} dir="rtl">
                        {item.outdoor}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop View Table - Hidden on Mobile screens, visible on md and up */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-stone-850 bg-stone-950/40" dir="rtl">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-900/80 text-stone-400 border-b border-stone-800">
                  <th className="py-3 px-4 font-display font-bold w-[120px] text-right">اليوم</th>
                  <th className="py-3 px-4 font-display font-bold text-right">القاعة الداخلية (المغلقة والمكيفة)</th>
                  <th className="py-3 px-4 font-display font-bold text-right w-[220px] sm:w-[280px]">القاعة الخارجية (مطلة على النيل)</th>
                  <th className="py-3 px-4 font-display font-bold text-center w-[100px]">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {activeSchedules.map((item) => {
                  const isHighlighted = item.dayIndex === currentDayIndex;
                  return (
                    <tr 
                      key={item.day}
                      className={`border-b border-stone-900/60 transition-colors ${
                        isHighlighted 
                          ? "bg-secondary/5 hover:bg-secondary/10" 
                          : "hover:bg-stone-900/20"
                      }`}
                    >
                      {/* Day Name */}
                      <td className="py-3.5 px-4 font-display font-extrabold text-white text-right">
                        <div className="flex items-center gap-2 justify-start">
                          {isHighlighted && <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0" />}
                          <span>{item.day}</span>
                        </div>
                      </td>
                      
                      {/* Indoor Hall Timings */}
                      <td className="py-3.5 px-4 text-stone-300 font-sans font-medium leading-relaxed text-right">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 justify-start">
                          <span>{item.indoor}</span>
                          <span className="text-[10px] text-stone-500 font-mono" dir="ltr">{item.indoorTimeEn}</span>
                        </div>
                      </td>

                      {/* Outdoor Hall Timings */}
                      <td className="py-3.5 px-4 font-sans font-medium text-right">
                        <div className="flex flex-col gap-0.5 justify-start">
                          <span className={item.outdoor.includes("مغلقة") ? "text-red-400/80" : "text-white"}>
                            {item.outdoor}
                          </span>
                          <span className="text-[10px] text-stone-500 font-mono" dir="ltr">{item.outdoorTimeEn}</span>
                        </div>
                      </td>

                      {/* Today Badge */}
                      <td className="py-3.5 px-4 text-center">
                        {isHighlighted ? (
                          <span className="inline-block px-2.5 py-0.5 bg-secondary text-black text-[9px] font-sans font-bold rounded">
                            اليوم
                          </span>
                        ) : (
                          <span className="text-stone-600 text-[10px] font-sans">نشط</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote Warning */}
        <div className="mt-6 flex items-start gap-2.5 bg-stone-900/30 border border-stone-850 p-3 rounded-xl text-right">
          <AlertTriangle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
          <p className="text-stone-400 text-[10px] sm:text-xs font-sans leading-normal">
            <strong>ملاحظة هامة للتعقيم والنظافة:</strong> نرجو من السادة الأعضاء تفهم ضرورة التواجد قبل انتهاء فترة التشغيل بـ 15 دقيقة على الأقل لإتاحة الفرصة لطاقم العمل للقيام بمهام التهوية والتعقيم الشاملة استعداداً للفترات التالية.
          </p>
        </div>
      </div>

      {/* 2. Photo Gallery Section with Lightbox */}
      <div className="relative overflow-hidden rounded-2xl border border-stone-850 bg-[#101415] p-5 sm:p-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] uppercase tracking-widest text-secondary font-black font-mono">معرض الصور • GALLERY</span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mt-1.5 mb-2">
            جولة بصرية داخل VIP GYM
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-md mx-auto">
            استكشف صوراً حية وعالية الجودة للتجهيزات الرياضية الشاملة، الصالة الداخلية الفاخرة، والمنظر البانورامي الخلاب للهواء الطلق مباشرة على النيل.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {gymImages.map((image, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
              className="group relative h-40 sm:h-48 rounded-xl overflow-hidden border border-stone-800 hover:border-secondary/50 cursor-pointer transition-all duration-300 bg-stone-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-right" />
              
              {/* Magnifier icon and title details */}
              <div className="absolute bottom-2.5 right-2.5 left-2.5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="bg-black/70 p-1.5 rounded-lg border border-stone-800 text-stone-400">
                  <Maximize2 className="w-3.5 h-3.5 text-secondary" />
                </span>
                <span className="text-[9px] sm:text-[10px] font-display font-bold text-white bg-secondary/90 text-black px-2 py-0.5 rounded truncate max-w-[120px]">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal (Full Screen Slider) */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 p-2 bg-stone-900 border border-stone-800 text-stone-300 hover:text-white rounded-full transition-all cursor-pointer hover:bg-stone-800"
                title="إغلاق"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Slider Navigation & Active Image */}
              <div 
                className="relative max-w-4xl w-full flex items-center justify-between gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Arrow */}
                <button
                  onClick={handlePrevImage}
                  className="p-3 bg-stone-900/80 border border-stone-800 text-secondary hover:text-white rounded-full transition-all cursor-pointer hover:bg-stone-800 shrink-0"
                  title="الصورة السابقة"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Image Container */}
                <div className="relative flex-grow flex flex-col items-center justify-center">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={gymImages[selectedImage].src}
                    alt={gymImages[selectedImage].alt}
                    className="max-h-[70vh] max-w-full rounded-2xl border border-stone-850 object-contain shadow-2xl"
                  />
                  {/* Photo details & counter */}
                  <div className="mt-4 text-center space-y-1">
                    <p className="text-white font-display font-extrabold text-base sm:text-lg">
                      {gymImages[selectedImage].alt}
                    </p>
                    <p className="text-stone-400 text-xs font-mono">
                      {selectedImage + 1} / {gymImages.length}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNextImage}
                  className="p-3 bg-stone-900/80 border border-stone-800 text-secondary hover:text-white rounded-full transition-all cursor-pointer hover:bg-stone-800 shrink-0"
                  title="الصورة التالية"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Quick Thumbs bar */}
              <div 
                className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-xl p-2 bg-stone-900/40 border border-stone-850/55 rounded-xl justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {gymImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      selectedImage === idx ? "border-secondary scale-105" : "border-stone-800 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
