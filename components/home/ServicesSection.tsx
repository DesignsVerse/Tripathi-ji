'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Hand, Hash, Globe, Sun, Moon, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  // Icon mapping for services
  const serviceIcons = {
    astrology: <Star className="w-8 h-8 text-[#FFD700]" />,
    palmistry: <Hand className="w-8 h-8 text-[#FFD700]" />,
    numerology: <Hash className="w-8 h-8 text-[#FFD700]" />,
    vastu: <Globe className="w-8 h-8 text-[#FFD700]" />,
    horoscope: <Sun className="w-8 h-8 text-[#FFD700]" />,
    remedies: <Moon className="w-8 h-8 text-[#FFD700]" />
  };

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-12 left-12 text-[#FF9933] text-6xl md:text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-12 right-12 text-[#FF9933] text-6xl md:text-7xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg md:text-xl font-bold text-[#321414]">Divine Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4 relative">
            <span className="relative inline-block">
              Our Vedic Services
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
            </span>
            <span className="text-[#FF5722]"> For Your Journey</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient wisdom of Vedic sciences to bring harmony, prosperity, and clarity to your life’s path.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden border border-[#FF9933]/20 hover:border-[#FF5722]/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/95 hover:bg-white"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
              <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-center space-x-3 mb-2">
                  {serviceIcons[service.icon as keyof typeof serviceIcons]}
                  <CardTitle className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <CardDescription className="text-[#321414]/90 text-base leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </CardDescription>
                
                <Link href={`/services/${service.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Explore Service
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-10 py-5 text-lg"
            >
              Explore All Services
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}