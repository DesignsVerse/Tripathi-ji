'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Clock, Star, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);
  const [current, setCurrent] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => {
      setCurrent(carouselApi.selectedScrollSnap());
    };
    carouselApi.on('select', onSelect);
    onSelect();
    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  return (
    <section className="relative py-20 md:py-24 bg-[#FFF9F2] overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-12 left-12 text-[#FF9933] text-6xl md:text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-12 right-12 text-[#FF9933] text-6xl md:text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-5xl md:text-6xl animate-pulse">★</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>
      {/* Golden top border */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg md:text-xl font-bold text-[#321414]">Cosmic Chronicles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
            <span className="relative inline-block">
              Vedic Wisdom
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
            </span>{' '}
            <span className="text-[#FF5722]">for Modern Life</span>
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Dive into ancient astrological insights tailored for today’s world through our expertly crafted articles on spirituality and cosmic guidance.
          </p>
        </div>
        {/* Mobile Carousel */}
        <div className="block md:hidden mb-16">
          <Carousel setApi={setCarouselApi} opts={{ loop: true }}>
            <CarouselContent>
              {featuredPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border border-[#FF9933]/20 hover:border-[#FF5722]/40 bg-white/95 hover:bg-white">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                    <div className="aspect-[4/3] overflow-hidden relative rounded-t-2xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      <span className="absolute top-4 right-4 px-3 py-1 bg-[#FF5722] text-white text-sm font-semibold rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                    <CardHeader className="pb-4 pt-4 px-4">
                      <div className="flex flex-wrap gap-3 text-sm text-[#321414]/80 mb-3">
                        <div className="flex items-center space-x-2">
                          <User className="w-5 h-5 text-[#FF5722]" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-[#FF5722]" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-[#FF5722]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                      <CardDescription className="text-base text-[#321414]/90 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <Link href={`/blog/${post.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-3">
            {featuredPosts.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-[#FF5722] scale-125' : 'bg-[#FFD700]/60'}`}
                onClick={() => carouselApi && carouselApi.scrollTo && carouselApi.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 border border-[#FF9933]/20 hover:border-[#FF5722]/40 bg-white/95 hover:bg-white"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
              <div className="aspect-[4/3] overflow-hidden relative rounded-t-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#FF5722] text-white text-sm font-semibold rounded-full shadow-md">
                  {post.category}
                </span>
              </div>
              <CardHeader className="pb-4 pt-4 px-4">
                <div className="flex flex-wrap gap-3 text-sm text-[#321414]/80 mb-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-[#FF5722]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#FF5722]" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#FF5722]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <CardDescription className="text-base text-[#321414]/90 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <Link href={`/blog/${post.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#FF9933]/80 text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Premium View All CTA */}
        <div className="text-center">
          <Link href="/blog">
            <Button 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Discover All Articles
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}