import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SERVICES } from '../lib/data';
import IconRenderer from './IconRenderer';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface QuoteFormProps {
  initialService?: string;
}

export default function QuoteForm({ initialService = "" }: QuoteFormProps) {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: initialService,
      message: ''
    }
  });

  const onSubmit = (data: FormValues) => {
    setIsPending(true);
    // Simulate API request to server
    setTimeout(() => {
      setIsPending(false);
      setSubmitSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <div id="quote-form-container" className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-md">
      {submitSuccess ? (
        <div id="submit-success-banner" className="text-center py-10 px-4">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
            <IconRenderer name="ShieldCheck" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Quote Request Received!</h3>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out to PowerSafe Electrical. David will inspect your specifications and call you back within 2 business hours.
          </p>
          <button
            id="request-another-quote-btn"
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="mt-8 inline-flex items-center justify-center text-sm font-semibold text-amber-600 hover:text-amber-700 underline focus:outline-none"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form id="electrical-quote-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Request a Free Quote</h3>
            <p className="text-slate-500 text-xs mt-1">Fill out the fast request form below, and we will get back to you with transparent pricing guidelines.</p>
          </div>

          <hr className="border-slate-100" />

          {/* Name */}
          <div className="text-left">
            <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Sarah Jenkins"
              className={`w-full px-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-amber-500'} rounded-xl focus:outline-none focus:ring-2 text-slate-800 text-sm transition-all`}
              {...register('name', { required: 'Please enter your full name' })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <IconRenderer name="AlertTriangle" className="h-3 w-3 mr-1" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email & Phone Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="sarah@example.co.uk"
                className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-amber-500'} rounded-xl focus:outline-none focus:ring-2 text-slate-800 text-sm transition-all`}
                {...register('email', { 
                  required: 'Email address is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Please enter a valid email'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <IconRenderer name="AlertTriangle" className="h-3 w-3 mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 07700 900077"
                className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-amber-500'} rounded-xl focus:outline-none focus:ring-2 text-slate-800 text-sm transition-all`}
                {...register('phone', { required: 'Please enter a valid contact phone number' })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <IconRenderer name="AlertTriangle" className="h-3 w-3 mr-1" />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Service Needed */}
          <div className="text-left">
            <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              className={`w-full px-4 py-3 bg-slate-50 border ${errors.service ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-amber-500'} rounded-xl focus:outline-none focus:ring-2 text-slate-800 text-sm transition-all`}
              {...register('service', { required: 'Please select an electrical service' })}
            >
              <option value="">-- Choose a service --</option>
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="Emergency Visit">Emergency Call Out (Fast turnaround)</option>
              <option value="Other Service">Other Electrical Work</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <IconRenderer name="AlertTriangle" className="h-3 w-3 mr-1" />
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="text-left">
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Project Description / Request Details
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Please describe the work required. Include your general location, timeline, and any specific preferences."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500 rounded-xl focus:outline-none text-slate-800 text-sm transition-all resize-none"
              {...register('message')}
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <button
              id="submit-quote-btn"
              type="submit"
              disabled={isPending}
              className={`w-full py-4 px-6 rounded-xl text-white font-bold tracking-wide transition-all shadow-md duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${isPending ? 'bg-amber-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/10'}`}
            >
              {isPending ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Details...</span>
                </>
              ) : (
                <>
                  <IconRenderer name="Zap" className="h-5 w-5" />
                  <span>Request My Free Quote</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
