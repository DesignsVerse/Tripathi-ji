'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User, Clock, Star, Sparkles } from 'lucide-react';

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FFF5E6] to-[#FFE8CC] overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-6xl animate-pulse">★</div>
      </div>
      
      {/* Golden top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6 mx-auto">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg font-bold text-[#321414]">Cosmic Chronicles</span>
          </div>
          
          <h2 className="text-5xl font-bold text-[#321414] mb-5">
            <span className="relative inline-block">
              Vedic Wisdom
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFD700]/50 z-0"></span>
            </span>{' '}
            <span className="text-[#FF5722]">for Modern Life</span>
          </h2>
          
          <p className="text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Explore ancient astrological insights adapted for contemporary living through our 
            expert articles on planetary influences, remedies, and spiritual growth.
          </p>
        </div>

        {/* Premium Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {featuredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-[#FF9933]/30 hover:border-[#FF5722]/50 bg-white/90 backdrop-blur-sm"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
              
              {/* Featured image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/80 via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#FF5722] text-white text-sm font-bold rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>
              
              <CardHeader className="pb-5">
                <div className="flex flex-wrap gap-4 text-sm text-[#321414]/80 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#FF5722]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#FF5722]" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#FF5722]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-[#321414] group-hover:text-[#FF5722] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-[#321414]/90 mb-7 leading-relaxed line-clamp-3 text-lg">
                  {post.excerpt}
                </CardDescription>
                
                <Link href={`/blog/${post.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[#FF9933] text-[#FF5722] hover:bg-[#FF9933]/10 hover:border-[#FF5722] hover:text-[#FF5722] transition-all duration-300 group-hover:shadow-lg py-5 text-base font-bold"
                  >
                    Continue Reading
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Premium View All CTA */}
        <div className="text-center">
          <Link href="/blog">
            <Button 
              size="lg" 
              className="relative overflow-hidden group bg-gradient-to-br from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white px-12 py-7 text-xl font-bold shadow-2xl hover:shadow-[#FF5722]/50 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center">
                Explore All Articles
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