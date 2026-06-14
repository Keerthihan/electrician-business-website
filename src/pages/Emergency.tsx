import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';

export default function Emergency() {
  const emergencyThreats = [
    {
      title: 'Smell of Burning or Melting Plastic',
      description: 'Often indicates heavily overloaded cables or faulty outlets experiencing high resistance sparking. Switch your mains power off and call us immediately.'
    },
    {
      title: 'Persistent Board Tripping',
      description: 'Fuses that trip repeatedly suggest structural water ingress or dangerous short circuits. Avoid forcing the switch up as this creates severe flashover risks.'
    },
    {
      title: 'Sparking Switches or Wall Outlets',
      description: 'Active visual sparks or spitting sounds suggest deteriorating socket contacts that could instantly ignite adjacent wall materials.'
    },
    {
      title: 'Total Power Cut / Blackouts',
      description: 'If nearby streetlights remain active but your distribution cabinet displays zero activity, you could have a failed cut-out master fuse.'
    },
    {
      title: 'Loud Buzzing from Fuse Boards',
      description: 'A loud vibrating noise indicates magnetizing coils or arcing connections in faulty circuit breakers requiring rapid mechanical swapping.'
    },
    {
      title: 'Water Leaks Near Electric Systems',
      description: 'Leaking water traversing consumer brackets or conduits can bridge conductors, creating life-threatening live-ground electrical currents.'
    }
  ];

  return (
    <div id="emergency-page-container" className="space-y-12 pb-16 text-left">
      <PageSEO
        title="24/7 Emergency Electrician Birmingham"
        description="Emergency electrician available 24/7 in Birmingham. We arrive within 45 minutes for power cuts, sparking sockets, burning smells and fuse board failures. Call 07700 900077."
        canonical="/emergency"
      />
      
      {/* Immersive Danger Crimson Hero */}
      <section 
        id="emergency-hero-header" 
        className="relative bg-linear-to-br from-slate-900 via-slate-950 to-red-950 text-white pt-16 pb-20 rounded-b-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-red-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider animate-pulse">
            <IconRenderer name="AlertTriangle" className="h-4 w-4" />
            Immediate Dispatch Unit: On Call Now
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            24/7 Emergency Electrician in Birmingham & West Midlands
          </h1>
          
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Fast, safe, and certified emergency response within 45 minutes. We resolve persistent fuse tripping, burning odors, wet sockets, and total power failures immediately.
          </p>

          <hr className="border-slate-800 max-w-sm mx-auto" />

          {/* Large Clicking Hotkeys */}
          <div className="space-y-4 pt-2">
            <p className="text-xs uppercase font-extrabold text-slate-400 tracking-widest">Speak Directly to david on call:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="emergency-primary-voice-btn"
                href="tel:+447700900077"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-5.5 rounded-2xl shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconRenderer name="Phone" className="h-5 w-5 animate-bounce" />
                <span>Call 07700 900077</span>
              </a>
              <a
                id="emergency-primary-wa-btn"
                href="https://wa.me/447700900077?text=Hello%20PowerSafe%20Emergency%20I%20need%20assistance%20immediately"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base px-8 py-5.5 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconRenderer name="MessageCircle" className="h-5 w-5" />
                <span>WhatsApp Notification</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Standard emergency response premiums are explained transparently on the phone prior to dispatch.</p>
          </div>

        </div>
      </section>

      {/* Response Metrics & Speed section */}
      <section id="emergency-speed-block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-red-50 text-red-605 rounded-xl">
              <IconRenderer name="Clock" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">45-Min Target Arrival</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Our vans operate across local road networks to arrive at your door in under an hour.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-red-50 text-red-605 rounded-xl">
              <IconRenderer name="Wrench" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Fully-Stocked Vehicles</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">We carry spare residual devices (RCD), double sockets, surge grids, and main wire cuts so we can resolve 95% of failures in one visit.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
            <div className="p-3 bg-red-50 text-red-605 rounded-xl">
              <IconRenderer name="ShieldCheck" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Fully Certified Repair</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">No quick tape-ups. We trace electrical faults to code, reinstate visual layout, and issue official safety documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Danger Directory/Index of Emergencies */}
      <section id="emergency-threats-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-red-500 font-extrabold bg-red-55/5 px-3 py-1 rounded">What Counts as an Emergency?</span>
          <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight mt-3">
            Do You Need an Electrician Right Now?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mt-2">
            Certain minor wiring situations can wait until standard morning hours. However, if you experience any of the active hazards below, you require professional intervention immediately:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyThreats.map((threat, idx) => (
            <div 
              id={`threat-element-${idx}`}
              key={idx} 
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-red-400/30 transition-all flex gap-4 text-left"
            >
              <div className="h-8 w-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 font-extrabold text-sm select-none">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">{threat.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{threat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
