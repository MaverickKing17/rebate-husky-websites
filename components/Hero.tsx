import React from 'react';
import { Star, ShieldCheck, Thermometer } from 'lucide-react';

interface HeroProps {
  location: string;
}

const Hero: React.FC<HeroProps> = ({ location }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://i.ibb.co/gMH28b4T/gemini-3-pro-image-preview-a-Replace-the-current.png" 
            alt="Husky HVAC Professional Installation" 
            className="w-full h-full object-cover"
         />
         {/* Updated Overlay: Lighter gradient to show more image, but kept strong on left for text contrast */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-100 text-sm font-semibold border border-blue-400/30 backdrop-blur-md shadow-sm">
              <ShieldCheck size={14} className="mr-2 text-blue-300" /> Satisfaction Guaranteed
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-100 text-sm font-semibold border border-orange-400/30 backdrop-blur-md shadow-sm">
              <Star size={14} className="mr-2 fill-orange-400 text-orange-400" /> Since 1974
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="text-husky-blue drop-shadow-md">{location}</span> HVAC Experts
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 drop-shadow-sm">
              Since 1974
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 font-medium mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 drop-shadow-md">
            Over 50 years of keeping {location} homes comfortable. Specialized in Furnace, AC, and Heat Pump installations with maximum rebate potential.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-husky-blue text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:bg-husky-darkBlue hover:-translate-y-1 transition-all duration-300 border border-transparent"
            >
              Book Repair / Quote
            </button>
            <button 
              onClick={() => scrollTo('rebates')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/40 rounded-xl font-bold text-lg backdrop-blur-md hover:bg-white hover:text-husky-blue hover:border-white hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
              <Thermometer size={20} className="mr-2" />
              Check Rebates
            </button>
          </div>

          {/* Enhanced Social Proof / Trust Bar */}
          <div className="border-t border-white/20 pt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em] mb-8 drop-shadow">Trusted By Homeowners & Industry Leaders</p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {/* HomeStars Badge */}
              <div className="group flex flex-col items-center cursor-default transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <div className="bg-husky-orange p-1 rounded shadow-lg">
                    <Star className="fill-white text-white w-4 h-4" />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight drop-shadow-md">HomeStars</span>
                </div>
                <div className="mt-2 flex items-center space-x-1">
                   <span className="text-husky-orange font-bold text-sm drop-shadow-sm">9.8/10</span>
                   <span className="text-gray-300 text-xs uppercase font-medium">Rating</span>
                </div>
              </div>

              {/* Google Badge */}
              <div className="group flex flex-col items-center cursor-default transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white tracking-tight drop-shadow-md">Google</span>
                  <div className="flex space-x-0.5 filter drop-shadow-sm">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <div className="mt-2 text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                  4.9/5 Average Review
                </div>
              </div>

              {/* Divider for Desktop */}
              <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>

              {/* Lennox */}
              <div className="group flex flex-col items-center opacity-90 hover:opacity-100 transition-all duration-300">
                <span className="text-2xl font-black text-white uppercase tracking-widest font-serif drop-shadow-md">LENNOX</span>
                <span className="text-[9px] text-gray-300 uppercase tracking-widest mt-1 group-hover:text-husky-blue transition-colors">Premier Dealer</span>
              </div>

              {/* Carrier */}
              <div className="group flex flex-col items-center opacity-90 hover:opacity-100 transition-all duration-300">
                <span className="text-2xl font-bold text-white italic font-sans tracking-wide drop-shadow-md">Carrier</span>
                <span className="text-[9px] text-gray-300 uppercase tracking-widest mt-1 group-hover:text-husky-blue transition-colors">Factory Authorized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;