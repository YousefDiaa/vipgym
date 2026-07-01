import React, { useState } from "react";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Sparkles, 
  Users, 
  UserCheck, 
  ShieldAlert, 
  Coffee, 
  Calendar,
  Compass,
  Menu,
  X,
  Phone,
  MessageSquare
} from "lucide-react";
import Logo from "./Logo";

interface MinyaSectionHeaderProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onBackToDashboard: () => void;
  onChangeBranch: () => void;
}

export default function MinyaSectionHeader({ 
  activeSection, 
  onSelectSection, 
  onBackToDashboard, 
  onChangeBranch 
}: MinyaSectionHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navSections = [
    { id: "contact", name: "العنوان و التواصل", icon: MapPin },
    { id: "schedule_pricing", name: "المواعيد و الاسعار", icon: Clock },
    { id: "services_reasons", name: "الخدمات و الأسباب", icon: Sparkles },
    { id: "activities", name: 'الأنشطة " الرجال و السيدات و الاطفال "', icon: Users },
    { id: "trainers", name: "المدربين", icon: UserCheck },
    { id: "military", name: "التاهيل العسكري", icon: ShieldAlert },
    { id: "buffet", name: "البوفيه", icon: Coffee },
    { id: "events", name: "الحفلات و events", icon: Calendar }
  ];

  const activeSectionObj = navSections.find(s => s.id === activeSection);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101415]/95 backdrop-blur-md border-b border-secondary/20 py-3 shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Back Button to Dashboard Portal */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-secondary hover:border-secondary/40 text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 ml-1 text-secondary" />
              <span>القائمة الرئيسية</span>
            </button>

            <div className="hidden md:flex items-center gap-2 bg-stone-950/80 px-3 py-1.5 rounded-lg border border-stone-800 text-stone-400 text-xs font-sans">
              <span>أنت تتصفح حالياً:</span>
              <span className="text-secondary font-bold font-sans flex items-center gap-1">
                {activeSectionObj && <activeSectionObj.icon className="w-3.5 h-3.5 text-secondary" />}
                {activeSectionObj?.name}
              </span>
            </div>
          </div>

          {/* Desktop Inline Sections Selector */}
          <nav className="hidden lg:flex items-center gap-4">
            {navSections.map((sec) => {
              const IconComponent = sec.icon;
              const isActive = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection(sec.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? "bg-secondary text-black font-extrabold shadow-[0_0_10px_rgba(219,225,36,0.25)]" 
                      : "text-stone-300 hover:text-secondary hover:bg-stone-900/60"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span>{sec.id === "activities" ? "الأنشطة" : sec.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Side Actions (Change Branch, Whatsapp, Calls) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onChangeBranch}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-secondary hover:border-secondary/35 text-xs font-bold transition-all cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-secondary animate-spin" style={{ animationDuration: "12s" }} />
              <span>تغيير الفرع</span>
            </button>
            <a
              href="https://wa.me/201009244078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600/15 hover:bg-green-600/25 border border-green-500/30 text-green-400 p-2 rounded-lg text-xs font-semibold transition-all font-sans"
              title="تواصل واتساب"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="tel:01007555737"
              className="flex items-center gap-1.5 bg-secondary hover:bg-secondary/95 text-black px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all font-sans shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>اتصل بنا</span>
            </a>
          </div>

          {/* Mobile Navigation Drawer Trigger */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-300 hover:text-white rounded bg-stone-900 border border-stone-800"
              aria-label="Toggle Navigation Section"
            >
              {isOpen ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6 text-stone-300" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation list */}
      {isOpen && (
        <div className="lg:hidden bg-[#101415] border-t border-stone-800 mt-2.5 shadow-xl">
          <div className="px-4 py-3 space-y-1.5 max-h-[80vh] overflow-y-auto">
            <div className="text-right text-[10px] text-stone-500 pb-2 border-b border-white/[0.03]">تنقل سريع بين أقسام الجيم:</div>
            {navSections.map((sec) => {
              const IconComponent = sec.icon;
              const isActive = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    onSelectSection(sec.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-sans font-medium transition-all cursor-pointer ${
                    isActive 
                      ? "bg-secondary text-black font-extrabold" 
                      : "text-stone-300 hover:text-secondary hover:bg-stone-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <IconComponent className="w-4 h-4" />
                    <span>{sec.name}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/[0.04] space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onChangeBranch();
                }}
                className="flex items-center justify-center gap-2 w-full bg-stone-900 border border-stone-800 text-stone-200 py-2 rounded-lg text-xs font-bold cursor-pointer"
              >
                <Compass className="w-4 h-4 text-secondary" />
                <span>تبديل فرع الجيم</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/201009244078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-green-600/25 border border-green-500/30 text-green-400 py-2 rounded-lg text-xs font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب</span>
                </a>
                <a
                  href="tel:01007555737"
                  className="flex items-center justify-center gap-1.5 bg-secondary text-black py-2 rounded-lg text-xs font-bold"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
