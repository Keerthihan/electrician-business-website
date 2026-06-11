import React from 'react';
import { TestimonialItem } from '../types';
import IconRenderer from './IconRenderer';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  key?: React.Key;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div 
      id={`testimonial-card-${testimonial.id}`}
      className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <IconRenderer 
              key={i} 
              name="Star" 
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`} 
            />
          ))}
        </div>
        
        {/* Review Text */}
        <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
          <p className="text-xs text-slate-500 flex items-center mt-0.5">
            <IconRenderer name="MapPin" className="h-3 w-3 mr-1 text-slate-400" />
            {testimonial.location}
          </p>
        </div>
        <div className="text-[10px] text-slate-400 font-medium">
          {testimonial.date}
        </div>
      </div>
    </div>
  );
}
