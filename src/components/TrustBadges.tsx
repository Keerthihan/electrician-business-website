import React from 'react';
import IconRenderer from './IconRenderer';

export default function TrustBadges() {
  const badges = [
    {
      icon: 'ShieldCheck',
      title: 'NICEIC Approved',
      description: 'Fully certified for all domestic and commercial works',
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-800'
    },
    {
      icon: 'Award',
      title: 'Part P Certified',
      description: 'Fully compliant with UK Building Regulations Part P',
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-800'
    },
    {
      icon: 'Clock',
      title: '10+ Years Experience',
      description: 'Serving local homeowners and businesses since 2016',
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-800'
    },
    {
      icon: 'ShieldCheck',
      title: 'Fully Insured',
      description: '£5M Public Liability Insurance for peace of mind',
      color: 'text-amber-500 bg-amber-50 dark:bg-slate-800'
    }
  ];

  return (
    <div id="trust-badges-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, idx) => (
        <div 
          id={`trust-badge-${idx}`}
          key={idx} 
          className="flex items-start p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className={`p-3 rounded-xl mr-4 shrink-0 ${badge.color}`}>
            <IconRenderer name={badge.icon} className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-tight">{badge.title}</h4>
            <p className="text-xs text-slate-500 mt-1 leading-normal">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
