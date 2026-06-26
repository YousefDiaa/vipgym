import React from "react";
import { motion } from "motion/react";
import { Clock, Users, ShieldCheck, Sun, Moon, Calendar, Zap } from "lucide-react";

export default function ScheduleSection() {
  return (
    <section id="schedules" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16">
      {/* Visual background lights */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الثاني • 02</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            مواعيد وفترات <span className="neon-gradient-text uppercase">التدريب والتشغيل</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            لقد صممنا فترات التشغيل لتلائم جميع جداول الأعضاء اليومية، مع الحفاظ التام على أقصى درجات الخصوصية والأمان لجميع الرياضيين.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Shift 1: Men (24 Hours) */}
          <div className="bg-[#131618] border-2 border-secondary/20 hover:border-secondary rounded-2xl p-6 sm:p-8 text-right flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(164,214,76,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-secondary text-black font-mono font-black text-xs px-3 py-1 rounded-br-xl">
              24 HOURS ACTIVE
            </div>

            <div>
              {/* Icon Group */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-secondary/15 text-secondary border border-secondary/20 text-xs font-bold font-sans px-3 py-1 rounded-full">
                  متاح للرجال دائماً
                </span>
                <Moon className="w-8 h-8 text-secondary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-black text-white mb-3">
                شيفت الرجال (على مدار 24 ساعة)
              </h3>
              
              <p className="text-stone-400 text-sm font-sans leading-relaxed mb-6">
                نحن نعلم مدى انشغالك بمسؤوليات العمل والحياة، لذلك تفتح القاعة الخارجية في الهواء الطلق على النيل أبوابها للرجال <span className="text-white font-bold">طوال 24 ساعة يومياً بدون توقف</span>، حتى تتمكن من التمرين في أي ساعة بالليل أو النهار.
              </p>

              {/* Time Details List */}
              <ul className="space-y-3.5 text-stone-300 text-xs sm:text-sm font-sans">
                <li className="flex items-center gap-2 justify-end">
                  <span>صالة التمرين الخارجية: <strong className="text-white">طوال 24 ساعة (يومياً)</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>صالة الأجهزة المغلقة (المشتركة): <strong className="text-white">خارج أوقات شيفت السيدات</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>تواجد المدربين: <strong className="text-white">على مدار الساعة لخدمتك وتوجيهك</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </li>
              </ul>
            </div>

            {/* Quick Tag */}
            <div className="border-t border-stone-800/80 pt-5 mt-6 flex items-center gap-2 justify-end text-xs text-stone-400">
              <span>تطبق جميع معايير التنظيف والتهوية طوال الليل</span>
              <Zap className="w-3.5 h-3.5 text-secondary shrink-0" />
            </div>
          </div>

          {/* Shift 2: Ladies (100% Private Inside Hall) */}
          <div className="bg-[#131618] border border-stone-800 hover:border-pink-500/30 rounded-2xl p-6 sm:p-8 text-right flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(236,72,153,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-pink-500 text-white font-sans font-bold text-[10px] px-3 py-1 rounded-br-xl">
              LADIES ONLY ZONE
            </div>

            <div>
              {/* Icon Group */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 text-xs font-bold font-sans px-3 py-1 rounded-full">
                  خصوصية تامة 100%
                </span>
                <ShieldCheck className="w-8 h-8 text-pink-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-black text-white mb-3">
                شيفت السيدات (القاعة الداخلية المغلقة)
              </h3>
              
              <p className="text-stone-400 text-sm font-sans leading-relaxed mb-6">
                نمنحك بيئة تدريبية مريحة ومغلقة بالكامل بخصوصية لا مثيل لها. الصالة الداخلية مكيفة بالكامل ومجهزة بأرقى أجهزة الكارديو والقوة، مع طاقم تدريبي نسائي ذو خبرة عالية لخدمة أهدافك الرياضية والصحية.
              </p>

              {/* Time Details List */}
              <ul className="space-y-3.5 text-stone-300 text-xs sm:text-sm font-sans">
                <li className="flex items-center gap-2 justify-end">
                  <span>ساعات العمل للسيدات: <strong className="text-white">من 07:00 صباحاً حتى 11:00 مساءً</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>فترات التمرين: <strong className="text-white">طوال أيام الأسبوع بدون استثناء</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span>منع التصوير: <strong className="text-pink-400">ممنوع تماماً لضمان الراحة والحرية الكاملة</strong></span>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                </li>
              </ul>
            </div>

            {/* Quick Tag */}
            <div className="border-t border-stone-800/80 pt-5 mt-6 flex items-center gap-2 justify-end text-xs text-stone-400">
              <span>كلاسات الزومبا والفتنس الجماعي مدمجة في المواعيد</span>
              <Sun className="w-3.5 h-3.5 text-pink-400 shrink-0" />
            </div>
          </div>

        </div>

        {/* Warning Note Box */}
        <div className="mt-12 max-w-3xl mx-auto bg-stone-900/50 border border-stone-800 rounded-xl p-4 text-center">
          <p className="text-stone-400 text-xs sm:text-sm font-sans">
            📌 نرجو من السادة الأعضاء الالتزام التام بإنهاء التمرين قبل انتهاء فترة التشغيل المحددة بـ 15 دقيقة للحفاظ على انتظام التعقيم.
          </p>
        </div>

      </div>
    </section>
  );
}
