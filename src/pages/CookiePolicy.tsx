import React from 'react';
import { Link } from 'react-router-dom';
import IconRenderer from '../components/IconRenderer';

export default function CookiePolicy() {
  return (
    <div id="cookie-policy-container" className="max-w-4xl mx-auto px-4 py-12 text-left space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-3 font-medium">
        <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
        <IconRenderer name="ChevronRight" className="h-3.5 w-3.5" />
        <span className="text-slate-600">Cookie Policy</span>
      </nav>

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Cookie Policy</h1>
        <p className="text-xs text-slate-400">Last updated: June 11, 2026</p>
      </div>

      <hr className="border-slate-100" />

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies?</h2>
          <p>
            Cookies are short text fragments installed on your mobile browser or computer terminal upon opening a website. They optimize the visual delivery of content and save custom client variables.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Cookies We Deploy</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 list-inside">
            <li><strong>Essential Session Keys:</strong> Required to run page navigation, load UI elements, and process quote form submits safely.</li>
            <li><strong>Performance Analytics:</strong> Helps us trace average user page speeds and identify which search terms led customers to our Birmingham coverage maps.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Setting Cookie Preferences</h2>
          <p>
            You can lock, clear, or ignore cookies inside your browser settings at any time. Restricting cookies may lead to minor layout loading delays, but will not prevent you from using our quotation form or calling David.
          </p>
        </section>
      </div>

    </div>
  );
}
