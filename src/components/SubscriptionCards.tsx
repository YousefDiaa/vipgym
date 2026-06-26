import { useState } from "react";
import { subscriptionTiers } from "../data";
import { Check, X, Crown, Dumbbell, Zap, HelpCircle, Gift, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SubscriptionCards() {
  const [activeTab, setActiveTab] = useState<string>("private");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [calcResult, setCalcResult] = useState<string>("");

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

  const handleRecommendPackage = () => {
    if (!selectedGoal) {
      setCalcResult("الرجاء تحديد هدفك الرئيسي أولاً.");
      return;
    }

    if (selectedGoal === "weight-loss-fast" || selectedGoal === "rehab" || selectedGoal === "military") {
      setCalcResult(
        "نوصيك بشدة بـ **اشتراك البرايفت (Private)**. ستحصل على برنامج غذائي مخصص بنسبة 100%، فحص إنبودي دوري، ومتابعة دقيقة لحظة بلحظة مع مدربك الشخصي طوال 45 يوماً لتحقيق هذا الهدف الحرج."
      );
      setActiveTab("private");
    } else if (selectedGoal === "muscle-gain" && selectedDays >= 4) {
      setCalcResult(
        "نوصيك بـ **اشتراك الفلور (Floor)** أو البرايفت. في الفلور، ستستلم فيديوهات توضيحية لتمارين الصالة في الأسبوع الأول مع متابعة عامة وتعديل أداء، مع خصم 10% على استشارات التغذية والإنبودي."
      );
      setActiveTab("floor");
    } else if (selectedGoal === "muscle-gain" && selectedDays < 4) {
      setCalcResult(
        "نوصيك بـ **اشتراك الفلور (Floor)** للاستفادة من التوجيه الصحيح في الأسبوع الأول وتجنب الإصابات، ومتابعة عامة بقية الشهر."
      );
      setActiveTab("floor");
    } else if (selectedGoal === "fitness-general") {
      setCalcResult(
        "اشتراك **بدون مدرب (Without Coach)** أو **الفلور (Floor)** خيار ممتاز لك. إذا كانت لديك خبرة سابقة في استخدام الأجهزة، فالبدون مدرب سيعطيك حرية كاملة مع كلاسات الساونا المجانية."
      );
      setActiveTab("without-coach");
    }
  };

  return (
    <section id="pricing" className="py-20 bg-surface-base relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nile/20 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4">
            باقات واشتراكات <span className="neon-gradient-text uppercase">VIP GYM HEALTH CLUB</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            اختر باقة الاشتراك المناسبة لإمكانياتك وأهدافك البدنية. نضمن لك أعلى جودة تدريب وأحدث الأجهزة مع ميزات مجانية حصرية.
          </p>
        </div>

        {/* Pricing Layout Tabs for Mobile & Desktop Slider */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          {subscriptionTiers.map((tier) => {
            const isPrivate = tier.id === "private";
            return (
              <div
                key={tier.id}
                onClick={() => setActiveTab(tier.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 relative flex flex-col justify-between h-full ${
                  activeTab === tier.id
                    ? "glass-card-neon border-secondary scale-[1.02] neon-glow"
                    : "glass-card hover:border-stone-700 hover:scale-[1.01]"
                }`}
              >
                {/* Popular Badge */}
                {isPrivate && (
                  <span className="absolute -top-3.5 left-6 bg-secondary text-black text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 neon-glow">
                    <Crown className="w-3.5 h-3.5 fill-black" />
                    الباقة الأكثر طلباً والمدعومة بالكامل
                  </span>
                )}

                <div>
                  {/* Header Tier */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded ${isPrivate ? "bg-secondary/20 text-secondary" : "bg-[#191c1e] text-stone-300"}`}>
                        {getTierIcon(tier.icon)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-white">{tier.name}</h3>
                    </div>
                  </div>

                  {/* Period & Target info */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-display font-black text-secondary">{tier.period}</span>
                      <span className="text-stone-400 text-sm">مدة الصلاحية</span>
                    </div>
                    <p className="text-stone-300 text-sm mt-2 leading-relaxed font-sans">{tier.target}</p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3.5 mb-6 border-t border-stone-800/80 pt-5">
                    <h4 className="text-sm font-bold text-stone-200">مزايا وحقوق الاشتراك:</h4>
                    <ul className="space-y-2.5">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-stone-300 text-sm">
                          <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Freebies included */}
                  <div className="space-y-3 mb-6 border-t border-stone-800/80 pt-5">
                    <h4 className="text-sm font-bold text-stone-200 flex items-center gap-1.5">
                      <Gift className="w-4 h-4 text-secondary" />
                      الخدمات والمزايا المضافة مجاناً:
                    </h4>
                    <div className="space-y-2">
                      {tier.freebies.map((freebie, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className={`${freebie.isFree ? "text-stone-200 font-medium" : "text-stone-500 line-through"}`}>
                            {freebie.name}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              freebie.isFree
                                ? freebie.isPrivateOnly
                                  ? "bg-[#D9F99D]/20 text-[#D9F99D] border border-[#D9F99D]/30"
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
                <div className="border-t border-stone-800/80 pt-5 mt-auto">
                  <div className="bg-[#191c1e] p-3 rounded border border-stone-800 text-xs text-secondary font-sans">
                    <strong>الخصومات الإضافية:</strong> {tier.discount}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Fitness Assistant / Recommend Tool */}
        <div className="glass-card rounded-xl border border-secondary/10 p-6 sm:p-8 max-w-4xl mx-auto neon-glow">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 bg-secondary/10 rounded flex items-center justify-center shrink-0">
              <HelpCircle className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-display font-black text-white mb-2">مساعد اختيار الباقة الذكي</h3>
              <p className="text-stone-300 text-sm font-sans">
                هل أنت محتار بخصوص الاشتراك المناسب لك؟ حدد هدفك ونظام حضورك ليقترح عليك كابتن VIP الباقة الأكثر فعالية ومثالية لاحتياجاتك الفردية.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="space-y-2 text-right">
              <label className="block text-sm font-bold text-stone-200">ما هو هدفك الرياضي الأول والأساسي؟</label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full bg-[#191c1e] border border-stone-700 rounded px-4 py-3 text-sm text-stone-300 focus:outline-none focus:border-secondary font-sans"
              >
                <option value="">-- اختر هدفك البدني --</option>
                <option value="weight-loss-fast">تخسيس وحرق دهون سريع (وزن زائد)</option>
                <option value="muscle-gain">بناء كتلة عضلية قوية وزيادة حجم العضلات</option>
                <option value="rehab">تأهيل إصابات ملاعب أو مشاكل مفاصل أو علاج طبيعي</option>
                <option value="military">تأهيل واجتياز اختبارات الكليات العسكرية والشرطة</option>
                <option value="fitness-general">لياقة عامة وصحة بدنية واستشفاء (ساونا وسبا)</option>
              </select>
            </div>

            <div className="space-y-2 text-right">
              <label className="block text-sm font-bold text-stone-200">كم عدد الأيام التي تنوي التدرب بها أسبوعياً؟</label>
              <div className="flex gap-2">
                {[2, 3, 4, 5, 6].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDays(day)}
                    className={`flex-1 py-2.5 rounded text-sm font-bold transition-all cursor-pointer ${
                      selectedDays === day
                        ? "bg-secondary text-black neon-glow"
                        : "bg-[#191c1e] text-stone-300 border border-stone-800 hover:border-stone-700"
                    }`}
                  >
                    {day} أيام
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 items-center justify-between border-t border-stone-800 pt-6">
            <button
              onClick={handleRecommendPackage}
              className="bg-[#191c1e] border border-secondary/50 hover:border-secondary text-secondary px-6 py-3 rounded text-sm font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              عرض التوصية الفنية
              <ArrowLeft className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {calcResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 min-w-[280px] bg-[#101415]/85 p-4 rounded border border-stone-800 text-sm text-stone-300 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{
                    __html: calcResult
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-secondary font-bold">$1</strong>')
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
