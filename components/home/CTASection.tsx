'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#FFF5E6] to-[#FFF9F2] rounded-2xl shadow-xl border border-[#FF9933]/20 overflow-hidden p-8 md:p-12 lg:p-16">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-[#FF9933]/10 text-9xl animate-pulse z-0">✧</div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 text-[#FF9933]/10 text-9xl animate-pulse z-0">✦</div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side: Image with enhanced look */}
            <div className="relative h-64 md:h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FF5722] rounded-2xl blur-lg opacity-30"></div>
              <img
                // अपनी वास्तविक इमेज यहाँ लगाएँ
                src="/images/cta-consultation.jpg" 
                alt="Personalized Astrological Guidance with Abhishek Tripathi"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/50"
              />
            </div>

            {/* Right Side: Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700]/80 to-[#FF9933]/80 rounded-full border border-[#FF5722]/30 shadow-md mb-6">
                <Sparkles className="w-5 h-5 text-[#321414]" />
                <span className="ml-2 text-base font-bold text-[#321414]">Your Path Awaits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#321414] mb-4 leading-tight">
                Ready to Illuminate Your Life's Path?
              </h2>
              <p className="text-lg md:text-xl text-[#321414]/80 mb-8 leading-relaxed">
                Receive personalized guidance from Abhishek Tripathi to navigate life's challenges with confidence. Whether it's your career, relationships, or personal growth, discover the clarity you seek through the timeless wisdom of Vedic and KP astrology.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="relative overflow-hidden group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    Book Your Consultation
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
