import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../lib/data';
import TrustBadges from '../components/TrustBadges';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import IconRenderer from '../components/IconRenderer';

export default function Home() {
  // Show first 6 services as requested
  const featuredServices = SERVICES.slice(0, 6);
  
  // Show first 3 testimonials as requested
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);

  const whyChooseUs = [
    {
      icon: 'ShieldCheck',
      title: 'Fixed & Fair Pricing',
      description: 'We believe in absolute transparency. You receive a fully written, itemized quotation before any physical works commence, protecting you from hidden premiums or sudden surprises.'
    },
    {
      icon: 'Zap',
      title: 'Flawless Safety Records',
      description: 'All testing and installations are performed by competent, fully accredited NICEIC Approved Contractors under stringent Part P building controls and standard BS7671 safety norms.'
    },
    {
      icon: 'Clock',
      title: 'Clean & Tidy Workmanship',
      description: 'Our pride shows in clean conduits and neat fuse board cabinets. We lay durable protective dustsheets over your carpets and vac-sweep every trace of material before wrapping up.'
    }
  ];

  return (
    <div id="home-page-container" className="space-y-16 pb-12">
      
      {/* 1. Hero Section */}
      <section 
        id="home-hero-section" 
        className="relative bg-slate-900 text-white pt-16 pb-20 md:py-28 overflow-hidden rounded-b-[2rem]"
      >
        {/* Abstract Architectural Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)] opacity-35"></div>
        {/* Glow Spheres */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-center mx-auto space-y-6">
            
            {/* Urgent Notification Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/35 text-amber-500 text-xs font-semibold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
              Emergency Electrician available within 45 Minutes
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Your Trusted Local Electrician in <span className="text-amber-500 underline decoration-solid decoration-amber-500/40 underline-offset-8">Birmingham</span>
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              PowerSafe Electrical delivers fully certified, insured, and approved domestic and commercial electrical services. Standard rewires, rapid emergency call outs, and smart solar charger installations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                id="hero-primary-cta"
                to="/contact"
                className="w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/10 uppercase tracking-wider text-xs"
              >
                Get a Free Quote
              </Link>
              <Link
                id="hero-secondary-cta"
                to="/services"
                className="w-full sm:w-auto text-center border-2 border-slate-700 bg-slate-900/40 hover:bg-slate-800 text-slate-200 hover:text-white transition font-semibold px-8 py-4 rounded-xl uppercase tracking-wider text-xs"
              >
                Our Services
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Bar Section */}
      <section id="trust-bar-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <TrustBadges />
      </section>

      {/* 3. Services Overview (6-card grid) */}
      <section id="services-overview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold bg-amber-500/5 px-3 py-1 rounded">Our Professional Services</span>
          <h2 className="text-2xl md:text-3.5xl font-bold text-slate-950 tracking-tight">
            What We Do
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            From consumer unit improvements to specialized EV chargers, we resolve any residential or commercial task with complete NICEIC technical accreditation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            id="all-services-link"
            to="/services"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 font-bold px-7 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            <span>View All Services</span>
            <IconRenderer name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section id="why-choose-us-section" className="bg-slate-100/50 py-16 rounded-[2rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold bg-amber-500/5 px-3 py-1 rounded">The PowerSafe Difference</span>
            <h2 className="text-2xl md:text-3.5xl font-bold text-slate-950 tracking-tight">
              Why Homeowners Recommend Us
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We separate ourselves through exceptional engineering standards, rapid arrival guarantees, and genuine care for your home environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div 
                id={`why-us-column-${idx}`}
                key={idx} 
                className="bg-white border border-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
              >
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <IconRenderer name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Testimonial Reviews Section */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold bg-amber-500/5 px-3 py-1 rounded">Client Handout Ratings</span>
          <h2 className="text-2xl md:text-3.5xl font-bold text-slate-950 tracking-tight">
            5-Star Local Approved Electrician
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Do not take our words for granted. See what Birmingham and West Midlands residents of Sutton Coldfield, Solihull, and Moseley are saying about us on trust portals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            id="all-reviews-link"
            to="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
          >
            <span>Read all 9 verified customer reviews</span>
            <IconRenderer name="ArrowRight" className="h-4 w-4 inline" />
          </Link>
        </div>
      </section>

      {/* 6. Emergency Call CTA Header */}
      <section id="home-emergency-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </section>

    </div>
  );
}
