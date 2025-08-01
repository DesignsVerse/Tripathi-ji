'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#FFF5E6] to-[#FFF9F2] rounded-2xl shadow-xl border border-[#FF9933]/20 overflow-hidden p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 text-[#FF9933]/10 text-7xl sm:text-9xl animate-pulse z-0">✧</div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 text-[#FF9933]/10 text-7xl sm:text-9xl animate-pulse z-0">✦</div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Side: Image */}
            <div className="relative h-[300px] sm:h-[300px] md:h-[300px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FF5722] rounded-2xl blur-lg opacity-30"></div>
              <img
                src="/cta/papa-2.jpg" 
                alt="Honoring the profound legacy of the distinguished astrologer, Pandit Shri R.K. Tripathi Ji"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/50"
              />
            </div>

            {/* Right Side: Content */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700]/80 to-[#FF9933]/80 rounded-full border border-[#FF5722]/30 shadow-md mb-5 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#321414]" />
                <span className="ml-2 text-sm sm:text-base font-bold text-[#321414]">A Legacy of Divine Wisdom</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#321414] mb-3 sm:mb-4 leading-tight">
                Honoring the Legacy of Pandit Shri R.K. Tripathi Ji
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#321414]/80 mb-6 sm:mb-8 leading-relaxed">
                At <strong className="bg-[#FF9933]/30 text-[#321414] font-bold px-2 py-1 rounded-md">R.K. Tripathi Jyotish Kendra</strong>, the sacred tradition of the revered guru and spiritual guide, Pandit Shri R.K. Tripathi Ji, is proudly continued by his son, Abhishek Tripathi. Find clarity and direction with trusted guidance rooted in generations of astrological mastery.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="relative overflow-hidden group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Book a Consultation 
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
