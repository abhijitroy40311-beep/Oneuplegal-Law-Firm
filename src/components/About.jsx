import { useState } from 'react';
import { MessageCircle, Phone, MapPin, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function About() {
  const [imgSrc, setImgSrc] = useState(firmData.images.about);

  const handleImageError = () => {
    setImgSrc(firmData.images.aboutFallback);
  };

  return (
    <section
      id="about"
      aria-label="About Oneuplegal Law Firm"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Photographic Presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative architectural accent frame */}
              <div 
                className="absolute -inset-2 bg-gradient-to-tr from-amber-200/50 to-slate-200/50 rounded-2xl transform -rotate-1 hidden sm:block" 
                aria-hidden="true"
              />

              <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-slate-200/90 group">
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  alt="Oneuplegal Law Firm office view in Sector 19, Chandigarh"
                  width="500"
                  height="400"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Photo Caption Strip */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block">Oneuplegal Law Firm</span>
                    <span className="text-slate-500">Sector 19, Chandigarh, 160019</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">
                    Verified Premises
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual & Concise About Information */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200/60 inline-block mb-4">
                Law Firm in Chandigarh
              </span>

              <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-5">
                About Oneuplegal Law Firm
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
                Oneuplegal Law Firm is a law firm located in Sector 19, Chandigarh, providing professional legal guidance and consultation.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Operating from 3320, 19D, Sector 19, the firm focuses on direct and accessible client communication. Whether you need an initial discussion regarding a legal matter or clarity on statutory processes, you can reach out directly via telephone or WhatsApp.
              </p>

              {/* Factual Information Checklist */}
              <div className="space-y-3.5 mb-8 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Centrally Situated:</strong> 3320, 19D, Sector 19, Chandigarh, 160019, India.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Accessibility:</strong> Phone calls and WhatsApp messaging for prompt communication without complex booking barriers.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Inclusive & Welcoming:</strong> Certified LGBTQ+ friendly space prioritizing professional respect and client dignity.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  id="about-whatsapp-btn"
                  href={firmData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Oneuplegal</span>
                </a>

                <a
                  id="about-call-btn"
                  href={firmData.phoneLink}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {firmData.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
