import Link from 'next/link';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star, Hand, Hash, Globe, Moon, Sun, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  // Enhanced Icon mapping for services with gradient backgrounds
  const serviceIcons = {
    astrology: <Star className="w-6 h-6 text-[#FFD700]" />,
    palmistry: <Hand className="w-6 h-6 text-[#FFD700]" />,
    numerology: <Hash className="w-6 h-6 text-[#FFD700]" />,
    vastu: <Globe className="w-6 h-6 text-[#FFD700]" />,
    horoscope: <Sun className="w-6 h-6 text-[#FFD700]" />,
    remedies: <Moon className="w-6 h-6 text-[#FFD700]" />
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF8F0] to-[#FFE4C4] relative overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-6xl animate-pulse">★</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg font-bold text-[#321414]">Divine Solutions</span>
          </div>
          
          <h2 className="text-5xl font-bold text-[#321414] mb-5">
            <span className="relative">
              Vedic Services
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFD700]/50 z-0"></span>
            </span> {' '}
            <span className="text-[#FF5722]">For Life Transformation</span>
          </h2>
          
          <p className="text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Discover profound insights through our ancient Vedic sciences, meticulously crafted to bring 
            harmony and success to every aspect of your life.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-[#FF9933]/30 hover:border-[#FF5722]/50 bg-white/90 hover:bg-white backdrop-blur-sm"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
              
              <CardHeader className="pb-5">
                <div className="flex items-start space-x-5 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                    {serviceIcons[service.icon] || <Star className="w-7 h-7 text-[#FFD700]" />}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-xl font-bold text-[#FF5722] mt-1">
                      {service.price}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-[#321414]/90 mb-7 leading-relaxed text-lg">
                  {service.shortDesc}
                </CardDescription>
                
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[#321414]/80 font-medium">Duration:</span>
                    <span className="px-3 py-1 bg-[#FF9933]/10 rounded-full text-[#FF5722] font-bold">
                      {service.duration}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#321414]/80 font-medium">Accuracy:</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < 4 ? 'text-[#FF5722] fill-[#FF5722]' : 'text-[#FF9933]/40'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/services/${service.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full mt-6 border-2 border-[#FF9933] text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300 group-hover:shadow-lg py-6 text-lg font-bold"
                    >
                      Explore Service
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Premium View All CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-12 py-7 text-xl font-bold shadow-2xl hover:shadow-[#FF5722]/50 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center">
                Discover All Services
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}