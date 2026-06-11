import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from './IconRenderer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-application-footer" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expanded 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
          
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 focus:outline-none">
              <div className="bg-amber-500 text-white rounded-xl p-1.5 shrink-0">
                <IconRenderer name="Zap" className="h-5 w-5 fill-white" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                PowerSafe Electrical
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Highly experienced, NICEIC Approved local electricians specializing in safe domestic installations, emergency fault solving, fuseboard updates, and certified smart EV chargers across Birmingham and the surrounding West Midlands.
            </p>
            {/* Accreditation mention */}
            <div className="flex items-center gap-3 pt-2">
              <div className="text-[10px] uppercase font-bold tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-1 rounded">
                NICEIC Approved
              </div>
              <div className="text-[10px] uppercase font-bold tracking-widest bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded">
                Part P Certified
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Home Dashboard</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">Customer Story & Credentials</Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-amber-400 transition-colors">Areas We Cover in UK</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors">Project Portfolio Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-amber-400 transition-colors">Customer Reviews</Link>
              </li>
              <li>
                <Link to="/emergency" className="text-red-400 hover:text-red-500 font-semibold transition-colors">24/7 Emergency Assistance</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Electrical Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Consumer Unit Upgrades</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Full & Partial Property Rewires</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">EV Smart Charger Installation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Fuse Diagnostic Fault Finding</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">Indoor & Outdoor Smart Lighting</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-colors">PAT Testing & Landlord Checks</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Directives */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Get In Touch</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Based in Birmingham, West Midlands. Ready to serve you 24 hours a day.
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="tel:+447700900077" className="flex items-center gap-2.5 hover:text-amber-400 transition-colors">
                <IconRenderer name="Phone" className="h-4 w-4 text-amber-500 shrink-0" />
                <span>07700 900077 (Mobile)</span>
              </a>
              <a href="mailto:info@powersafe-electrical.co.uk" className="flex items-center gap-2.5 hover:text-amber-400 transition-colors">
                <IconRenderer name="Mail" className="h-4 w-4 text-amber-500 shrink-0" />
                <span>info@powersafe-electrical.co.uk</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <IconRenderer name="Clock" className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-300">Regular: Mon - Sat, 8am - 6pm</p>
                  <p className="text-[10px] text-red-400 font-semibold mt-0.5">Emergency Help: 24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider / Bottom Block */}
        <hr className="border-slate-900 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>© {currentYear} PowerSafe Electrical. Registered NICEIC Approved Contractor. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-slate-600">Company registration and certification records available upon written request.</p>
          </div>
          <div className="flex items-center space-x-6 shrink-0 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
