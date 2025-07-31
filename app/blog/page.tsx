"use client";
import { blogPosts } from '@/data/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock, Search, Star, Sparkles, BookOpen } from 'lucide-react';


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <main>
        {/* Hero Section from ServicesPage */}
        <section className="relative py-20 md:py-32 bg-[#FFF2DF]">
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

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 md:mb-12 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                Latest <span className="text-orange-600">Articles</span>
              </h2>
              <p className="text-gray-600">Stay updated with the latest insights in Vedic astrology</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card 
                  key={post.id} 
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-white border-0 shadow-sm hover:shadow-orange-100"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]" />
                  
                  <div className="aspect-square md:aspect-video overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  <CardHeader className="pb-2 px-4 pt-4">
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-base md:text-lg font-bold line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-4 pb-4">
                    <CardDescription className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 text-xs md:text-sm"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Newsletter Signup */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-white" />
            <Star className="absolute bottom-1/3 right-1/3 w-6 h-6 text-white" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="ml-2 text-sm font-bold">Cosmic Updates</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Stay Updated with <span className="text-[#FFD700]">Spiritual Wisdom</span>
            </h2>
            <p className="text-sm md:text-lg text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Subscribe for weekly astrological insights and spiritual guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm md:text-base"
              />
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 text-sm md:text-base font-medium"
              >
                Subscribe
              </Button>
            </div>
            
            <p className="text-orange-200 text-xs md:text-sm mt-4">
              No spam, unsubscribe anytime. Your spiritual journey is sacred to us.
            </p>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}
