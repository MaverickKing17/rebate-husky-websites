import React, { useState } from 'react';
import { Calculator, CheckCircle2, DollarSign } from 'lucide-react';

const RebateCalculator: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [heatingType, setHeatingType] = useState('furnace');
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateRebate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API calculation
    setTimeout(() => {
      let base = 0;
      if (heatingType === 'heatpump') base = 7100;
      if (heatingType === 'furnace') base = 1500;
      if (heatingType === 'water') base = 1000;
      
      // Randomize slightly for demo feel
      setResult(base + (Math.floor(Math.random() * 5) * 100));
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="rebates" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-husky-darkBlue to-husky-blue z-0"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-bold mb-6">
              2026 HVAC Incentives Updated
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Calculate Your <br/> Potential Savings
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">
              Homeowners in the GTA can qualify for up to <span className="font-bold text-white">$10,500</span> in rebates through Enbridge and the Greener Homes Grant. Find out what you qualify for in seconds.
            </p>
            
            <ul className="space-y-4">
              {[
                'Enbridge Home Efficiency Rebate Plus',
                'Canada Greener Homes Grant',
                'Save On Energy Incentives'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-blue-50">
                  <CheckCircle2 className="mr-3 text-husky-orange" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Calculator Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 text-husky-blue rounded-xl mr-4">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Rebate Estimator</h3>
              </div>

              {!result ? (
                <form onSubmit={calculateRebate} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Postal Code</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. L4K 2S9"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-husky-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all uppercase"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Upgrade Type</label>
                    <select 
                      value={heatingType}
                      onChange={(e) => setHeatingType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-husky-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="furnace">Furnace Replacement</option>
                      <option value="heatpump">Heat Pump Installation</option>
                      <option value="water">Water Heater</option>
                      <option value="full">Full Home Retrofit</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-husky-darkBlue text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {loading ? (
                      <span className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      'Estimate Savings'
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 animate-in zoom-in duration-300">
                  <p className="text-slate-500 font-medium mb-2">Estimated Rebate Eligibility</p>
                  <div className="text-5xl font-black text-husky-green-600 flex justify-center items-center text-green-600 mb-4">
                    <DollarSign size={32} strokeWidth={3} />
                    {result.toLocaleString()}
                  </div>
                  <p className="text-sm text-slate-400 mb-6">
                    *Based on typical upgrades in {postalCode.toUpperCase()}. Subject to audit.
                  </p>
                  <button 
                    onClick={() => setResult(null)}
                    className="text-husky-blue font-bold hover:underline"
                  >
                    Calculate Another
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="w-full py-3 bg-husky-orange text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all">
                      Lock In These Savings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RebateCalculator;
