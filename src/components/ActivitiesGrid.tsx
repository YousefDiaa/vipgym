import React, { useState } from "react";
import { 
  Dumbbell, 
  Activity, 
  Smile, 
  Music, 
  Compass, 
  Swords, 
  Flame, 
  Accessibility, 
  CheckCircle, 
  Sparkles, 
  X, 
  Send, 
  ArrowLeft, 
  Calendar,
  Users,
  Target,
  Check,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ActivityItem {
  id: string;
  title: string;
  desc: string;
  detailedDesc: string;
  tag: string;
  image: string;
  benefits: string[];
  icon: string;
}

const womenActivities: ActivityItem[] = [
  {
    id: "w-zumba",
    title: "أيروبكس وزومبا (Zumba & Aerobics)",
    desc: "كلاسات حركية جماعية غنية بالطاقة والأنغام لحرق السعرات وتخسيس وشد الجسم للسيدات.",
    detailedDesc: "انضمي لأقوى كلاسات الزومبا والأيروبكس الحركية في صالتنا المغلقة والمكيفة بالكامل. تعمل هذه الحصص الجماعية الحماسية على أنغام الموسيقى لتنشيط الدورة الدموية، رفع معدل حرق الدهون لأقصى حد، وتحسين المزاج العام والتخلص التام من ضغوط العمل والحياة اليومية وسط بيئة نسائية مريحة ومرحة بنسبة 100%.",
    tag: "الأكثر طلباً للسيدات 🔥",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "حرق ما يصل إلى 600-800 سعرة حرارية في الكلاس الواحد.",
      "تحسين اللياقة البدنية والقدرة الهوائية وتنشيط الدورة الدموية.",
      "زيادة مرونة الجسد وتناسقه العضلي والحركي.",
      "أجواء حماسية جماعية تزيد من الدافع والاستمرارية في التمرين.",
      "خصوصية تامة 100% في قاعة مستقلة ومغلقة تماماً."
    ],
    icon: "Music"
  },
  {
    id: "w-yoga",
    title: "يوجا وبيلاتس (Yoga & Pilates)",
    desc: "تمارين التنفس والاسترخاء والتحكم لزيادة المرونة وتخفيف آلام الظهر وتصفية الذهن.",
    detailedDesc: "كلاسات اليوجا والاستطالة العميقة (Pilates) تمنحك الفرصة المثالية لإعادة الاتصال بين ذهنك وجسدك. نركز في هذه الحصص على إطالة العضلات، زيادة مرونة المفاصل، تقوية عضلات الجذع والظهر، وتعلم تقنيات التنفس السليم التي تقلل من التوتر النفسي والجسدي وتساعد على الاسترخاء العميق.",
    tag: "استرخاء وصحة بدنية 🧘‍♀️",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "زيادة مرونة العضلات والمفاصل ومنع الإصابات الحركية.",
      "تقوية عضلات كور (Core) والظهر لتحسين القوام والوضعية البدنية.",
      "تقليل مستويات التوتر والكورتيزول والمساعدة على النوم العميق.",
      "تحسين كفاءة التنفس وزيادة سعة الرئتين.",
      "مناسبة لجميع الأعمار السنية والمستويات اللياقية."
    ],
    icon: "Compass"
  },
  {
    id: "w-fitness",
    title: "فتنس وتخسيس (Fitness & Weight Loss)",
    desc: "تمارين كارديو ومقاومة مخصصة لنحت القوام وشد الترهلات تحت إشراف أفضل المدربات.",
    detailedDesc: "تمارين عالية الكفاءة تجمع بين المقاومة والكارديو لشد ترهلات الجسم والتخلص من الدهون المتراكمة في مناطق الخصر والأرداف والبطن. يتم تصميم الحصص لتناسب مستوى كل متدربة مع توجيه دقيق للأداء لضمان الحصول على جسم متناسق ومشدود دون تضخيم.",
    tag: "شد ونحت القوام ✨",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "استهداف ترهلات الجسم وشد الجلد بفاعلية كبيرة.",
      "تسريع معدل الأيض اليومي لزيادة حرق السعرات الحرارية.",
      "بناء أساس عضلي قوي ومقاوم لهشاشة العظام والمفاصل.",
      "متابعة دورية للقياسات والوزن مع كابتن الكلاس.",
      "برنامج متدرج الصعوبة يناسب المبتدئات والمتقدمات."
    ],
    icon: "Flame"
  },
  {
    id: "w-rehab",
    title: "علاج طبيعي وتأهيل حركي نسائي",
    desc: "برامج علاج حركي وتأهيل مخصصة للسيدات للتخلص من آلام المفاصل والعمود الفقري بأمان.",
    detailedDesc: "برامج تأهيلية علاجية وحركية مصممة خصيصاً للسيدات اللواتي يعانين من آلام أسفل الظهر، خشونة الركبة، ديسك الرقبة، أو الإصابات الحركية المختلفة. تتم الجلسات تحت إشراف أخصائي معتمد لمساعدتك على استعادة الحركة الطبيعية بدون ألم وتجنب حدوث أي مضاعفات.",
    tag: "رعاية طبية متخصصة 🩺",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "برنامج حركي فردي ومدروس يخفف من الضغط على الفقرات والمفاصل.",
      "تقوية العضلات المحيطة بالركبة والظهر لدعمهما وتقليل الاحتكاك.",
      "استعادة نطاق الحركة الكامل للمفاصل والكتف بكفاءة وأمان.",
      "تحسين جودة المشي والوقوف والنشاط اليومي المعتاد.",
      "إشراف طبي متميز وخطط علاجية قصيرة وطويلة الأجل."
    ],
    icon: "Activity"
  }
];

const menActivities: ActivityItem[] = [
  {
    id: "m-bodybuilding",
    title: "كمال أجسام وبناء عضلات (Bodybuilding)",
    desc: "برامج تدريب وتضخيم وتنشيف العضلات باستخدام أقوى وأحدث أجهزة CYBEX العالمية.",
    detailedDesc: "صالة كمال الأجسام لدينا مجهزة بالكامل بأقوى الأجهزة الأمريكية (CYBEX) التي تضمن زوايا تدريبية آمنة ومدروسة تشريحياً بنسبة 100%. تحت إشراف كباتن ومدربين معتمدين وأبطال كمال أجسام، ستتعلم التكنيك الصحيح لرفع الأوزان وبناء كتلة عضلية قوية متناسقة في أقصر وقت وبأمان تام.",
    tag: "ضخامة وقوة عضلية 💪",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تحقيق توازن وتناسق عضلي كامل لكافة عضلات الجسم.",
      "زيادة القوة البدنية والقدرة على رفع الأوزان بأمان.",
      "توجيه غذائي وتدريبي مخصص من الكابتن لشكل جسمك.",
      "برامج خاصة للمبتدئين للتأسيس وبناء التكنيك السليم.",
      "متابعة تطور الكتلة العضلية والدهون أسبوعياً."
    ],
    icon: "Dumbbell"
  },
  {
    id: "m-crossfit",
    title: "كروس فيت وفتنس (CrossFit & Fitness)",
    desc: "تمارين مكثفة لرفع قوة التحمل البدني والسرعة وبناء لياقة بدنية فائقة القوة والصلابة.",
    detailedDesc: "كلاسات الكروس فيت واللياقة البدنية عالية الكثافة (HIIT) مصممة لتحدي قدراتك البدنية والذهنية. نجمع في هذه التمارين بين رفع الأثقال الأولمبي، الكارديو المكثف، وتمارين وزن الجسم لبناء جسم قوي، سريع، ومرن، ورفع كفاءة الجهاز الدوري التنفسي لأقصى الحدود الممكنة.",
    tag: "قوة تحمل وتنشيف ⚡",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "زيادة خارقة في مستوى اللياقة والتحمل البدني الإجمالي.",
      "حرق كميات هائلة من الدهون المخزنة وزيادة صلابة العضلات.",
      "تحسين سرعة ردود الفعل والرشاقة الحركية الكلية.",
      "تحفيز هرمونات النمو الطبيعية والتستوستيرون بفضل الكثافة العالية.",
      "تحديات وروح حماسية جماعية يومية داخل الصالة."
    ],
    icon: "Flame"
  },
  {
    id: "m-military",
    title: "تأهيل الكليات العسكرية والشرطة",
    desc: "إعداد بدني ونفسي مكثف يشمل الجري، قفزة الثقة واجتياز اختبارات اللياقة للشرطة والجيش.",
    detailedDesc: "برنامج تدريبي خاص ومكثف مصمم للطلاب المتقدمين لاجتياز الاختبارات الرياضية وبطولات اللياقة للقبول في الكليات العسكرية والشرطة. يشمل البرنامج إعداداً شاملاً لتمارين الضغط، البطن، العقلة، الجري لمسافات طويلة، السرعة القصوى، التوازن الحركي، وتدريبات نفسية لضمان التفوق والحصول على أعلى الدرجات الرياضية بثقة كاملة.",
    tag: "تجهيز وتفوق مضمون 🎖️",
    image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تطوير مستمر للأرقام القياسية لتمارين الضغط والعقلة والبطن.",
      "تحسين سرعة الجري ورفع كفاءة التنفس للمسافات الطويلة.",
      "تدريبات توازن وتكنيك تخطي الحواجز البدنية الصعبة.",
      "جلسات تأهيل نفسي لكسر رهبة الاختبارات والقفز الرياضي.",
      "إشراف ومتابعة دقيقة من كباتن وضباط لياقة متخصصين."
    ],
    icon: "CheckCircle"
  },
  {
    id: "m-martial",
    title: "الألعاب القتالية والدفاع عن النفس",
    desc: "رياضات قتالية متنوعة لتعليم الانضباط وغرس الشجاعة وتنمية مهارات الدفاع عن النفس للرجال.",
    detailedDesc: "كلاسات الفنون القتالية والدفاع عن النفس توفر لك فرصة رائعة لتعلم مهارات قتالية وتكتيكية ذكية تحميك وتزيد من شجاعتك وثقتك بنفسك. نركز في هذه التدريبات على زيادة اللياقة والسرعة وقوة الضربات مع غرس روح الانضباط والتحكم الكامل في الانفعالات تحت إشراف مدربين معتمدين دولياً.",
    tag: "قوة ودفاع عن النفس 🥷",
    image: "https://images.unsplash.com/photo-1517438322307-e0d512a246e7?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تعلم تقنيات فعالة وعلمية للدفاع عن النفس في أي موقف حرج.",
      "زيادة سرعة ردود الفعل والمرونة والتوازن الحركي والجسدي.",
      "تفريغ الطاقات السلبية والغضب والتوتر النفسي والذهني في بيئة رياضية.",
      "تطوير مستوى التركيز الذهني والتوقع وتفادي الهجمات.",
      "مناسب ومتاح للرجال والشباب من مختلف الأعمار البدنية."
    ],
    icon: "Swords"
  }
];

const kidsActivities: ActivityItem[] = [
  {
    id: "k-martial",
    title: "فنون قتالية للأطفال (Karate & Self Defense)",
    desc: "تعليم الكاراتيه وفنون القتال لغرس الثقة والانضباط الحركي والتركيز للأولاد والبنات.",
    detailedDesc: "نهتم ببناء شخصية طفلك وجسده في نفس الوقت من خلال كلاسات الكاراتيه والفنون القتالية المخصصة للأطفال. نركز على غرس مبادئ الاحترام والالتزام والانضباط، وبناء اللياقة البدنية والسرعة والتوافق العضلي العصبي لزيادة ثقته بنفسه ووقايته من أي تنمر مدرسي أو حركي.",
    tag: "انضباط وثقة بالنفس 🥋",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تعلم مهارات حماية ودفاع عن النفس ذكية ومؤمنة للأطفال.",
      "تحسين التركيز العقلي والانتباه والاستماع الجيد للتعليمات.",
      "تطوير مرونة الجسد والتناسق الحركي المذهل في سن مبكر.",
      "غرس روح الشجاعة والتحكم في النفس وتفريغ الطاقات بشكل إيجابي.",
      "الحصول على أحزمة رياضية معتمدة والمشاركة في بطولات رسمية."
    ],
    icon: "Swords"
  },
  {
    id: "k-fitness",
    title: "تأسيس حركي وبدني للأطفال",
    desc: "ألعاب رياضية وكلاسات ممتعة لتأسيس الرشاقة، القوة البدنية، التوازن ومكافحة السمنة والكسل.",
    detailedDesc: "تأسيس بدني وحركي متكامل مصمم بطريقة ترفيهية حماسية وممتعة لترغيب الأطفال في الرياضة. نساعد طفلك في بناء قوام متناسق، حرق الدهون الزائدة ومكافحة السمنة والكسل، وزيادة الرشاقة والتوازن العام من خلال تمارين آمنة وألعاب جماعية تنافسية تضمن سعادتهم وتحفيزهم الدائم.",
    tag: "لياقة وحيوية وصحة 🏃‍♂️",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "بناء أساس بدني وعضلي سليم وصحي لنمو العظام والمفاصل.",
      "مكافحة زيادة الوزن والسمنة وخمول الأطفال بشكل علمي ممتع.",
      "زيادة التوافق الحركي والرشاقة وسرعة ردود الفعل لديهم.",
      "تكوين صداقات جديدة وتعلم مهارات العمل الجماعي والتعاون.",
      "متاحة لكافة الأعمار السنية للأولاد والبنات من سن 5 سنوات."
    ],
    icon: "Smile"
  },
  {
    id: "k-hyper",
    title: "تعديل السلوك وتفريغ فرط الحركة",
    desc: "برامج رياضية مخصصة لتفريغ طاقات الأطفال ذوي فرط الحركة وزيادة تركيزهم العقلي.",
    detailedDesc: "برنامج رياضي وعلاجي مدروس مخصص للأطفال الذين يعانون من زيادة الحركة وتشتت الانتباه (ADHD) أو فرط الطاقة. نقوم بتوجيه وتفريغ طاقات الطفل بشكل آمن وإيجابي في كلاسات حركية تهدف لزيادة القدرة على التركيز والانتباه، تنظيم الطاقة العصبية والجسدية، وتعديل السلوك الحركي العام.",
    tag: "توجيه وتفريغ طاقة آمن 🎯",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80",
    benefits: [
      "تفريغ هادف وإيجابي للطاقة الحركية الزائدة والنشاط المفرط.",
      "تحسين القدرة على التركيز الذهني والانتباه لفترات أطول.",
      "تدريب الجهاز العصبي والحركي للطفل على التحكم والانضباط الذاتي.",
      "تعزيز الثقة بالذات والتخلص من السلوك العدواني أو الاندفاعي.",
      "إشراف ومتابعة خاصة مع كباتن وأخصائيين مؤهلين ومحبوبين."
    ],
    icon: "Accessibility"
  }
];

export default function ActivitiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<"men" | "women" | "kids" | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);

  const getActivityIcon = (iconName: string) => {
    const classStyle = "w-5 h-5 text-secondary";
    switch (iconName) {
      case "Music":
        return <Music className={classStyle} />;
      case "Compass":
        return <Compass className={classStyle} />;
      case "Smile":
        return <Smile className={classStyle} />;
      case "Activity":
        return <Activity className={classStyle} />;
      case "Swords":
        return <Swords className={classStyle} />;
      case "Flame":
        return <Flame className={classStyle} />;
      case "Accessibility":
        return <Accessibility className={classStyle} />;
      case "CheckCircle":
        return <CheckCircle className={classStyle} />;
      case "Dumbbell":
        return <Dumbbell className={classStyle} />;
      default:
        return <CheckCircle className={classStyle} />;
    }
  };

  const getActiveList = () => {
    if (selectedCategory === "men") return menActivities;
    if (selectedCategory === "women") return womenActivities;
    if (selectedCategory === "kids") return kidsActivities;
    return [];
  };

  const handleOrderActivity = (activity: ActivityItem) => {
    const categoryName = 
      selectedCategory === "men" ? "الرجال" : 
      selectedCategory === "women" ? "السيدات" : "الأطفال";

    const text = `السلام عليكم كابتن VIP GYM، أود الاستفسار والاشتراك في الكلاس الرياضي التالي:
    
🏆 النشاط المختار: ${activity.title}
👥 الفئة الرياضية: قسم ${categoryName}

أرجو التواصل لتوضيح مواعيد الكلاسات، الرسوم المالية، وتفعيل الاشتراك في أسرع وقت. شكراً لكم! 🥇`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/201007555737?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="facilities" className="py-12 bg-surface-lowest relative overflow-hidden text-right" dir="rtl">
      {/* Visual Ambient Light */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">القسم الخامس • 05</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-1 mb-3">
            الأنشطة والرياضات <span className="neon-gradient-text uppercase">المتخصصة</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-sans max-w-lg mx-auto">
            نوفر مجموعة واسعة من الكلاسات الرياضية المتخصصة لكل من الرجال والسيدات والأطفال بمستوى احترافي عالي وتكنيك رياضي سليم.
          </p>
          <div className="h-1 w-16 bg-secondary mx-auto rounded-full mt-3.5" />
        </div>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            /* 1. Category Ask Selection (Landing Style) */
            <motion.div
              key="category-ask"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <p className="text-stone-300 font-display font-bold text-sm sm:text-base">
                  💡 فضلاً، حدد الفئة المناسبة لاستعراض الأنشطة والبرامج التدريبية المخصصة:
                </p>
              </div>

              {/* Grid of 3 Category Buttons */}
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* 1. Men Card */}
                <button
                  id="category-select-men"
                  onClick={() => setSelectedCategory("men")}
                  className="bg-[#121618] border border-stone-850 hover:border-secondary/40 rounded-2xl p-6 transition-all duration-300 group text-right flex flex-col justify-between h-56 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors" />
                  
                  <div className="space-y-3">
                    <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-xl flex items-center justify-center border border-secondary/20">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-black text-white group-hover:text-secondary transition-colors">
                      قسم الرجال (Men)
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed font-sans">
                      كمال الأجسام، بناء وتضخيم العضلات، الكروس فيت الشاق، وتأهيل الكليات العسكرية المتقدم.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-secondary font-display font-bold pt-3">
                    <span>استعراض كلاسات الرجال</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 2. Women Card */}
                <button
                  id="category-select-women"
                  onClick={() => setSelectedCategory("women")}
                  className="bg-[#121618] border border-stone-850 hover:border-pink-500/40 rounded-2xl p-6 transition-all duration-300 group text-right flex flex-col justify-between h-56 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors" />
                  
                  <div className="space-y-3">
                    <div className="bg-pink-500/10 text-pink-400 w-12 h-12 rounded-xl flex items-center justify-center border border-pink-500/20">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-black text-white group-hover:text-pink-400 transition-colors">
                      قسم السيدات (Women)
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed font-sans">
                      الرشاقة واللياقة، زومبا وأيروبكس حماسية، يوجا وتأهيل بدني بخصوصية نسائية مطلقة 100%.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-pink-400 font-display font-bold pt-3">
                    <span>استعراض كلاسات السيدات</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 3. Kids Card */}
                <button
                  id="category-select-kids"
                  onClick={() => setSelectedCategory("kids")}
                  className="bg-[#121618] border border-stone-850 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 group text-right flex flex-col justify-between h-56 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                  
                  <div className="space-y-3">
                    <div className="bg-cyan-500/10 text-cyan-400 w-12 h-12 rounded-xl flex items-center justify-center border border-cyan-500/20">
                      <Smile className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-black text-white group-hover:text-cyan-400 transition-colors">
                      قسم الأطفال (Kids)
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed font-sans">
                      تأسيس حركي سليم للرشاقة، كاراتيه ودفاع عن النفس، وبرامج تفريغ فرط الحركة بأمان وسعادة.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-display font-bold pt-3">
                    <span>استعراض كلاسات الأطفال</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                  </div>
                </button>

              </div>
            </motion.div>
          ) : (
            /* 2. Selected Category Grid View */
            <motion.div
              key="activities-list"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Filter Top Switcher / Segmented Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111416] p-3 rounded-2xl border border-stone-850 max-w-4xl mx-auto">
                {/* Back button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-1.5 text-xs font-display font-bold text-stone-400 hover:text-white transition-colors bg-stone-900 border border-stone-800 px-3.5 py-2 rounded-xl cursor-pointer self-stretch sm:self-auto text-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 shrink-0" />
                  <span>تغيير الفئة الرياضية</span>
                </button>

                {/* Segment tabs */}
                <div className="flex gap-1.5 w-full sm:w-auto" dir="rtl">
                  {[
                    { id: "men", label: "قسم الرجال", color: "border-secondary text-secondary bg-secondary/15" },
                    { id: "women", label: "قسم السيدات", color: "border-pink-500/40 text-pink-400 bg-pink-500/15" },
                    { id: "kids", label: "قسم الأطفال", color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/15" },
                  ].map((cat) => {
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id as any)}
                        className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-display font-bold transition-all border cursor-pointer ${
                          isActive
                            ? `${cat.color} font-black`
                            : "bg-stone-900/60 text-stone-400 border-stone-850 hover:border-stone-700"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Activities Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {getActiveList().map((activity, idx) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-[#131618] border border-stone-850 rounded-2xl text-right flex flex-col justify-between hover:border-secondary/20 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Card Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-stone-900 border-b border-stone-850">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131618] via-transparent to-black/40" />
                      
                      {/* Badge overlay */}
                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[10px] font-bold font-sans bg-stone-950/95 text-secondary border border-stone-800 px-2.5 py-1 rounded shadow-lg">
                          {activity.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 justify-start">
                          <div className="bg-[#191c1e] w-8 h-8 rounded-lg flex items-center justify-center border border-stone-800">
                            {getActivityIcon(activity.icon)}
                          </div>
                          <h4 className="text-sm sm:text-base font-display font-extrabold text-white group-hover:text-secondary transition-colors line-clamp-1">
                            {activity.title}
                          </h4>
                        </div>

                        {/* Description */}
                        <p className="text-stone-400 text-xs leading-relaxed line-clamp-2 mb-4">
                          {activity.desc}
                        </p>
                      </div>

                      {/* Card Action & Footer */}
                      <div className="mt-4 pt-3 border-t border-stone-850/60 flex items-center justify-between gap-1.5 text-xs text-stone-500 font-sans">
                        <button
                          onClick={() => setSelectedActivity(activity)}
                          className="text-secondary hover:text-[#c2c820] text-[11px] font-display font-black flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>معرفة التفاصيل</span>
                          <ArrowLeft className="w-3.5 h-3.5 shrink-0 transform -rotate-45 group-hover:translate-x-[-2px] transition-transform" />
                        </button>

                        <div className="flex items-center gap-1">
                          <span className="text-[9px] text-stone-500">متاح الآن</span>
                          <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Modern Interactive Details Modal / Popup (RTL aligned) */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
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
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-black/50" />
                
                {/* Close Button on image */}
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 left-4 p-2 bg-black/70 border border-stone-800/80 text-stone-400 hover:text-white rounded-lg transition-all cursor-pointer backdrop-blur-sm"
                  title="إغلاق"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Tag Overlay */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-[10px] sm:text-xs font-display font-black px-3 py-1 bg-stone-950 text-secondary border border-stone-800 rounded shadow-lg">
                    {selectedActivity.tag}
                  </span>
                </div>
              </div>

              {/* Popup Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Title */}
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-black text-white">
                    {selectedActivity.title}
                  </h3>
                  <p className="text-stone-500 text-[10px] font-sans mt-0.5">
                    البرامج الرياضية التخصصية • VIP GYM HEALTH CLUB
                  </p>
                </div>

                {/* Detailed Description */}
                <div className="bg-[#15191a] border border-stone-850 p-4 rounded-xl text-stone-300 text-xs sm:text-sm font-sans leading-relaxed text-right">
                  {selectedActivity.detailedDesc}
                </div>

                {/* Benefits checklist */}
                <div className="space-y-3 text-right">
                  <h4 className="text-xs sm:text-sm font-display font-black text-white flex items-center gap-1.5 justify-start">
                    <Sparkles className="w-4 h-4 text-secondary shrink-0" />
                    <span>أهداف وعناصر التطور المحققة:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedActivity.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-stone-400 text-xs sm:text-sm text-right">
                        <Check className="w-4.5 h-4.5 text-secondary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer actions */}
                <div className="pt-4 border-t border-stone-800/60 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-4 py-2.5 rounded-xl border border-stone-850 text-stone-400 hover:text-white hover:bg-stone-900 text-xs font-display font-bold transition-all cursor-pointer"
                  >
                    رجوع للأقسام
                  </button>
                  <button
                    onClick={() => handleOrderActivity(selectedActivity)}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba56] text-black font-display font-black text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-emerald-950/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black transform rotate-180" />
                    <span>طلب انضمام واستفسار عبر WhatsApp 💬</span>
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
