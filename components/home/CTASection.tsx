'use client';

import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Star, Hand, Hash, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-28 bg-[#321414] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-20 left-20 text-[#FF9933] text-8xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-8xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-7xl animate-pulse">★</div>
        <div className="absolute bottom-1/4 left-1/4 text-[#FF5722] text-6xl animate-pulse">☸</div>
        <div className="absolute top-1/4 left-1/3 text-[#FF9933] text-5xl animate-pulse">☉</div>
      </div>
      
      {/* Golden Border */}
      <div className="absolute inset-0 border-4 border-[#FFD700]/10 pointer-events-none"></div>
      
      {/* Cosmic Particles */}
      <div className="absolute inset-0 bg-[url('/cosmic-particles.png')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-xl mb-8 mx-auto">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg font-bold text-[#321414]">Divine Guidance</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#FFD700] mb-6">
            <span className="relative inline-block">
              Awaken Your 
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF9933]/60 z-0"></span>
            </span>{' '}
            <span className="text-[#FF9933]">Cosmic Destiny</span>
          </h2>
          
          <p className="text-xl text-[#FF9933]/90 max-w-3xl mx-auto leading-relaxed">
            Receive personalized Vedic wisdom combining astrology, palmistry, and numerology 
            to illuminate your life's path and unlock hidden potentials.
          </p>
        </div>

        {/* Premium Consultation Options */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {/* Astrology Reading */}
          <div className="relative text-center p-10 bg-gradient-to-b from-[#321414] to-[#1a0a0a] rounded-2xl border-2 border-[#FF9933]/30 hover:border-[#FFD700] hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
              <Star className="w-9 h-9 text-[#FFD700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Vedic Astrology</h3>
            <p className="text-[#FF9933]/90 mb-7 text-lg">Complete birth chart analysis</p>
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#FFD700]">• Planetary influences</p>
              <p className="text-base text-[#FFD700]">• Dasha predictions</p>
              <p className="text-base text-[#FFD700]">• Life purpose guidance</p>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10 hover:text-[#FFD700] hover:border-[#FFD700] py-6 text-lg font-medium group-hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-3" />
              Book Astrology Call
            </Button>
            <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Palmistry Reading */}
          <div className="relative text-center p-10 bg-gradient-to-b from-[#321414] to-[#1a0a0a] rounded-2xl border-2 border-[#FF9933]/30 hover:border-[#FFD700] hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
              <Hand className="w-9 h-9 text-[#FFD700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Palmistry</h3>
            <p className="text-[#FF9933]/90 mb-7 text-lg">Detailed hand analysis</p>
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#FFD700]">• Life line reading</p>
              <p className="text-base text-[#FFD700]">• Career potential</p>
              <p className="text-base text-[#FFD700]">• Relationship insights</p>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10 hover:text-[#FFD700] hover:border-[#FFD700] py-6 text-lg font-medium group-hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Video Consultation
            </Button>
            <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Numerology Reading */}
          <div className="relative text-center p-10 bg-gradient-to-b from-[#321414] to-[#1a0a0a] rounded-2xl border-2 border-[#FF9933]/30 hover:border-[#FFD700] hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
              <Hash className="w-9 h-9 text-[#FFD700]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Numerology</h3>
            <p className="text-[#FF9933]/90 mb-7 text-lg">Life path number analysis</p>
            <div className="space-y-4 mb-8">
              <p className="text-base text-[#FFD700]">• Destiny number</p>
              <p className="text-base text-[#FFD700]">• Lucky numbers</p>
              <p className="text-base text-[#FFD700]">• Future predictions</p>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10 hover:text-[#FFD700] hover:border-[#FFD700] py-6 text-lg font-medium group-hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-6 h-6 mr-3" />
              Get Numerology Report
            </Button>
            <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Premium Main CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="relative overflow-hidden group bg-gradient-to-br from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-[#321414] hover:text-[#FFD700] px-16 py-8 text-xl font-bold shadow-2xl hover:shadow-[#FF9933]/50 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center">
              Get Complete Cosmic Analysis
              <Sparkles className="w-6 h-6 ml-3 text-[#321414] group-hover:text-[#FFD700] group-hover:animate-pulse" />
            </span>
            <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
          </Button>
          <p className="text-[#FF9933]/90 mt-5 text-lg">
            Includes astrology + palmistry + numerology + personalized remedies
          </p>
        </div>
      </div>
    </section>
  );
}