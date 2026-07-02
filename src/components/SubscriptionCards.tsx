import React, { useState } from "react";
import { subscriptionTiers, SubscriptionTier } from "../data";
import { 
  Check, 
  X, 
  Crown, 
  Dumbbell, 
  Zap, 
  Gift, 
  ArrowLeft, 
  Calendar, 
  MessageSquare, 
  User, 
  Phone, 
  Send,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SubscriptionCards() {
  const [activeTab, setActiveTab] = useState<string>("private");
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Modal Form States
  const [lessonsOption, setLessonsOption] = useState<string>("12"); // default to 12 lessons
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const getTierIcon = (iconName: string) => {
    switch (iconName) {
      case "Crown":
        return <Crown className="w-6 h-6 text-secondary" />;
      case "Dumbbell":
        return <Dumbbell className="w-6 h-6 text-stone-300" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-secondary" />;
      default:
        return <Dumbbell className="w-6 h-6 text-secondary" />;
    }
  };

  const handleOpenBooking = (tier: SubscriptionTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
    setErrorMsg("");
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
    setFullName("");
    setPhoneNumber("");
    setNotes("");
    setErrorMsg("");
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg("الرجاء إدخال الاسم بالكامل");
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 8) {
      setErrorMsg("الرجاء إدخال رقم هاتف صحيح");
      return;
    }

    // Format lessons selection text in Arabic
    let lessonsArabic = "";
    switch (lessonsOption) {
      case "6":
        lessonsArabic = "6 حصص تدريبية";
        break;
      case "8":
        lessonsArabic = "8 حصص تدريبية";
        break;
      case "12":
        lessonsArabic = "12 حصة تدريبية";
        break;
      case "16":
        lessonsArabic = "16 حصة تدريبية";
        break;
      case "20":
        lessonsArabic = "20 حصة تدريبية";
        break;
      case "month":
        lessonsArabic = "شهر كامل (حضور مفتوح)";
        break;
      case "quarter_year":
        lessonsArabic = "ربع سنة (3 أشهر)";
        break;
      default:
        lessonsArabic = `${lessonsOption} حصص`;
    }

    const tierName = selectedTier ? selectedTier.name : "";
    const tierPeriod = selectedTier ? selectedTier.period : "";

    // Build elegant WhatsApp message
    const message = `السلام عليكم كابتن VIP GYM، أود الاستفسار والاشتراك في الباقة الرياضية التالية:

🏆 الباقة المختارة: ${tierName}
⏱️ صلاحية الباقة الأساسية: ${tierPeriod}

👤 اسم المشترك: ${fullName.trim()}
📞 رقم الهاتف: ${phoneNumber.trim()}

📌 عدد الحصص / المدة المطلوبة: ${lessonsArabic}
${notes.trim() ? `📝 ملاحظات إضافية: ${notes.trim()}` : ""}

تم الإرسال عبر الموقع الرسمي لـ VIP GYM (نادي المنيا الرياضي) 🗺️`;

    // Encode and redirect
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201007555737?text=${encodedText}`;
    
    // Redirect
    window.open(whatsappUrl, "_blank");
    handleCloseBooking();
  };

  return (
    <section id="pricing" className="py-16 bg-[#0c0f10] relative overflow-hidden" dir="rtl">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-widest text-secondary font-black font-mono">القسم الثالث • 03</span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white mt-1 mb-2">
            باقات واشتراكات <span className="text-secondary drop-shadow-[0_0_10px_rgba(219,225,36,0.15)]">VIP GYM HEALTH CLUB</span>
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-lg mx-auto">
            اختر باقة الاشتراك المناسبة لك لتخصيص الحصص المطلوبة، وتواصل مباشرة مع إدارة الجيم لتأكيد الحجز وتفعيل الاشتراك فوراً.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start mb-6">
          {subscriptionTiers.map((tier) => {
            const isPrivate = tier.id === "private";
            const isActive = activeTab === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setActiveTab(tier.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-350 relative flex flex-col justify-between h-full border ${
                  isActive
                    ? "bg-[#121618] border-secondary shadow-xl shadow-secondary/5 scale-[1.01]"
                    : "bg-[#101415]/80 border-stone-850 hover:border-stone-800 hover:scale-[1.005]"
                }`}
              >
                {/* Popular Badge */}
                {isPrivate && (
                  <span className="absolute -top-3 right-6 bg-secondary text-black text-[9px] font-display font-black px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Crown className="w-3 h-3 fill-black shrink-0" />
                    الباقة الأكثر طلباً والموصى بها
                  </span>
                )}

                <div>
                  {/* Header Tier */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-lg border ${isActive ? "bg-secondary/10 text-secondary border-secondary/20" : "bg-stone-900 text-stone-300 border-stone-800"}`}>
                        {getTierIcon(tier.icon)}
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-black text-white">{tier.name}</h3>
                    </div>
                  </div>

                  {/* Period & Target info */}
                  <div className="mb-5 bg-stone-950/40 p-3 rounded-xl border border-stone-900">
                    <div className="flex items-baseline gap-1.5 justify-start">
                      <span className="text-xl font-display font-black text-secondary">{tier.period}</span>
                      <span className="text-stone-500 text-xs font-sans">مدة الصلاحية الافتراضية</span>
                    </div>
                    <p className="text-stone-400 text-xs mt-1.5 leading-relaxed font-sans">{tier.target}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-5 border-t border-stone-850 pt-4">
                    <h4 className="text-xs font-display font-bold text-stone-300">مزايا وحقوق الاشتراك الأساسية:</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-stone-400 text-xs text-right">
                          <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Freebies included */}
                  <div className="space-y-2.5 mb-5 border-t border-stone-850 pt-4">
                    <h4 className="text-xs font-display font-bold text-stone-300 flex items-center gap-1.5 justify-start">
                      <Gift className="w-3.5 h-3.5 text-secondary" />
                      مزايا إضافية مدرجة مجاناً:
                    </h4>
                    <div className="space-y-1.5">
                      {tier.freebies.map((freebie, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px] bg-stone-950/20 p-1.5 rounded border border-stone-900/40">
                          <span className={`${freebie.isFree ? "text-stone-300 font-medium" : "text-stone-500 line-through"}`}>
                            {freebie.name}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                              freebie.isFree
                                ? freebie.isPrivateOnly
                                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                  : "bg-secondary/10 text-secondary border border-secondary/20"
                                : "bg-stone-900 text-stone-600"
                            }`}
                          >
                            {freebie.isFree ? (freebie.isPrivateOnly ? "حصري للبرايفت" : "مجاناً") : "غير مدرج"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Discounts */}
                <div className="border-t border-stone-850 pt-4 mt-auto">
                  <div className="bg-[#15191a] p-3 rounded-xl border border-stone-850/80 text-xs text-secondary font-sans leading-relaxed text-right mb-4">
                    <strong>الخصومات الإضافية:</strong> {tier.discount}
                  </div>

                  {/* Subscription Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenBooking(tier);
                    }}
                    className={`w-full py-3 rounded-xl text-xs sm:text-sm font-display font-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-secondary text-black hover:bg-[#c2c820] shadow-lg shadow-secondary/10"
                        : "bg-stone-900 text-stone-300 border border-stone-800 hover:border-secondary/40 hover:text-white"
                    }`}
                  >
                    <span>حجز وتعديل الحصص 💳</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Interactive Booking Modal (Popup) */}
      <AnimatePresence>
        {isModalOpen && selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseBooking}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#101415] border border-stone-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 text-right relative z-10 shadow-2xl space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseBooking}
                className="absolute top-4 left-4 p-1.5 bg-stone-900 border border-stone-800 text-stone-400 hover:text-white rounded-lg transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 mb-1 justify-start">
                  <div className="p-1.5 rounded bg-secondary/10 text-secondary border border-secondary/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-black text-white">
                    حجز وتفصيل حصص الاشتراك
                  </h3>
                </div>
                <p className="text-stone-400 text-xs font-sans">
                  قم بتخصيص خيارات تمرينك ومشاركة التفاصيل مباشرة مع إدارة الكابتن عبر الواتساب.
                </p>
              </div>

              {/* Selected Tier Brief info */}
              <div className="bg-[#15191a] border border-stone-850 p-3 rounded-xl flex items-center justify-between">
                <span className="text-stone-500 text-[10px] font-mono" dir="ltr">{selectedTier.id.toUpperCase()} PLAN</span>
                <div className="text-right">
                  <span className="text-stone-400 text-[10px] font-display block">الباقة الأساسية المحددة</span>
                  <span className="text-white font-display font-bold text-xs sm:text-sm mt-0.5 block">{selectedTier.name}</span>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                
                {/* 1. Lessons / Sessions Selection */}
                <div className="space-y-2.5">
                  <label className="block text-xs sm:text-sm font-display font-black text-stone-200">
                    كم عدد الحصص أو المدة التي ترغب بها؟ ⏱️
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {[
                      { value: "6", label: "6 حصص" },
                      { value: "8", label: "8 حصص" },
                      { value: "12", label: "12 حصة" },
                      { value: "16", label: "16 حصة" },
                      { value: "20", label: "20 حصة" },
                      { value: "month", label: "شهر كامل" },
                      { value: "quarter_year", label: "ربع سنة" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setLessonsOption(opt.value)}
                        className={`py-2 rounded-lg text-xs font-display font-bold transition-all border cursor-pointer ${
                          lessonsOption === opt.value
                            ? "bg-secondary text-black border-secondary font-black shadow-md shadow-secondary/15"
                            : "bg-stone-900/60 text-stone-300 border-stone-850 hover:border-stone-700"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Full Name Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-display font-bold text-stone-200">
                    الاسم الكامل للمشترك 👤
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك ثلاثياً أو ثنائياً هنا"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#181d1f] border border-stone-800 rounded-xl py-2.5 pr-10 pl-4 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-secondary font-sans text-right transition-all"
                    />
                    <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                  </div>
                </div>

                {/* 3. Phone Number Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-display font-bold text-stone-200">
                    رقم الهاتف للتواصل وتفعيل الاشتراك 📞
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="مثال: 01007555737"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-[#181d1f] border border-stone-800 rounded-xl py-2.5 pr-10 pl-4 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-secondary font-sans text-left transition-all"
                      dir="ltr"
                    />
                    <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                  </div>
                </div>

                {/* 4. Optional Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-display font-bold text-stone-200">
                    ملاحظات إضافية أو كود خصم (اختياري) 📝
                  </label>
                  <textarea
                    placeholder="مثال: أريد كابتن متخصص لتأهيل الركبة، أو مواعيد الصباح..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="w-full bg-[#181d1f] border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-secondary font-sans text-right transition-all resize-none"
                  />
                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-2.5 rounded-lg flex items-center gap-2 justify-end text-xs font-sans">
                    <span>{errorMsg}</span>
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  </div>
                )}

                {/* Form Actions */}
                <div className="pt-2 border-t border-stone-800/60 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseBooking}
                    className="px-4 py-2.5 rounded-xl border border-stone-850 text-stone-400 hover:text-white hover:bg-stone-900 text-xs font-display font-bold transition-all cursor-pointer"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-black font-display font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-emerald-950/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black transform rotate-180" />
                    <span>إرسال وتأكيد عبر WhatsApp 💬</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
