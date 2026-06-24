import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Dumbbell, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
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
    { name: "الباقات والاشتراكات", href: "#pricing" },
    { name: "مكونات الصالة", href: "#facilities" },
    { name: "الأنشطة الرياضية", href: "#activities" },
    { name: "الخدمات المجانية", href: "#freebies" },
    { name: "الحقوق والالتزامات", href: "#rules" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-secondary to-[#D9F99D] p-2 rounded flex items-center justify-center neon-glow">
              <Dumbbell className="w-5 h-5 text-black transform -rotate-45" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                VIP <span className="text-secondary">GYM</span> <span className="text-xs text-primary font-normal tracking-widest uppercase">ELITE</span>
              </span>
              <span className="text-[10px] text-stone-400 block -mt-1 font-medium font-sans">
                نادي المنيا الرياضي
              </span>
            </div>
          </div>

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
