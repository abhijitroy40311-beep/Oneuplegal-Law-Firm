import { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, Star, Clock, HeartHandshake, Maximize2, X } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(firmData.images.hero);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleImageError = () => {
    // If the primary image fails, smoothly switch to the vetted fallback legal image
    setImgSrc(firmData.images.heroFallback);
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

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

          {/* Right Column: Visual Composition with Uncropped Image & Clear Numbers */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none flex flex-col">
              
              {/* Badges Bar above Image: Prevents blocking the sign board numbers */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                    5.0
                  </div>
                  <div className="flex items-center text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs text-slate-200 font-medium">216 Reviews</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-medium text-slate-200">Sector 19D, Chandigarh</span>
                </div>
              </div>

              {/* Image Frame Container - Complete 100% Uncropped View */}
              <div 
                onClick={() => setLightboxOpen(true)}
                className="relative rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl bg-slate-950 group cursor-pointer transition-all hover:border-amber-400/60"
                title="Click to view full high-resolution sign board"
              >
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  alt="Oneuplegal Law Firm sign board and office premises in Sector 19, Chandigarh"
                  width="1200"
                  height="673"
                  className="w-full h-auto aspect-[1200/673] object-contain block bg-slate-950"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 backdrop-blur-sm border border-slate-700 px-2.5 py-1 rounded-lg text-[11px] font-medium text-amber-300 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>Expand Sign</span>
                </div>
              </div>

              {/* Bottom Caption & Verification Bar: Outside the image so numbers are 100% readable */}
              <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-left flex items-center justify-between gap-3 shadow-md">
                <div>
                  <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <span>Oneuplegal Law Firm Sign Board</span>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Official premises view • Full contact details visible
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-medium py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0"
                  aria-label="View enlarged law firm board image"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Enlarge</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Ultra-Clear Inspection of the Board */}
      {lightboxOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Oneuplegal Law Firm Board"
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header with Close Button */}
            <div className="w-full flex items-center justify-between pb-3 text-white border-b border-slate-800 mb-3">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">Oneuplegal Law Firm Official Sign</h3>
                <p className="text-xs text-slate-400">Sector 19D, Chandigarh • High-Resolution View</p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close enlarged view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="w-full rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 flex items-center justify-center shadow-2xl">
              <img
                src={imgSrc}
                alt="Oneuplegal Law Firm sign board full resolution view"
                className="w-full max-h-[75vh] object-contain block"
              />
            </div>

            <p className="text-xs text-slate-400 mt-2 text-center">
              Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> or click anywhere outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
