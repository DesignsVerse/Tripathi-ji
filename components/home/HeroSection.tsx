'use client';

import { Button } from '@/components/ui/button';
import { Star, Users, Calendar, Hand, Hash, Rotate3D, Phone, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFF9F2] overflow-hidden border-b-2 border-[#FF9933]/30 min-h-[90vh] flex items-center px-2 sm:px-4">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-[#FF5722]/20 text-6xl sm:text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-16 text-[#FF5722]/20 text-6xl sm:text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700]/20 text-5xl sm:text-6xl animate-pulse">★</div>
        
        {/* Subtle cosmic dust particles */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-[#FF5722]"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Golden border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent">
        <div className="absolute inset-0 bg-[#FFD700] opacity-20 animate-[pulse_3s_infinite]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content First on Mobile */}
          <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left flex flex-col items-center md:items-start w-full max-w-xl mx-auto order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg text-xs sm:text-sm relative overflow-hidden group">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#321414] animate-[spin_5s_linear_infinite]" />
              <span className="ml-2 sm:ml-3 text-sm sm:text-base font-bold text-[#321414]">Vedic & KP Astrology Expert in Ujjain</span>
            </div>
            
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#321414]">
                <span className="block">Navigate Your Life with</span>
                <span className="relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">
                    Cosmic Wisdom
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] rounded-full z-0" />
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg px-2 text-[#321414]/90 leading-relaxed  max-w-lg">
                Inheriting the sacred legacy of his father, Pandit R.K. Tripathi Ji, Abhishek Tripathi guides you with profound insights from Vedic & KP Astrology to unlock your true potential.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/90 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#FFD700]/50 sm:border-2 shadow-sm sm:shadow-md backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <div className="p-1.5 sm:p-2 bg-[#FF5722]/10 rounded-full">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5722] animate-[bounce_2s_infinite]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold">5000+</p>
                  <p className="text-xs sm:text-sm text-[#321414]/80">Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/90 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#FFD700]/50 sm:border-2 shadow-sm sm:shadow-md backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <div className="p-1.5 sm:p-2 bg-[#FF5722]/10 rounded-full">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5722] animate-[bounce_2s_infinite_delay_1s]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold">20+ Years</p>
                  <p className="text-xs sm:text-sm text-[#321414]/80">of Legacy</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full sm:w-auto justify-center md:justify-start">
              <Button className="relative overflow-hidden group bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold shadow-lg sm:shadow-xl hover:shadow-[#FF5722]/50 transition-all duration-300 min-w-[180px]">
                <span className="relative z-10 flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Book a Consultation
                </span>
              </Button>
              <Button variant="outline" className="relative overflow-hidden group border-2 border-[#321414] text-[#321414] hover:bg-[#FF9933]/10 hover:border-[#FF5722] px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold shadow-sm sm:shadow-md transition-all duration-300 min-w-[180px]">
                <span className="relative z-10 flex items-center">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Explore Services
                </span>
              </Button>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full flex justify-center order-1 lg:order-2 h-64 sm:h-80 md:h-[450px] lg:h-[550px] relative">
            <div className="absolute -inset-2 sm:-inset-3 rounded-xl lg:rounded-2xl bg-gradient-to-br from-[#FFD700] via-[#FF9933] to-[#FF5722] opacity-30 blur-md z-0" />
            
            <div className="relative z-10 h-full w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl lg:shadow-3xl border-l-4 border-t-4 border-r-2 border-b-2 border-[#FFD700]">
              <img
                src="/hero/mahakaal.jpg"
                alt="Astro Abhishek Tripathi - Astrologer in Ujjain"
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#321414] fill-current" />
                    </div>
                    <p className="font-bold text-base sm:text-lg md:text-xl">Indore MahaKal Temple</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:absolute md:-bottom-4 md:-left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border-2 border-[#FFD700] z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-[#FF5722] rounded-full flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-sm">KP Astrology</p>
                  <p className="text-xs text-gray-600">For Precise Predictions</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:absolute md:-top-4 md:-right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-xl border-2 border-[#FFD700] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-[#321414] rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="w-4 h-4 text-[#FFD700]" />
                </div>
                <div className="ml-2">
                  <p className="font-bold text-sm">Vedic Astrology</p>
                  <p className="text-xs text-gray-600">Timeless Wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.3; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
}
