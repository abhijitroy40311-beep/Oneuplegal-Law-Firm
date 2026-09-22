import { useState } from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, ExternalLink, Compass } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Location() {
  const [streetViewSrc, setStreetViewSrc] = useState(firmData.images.streetView);
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'street'

  const mapEmbedUrl = `https://maps.google.com/maps?q=3320,+19D,+Sector+19,+Chandigarh,+160019&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="location"
      aria-label="Firm Location & Directions"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200/60 inline-block mb-3">
            Premises in Chandigarh
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Office Location & Directions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently situated in Sector 19, Chandigarh. Plan your visit or get in touch before arriving.
          </p>
        </div>

        {/* 2-Column Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-300 text-xs font-medium mb-6">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Sector 19, Chandigarh</span>
              </div>

              <h3 className="font-serif-heading text-2xl font-bold text-white mb-1">
                {firmData.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-normal">
                {firmData.punjabiName}
              </p>

              {/* Physical Address */}
              <div className="space-y-4 text-sm text-slate-300 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Street Address:</span>
                    <span>{firmData.address.line1}</span>
                    <span className="block">{firmData.address.city}, {firmData.address.postalCode}, {firmData.address.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Google Plus Code:</span>
                    <span className="font-mono text-xs text-amber-300 bg-slate-800 px-2 py-0.5 rounded">
                      {firmData.plusCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hours of Operation:</span>
                    <span className="text-emerald-400 font-medium">{firmData.mapsStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location CTAs */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                id="location-directions-btn"
                href={firmData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 fill-slate-900/20" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={firmData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={firmData.phoneLink}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Map & Street View Area */}
          <div className="lg:col-span-7 flex flex-col">
            {/* View Selector Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div role="tablist" aria-label="Location views" className="flex items-center gap-2 text-xs font-medium">
                <button
                  type="button"
                  role="tab"
                  id="tab-map"
                  aria-selected={activeTab === 'map'}
                  aria-controls="panel-map"
                  onClick={() => setActiveTab('map')}
                  className={`min-h-[38px] px-3.5 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeTab === 'map'
                      ? 'bg-slate-900 text-white font-semibold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Interactive Map
                </button>
                <button
                  type="button"
                  role="tab"
                  id="tab-street"
                  aria-selected={activeTab === 'street'}
                  aria-controls="panel-street"
                  onClick={() => setActiveTab('street')}
                  className={`min-h-[38px] px-3.5 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeTab === 'street'
                      ? 'bg-slate-900 text-white font-semibold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Street View Reference
                </button>
              </div>

              <a
                href={firmData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 font-semibold hover:underline inline-flex items-center gap-1 py-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Container */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              {activeTab === 'map' ? (
                <div id="panel-map" role="tabpanel" aria-labelledby="tab-map" className="w-full h-full min-h-[350px] sm:min-h-[420px]">
                  <iframe
                    title="Oneuplegal Law Firm Location Map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    className="w-full h-full min-h-[350px] sm:min-h-[420px] border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div id="panel-street" role="tabpanel" aria-labelledby="tab-street" className="w-full h-full min-h-[350px] sm:min-h-[420px] relative bg-slate-900 flex flex-col justify-end">
                  <img
                    src={streetViewSrc}
                    onError={() => setStreetViewSrc(firmData.images.heroFallback)}
                    alt="Street view reference of Oneuplegal Law Firm Sector 19 Chandigarh"
                    width="600"
                    height="420"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 p-4 bg-slate-950/80 backdrop-blur-sm text-white text-xs border-t border-slate-800">
                    <span className="font-semibold text-amber-300 block">Sector 19D Street View Reference</span>
                    <span className="text-slate-300">Panoid reference from Google Street View database</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
