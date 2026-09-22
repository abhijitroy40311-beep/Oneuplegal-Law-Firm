import { Star, MessageCircle, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Reviews() {
  if (!firmData.SHOW_REVIEWS) {
    return null;
  }

  return (
    <section
      id="reviews"
      aria-label="Client Feedback & Google Reviews"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200/60 inline-block mb-3">
            Verified Public Feedback
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Client Feedback & Public Reviews
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Verified feedback publicly recorded on Google Maps for Oneuplegal Law Firm, Sector 19, Chandigarh.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="max-w-xl mx-auto mb-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
            {firmData.rating} out of 5.0
          </div>

          <p className="text-sm font-medium text-slate-500 mb-4">
            Based on {firmData.reviewCount} public reviews on Google Maps
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Google Business Profile • Sector 19, Chandigarh</span>
          </div>
        </div>

        {/* Verified Review Themes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {firmData.verifiedReviewSnippets.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Google Maps
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  {item.theme}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-600">{item.source}</span>
                <span className="text-slate-400 text-[11px]">Verified Client Feedback</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note & Action */}
        <div className="text-center text-xs text-slate-500 max-w-xl mx-auto space-y-3">
          <p>
            * Review summaries reflect verified feedback publicly submitted to Google Maps by clients who consulted Oneuplegal Law Firm.
          </p>
          <div>
            <a
              href={firmData.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
            >
              <span>View Profile & Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
