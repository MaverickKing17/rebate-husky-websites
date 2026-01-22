import React, { useState } from 'react';
import { Calculator, CheckCircle2, DollarSign, ScanLine, Cpu, Search } from 'lucide-react';

const RebateCalculator: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [heatingType, setHeatingType] = useState('furnace');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  const calculateRebate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setScanStep(0);

    // Simulate AI Multi-step processing
    const steps = [
      () => setScanStep(1), // Connecting to DB
      () => setScanStep(2), // Analyzing Home Profile
      () => setScanStep(3), // Matching Incentives
    ];

    steps.forEach((step, i) => {
      setTimeout(step, (i + 1) * 600);
    });

    setTimeout(() => {
      let base = 0;
      if (heatingType === 'heatpump') base = 7100;
      if (heatingType === 'furnace') base = 1500;
      if (heatingType === 'water') base = 1000;
      if (heatingType === 'full') base = 10500;
      
      // Randomize slightly for demo feel
      setResult(base + (Math.floor(Math.random() * 5) * 100));
      setLoading(false);
      setScanStep(0);
    }, 2500);
  };

  const getLoadingText = () => {
    switch(scanStep) {
      case 0: return "Initializing AI Engine...";
      case 1: return "Querying Enbridge Database...";
      case 2: return "Analyzing Local Climate Data...";
      case 3: return "Optimizing Max Rebate...";
      default: return "Processing...";
    }
  };

  return (
    <section id="rebates" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-husky-darkBlue to-slate-900 z-0"></div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-bold mb-6 backdrop-blur-md">
              <Cpu size={16} className="mr-2 animate-pulse" />
              AI-Powered Rebate Finder v2.0
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Maximize Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Government Rebates</span>
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-lg leading-relaxed">
              Our new AI algorithm cross-references your postal code against 15+ active municipal, provincial, and federal incentive programs to ensure you don't miss a single dollar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Enbridge HER+ Program',
                'Greener Homes Loan',
                'Heat Pump Installs',
                'Smart Thermostats'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="mr-3 text-green-400" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
              {loading && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-husky-blue via-husky-orange to-husky-blue animate-[shimmer_2s_infinite]"></div>
              )}

              <div className="flex items-center mb-8">
                <div className="p-4 bg-husky-blue text-white rounded-2xl mr-4 shadow-lg shadow-blue-500/20">
                  <ScanLine size={28} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-slate-900">Eligibility Scanner</h3>
                   <p className="text-slate-500 text-sm">Real-time database connection</p>
                </div>
              </div>

              {!result ? (
                <form onSubmit={calculateRebate} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Location</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                      <input 
                        type="text" 
                        required
                        placeholder="Postal Code (e.g. L4K 2S9)"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-husky-blue focus:ring-0 outline-none transition-all uppercase font-bold text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Upgrade Intent</label>
                    <div className="relative">
                      <select 
                        value={heatingType}
                        onChange={(e) => setHeatingType(e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-husky-blue focus:ring-0 outline-none transition-all appearance-none font-semibold text-slate-800"
                      >
                        <option value="furnace">High-Efficiency Furnace</option>
                        <option value="heatpump">Heat Pump (Max Rebates)</option>
                        <option value="water">Tankless Water Heater</option>
                        <option value="full">Whole Home Retrofit</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-5 bg-gradient-to-r from-husky-darkBlue to-husky-blue text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-80 disabled:cursor-wait relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex justify-center items-center">
                      {loading ? (
                        <>
                          <ScanLine className="animate-spin mr-3" size={20} />
                          {getLoadingText()}
                        </>
                      ) : (
                        <>Scan For Rebates <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span></>
                      )}
                    </span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="inline-block p-3 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Potential Savings Found</p>
                  <div className="text-6xl font-black text-husky-darkBlue flex justify-center items-center mb-2 tracking-tighter">
                    <span className="text-4xl mr-1 text-slate-400">$</span>
                    {result.toLocaleString()}
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 mb-6 text-sm text-husky-blue font-medium">
                    Matched with 3 active programs in {postalCode.toUpperCase()}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setResult(null)}
                      className="py-3 text-slate-500 font-bold hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                    >
                      Reset
                    </button>
                    <button className="py-3 bg-husky-orange text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:-translate-y-1 transition-all">
                      Claim Now
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Trust Badge */}
            <div className="mt-6 flex justify-center items-center space-x-6 opacity-60">
               <span className="text-white text-xs font-semibold uppercase tracking-widest">Verified Data Sources:</span>
               <div className="h-6 w-auto font-bold text-white/80">Enbridge</div>
               <div className="h-6 w-auto font-bold text-white/80">Gov. Canada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RebateCalculator;