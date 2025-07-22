'use client';

import { Button } from '@/components/ui/button';
import { Star, Users, Calendar, Hand, Hash, Rotate3D, Phone, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF8F0] to-[#FFE4C4] overflow-x-hidden overflow-hidden border-b-2 border-[#FF9933]/30 min-h-[90vh] flex items-center px-2 sm:px-4">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-[#FF5722] text-4xl sm:text-5xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-16 text-[#FF5722] text-4xl sm:text-5xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-3xl sm:text-4xl animate-pulse">★</div>
      </div>
      
      {/* Golden border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Premium Image Content - Show on all screens, top on mobile */}
          <div className="w-full flex justify-center order-1 md:order-none h-44 sm:h-56 md:h-[400px] lg:h-[500px] mb-4 md:mb-0">
            {/* Main image with golden frame */}
            <div className="relative z-10 h-full w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border-l-4 border-t-4 border-r-2 border-b-2 border-[#FFD700] transform rotate-1">
              <img
                src="/astrologer-premium.jpg"
                alt="Vedic Astrology Consultation"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#321414]/30 to-[#321414]/80 flex items-end p-4 sm:p-6">
                <div className="text-white">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-1 sm:mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#321414] fill-current" />
                    </div>
                    <p className="font-bold text-base sm:text-lg md:text-xl">Pandit Vivekanand Tripathi</p>
                  </div>
                  <p className="text-xs sm:text-sm opacity-90">Vedic Astrology & Numerology Expert</p>
                </div>
              </div>
            </div>
            {/* Floating elements - Hide on mobile, show on md+ */}
            <div className="hidden md:absolute md:-bottom-4 md:-left-4 md:bg-white md:p-4 md:rounded-lg md:shadow-lg md:border-2 md:border-[#FFD700] md:z-20 md:transform md:-rotate-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FF5722] rounded-full flex items-center justify-center shadow-md">
                  <Hand className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-xs sm:text-sm">Palmistry</p>
                  <p className="text-xs text-gray-600">Life line</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8 order-2 md:order-none text-center md:text-left flex flex-col items-center md:items-start w-full max-w-xl mx-auto">
            {/* Premium badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg text-xs sm:text-sm">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#321414]" />
              <span className="ml-2 sm:ml-3 text-sm sm:text-base font-bold text-[#321414]">Vedic Astrology Expert</span>
            </div>
            
            {/* Headline with cosmic effect */}
            <div className="space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                <span className="block">Unlock Your</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF5722]">Divine Destiny</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 bg-[#FFD700]/60 z-0"></span>
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg md:text-xl text-[#321414]/90 leading-relaxed font-medium">
                Reveal your cosmic blueprint through ancient Vedic wisdom. 25+ years of mastery in astrology, palmistry, and numerology guiding you to enlightenment.
              </p>
            </div>

            {/* Premium Trust Indicators - Simplified for mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#FFD700]/50 sm:border-2 shadow-sm sm:shadow-md backdrop-blur-sm">
                <div className="p-1.5 sm:p-2 bg-[#FF5722]/10 rounded-full">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold">10,000+</p>
                  <p className="text-xs sm:text-sm text-[#321414]/80">Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#FFD700]/50 sm:border-2 shadow-sm sm:shadow-md backdrop-blur-sm">
                <div className="p-1.5 sm:p-2 bg-[#FF5722]/10 rounded-full">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold">25+ Years</p>
                  <p className="text-xs sm:text-sm text-[#321414]/80">Experience</p>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons - Always in a row */}
            <div className="flex flex-row gap-3 pt-3 w-full sm:w-auto justify-center md:justify-start">
              <Button className="relative overflow-hidden group bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base font-bold shadow-lg sm:shadow-xl hover:shadow-[#FF5722]/50 transition-all duration-300 min-w-[120px]">
                <span className="relative z-10 flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2" />
                  Free Consultation
                </span>
                <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
              <Button variant="outline" className="relative overflow-hidden group border border-[#321414] sm:border-2 text-[#321414] hover:bg-[#FF9933]/10 hover:border-[#FF5722] px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base font-bold shadow-sm sm:shadow-md transition-all duration-300 min-w-[120px]">
                <span className="relative z-10 flex items-center">
                  <Hash className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-2" />
                  Numerology Report
                </span>
                <span className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}