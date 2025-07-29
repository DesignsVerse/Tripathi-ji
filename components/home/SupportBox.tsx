'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Phone, Clock, Star } from 'lucide-react';

export default function SupportBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    { icon: '🪐', text: 'Horoscope analysis' },
    { icon: '🔢', text: 'Numerology report' },
    { icon: '✋', text: 'Palm reading' },
    { icon: '💎', text: 'Gemstone recommendation' },
    { icon: '🏠', text: 'Vastu consultation' },
    { icon: '🕉️', text: 'Spiritual guidance' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {text: message, sender: 'user'}]);
    setMessage('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: getBotResponse(message),
        sender: 'bot'
      }]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string) => {
    const responses = [
      "I can help you with that. Our astrologers specialize in this area.",
      "For detailed guidance, I recommend booking a personal consultation.",
      "This requires analysis of your birth chart. Please share your birth details.",
      "The planets suggest this is an auspicious time for such inquiries.",
      "Our senior astrologer Panditji can provide remedies for this situation."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleQuickOption = (option: string) => {
    setMessages(prev => [...prev, {
      text: option,
      sender: 'user'
    }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `You selected: ${option}. Let me connect you with our ${option.toLowerCase()} specialist.`,
        sender: 'bot'
      }]);
    }, 800);
  };

  useEffect(() => {
    // Auto-scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Support Button */}
      <div className="fixed bottom-6 right-6 z-50 ">
        <Button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-200 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          {!isOpen && (
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD700] text-[#321414] rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
              LIVE
            </span>
          )}
        </Button>
      </div>

      {/* Support Modal */}
      {isOpen && (
        <div className={`fixed ${isMinimized ? 'bottom-6 right-6 w-64' : 'bottom-6 right-6 w-96'} max-w-[calc(100vw-2rem)] z-50 transition-all duration-300`}>
          <div className="bg-white rounded-2xl shadow-2xl border border-[#FF9933]/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF5722] to-[#FF9933] text-white p-4 flex justify-between items-center cursor-pointer"
              onClick={() => setIsMinimized(!isMinimized)}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <h3 className="font-semibold">Astro Support</h3>
                  <p className="text-xs text-[#FFD700] flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Online now
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                  }}
                >
                  {isMinimized ? '↑' : '↓'}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-4 h-64 overflow-y-auto bg-[#FFF8F0]">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center text-[#321414]/70">
                      <Star className="w-8 h-8 text-[#FF9933] mb-2" />
                      <p className="font-medium">How can we help you today?</p>
                      <p className="text-sm">Ask about astrology, remedies, or consultations</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' 
                              ? 'bg-[#FF5722] text-white rounded-tr-none' 
                              : 'bg-white border border-[#FF9933]/30 rounded-tl-none'}`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Quick Options */}
                <div className="p-3 border-t border-[#FF9933]/20 bg-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickOption(option.text)}
                        className="text-xs px-3 py-1.5 bg-[#FF9933]/10 hover:bg-[#FF9933]/20 text-[#321414] rounded-full border border-[#FF9933]/30 transition-colors flex items-center"
                      >
                        <span className="mr-1">{option.icon}</span>
                        {option.text}
                      </button>
                    ))}
                  </div>

                  {/* Message Form */}
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your question..."
                      className="flex-1 p-2 border border-[#FF9933]/40 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9933]"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-[#FF5722] hover:bg-[#E64A19] text-white h-10 w-10 p-0"
                      disabled={!message.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>

                {/* Footer */}
                <div className="px-4 py-2 bg-[#FFF8F0] border-t border-[#FF9933]/20 flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs text-[#321414]/70">
                    <Phone className="w-3 h-3" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#321414]/70">
                    <Clock className="w-3 h-3" />
                    <span>9AM-9PM (IST)</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}