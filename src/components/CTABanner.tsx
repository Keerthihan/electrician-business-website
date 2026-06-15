import React from 'react';
import IconRenderer from './IconRenderer';

interface CTABannerProps {
  title?: string;
  description?: string;
  showEmergencyDetails?: boolean;
}

export default function CTABanner({ 
  title = "Need an Emergency Electrician?", 
  description = "Get immediate assistance within 45 minutes for tripping fuses, burning smells, or power blackouts. Available 24/7 in Birmingham and surrounding areas.",
  showEmergencyDetails = true
}: CTABannerProps) {
  return (
    <div 
      id="cta-emergency-banner" 
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          {showEmergencyDetails && (
            <span className="inline-flex items-center px-3 py-1 bg-red-500/15 border border-red-500/30 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
              <IconRenderer name="AlertTriangle" className="h-3.5 w-3.5 mr-1.5" />
              24/7 Rapid Response
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 md:text-base mt-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
          <a
            id="emergency-call-btn"
            href="tel:+447700900077"
            className="flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 transition-all text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 w-full sm:w-auto text-center cursor-pointer"
          >
            <IconRenderer name="Phone" className="h-5 w-5 animate-bounce" />
            <span>Call 07700 900077</span>
          </a>
          
          <a
            id="emergency-whatsapp-btn"
            href="https://wa.me/447700900077?text=Hello%20PowerSafe%2C%20I%20need%20an%20emergency%20electrician"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 transition-all text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 w-full sm:w-auto text-center cursor-pointer"
          >
            <IconRenderer name="MessageCircle" className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
