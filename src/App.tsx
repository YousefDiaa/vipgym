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
import RulesSection from "./components/RulesSection";
import FooterAndContact from "./components/FooterAndContact";
import LocationSelector from "./components/LocationSelector";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Star, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLocationSelector, setShowLocationSelector] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock or unlock body scrolling depending on LocationSelector visibility
  useEffect(() => {
    if (showLocationSelector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLocationSelector]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-surface-base text-stone-200 selection:bg-secondary selection:text-black">
      {/* Premium Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* 1. من نحن + العنوان + الـ View + الصور + بيانات التواصل */}
      <AboutAndContact />

      {/* 2. المواعيد */}
      <ScheduleSection />

      {/* 3. القاعات: القاعة الداخلية، القاعة الخارجية */}
      <HallsSection />

      {/* 4. المدربين: مدربين رجال، مدربين سيدات */}
      <TrainersSection />

      {/* 5. الأجهزة: أجهزة القاعة الداخلية، أجهزة القاعة الخارجية */}
      <EquipmentSection />

      {/* 6. خدمات متنوعة */}
      <DiverseServices />

      {/* 7. التأهيل العسكري */}
      <MilitaryPrep />

      {/* 8. البوفيه - مأكولات ومشروبات */}
      <BuffetSection />

      {/* 9. الحفلات والإيفنتات */}
      <EventsSection />

      {/* Extra: Subscription Tiers & Plans for quick actions */}
      <SubscriptionCards />

      {/* Extra: Guidelines, rights and behavioral rules */}
      <RulesSection />

      {/* Closing Map and Footer Copyright Signature */}
      <FooterAndContact />

      {/* Floating Call to Actions for fast conversion */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="p-3.5 bg-surface-container border border-secondary/30 text-secondary rounded-full hover:bg-secondary hover:text-black hover:scale-105 transition-all shadow-xl cursor-pointer"
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

      {/* Location Selector Gateway Overlay */}
      <AnimatePresence>
        {showLocationSelector && (
          <LocationSelector onSelect={() => setShowLocationSelector(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
