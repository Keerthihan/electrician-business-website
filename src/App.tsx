import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Shared layout — kept eager so they paint on first render
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Home is eager — eliminates extra round-trips for FCP/LCP on the landing page
import Home from './pages/Home';

// All other pages are lazy — only loaded when actually visited
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Areas = lazy(() => import('./pages/Areas'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const Emergency = lazy(() => import('./pages/Emergency'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// CSS-only fade-in — replaces motion/react to remove 96 KB from initial bundle.
// When `key` changes React unmounts/remounts the div, restarting the CSS animation.
function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="flex-1 animate-fade-in">
      {children}
    </div>
  );
}

// Full-height fallback prevents the page jumping from 0 → full height (CLS).
function PageFallback() {
  return <div className="min-h-screen bg-slate-50" aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-900">
        <ScrollToTop />
        <WhatsAppButton />
        <Navbar />

        <main className="grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<AnimatedPageWrapper><Home /></AnimatedPageWrapper>} />
              <Route path="/services" element={<AnimatedPageWrapper><Services /></AnimatedPageWrapper>} />
              <Route path="/about" element={<AnimatedPageWrapper><About /></AnimatedPageWrapper>} />
              <Route path="/areas" element={<AnimatedPageWrapper><Areas /></AnimatedPageWrapper>} />
              <Route path="/gallery" element={<AnimatedPageWrapper><Gallery /></AnimatedPageWrapper>} />
              <Route path="/testimonials" element={<AnimatedPageWrapper><Testimonials /></AnimatedPageWrapper>} />
              <Route path="/contact" element={<AnimatedPageWrapper><Contact /></AnimatedPageWrapper>} />
              <Route path="/emergency" element={<AnimatedPageWrapper><Emergency /></AnimatedPageWrapper>} />
              <Route path="/privacy-policy" element={<AnimatedPageWrapper><PrivacyPolicy /></AnimatedPageWrapper>} />
              <Route path="/cookie-policy" element={<AnimatedPageWrapper><CookiePolicy /></AnimatedPageWrapper>} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
