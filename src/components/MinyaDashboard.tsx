import React from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  Sparkles, 
  Users, 
  UserCheck, 
  ShieldAlert, 
  Coffee, 
  Calendar,
  Compass,
  ArrowLeft,
  Phone,
  MessageSquare,
  ChevronLeft
} from "lucide-react";
import Logo from "./Logo";

export interface SectionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  badge?: string;
}

interface MinyaDashboardProps {
  onSelectSection: (sectionId: string) => void;
  onChangeBranch: () => void;
}

export default function MinyaDashboard({ onSelectSection, onChangeBranch }: MinyaDashboardProps) {
  const sections: SectionItem[] = [
    {
      id: "contact",
      title: "العنوان و التواصل",
      description: "موقعنا بالتفصيل على كورنيش النيل بالمنيا، أرقام الهاتف، ووسائل التواصل المباشرة معنا.",
      icon: MapPin,
      color: "from-blue-500/10 to-cyan-500/5 hover:border-blue-500/50",
      badge: "الموقع الرسمي"
    },
    {
      id: "schedule_pricing",
      title: "المواعيد و الاسعار",
      description: "مواعيد عمل الصالات على مدار 24 ساعة، باقات الاشتراك المتنوعة (برايفت، فلور، بدون مدرب) وأسعارنا المنافسة.",
      icon: Clock,
      color: "from-amber-500/10 to-yellow-500/5 hover:border-amber-500/50",
      badge: "الأسعار الجديدة"
    },
    {
      id: "services_reasons",
      title: "الخدمات و الأسباب",
      description: "ما الذي يجعل VIP GYM الاختيار الأول؟ أحدث الأجهزة الأمريكية CYBEX، الإطلالة البانورامية، والخدمات المميزة.",
      icon: Sparkles,
      color: "from-purple-500/10 to-indigo-500/5 hover:border-purple-500/50",
      badge: "مزايا حصرية"
    },
    {
      id: "activities",
      title: 'الأنشطة " الرجال و السيدات و الاطفال "',
      description: "كلاسات الأيروبكس والزومبا للسيدات، برامج تدريب وتأسيس الأطفال، اليوجا، الكروس فت، وتأهيل كبار السن وذوي الهمم.",
      icon: Users,
      color: "from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/50",
      badge: "لجميع الأعمار"
    },
    {
      id: "trainers",
      title: "المدربين",
      description: "تعرف على الهيكل التنظيمي المتكامل ونخبة من أفضل الكباتن والمدربين المعتمدين محلياً ودولياً.",
      icon: UserCheck,
      color: "from-rose-500/10 to-pink-500/5 hover:border-rose-500/50",
      badge: "طاقم محترف"
    },
    {
      id: "military",
      title: "التاهيل العسكري",
      description: "برامج إعداد بدني ونفسي مكثفة لمساعدة الطلاب المتقدمين لاجتياز اختبارات اللياقة البدنية للكليات العسكرية والشرطة بنجاح.",
      icon: ShieldAlert,
      color: "from-red-500/10 to-orange-500/5 hover:border-red-500/50",
      badge: "معدل نجاح 100%"
    },
    {
      id: "buffet",
      title: "البوفيه",
      description: "قائمة طعام صحية متكاملة لتقديم الوجبات الرياضية، المشروبات الصحية الساخنة والباردة لراحتك بعد التمرين.",
      icon: Coffee,
      color: "from-amber-600/10 to-amber-700/5 hover:border-amber-500/50",
      badge: "وجبات صحية"
    },
    {
      id: "events",
      title: "الحفلات و events",
      description: "تنظيم المسابقات الحماسية الأسبوعية، أحداث الجري الخارجي والضاحية وتكريم الأبطال المتميزين بالجيم.",
      icon: Calendar,
      color: "from-indigo-500/10 to-violet-500/5 hover:border-indigo-500/50",
      badge: "فعاليات تنافسية"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f10] text-stone-200 select-none pb-20 relative overflow-hidden flex flex-col">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Premium Brand Header */}
      <header className="w-full bg-[#101415]/80 backdrop-blur-md border-b border-stone-800/80 sticky top-0 z-40 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <Logo showText={false} size="custom" iconSizeClassName="w-12 h-9" />
            <div className="text-right">
              <h1 className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white leading-none">
                VIP <span className="text-secondary">GYM</span> <span className="text-[9px] text-secondary/90 font-bold tracking-widest uppercase font-mono">HEALTH CLUB</span>
              </h1>
              <span className="text-[9px] text-stone-400 block mt-0.5">
                نادي المنيا الرياضي
              </span>
            </div>
          </div>

          <button
            onClick={onChangeBranch}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-secondary hover:border-secondary/40 text-xs font-bold transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-secondary animate-spin" style={{ animationDuration: "12s" }} />
            <span>تغيير الفرع</span>
          </button>
        </div>
      </header>

      {/* Main Content Dashboard Portal */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full relative z-10 flex flex-col justify-center items-center">
        
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>الفرع الرئيسي • نادي المنيا الرياضي</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            استكشف <span className="text-secondary drop-shadow-[0_0_15px_rgba(219,225,36,0.2)]">VIP GYM</span>
          </h2>
          <p className="text-stone-400 font-sans text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            مرحباً بك في الفرع الرئيسي العريق. اختر أحد الأقسام التالية لتصفح الميزات، الخدمات، المواعيد، وباقات الاشتراك الفاخرة.
          </p>
        </motion.div>

        {/* Sections Grid - Matches the requested list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {sections.map((sec, index) => {
            const IconComponent = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onSelectSection(sec.id)}
                className={`group relative bg-[#131618] border border-stone-800/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-right cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-gradient-to-br ${sec.color}`}
              >
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.02] pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    {sec.badge && (
                      <span className="bg-stone-900 border border-stone-800 text-[9px] text-secondary font-sans font-bold px-2 py-0.5 rounded">
                        {sec.badge}
                      </span>
                    )}
                    <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 group-hover:border-secondary/40 text-secondary transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-black text-white group-hover:text-secondary transition-colors leading-tight">
                    {sec.title}
                  </h3>

                  <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.03] flex items-center justify-end text-xs text-stone-500 group-hover:text-secondary font-sans font-bold transition-colors gap-1 relative z-10">
                  <span>عرض التفاصيل</span>
                  <ChevronLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Help Footer Contacts */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 bg-[#131618]/90 border border-stone-800/80 rounded-2xl p-5 sm:p-6 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-inner"
        >
          <div className="text-right sm:text-right">
            <h4 className="text-sm font-display font-bold text-white">هل تحتاج إلى مساعدة سريعة؟</h4>
            <p className="text-xs text-stone-400 font-sans mt-1">فريق الدعم والريسبشن في خدمتك للإجابة على جميع الاستفسارات.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://wa.me/201009244078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600/10 hover:bg-green-600/20 border border-green-500/30 text-green-400 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all font-sans"
            >
              <MessageSquare className="w-4 h-4" />
              واتساب الكابتن
            </a>
            <a
              href="tel:01007555737"
              className="flex items-center gap-1.5 bg-secondary hover:bg-secondary/90 text-black px-4 py-1.5 rounded-xl text-xs font-bold transition-all font-sans"
            >
              <Phone className="w-4 h-4" />
              اتصل بنا الآن
            </a>
          </div>
        </motion.div>

      </main>

      {/* Static Footer Brand Signature */}
      <footer className="mt-auto py-6 border-t border-stone-900 text-center text-[10px] text-stone-600 font-sans">
        <span>VIP GYM HEALTH CLUB • جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
