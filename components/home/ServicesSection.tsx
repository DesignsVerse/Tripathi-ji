'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Sun, Sparkles, Heart, Briefcase, Gem, Clock, BookOpen } from 'lucide-react';

// Icon mapping for services - ensure the key matches the 'icon' property in your services data
const serviceIcons: { [key: string]: React.ReactNode } = {
  'janm-patrika': <BookOpen className="w-7 h-7 text-white" />,
  'kundli-ghar-tak': <Sun className="w-7 h-7 text-white" />,
  'falit-jyotish': <Sparkles className="w-7 h-7 text-white" />,
  'kundli-milan': <Heart className="w-7 h-7 text-white" />,
  'career-business': <Briefcase className="w-7 h-7 text-white" />,
  'gemstone-astrology': <Gem className="w-7 h-7 text-white" />,
  'shubh-muhurat': <Clock className="w-7 h-7 text-white" />,
};

export default function ServicesSection() {
  // Show 6 services on desktop, 4 on mobile
  const servicesToShowDesktop = services.slice(0, 6);
  const servicesToShowMobile = services.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-[#FFF9F2] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-12 left-12 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-12 right-12 text-[#FF9933] text-7xl animate-pulse">✦</div>
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
            Explore our specialized services, rooted in the timeless wisdom of Vedic & KP Astrology, designed to bring you clarity and purpose.
          </p>
        </div>

        {/* Services Grid - HIDDEN on small screens, VISIBLE on lg screens */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {servicesToShowDesktop.map((service) => (
            <ServiceCard key={`desktop-${service.id}`} service={service} />
          ))}
        </div>

        {/* Services Grid - VISIBLE on small screens, HIDDEN on lg screens */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          {servicesToShowMobile.map((service) => (
            <ServiceCard key={`mobile-${service.id}`} service={service} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link href="/services">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#E64A19] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Reusable Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border border-[#FFD700]/50 rounded-2xl overflow-hidden flex flex-col bg-white">
      {/* Icon Header */}
      <div className="h-32 sm:h-40 bg-gradient-to-br from-[#FFF9F2] to-[#FFEBD5] flex items-center justify-center relative">
        <div className="relative z-10 p-4 bg-gradient-to-r from-[#FF9933] to-[#FF5722] rounded-full shadow-lg">
          {serviceIcons[service.slug] || <Star className="w-7 h-7 text-white" />}
        </div>
      </div>
    
      {/* Card Content */}
      <div className="flex flex-col flex-grow p-3 md:p-5">
        <CardHeader className="p-0 pb-1">
          <CardTitle className="text-base md:text-xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors leading-tight h-12">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow ">
          <CardDescription className="text-xs sm:text-sm text-[#321414]/80 line-clamp-3">
            {service.description}
          </CardDescription>
        </CardContent>

        {/* Price and CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link href={`/services/${service.slug}`} passHref>
            <Button variant="outline" size="sm" className="w-full border-gray-300 text-[#321414]/90 hover:bg-[#FFF5EB] hover:border-[#FF9933] hover:text-[#FF5722] text-xs sm:text-sm font-semibold">
              View Details
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
