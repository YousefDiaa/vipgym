import { contactInfo } from "../data";
import { Phone, MapPin, MessageSquare, Compass, Facebook, Instagram, Youtube, Send, Info, Star, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function FooterAndContact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface-lowest border-t border-stone-900 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main info & Contacts */}
          <div className="lg:col-span-5 space-y-8 text-right">
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary font-bold font-mono">تواصل معنا الآن</span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white mt-2 mb-4">
                بيانات الاتصال <span className="neon-gradient-text uppercase">والموقع الجغرافي</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base font-sans leading-relaxed">
                جاهزون دائمًا لاستقبال استفساراتكم والرد عليها على مدار الساعة. تواصل معنا بأي من الوسائل المتاحة أو تفضل بزيارتنا في مقر الجيم.
              </p>
            </div>

            {/* Quick click numbers */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#191c1e] p-4 rounded border border-stone-800 hover:border-secondary/20 transition-all">
                <span className="block text-xs text-stone-400 mb-1.5 font-bold">الهواتف الخلوية السريعة:</span>
                <div className="space-y-1">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-secondary hover:text-white font-mono font-bold text-sm transition-colors py-1 hover:underline"
                    >
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#191c1e] p-4 rounded border border-stone-800 hover:border-secondary/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="block text-xs text-stone-400 mb-1.5 font-bold">الخط الأرضي:</span>
                  <a
                    href={`tel:${contactInfo.landline}`}
                    className="flex items-center gap-2 text-stone-200 hover:text-secondary font-mono font-semibold text-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>{contactInfo.landline}</span>
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-800/80">
                  <span className="block text-xs text-stone-400 mb-1 font-bold">رقم الشكاوى الفوري (واتساب):</span>
                  <a
                    href={`https://wa.me/20${contactInfo.whatsappComplaints}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 font-mono font-bold text-xs transition-colors hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>{contactInfo.whatsappComplaints}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons handle */}
            <div className="flex items-center gap-4 bg-[#191c1e] p-4 rounded border border-stone-800">
              <span className="text-sm font-bold text-stone-300">تابع حساباتنا الموحدة:</span>
              <span className="text-xs font-mono font-black text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                {contactInfo.socialHandle}
              </span>
              <div className="flex items-center gap-2 mr-auto">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-secondary hover:text-black rounded transition-all text-stone-300 cursor-pointer"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-secondary hover:text-black rounded transition-all text-stone-300 cursor-pointer"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-stone-800 hover:bg-secondary hover:text-black rounded transition-all text-stone-300 cursor-pointer"
                  aria-label="Youtube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Location details & Map Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-xl border border-stone-800">
              <h3 className="text-xl font-display font-black text-white mb-4 flex items-center gap-2 justify-end">
                <span>المقر الرئيسي والعنوان</span>
                <MapPin className="text-secondary w-5 h-5" />
              </h3>

              <div className="text-right space-y-4 mb-6">
                <p className="text-stone-200 text-sm leading-relaxed font-sans font-medium">
                  {contactInfo.address}
                </p>

                {/* Landmarks list */}
                <div className="space-y-2 pt-2 border-t border-stone-800/80">
                  <span className="text-xs text-stone-400 block font-bold">علامات استرشادية لسهولة الوصول:</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {contactInfo.landmarks.map((mark, idx) => (
                      <span
                        key={idx}
                        className="bg-[#191c1e] border border-stone-800 px-3 py-1.5 rounded text-xs text-stone-300 font-sans font-medium flex items-center gap-1.5"
                      >
                        <Compass className="w-3 h-3 text-secondary" />
                        {mark}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic - High-End UI with directions trigger */}
              <div className="relative w-full h-56 bg-stone-900 rounded-xl overflow-hidden border border-stone-800 group">
                <div className="absolute inset-0 bg-stone-950/20 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                  alt="Minya Corniche Map Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-20 filter grayscale"
                />

                {/* Custom modern styled overlay representation of map */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-20 text-center">
                  <div className="w-12 h-12 bg-secondary/20 border border-secondary rounded-full flex items-center justify-center mb-3 neon-glow">
                    <MapPin className="w-6 h-6 text-secondary animate-bounce" />
                  </div>
                  <span className="block text-white font-display font-black text-sm mb-1">خريطة الموقع الجغرافي المباشر</span>
                  <span className="block text-stone-400 text-xs mb-4">اضغط على الزر أدناه للانتقال الفوري إلى خرائط جوجل</span>
                  <a
                    href="https://maps.google.com/?q=نادي+المنيا+الرياضي+كورنيش+النيل"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-[#c2c820] text-black font-extrabold text-xs py-2 px-5 rounded inline-flex items-center gap-1.5 transition-all shadow-md hover:scale-105"
                  >
                    <span>فتح الموقع في خرائط Google</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* QR Coordinate and Social codes */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-800/80">
                <div className="bg-[#191c1e] p-4 rounded border border-stone-850 text-right flex items-center gap-4">
                  <div className="w-14 h-14 bg-white p-1 rounded shrink-0 flex items-center justify-center">
                    {/* Generative representation of QR Code */}
                    <div className="w-full h-full grid grid-cols-4 gap-0.5 bg-stone-950 p-0.5">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            (i * 7) % 3 === 0 || i === 0 || i === 3 || i === 12 || i === 15 ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white mb-0.5">كود الموقع الجغرافي</span>
                    <span className="block text-[11px] text-stone-400 leading-tight">امسح الكاميرا للوصول السريع لموقع الجيم على الخريطة.</span>
                  </div>
                </div>

                <div className="bg-[#191c1e] p-4 rounded border border-stone-850 text-right flex items-center gap-4">
                  <div className="w-14 h-14 bg-white p-1 rounded shrink-0 flex items-center justify-center">
                    {/* Generative representation of Social QR */}
                    <div className="w-full h-full grid grid-cols-4 gap-0.5 bg-stone-950 p-0.5">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            (i * 11) % 3 === 0 || i === 0 || i === 3 || i === 12 ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white mb-0.5">حسابات التواصل QR</span>
                    <span className="block text-[11px] text-stone-400 leading-tight">امسح الكود للوصول الموحد لصفحتنا في فيسبوك وإنستجرام.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outer credit bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between text-stone-500 text-xs text-center md:text-right gap-4">
          <div>
            <p className="font-sans">جميع الحقوق محفوظة &copy; {currentYear} لـ VIP GYM في نادي المنيا الرياضي.</p>
          </div>
          <div className="flex items-center gap-1">
            <span>تطوير وإدارة النادي الرياضي</span>
            <Star className="w-3 h-3 text-secondary fill-secondary" />
            <span>نادي المنيا الرياضي</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
