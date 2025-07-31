
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

const iconMap = {
  'janm-patrika': <ScrollText className="w-8 h-8 text-blue-600" />,
  'kundli-ghar-tak': <Home className="w-8 h-8 text-amber-600" />,
  'falit-jyotish': <BrainCircuit className="w-8 h-8 text-purple-600" />,
  'gemstone-astrology': <Gem className="w-8 h-8 text-emerald-600" />,
  'dosha-yoga': <ShieldAlert className="w-8 h-8 text-red-600" />,
  'vastu-consultation': <Compass className="w-8 h-8 text-teal-600" />,
  'palmistry-analysis': <Hand className="w-8 h-8 text-pink-600" />,
  'prashn-kundli': <HelpCircle className="w-8 h-8 text-indigo-600" />,
  'kundli-milan': <Heart className="w-8 h-8 text-rose-600" />,
  'krishnamurti-paddhati': <Target className="w-8 h-8 text-orange-600" />,
  'sadesati-report': <Moon className="w-8 h-8 text-violet-600" />,
  'manglik-dosha-report': <Flame className="w-8 h-8 text-red-700" />,
  'kaalsarp-dosha-analysis': <Infinity className="w-8 h-8 text-yellow-700" />,
  'numerology-analysis': <Hash className="w-8 h-8 text-cyan-600" />,
  'shubh-muhurat': <CalendarCheck className="w-8 h-8 text-green-600" />,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-amber-100/40 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border border-amber-300 shadow-lg mb-6">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="ml-2 text-sm font-bold tracking-wide text-white">Vedic Wisdom, Modern Guidance</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
                  Divine Astrological
                </span>{" "}
                <span className="block md:inline text-gray-700 font-normal">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Discover personalized astrological solutions for life's challenges and opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-amber-600">Specialized Services</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert astrological guidance tailored to your unique needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <Card key={`service-${service.id}`} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden">
                  {/* Icon Header */}
                  <div className="h-40 bg-gradient-to-r from-amber-100 to-amber-50 flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')]"></div>
                    {/* <div className="relative z-10 p-4 bg-white rounded-full shadow-lg border border-amber-200">
                      {iconMap[service.slug] || <Star className="w-8 h-8 text-amber-500" />}
                    </div> */}
                  </div>
                
                  {/* Card Content */}
                  <CardHeader className="pb-2 px-6 pt-6">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 space-y-4">
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.featureList.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-col gap-3 mt-4 pt-3 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Starting from</span>
                        <span className="text-lg font-bold text-amber-600">₹{service.startingPrice}</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link href={`/services/${service.slug}`} className="flex-1">
                          <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700">
                            Details
                            <BookOpen className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
                          Book Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 md:py-24 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
                Why <span className="text-amber-600">Choose Us?</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our unique approach combines ancient wisdom with modern practicality
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: <Gem className="w-6 h-6 text-amber-500" />, 
                  title: "Authentic Vedic", 
                  description: "Traditional methods preserved for accuracy" 
                },
                { 
                  icon: <Award className="w-6 h-6 text-amber-500" />, 
                  title: "25+ Years", 
                  description: "Of astrological experience" 
                },
                { 
                  icon: <Users className="w-6 h-6 text-amber-500" />, 
                  title: "10,000+ Clients", 
                  description: "Across India and worldwide" 
                },
                { 
                  icon: <CheckCircle className="w-6 h-6 text-amber-500" />, 
                  title: "95% Accuracy", 
                  description: "Validated by client feedback" 
                },
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center hover:border-amber-200"
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-14 md:py-24 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our <span className="text-amber-600">Clients Say</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experiences from those who've transformed their lives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The kundli analysis was incredibly accurate and helped me make important career decisions.",
                  author: "Rahul Sharma",
                  location: "Mumbai"
                },
                {
                  quote: "Gemstone recommendation changed my life. I've seen remarkable improvements in my health and relationships.",
                  author: "Priya Patel",
                  location: "Delhi"
                },
                {
                  quote: "The marriage compatibility report saved me from a bad alliance. Forever grateful for the guidance.",
                  author: "Anjali Gupta",
                  location: "Bangalore"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-500 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/pattern.svg')]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to Transform <span className="text-amber-200">Your Life?</span>
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Begin your journey to clarity and success with our expert astrological guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-amber-50 font-bold px-8 py-4 shadow-lg transform hover:scale-105 transition-all"
              >
                Book Consultation
                <Zap className="w-5 h-5 ml-2 text-amber-500" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 transform hover:scale-105 transition-all"
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
