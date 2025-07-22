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
        <div className="absolute top-20 left-20 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-6xl animate-pulse">★</div>
        <div className="absolute bottom-1/4 left-1/4 text-[#FF5722] text-5xl animate-pulse">☽</div>
      </div>
      
      {/* Golden top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6 mx-auto">
            <Sparkles className="w-6 h-6 text-[#321414]" />
            <span className="ml-3 text-lg font-bold text-[#321414]">Cosmic Milestones</span>
          </div>
          
          <h2 className="text-5xl font-bold text-[#321414] mb-5">
            <span className="relative inline-block">
              Divine Achievements
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFD700]/50 z-0"></span>
            </span>
          </h2>
          
          <p className="text-xl text-[#321414]/90 max-w-2xl mx-auto leading-relaxed">
            Over two decades of celestial guidance, helping souls align with their 
            cosmic destiny through authentic Vedic wisdom.
          </p>
        </div>

        {/* Premium Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <div 
                key={index} 
                className="relative group text-center p-10 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 border-[#FF9933]/30 hover:border-[#FF5722]/50"
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#FF5722] to-[#FF9933]"></div>
                
                {/* Floating icon */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3 relative z-10">
                  <h3 className="text-5xl font-bold text-[#321414]">
                    <Counter end={achievement.number} suffix={achievement.suffix} />
                  </h3>
                  <p className="text-xl font-bold text-[#FF5722]">
                    {achievement.label}
                  </p>
                  <p className="text-sm text-[#321414]/80 font-medium">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Decorative bottom element */}
        <div className="mt-20 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}