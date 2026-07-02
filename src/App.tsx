import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutAndContact from "./components/AboutAndContact";
import ScheduleSection from "./components/ScheduleSection";
import HallsSection from "./components/HallsSection";
import TrainersSection from "./components/TrainersSection";
import EquipmentSection from "./components/EquipmentSection";
import DiverseServices from "./components/DiverseServices";
import MilitaryPrep from "./components/MilitaryPrep";
import BuffetSection from "./components/BuffetSection";
import EventsSection from "./components/EventsSection";
import SubscriptionCards from "./components/SubscriptionCards";
import FooterAndContact from "./components/FooterAndContact";
import LocationSelector from "./components/LocationSelector";
import CityscapePage from "./components/CityscapePage";
import ActivitiesGrid from "./components/ActivitiesGrid";
import MinyaDashboard from "./components/MinyaDashboard";
import MinyaSectionHeader from "./components/MinyaSectionHeader";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUp, 
  Star, 
  Phone, 
  MessageSquare,
  MapPin, 
  Clock, 
  Sparkles, 
  Users, 
  UserCheck, 
  ShieldAlert, 
  Coffee, 
  Calendar,
  ChevronLeft,
  Compass
} from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"minya_club" | "cityscape_mall" | null>(null);
  const [showLocationSelector, setShowLocationSelector] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("dashboard");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock or unlock body scrolling depending on LocationSelector visibility
  useEffect(() => {
    if (showLocationSelector || !selectedLocation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLocationSelector, selectedLocation]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 1. If we are showing the location selector, render ONLY the selector as the landing portal
  if (showLocationSelector || !selectedLocation) {
    return (
      <LocationSelector 
        onSelect={() => {
          const selected = localStorage.getItem("vip_gym_location_selected") as any;
          setSelectedLocation(selected);
          setShowLocationSelector(false);
          setActiveSection("dashboard"); // Default to main view dashboard on select
        }} 
      />
    );
  }

  // 2. If cityscape_mall is selected, render CityscapePage
  if (selectedLocation === "cityscape_mall") {
    return (
      <CityscapePage 
        onBackToMain={() => {
          setSelectedLocation("minya_club");
          setActiveSection("dashboard");
        }}
        onChangeBranch={() => {
          setShowLocationSelector(true);
        }}
      />
    );
  }

  // 3. Define sections list and overview view directly in App for unified single-screen dashboard
  const sections = [
    {
      id: "contact",
      title: "العنوان و التواصل",
      description: "موقعنا بالتفصيل على كورنيش النيل بالمنيا، أرقام الهاتف، ووسائل التواصل المباشرة معنا.",
      icon: MapPin,
      color: "from-blue-500/10 to-cyan-500/5 hover:border-blue-500/40 border-stone-800/80",
      badge: "الموقع الرسمي"
    },
    {
      id: "schedule_pricing",
      title: "المواعيد و الاسعار",
      description: "مواعيد عمل الصالات على مدار 24 ساعة، باقات الاشتراك المتنوعة (برايفت، فلور، بدون مدرب) وأسعارنا المنافسة.",
      icon: Clock,
      color: "from-amber-500/10 to-yellow-500/5 hover:border-amber-500/40 border-stone-800/80",
      badge: "الأسعار الجديدة"
    },
    {
      id: "services_reasons",
      title: "الخدمات و الأسباب",
      description: "ما الذي يجعل VIP GYM الاختيار الأول؟ أحدث الأجهزة الأمريكية CYBEX، الإطلالة البانورامية، والخدمات المميزة.",
      icon: Sparkles,
      color: "from-purple-500/10 to-indigo-500/5 hover:border-purple-500/40 border-stone-800/80",
      badge: "مزايا حصرية"
    },
    {
      id: "activities",
      title: 'الأنشطة " الرجال و السيدات و الاطفال "',
      description: "كلاسات الأيروبكس والزومبا للسيدات، برامج تدريب وتأسيس الأطفال، اليوجا، الكروس فت، وتأهيل كبار السن وذوي الهمم.",
      icon: Users,
      color: "from-emerald-500/10 to-teal-500/5 hover:border-emerald-500/40 border-stone-800/80",
      badge: "لجميع الأعمار"
    },
    {
      id: "trainers",
      title: "المدربين",
      description: "تعرف على الهيكل التنظيمي المتكامل ونخبة من أفضل الكباتن والمدربين المعتمدين محلياً ودولياً.",
      icon: UserCheck,
      color: "from-rose-500/10 to-pink-500/5 hover:border-rose-500/40 border-stone-800/80",
      badge: "طاقم محترف"
    },
    {
      id: "military",
      title: "التاهيل العسكري",
      description: "برامج إعداد بدني ونفسي مكثفة لمساعدة الطلاب المتقدمين لاجتياز اختبارات اللياقة البدنية للكليات العسكرية والشرطة بنجاح.",
      icon: ShieldAlert,
      color: "from-red-500/10 to-orange-500/5 hover:border-red-500/40 border-stone-800/80",
      badge: "معدل نجاح 100%"
    },
    {
      id: "buffet",
      title: "البوفيه",
      description: "قائمة طعام صحية متكاملة لتقديم الوجبات الرياضية، المشروبات الصحية الساخنة والباردة لراحتك بعد التمرين.",
      icon: Coffee,
      color: "from-amber-600/10 to-amber-700/5 hover:border-amber-500/40 border-stone-800/80",
      badge: "وجبات صحية"
    },
    {
      id: "events",
      title: "الحفلات و events",
      description: "تنظيم المسابقات الحماسية الأسبوعية، أحداث الجري الخارجي والضاحية وتكريم الأبطال المتميزين بالجيم.",
      icon: Calendar,
      color: "from-indigo-500/10 to-violet-500/5 hover:border-indigo-500/40 border-stone-800/80",
      badge: "فعاليات تنافسية"
    }
  ];

  const renderDashboardOverview = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#101415]/90 border border-stone-800/90 rounded-2xl p-6 sm:p-8 text-right space-y-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="border-b border-stone-800/60 pb-6">
          <h3 className="text-xl sm:text-2xl font-display font-black text-white flex items-center justify-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            نظرة عامة على خدمات <span className="text-secondary">VIP GYM</span>
          </h3>
          <p className="text-stone-400 font-sans text-xs sm:text-sm mt-2 leading-relaxed">
            الفرع الرئيسي بنادي المنيا الرياضي يقدم تجربة لياقة بدنية لا مثيل لها بفضل التجهيزات العالمية والخدمات الشاملة المتوفرة على مدار 24 ساعة.
          </p>
        </div>

        {/* Highlight Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-stone-900/60 border border-stone-800/50 p-4 rounded-xl text-center">
            <div className="text-secondary font-display font-extrabold text-xl sm:text-2xl">24 ساعة</div>
            <div className="text-stone-400 text-xs mt-1 font-sans">مواعيد عمل مرنة</div>
          </div>
          <div className="bg-stone-900/60 border border-stone-800/50 p-4 rounded-xl text-center">
            <div className="text-secondary font-display font-extrabold text-xl sm:text-2xl">3 صالات</div>
            <div className="text-stone-400 text-xs mt-1 font-sans">منفصلة بالكامل</div>
          </div>
          <div className="bg-stone-900/60 border border-stone-800/50 p-4 rounded-xl text-center">
            <div className="text-secondary font-display font-extrabold text-xl sm:text-2xl">CYBEX</div>
            <div className="text-stone-400 text-xs mt-1 font-sans">تجهيزات أمريكية</div>
          </div>
          <div className="bg-stone-900/60 border border-stone-800/50 p-4 rounded-xl text-center">
            <div className="text-secondary font-display font-extrabold text-xl sm:text-2xl">+10 مدربين</div>
            <div className="text-stone-400 text-xs mt-1 font-sans">أطقم فنية معتمدة</div>
          </div>
        </div>

        {/* Feature list */}
        <div className="space-y-3.5 pt-2">
          <h4 className="text-sm font-display font-bold text-white">لماذا تختار فرع نادي المنيا؟</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-300 font-sans text-xs leading-relaxed">
            <li className="flex items-center gap-2 bg-stone-900/40 p-2.5 rounded-lg border border-stone-800/30">
              <span className="text-secondary font-bold text-sm">✓</span>
              <span>موقع استثنائي على كورنيش النيل بالمنيا مباشرة.</span>
            </li>
            <li className="flex items-center gap-2 bg-stone-900/40 p-2.5 rounded-lg border border-stone-800/30">
              <span className="text-secondary font-bold text-sm">✓</span>
              <span>أنشطة متكاملة للرجال والسيدات والأطفال.</span>
            </li>
            <li className="flex items-center gap-2 bg-stone-900/40 p-2.5 rounded-lg border border-stone-800/30">
              <span className="text-secondary font-bold text-sm">✓</span>
              <span>برامج تأهيل بدني وعسكري معتمدة باحترافية.</span>
            </li>
            <li className="flex items-center gap-2 bg-stone-900/40 p-2.5 rounded-lg border border-stone-800/30">
              <span className="text-secondary font-bold text-sm">✓</span>
              <span>كافيه وبوفيه وجبات صحية متكامل للرياضيين.</span>
            </li>
          </ul>
        </div>

        {/* Call to action message */}
        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <p className="text-xs sm:text-sm text-white font-display font-bold">ابدأ رحلتك الرياضية اليوم</p>
            <p className="text-[11px] text-stone-400 font-sans mt-0.5">انقر على أي من الأقسام بالأعلى لاستكشاف التفاصيل المحددة.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection("schedule_pricing")}
              className="bg-secondary text-black hover:bg-secondary/90 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              عرض الأسعار والاشتراكات
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderActiveSectionContent = () => {
    if (activeSection === "dashboard") {
      return renderDashboardOverview();
    }
    switch (activeSection) {
      case "contact":
        return <AboutAndContact />;
      case "schedule_pricing":
        return (
          <>
            <ScheduleSection />
            <SubscriptionCards />
          </>
        );
      case "services_reasons":
        return (
          <>
            <DiverseServices />
            <HallsSection />
            <EquipmentSection />
          </>
        );
      case "activities":
        return <ActivitiesGrid />;
      case "trainers":
        return <TrainersSection />;
      case "military":
        return <MilitaryPrep />;
      case "buffet":
        return <BuffetSection />;
      case "events":
        return <EventsSection />;
      default:
        return renderDashboardOverview();
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f10] text-stone-200 selection:bg-secondary selection:text-black relative overflow-hidden flex flex-col">
      {/* Background decoration blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Premium Sticky Navigation Header */}
      <MinyaSectionHeader 
        activeSection={activeSection}
        onSelectSection={(sectionId) => {
          setActiveSection(sectionId);
          // Scroll dynamically to the active section panel below the tiles
          const el = document.getElementById("active-section-panel");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        onBackToDashboard={() => {
          setActiveSection("dashboard");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onChangeBranch={() => {
          setShowLocationSelector(true);
        }}
      />

      {/* Main Single-Screen Unified Content Body */}
      <main className={`flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col ${
        activeSection === "dashboard"
          ? "pt-16 sm:pt-20 pb-4 h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] min-h-[500px] justify-center"
          : "pt-24 pb-20"
      }`}>
        
        {activeSection === "dashboard" ? (
          // DIRECTORY VIEW (Landing Dashboard)
          <>
            {/* Unified Welcome Banner - Highly Compact & Non-scrollable */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 bg-secondary/10 border border-secondary/25 text-secondary text-[9px] sm:text-[10px] font-sans font-bold rounded-full mb-1 sm:mb-1.5 select-none">
                <span className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                <span>الفرع الرئيسي • نادي المنيا الرياضي</span>
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl font-display font-black text-white leading-none">
                أقسام <span className="text-secondary drop-shadow-[0_0_10px_rgba(219,225,36,0.2)]">VIP GYM</span> التفاعلية
              </h2>
              <p className="text-stone-400 font-sans text-[10px] sm:text-xs mt-1 max-w-md mx-auto leading-normal">
                انقر على أي بطاقة لفتح القسم واستعراض المواعيد، الأسعار، الخدمات، والاشتراكات.
              </p>
            </motion.div>

            {/* Interactive Sections Grid - Highly optimized to fit viewport exactly without scroll */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 w-full mb-3 sm:mb-4 max-w-5xl mx-auto">
              {sections.map((sec, index) => {
                const IconComponent = sec.icon;
                return (
                  <motion.div
                    key={sec.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    onClick={() => {
                      setActiveSection(sec.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`group relative border rounded-xl p-2.5 sm:p-3.5 flex flex-col justify-between text-right cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl h-[105px] sm:h-[135px] bg-[#131618] border-stone-800/80 bg-gradient-to-br ${sec.color}`}
                  >
                    {/* Visual Glow Layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/[0.01] pointer-events-none" />
                    
                    <div className="space-y-1 sm:space-y-1.5 relative z-10 select-none">
                      <div className="flex items-center justify-between">
                        {sec.badge ? (
                          <span className="bg-stone-900/95 border border-stone-800/80 text-[7px] sm:text-[9px] text-secondary font-sans font-bold px-1.5 py-0.5 rounded truncate max-w-[70px]">
                            {sec.badge}
                          </span>
                        ) : <span />}
                        <div className="p-1 sm:p-1.5 bg-stone-900/80 rounded-lg border border-stone-800 group-hover:border-secondary/40 text-secondary transition-colors shrink-0">
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <h3 className="text-[10px] sm:text-xs md:text-sm font-display font-black text-white group-hover:text-secondary transition-colors leading-tight line-clamp-1">
                        {sec.title}
                      </h3>

                      <p className="text-stone-400 font-sans text-[9px] sm:text-[10px] md:text-[11px] leading-snug line-clamp-2">
                        {sec.description}
                      </p>
                    </div>

                    <div className="mt-1 pt-1 border-t border-white/[0.02] flex items-center justify-end text-[8px] sm:text-[9.5px] font-sans font-bold text-stone-500 group-hover:text-secondary transition-colors gap-0.5 relative z-10 select-none">
                      <span>عرض تفاصيل القسم</span>
                      <ChevronLeft className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick stats ribbon instead of full heavy dashboard block - saves massive vertical space to prevent scroll */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-5xl mx-auto py-2 px-3 sm:py-3 sm:px-5 bg-gradient-to-r from-stone-950 via-[#131618] to-stone-950 border border-stone-800/80 rounded-xl text-center shadow-lg animate-fadeIn"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2">
                <span className="text-secondary font-display font-extrabold text-[10px] sm:text-xs md:text-sm">24 ساعة</span>
                <span className="text-stone-400 text-[8px] sm:text-[10px] font-sans">عمل متواصل</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 border-r border-stone-800/60">
                <span className="text-secondary font-display font-extrabold text-[10px] sm:text-xs md:text-sm">3 صالات</span>
                <span className="text-stone-400 text-[8px] sm:text-[10px] font-sans">مكيفة بالكامل</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 border-r border-stone-800/60">
                <span className="text-secondary font-display font-extrabold text-[10px] sm:text-xs md:text-sm">أجهزة CYBEX</span>
                <span className="text-stone-400 text-[8px] sm:text-[10px] font-sans">أمريكية بالكامل</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 border-r border-stone-800/60">
                <span className="text-secondary font-display font-extrabold text-[10px] sm:text-xs md:text-sm">+10 مدربين</span>
                <span className="text-stone-400 text-[8px] sm:text-[10px] font-sans">معتمدين دولياً</span>
              </div>
            </motion.div>
          </>
        ) : (
          // ACTIVE SECTION VIEW ("NEWPAGE" full screen content view)
          <div className="space-y-6 w-full animate-fadeIn">
            {/* Header / Breadcrumb navigation for the "newpage" */}
            <div className="bg-[#131618]/90 border border-stone-800/80 rounded-2xl py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-secondary/10 rounded-xl border border-secondary/30 text-secondary">
                  {(() => {
                    const matchedSec = sections.find(s => s.id === activeSection);
                    const Icon = matchedSec ? matchedSec.icon : Sparkles;
                    return <Icon className="w-5 h-5" />;
                  })()}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveSection("dashboard");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-xs text-stone-400 hover:text-white transition-colors font-sans cursor-pointer"
                    >
                      الرئيسية
                    </button>
                    <span className="text-stone-600 text-xs font-sans">/</span>
                    <span className="text-xs text-secondary font-sans font-semibold">
                      {sections.find(s => s.id === activeSection)?.title}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white mt-0.5">
                    {sections.find(s => s.id === activeSection)?.title}
                  </h3>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setActiveSection("dashboard");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer"
              >
                <span>العودة للأقسام الرئيسية</span>
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* The Actual Section Content (Now occupying the entire screen) */}
            <div className="bg-[#101415]/40 border border-stone-800/40 rounded-2xl p-1 sm:p-2 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderActiveSectionContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom beautiful return button for intuitive navigation */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  setActiveSection("dashboard");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-secondary text-black hover:bg-secondary/90 px-6 py-3 rounded-xl text-xs font-display font-black shadow-lg shadow-secondary/15 transition-all cursor-pointer"
              >
                <span>العودة لجميع الأقسام والخدمات الرئيسية</span>
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* Quick Help Contacts Footer */}
        {activeSection !== "dashboard" && (
          <div className="bg-[#131618]/90 border border-stone-800/80 rounded-2xl p-5 sm:p-6 w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-inner mt-4 animate-fadeIn">
            <div className="text-right">
              <h4 className="text-sm font-display font-bold text-white">هل تحتاج إلى مساعدة سريعة؟</h4>
              <p className="text-xs text-stone-400 font-sans mt-1">فريق الدعم والريسبشن في خدمتك للإجابة على جميع الاستفسارات والاشتراكات.</p>
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
          </div>
        )}

        {/* Static Footer Brand Signature */}
        {activeSection !== "dashboard" && (
          <footer className="mt-12 py-6 border-t border-stone-900 text-center text-[10px] text-stone-600 font-sans">
            <span>VIP GYM HEALTH CLUB • جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
          </footer>
        )}

      </main>

      {/* Floating Call to Actions for fast conversion */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="p-3.5 bg-stone-900 border border-secondary/30 text-secondary rounded-full hover:bg-secondary hover:text-black hover:scale-105 transition-all shadow-xl cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/201009244078"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-green-600 text-white rounded-full hover:bg-green-500 hover:scale-105 transition-all shadow-xl flex items-center justify-center cursor-pointer"
          aria-label="Contact manager on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
