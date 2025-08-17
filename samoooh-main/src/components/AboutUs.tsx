import React, { useEffect, useState } from 'react';
import { X, Facebook, Instagram, Phone, MessageCircle, MapPin, Copy, Check } from 'lucide-react';

interface AboutUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const phoneNumber = '01069616550';
  const whatsappLink = 'https://wa.me/201069616550';

  const socials = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1AyHkwjhzx/', color: 'text-blue-400', label: 'Facebook 1' },
    { icon: Facebook, url: 'https://www.facebook.com/share/16kTx6EXUa/', color: 'text-blue-500', label: 'Facebook 2' },
    { icon: Instagram, url: 'https://www.instagram.com/sameh.mohamed.39982/', color: 'text-pink-400', label: 'Instagram' },
    { icon: MessageCircle, url: whatsappLink, color: 'text-green-500', label: 'WhatsApp' }
  ];

  useEffect(() => {
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg overflow-y-auto overscroll-none">
      <div className="premium-card enhanced-glow relative w-full max-w-4xl mx-4 md:mx-6 p-6 md:p-8 max-h-[88vh] overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 z-10" aria-label="إغلاق">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            للتواصل
          </h2>
          <p className="text-gray-300 mt-2">نسعد بتواصلكم في أي وقت</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center overflow-y-auto max-h-[70vh] pr-1 overscroll-contain">
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src="/images/200751736_4075686949145707_5525433579295463923_n.jpg"
                alt="الأستاذ سامح"
                className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl mx-auto border border-white/20"
              />
              <div className="absolute -inset-2 rounded-2xl -z-10 opacity-30 blur-xl bg-gradient-to-tr from-blue-500/40 via-sky-400/30 to-indigo-500/40"></div>
            </div>
            <div className="mt-4 text-gray-300 text-sm">رد خلال 24 ساعة كحد أقصى</div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="text-white text-lg font-semibold">{phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <button onClick={copyPhone} className="px-3 py-2 bg-gray-800/60 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors text-sm" aria-label="نسخ رقم الهاتف">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a href={`tel:${phoneNumber}`} className="px-3 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-300 hover:bg-blue-500/30 transition-colors text-sm" aria-label="اتصال">
                    اتصال
                  </a>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 hover:bg-green-500/30 transition-colors"
              aria-label="تواصل عبر واتساب"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              واتساب مباشر
            </a>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-gray-300 text-sm mb-3 flex items-center justify-end space-x-2 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span>التواصل متاح عبر الواتساب والهاتف</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 border border-white/10 ${s.color} transition-transform hover:scale-110`}
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}