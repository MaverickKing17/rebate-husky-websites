import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Your Neighbors Are Saying</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <button onClick={prev} className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-husky-blue hover:scale-110 transition-all">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <button onClick={next} className="p-3 rounded-full bg-white shadow-lg text-slate-600 hover:text-husky-blue hover:scale-110 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 text-blue-50 w-24 h-24 rotate-12 z-0" />
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed">
                "{TESTIMONIALS[activeIndex].text}"
              </blockquote>
              
              <div>
                <div className="font-bold text-slate-900 text-lg">{TESTIMONIALS[activeIndex].name}</div>
                <div className="text-slate-500">{TESTIMONIALS[activeIndex].location} • {TESTIMONIALS[activeIndex].date}</div>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-husky-blue w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
