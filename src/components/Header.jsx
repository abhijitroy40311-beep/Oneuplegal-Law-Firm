import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { firmData } from '../data/firmData.js';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Oneuplegal', href: '#why-choose' },
    ...(firmData.SHOW_REVIEWS ? [{ label: 'Reviews', href: '#reviews' }] : []),
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-800/80 py-3'
          : 'bg-slate-950 border-b border-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Punjabi Name */}
          <a
            href="#hero"
            className="group flex flex-col justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded py-0.5 max-w-[calc(100%-60px)] sm:max-w-none"
            aria-label="Oneuplegal Law Firm Homepage"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif-heading text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors whitespace-nowrap">
                ONEUPLEGAL
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 whitespace-nowrap">
                LAW FIRM
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="text-slate-200 font-medium shrink-0">{firmData.punjabiName}</span>
              <span className="text-slate-600 shrink-0">•</span>
              <span className="flex items-center gap-1 text-[11px] text-slate-300 truncate">
                <MapPin className="w-3 h-3 text-amber-400 inline shrink-0" />
                <span className="truncate">Sector 19, Chandigarh</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 focus:outline-none focus-visible:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href={firmData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Chat on WhatsApp with Oneuplegal Law Firm"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-200/20 text-white" />
              <span>WhatsApp</span>
            </a>

            <a
              id="header-call-btn"
              href={firmData.phoneLink}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              aria-label={`Call Oneuplegal Law Firm at ${firmData.phone}`}
            >
              <Phone className="w-4 h-4 fill-slate-900/20 text-slate-900" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Accessible & 44px+ Touch Target) */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-slate-950/98 backdrop-blur-lg border-b border-slate-800 px-4 pt-3 pb-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto shadow-2xl animate-in fade-in duration-200"
        >
          {/* Status info strip inside mobile drawer */}
          <div className="flex items-center justify-between py-2 px-3 mb-2 rounded-lg bg-slate-900 border border-slate-800/80 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Sector 19, Chandigarh</span>
            </span>
            <span className="text-emerald-400 font-semibold">{firmData.mapsStatus}</span>
          </div>

          <nav className="flex flex-col divide-y divide-slate-900 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-600 text-sm">›</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href={firmData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp the Firm</span>
            </a>

            <a
              href={firmData.phoneLink}
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 fill-slate-950/20" />
              <span>Call Now: {firmData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
