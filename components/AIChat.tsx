import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-husky-darkBlue p-4 flex justify-between items-center text-white">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
              <span className="font-bold">Husky AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <X size={18} />
            </button>
          </div>
          
          <div className="h-80 bg-slate-50 p-4 overflow-y-auto">
            <div className="flex items-start mb-4">
              <div className="bg-husky-blue text-white p-3 rounded-2xl rounded-tl-none text-sm max-w-[80%] shadow-sm">
                Hello! I can help you with quotes, booking repairs, or finding rebates for your area. How can I help today?
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-white border-t border-gray-100">
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Type your question..." 
                 className="w-full pl-4 pr-10 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-husky-blue/50"
               />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 text-husky-blue hover:scale-110 transition-transform">
                 <Send size={18} />
               </button>
             </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-husky-blue to-husky-darkBlue rounded-full shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-white" size={24} />}
        
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg shadow-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with AI
          </span>
        )}
      </button>
    </div>
  );
};

export default AIChat;
