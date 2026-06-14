import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';
import IconRenderer from '../components/IconRenderer';
import PageSEO from '../components/PageSEO';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get('service') || '';

  const contactCards = [
    {
      icon: 'Phone',
      title: 'Telephone Contacts',
      value: '07700 900077',
      sub: 'Call or SMS, 24 Hours Emergency Backup',
      href: 'tel:+447700900077'
    },
    {
      icon: 'Mail',
      title: 'Support Email Address',
      value: 'info@powersafe-electrical.co.uk',
      sub: 'Replies within 2 business hours',
      href: 'mailto:info@powersafe-electrical.co.uk'
    },
    {
      icon: 'MessageCircle',
      title: 'Instant WhatsApp Direct',
      value: '+44 7700 900077',
      sub: 'Send images of your fusebox directly',
      href: 'https://wa.me/447700900077'
    }
  ];

  return (
    <div id="contact-page-container" className="space-y-12 pb-16 text-left">
      <PageSEO
        title="Contact Us & Free Quote"
        description="Get a free quote from PowerSafe Electrical. Call 07700 900077 or use our online form. Serving Birmingham and West Midlands 7 days a week."
        canonical="/contact"
      />
      
      {/* Page Hero */}
      <section id="contact-hero-header" className="bg-slate-900 text-white py-12 px-4 rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
            <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
            <span className="text-slate-200">Contact Us</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
            Have a project, upgrade, or compliance certificate needed? Fill out our enquiry form or contact David directly for immediate support.
          </p>
        </div>
      </section>

      {/* Main Split Column Grid */}
      <section id="contact-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="space-y-4">
            {selectedService && (
              <div className="bg-amber-100 border border-amber-300 text-amber-900 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-pulse">
                <IconRenderer name="Zap" className="h-4 w-4 shrink-0 text-amber-600" />
                <span>Selected: Pre-filling form with "{selectedService}"</span>
              </div>
            )}
            <QuoteForm initialService={selectedService} />
          </div>

          {/* Right: Contact details */}
          <div className="space-y-8">
            
            {/* Direct Channel Cards */}
            <div id="contact-channel-info" className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Direct Connections</h2>
              <p className="text-slate-500 text-xs">Reach David or one of our local electrical mechanics on duty immediately.</p>
              
              <div className="grid grid-cols-1 gap-4">
                {contactCards.map((card, idx) => (
                  <a
                    id={`contact-card-${idx}`}
                    key={idx}
                    href={card.href}
                    target={card.icon === 'MessageCircle' ? '_blank' : '_self'}
                    rel={card.icon === 'MessageCircle' ? 'noopener noreferrer' : undefined}
                    className="flex items-start p-4 bg-white border border-slate-100 rounded-2xl hover:border-amber-400/50 hover:shadow-md transition-all group"
                  >
                    <div className="p-3 bg-slate-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white rounded-xl mr-4 shrink-0 transition">
                      <IconRenderer name={card.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{card.title}</h4>
                      <p className="font-bold text-slate-850 text-sm mt-0.5">{card.value}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{card.sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Operating Times */}
            <div id="contact-hours-table" className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <IconRenderer name="Clock" className="text-amber-500 h-4 w-4" />
                Normal Operating Hours
              </h3>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-center justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-slate-800">08:00am - 06:00pm</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Saturday</span>
                  <span className="font-bold text-slate-800">09:00am - 04:00pm</span>
                </li>
                <li className="flex items-center justify-between text-red-650 font-semibold border-t border-slate-200/50 pt-2 mt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                    Emergency Outages
                  </span>
                  <span className="font-extrabold text-red-650">24 Hours / 7 Days</span>
                </li>
              </ul>
            </div>

            {/* Quick Map embed */}
            <div id="contact-micro-map" className="relative h-55 rounded-2xl overflow-hidden border border-slate-200">
              <iframe 
                title="Micro Birmingham Hub Map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155424.32986420557!2d-1.9961014389146522!3d52.477461821033285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870ba22efbc35f3%3A0xd99ca1b7ba69c3a3!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suae!4v1717800000000!5m2!1sen!2suae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
