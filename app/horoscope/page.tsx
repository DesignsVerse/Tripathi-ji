'use client';

import Link from 'next/link';
import { horoscopes } from '@/data/horoscope';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star } from 'lucide-react';

export default function HoroscopePage() {
  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FFF5E6] to-[#FFEFD5] py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="absolute top-10 left-10 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✧</div>
          <div className="absolute bottom-10 right-10 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✦</div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
                <Sparkles className="w-5 h-5 text-[#321414]" />
                <span className="ml-3 text-base md:text-lg font-bold text-[#321414]">Your Cosmic Path</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-6">
                Discover Your Horoscope
              </h1>
              <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed">
                Explore the wisdom of the stars with our Vedic horoscope insights for all 12 zodiac signs.
              </p>
            </div>
          </div>
        </section>

        {/* Zodiac Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
                Your <span className="text-[#FF5722]">Zodiac Sign</span>
              </h2>
              <p className="text-lg md:text-xl text-[#321414]/80">
                Find your sign and uncover personalized Vedic insights
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {horoscopes.map((horoscope) => (
                <Card 
                  key={horoscope.id} 
                  className="group relative overflow-hidden border border-[#FF9933]/20 hover:border-[#FF5722]/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/95 hover:bg-white"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={horoscope.image}
                      alt={horoscope.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3 pt-4 px-4">
                    <CardTitle className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors">
                      {horoscope.name}
                    </CardTitle>
                    <p className="text-sm text-[#321414]/70">{horoscope.dateRange}</p>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <p className="text-sm md:text-base text-[#321414]/80 leading-relaxed mb-4 line-clamp-3">
                      {horoscope.shortDesc}
                    </p>
                    <Link href={`/horoscope/${horoscope.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] font-semibold rounded-lg"
                      >
                        Explore {horoscope.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFD700_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Personalized Vedic Insights
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Book a consultation to dive deeper into your horoscope and align your life with cosmic energies.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#FF5722] hover:bg-[#FFEFD5] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Consultation
            </Button>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}