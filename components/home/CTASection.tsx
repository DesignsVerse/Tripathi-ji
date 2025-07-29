'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-8 left-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7898123/pexels-photo-7898123.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Vedic Cosmic Guidance"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right Side: Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-4">
              <Sparkles className="w-5 h-5 text-[#321414]" />
              <span className="ml-3 text-base font-bold text-[#321414]">Cosmic Guidance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
              <span className="relative inline-block">
                Unlock Your
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
              </span>{' '}
              <span className="text-[#FF5722]">Destiny</span>
            </h2>
            <p className="text-lg md:text-xl text-[#321414]/90 mb-6 leading-relaxed">
              Discover personalized Vedic astrology, numerology, and Vastu services to guide your life’s journey with clarity and purpose.  Discover personalized Vedic astrology, numerology, and Vastu services to guide your life’s journey with clarity and purpose.  Discover personalized Vedic astrology, numerology, and Vastu services to guide your life’s journey with clarity and purpose.  Discover personalized Vedic astrology, numerology, and Vastu services to guide your life’s journey with clarity and purpose.  Discover personalized Vedic astrology, numerology, and Vastu services to guide your life’s journey with clarity and purpose.
            </p>
            <Link href="/services">
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-10 py-5 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
                </span>
                <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}