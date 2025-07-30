'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Sun, Moon, Star, Clock } from 'lucide-react';

export default function PanchangPage() {
  const panchangData = {
    date: "Tuesday, July 29, 2025",
    sunMoonTimings: {
      sunrise: "05:41 AM",
      sunset: "07:13 PM",
      moonrise: "04:43 AM",
      moonset: "06:25 PM"
    },
    nakshatras: [
      {
        name: "Ardra",
        lord: "Rahu",
        timing: "07:24 PM - 05:54 PM"
      },
      {
        name: "Punarvasu",
        lord: "Guru",
        timing: "05:54 PM - 04:43 PM"
      }
    ],
    tithis: [
      {
        name: "Chaturdashi",
        paksha: "Krishna Paksha",
        timing: "04:40 AM - 02:29 AM"
      },
      {
        name: "Amavasya",
        paksha: "Krishna Paksha",
        timing: "02:29 AM - 12:41 AM"
      }
    ],
    yogas: [
      {
        name: "Vyaghata",
        timing: "03:32 PM - 12:33 PM"
      },
      {
        name: "Harshana",
        timing: "12:33 PM - 09:50 AM"
      }
    ],
    karanas: [
      {
        name: "Vishti / Bhadra",
        timing: "04:40 AM - 03:32 PM"
      },
      {
        name: "Shakuni",
        timing: "03:32 PM - 02:29 AM"
      },
      {
        name: "Chatushpada",
        timing: "02:29 AM - 01:31 PM"
      }
    ],
    astrologicalInsights: {
      nakshatraGuidance: "Ardra encourages transformation and adaptability, while Punarvasu fosters renewal and optimism. Focus on personal growth and avoid impulsive decisions today.",
      tithiGuidance: "Chaturdashi is ideal for spiritual practices and introspection, while Amavasya supports new beginnings and cleansing rituals. Perform meditative activities for clarity.",
      karanaGuidance: "Vishti advises caution in new ventures, Shakuni supports strategic planning, and Chatushpada is favorable for creative pursuits. Plan your day accordingly.",
      yogaGuidance: "Vyaghata suggests overcoming obstacles with focus, while Harshana promotes joy and productivity. Align your tasks with these energies for success."
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FFF5E6] to-[#FFEFD5] py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="absolute top-8 left-12 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✧</div>
          <div className="absolute bottom-8 right-12 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✦</div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
              <Sparkles className="w-5 h-5 text-[#321414]" />
              <span className="ml-3 text-base md:text-lg font-bold text-[#321414]">Vedic Panchang</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
              Daily Panchang: {panchangData.date}
            </h1>
            <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed max-w-3xl mx-auto">
              Explore the cosmic energies of today with our Vedic Panchang, offering insights into Nakshatras, Tithis, Karanas, Yogas, and more to guide your day.
            </p>
          </div>
        </section>

        {/* Panchang Details */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Sun & Moon Timings */}
              <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Sun className="w-6 h-6 text-[#FF5722] mr-2" />
                    Sun & Moon Timings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-[#FF9933]" />
                    <p className="text-[#321414]/90"><span className="font-semibold">Sunrise:</span> {panchangData.sunMoonTimings.sunrise}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-[#FF9933]" />
                    <p className="text-[#321414]/90"><span className="font-semibold">Sunset:</span> {panchangData.sunMoonTimings.sunset}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-[#FF9933]" />
                    <p className="text-[#321414]/90"><span className="font-semibold">Moonrise:</span> {panchangData.sunMoonTimings.moonrise}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-[#FF9933]" />
                    <p className="text-[#321414]/90"><span className="font-semibold">Moonset:</span> {panchangData.sunMoonTimings.moonset}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Nakshatras */}
              <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Star className="w-6 h-6 text-[#FF5722] mr-2" />
                    Current Nakshatras
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {panchangData.nakshatras.map((nakshatra, index) => (
                    <div key={index} className="p-4 bg-[#FFF5E6] rounded-lg transition-all duration-300 hover:bg-[#FFEFD5] hover:shadow-sm">
                      <p className="text-[#321414]/90 font-semibold">{nakshatra.name}</p>
                      <p className="text-sm text-[#321414]/80">Lord: {nakshatra.lord}</p>
                      <p className="text-sm text-[#321414]/80">{nakshatra.timing}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tithis */}
              <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Sparkles className="w-6 h-6 text-[#FF5722] mr-2" />
                    Tithi & Paksha
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {panchangData.tithis.map((tithi, index) => (
                    <div key={index} className="p-4 bg-[#FFF5E6] rounded-lg transition-all duration-300 hover:bg-[#FFEFD5] hover:shadow-sm">
                      <p className="text-[#321414]/90 font-semibold">{tithi.name}</p>
                      <p className="text-sm text-[#321414]/80">{tithi.paksha}</p>
                      <p className="text-sm text-[#321414]/80">{tithi.timing}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Yogas */}
              <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Sparkles className="w-6 h-6 text-[#FF5722] mr-2" />
                    Yogas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {panchangData.yogas.map((yoga, index) => (
                    <div key={index} className="p-4 bg-[#FFF5E6] rounded-lg transition-all duration-300 hover:bg-[#FFEFD5] hover:shadow-sm">
                      <p className="text-[#321414]/90 font-semibold">{yoga.name}</p>
                      <p className="text-sm text-[#321414]/80">{yoga.timing}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Karanas */}
              <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Sparkles className="w-6 h-6 text-[#FF5722] mr-2" />
                    Karanas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {panchangData.karanas.map((karana, index) => (
                    <div key={index} className="p-4 bg-[#FFF5E6] rounded-lg transition-all duration-300 hover:bg-[#FFEFD5] hover:shadow-sm">
                      <p className="text-[#321414]/90 font-semibold">{karana.name}</p>
                      <p className="text-sm text-[#321414]/80">{karana.timing}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Astrological Insights */}
              <Card className="lg:col-span-3 border-[#FF9933]/20 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF5E6] to-[#FFEFD5] hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-[#321414] flex items-center">
                    <Star className="w-6 h-6 text-[#FF5722] mr-2" />
                    Astrological Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#321414] mb-2">Nakshatra Guidance</h3>
                    <p className="text-[#321414]/90 text-base md:text-lg leading-relaxed">
                      {panchangData.astrologicalInsights.nakshatraGuidance}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#321414] mb-2">Tithi Guidance</h3>
                    <p className="text-[#321414]/90 text-base md:text-lg leading-relaxed">
                      {panchangData.astrologicalInsights.tithiGuidance}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#321414] mb-2">Karana Guidance</h3>
                    <p className="text-[#321414]/90 text-base md:text-lg leading-relaxed">
                      {panchangData.astrologicalInsights.karanaGuidance}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#321414] mb-2">Yoga Guidance</h3>
                    <p className="text-[#321414]/90 text-base md:text-lg leading-relaxed">
                      {panchangData.astrologicalInsights.yogaGuidance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFD700_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Align Your Day with Vedic Wisdom
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Book a personalized consultation to understand how today’s Panchang influences your life and decisions.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#FF5722] hover:bg-[#FFEFD5] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Consultation
            </Button>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}