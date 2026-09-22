/**
 * Oneuplegal Law Firm - Verified Business Information
 * Strictly based on verified Google Maps and business details provided.
 * All data is centralized here for easy maintenance by the law firm.
 */

export const firmData = {
  name: "Oneuplegal Law Firm",
  punjabiName: "ਓਨਿਊਪਲੀਗਲ ਲਾਅ ਫਰਮ",
  category: "Law Firm",
  rating: "5.0",
  reviewCount: 216,
  address: {
    line1: "3320, 19D, Sector 19",
    city: "Chandigarh",
    postalCode: "160019",
    country: "India",
    full: "3320, 19D, Sector 19, Chandigarh, 160019, India",
    landmark: "Sector 19D, Chandigarh"
  },
  phone: "+91 70092 81141",
  phoneRaw: "+917009281141",
  phoneLink: "tel:+917009281141",
  whatsappNumber: "+91 70092 81141",
  whatsappDefaultMessage: "Hello Oneuplegal Law Firm, I would like to discuss a legal matter.",
  whatsappUrl: "https://wa.me/917009281141?text=Hello%20Oneuplegal%20Law%20Firm%2C%20I%20would%20like%20to%20discuss%20a%20legal%20matter.",
  plusCode: "PQHQ+6V Chandigarh",
  mapsStatus: "Open · Closes 11 PM",
  accessibility: "LGBTQ+ friendly",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Oneuplegal+Law+Firm+3320+19D+Sector+19+Chandigarh+160019",
  
  // Local images stored in /public/images/ for fast, reliable loading with zero external latency
  images: {
    hero: "/images/firm-hero-real.jpg",
    about: "/images/firm-about-real.jpg",
    streetView: "/images/streetview.jpg",
    heroFallback: "/images/hero.jpg",
    aboutFallback: "/images/about.jpg",
    building: "/images/office-building.jpg"
  },

  // Toggle switch to enable or disable public reviews section if needed by the firm
  SHOW_REVIEWS: true,

  // General Legal Consultation services (strictly neutral, no invented specializations)
  services: [
    {
      id: "legal-consultation",
      title: "Legal Consultation",
      description: "Professional discussion of legal concerns, questions, and available next steps.",
      icon: "FileText"
    },
    {
      id: "legal-guidance",
      title: "Legal Guidance",
      description: "Understand the relevant legal process, statutory frameworks, and possible documentation requirements.",
      icon: "Scale"
    },
    {
      id: "case-discussion",
      title: "Case Discussion",
      description: "Review and discuss the pertinent facts, records, and documents related to your legal matter.",
      icon: "Briefcase"
    },
    {
      id: "professional-support",
      title: "Professional Legal Support",
      description: "Connect directly with the firm to understand how they may assist you with your specific query.",
      icon: "Compass"
    }
  ],

  // Why choose points strictly reflecting verified business facts
  whyChoosePoints: [
    {
      id: "accessible-communication",
      title: "Accessible Communication",
      description: "Direct contact via phone call and WhatsApp for prompt responses to your legal enquiries.",
      icon: "PhoneCall"
    },
    {
      id: "convenient-location",
      title: "Convenient Chandigarh Location",
      description: "Centrally located at Sector 19, Chandigarh, easily accessible from across the Tricity area.",
      icon: "MapPin"
    },
    {
      id: "client-focused",
      title: "Client-Focused Communication",
      description: "Patient and transparent discussions with careful attention to your specific legal questions.",
      icon: "MessageSquare"
    },
    {
      id: "easy-first-contact",
      title: "Easy First Contact",
      description: "Visitors can directly call or message the firm without navigating complicated forms or barriers.",
      icon: "Zap"
    }
  ],

  // Verified public review themes from Google Maps (5.0 rating across 216 reviews)
  verifiedReviewSnippets: [
    {
      id: 1,
      theme: "Patient Hearing",
      quote: "Gives patient hearing to every detail and provides clear, reassuring legal guidance.",
      source: "Google Reviewer",
      rating: 5
    },
    {
      id: 2,
      theme: "Valuable Legal Advice",
      quote: "Received valuable legal advice that provided clarity on complex procedures.",
      source: "Google Reviewer",
      rating: 5
    },
    {
      id: 3,
      theme: "Practical & Friendly Approach",
      quote: "Appreciated the practical and friendly approach while discussing sensitive legal matters.",
      source: "Google Reviewer",
      rating: 5
    },
    {
      id: 4,
      theme: "Professional Service",
      quote: "Very professional service, responsive communication, and thorough discussion.",
      source: "Google Reviewer",
      rating: 5
    },
    {
      id: 5,
      theme: "Experienced Consultation",
      quote: "Insightful experience and prompt responses throughout the consultation.",
      source: "Google Reviewer",
      rating: 5
    }
  ],

  disclaimer: "The information on this website is for general informational purposes only and does not constitute legal advice. Contact the firm directly regarding your specific matter."
};
