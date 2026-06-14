import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

// Shared Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Page Components
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Areas from './pages/Areas';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

// Page animation wrapper following motion/react guidelines
function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex-1"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-amber-500/20 selection:text-amber-900">
        
        {/* Reset window coordinates on route change */}
        <ScrollToTop />

        {/* Floating WhatsApp Contact Trigger */}
        <WhatsAppButton />

        {/* Navigation bar */}
        <Navbar />

        {/* Global Route Outlets content area */}
        <main className="grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <AnimatedPageWrapper>
                  <Home />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/services" 
              element={
                <AnimatedPageWrapper>
                  <Services />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/about" 
              element={
                <AnimatedPageWrapper>
                  <About />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/areas" 
              element={
                <AnimatedPageWrapper>
                  <Areas />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <AnimatedPageWrapper>
                  <Gallery />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/testimonials" 
              element={
                <AnimatedPageWrapper>
                  <Testimonials />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <AnimatedPageWrapper>
                  <Contact />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/emergency" 
              element={
                <AnimatedPageWrapper>
                  <Emergency />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/privacy-policy" 
              element={
                <AnimatedPageWrapper>
                  <PrivacyPolicy />
                </AnimatedPageWrapper>
              } 
            />
            <Route 
              path="/cookie-policy" 
              element={
                <AnimatedPageWrapper>
                  <CookiePolicy />
                </AnimatedPageWrapper>
              } 
            />
          </Routes>
        </main>

        {/* Foot information deck */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
