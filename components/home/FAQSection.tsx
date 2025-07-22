'use client';

import { useState } from 'react';
import { faqs } from '@/data/services';
import { ChevronDown, ChevronUp, Phone, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-[#FFF5E6]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-[#FF9933] text-6xl">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-6xl">✦</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#FFD700]/20 rounded-full border border-[#FF9933]/50 mb-6">
            <Star className="w-5 h-5 text-[#FF5722]" />
            <span className="ml-2 text-sm font-medium text-[#321414]">Cosmic Wisdom</span>
          </div>
          
          <h2 className="text-4xl font-bold text-[#321414] mb-4">
            Vedic Guidance <span className="text-[#FF5722]">Questions</span>
          </h2>
          <p className="text-xl text-[#321414]/90">
            Answers to your queries about astrology, palmistry and numerology
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#FF9933]/30 overflow-hidden hover:border-[#FF5722]/50 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#FF9933]/10 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-[#321414] pr-4 text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#FF5722] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FF9933] flex-shrink-0" />
                )}
              </button>
              
              <div 
                id={`faq-${faq.id}`}
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-[#FF9933]/20">
                    <p className="text-[#321414]/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-16 p-8 bg-[#321414] rounded-xl border-2 border-[#FF9933]/30 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-[#FF9933]/10 text-4xl">✧</div>
          <div className="absolute bottom-4 left-4 text-[#FF9933]/10 text-4xl">✦</div>
          
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4 relative z-10">
            Need Personal Guidance?
          </h3>
          <p className="text-[#FF9933]/90 mb-6 relative z-10">
            Our Vedic astrologers are ready to provide personalized answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button
              size="lg"
              className="bg-[#FF9933] hover:bg-[#FF5722] text-[#321414] font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 98765 43210
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10 hover:text-[#FFD700]"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}