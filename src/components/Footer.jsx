import { MessageCircle, Phone, MapPin, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Footer"
      className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-32 md:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif-heading text-xl font-bold tracking-tight text-white">
                  ONEUPLEGAL
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">
                  LAW FIRM
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4 font-normal">
                {firmData.punjabiName}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Professional legal guidance from Sector 19, Chandigarh. 
                Dedicated to accessible communication and client clarity.
              </p>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{firmData.address.full}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a 
                    href={firmData.phoneLink}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                  >
                    {firmData.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 text-slate-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 text-slate-300 transition-colors">
                  About the Firm
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 text-slate-300 transition-colors">
                  Services & Consultation
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-amber-400 text-slate-300 transition-colors">
                  Why Oneuplegal
                </a>
              </li>
              {firmData.SHOW_REVIEWS && (
                <li>
                  <a href="#reviews" className="hover:text-amber-400 text-slate-300 transition-colors">
                    Client Feedback & Reviews
                  </a>
                </li>
              )}
              <li>
                <a href="#location" className="hover:text-amber-400 text-slate-300 transition-colors">
                  Office Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 text-slate-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Immediate Contact Actions Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Direct Contact Actions
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                No complex forms or login required. Reach out directly via WhatsApp message or telephone call.
              </p>

              <div className="space-y-3">
                <a
                  id="footer-whatsapp-btn"
                  href={firmData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Oneuplegal</span>
                </a>

                <a
                  id="footer-call-btn"
                  href={firmData.phoneLink}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {firmData.phone}</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 self-start inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-300 min-h-[44px] py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Legal Disclaimer Section as required */}
        <div className="pt-8 pb-4 text-xs text-slate-400 leading-relaxed">
          <p className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-slate-300">
            <strong className="text-amber-300 font-semibold block mb-1">
              General Informational Disclaimer:
            </strong>
            {firmData.disclaimer} As per the Bar Council of India rules, this website does not solicit work or advertise. It provides verified public contact and factual location information for Oneuplegal Law Firm, Chandigarh.
          </p>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Oneuplegal Law Firm. All rights reserved.</p>
          <p>Sector 19, Chandigarh, 160019, India • Google Plus Code: {firmData.plusCode}</p>
        </div>

      </div>
    </footer>
  );
}
