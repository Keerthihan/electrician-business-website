import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../lib/data';
import TestimonialCard from '../components/TestimonialCard';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';

export default function Testimonials() {
  return (
    <div id="testimonials-page-container" className="space-y-12 pb-16 text-left">
      <PageSEO
        title="Customer Reviews"
        description="Read verified 5-star reviews from PowerSafe Electrical customers across Birmingham, Sutton Coldfield, Solihull and West Midlands."
        canonical="/testimonials"
      />
      
      {/* Page Hero */}
      <section id="testimonials-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">Customer Testimonials</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            What Our Customers Say
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Transparent feedback is crucial. Read all ninety-nine percent verified reviews left by Birmingham, Sutton Coldfield, and Solihull homeowners.
          </p>
        </div>
      </section>

      {/* Average Rating Block */}
      <section id="testimonials-rating-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Rating Number badge */}
            <div className="text-5xl font-extrabold text-slate-950 tracking-tight shrink-0 bg-amber-50 p-4 rounded-2xl border border-amber-100">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <IconRenderer key={i} name="Star" className="h-5.5 w-5.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="font-bold text-slate-900 text-sm mt-1">Based on 124+ verified local reviews</p>
              <p className="text-xs text-slate-500">Google Reviews, Trustpilot, and direct feedback logs combined.</p>
            </div>
          </div>

          <a 
            id="google-review-external-cta"
            href="https://search.google.com/local/writereview?placeid=ChIJ02m_r-K-b0YRDm-8m7epcaM" // Example write review link template
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full md:w-auto text-center font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 border border-amber-400/30 cursor-pointer"
          >
            {/* Simple colored bar/dots indicating Google logo feel or a general search icon */}
            <IconRenderer name="Star" className="h-5 w-5 fill-slate-950" />
            <span>Leave a Google Review</span>
          </a>

        </div>
      </section>

      {/* Reviews Grid (9 Items) */}
      <section id="reviews-grid-9" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Direct Invite Badge */}
      <section id="testimonial-bottom-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 p-8 rounded-3xl text-left border border-slate-800 text-slate-300">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">Have you worked with PowerSafe recently?</h3>
            <p className="text-slate-400 text-xs sm:text-sm">We are always eager to understand how our engineering crew performed. Fill out our feedback review card on Google to let others understand.</p>
          </div>
          <Link
            id="write-direct-review-link"
            to="/contact"
            className="w-full md:w-auto text-center shrink-0 text-slate-950 bg-amber-500 hover:bg-amber-600 font-bold py-3.5 px-6 rounded-xl text-sm"
          >
            Message Feedback
          </Link>
        </div>
      </section>

    </div>
  );
}
