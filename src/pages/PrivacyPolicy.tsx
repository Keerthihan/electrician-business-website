import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';

export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy-container" className="max-w-4xl mx-auto px-4 py-12 text-left space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
        <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
        <span className="text-slate-600">Privacy Policy</span>
      </nav>

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Last updated: June 11, 2026</p>
      </div>

      <hr className="border-slate-100" />

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you interact with PowerSafe Electrical through our online quote or contact forms, we collect basic details you choose to share, specifically: your full name, email address, phone number, and any project-specific information or location notes you supply.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Data</h2>
          <p>
            Your details are used strictly to evaluate your electrical installation requirements and compile transparent, fair quotes. We may contact you via phone, SMS, email, or WhatsApp to coordinate site visits, safety testing, and local dispatching.
          </p>
          <p>
            We do not sell, rent, or distribute your identifier parameters to third-party digital marketers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. GDPR Rights & Compliance</h2>
          <p>
            As a UK resident, you retain statutory rights under the General Data Protection Regulation (GDPR). This includes the right to request a complete export of your stored parameters, correct any inaccurate information, or demand complete erasure of your data from our servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Contacting Our Data Controller</h2>
          <p>
            For any queries or data removals, please email us directly with your request details at:
            <br />
            <a href="mailto:info@powersafe-electrical.co.uk" className="text-amber-600 hover:text-amber-700 font-bold underline">
              info@powersafe-electrical.co.uk
            </a>
          </p>
        </section>
      </div>

    </div>
  );
}
