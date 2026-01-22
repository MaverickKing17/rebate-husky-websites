import React from 'react';
import { TIMELINE_EVENTS } from '../constants';

const LegacyTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-husky-orange font-bold tracking-widest uppercase text-sm">Our Legacy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Over 50 Years of Excellence</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -ml-px"></div>

          {TIMELINE_EVENTS.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Spacer for Desktop Alignment */}
              <div className="hidden md:block w-1/2"></div>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white bg-husky-blue shadow-md z-10"></div>
              
              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className={`p-6 bg-white rounded-xl shadow-lg border border-slate-50 hover:border-blue-200 transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-3xl font-black text-blue-100 block mb-2">{event.year}</span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyTimeline;
