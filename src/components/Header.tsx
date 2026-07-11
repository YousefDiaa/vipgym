import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Dumbbell, Clock, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  onChangeBranch?: () => void;
}

export default function Header({ onChangeBranch }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "من نحن", href: "#about" },
    { name: "المواعيد", href: "#schedules" },
    { name: "القاعات", href: "#halls" },
    { name: "المدربين", href: "#trainers" },
    { name: "الأجهزة", href: "#equipment" },
    { name: "خدمات متنوعة", href: "#services" },
    { name: "التأهيل العسكري", href: "#military-prep" },
    { name: "البوفيه", href: "#buffet" },
    { name: "الإيفنتات", href: "#events" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const header = document.getElementById("main-header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 24; // 24px of breathing room
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101415]/95 backdrop-blur-md border-b border-secondary/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <Logo showText={false} size="custom" iconSizeClassName="w-14 h-10" />
            <div className="text-right">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white block group-hover:text-secondary transition-colors leading-none">
                VIP <span className="text-secondary">GYM</span> <span className="text-[10px] sm:text-xs text-secondary/90 font-bold tracking-widest uppercase block sm:inline sm:mr-1 font-mono">HEALTH CLUB</span>
              </span>
              <span className="text-[10px] text-stone-400 block mt-0.5 font-medium font-sans">
                نادي المنيا الرياضي
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-stone-300 hover:text-secondary font-sans font-medium text-sm transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onChangeBranch && (
              <button
                onClick={onChangeBranch}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-secondary hover:border-secondary/40 text-xs font-bold transition-all cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-secondary animate-spin" style={{ animationDuration: "10s" }} />
                <span>تغيير الفرع</span>
              </button>
            )}
            <a
              href="https://wa.me/201009244078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600/10 hover:bg-green-600/20 border border-green-500/30 text-green-400 px-3.5 py-1.5 rounded text-sm font-semibold transition-all font-sans"
            >
              <MessageSquare className="w-4 h-4" />
              تواصل واتساب
            </a>
            <a
              href="tel:01007555737"
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-black px-4 py-2 rounded text-sm font-bold transition-all font-sans neon-glow-hover"
            >
              <Phone className="w-4 h-4" />
              اتصل بنا
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            {onChangeBranch && (
              <button
                onClick={onChangeBranch}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-[10px] font-bold transition-all cursor-pointer"
              >
                <Compass className="w-3 h-3 text-secondary animate-spin" style={{ animationDuration: "10s" }} />
                <span>تغيير الفرع</span>
              </button>
            )}
            <a
              href="tel:01007555737"
              className="p-2 bg-secondary rounded text-black sm:hidden"
              aria-label="Call Gym"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-300 hover:text-white rounded focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#101415] border-t border-stone-800"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 rounded text-stone-300 hover:text-secondary hover:bg-stone-900 font-sans font-medium text-base transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                {onChangeBranch && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onChangeBranch();
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-stone-900 border border-stone-800 text-stone-200 py-2.5 rounded text-base font-bold cursor-pointer"
                  >
                    <Compass className="w-5 h-5 text-secondary" />
                    <span>تغيير الفرع (فرع سيتي سكيب)</span>
                  </button>
                )}
                <a
                  href="https://wa.me/201009244078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600/20 border border-green-500/30 text-green-400 py-2.5 rounded text-base font-semibold"
                >
                  <MessageSquare className="w-5 h-5" />
                  تواصل واتساب مباشر
                </a>
                <a
                  href="tel:01007555737"
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-black py-2.5 rounded text-base font-bold"
                >
                  <Phone className="w-5 h-5" />
                  اتصال تليفوني
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
