import React from 'react';
import IconRenderer from './IconRenderer';

export default function WhatsAppButton() {
  return (
    <a
      id="fixed-whatsapp-floating-button"
      href="https://wa.me/447700900077?text=Hello%20PowerSafe%2C%20I%20would%20like%20to%20ask%20about%20your%20electrical%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-4 rounded-full shadow-xl shadow-emerald-500/30 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      title="Chat with us on WhatsApp for Instant Support"
    >
      <div className="absolute right-full mr-3 bg-slate-900 border border-slate-800 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md shrink-0 select-none whitespace-nowrap">
        Chat with David (David’s Line)
      </div>
      <IconRenderer name="MessageCircle" className="h-6 w-6" />
    </a>
  );
}
