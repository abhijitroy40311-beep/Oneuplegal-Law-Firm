import { PhoneCall, MapPin, MessageSquare, Zap, Clock, ShieldCheck, Heart } from 'lucide-react';
import { firmData } from '../data/firmData.js';

const iconMap = {
  PhoneCall,
  MapPin,
  MessageSquare,
  Zap,
};

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      aria-label="Why Choose Oneuplegal Law Firm"
      className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative subtle ambient pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20 inline-block mb-3">
            Client-Centered Approach
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Why Contact Oneuplegal Law Firm
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Professional legal guidance grounded in accessibility, respectful consultation, and clear communication.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {firmData.whyChoosePoints.map((item) => {
            const IconComponent = iconMap[item.icon] || MessageSquare;
            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-400/60 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Standing Information Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-bold text-base mb-1">
              <span>{'★'.repeat(5)}</span>
              <span className="text-white text-sm font-semibold">5.0 on Google Maps</span>
              <span className="text-slate-400 text-xs font-normal">({firmData.reviewCount} Reviews)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Verified local law firm at Sector 19, Chandigarh. Open daily until 11:00 PM. Welcoming and LGBTQ+ friendly consultation environment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={firmData.phoneLink}
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              Call the Firm
            </a>
            <a
              href={firmData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
