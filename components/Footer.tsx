import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="font-black text-2xl tracking-tighter text-white italic mb-6">
              HUSKY<span className="text-husky-red">AIR</span>
            </div>
            <p className="text-gray-400 mb-6">
              Serving the GTA since 1974. We are committed to keeping your home comfortable in every season.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-husky-blue transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Furnace Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AC Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heat Pumps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Heaters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-husky-orange mt-1" size={20} />
                <span className="text-gray-400">2104 HWY 7 West, Unit 17/18,<br/>Vaughan, ON L4K 2S9</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-husky-orange" size={20} />
                <a href="tel:905-761-9485" className="text-white font-bold hover:underline">905-761-9485</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-husky-orange" size={20} />
                <a href="mailto:info@huskyair.com" className="text-gray-400 hover:text-white">info@huskyair.com</a>
              </li>
            </ul>
          </div>

          {/* Map Embed (Placeholder) */}
          <div className="rounded-xl overflow-hidden h-48 bg-slate-800 relative group cursor-pointer">
            <img 
              src="https://picsum.photos/400/300" 
              alt="Map" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm text-sm font-bold">View Service Area</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Husky Heating & Air Conditioning. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
