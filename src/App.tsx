import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Reviews from './components/Reviews.jsx';
import Location from './components/Location.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* Accessible Skip to Content Link for keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-2xl focus:ring-2 focus:ring-slate-950"
      >
        Skip to main content
      </a>

      {/* Sticky Header with Desktop & Mobile Navigation */}
      <Header />

      {/* Main Multi-Section Homepage */}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChoose />
        <Reviews />
        <Location />
        <Contact />
      </main>

      {/* Modern Legal Footer */}
      <Footer />

      {/* Mobile-Only Persistent Action Bar (WhatsApp | Call Now) */}
      <MobileContactBar />
    </div>
  );
}

