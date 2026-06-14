import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS } from '../lib/data';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';

type FilterType = 'all' | 'consumer-units' | 'rewires' | 'ev-chargers' | 'lighting';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const categories: { label: string; value: FilterType }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Consumer Units', value: 'consumer-units' },
    { label: 'Full/Partial Rewires', value: 'rewires' },
    { label: 'EV Charger Installs', value: 'ev-chargers' },
    { label: 'Lighting & Sockets', value: 'lighting' }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % filteredItems.length;
      setLightboxIndex(nextIdx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      setLightboxIndex(prevIdx);
    }
  };

  return (
    <div id="gallery-page-container" className="space-y-12 pb-16 text-left relative">
      <PageSEO
        title="Work Gallery"
        description="Browse our portfolio of completed electrical installations in Birmingham: consumer unit upgrades, EV charger installs, rewires, and LED lighting projects."
        canonical="/gallery"
      />
      
      {/* Page Hero */}
      <section id="gallery-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">Our Portfolio Gallery</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Electrical Works Gallery
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Real, certified installations in West Midlands homes. Click any project node below to inspect dual before/after notes or safety upgrade specifics.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section id="gallery-filter-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat.value}`}
              key={cat.value}
              onClick={() => {
                setActiveFilter(cat.value);
                setLightboxIndex(null); // Close lighthouse if active
              }}
              className={`px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide transition uppercase cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-Style Column Layout */}
      <section id="gallery-masonry-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              id={`gallery-photo-block-${item.id}`}
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-102 transition-transform duration-500 h-auto"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow">
                    <IconRenderer name="Search" className="h-3.5 w-3.5" />
                    Expand Project
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-bold text-slate-909 text-sm tracking-tight pt-1">{item.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immersive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          id="lightbox-backdrop"
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close Trigger */}
          <button
            id="lightbox-close-btn"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full border border-slate-700/50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <IconRenderer name="X" className="h-6 w-6" />
          </button>

          {/* Previous Button inside Lightbox */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 p-3 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full border border-slate-700/50 cursor-pointer text-center"
            aria-label="Previous Image"
          >
            <IconRenderer name="ChevronRight" className="h-6 w-6 rotate-180" />
          </button>

          {/* Main Visual Box */}
          <div
            id="lightbox-guts"
            onClick={(e) => e.stopPropagation()} // Prevent close on body click
            className="max-w-3xl w-full flex flex-col items-center bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[60vh] object-contain w-full bg-slate-950"
            />
            {/* Metadata overlay */}
            <div className="p-6 w-full bg-slate-900 text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded uppercase tracking-wider">
                  {filteredItems[lightboxIndex].category.replace('-', ' ')}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Project {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">{filteredItems[lightboxIndex].title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{filteredItems[lightboxIndex].description}</p>
            </div>
          </div>

          {/* Next Button inside Lightbox */}
          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-4 p-3 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full border border-slate-700/50 cursor-pointer text-center"
            aria-label="Next Image"
          >
            <IconRenderer name="ChevronRight" className="h-6 w-6" />
          </button>
        </div>
      )}

    </div>
  );
}
