import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Clock, Star, Sparkles, Gem, Award, Users, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-32 bg-gradient-to-br from-[#FF9933]/10 via-white to-[#FF5722]/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/30 shadow-md mb-6">
                <Sparkles className="w-5 h-5 text-[#321414]" />
                <span className="ml-2 text-sm font-bold text-[#321414]">Vedic Wisdom</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FFD700]">
                  Divine Services
                </span>{' '}
                <br className="sm:hidden" />For Your Spiritual Journey
              </h1>
              
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Discover ancient Vedic wisdom through our personalized consultations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Updated for 2 columns on mobile */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm md:shadow-md hover:shadow-orange-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]" />
                  
                  <div className="aspect-square md:aspect-video overflow-hidden rounded-t-lg relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="text-base md:text-xl font-bold group-hover:text-orange-600 transition-colors line-clamp-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-2 px-4 pb-4">
                    <CardDescription className="text-gray-600 text-sm md:text-base line-clamp-3">
                      {service.description}
                    </CardDescription>
                    
                    <div className="flex flex-col space-y-2 pt-2">
                      <Link href={`/services/${service.slug}`}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full group-hover:border-orange-300 group-hover:text-orange-700 text-xs md:text-sm"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Button 
                        size="sm"
                        className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xs md:text-sm"
                      >
                        Book Now
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-orange-600">Our Guidance?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the transformative power of authentic Vedic astrology
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: <Gem className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                  title: "Authentic",
                  description: "Traditional Vedic methods"
                },
                {
                  icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                  title: "25+ Years",
                  description: "Experience"
                },
                {
                  icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                  title: "10K+ Clients",
                  description: "Satisfied"
                },
                {
                  icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
                  title: "95% Accuracy",
                  description: "Precise"
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-orange-50"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Unlock Your <span className="text-[#FFD700]">Potential?</span>
            </h2>
            <p className="text-sm md:text-lg text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Take the first step towards understanding your divine path.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="sm" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 text-sm md:text-base font-bold"
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-white border-white hover:bg-white/10 px-6 py-3 text-sm md:text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}