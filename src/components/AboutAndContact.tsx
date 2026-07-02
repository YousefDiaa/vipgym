import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  ExternalLink, 
  Copy, 
  Check, 
  Target, 
  Compass, 
  Volume2, 
  VolumeX, 
  Radar, 
  Navigation
} from "lucide-react";

interface Objective {
  id: string;
  name: string;
  nameEn: string;
  distance: string;
  coordinates: string;
  lat: number;
  lng: number;
  query?: string;
  clue: string;
  clueEn: string;
  status: "SECURED" | "TARGET" | "POINT";
  color: string;
}

export default function AboutAndContact() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>("gym_main");

  // Web Audio Synth for game sound effects
  const playBeep = (freq = 800, type: OscillatorType = "sine", duration = 0.1) => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Browser autoplay policy block
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(text);
    playBeep(900, "square", 0.15);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  // Gamified objectives / landmarks around the VIP Gym with exact geographic coordinates
  const objectives: Objective[] = [
    {
      id: "gym_main",
      name: "المقر الرئيسي (VIP GYM)",
      nameEn: "VIP GYM Core Headquarter",
      distance: "0m (الهدف الرئيسي)",
      coordinates: "28.10657° N, 30.75338° E",
      lat: 28.106571,
      lng: 30.753383,
      query: "VIP gym, النادى الرياضى, Kornish Al Nile, Minya",
      clue: "يقع الجيم في الطابق العلوي مباشرة داخل نادي المنيا الرياضي، بإطلالة بانورامية كاملة على كورنيش النيل.",
      clueEn: "Located on the premium upper level inside Minia Sports Club, with direct panoramic views of the Nile.",
      status: "SECURED",
      color: "border-secondary text-secondary bg-secondary/10"
    },
    {
      id: "orchid_rest",
      name: "مطعم أوركيد",
      nameEn: "Orchid Restaurant (Adjacent)",
      distance: "15m غربًا",
      coordinates: "28.10698° N, 30.75370° E",
      lat: 28.106981,
      lng: 30.753702,
      query: "مطعم أوركيد, كورنيش النيل, المنيا",
      clue: "الجيم يقع في المبنى الملاصق لمطعم أوركيد الشهير بكورنيش النيل. إذا كنت عند أوركيد فأنت بجوارنا تماماً.",
      clueEn: "Directly adjacent building to Orchid Restaurant on the Corniche. Spot orchid and look up!",
      status: "TARGET",
      color: "border-amber-400 text-amber-400 bg-amber-400/10"
    },
    {
      id: "corniche_gate",
      name: "بوابة الكورنيش (المدخل الأسرع)",
      nameEn: "Corniche Club Gate",
      distance: "30m جنوبًا",
      coordinates: "28.10620° N, 30.75338° E",
      lat: 28.106200,
      lng: 30.753380,
      query: "28.106200,30.753380",
      clue: "استخدم بوابة نادي المنيا الرياضي المطلة على كورنيش النيل مباشرة، حيث توصلك درجتان فقط إلى صالة VIP GYM.",
      clueEn: "Use the Nile Corniche Gate of Minia Sports Club, which connects directly to the VIP entrance area.",
      status: "POINT",
      color: "border-cyan-400 text-cyan-400 bg-cyan-400/10"
    },
    {
      id: "kfc_minia",
      name: "كنتاكي KFC",
      nameEn: "Kentucky Fried Chicken",
      distance: "120m شمالاً",
      coordinates: "28.10775° N, 30.75390° E",
      lat: 28.107753,
      lng: 30.753896,
      query: "KFC, كورنيش النيل, المنيا",
      clue: "إذا كنت تقف أمام كنتاكي على الكورنيش، تحرك مسافة قصيرة باتجاه الجنوب لتصل فوراً إلى بوابة النادي والجيم.",
      clueEn: "Just a short walk south of KFC. Follow the riverwalk directly to the club entrance.",
      status: "POINT",
      color: "border-red-400 text-red-400 bg-red-400/10"
    }
  ];

  const handleObjectiveSelect = (id: string) => {
    setSelectedObjectiveId(id);
    playBeep(650, "sine", 0.08);
  };

  const startScanSequence = () => {
    setIsScanning(true);
    playBeep(440, "triangle", 0.3);
    
    let ticks = 0;
    const interval = setInterval(() => {
      ticks++;
      playBeep(550 + ticks * 80, "sine", 0.05);
      if (ticks >= 5) {
        clearInterval(interval);
      }
    }, 250);

    setTimeout(() => {
      setIsScanning(false);
      playBeep(980, "sine", 0.25);
    }, 1500);
  };

  const selectedObjective = objectives.find((obj) => obj.id === selectedObjectiveId) || objectives[0];

  return (
    <section id="about" className="pt-4 pb-4 bg-[#0d0f10] relative overflow-hidden scroll-mt-16">
      {/* Tactical Sci-fi background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141719_1px,transparent_1px),linear-gradient(to_bottom,#141719_1px,transparent_1px)] bg-[size:32px_32px] opacity-45 pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#131618] border border-stone-800 px-3 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-secondary font-black font-mono">
              TACTICAL POSITIONING & MAP • VIP GYM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mb-2">
            الموقع الجغرافي وقنوات الاتصال الرسمية
          </h2>
          <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-md mx-auto">
            منظومة الخريطة التفاعلية لتحديد المعالم المجاورة والاتصال المباشر  الفرع.
          </p>
          <div className="h-[2px] w-12 bg-secondary mx-auto rounded-full mt-3" />
        </div>

        {/* Dynamic Responsive Grid: Gamified Target Lock on Left (Column 1), Contacts on Right (Column 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* First Column: Interactive Gamified Tactical Map & Landmarks Radar */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#131618] border-2 border-stone-850 hover:border-secondary/25 p-5 sm:p-6 rounded-2xl flex flex-col justify-between h-full space-y-4 shadow-[0_0_40px_rgba(219,225,36,0.02)] transition-all duration-500">
              
              {/* Tactical Header Panel */}
              <div className="bg-[#0d0f10] border border-stone-900 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3 text-right">
                
                {/* Title (Right side - Arabic) */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-display font-extrabold text-xs sm:text-sm">لوحة تحديد الهدف</span>
                </div>

                {/* Left side is kept empty to keep the header minimal and professional */}
                <div className="text-[10px] text-stone-500 font-mono">
                  MAP VIEW
                </div>

              </div>

              {/* Gamified Live Google Map Frame with interactive laser lines */}
              <div className="relative w-full h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-stone-800 bg-[#0d0f10] group">
                
                {/* Overlay Sci-fi target box corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-secondary/50 z-20 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-secondary/50 z-20 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-secondary/50 z-20 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-secondary/50 z-20 pointer-events-none" />

                {/* Radar Grid overlay during scan */}
                <AnimatePresence>
                  {isScanning && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.85 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#05080a]/90 z-20 flex flex-col items-center justify-center pointer-events-none"
                    >
                      {/* Scanning sweeping laser bar */}
                      <motion.div 
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="absolute left-0 right-0 h-0.5 bg-secondary shadow-[0_0_15px_#dbe124] z-30"
                      />
                      
                      <Radar className="w-12 h-12 text-secondary animate-spin mb-2" style={{ animationDuration: '4s' }} />
                      <span className="text-secondary font-mono text-[10px] uppercase tracking-widest animate-pulse">
                        Scanning Area Waypoints...
                      </span>
                      <span className="text-white font-display font-black text-xs mt-1">
                        جاري فحص الإحداثيات وتثبيت الهدف
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Real-time precision map loaded from coordinates of selected objective */}
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedObjective.query || `${selectedObjective.lat},${selectedObjective.lng}`)}&z=17&t=m&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.5) invert(0.9) contrast(1.1) brightness(0.9)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="VIP GYM Tactical Location Map"
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* HUD Laser Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-12 h-12 border border-secondary/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border border-secondary/10 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    </div>
                  </div>
                  {/* Axis lines */}
                  <div className="absolute w-16 h-[1px] bg-secondary/15" />
                  <div className="absolute h-16 w-[1px] bg-secondary/15" />
                </div>
              </div>

              {/* Interactive Objectives Waypoints / Landmarks Selector */}
              <div className="space-y-3">
                <span className="block text-stone-400 text-[10px] sm:text-xs font-mono text-right font-bold tracking-wider">
                  اختر نقطة المعلم لتوضيح خط السير / SELECT WAYPOINT:
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {objectives.map((obj) => (
                    <button
                      key={obj.id}
                      onClick={() => handleObjectiveSelect(obj.id)}
                      className={`p-2.5 rounded-xl border text-right transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                        selectedObjectiveId === obj.id
                          ? "border-secondary bg-secondary/10 text-white shadow-[0_0_15px_rgba(219,225,36,0.06)]"
                          : "border-stone-900 bg-[#0d0f10] text-stone-400 hover:border-stone-800 hover:bg-[#111416]"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${selectedObjectiveId === obj.id ? "bg-secondary animate-ping" : "bg-stone-600"}`} />
                          <span className="text-xs font-display font-black text-right">{obj.name}</span>
                        </div>
                        <span className="text-[9px] font-mono opacity-80">{obj.distance}</span>
                      </div>
                      <span className="text-[9px] font-mono block text-left opacity-60 w-full break-words" dir="ltr">{obj.nameEn}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Waypoint Clue HUD Card Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedObjective.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0d0f10] border border-stone-900 rounded-xl p-3.5 space-y-2 text-right relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-full bg-secondary" />
                  
                  {/* Dynamic Arabic/English Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    {/* Right/Title: Arabic */}
                    <div className="flex items-center gap-1.5 text-secondary">
                      <span className="text-[11px] font-display font-black">تفاصيل الطريق والوصول:</span>
                      <Compass className="w-3.5 h-3.5 animate-spin text-secondary shrink-0" style={{ animationDuration: '8s' }} />
                    </div>
                    {/* Left/Coordinates: English */}
                    <span className="text-[9px] font-mono text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                      {selectedObjective.coordinates}
                    </span>
                  </div>

                  {/* Main Arabic Description (Right) */}
                  <p className="text-white text-xs sm:text-sm font-sans font-bold leading-relaxed text-right mt-1">
                    {selectedObjective.clue}
                  </p>
                  
                  {/* English Translation Clue (Left) */}
                  <p className="text-stone-500 text-[10px] font-mono text-left font-semibold mt-1">
                    [INFO] {selectedObjective.clueEn}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Trigger Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1">
                {/* Google Maps (Primary Arabic Action) */}
                <a
                  href="https://maps.app.goo.gl/ajBBevKaQVSVVKWz6?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-8 bg-secondary hover:bg-[#c2c820] text-black font-black text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(219,225,36,0.15)] group"
                >
                  <span className="font-sans font-bold">بدء الملاحة المباشرة في خرائط Google </span>
                  <Navigation className="w-4 h-4 text-black group-hover:translate-x-[-2px] transition-transform" />
                </a>

                {/* Trigger Sweep / Scan (Secondary English Action) */}
                <button
                  onClick={startScanSequence}
                  disabled={isScanning}
                  className="sm:col-span-4 bg-stone-900 hover:bg-stone-850 text-secondary border border-secondary/20 hover:border-secondary/40 text-xs font-mono font-black py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                >
                  <Radar className={`w-4 h-4 ${isScanning ? "animate-spin" : ""}`} />
                  <span>{isScanning ? "SCANNING..." : "SCAN COORDINATES"}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Second Column: Clean & Professional Contact Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#131618] border border-stone-850 p-6 sm:p-7 rounded-2xl flex flex-col justify-between h-full space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800/80">
                {/* Right side: Arabic Title */}
                <div className="text-right">
                  <h3 className="text-base sm:text-lg text-white font-black font-display">قنوات الاتصال المباشرة</h3>
                </div>
                {/* Left side: English badge with Icon */}
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-stone-900 border border-stone-800 rounded-xl text-secondary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono tracking-wider font-bold">COMMS INTERFACE</span>
                </div>
              </div>

              {/* Contact List */}
              <div className="space-y-4">
                
                {/* Official Mobile Phones */}
                <div className="space-y-2.5">
                  <span className="block text-stone-400 text-xs font-display font-bold text-right">رقم الهاتف الخلوي المعتمد:</span>
                  
                  {[
                    { number: "01007555737", label: "الهاتف الرئيسي لصالة VIP GYM" }
                  ].map((phone) => {
                    const isCopied = copiedPhone === phone.number;
                    return (
                      <div
                        key={phone.number}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#0d0f10] border border-stone-900 hover:border-secondary/25 p-3.5 rounded-xl transition-all duration-300 gap-3"
                      >
                        {/* Right Side: Arabic label (Arabic in right) */}
                        <div className="text-right">
                          <span className="text-white font-display font-bold text-xs sm:text-sm block">الهاتف الرئيسي </span>
                          <span className="block text-[10px] text-stone-500 font-sans mt-0.5">{phone.label}</span>
                        </div>

                        {/* Left Side: English value + Copy Button (English in left) */}
                        <div className="flex items-center gap-2.5 justify-start">
                          <button
                            onClick={() => copyToClipboard(phone.number)}
                            className={`p-1.5 rounded-lg border text-xs font-sans transition-all flex items-center gap-1 shrink-0 ${
                              isCopied
                                ? "bg-green-500/10 border-green-500/40 text-green-400"
                                : "bg-stone-900 border-stone-850 hover:border-stone-700 text-stone-400 hover:text-white"
                            }`}
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3 h-3 text-green-400" />
                                <span className="text-[10px] font-bold">تم النسخ</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span className="text-[10px]">نسخ</span>
                              </>
                            )}
                          </button>
                          
                          <a
                            href={`tel:${phone.number}`}
                            className="text-secondary hover:text-white font-mono font-black text-sm sm:text-base transition-colors"
                          >
                            {phone.number}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Landline Number */}
                <div className="pt-2 border-t border-stone-800/50">
                  <span className="block text-stone-400 text-xs font-display font-bold text-right mb-2">الخط الأرضي المباشر:</span>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#0d0f10] border border-stone-900 p-3.5 rounded-xl gap-3">
                    
                    {/* Right Side: Arabic labels */}
                    <div className="text-right">
                      <span className="text-white font-display font-bold text-xs sm:text-sm block">تواصل أرضي للفرع</span>
                      <span className="block text-[10px] text-stone-500 font-sans mt-0.5">الخط الأرضي المباشر لاستقبال استفسارات الأعضاء</span>
                    </div>

                    {/* Left Side: English number + Copy Button */}
                    <div className="flex items-center gap-2.5 justify-start">
                      <button
                        onClick={() => copyToClipboard("0862323013")}
                        className={`p-1.5 rounded-lg border text-xs font-sans transition-all flex items-center gap-1 shrink-0 ${
                          copiedPhone === "0862323013"
                            ? "bg-green-500/10 border-green-500/40 text-green-400"
                            : "bg-stone-900 border-stone-850 hover:border-stone-700 text-stone-400 hover:text-white"
                        }`}
                      >
                        {copiedPhone === "0862323013" ? (
                          <>
                            <Check className="w-3 h-3 text-green-400" />
                            <span className="text-[10px] font-bold">تم النسخ</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">نسخ</span>
                          </>
                        )}
                      </button>
                      
                      <a href="tel:0862323013" className="text-stone-200 hover:text-secondary font-mono font-black text-sm sm:text-base transition-colors">
                        0862323013
                      </a>
                    </div>

                  </div>
                </div>

                {/* Direct complaints WhatsApp */}
                <div className="pt-2 border-t border-stone-800/50">
                  <span className="block text-stone-400 text-xs font-display font-bold text-right mb-2">رقم الشكاوى والواتساب للإدارة:</span>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#0d0f10] border border-stone-900 p-3.5 rounded-xl gap-3">
                    
                    {/* Right Side: Arabic labels */}
                    <div className="text-right">
                      <span className="text-white font-display font-bold text-xs sm:text-sm block">تواصل فوري واتساب</span>
                      <span className="block text-[10px] text-stone-500 font-sans mt-0.5">مخصص للشكاوى واقتراحات الأعضاء VIP</span>
                    </div>

                    {/* Left Side: English WhatsApp Value + Button */}
                    <div className="flex items-center gap-2.5 justify-start">
                      <a
                        href="https://wa.me/201009244078?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%83%D8%A7%D8%A8%D8%AA%D9%86%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D8%B3%D8%AA%D8%AD%D9%82%D8%A7%D9%82%D8%A7%D8%AA%20%D9%88%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%D8%A7%D8%AA%20VIP%20GYM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-500 text-white py-1.5 px-3 rounded-lg text-xs font-bold font-sans flex items-center gap-1.5 transition-all shadow-md shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>راسلنا الآن</span>
                      </a>
                      
                      <span className="text-green-400 font-mono font-black text-sm sm:text-base">01009244078</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
