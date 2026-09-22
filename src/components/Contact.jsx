import { MessageCircle, Phone, Clock, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Oneuplegal Law Firm"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Container */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 inline-block mb-4">
            Direct Legal Communication
          </span>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Speak With Oneuplegal Law Firm
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            For legal enquiries, contact the firm directly by phone or WhatsApp. 
            Direct communication allows for prompt, personalized discussion without intermediaries.
          </p>
        </div>

        {/* Large Conversion Buttons Block */}
        <div className="max-w-3xl mx-auto bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            
            {/* Primary Action 1: WhatsApp */}
            <a
              id="contact-whatsapp-main-btn"
              href={firmData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-900/40 group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 fill-white/20 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white mb-1">
                WhatsApp the Firm
              </span>
              <span className="text-xs sm:text-sm text-emerald-100 font-medium">
                Tap to chat directly on WhatsApp
              </span>
              <span className="mt-3 text-[11px] font-mono bg-emerald-700/80 px-2.5 py-1 rounded text-white">
                {firmData.phone}
              </span>
            </a>

            {/* Primary Action 2: Phone Call */}
            <a
              id="contact-call-main-btn"
              href={firmData.phoneLink}
              className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-all shadow-lg hover:shadow-amber-950/40 group focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              <div className="w-14 h-14 rounded-full bg-slate-900/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 fill-slate-900/20 text-slate-950" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">
                Call the Firm
              </span>
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                Tap to call {firmData.phone}
              </span>
              <span className="mt-3 text-[11px] font-mono bg-amber-500/80 px-2.5 py-1 rounded text-slate-950 font-semibold">
                Instant Telephone Connection
              </span>
            </a>

          </div>

          {/* Practical Contact Info Strip */}
          <div className="pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Operating Hours</span>
                <span>Open · Closes 11:00 PM</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Office Address</span>
                <span>Sector 19, Chandigarh</span>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Client Standards</span>
                <span>LGBTQ+ Friendly & Accessible</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
