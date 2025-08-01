"use client";

import Link from 'next/link';
import { horoscopes } from '@/data/horoscope';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Star } from 'lucide-react';

export default function HoroscopePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF9F2] to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FFF5EB] to-[#FFEBD5] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <Sparkles className="absolute top-20 left-1/4 w-8 h-8 text-[#FF5722] animate-pulse" />
            <Star className="absolute bottom-1/3 right-20 w-6 h-6 text-[#FFD700] animate-spin-slow" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/30 shadow-md mb-6">
                <Sparkles className="w-5 h-5 text-[#321414]" />
                <span className="ml-2 text-sm font-bold text-[#321414]">Your Cosmic Path</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#321414] mb-6 leading-tight">
                Discover Your
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">
                  Daily Horoscope
                </span>
              </h1>
              
              <p className="text-base md:text-xl text-[#321414]/90 leading-relaxed max-w-3xl mx-auto">
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
                Choose Your <span className="text-[#FF5722]">Zodiac Sign</span>
              </h2>
              <p className="text-lg text-[#321414]/80 max-w-2xl mx-auto">
                Find your sign and uncover personalized Vedic insights for the day.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {horoscopes.map((horoscope) => (
                <Card 
                  key={horoscope.id} 
                  className="group relative overflow-hidden border border-[#FFD700]/50 hover:border-[#FF5722]/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img
                      src={horoscope.image}
                      alt={horoscope.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <CardHeader className="p-0 pb-2">
                      <CardTitle className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors">
                        {horoscope.name}
                      </CardTitle>
                      <p className="text-sm text-[#321414]/70">{horoscope.dateRange}</p>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-sm text-[#321414]/80 leading-relaxed my-3 line-clamp-3">
                        {horoscope.shortDesc}
                      </p>
                    </CardContent>
                    <div className="mt-auto">
                      <Link href={`/horoscope/${horoscope.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FFF5EB] hover:border-[#FF5722] font-semibold rounded-lg"
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Personalized Vedic Insights
            </h2>
            <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
              Book a consultation to dive deeper into your horoscope and align your life with cosmic energies.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#FF5722] hover:bg-orange-50 font-bold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Personal Consultation
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
