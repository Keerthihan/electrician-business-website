import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import IconRenderer from './IconRenderer';

interface ServiceCardProps {
  service: ServiceItem;
  key?: React.Key;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div 
      id={`service-card-${service.id}`}
      className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
          <IconRenderer name={service.iconName} className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 h-12 sm:h-auto flex items-center">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>
      <div>
        <Link 
          id={`service-cta-${service.id}`}
          to={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition"
        >
          Get a Free Quote
          <IconRenderer name="ArrowRight" className="ml-2 h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
