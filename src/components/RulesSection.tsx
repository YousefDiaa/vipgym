import { useState } from "react";
import { obligationsBehavioral, obligationsFinancial, generalGuidelines } from "../data";
import { ShieldCheck, HelpCircle, AlertTriangle, AlertCircle, Sparkles, MessageSquare, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function RulesSection() {
  const [activeTab, setActiveTab] = useState<"rights" | "behavioral" | "financial">("rights");

  return (
    <section id="rules" className="py-20 bg-surface-lowest relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
            ميثاق العضوية: <span className="neon-gradient-text uppercase">الحقوق والالتزامات</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            نهتم بتوفير بيئة تمرة مثالية وراقية لجميع الأعضاء، ونعمل بتوازن تام لضمان جودة وسير الخدمة مع حفظ حقوق والتزامات الجميع.
          </p>
        </div>

        {/* Tab Selection with 4px rounded radius */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          <button
            onClick={() => setActiveTab("rights")}
            className={`px-5 py-3 rounded font-bold text-sm sm:text-base transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "rights"
                ? "bg-secondary text-black border-secondary neon-glow"
                : "bg-surface-container text-stone-300 border-stone-800 hover:border-stone-700"
            }`}
          >
            <ShieldCheck className="w-4 h-4 shrink-0" />
            حقوق العميل العامة
          </button>

          <button
            onClick={() => setActiveTab("behavioral")}
            className={`px-5 py-3 rounded font-bold text-sm sm:text-base transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "behavioral"
                ? "bg-secondary text-black border-secondary neon-glow"
                : "bg-surface-container text-stone-300 border-stone-800 hover:border-stone-700"
            }`}
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            الواجبات الفنية والسلوكية
          </button>

          <button
            onClick={() => setActiveTab("financial")}
            className={`px-5 py-3 rounded font-bold text-sm sm:text-base transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === "financial"
                ? "bg-secondary text-black border-secondary neon-glow"
                : "bg-surface-container text-stone-300 border-stone-800 hover:border-stone-700"
            }`}
          >
            <AlertTriangle className="w-4 h-4 shrink-0" />
            الواجبات المالية والتنظيمية
          </button>
        </div>

        {/* Critical Rule Highlight - Only shown or highly visible */}
        <div className="bg-red-500/10 border border-red-500/30 p-5 rounded mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="p-3 bg-red-500/20 text-red-400 rounded shrink-0 animate-pulse">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="text-right flex-1">
            <h4 className="text-base font-bold text-red-400 font-display">تنبيه هام وحاسم بخصوص الخصوصية:</h4>
            <p className="text-sm text-stone-300 font-sans mt-1">
              يمنع منعاً باتاً وبشكل قاطع تصوير أي شيء داخل الجيم بأي وسيلة كانت أثناء <strong className="text-red-400">شيفت السيدات</strong>. مخالفة هذا البند يترتب عليها إلغاء فوري للاشتراك دون استرداد أي قيمة مادية، واتخاذ الإجراءات اللازمة لضمان خصوصية مطلقة لعضواتنا.
            </p>
          </div>
        </div>

        {/* Active Content Grid */}
        <div className="glass-card rounded-xl border border-stone-800 p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "rights" && (
              <motion.div
                key="rights"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-right"
              >
                <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                  <div className="p-2.5 bg-secondary/10 text-secondary rounded">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-black text-white">ضمان الحقوق والإرشاد العام</h3>
                    <p className="text-stone-400 text-xs font-sans">شعارنا دائمًا: نحن في خدمتك، ثق بنا.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-2">
                  <ul className="space-y-4">
                    {generalGuidelines.slice(0, 3).map((guide, idx) => (
                      <li key={idx} className="flex gap-3 bg-[#191c1e] p-4 rounded-lg border border-stone-800/80">
                        <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-stone-300 text-sm leading-relaxed font-sans">{guide}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-4">
                    {generalGuidelines.slice(3).map((guide, idx) => (
                      <li key={idx} className="flex gap-3 bg-[#191c1e] p-4 rounded-lg border border-stone-800/80">
                        <span className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 4}
                        </span>
                        <span className="text-stone-300 text-sm leading-relaxed font-sans">{guide}</span>
                      </li>
                    ))}

                    <div className="bg-secondary/10 border border-secondary/20 p-4 rounded-lg flex items-center gap-4">
                      <MessageSquare className="w-5 h-5 text-secondary shrink-0" />
                      <div>
                        <span className="block text-xs text-stone-400">تواصل مباشر بالواتساب مع المدير:</span>
                        <a href="https://wa.me/201009244078" className="text-sm font-black text-secondary hover:underline">
                          01009244078
                        </a>
                      </div>
                    </div>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === "behavioral" && (
              <motion.div
                key="behavioral"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-right"
              >
                <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                  <div className="p-2.5 bg-secondary/10 text-secondary rounded">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-black text-white">الواجبات السلوكية والتنظيمية الفنية</h3>
                    <p className="text-stone-400 text-xs font-sans">التزامك يحفظ النظام، والنظافة، وسلامة الأوزان والأجهزة للجميع.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  {obligationsBehavioral.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-lg border flex gap-3 text-sm font-sans items-start ${
                        item.includes("🚫")
                          ? "bg-red-500/10 border-red-500/20 text-stone-200"
                          : "bg-[#191c1e] border-stone-800/80 hover:border-stone-700/80 transition-all text-stone-300"
                      }`}
                    >
                      <span className="w-5 h-5 rounded bg-stone-900 border border-stone-800 flex items-center justify-center text-[11px] text-stone-400 shrink-0 mt-0.5 font-bold">
                        {idx + 1}
                      </span>
                      <span>{item.replace("🚫 ", "")}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "financial" && (
              <motion.div
                key="financial"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-right"
              >
                <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
                  <div className="p-2.5 bg-secondary/10 text-secondary rounded">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-black text-white">القواعد المالية والتنظيمية الرسمية</h3>
                    <p className="text-stone-400 text-xs font-sans">إجراءات رسمية تضمن حقوق النادي وحقك المالي فور التسجيل.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  {obligationsFinancial.map((item, idx) => {
                    const isCrucial = item.includes("ممنوع دفع") || item.includes("لا ترد ولا تستبدل");
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border flex gap-3.5 items-start text-sm font-sans ${
                          isCrucial
                            ? "bg-secondary/5 border-secondary/20 text-stone-200 shadow-[0_0_15px_rgba(219,225,36,0.05)]"
                            : "bg-[#191c1e] border-stone-800/80 text-stone-300 hover:border-stone-700 transition-all"
                        }`}
                      >
                        <span className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 ${
                          isCrucial ? "bg-secondary text-black font-extrabold" : "bg-stone-900 border border-stone-800 text-stone-400"
                        }`}>
                          {idx + 1}
                        </span>
                        <p className="leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
