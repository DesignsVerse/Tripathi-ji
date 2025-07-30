'use client';

import Link from 'next/link';
import { services } from '@/data/services'; // Make sure the path is correct
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Sun, Sparkles, Heart, Briefcase, Gem, Clock } from 'lucide-react';

// Icon mapping for services
const serviceIcons = {
  Sun: <Sun className="w-7 h-7 text-white" />,
  Sparkles: <Sparkles className="w-7 h-7 text-white" />,
  Heart: <Heart className="w-7 h-7 text-white" />,
  Briefcase: <Briefcase className="w-7 h-7 text-white" />,
  Gem: <Gem className="w-7 h-7 text-white" />,
  Clock: <Clock className="w-7 h-7 text-white" />,
};

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-[#FFF9F2] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-12 left-12 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-12 right-12 text-[#FF9933] text-7xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:16px_16px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#FFD700]/80 to-[#FF9933]/80 rounded-full border border-[#FF5722]/30 shadow-md mb-6">
            <Star className="w-5 h-5 text-[#321414]" />
            <span className="ml-2 text-base font-bold text-[#321414]">Our Sacred Offerings</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#321414] mb-4">
            Astrological Services for a Balanced Life
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/80 max-w-3xl mx-auto leading-relaxed">
            Explore our range of specialized services, rooted in the timeless wisdom of Vedic & KP Astrology, designed to bring you clarity and purpose.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredServices.map((service: any) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#FF9933]/20 hover:border-[#FF5722]/40 transition-all duration-300 bg-white/90 hover:bg-white flex flex-col"
            >
              <div className="absolute -inset-px  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              <div className="relative flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-lg flex items-center justify-center shadow-md">
                      {serviceIcons[service.icon as keyof typeof serviceIcons]}
                    </div>
                    <CardTitle className="text-xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 flex-grow flex flex-col">
                  <CardDescription className="text-base text-[#321414]/80 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </CardDescription>
                  <Link href={`/services/${service.slug}`} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FF5722] hover:text-white hover:border-[#FF5722] font-semibold rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
            >
              View All Services
              <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
