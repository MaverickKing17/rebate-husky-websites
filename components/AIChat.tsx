import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

interface AIChatProps {
  location: string;
}

const AIChat: React.FC<AIChatProps> = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial AI greeting with personalization
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          { 
            role: 'ai', 
            text: `Hello! I noticed you're in ${location}. I can help you find the latest 2026 HVAC rebates in your area or schedule a priority repair. How can I assist you?` 
          }
        ]);
        setIsTyping(false);
      }, 1500);
    }
  }, [location]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMsg = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking and responding (Lead Gen Logic)
    setTimeout(() => {
      let response = "I'd be happy to help with that. To get you the most accurate quote, would you prefer a quick phone call or an email summary?";
      
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes('rebate') || lowerInput.includes('saving')) {
        response = "We have specific rebates for Enbridge and the Greener Homes Grant active right now. I can calculate your eligibility instantly. What is your home's approximate square footage?";
      } else if (lowerInput.includes('repair') || lowerInput.includes('broken') || lowerInput.includes('fix')) {
        response = `I can flag this as a priority request for our ${location} team. Is your system currently not running at all?`;
      } else if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('quote')) {
        response = "For a precise quote, I just need a few details. Are you looking to replace a furnace, AC, or install a Heat Pump?";
      }

      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-husky-darkBlue to-husky-blue p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Husky AI Agent</div>
                <div className="text-[10px] text-blue-100 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1 animate-pulse"></span>
                  Online • Local to {location}
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <X size={18} />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-grow bg-slate-50 p-4 overflow-y-auto h-80 md:h-96 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-husky-blue/10 flex-shrink-0 mr-2 flex items-center justify-center mt-1">
                    <Bot size={14} className="text-husky-blue" />
                  </div>
                )}
                <div 
                  className={`
                    p-3 rounded-2xl text-sm max-w-[80%] shadow-sm leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-husky-blue text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-gray-100 rounded-tl-none'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="w-6 h-6 rounded-full bg-husky-blue/10 flex-shrink-0 mr-2 flex items-center justify-center mt-1">
                  <Bot size={14} className="text-husky-blue" />
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
             <div className="relative flex items-center">
               <input 
                 type="text" 
                 value={inputText}
                 onChange={(e) => setInputText(e.target.value)}
                 onKeyDown={handleKeyPress}
                 placeholder="Ask about quotes or rebates..." 
                 className="w-full pl-4 pr-12 py-3 bg-gray-50 rounded-xl text-sm border border-gray-200 focus:outline-none focus:border-husky-blue focus:ring-1 focus:ring-husky-blue transition-all"
               />
               <button 
                 onClick={handleSend}
                 disabled={!inputText.trim()}
                 className="absolute right-2 p-1.5 bg-husky-blue text-white rounded-lg hover:bg-husky-darkBlue disabled:opacity-50 disabled:hover:bg-husky-blue transition-colors"
               >
                 <Send size={16} />
               </button>
             </div>
             <div className="text-center mt-2">
               <p className="text-[10px] text-gray-400 flex items-center justify-center">
                 <Sparkles size={8} className="mr-1" /> AI-Powered Assistant
               </p>
             </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-husky-blue to-husky-darkBlue rounded-full shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:scale-105 transition-all duration-300 relative"
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <MessageSquare className="text-white relative z-10" size={28} />
          
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-20"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-x-4 group-hover:translate-x-0 pointer-events-none">
            Get Instant Quote
            <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2"></div>
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChat;