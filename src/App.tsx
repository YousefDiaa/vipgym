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
import CityscapePage from "./components/CityscapePage";
import ActivitiesGrid from "./components/ActivitiesGrid";
import MinyaDashboard from "./components/MinyaDashboard";
import MinyaSectionHeader from "./components/MinyaSectionHeader";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Star, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"minya_club" | "cityscape_mall" | null>(null);
  const [showLocationSelector, setShowLocationSelector] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
          setActiveSection(null); // Reset on select
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
          setActiveSection(null);
        }}
        onChangeBranch={() => {
          setShowLocationSelector(true);
        }}
      />
    );
  }

  // 3. If minya_club is selected but no active section has been chosen, show MinyaDashboard directory list
  if (selectedLocation === "minya_club" && !activeSection) {
    return (
      <MinyaDashboard 
        onSelectSection={(sectionId) => {
          setActiveSection(sectionId);
          window.scrollTo({ top: 0 });
        }}
        onChangeBranch={() => {
          setShowLocationSelector(true);
        }}
      />
    );
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "contact":
        return (
          <>
            <AboutAndContact />
            <FooterAndContact />
          </>
        );
      case "schedule_pricing":
        return (
          <>
            <ScheduleSection />
            <SubscriptionCards />
            <RulesSection />
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
        return (
          <ActivitiesGrid />
        );
      case "trainers":
        return (
          <TrainersSection />
        );
      case "military":
        return (
          <MilitaryPrep />
        );
      case "buffet":
        return (
          <BuffetSection />
        );
      case "events":
        return (
          <EventsSection />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-surface-base text-stone-200 selection:bg-secondary selection:text-black">
      {/* Premium Header for Active Section */}
      <MinyaSectionHeader 
        activeSection={activeSection!}
        onSelectSection={(sectionId) => {
          setActiveSection(sectionId);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onBackToDashboard={() => {
          setActiveSection(null);
          window.scrollTo({ top: 0 });
        }}
        onChangeBranch={() => {
          setShowLocationSelector(true);
        }}
      />

      {/* Main Content wrapper with top padding to account for fixed header */}
      <div className="pt-20">
        {renderActiveSection()}
      </div>

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
    </div>
  );
}
