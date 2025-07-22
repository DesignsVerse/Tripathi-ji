'use client';

import Counter from '@/components/ui/counter';
import { Users, BookOpen, Award, Clock, Star, Sparkles } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: 5000,
    suffix: '+',
    label: 'Blessed Clients',
    description: 'Transformed lives worldwide'
  },
  {
    icon: Clock,
    number: 25,
    suffix: '+',
    label: 'Years of Wisdom',
    description: 'Vedic astrology mastery'
  },
  {
    icon: BookOpen,
    number: 12500,
    suffix: '+',
    label: 'Kundalis Analyzed',
    description: 'Precise birth chart readings'
  },
  {
    icon: Award,
    number: 99,
    suffix: '%',
    label: 'Accuracy Rate',
    description: 'Proven predictions'
  }
];

export default function AchievementsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FFF5E6] to-[#FFE8CC] overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-[#FF9933] text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-10 right-10 text-[#FF9933] text-6xl animate-pulse">✦</div>
      </div>
      
      {/* Golden top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-md mb-6 mx-auto">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg font-bold text-[#321414]">Cosmic Milestones</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-bold text-[#321414] mb-6">
            Divine Achievements
          </h2>
          
          <p className="text-xl text-[#321414]/90 max-w-2xl mx-auto">
            Decades of guiding souls with authentic Vedic wisdom.
          </p>
        </div>

        {/* Single Card Layout */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-[#FF9933]/30 p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <div 
                  key={index} 
                  className="text-center p-6 group transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl sm:text-5xl font-bold text-[#321414] mb-2">
                    <Counter end={achievement.number} suffix={achievement.suffix} />
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#FF5722]">
                    {achievement.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[#321414]/80 mt-2">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 flex justify-center">
          <div className="w-40 h-2 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}