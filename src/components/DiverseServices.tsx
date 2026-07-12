import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  CheckCircle, 
  X, 
  MessageSquare, 
  Send, 
  Check, 
  ArrowLeft,
  Info,
  Calendar
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  detailedDesc: string;
  isFree: boolean;
  tag?: string;
  image: string;
  benefits: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "inbody",
    title: "تحليل إنبودي (InBody Analysis)",
    desc: "تقرير متكامل ومطبوع يوضح نسبة المياه، العضلات، الدهون المتراكمة، والدهون الحشوية لتوجيه خطة التدريب بدقة.",
    detailedDesc: "فحص دقيق لكامل مكونات الجسم باستخدام أحدث أجهزة تحليل إنبودي الإلكترونية. يساعدك الفحص على معرفة التوزيع الدقيق للكتلة العضلية والدهون في مختلف أطراف وجذع الجسم لضبط جدول تمرينك ونظامك الغذائي بشكل علمي مدروس ومتكامل مع المتابعة الدورية.",
    isFree: false,
    tag: "خصم 50% للأعضاء",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "معرفة الوزن والكتلة العضلية الإجمالية بدقة متناهية.",
      "تحديد نسبة الدهون الكلية والدهون الحشوية المحيطة بالأعضاء.",
      "حساب معدل الأيض الأساسي (BMR) لتحديد السعرات الحرارية المطلوبة يومياً.",
      "مراقبة احتباس السوائل وتوزيع المياه في الخلايا.",
      "تقرير مطبوع ورقمي شامل للمقارنة الدورية والتقدم."
    ]
  },
  {
    id: "spa",
    title: "الساونا والجاكوزي والنادي الصحي",
    desc: "غرف الاستشفاء الحراري والعضلي لمساعدتك على استعادة حيوية العضلات والتخلص من حمض اللاكتيك المتراكم.",
    detailedDesc: "استمتع بتجربة استشفاء حراري وعضلي متكاملة في النادي الصحي المجهز بأحدث غرف الساونا الخشبية والجاكوزي الدافئ. تعمل الحرارة العالية على تنشيط الدورة الدموية وتخفيف التوتر العضلي وتسريع عملية البناء والاستشفاء بعد التدريبات الشاقة ومكافحة الإجهاد.",
    isFree: false,
    tag: "مجاني لـ Private",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تخفيف الآلام والشد العضلي وتصلب المفاصل بعد التمرين.",
      "تنشيط الدورة الدموية وتحسين تدفق الأكسجين للعضلات.",
      "المساعدة في التخلص من حمض اللاكتيك المتراكم لتفادي الريكفري البطيء.",
      "تطهير البشرة وإزالة السموم عبر التعرق الحراري الفعال.",
      "الاسترخاء الذهني الكامل وتقليل مستويات الكورتيزول والتوتر."
    ]
  },
  {
    id: "rehab",
    title: "تأهيل الإصابات والعلاج الطبيعي",
    desc: "جلسات علاجية متخصصة لعلاج آلام العمود الفقري، الركبتين، وإصابات الملاعب تحت إشراف أخصائي معتمد.",
    detailedDesc: "قسم متكامل لإعادة التأهيل البدني والرياضي تحت إشراف أخصائي علاج طبيعي معتمد. نقدم برامج مخصصة للتعافي من إصابات الملاعب، آلام الظهر والمفاصل، تأهيل ما بعد العمليات، والتمارين الوقائية لتقوية العضلات الداعمة وتجنب الإصابات المتكررة لتحقيق أداء رياضي آمن ومستدام.",
    isFree: false,
    tag: "خصم خاص للأعضاء",
    image: "/gym/IMG-20260629-WA0041.jpg",
    benefits: [
      "تشخيص بدني وحركي دقيق لموقع الإصابة ونطاق الحركة المسموح به.",
      "برامج تمارين علاجية مخصصة وموجهة لتقوية الأربطة والأوتار حول المفاصل.",
      "تخفيف آلام الديسك والفقرات والركبة والكتف بتقنيات يدوية وحركية حديثة.",
      "تحسين التوازن العام والتحكم الحركي العصبي العضلي للمشترك.",
      "تأهيل وتدريب خاص للعودة الآمنة والمستدامة للملاعب والرفع الرياضي."
    ]
  },
  {
    id: "nutrition",
    title: "استشارات وبرامج التغذية الشخصية",
    desc: "برامج تفصيلية للتخسيس أو التضخيم أو علاج السمنة الناتجة عن خلل هرموني، مصممة بواسطة خبراء.",
    detailedDesc: "صمم خطتك الغذائية الفريدة مع أخصائي التغذية الرياضية لدينا. سواء كنت ترغب في خسارة الدهون، زيادة الوزن العضلي، أو الحفاظ على صحتك، نقدم برامج تغذية علمية مرنة محسوبة السعرات والماكروز ومصممة خصيصاً لتناسب نمط حياتك وأهدافك البدنية دون حرمان وبمتابعة مستمرة.",
    isFree: false,
    tag: "برنامج متابعة مخصص",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "خطة وجبات يومية مرنة ومتنوعة محسوبة السعرات الحرارية بدقة.",
      "توزيع دقيق للبروتينات والكربوهيدرات والدهون الصحية (الماكروز).",
      "استشارات متخصصة للتعامل مع السمنة الهرمونية ومقاومة الأنسولين.",
      "تحديد وتعديل المكملات الغذائية الآمنة والفعالة لأهدافك الرياضية.",
      "متابعة وتحديث أسبوعي للخطة بناءً على تطور الوزن وقياسات الجسم الفعلية."
    ]
  },
  {
    id: "lockers",
    title: "لوكرز وأمانات خاصة (Private Lockers)",
    desc: "خزائن خاصة ومحمية لوضع الملابس والحقائب والمتعلقات الشخصية الثمينة بأمان تام أثناء فترة التمرين.",
    detailedDesc: "نوفر لك خزائن شخصية مؤمنة بالكامل في غرف الملابس الفاخرة لتخزين متعلقاتك الشخصية، الملابس البديلة، والقطع الثمينة بسلام واطمئنان تام طوال فترة تواجدك في الجيم، مما يوفر لك تركيزاً كاملاً في حصتك الرياضية دون أي قلق.",
    isFree: true,
    tag: "متاح مجاناً للجميع",
    image: "/gym/IMG-20260629-WA0033.jpg",
    benefits: [
      "أقفال رقمية وآمنة تماماً لحماية مقتنياتك الثمينة بكفاءة.",
      "مساحات داخلية واسعة ومريحة تتسع للحقائب الرياضية والأحذية والملابس.",
      "موقع مريح وقريب من الحمامات وغرف الاستحمام المجهزة بالكامل.",
      "متاحة على مدار الساعة طوال فترة تشغيل الجيم مجاناً لكافة الأعضاء."
    ]
  },
  {
    id: "kids_area",
    title: "منطقة ألعاب الأطفال (Kids Area)",
    desc: "مساحة آمنة ومسلية ومؤمنة بالكامل للأطفال الصغار، مما يمنح الآباء والأمهات فرصة تمرين مريحة وتركيز مضاعف.",
    detailedDesc: "تمرن بذهن صافٍ وتركيز مطلق، بينما يستمتع أطفالك بوقتهم في منطقة ألعاب الأطفال المخصصة والآمنة. مساحة مليئة بالألعاب الهادفة والمسلية ومؤمنة بالكامل لحمايتهم وإسعادهم طوال فترة تدريبك دون أن تضطر لتركهم بالمنزل.",
    isFree: true,
    tag: "متاح مجاناً",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "بيئة لعب تفاعلية آمنة مغطاة بأرضيات مطاطية ممتصة للصدمات لحمايتهم.",
      "مجموعة متنوعة من الألعاب المسلية وتلوين الرسومات لجميع الأعمار السنية.",
      "قريبة جداً من صالة التمرين لتستطيع الاطمئنان على طفلك في أي وقت تشاء.",
      "متاحة مجاناً لجميع المشتركين لضمان تجربة تمرين هادئة وخالية من المشتتات."
    ]
  },
  {
    id: "mosque",
    title: "المصلى والمسجد المجهز",
    desc: "منطقة هادئة، نظيفة، ومجهزة بالكامل لأداء الصلوات في مواعيدها بسلام وراحة وطمأنينة.",
    detailedDesc: "مساحة هادئة ونظيفة مخصصة بالكامل لأداء الصلوات في أوقاتها. المصلى مجهز بسجاد صلاة مريح ومكيف بالكامل، ويوفر أجواءً من السكينة والطمأنينة للأعضاء والزوار لأداء فريضتهم دون تفويت أي صلاة أثناء التمرين.",
    isFree: true,
    tag: "متاح مجاناً للجميع",
    image: "https://images.unsplash.com/photo-1597935258735-e254c1839512?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تجهيز كامل ونظافة دورية مستمرة على مدار اليوم لضمان الراحة التامة.",
      "مكان هادئ بعيد عن صخب الموسيقى وصالة الأجهزة للتركيز والخشوع التام.",
      "مجهز بالمصاحف وسجاد الصلاة الفاخر والمعطر بشكل دائم.",
      "مرافق وضوء قريبة ونظيفة للغاية لتسهيل العبادة والوضوء بجد وبسرعة."
    ]
  }
];

export default function DiverseServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenDetails = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  const handleOrderService = (service: ServiceItem) => {
    const text = `السلام عليكم كابتن VIP GYM، أود الاستفسار وحجز الخدمة التالية:
    
⭐ الخدمة المطلوبة: ${service.title}
📌 نوع الخدمة: ${service.isFree ? "خدمة مجانية للأعضاء" : "خدمة إضافية مخصصة"}

أرجو التواصل لتوضيح تفاصيل الحجز وتفعيل الخدمة في حساب المشترك الخاص بي. شكراً لكم! 🥇`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/201007555737?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-surface-lowest relative overflow-hidden scroll-mt-16 text-right" dir="rtl">
      {/* Visual Ambient */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم السادس • 06</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
            الخدمات المتنوعة <span className="neon-gradient-text uppercase">والمزايا الإضافية</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
            نهتم بكافة تفاصيل يومك الرياضي. نوفر لك باقة متكاملة من الخدمات المريحة والصحية لضمان حصولك على تجربة رفاهية تليق بك في نادي المنيا الرياضي.
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid with Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#131618] border border-stone-850 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-stone-900 border-b border-stone-850">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131618] via-transparent to-black/40" />
                
                {/* Free / Premium Badge on top of image */}
                <div className="absolute top-3.5 right-3.5">
                  <span className={`text-[10px] font-bold font-sans px-2.5 py-1 rounded shadow-lg ${
                    service.isFree ? "bg-secondary text-black font-black" : "bg-stone-900/90 text-stone-200 border border-stone-800"
                  }`}>
                    {service.tag || "خدمة ممتازة"}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h4 className="text-base font-display font-extrabold text-white mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-stone-400 text-xs leading-relaxed line-clamp-2 mb-4">
                    {service.desc}
                  </p>
                </div>

                {/* Card Action & Footer */}
                <div className="mt-4 pt-3 border-t border-stone-850/60 flex items-center justify-between gap-1.5 text-xs text-stone-500 font-sans">
                  {/* Know More Interactive Button */}
                  <button
                    onClick={() => handleOpenDetails(service)}
                    className="text-secondary hover:text-[#c2c820] text-[11px] font-display font-black flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>معرفة التفاصيل</span>
                    <ArrowLeft className="w-3.5 h-3.5 shrink-0 transform -rotate-45 group-hover:translate-x-[-2px] transition-transform" />
                  </button>

                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-stone-500">جودة معتمدة</span>
                    <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Interactive Details Modal / Popup (RTL aligned) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#101415] border border-stone-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto text-right relative z-10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header Image */}
              <div className="relative h-48 sm:h-56 w-full bg-stone-900 border-b border-stone-800">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-black/50" />
                
                {/* Close Button on image */}
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-4 left-4 p-2 bg-black/70 border border-stone-800/80 text-stone-400 hover:text-white rounded-lg transition-all cursor-pointer backdrop-blur-sm"
                  title="إغلاق"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Tag & Icon Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className={`text-[10px] sm:text-xs font-display font-black px-3 py-1 rounded shadow-lg ${
                    selectedService.isFree ? "bg-secondary text-black" : "bg-stone-950 text-secondary border border-stone-800"
                  }`}>
                    {selectedService.tag || "خدمة النادي الصحي"}
                  </span>
                </div>
              </div>

              {/* Popup Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-stone-500 text-[10px] font-sans mt-0.5">
                    القسم الطبي والخدمي الفاخر • VIP GYM HEALTH CLUB
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="bg-[#15191a] border border-stone-850 p-4 rounded-xl text-stone-300 text-xs sm:text-sm font-sans leading-relaxed text-right">
                  {selectedService.detailedDesc}
                </div>

                {/* Benefits checklist */}
                <div className="space-y-3 text-right">
                  <h4 className="text-xs sm:text-sm font-display font-black text-white flex items-center gap-1.5 justify-start">
                    <Sparkles className="w-4 h-4 text-secondary shrink-0" />
                    <span>مزايا وعناصر الخدمة الحصرية:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-stone-400 text-xs sm:text-sm text-right">
                        <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer actions */}
                <div className="pt-4 border-t border-stone-800/60 flex items-center justify-end gap-3">
                  <button
                    onClick={handleCloseDetails}
                    className="px-4 py-2.5 rounded-xl border border-stone-850 text-stone-400 hover:text-white hover:bg-stone-900 text-xs font-display font-bold transition-all cursor-pointer"
                  >
                    رجوع للأقسام
                  </button>
                  <button
                    onClick={() => handleOrderService(selectedService)}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-black font-display font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-emerald-950/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black transform rotate-180" />
                    <span>طلب واستفسار عبر WhatsApp 💬</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
