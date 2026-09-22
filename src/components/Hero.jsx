import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Star, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(firmData.images.hero);

  const handleImageError = () => {
    // If the Google CDN URL is blocked or expired, smoothly switch to the vetted fallback legal image
    setImgSrc(firmData.images.heroFallback);
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Eyebrow / Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-amber-300 text-xs font-medium max-w-full mb-6 shadow-sm overflow-hidden whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
              <span className="uppercase tracking-wider font-semibold shrink-0">Oneuplegal Law Firm</span>
              <span className="text-slate-500 shrink-0">•</span>
              <span className="text-slate-300 truncate">Sector 19, Chandigarh</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-6">
              Legal Guidance With <br className="hidden sm:inline" />
              <span className="text-amber-200">Clarity and Confidence</span>
            </h1>

            {/* Supporting Copy (strictly non-promotional) */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Oneuplegal Law Firm provides professional legal guidance from Sector 19, Chandigarh. 
              Connect directly with the firm to discuss your legal concerns with personal attention and transparent communication.
            </p>

            {/* Action Buttons: WhatsApp & Call */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                id="hero-whatsapp-cta"
                href={firmData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp the Firm</span>
              </a>

              <a
                id="hero-call-cta"
                href={firmData.phoneLink}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg text-base font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-all shadow-lg hover:shadow-amber-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <Phone className="w-5 h-5 fill-slate-950/20" />
                <span>Call {firmData.phone}</span>
              </a>
            </div>

            {/* Quick Verified Attributes Row */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-amber-400/10 text-amber-400 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">5.0 Rating</div>
                  <div className="text-slate-300">216 Google Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-emerald-400/10 text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Open Today</div>
                  <div className="text-slate-300">Closes 11:00 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-sky-400/10 text-sky-400 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Inclusive Space</div>
                  <div className="text-slate-300">LGBTQ+ Friendly</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Real Image & Floating Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  alt="Oneuplegal Law Firm office and consultation premises in Sector 19, Chandigarh"
                  width="600"
                  height="400"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Image Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-left">
                  <div className="text-xs font-semibold text-amber-300">Oneuplegal Law Firm Premises</div>
                  <div className="text-[11px] text-slate-300">Sector 19D, Chandigarh, 160019</div>
                </div>
              </div>

              {/* Floating Verified Trust Pill */}
              <div className="absolute top-3 right-3 sm:-top-4 sm:-right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                  5.0
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <div className="text-[10px] text-slate-200 font-medium">216 Google Reviews</div>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute bottom-3 left-3 sm:-bottom-4 sm:-left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left text-xs">
                  <span className="font-semibold text-white block">Sector 19, Chandigarh</span>
                  <span className="text-[10px] text-slate-300">Plus Code: {firmData.plusCode}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
