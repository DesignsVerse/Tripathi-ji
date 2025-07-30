import { notFound } from 'next/navigation';
import { horoscopes } from '@/data/horoscope';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Star, Sparkles, Zap, Heart, Gem } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return horoscopes.map((horoscope) => ({
    slug: horoscope.slug,
  }));
}

export default function HoroscopeDetailPage({ params }: { params: { slug: string } }) {
  const horoscope = horoscopes.find((h) => h.slug === params.slug);

  if (!horoscope) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F0] to-[#FFF5E6]">
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#FFEFD5] via-[#FFF5E6] to-[#FFEFD5] overflow-hidden">
          {/* Cosmic decoration elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#FF9933]/10 blur-xl"></div>
            <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-[#FF5722]/10 blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-[#FF9933]/20 animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-6">
              <Link 
                href="/horoscope" 
                className="inline-flex items-center text-[#FF5722] hover:text-[#E64A19] transition-colors group font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to All Horoscopes
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#FF9933]/20 rounded-2xl blur-lg"></div>
                  <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-xl shadow-2xl border-4 border-white/80 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <img
                      src={horoscope.image}
                      alt={horoscope.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#FF9933] mr-2" />
                  <span className="text-sm font-semibold text-[#FF5722] tracking-wider">
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#321414] leading-tight mb-4">
                  {horoscope.name} <span className="text-[#FF5722]">Horoscope</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed mb-6 max-w-2xl">
                  {horoscope.shortDesc}
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm text-[#321414]/90 mb-8">
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <Calendar className="w-5 h-5 text-[#FF5722]" />
                    <span className="font-medium">{horoscope.dateRange}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <Star className="w-5 h-5 text-[#FF5722]" />
                    <span className="font-medium">Vedic Insights</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    <Zap className="w-5 h-5 text-[#FF5722]" />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white shadow-md hover:shadow-lg transition-all">
                    <Heart className="w-4 h-4 mr-2" />
                    Love Compatibility
                  </Button>
                  <Button variant="outline" className="border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10">
                    <Gem className="w-4 h-4 mr-2" />
                    Lucky Gemstone
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horoscope Content */}
        <section className="py-12 md:py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {horoscope.sections.map((section, index) => (
                <div 
                  key={index} 
                  className={`mb-12 last:mb-0 p-6 rounded-xl ${index % 2 === 0 ? 'bg-white shadow-sm' : 'bg-[#FFF9F0]'}`}
                >
                  {section.heading && (
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-[#FF5722]/10 flex items-center justify-center mr-4">
                        <Sparkles className="w-4 h-4 text-[#FF5722]" />
                      </div>
                      <h2 
                        id={section.heading.toLowerCase().replace(/ /g, '-')} 
                        className="text-2xl md:text-3xl font-bold text-[#321414] scroll-mt-20"
                      >
                        {section.heading}
                      </h2>
                    </div>
                  )}
                  <div 
                    className="text-[#321414]/90 leading-relaxed space-y-4 text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: section.description.replace(/\n/g, '<br />') }}
                  />
                </div>
              ))}
            </div>
            
            {/* Daily Horoscope Card */}
            <div className="mt-16 bg-gradient-to-r from-[#FF5722] to-[#FF9933] rounded-2xl p-0.5 shadow-xl">
              <div className="bg-white rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-[#FFF5E6] p-4 rounded-lg w-full md:w-auto">
                    <h3 className="text-xl font-bold text-[#321414] mb-2">Today's Horoscope</h3>
                    <p className="text-[#321414]/90">Get your personalized daily reading based on your exact birth chart.</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#FF5722] mb-2">Lucky Numbers</h4>
                    <div className="flex gap-3 mb-4">
                      {[7, 14, 21, 28, 35].map(num => (
                        <span key={num} className="w-10 h-10 flex items-center justify-center bg-[#FF5722]/10 rounded-full font-medium">
                          {num}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full md:w-auto bg-[#FF5722] hover:bg-[#E64A19]">
                      Get Full Reading
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}   