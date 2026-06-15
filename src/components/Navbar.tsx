import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconRenderer from './IconRenderer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection to trigger backdrop blur and border styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Areas', path: '/areas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Emergency', path: '/emergency', highlight: true },
  ];

  const getLinkClass = (path: string, isMobile = false, highlight?: boolean) => {
    const isActive = location.pathname === path;
    const base = isMobile 
      ? 'block px-4 py-3 rounded-xl font-semibold transition text-base' 
      : 'font-medium transition text-sm py-1.5 px-4 rounded-lg relative';
    
    if (highlight) {
      return isActive 
        ? 'bg-red-600 text-white font-bold' 
        : 'text-red-600 hover:bg-red-50 bg-red-50/50 font-bold';
    }

    if (isActive) {
      return isMobile 
        ? 'bg-amber-500 text-white font-bold' 
        : 'text-amber-500 font-semibold bg-amber-50/20';
    }

    return isMobile
      ? 'text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium'
      : 'text-slate-600 hover:text-amber-500 hover:bg-slate-50';
  };

  return (
    <header 
      id="main-navigation-header"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-white shadow-sm border-b border-slate-100 py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link 
            id="nav-logo" 
            to="/" 
            className="flex items-center space-x-2 shrink-0 group focus:outline-none"
          >
            <div className="bg-amber-500 text-white rounded-xl p-1.5 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <IconRenderer name="Zap" className="h-5 w-5 fill-white" />
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-slate-950 tracking-tight flex items-center">
              PowerSafe <span className="text-amber-500 ml-1.5 font-bold text-xs tracking-wider uppercase border border-amber-500/30 px-1.5 py-0.5 rounded-md bg-amber-500/5">Electrical</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link 
                id={`nav-link-desktop-${link.path.replace('/', '') || 'home'}`}
                key={link.path} 
                to={link.path} 
                className={getLinkClass(link.path, false, link.highlight)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call CTA Button & Hamburger */}
          <div className="flex items-center space-x-4">
            <a 
              id="header-call-cta"
              href="tel:+447700900077" 
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-amber-500/10 transition active:scale-95 text-sm cursor-pointer"
            >
              <IconRenderer name="Phone" className="h-4 w-4 animate-pulse" />
              <span>Call 07700 900077</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              id="mobile-drawer-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex lg:hidden items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-amber-500 hover:bg-slate-50 transition border border-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <IconRenderer name={isOpen ? 'X' : 'Menu'} className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden py-4 px-4 space-y-2 animate-fade-in"
        >
          {navLinks.map((link) => (
            <Link 
              id={`nav-link-mobile-${link.path.replace('/', '') || 'home'}`}
              key={link.path} 
              to={link.path} 
              className={getLinkClass(link.path, true, link.highlight)}
            >
              <div className="flex items-center justify-between">
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a 
              id="mobile-nav-call"
              href="tel:+447700900077" 
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl shadow-md"
            >
              <IconRenderer name="Phone" className="h-4 w-4" />
              <span>Call 07700 900077</span>
            </a>
            <a 
              id="mobile-nav-whatsapp"
              href="https://wa.me/447700900077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md"
            >
              <IconRenderer name="MessageCircle" className="h-4 w-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
