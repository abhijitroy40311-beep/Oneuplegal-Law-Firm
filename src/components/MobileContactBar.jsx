import { MessageCircle, Phone } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function MobileContactBar() {
  return (
    <aside
      id="mobile-persistent-bar"
      aria-label="Quick Mobile Contact Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Mobile Action */}
        <a
          id="mobile-bottom-whatsapp"
          href={firmData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="WhatsApp Oneuplegal Law Firm"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </a>

        {/* Call Mobile Action */}
        <a
          id="mobile-bottom-call"
          href={firmData.phoneLink}
          className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-400 active:bg-amber-500 text-slate-950 font-bold text-sm shadow-md transition-transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          aria-label={`Call Oneuplegal Law Firm at ${firmData.phone}`}
        >
          <Phone className="w-4 h-4 fill-slate-950/20" />
          <span>Call Now</span>
        </a>
      </div>
    </aside>
  );
}
