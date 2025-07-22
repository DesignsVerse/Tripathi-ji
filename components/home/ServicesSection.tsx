'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Hand, Hash, Globe, Moon, Sun, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  // Icon mapping for services
  const serviceIcons = {
    astrology: <Star className="w-5 h-5 text-[#FFD700]" />,
    palmistry: <Hand className="w-5 h-5 text-[#FFD700]" />,
    numerology: <Hash className="w-5 h-5 text-[#FFD700]" />,
    vastu: <Globe className="w-5 h-5 text-[#FFD700]" />,
    horoscope: <Sun className="w-5 h-5 text-[#FFD700]" />,
    remedies: <Moon className="w-5 h-5 text-[#FFD700]" />
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#FFF8F0] to-[#FFE4C4] relative overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-10 right-10 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✦</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 md:px-5 md:py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-md md:shadow-lg mb-4 md:mb-6 mx-auto">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#321414]" />
            <span className="ml-2 md:ml-3 text-sm md:text-base font-bold text-[#321414]">Divine Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
            <span className="relative inline-block">
              Vedic Services
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FFD700]/50 z-0"></span>
            </span>{' '}
            <span className="text-[#FF5722]">For Life</span>
          </h2>
          
          <p className="text-base md:text-lg text-[#321414]/90 max-w-2xl mx-auto">
            Ancient Vedic sciences crafted to bring harmony and success to your life.
          </p>
        </div>

        {/* Services Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden hover:shadow-lg md:hover:shadow-xl transition-all duration-300 border border-[#FF9933]/30 hover:border-[#FF5722]/50 bg-white/90 hover:bg-white"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4 mb-3">
                  
                  <div>
                    <CardTitle className="text-xl md:text-xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-[#FF5722] mt-1">
                      {service.price}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-[#321414]/90 mb-5 md:mb-6 leading-relaxed">
                  {service.shortDesc}
                </CardDescription>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-[#321414]/70">Duration:</span>
                    <span className="font-medium text-[#FF5722]">{service.duration}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-[#321414]/70">Accuracy:</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 md:w-5 md:h-5 ${i < 4 ? 'text-[#FF5722] fill-[#FF5722]' : 'text-[#FF9933]/40'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/services/${service.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 md:mt-5 border border-[#FF9933] text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300 group-hover:shadow-sm py-4 md:py-5 text-base md:text-lg font-medium"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-8 md:px-10 py-5 md:py-6 text-lg font-bold shadow-lg hover:shadow-[#FF5722]/50 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}