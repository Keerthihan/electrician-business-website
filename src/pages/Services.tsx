import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../lib/data';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';

export default function Services() {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    if (activeDetailId === id) {
      setActiveDetailId(null);
    } else {
      setActiveDetailId(id);
    }
  };

  return (
    <div id="services-page-container" className="space-y-12 pb-16">
      <PageSEO
        title="Electrical Services Birmingham"
        description="Full range of electrical services in Birmingham: consumer unit upgrades, EV charger installation, rewires, fault finding, PAT testing & more. NICEIC certified."
        canonical="/services"
      />
      
      {/* Page Hero */}
      <section id="services-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 text-left">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">Our Services</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Electrical Services We Offer
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            NICEIC certified domestic and commercial electrical services. Competent engineering standardizing, full compliance, testing, and 24/7 disaster protection.
          </p>
        </div>
      </section>

      {/* Main Grid View */}
      <section id="services-grid-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div 
              id={`service-block-${srv.id}`}
              key={srv.id} 
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                    <IconRenderer name={srv.iconName} className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* Expanded Detailed Description Accordion */}
                {activeDetailId === srv.id ? (
                  <div className="text-xs text-slate-500 bg-slate-50 rounded-xl p-4 mb-4 border-l-2 border-amber-500 animate-slide-down">
                    <h4 className="font-bold text-slate-700 uppercase tracking-wide mb-1.5 text-[10px]">What is included:</h4>
                    <p className="leading-relaxed">{srv.detailedDescription}</p>
                  </div>
                ) : null}
              </div>

              {/* Action Buttons */}
              <div className="border-t border-slate-50 pt-4 mt-4 flex items-center justify-between">
                <button
                  id={`srv-details-btn-${srv.id}`}
                  onClick={() => toggleDetails(srv.id)}
                  className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-amber-500 transition focus:outline-none cursor-pointer"
                >
                  <span>{activeDetailId === srv.id ? 'Hide Details' : 'Specification Specs'}</span>
                  <IconRenderer name="ChevronRight" className={`ml-1 h-3.5 w-3.5 transition-transform ${activeDetailId === srv.id ? 'rotate-90' : ''}`} />
                </button>

                <Link 
                  id={`srv-quote-link-${srv.id}`}
                  to={`/contact?service=${encodeURIComponent(srv.title)}`}
                  className="inline-flex items-center text-xs font-bold text-amber-600 hover:text-amber-700 transition"
                >
                  Get a Quote
                  <IconRenderer name="ArrowRight" className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Emergency Assurance Info Section */}
      <section id="services-extra-assurance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-500/5 border border-amber-500/10 p-8 rounded-3xl text-left">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="space-y-2 max-w-3xl">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <IconRenderer name="ShieldCheck" className="text-amber-600 h-5 w-5 mr-2" />
              Not sure which electrical solution you will need?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We provide free home inspections and diagnostic assessments to survey your property before suggesting any renovations or appliance updates. All quotes are free, itemized, and hold absolute 30-day price locks.
            </p>
          </div>
          <Link
            id="services-get-quote-btn"
            to="/contact"
            className="w-full md:w-auto text-center shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition"
          >
            Consult David Directly
          </Link>
        </div>
      </section>

    </div>
  );
}
