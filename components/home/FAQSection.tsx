'use client';

import { useState } from 'react';
import { faqs } from '@/data/faq';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FAQ } from '@/data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#FFF5E6] overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-8 left-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-[#321414]" />
            <span className="ml-3 text-base md:text-lg font-bold text-[#321414]">Cosmic Wisdom</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
            <span className="relative inline-block">
              Vedic Guidance
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
            </span>{' '}
            <span className="text-[#FF5722]">FAQs</span>
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our Vedic astrology, palmistry, and numerology services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={faq.id}
              className="group relative bg-white/95 rounded-xl border border-[#FF9933]/20 hover:border-[#FF5722]/40 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#FF9933]/10 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${faq.id}`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#FF5722] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#FF9933] flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-${faq.id}`}
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-[#FF9933]/20">
                  <p className="text-base text-[#321414]/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-[#321414] mb-4">
            Still Have Questions?
          </h3>
          <p className="text-base md:text-lg text-[#321414]/90 mb-6 max-w-2xl mx-auto">
            Connect with our Vedic experts for personalized answers and guidance.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-10 py-5 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </span>
              <span className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}