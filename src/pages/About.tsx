import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';
import electricalWorkImage from '../lib/images/ele.jpg';

export default function About() {
  const stats = [
    { value: '10+', label: 'Years Experience', description: 'Accredited local electrical experts' },
    { value: '500+', label: 'Jobs Completed', description: 'With zero complaints or safety failures' },
    { value: '5-Star', label: 'Highly Rated', description: 'Verified reviews on trust portals' },
    { value: '£5M', label: 'Fully Insured', description: 'Full public liability protective cover' }
  ];

  const credentials = [
    {
      title: 'NICEIC Approved Contractor',
      details: 'Evaluated rigorously to demonstrate absolute compliance with British BS7671 electrical safety wiring procedures, authorizing us to self-certify all building control notices.'
    },
    {
      title: 'NAPIT & Registered Member',
      details: 'Competent scheme registrations guarantee regular technical evaluation, expert diagnostic testing equipment calibration, and absolute conformity across civil works.'
    },
    {
      title: 'Part P Self-Certification',
      details: 'Certified to perform, test, and register installations under UK Building Control standards. We file all registration paperwork with your local council automatically.'
    },
    {
      title: 'City & Guilds Qualified',
      details: 'Fully trained with premium NVQ Level 3 credentials, AM2 practical qualifications, and the latest Level 3 award in inspection and testing.'
    }
  ];

  return (
    <div id="about-page-container" className="space-y-16 pb-16 text-left">
      <PageSEO
        title="About Us"
        description="Meet David Jenkins and the PowerSafe Electrical team. NICEIC approved, City & Guilds qualified electricians with 10+ years serving Birmingham and West Midlands."
        canonical="/about"
      />
      
      {/* Page Hero */}
      <section id="about-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">About Us</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            About PowerSafe Electrical
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Led by David Jenkins, local Birmingham electrical engineer. Committed to absolute safety, transparent pricing structures, and immaculate home respect.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section id="about-story-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold bg-amber-500/5 px-3 py-1 rounded">Our Story</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Personal Commitment to Electrical Excellence
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              PowerSafe Electrical was established in Birmingham by David Jenkins with a straightforward mission: to break the stereotype of unreliable trade contractors. We set out to deliver absolute technical precision with consistent, respectful customer service.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Today, David and his local team have served over 500 domestic and commercial clients in Birmingham, Solihull, and Sutton Coldfield. We treat every job, from swapping a light dimmer switch to wiring a high-demand vehicle fast-charger, with the exact same dedication. We arrive when we say we will, treat your property as if it were our own, and back all labor with written satisfaction guarantees.
            </p>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Our Core Guarantee</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                If our wiring or installation experiences any operational defect within 12 months, we will return immediately and fix the problem completely free of any cost.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-600 rounded-3xl rotate-2 opacity-5 scale-102 group-hover:rotate-1 group-hover:scale-100 transition-all duration-300"></div>
            <img 
              id="about-engineer-photo"
              src={electricalWorkImage} 
              alt="David Jenkins - Lead Electrical Engineer at PowerSafe Electrical" 
              loading="lazy"
              decoding="async"
              className="rounded-3xl shadow-lg border-4 border-white transition-transform duration-300 relative z-10 w-full object-cover h-87.5 sm:h-112.5"
            />
          </div>

        </div>
      </section>

      {/* Stats row section */}
      <section id="about-stats-section" className="bg-slate-900 text-white py-12 rounded-4xl max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {stats.map((stat, idx) => (
            <div id={`stat-node-${idx}`} key={idx} className="text-center space-y-1">
              <div className="text-2xl sm:text-4.5xl font-extrabold text-amber-500 tracking-tight">{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold text-white">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-normal">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Qualifications list section */}
      <section id="about-credentials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold bg-amber-500/5 px-3 py-1 rounded">Fully Accredited</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3">
            Our Certifications & Accreditations
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
            In the electrical industry, credentials are non-negotiable. Here are the licensing systems and authorities that verify our ongoing competence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          {credentials.map((cred, idx) => (
            <div 
              id={`cred-card-${idx}`}
              key={idx} 
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4"
            >
              <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl h-10 w-10 shrink-0 flex items-center justify-center">
                <IconRenderer name="ShieldCheck" className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">{cred.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{cred.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
