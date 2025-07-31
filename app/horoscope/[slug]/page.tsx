import React from 'react';
import { notFound } from 'next/navigation';
import { horoscopes } from '@/data/horoscope';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Star, Sparkles, Zap, Heart, Gem } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';

// Define the type for params
interface HoroscopeParams {
  slug: string;
}

// Generate static parameters for dynamic route
export async function generateStaticParams() {
  return horoscopes.map((horoscope) => ({
    slug: horoscope.slug,
  }));
}

export default function HoroscopeDetailPage({ params }: { params: HoroscopeParams }) {
  const horoscope = horoscopes.find((h) => h.slug === params.slug);
  if (!horoscope) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] to-[#FFEFD5] relative">

      <main className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6">
              <Link
                href="/horoscope"
                className="inline-flex items-center text-[#FF5722] hover:text-[#E64A19] group font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to All Horoscopes
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Horoscope Image with Glow */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-[#FF9933]/40 blur-2xl rounded-2xl"></div>
                  <div className="relative bg-white/60 backdrop-blur-lg rounded-xl p-2 shadow-2xl border-4 border-white/80 hover:border-[#FF5722] transition-all duration-300">
                    <img
                      src={horoscope.image}
                      alt={horoscope.name}
                      className="w-64 h-64 object-cover rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#FF9933] mr-2" />
                </div>
                <h1 className="text-5xl font-bold font-serif text-[#321414] mb-2 tracking-tight">
                  {horoscope.name} <span className="text-[#FF5722] font-display">Horoscope</span>
                </h1>
                <p className="italic text-md text-[#6D4C41] mb-1">
                  Your Guide to Cosmic Wisdom ✦
                </p>
                <p className="text-xl text-[#321414]/90 mb-6">
                  {horoscope.shortDesc}
                </p>

                <div className="flex flex-wrap gap-6 text-sm mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-sm backdrop-blur">
                    <Calendar className="w-5 h-5 text-[#FF5722]" />
                    <span className="font-medium">{horoscope.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-sm">
                    <Star className="w-5 h-5 text-[#FF5722]" />
                    <span className="font-medium">Vedic Insights</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-sm">
                    <Zap className="w-5 h-5 text-[#FF5722]" />
                  </div>
                </div>

                {/* Action Buttons with Modals */}
                <div className="flex gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#FF5722] text-white shadow-sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Love Compatibility
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-xl px-8 py-6 shadow-2xl max-w-lg bg-white">
                      <h3 className="font-bold text-2xl">Love Compatibility</h3>
                      <p>Discover zodiac love matches, enter info, or add your interactive content here.</p>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10">
                        <Gem className="w-4 h-4 mr-2" />
                        Lucky Gemstone
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="rounded-xl px-8 py-6 shadow-2xl max-w-lg bg-white">
                      <h3 className="font-bold text-2xl">Your Lucky Gemstone</h3>
                      <p>Show gemstone info, images, and links here.</p>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ornate Divider */}
        <svg className="my-10 mx-auto block w-32 h-4" viewBox="0 0 128 16">
          <path d="M8,8 Q64,0 120,8 Q64,16 8,8 Z" fill="#FF9933" fillOpacity="0.25" />
        </svg>

        {/* Horoscope Sections */}
        <section className="py-12 bg-white/60 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              {horoscope.sections.map((section, idx) => (
                <div
                  key={idx}
                  className={`mb-14 last:mb-0 p-8 rounded-xl ${idx % 2 === 0 ? 'bg-white shadow' : 'bg-[#FFF8E6]'} border-l-4 border-[#FF5722]/30`}
                >
                  {section.heading && (
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#FF5722]/15 flex items-center justify-center mr-4 shadow">
                        <Sparkles className="w-5 h-5 text-[#FF5722]" />
                      </div>
                      <h2 className="text-3xl font-bold text-[#321414]">{section.heading}</h2>
                    </div>
                  )}
                  <div
                    className="text-[#321414]/90 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: section.description.replace(/\n/g, '<br />') }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Today's Horoscope Card */}
          <div className="mt-16 bg-gradient-to-r from-[#FF5722] to-[#FF9933] rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-[#FFF5E6] p-4 rounded-lg w-full md:w-auto">
                <h3 className="text-2xl font-bold text-[#321414] mb-2">Today's Horoscope</h3>
                <p className="text-[#321414]/90">
                  Get your personalized daily reading based on your exact birth chart.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-[#FF5722] mb-2">Lucky Numbers</h4>
                <div className="flex gap-4 mb-4">
                  {[7, 14, 21, 28, 35].map((num) => (
                    <span
                      key={num}
                      className="w-12 h-12 flex items-center justify-center bg-[#FF5722]/15 rounded-full font-bold text-xl shadow hover:scale-110 transition"
                    >
                      {num}
                    </span>
                  ))}
                </div>
                <Button className="w-full md:w-auto bg-[#FF5722] hover:bg-[#E64A19] shadow">
                  Get Full Reading
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}