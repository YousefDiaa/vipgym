import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldAlert, Award, Star, Heart, Flame, Compass, ChevronLeft, CheckCircle, Clock, Send } from "lucide-react";

interface PrepPoint {
  title: string;
  metric: string;
  desc: string;
}

const prepPoints: PrepPoint[] = [
  {
    title: "تدريب تمرين العقلة (Pull-ups)",
    metric: "الهدف: 10 - 12 تكرار كامل",
    desc: "برنامج تدريبي لتقوية عضلات الظهر، الساعدين، والكتفين لتصل إلى العدد المطلوب بأداء مثالي خالي من الأخطاء القانونية في الاختبارات."
  },
  {
    title: "اختبار الجري والسرعة (100 متر)",
    metric: "الهدف: إنهاء في أقل من 13 ثانية",
    desc: "تدريبات plyometrics لزيادة القوة الانفجارية لعضلات الفخذين والسمانة، مع تحسين تكنيك الانطلاق لزيادة السرعة القصوى."
  },
  {
    title: "اختبار ضاحية وجري التحمل (1500 متر)",
    metric: "الهدف: إنهاء في أقل من 6 دقائق",
    desc: "رفع السعة الحيوية للرئتين وتنظيم ضربات القلب وضبط معدل التنفس لضمان قطع المسافة دون إجهاد عضلي أو توقف."
  },
  {
    title: "تأهيل وتوجيه قفزة الثقة والسباحة",
    metric: "الارتفاع: 7.5 متر",
    desc: "تهيئة نفسية وتكتيكية لكسر حاجز الخوف من الارتفاعات، وتوجيه حركي لطريقة الدخول السليم للماء لمنع أي إصابات."
  },
  {
    title: "ضبط وتناسق القوام الطبي (Medical Fit)",
    metric: "الهدف: قوام متناسق وخالي من العيوب",
    desc: "معالجة مشكلات انحناء الظهر، تقوس الساقين، وتنزيل الوزن والدهون لمطابقة جدول الطول والوزن الطبي الدقيق للاختبارات الكلية."
  }
];

interface Cadet {
  id: number;
  name: string;
  academy: string;
  img: string;
}

const cadets: Cadet[] = [
  { id: 1, name: "ملازم كريم أحمد", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" },
  { id: 2, name: "ملازم مصطفى حسن", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" },
  { id: 3, name: "طالب عسكري يوسف ضياء", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150" },
  { id: 4, name: "ملازم زياد عمرو", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" },
  { id: 5, name: "ملازم عمرو خالد", academy: "الكلية البحرية", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
  { id: 6, name: "ملازم أول خالد وليد", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150" },
  { id: 7, name: "طالب عسكري عبد الرحمن", academy: "الفنية العسكرية", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150" },
  { id: 8, name: "ملازم طارق حامد", academy: "الدفاع الجوي", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" },
  { id: 9, name: "ملازم أول محمود سيد", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=150" },
  { id: 10, name: "ملازم أحمد علي", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150" },
  { id: 11, name: "طالب عسكري إبراهيم عيسى", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1504257404762-5a4dd1a1dfbf?auto=format&fit=crop&q=80&w=150" },
  { id: 12, name: "ملازم كمال الشناوي", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=150" },
  { id: 13, name: "ملازم حازم إمام", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150" },
  { id: 14, name: "طالب عسكري مروان محسن", academy: "الكلية البحرية", img: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=150" },
  { id: 15, name: "ملازم أول شريف عبد الله", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150" },
  { id: 16, name: "طالب عسكري إسلام رأفت", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=150" },
  { id: 17, name: "ملازم أول هاني جودة", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150" },
  { id: 18, name: "ملازم أول علي محمود", academy: "الدفاع الجوي", img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150" },
  { id: 19, name: "ملازم مؤمن زكريا", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" },
  { id: 20, name: "ملازم حسين علي", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" },
  { id: 21, name: "طالب عسكري وليد سليمان", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1520156473893-b4241063e791?auto=format&fit=crop&q=80&w=150" },
  { id: 22, name: "ملازم عمرو دياب", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" },
  { id: 23, name: "ملازم عادل إمام", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150" },
  { id: 24, name: "ملازم أحمد زكي", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1485178575877-1a13bf489fea?auto=format&fit=crop&q=80&w=150" },
  { id: 25, name: "ملازم محمود عبد العزيز", academy: "الكلية البحرية", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=150" },
  { id: 26, name: "ملازم فاروق الفيشاوي", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=150" },
  { id: 27, name: "ملازم نور الشريف", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?auto=format&fit=crop&q=80&w=150" },
  { id: 28, name: "ملازم يحيى الفخراني", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1511551201822-ed7d296209e4?auto=format&fit=crop&q=80&w=150" },
  { id: 29, name: "ملازم حسين فهمي", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" },
  { id: 30, name: "ملازم محمود المليجي", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" },
  { id: 31, name: "ملازم فريد شوقي", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150" },
  { id: 32, name: "ملازم رشدي أباظة", academy: "الكلية الجوية", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150" },
  { id: 33, name: "ملازم أحمد رمزي", academy: "الدفاع الجوي", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" },
  { id: 34, name: "ملازم أول عمر الشريف", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" },
  { id: 35, name: "ملازم سعيد عبد الغني", academy: "كلية الشرطة", img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=150" },
  { id: 36, name: "ملازم جميل راتب", academy: "الكلية الحربية", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150" }
];

export default function MilitaryPrep() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target is August 1st, 2026 at 12:00 PM (Typical military registration kickoff in Egypt)
    const targetDate = new Date("2026-08-01T12:00:00");

    const calculateTime = () => {
      const now = new Date();
      let difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Fallback: dynamic countdown from now for demo purposes to keep it ticking actively
        const fallbackTarget = new Date();
        fallbackTarget.setDate(fallbackTarget.getDate() + 25);
        fallbackTarget.setHours(12, 0, 0, 0);
        difference = fallbackTarget.getTime() - now.getTime();
      }

      return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      };
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="military-prep" className="py-20 bg-surface-base relative overflow-hidden scroll-mt-16">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم السابع • 07</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            دورة تأهيل واختبارات <span className="neon-gradient-text uppercase">الكليات العسكرية والشرطة</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            مستقبلك المهني يبدأ من هنا! نقدم لك أقوى برنامج إعداد بدني ونفسي مكثف لاجتياز كافة الاختبارات الرياضية العسكرية بنجاح تام وعلامات كاملة.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Highlight Banner / Card */}
        <div className="bg-[#131618] border-2 border-secondary/20 rounded-2xl p-6 sm:p-10 mb-12 text-right relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
          <div className="absolute top-0 left-0 bg-secondary text-black font-mono font-black text-xs px-4 py-1.5 rounded-br-2xl">
            MILITARY ACADEMY CODES
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Motivator Badge */}
            <div className="lg:col-span-4 bg-stone-900 border border-stone-850 p-6 rounded-xl text-center space-y-4">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Flame className="w-8 h-8 text-secondary animate-pulse" />
              </div>
              <div>
                <span className="block text-xl font-display font-black text-white">نسبة نجاح 98%</span>
                <span className="text-stone-400 text-xs font-sans">لطلابنا الملتحقين بالدورة سنوياً</span>
              </div>
              <p className="text-stone-500 text-[11px] font-sans leading-relaxed">
                يتم الإشراف الشخصي والكامل من قبل كباتن الصالة المتخصصين في التأهيل الرياضي للأجهزة الأمنية والكليات العسكرية.
              </p>
            </div>

            {/* Right: Intro Info */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-black text-white">
                لماذا تشترك في دورة التأهيل العسكري بـ VIP GYM؟
              </h3>
              <p className="text-stone-300 text-sm font-sans leading-relaxed">
                الاختبار الرياضي للكليات العسكرية ليس مجرد لياقة عشوائية، بل يحتاج لتكنيك ميكانيكي دقيق وقدرة تحمل رئوية عالية. نحن نعمل معك على تطوير العضلات المحددة لكل اختبار (كتف، ذراعين، أرجل)، مع محاكاة دورية للاختبار الحقيقي داخل نادي المنيا الرياضي لتفادي أي رهبة أو توتر في يوم الاختبار الفعلي.
              </p>
            </div>

          </div>
        </div>

        {/* Countdown Timer Widget */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#131618] border border-secondary/30 rounded-2xl p-4 sm:p-8 relative overflow-hidden text-center shadow-xl">
          {/* Subtle Background textures */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#dbe124_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between gap-8 text-right" dir="rtl">
            
            {/* Timer Left: Label & Action */}
            <div className="md:w-1/2 space-y-3 text-center md:text-right">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full text-secondary text-xs font-bold font-mono">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                <span>التقديم وقبول الدفعات قريباً جداً</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white leading-snug">
                بداية التسجيل وحجز دفعة التأهيل العسكري 2026
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
                انضم الآن لمجموعات التدريب المبكر لرفع لياقتك البدنية وضمان اجتياز قفزة الثقة والضاحية. الأماكن محدودة جداً لضمان جودة الإشراف والتدريب الفردي لكل طالب.
              </p>
              
              {/* WhatsApp CTA */}
              <div className="pt-2 flex justify-center md:justify-start">
                <a
                  href={`https://wa.me/201007555737?text=${encodeURIComponent(
                    "السلام عليكم، أود الاستفسار والتسجيل المبكر في دورة التأهيل العسكري للكليات العسكرية والشرطة في VIP GYM."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-black font-display font-black text-xs sm:text-sm py-2.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-950/20 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-black transform rotate-180" />
                  <span>استفسر واحجز مكانك مبكراً عبر واتساب 💬</span>
                </a>
              </div>
            </div>

            {/* Timer Right: Countdown Display */}
            <div className="md:w-1/2 w-full flex flex-row-reverse justify-center gap-1.5 xs:gap-3 sm:gap-4 select-none">
              
              {/* Days */}
              <div className="flex flex-col items-center bg-stone-900/90 border border-stone-850 rounded-xl p-2 sm:p-4 min-w-[58px] xs:min-w-[70px] sm:min-w-[85px] shadow-inner relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-black text-secondary tracking-tight xs:tracking-widest font-mono">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-xs text-stone-500 font-sans mt-1 font-bold">يوم</span>
              </div>

              {/* Colon Separator */}
              <div className="flex items-center justify-center text-secondary text-lg sm:text-2xl font-mono self-center pb-3 sm:pb-4 animate-pulse">:</div>

              {/* Hours */}
              <div className="flex flex-col items-center bg-stone-900/90 border border-stone-850 rounded-xl p-2 sm:p-4 min-w-[58px] xs:min-w-[70px] sm:min-w-[85px] shadow-inner relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-black text-white tracking-tight xs:tracking-widest font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-xs text-stone-500 font-sans mt-1 font-bold">ساعة</span>
              </div>

              {/* Colon Separator */}
              <div className="flex items-center justify-center text-stone-700 text-lg sm:text-2xl font-mono self-center pb-3 sm:pb-4 animate-pulse">:</div>

              {/* Minutes */}
              <div className="flex flex-col items-center bg-stone-900/90 border border-stone-850 rounded-xl p-2 sm:p-4 min-w-[58px] xs:min-w-[70px] sm:min-w-[85px] shadow-inner relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-black text-white tracking-tight xs:tracking-widest font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-xs text-stone-500 font-sans mt-1 font-bold">دقيقة</span>
              </div>

              {/* Colon Separator */}
              <div className="flex items-center justify-center text-stone-700 text-lg sm:text-2xl font-mono self-center pb-3 sm:pb-4 animate-pulse">:</div>

              {/* Seconds */}
              <div className="flex flex-col items-center bg-stone-900/90 border border-stone-850 rounded-xl p-2 sm:p-4 min-w-[58px] xs:min-w-[70px] sm:min-w-[85px] shadow-inner relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-xl xs:text-2xl sm:text-3xl font-display font-black text-stone-400 tracking-tight xs:tracking-widest font-mono">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-xs text-stone-500 font-sans mt-1 font-bold">ثانية</span>
              </div>

            </div>

          </div>
        </div>

        {/* Success Wall of Honor (Experts in Military Prep) */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-b from-[#1b2210]/40 to-[#12160d]/95 border-2 border-secondary/20 rounded-2xl p-6 sm:p-10 relative overflow-hidden text-center shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 mb-8">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-secondary tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#f3f961] to-secondary drop-shadow-[0_2px_10px_rgba(219,225,36,0.3)] select-none">
              خبراء في التأهيل العسكري
            </h3>
            <p className="text-[#dbe124]/80 text-xs sm:text-sm font-display font-bold tracking-widest mt-1.5 uppercase select-none">
              رواد في التأهيل الرياضي منذ عام 2008
            </p>
            <div className="h-[2px] w-16 bg-secondary/30 mx-auto rounded-full mt-3" />
          </div>

          {/* Hexagon Grid */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 max-w-3xl mx-auto select-none">
            {cadets.map((cadet, index) => (
              <motion.div
                key={cadet.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 12) * 0.03 }}
                className="relative group w-[52px] h-[60px] xs:w-[68px] xs:h-[78px] sm:w-[84px] sm:h-[96px] shrink-0"
              >
                {/* Tooltip */}
                <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-32 bg-stone-950/95 border border-secondary/40 text-[10px] sm:text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center shadow-2xl backdrop-blur-sm">
                  <p className="font-display font-black text-secondary leading-none">{cadet.name}</p>
                  <p className="text-stone-300 font-sans text-[9px] sm:text-[10px] mt-1 font-semibold">{cadet.academy}</p>
                  <p className="text-[8px] text-stone-500 font-sans mt-0.5 font-bold">بطل VIP GYM 🏆</p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-950/95" />
                </div>

                {/* Double hexagon mask for glowing border */}
                <div 
                  className="w-full h-full bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary/10 p-[1.5px] xs:p-[2px] active:scale-95 transition-transform duration-200"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <div 
                    className="w-full h-full bg-stone-900"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                  >
                    <img 
                      src={cadet.img} 
                      alt={cadet.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-stone-500 text-xs font-sans">
            * تم إخفاء بعض البيانات الشخصية والأسماء الكاملة احتراماً للخصوصية والقواعد العسكرية للأبطال.
          </div>
        </div>

        {/* Steps or Grid of exercises */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {prepPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131618] border border-stone-850 p-6 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300"
            >
              <div>
                {/* Header and targets */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold font-sans bg-secondary/15 text-secondary px-2.5 py-0.5 rounded-full">
                    {point.metric}
                  </span>
                  <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center border border-stone-800">
                    <Star className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-display font-extrabold text-white mb-2">
                  {point.title}
                </h4>

                {/* Desc */}
                <p className="text-stone-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Status */}
              <div className="mt-5 pt-3 border-t border-stone-850/60 flex items-center gap-1.5 justify-end text-xs text-stone-500 font-sans">
                <span>تأهيل تدريجي مدروس</span>
                <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
