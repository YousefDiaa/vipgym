import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import SubscriptionCards from "./components/SubscriptionCards";
import ActivitiesGrid from "./components/ActivitiesGrid";
import FreeServicesList from "./components/FreeServicesList";
import RulesSection from "./components/RulesSection";
import FooterAndContact from "./components/FooterAndContact";
import { motion } from "motion/react";
import { ArrowUp, Star, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-stone-200 selection:bg-gold-500 selection:text-black">
      {/* Premium Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features / Why us section */}
      <FeaturesGrid />

      {/* Subscription Cards & Price Options */}
      <SubscriptionCards />

      {/* Facilities, Components & Hall elements */}
      <ActivitiesGrid />

      {/* Completely free privileges */}
      <FreeServicesList />

      {/* Client Rights, Behaviors, Guidelines */}
      <RulesSection />

      {/* Contact info, landmark map & footer */}
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
            className="p-3.5 bg-stone-900 border border-gold-500/30 text-gold-400 rounded-full hover:bg-gold-500 hover:text-black hover:scale-105 transition-all shadow-xl cursor-pointer"
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
