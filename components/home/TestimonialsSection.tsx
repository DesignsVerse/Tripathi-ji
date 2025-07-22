'use client';

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '@/data/services';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrameId: number;
    let speed = 1; // pixels per frame
    let position = 0;

    const animate = () => {
      if (!isPaused) {
        position -= speed;
        
        // Reset position when half way through
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
    <section className="py-20 bg-[#FFF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#321414] mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-[#321414]/90 max-w-3xl mx-auto">
            Transformations through authentic Vedic guidance
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative overflow-hidden h-[400px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Marquee Content */}
          <div 
            ref={marqueeRef}
            className="absolute top-0 left-0 flex space-x-6 h-full"
            style={{ width: 'max-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`} 
                className="w-[300px] h-full flex-shrink-0 border border-[#FF9933]/30 hover:border-[#FF5722]/50 transition-colors duration-300"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-[#FF9933] fill-current" 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-sm text-[#321414]/90 mb-4 flex-grow italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mt-auto pt-4 border-t border-[#FF9933]/20">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#FF9933]"
                      />
                      <div>
                        <h4 className="font-semibold text-[#321414] text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#321414]/70 text-xs">
                          {testimonial.location}
                        </p>
                        <p className="text-[#FF5722] text-xs font-medium">
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

        {/* Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5722]"></div>
            <div className="text-sm text-[#321414]/70">
              Scroll horizontally to view more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}