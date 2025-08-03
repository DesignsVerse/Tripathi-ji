'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Award, Globe } from 'lucide-react';

export default function AboutPanditji() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full border border-orange-100 mb-4">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="ml-2 text-sm font-medium text-orange-700">Vedic Astrologer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#321414] mb-4">
            About Pandit Abhishek Tripathi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Renowned astrologer with 15+ years of experience in Vedic and KP astrology
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 p-6 flex items-center justify-center bg-orange-50">
              <img
                src="/cta/t.jpg"
                alt="Pandit Abhishek Tripathi"
                className="w-full max-w-xs h-auto object-cover rounded-lg shadow-sm border-2 border-orange-200"
              />
            </div>

            {/* Details Section */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Professional Background</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pandit Abhishek Tripathi is a distinguished astrologer with expertise in both Vedic and KP systems. 
                    His precise predictions and practical remedies have helped thousands find clarity and solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="flex-shrink-0 w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Education</h4>
                      <p className="text-sm text-gray-600">Masters in Vedic Astrology, Banaras Hindu University</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="flex-shrink-0 w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Experience</h4>
                      <p className="text-sm text-gray-600">15+ years of astrological practice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="flex-shrink-0 w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-800">Specialization</h4>
                      <p className="text-sm text-gray-600">Career, Marriage & Life Path Predictions</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/contact" passHref>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-base font-medium rounded-lg shadow-sm transition-colors">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}