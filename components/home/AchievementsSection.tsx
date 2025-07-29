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
    <section className="relative px-16 py-14 bg-[#FFF5E6] overflow-hidden">
      <div> 
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-[#FF9933]/30 p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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