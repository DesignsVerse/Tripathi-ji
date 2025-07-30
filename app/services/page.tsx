"use client";
import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight, Clock, Star, Sparkles, Gem, Award, Users, CheckCircle, BookOpen, Zap,
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#FF9933]/10 via-white to-[#FF5722]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/40 shadow-lg mb-6">
                <Sparkles className="w-6 h-6 text-[#321414]" />
                <span className="ml-2 text-base font-bold tracking-wide text-[#321414]">Vedic Wisdom, Modern Guidance</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FFD700]">
                  Divine Services
                </span>{" "}
                <span className="block md:inline text-[#321414]/80 font-normal">for Your Spiritual Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Experience clarity, peace, and success with personalized astrological sessions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl border-0 transition-all duration-300 relative p-0 overflow-hidden bg-gradient-to-b from-[#FFEBD5]/30 via-white to-[#FFD700]/10"
                >
                  {/* Service image */}
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                
                  {/* Card content */}
                  <CardHeader className="pb-2 px-4 pt-4">
                    <CardTitle className="text-base md:text-lg font-bold group-hover:text-orange-600 transition-colors line-clamp-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 pb-6 space-y-3">
                    <CardDescription className="text-gray-600 text-sm md:text-base leading-snug line-clamp-3">
                      {service.description}
                    </CardDescription>
                    {/* Optional: highlight key feature */}
                    <div className="flex flex-wrap gap-2 pt-2 min-h-[36px]">
                      {service.featureList.slice(0, 2).map((feat, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FFF5EB] text-[#FF5722] px-2 py-1 rounded text-xs font-semibold"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2 mt-3">
                      <Link href={`/services/${service.slug}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#FF5722]/30 group-hover:border-orange-400 group-hover:text-orange-700 text-xs md:text-sm font-semibold"
                        >
                          Learn More
                          <BookOpen className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white text-xs md:text-sm font-bold"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-14 md:py-24 bg-gradient-to-b from-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-18">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
                Why Choose <span className="text-orange-600">Our Guidance?</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Get the edge of traditional Jyotish, modern accuracy, and true personal attention.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  icon: <Gem className="w-7 h-7 text-orange-600" />,
                  title: "Authentic",
                  description: "Traditional Vedic methods",
                },
                {
                  icon: <Award className="w-7 h-7 text-orange-600" />,
                  title: "25+ Years",
                  description: "Expert Experience",
                },
                {
                  icon: <Users className="w-7 h-7 text-orange-600" />,
                  title: "10,000+ Clients",
                  description: "Guided Successfully",
                },
                {
                  icon: <CheckCircle className="w-7 h-7 text-orange-600" />,
                  title: "95% Accuracy",
                  description: "Clarity You Can Trust",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 md:p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-orange-50 flex flex-col items-center"
                >
                  <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 text-center relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Unlock Your <span className="text-[#FFD700]">True Potential?</span>
            </h2>
            <p className="text-sm md:text-lg text-orange-100 mb-7 max-w-2xl mx-auto">
              Start your Vedic journey with an in-depth consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-orange-50 border-2 border-[#FFD700] font-bold px-8 py-3"
              >
                Book Consultation
                <Zap className="w-5 h-5 ml-2 text-orange-500" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 px-8 py-3"
              >
                See All Services
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
