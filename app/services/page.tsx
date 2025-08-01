"use client";
import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight, Star, Gem, Award, Users, CheckCircle, BookOpen, Zap,
  ScrollText, Home, BrainCircuit, ShieldAlert, Compass, Hand, HelpCircle, Heart,
  Target, Moon, Flame, Infinity, Hash, CalendarCheck, Sparkles
} from 'lucide-react';

// UPDATED: Icon colors now match the new brand palette
const iconMap = {
  'janm-patrika': <ScrollText className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF5722]" />,
  'kundli-ghar-tak': <Home className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF9933]" />,
  'falit-jyotish': <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
  'gemstone-astrology': <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />,
  'dosha-yoga': <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />,
  'vastu-consultation': <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />,
  'palmistry-analysis': <Hand className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />,
  'prashn-kundli': <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />,
  'kundli-milan': <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />,
  'krishnamurti-paddhati': <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF5722]" />,
  'sadesati-report': <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />,
  'manglik-dosha-report': <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />,
  'kaalsarp-dosha-analysis': <Infinity className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-700" />,
  'numerology-analysis': <Hash className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />,
  'shubh-muhurat': <CalendarCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF9F2] to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FFEBD5]/40 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-[#FF9933] to-[#FF5722] rounded-full border border-[#FF5722]/30 shadow-lg mb-4 md:mb-6">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                <span className="ml-2 text-xs md:text-sm font-bold tracking-wide text-white">Vedic Wisdom, Modern Guidance</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#321414] mb-4 md:mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">
                  Divine Astrological
                </span>{" "}
                <span className="block md:inline text-[#321414]/80 font-normal">Services</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-[#321414]/90 leading-relaxed max-w-2xl mx-auto">
                Discover personalized astrological solutions for life's challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#321414] mb-3 md:mb-4">
                Our <span className="text-[#FF5722]">Specialized Services</span>
              </h2>
              <p className="text-base text-[#321414]/80 max-w-2xl mx-auto">
                Expert astrological guidance tailored to your unique needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {services.map((service) => (
                <Card key={`service-${service.id}`} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden flex flex-col">
                  {/* Icon Header */}
                  <div className="h-28 sm:h-40 bg-gradient-to-r from-[#FFF5EB] to-[#FFEBD5] flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')]"></div>
                    <div className="relative z-10 p-3 sm:p-4 bg-white rounded-full shadow-lg border border-[#FFD700]/50">
                      { <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF9933]" />}
                    </div>
                  </div>
                
                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-3 sm:p-4 md:p-6">
                    <CardHeader className="p-0 pb-2">
                      <CardTitle className="text-base md:text-xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors leading-tight">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow my-2">
                      <CardDescription className="text-xs sm:text-sm text-[#321414]/80">
                        {service.description}
                      </CardDescription>
                    </CardContent>

                    {/* Price and CTA */}
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Link href={`/services/${service.slug}`} passHref legacyBehavior>
                          <a className="flex-1">
                            <Button variant="outline" size="sm" className="w-full border-gray-300 text-[#321414]/90 hover:bg-[#FFF5EB] hover:border-[#FF9933] hover:text-[#FF5722] text-xs sm:text-sm">
                              Details
                              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                            </Button>
                          </a>
                        </Link>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#E64A19] text-white text-xs sm:text-sm">
                          Book Now
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#FFF9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-3 md:mb-5">
                Why <span className="text-[#FF5722]">Choose Us?</span>
              </h2>
              <p className="text-base text-[#321414]/80 max-w-2xl mx-auto">
                Our unique approach combines ancient wisdom with modern practicality
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <Gem className="w-6 h-6 text-[#FF5722]" />, title: "Authentic Vedic", description: "Traditional methods for accuracy" },
                { icon: <Award className="w-6 h-6 text-[#FF5722]" />, title: "25+ Years", description: "Of astrological experience" },
                { icon: <Users className="w-6 h-6 text-[#FF5722]" />, title: "10,000+ Clients", description: "Across India and worldwide" },
                { icon: <CheckCircle className="w-6 h-6 text-[#FF5722]" />, title: "95% Accuracy", description: "Validated by client feedback" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center hover:border-[#FFEBD5]">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFF5EB] rounded-full flex items-center justify-center mb-3 md:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-[#321414] mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-[#321414]/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-[#FFF5EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-3 md:mb-4">
                What Our <span className="text-[#FF5722]">Clients Say</span>
              </h2>
              <p className="text-base text-[#321414]/80 max-w-2xl mx-auto">
                Experiences from those who've transformed their lives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { quote: "The kundli analysis was incredibly accurate and helped me make important career decisions.", author: "Rahul Sharma", location: "Mumbai" },
                { quote: "Gemstone recommendation changed my life. I've seen remarkable improvements in my health and relationships.", author: "Priya Patel", location: "Delhi" },
                { quote: "The marriage compatibility report saved me from a bad alliance. Forever grateful for the guidance.", author: "Anjali Gupta", location: "Bangalore" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-[#FFEBD5] flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>
                  <blockquote className="text-base text-[#321414]/80 italic mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto text-sm">
                    <p className="font-semibold text-[#321414]">{testimonial.author}</p>
                    <p className="text-[#321414]/70">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')]"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform <span className="text-[#FFD700]">Your Life?</span>
            </h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-base">
              Begin your journey to clarity and success with our expert astrological guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#FF5722] hover:bg-orange-50 font-bold px-8 py-3 shadow-lg transform hover:scale-105 transition-all text-base"
              >
                Book Consultation
                <Zap className="w-5 h-5 ml-2 text-[#FF5722]" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-3 transform hover:scale-105 transition-all text-base"
              >
                Call Now +91 XXXXX XXXXX
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}
