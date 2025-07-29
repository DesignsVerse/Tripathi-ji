'use client';

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrameId: number;
    let speed = 0.5; // Increased for smoother scrolling
    let position = 0;

    const animate = () => {
      if (!isPaused) {
        position -= speed;
        if (position <= -marquee.scrollWidth / 2) {
          position = 0;
        }
        marquee.style.transform = `translateX(${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-8 left-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 " >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-[#321414]" />
            <span className="ml-3 text-base md:text-lg font-bold text-[#321414]">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
            <span className="relative inline-block">
              Transformations
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
            </span>{' '}
            <span className="text-[#FF5722]">Through Vedic Wisdom</span>
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Hear from our clients about how Vedic guidance has illuminated their paths.
          </p>
        </div>

        {/* Marquee Container */}
        <div
          className="relative  overflow-hidden h-[280px] md:h-[280px] "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={marqueeRef}
            className="absolute top-0 left-0 flex space-x-6 h-full pb-2 pt-4"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className="group w-[320px] md:w-[360px] h-90% flex-shrink-0 border border-[#FF9933]/20 hover:border-[#FF5722]/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/95 hover:bg-white"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FF9933] fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base text-[#321414]/90 mb-4 italic flex-grow line-clamp-4">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mt-auto pt-4 border-t border-[#FF9933]/20">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FF9933]"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#321414] group-hover:text-[#FF5722]">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#321414]/70 text-sm">
                          {testimonial.location}
                        </p>
                        <p className="text-[#FF5722] text-sm font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}