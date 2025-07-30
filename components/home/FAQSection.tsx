'use client';

import { useState } from 'react';
import { faqs, FAQ } from '@/data/faq'; // Ensure this path is correct
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Keep first question open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#FFF9F2] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-8 left-8 text-[#FF9933] text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:16px_16px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700]/50 to-[#FF9933]/50 rounded-full border border-[#FF5722]/30 shadow-md mb-6">
            <Sparkles className="w-5 h-5 text-[#321414]" />
            <span className="ml-2 text-base font-bold text-[#321414]">Answers to Your Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#321414] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/80 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our Vedic & KP astrology services, consultations, and remedies.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={faq.id}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-[#FF9933]/30 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full px-5 py-4 text-left flex justify-between items-center gap-4"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openIndex === index ? 'text-[#FF5722]' : 'text-[#321414]'}`}>
                  {faq.question}
                </h3>
                <ChevronDown className={`w-6 h-6 text-[#FF5722] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-2 border-t border-[#FF9933]/20">
                    <p className="text-base text-[#321414]/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help CTA */}
        <div className="text-center bg-white p-8 rounded-2xl border border-[#FF9933]/30 shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-[#321414] mb-3">
            Still Have a Question?
          </h3>
          <p className="text-base md:text-lg text-[#321414]/80 mb-6 max-w-2xl mx-auto">
            Our team is ready to provide personalized answers. Feel free to reach out to us directly.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
              Contact Us for Help
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
