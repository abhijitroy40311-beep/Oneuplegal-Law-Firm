import { Star, MapPin, Phone, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function TrustBar() {
  const verifiedStats = [
    {
      id: 'rating',
      icon: Star,
      iconColor: 'text-amber-500 fill-amber-500',
      bgColor: 'bg-amber-50',
      title: `${firmData.rating} Google Rating`,
      subtitle: `${firmData.reviewCount} Verified Reviews`,
    },
    {
      id: 'location',
      icon: MapPin,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'Sector 19, Chandigarh',
      subtitle: 'Office & Local Consultation',
    },
    {
      id: 'consultation',
      icon: Phone,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      title: 'Phone Consultation Available',
      subtitle: 'Direct WhatsApp & Calling',
    },
    {
      id: 'hours',
      icon: Clock,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: firmData.mapsStatus,
      subtitle: 'Daily Operating Hours',
    },
  ];

  return (
    <section 
      id="trust-bar" 
      aria-label="Verified Business Information"
      className="bg-white border-y border-slate-200/90 shadow-sm relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {verifiedStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className={`flex items-center gap-4 ${index !== 0 ? 'sm:pl-6' : ''} ${index !== 0 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
