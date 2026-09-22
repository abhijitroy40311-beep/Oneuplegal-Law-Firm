import { FileText, Scale, Briefcase, Compass, MessageCircle, Phone, ArrowUpRight, Info } from 'lucide-react';
import { firmData } from '../data/firmData.js';

// Map icon names from data to Lucide icons
const iconMap = {
  FileText,
  Scale,
  Briefcase,
  Compass,
};

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Legal Services & Consultation"
      className="py-16 md:py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200/60 inline-block mb-3">
            Consultation Scope
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Legal Services & Consultation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Oneuplegal Law Firm offers structured legal consultations and procedural discussions. 
            Connect with the firm to discuss the specifics of your matter.
          </p>
        </div>

        {/* Data-Driven Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {firmData.services.map((service) => {
            const IconComponent = iconMap[service.icon] || FileText;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-slate-50/70 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-heading text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <a 
                    href={firmData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors focus:outline-none focus-visible:underline"
                  >
                    <span>Discuss via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Compliance Notice as required */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-3.5 text-xs sm:text-sm text-slate-600">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800 block mb-0.5">Note on Practice Areas</span>
            <p>
              Specific areas of practice and documentation requirements can be discussed and confirmed directly with the law firm. 
              Please reach out via phone or WhatsApp to understand how the firm may assist with your individual circumstances.
            </p>
          </div>
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-700 mb-4 font-medium">
            Have questions regarding an upcoming legal matter or document?
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href={firmData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Your Matter</span>
            </a>
            <a
              href={firmData.phoneLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Enquiries</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
