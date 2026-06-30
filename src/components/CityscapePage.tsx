import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Volume2, VolumeX, Play, RotateCcw, ArrowRight, ArrowLeft,
  Phone, MessageSquare, MapPin, Sparkles, Building, Waves,
  Bell, CheckCircle2, ChevronRight, Share2, Compass, AlertCircle,
  Loader2
} from "lucide-react";
import Logo from "./Logo";

interface CityscapePageProps {
  onBackToMain: () => void;
  onChangeBranch: () => void;
}

interface TimelineLabel {
  start: number;
  end: number;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

// Interactive Video Timeline Labels
const TIMELINE_LABELS: TimelineLabel[] = [
  {
    start: 0,
    end: 2.5,
    titleAr: "ترقبوا الصرح الجديد!",
    titleEn: "STAY TUNED!",
    descAr: "التحضير لإنشاء الفرع الثاني لـ VIP GYM في أرقى مواقع المنيا الجديدة.",
    descEn: "Preparing to establish the second VIP GYM branch in the finest locations of New Minya."
  },
  {
    start: 2.5,
    end: 6.5,
    titleAr: "هل أنتم مستعدون للتجربة؟",
    titleEn: "ARE YOU READY?",
    descAr: "VIP GYM يرتقي بلياقتك البدنية إلى مستوى غير مسبوق من الفخامة.",
    descEn: "VIP GYM raises your fitness experience to an unprecedented level of luxury."
  },
  {
    start: 6.5,
    end: 12.5,
    titleAr: "المساحة الشاسعة والتخطيط",
    titleEn: "SPACIOUS LAYOUT",
    descAr: "اختيار مساحة عملاقة في سيتي سكيب مول لتستوعب كافة الأقسام والتجهيزات الدولية.",
    descEn: "Selecting a giant space in Cityscape Mall to accommodate all departments & international gear."
  },
  {
    start: 12.5,
    end: 19.5,
    titleAr: "خطوة بخطوة نحو الكمال",
    titleEn: "STEP BY STEP",
    descAr: "تخطيط هندسي دقيق من قبل خبراء الديكور الرياضي لراحة وأمان اللاعبين.",
    descEn: "Precise engineering planning by sports decor experts for athlete comfort and safety."
  },
  {
    start: 19.5,
    end: 44.5,
    titleAr: "بدء رحلة التشييد والبناء",
    titleEn: "OUR JOURNEY BEGINS",
    descAr: "أعمال صب الخرسانات والتشطيبات الأساسية، وبناء الجدران والهياكل المعدنية.",
    descEn: "Concrete pouring, core construction work, and building walls & steel structures."
  },
  {
    start: 44.5,
    end: 51.5,
    titleAr: "هندسة التفاصيل والتشطيبات",
    titleEn: "DETAILED ENGINEERING",
    descAr: "تركيب تمديدات التهوية العملاقة، شبكات الإضاءة المتطورة، والأسقف المعلقة الحديثة.",
    descEn: "Installing giant ventilation systems, advanced lighting grids, and modern ceilings."
  },
  {
    start: 51.5,
    end: 100.5,
    titleAr: "وصول وتجهيز الآلات والأنظمة",
    titleEn: "EQUIPPING THE FORTRESS",
    descAr: "تركيب أحدث الأجهزة الرياضية الأمريكية والأوروبية الحصرية مع الإضاءة الليزرية المذهلة.",
    descEn: "Assembling premium American & European fitness gear accompanied by neon lighting systems."
  },
  {
    start: 100.5,
    end: 107.5,
    titleAr: "النتيجة النهائية: تحفة معمارية",
    titleEn: "THE COMPLETED MASTERPIECE",
    descAr: "صرح رياضي فاخر يجمع بين الإضاءة المحيطية، الأجهزة الذكية، وتجربة تدريب استثنائية.",
    descEn: "A luxurious athletic monument blending ambient lighting, smart equipment, and training."
  },
  {
    start: 107.5,
    end: 114,
    titleAr: "المستوى التالي قادم قريباً جداً",
    titleEn: "THE NEXT LEVEL IS COMING",
    descAr: "سيتي سكيب مول - فرع التميز والمستقبل. انتظروا الافتتاح الرسمي قريباً!",
    descEn: "Cityscape Mall - The branch of future and prestige. Awaiting the official grand opening!"
  }
];

export default function CityscapePage({ onBackToMain, onChangeBranch }: CityscapePageProps) {
  const [isPlayingSoundCheck, setIsPlayingSoundCheck] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [currentLabel, setCurrentLabel] = useState<TimelineLabel | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [hasSoundBeenActivated, setHasSoundBeenActivated] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Synth cinematic sound on start
  const playCinematicSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Sound 1: Giant sub bass drop
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(90, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 3.0);

      gain1.gain.setValueAtTime(0.6, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 3.0);

      // Sound 2: Energetic electronic sweep (impact)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc2.type = "sawtooth";
      osc2.frequency.setValueAtTime(100, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 1.5);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(150, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2500, ctx.currentTime + 1.5);

      gain2.gain.setValueAtTime(0.01, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.8);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      osc2.connect(filter);
      filter.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();
      osc2.stop(ctx.currentTime + 1.8);

      setHasSoundBeenActivated(true);
    } catch (error) {
      console.warn("Web Audio API failed or blocked:", error);
    }
  };

  const handleStartExperience = () => {
    setIsPlayingSoundCheck(false);
    setVideoStarted(true);
    playCinematicSound();
    
    // Auto start video after brief delay for audio impact
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.log("Auto-play was blocked, playing muted:", err);
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(console.error);
          }
        });
      }
    }, 200);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      
      // Match active timeline label
      const activeLabel = TIMELINE_LABELS.find(lbl => time >= lbl.start && time < lbl.end);
      setCurrentLabel(activeLabel || null);
    }
  };

  const handleVideoEnded = () => {
    setVideoFinished(true);
  };

  const handleRestartVideo = () => {
    setVideoFinished(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const targetMuted = !videoRef.current.muted;
      videoRef.current.muted = targetMuted;
      setIsMuted(targetMuted);
    }
  };

  return (
    <div className={`w-full bg-[#07090a] text-stone-100 flex flex-col relative selection:bg-secondary selection:text-black ${
      videoFinished 
        ? "min-h-screen overflow-y-auto" 
        : "h-[100dvh] overflow-hidden fixed inset-0"
    }`}>
      
      {/* Cinematic Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,27,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,27,0.1)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090a] via-transparent to-[#07090a]/50 pointer-events-none z-10" />

      {/* Top Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5 py-4 px-4 sm:px-8 flex items-center justify-between">
        <button 
          onClick={onChangeBranch}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white text-xs font-bold transition-all cursor-pointer"
        >
          <Compass className="w-3.5 h-3.5 text-secondary animate-spin" style={{ animationDuration: "6s" }} />
          <span>تغيير الفرع</span>
        </button>

        <Logo size="sm" showText={false} className="opacity-90 hover:opacity-100 transition-opacity" />

        <button 
          onClick={onBackToMain}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary text-black font-extrabold text-xs hover:bg-[#c2c820] hover:scale-105 transition-all shadow-[0_0_15px_rgba(219,225,36,0.2)] cursor-pointer"
        >
          <span>الفرع الرئيسي</span>
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* MAIN CONTAINER */}
      <main className={`flex-grow flex flex-col items-center justify-center ${
        videoFinished ? "pt-24 pb-12 px-3 sm:px-6" : "pt-16 pb-4 px-3 relative overflow-hidden h-full"
      } z-20`}>
        
        {/* 1. SOUND ACTIVATION / PORTAL INTRU */}
        <AnimatePresence>
          {isPlayingSoundCheck && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 bg-[#090b0c] flex flex-col items-center justify-center text-center p-4 overflow-hidden"
            >
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
              
              <div className="max-w-md w-full space-y-4 sm:space-y-6 relative z-10 px-4 flex flex-col items-center justify-center h-full my-auto">
                <div className="relative flex items-center justify-center mb-2">
                  {/* Outer glowing pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-secondary/20 blur-md animate-pulse" />
                  {/* Main sleek geometric ring */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-stone-900 to-[#121617] border-2 border-secondary/40 flex items-center justify-center shadow-[0_0_20px_rgba(219,225,36,0.25)]">
                    <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-secondary" />
                  </div>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2">
                  <span className="text-secondary font-display text-[10px] sm:text-xs font-extrabold tracking-widest uppercase">
                    VIP GYM HEALTH CLUB • NEW BRANCH
                  </span>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight">
                    فرع سيتي سكيب مول
                  </h1>
                  <h2 className="text-xs sm:text-sm md:text-base font-display font-bold text-stone-400">
                    العرض الترويجي التفاعلي الحصري
                  </h2>
                </div>

                <p className="text-stone-400 text-[11px] sm:text-xs leading-relaxed max-w-sm mx-auto">
                  يرجى تفعيل الصوت وتأكيد التواجد لخوض تجربة سينمائية تفاعلية مذهلة تستعرض تفاصيل إنشاء الصرح الرياضي الجديد خطوة بخطوة.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleStartExperience}
                    className="group relative px-6 py-3.5 sm:px-8 sm:py-4 bg-secondary text-black font-black text-xs sm:text-sm rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(219,225,36,0.3)] active:scale-95 overflow-hidden flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span className="relative z-10">تشغيل العرض التفاعلي</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. VIDEO PLAYER SCREEN */}
        <AnimatePresence>
          {videoStarted && !videoFinished && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full flex-grow flex flex-col items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 relative h-full overflow-hidden"
            >
              {/* Subtle CRT Overlay Texture */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50 pointer-events-none z-10 rounded-2xl" />

              {/* Video Wrapper - Sized dynamically with viewport height to avoid ANY scroll */}
              <div className="relative aspect-[9/16] h-[60dvh] xs:h-[62dvh] sm:h-[65dvh] max-h-[500px] rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
                <video
                  ref={videoRef}
                  src="/city.mp4"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  onLoadStart={() => setIsVideoLoading(true)}
                  onWaiting={() => setIsVideoLoading(true)}
                  onPlaying={() => setIsVideoLoading(false)}
                  onCanPlay={() => setIsVideoLoading(false)}
                  onSeeking={() => setIsVideoLoading(true)}
                  onSeeked={() => setIsVideoLoading(false)}
                  className="w-full h-full object-cover"
                  playsInline
                />

                {/* Loading Spinner overlay */}
                <AnimatePresence>
                  {isVideoLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-40 bg-black/75 flex flex-col items-center justify-center gap-3 pointer-events-none"
                    >
                      <Loader2 className="w-8 h-8 text-secondary animate-spin" />
                      <span className="text-stone-300 text-[10px] tracking-wider font-medium font-sans">جاري تحميل الفيديو...</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Ambient Film Grain Background */}
                <div className="absolute inset-0 pointer-events-none bg-film-grain opacity-[0.02] z-20" />

                {/* Animated Bottom Caption HUD - Fitted for portrait inside the video container */}
                <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black via-black/85 to-transparent p-3 sm:p-4 text-right flex flex-col gap-1.5 transition-all">
                  
                  {/* Dynamic Timeline Label */}
                  <AnimatePresence mode="wait">
                    {currentLabel && (
                      <motion.div
                        key={currentLabel.titleAr}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1"
                      >
                        <div className="flex items-center justify-between gap-1 w-full" dir="ltr">
                          <span className="text-[8px] sm:text-[9px] text-secondary tracking-widest font-mono font-bold text-left">
                            {currentLabel.titleEn}
                          </span>
                          <h3 className="text-[11px] sm:text-xs font-display font-black text-white flex items-center gap-1 text-right" dir="rtl">
                            <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-secondary animate-ping" />
                            {currentLabel.titleAr}
                          </h3>
                        </div>
                        <p className="text-stone-300 text-[9px] sm:text-[10px] leading-snug max-w-full ml-auto font-sans text-right" dir="rtl">
                          {currentLabel.descAr}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dynamic Timeline progress bar */}
                  <div className="w-full h-1 bg-stone-850 rounded-full overflow-hidden mt-1 relative">
                    <div 
                      className="h-full bg-gradient-to-r from-secondary to-yellow-400 shadow-[0_0_6px_rgba(219,225,36,0.5)] transition-all duration-150"
                      style={{ 
                        width: `${videoRef.current ? (currentTime / videoRef.current.duration) * 100 : 0}%` 
                      }}
                    />
                  </div>

                  {/* HUD controls */}
                  <div className="flex items-center justify-between mt-1">
                    {/* Time Counter */}
                    <span className="text-[8px] sm:text-[9px] text-stone-500 font-mono">
                      {videoRef.current 
                        ? `${Math.floor(currentTime)}s / ${Math.floor(videoRef.current.duration)}s` 
                        : "0s / 114s"}
                    </span>

                    {/* Volume and Action Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={toggleMute}
                        className="p-1 sm:p-1.5 rounded-full bg-stone-900/95 border border-stone-800/80 text-stone-300 hover:text-secondary hover:bg-stone-800 transition-colors cursor-pointer"
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                      </button>

                      <button
                        onClick={handleRestartVideo}
                        className="p-1 sm:p-1.5 rounded-full bg-stone-900/95 border border-stone-800/80 text-stone-300 hover:text-secondary hover:bg-stone-800 transition-colors cursor-pointer"
                        title="Restart"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Under-video Status Badge & Info */}
              <div className="flex flex-col items-center gap-2 mt-3.5 w-full max-w-[340px] px-2">
                {/* Under Construction Premium Badge */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold font-sans shadow-[0_0_20px_rgba(245,158,11,0.15)] select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="tracking-wide">الفرع قيد الإنشاء والتجهيز حالياً</span>
                  <span className="text-[9px] text-amber-500/80 font-mono">• Under Construction</span>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-stone-500 text-[9px] sm:text-[10px] text-center font-sans">
                  <AlertCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                  <span>شاهد قصة ومراحل صب وتجهيز فرع سيتي سكيب مول الفاخر</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. LIVE RECREATED DYNAMIC ADVERTISING FLYER */}
        <AnimatePresence>
          {videoFinished && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
              className="w-full max-w-4xl py-4 sm:py-8 flex flex-col items-center gap-6 sm:gap-8 relative"
            >
              
              {/* Core Dynamic Flyer Card */}
              <div className="w-full bg-gradient-to-b from-[#111516] via-[#090c0d] to-[#040607] border-2 border-secondary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden relative text-center">
                
                {/* Visual Glows and Effects resembling the Sunset/Golden-hour aesthetic of the poster */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[250px] bg-gradient-to-b from-yellow-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyan-950/20 via-blue-950/10 to-transparent pointer-events-none" />

                {/* Floating particle sparkles */}
                <div className="absolute top-10 right-10 text-secondary/30 animate-pulse"><Sparkles className="w-5 h-5" /></div>
                <div className="absolute bottom-40 left-10 text-amber-400/20 animate-pulse" style={{ animationDelay: "1.2s" }}><Sparkles className="w-6 h-6" /></div>

                {/* FLYER CONTENT */}
                <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
                  
                  {/* Top Premium Badge */}
                  <div className="flex items-center justify-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-secondary/15 to-amber-500/15 border border-secondary/30 rounded-full text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(219,225,36,0.15)]">
                    <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                    <span className="font-sans">VIP HEALTH CLUB • PREMIUM CAMPAIGN</span>
                  </div>

                  {/* Giant 3D styled typography matching the poster: VIP معاك في كل مكان */}
                  <div className="space-y-1 relative">
                    <div className="text-stone-500 text-[10px] sm:text-xs tracking-[0.25em] font-mono font-bold uppercase">
                      EXCLUSIVE ANNOUNCEMENT
                    </div>
                    
                    {/* The majestic typography stack */}
                    <div className="flex flex-col items-center justify-center select-none">
                      <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight text-white leading-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] filter">
                        VIP GYM
                      </h1>
                      <div className="flex items-center justify-center gap-2 mt-1 sm:mt-2">
                        <span className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-secondary drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                          معاك
                        </span>
                        <span className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
                          في كل مكان
                          <span className="inline-block text-secondary animate-pulse drop-shadow-[0_0_10px_rgba(219,225,36,0.5)]">💛</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Realized Facade split columns mimicking the two beautiful buildings from the uploaded image */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-3xl mt-4 text-right">
                    
                    {/* Building 1: Classic Grand Palace Facade (نادي المنيا الرياضي) */}
                    <div className="relative bg-gradient-to-b from-[#1b1915] to-[#12110e] border border-amber-500/20 hover:border-amber-400/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-amber-500/5">
                      {/* Architectural motif glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
                      
                      <div>
                        {/* Title block like the stone engraving in the picture */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-amber-400/10 text-amber-400 border border-amber-400/20 text-[9px] font-bold px-2.5 py-0.5 rounded-md tracking-wider">
                            المقر الرئيسي الفاخر
                          </span>
                          <Building className="text-amber-400 w-5 h-5" />
                        </div>
                        
                        {/* Facade Text Sign styling */}
                        <div className="border-r-2 border-amber-400/40 pr-3.5 mb-3">
                          <h3 className="text-lg sm:text-xl font-display font-black text-amber-200 tracking-wide">
                            نادي المنيا الرياضي
                          </h3>
                          <span className="text-[10px] sm:text-[11px] text-amber-500/80 font-mono tracking-wider block mt-0.5">
                            MINYA SPORTS CLUB • GATE 1
                          </span>
                        </div>

                        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                          بوابة الكورنيش - بجوار كنتاكي المنيا. الصرح العريق المتكامل الذي يضم أحدث صالات التدريب العالمية وإطلالة ساحرة على النيل.
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between text-[11px] sm:text-xs">
                        <span className="text-stone-500 font-sans font-semibold">بوابة الكورنيش الرئيسية</span>
                        <a 
                          href="https://maps.app.goo.gl/ajBBevKaQVSVVKWz6?g_st=ac" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-amber-400 font-black flex items-center gap-1.5 hover:text-amber-300 hover:underline transition-all cursor-pointer"
                        >
                          <span>عرض الخريطة</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Building 2: Modern Futuristic Glass Facade (سيتي سكيب مول) */}
                    <div className="relative bg-gradient-to-b from-[#1b1411] to-[#120d0b] border border-orange-500/20 hover:border-orange-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-orange-500/5">
                      {/* Modern facade glow */}
                      <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/10 transition-colors" />
                      
                      <div>
                        {/* Title block like the neon lettering on the mall */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-bold px-2.5 py-0.5 rounded-md tracking-wider animate-pulse">
                            قريباً الافتتاح الأكبر
                          </span>
                          <Sparkles className="text-orange-400 w-5 h-5" />
                        </div>

                        {/* Facade Text Sign styling */}
                        <div className="border-r-2 border-orange-500/40 pr-3.5 mb-3">
                          <h3 className="text-lg sm:text-xl font-display font-black text-orange-200 tracking-wide">
                            سيتي سكيب مول
                          </h3>
                          <span className="text-[10px] sm:text-[11px] text-orange-500/80 font-mono tracking-wider block mt-0.5">
                            CITYSCAPE MALL • NEW BRANCH
                          </span>
                        </div>

                        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                          المنيا الجديدة - داخل سيتي سكيب مول. تجربة لياقة بدنية غير مسبوقة تواكب المعايير العالمية في التصميم والتجهيز الخرساني.
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between text-[11px] sm:text-xs">
                        <span className="text-stone-500 font-sans font-semibold">المنيا الجديدة - الطابق الثاني</span>
                        <a 
                          href="https://maps.app.goo.gl/xggdZo8xnjUzZ5vr9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-orange-400 font-black flex items-center gap-1.5 hover:text-orange-300 hover:underline transition-all cursor-pointer"
                        >
                          <span>عرض الخريطة</span>
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>

                  {/* Bottom details matching the flyer footer: Address and Phone numbers */}
                  <div className="w-full max-w-2xl bg-stone-950/90 border border-stone-800/80 rounded-2xl p-5 sm:p-6 space-y-5 shadow-inner">
                    
                    {/* Stylish Phone numbers displaying exactly like the image footer */}
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-[10px] sm:text-xs text-stone-400 tracking-wider font-mono font-extrabold uppercase">
                        VIP CONTACT DIRECTORY
                      </span>
                      
                      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-mono font-black text-white select-all">
                        <a href="tel:01007555737" className="hover:text-secondary transition-colors flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800">
                          <Phone className="w-4 h-4 text-secondary" />
                          <span>01007555737</span>
                        </a>
                      </div>
                    </div>

                    {/* Address Text matching the flyer bottom details */}
                    <div className="pt-3 border-t border-stone-900 text-center space-y-1.5" dir="rtl">
                      <p className="text-stone-300 text-xs sm:text-sm font-sans font-bold flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                        نادي المنيا الرياضي بوابة الكورنيش بجوار كنتاكي
                      </p>
                      <p className="text-stone-300 text-xs sm:text-sm font-sans font-bold flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
                        المنيا الجديدة - سيتي سكيب مول (الدور الثاني)
                      </p>
                    </div>

                    {/* Core CTA */}
                    <div className="pt-2">
                      <a 
                        href="https://wa.me/201004448982"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white font-black text-xs sm:text-sm rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-white" />
                        <span>راسل خدمة العملاء فوراً عبر واتساب للتسجيل المسبق</span>
                      </a>
                    </div>

                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-stone-900 w-full text-xs">
                    <button 
                      onClick={handleRestartVideo}
                      className="text-stone-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-900 border border-stone-800 cursor-pointer font-medium transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-secondary" />
                      <span>إعادة تشغيل العرض الترويجي التفاعلي</span>
                    </button>

                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("تم نسخ رابط الإعلان لمشاركته مع أصدقائك!");
                      }}
                      className="text-stone-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-900 border border-stone-800 cursor-pointer font-medium transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5 text-secondary" />
                      <span>مشاركة الإعلان</span>
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>



      </main>

      {/* FOOTER */}
      <footer className="py-6 px-4 text-center text-[10px] text-stone-600 border-t border-white/5 relative z-20 font-sans mt-auto">
        <p>VIP GYM HEALTH CLUB • CITYSCAPE MALL BRANCH</p>
        <p className="mt-1">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}
