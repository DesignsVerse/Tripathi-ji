'use client';

import { Button } from '@/components/ui/button';
import { Star, Users, Calendar, Hand, Hash, Rotate3D, Phone, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF8F0] to-[#FFE4C4] overflow-hidden border-b-2 border-[#FF9933]/30">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/cosmic-pattern.png')] opacity-5"></div>
        <div className="absolute top-10 left-10 text-[#FF5722] text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-16 text-[#FF5722] text-6xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-5xl animate-pulse">★</div>
        <div className="absolute bottom-1/4 left-1/3 text-[#321414] text-4xl animate-pulse">☽</div>
      </div>
      
      {/* Golden border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10 space-y-10 text-[#321414]">
            {/* Premium badge */}
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg">
              <Sparkles className="w-6 h-6 text-[#321414]" />
              <span className="ml-3 text-lg font-bold text-[#321414]">Vedic Astrology Expert</span>
            </div>
            
            {/* Headline with cosmic effect */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">Unlock Your</span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF5722]">Divine Destiny</span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#FFD700]/60 z-0"></span>
                </span>
              </h1>
              
              <p className="text-xl text-[#321414]/90 leading-relaxed font-medium">
                Reveal your cosmic blueprint through ancient Vedic wisdom. 
                <span className="block mt-2">25+ years of mastery in astrology, palmistry, and numerology guiding you to enlightenment.</span>
              </p>
            </div>

            {/* Premium Trust Indicators */}
            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-xl border-2 border-[#FFD700]/50 shadow-md backdrop-blur-sm">
                <div className="p-2 bg-[#FF5722]/10 rounded-full">
                  <Users className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-lg font-bold">10,000+</p>
                  <p className="text-sm text-[#321414]/80">Satisfied Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-xl border-2 border-[#FFD700]/50 shadow-md backdrop-blur-sm">
                <div className="p-2 bg-[#FF5722]/10 rounded-full">
                  <Calendar className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-lg font-bold">25+ Years</p>
                  <p className="text-sm text-[#321414]/80">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-xl border-2 border-[#FFD700]/50 shadow-md backdrop-blur-sm">
                <div className="p-2 bg-[#FF5722]/10 rounded-full">
                  <Rotate3D className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-lg font-bold">Vedic</p>
                  <p className="text-sm text-[#321414]/80">Astrology</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 p-4 rounded-xl border-2 border-[#FFD700]/50 shadow-md backdrop-blur-sm">
                <div className="p-2 bg-[#FF5722]/10 rounded-full">
                  <Hand className="w-6 h-6 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-lg font-bold">Palm</p>
                  <p className="text-sm text-[#321414]/80">Reading</p>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <Button className="relative overflow-hidden group bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-10 py-6 text-lg font-bold shadow-xl hover:shadow-[#FF5722]/50 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Book Free Consultation
                </span>
                <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
              <Button variant="outline" className="relative overflow-hidden group border-2 border-[#321414] text-[#321414] hover:bg-[#FF9933]/10 hover:border-[#FF5722] px-10 py-6 text-lg font-bold shadow-md transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  <Hash className="w-6 h-6 mr-3" />
                  Numerology Report
                </span>
                <span className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </div>

          {/* Premium Image Content */}
          <div className="relative h-[600px]">
            {/* Main image with golden frame */}
            <div className="relative z-10 h-full w-full rounded-2xl overflow-hidden shadow-2xl border-l-[6px] border-t-[6px] border-r-[2px] border-b-[2px] border-[#FFD700] transform rotate-1">
              <img
                src="/astrologer-premium.jpg"
                alt="Vedic Astrology Consultation"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#321414]/30 to-[#321414]/80 flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-[#321414] fill-current" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">Pandit Vivekanand Tripathi</p>
                      <p className="text-sm opacity-90">Vedic Astrology & Numerology Expert</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <span className="px-3 py-1 bg-[#FF5722]/80 text-xs rounded-full">Jyotish Acharya</span>
                    <span className="px-3 py-1 bg-[#FFD700]/20 text-xs rounded-full">25+ Years</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl border-2 border-[#FFD700] z-20 transform -rotate-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#FF5722] rounded-full flex items-center justify-center shadow-md">
                  <Hand className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-sm">Palmistry</p>
                  <p className="text-xs text-gray-600">Life line analysis</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-xl border-2 border-[#FFD700] z-20 transform rotate-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#321414] rounded-full flex items-center justify-center shadow-md">
                  <Hash className="w-6 h-6 text-[#FFD700]" />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-sm">Numerology</p>
                  <p className="text-xs text-gray-600">Life path number</p>
                </div>
              </div>
            </div>

            {/* Decorative cosmic elements */}
            <div className="absolute -bottom-10 right-10 w-20 h-20 rounded-full bg-[#FFD700]/10 border-2 border-[#FFD700]/30 backdrop-blur-sm"></div>
            <div className="absolute top-10 -left-10 w-16 h-16 rounded-full bg-[#FF5722]/10 border-2 border-[#FF5722]/30 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}