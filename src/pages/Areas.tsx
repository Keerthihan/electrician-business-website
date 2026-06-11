import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AREAS } from '../lib/data';
import IconRenderer from '../components/IconRenderer';

export default function Areas() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = AREAS.filter((area) => {
    const term = searchQuery.toLowerCase();
    return (
      area.name.toLowerCase().includes(term) ||
      area.postcodePrefix.toLowerCase().includes(term) ||
      area.county.toLowerCase().includes(term)
    );
  });

  return (
    <div id="areas-page-container" className="space-y-12 pb-16 text-left">
      
      {/* Page Hero */}
      <section id="areas-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">Coverage Areas</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Our Coverage Areas in the UK
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Based in Birmingham, West Midlands, we provide quick responsive access across a massive 20-mile radius shown below.
          </p>
        </div>
      </section>

      {/* Main Grid & Interactive Search */}
      <section id="areas-coverage-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Postcode Search Box */}
        <div className="bg-white border border-slate-100 shadow-sm p-5 rounded-2xl max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <IconRenderer name="Search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input 
              id="postcode-search"
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type town or postcode prefix (e.g. B13, Solihull)..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-800 transition"
            />
          </div>
          {searchQuery && (
            <button
              id="clear-search-btn"
              onClick={() => setSearchQuery('')}
              className="text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold rounded-lg shrink-0 cursor-pointer self-start sm:self-auto"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results Info */}
        <div className="text-xs text-slate-400 font-semibold tracking-wide uppercase">
          {filteredAreas.length === 0 ? (
            <span className="text-red-500 font-bold">No coverage areas found for "{searchQuery}". But try calling us, we might still have a van nearby!</span>
          ) : (
            `Showing ${filteredAreas.length} of ${AREAS.length} active service sectors`
          )}
        </div>

        {/* Areas list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area) => (
            <div 
              id={`area-card-${area.id}`}
              key={area.id} 
              className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
                    {area.postcodePrefix}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    ~{area.distanceMiles} miles from HQ
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">{area.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{area.county}</p>
              </div>

              <div className="border-t border-slate-50 pt-3 mt-4 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>Response: &lt;45 min</span>
                <Link to="/contact" className="text-amber-600 hover:text-amber-700 font-bold">Book Visit →</Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Embedded UK Google Map Layout Section */}
      <section id="areas-maps-location" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight">Our Operational Center Map</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">We route all domestic electrician vans daily from our main office in central Birmingham.</p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200">
          <iframe 
            id="google-coverage-map"
            title="PowerSafe Electrical Birmingham Office Coverage Zone" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155424.32986420557!2d-1.9961014389146522!3d52.477461821033285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870ba22efbc35f3%3A0xd99ca1b7ba69c3a3!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suae!4v1717800000000!5m2!1sen!2suae" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] md:h-[450px]"
          ></iframe>
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 text-slate-300 p-4 rounded-xl text-xs backdrop-blur-sm border border-slate-800 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
            <div>
              <p className="font-bold text-white">Representative Birmingham Coverage Center</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Note: This is an embedded reference. To configure standard custom locations, update the iframe src inside our main source files.</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg shrink-0 text-center"
            >
              Verify My Address
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
