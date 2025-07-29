'use client';

import Counter from '@/components/ui/counter';
import { Users, BookOpen, Award, Clock, Sparkles } from 'lucide-react';

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
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-8 left-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-5xl md:text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border-2 border-[#FF5722]/50 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-[#321414]" />
            <span className="ml-3 text-base md:text-lg font-bold text-[#321414]">Our Legacy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-4">
            <span className="relative inline-block">
              Our Achievements
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#FF5722] z-0 rounded"></span>
            </span>{' '}
            <span className="text-[#FF5722]">in Vedic Wisdom</span>
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/90 max-w-3xl mx-auto leading-relaxed">
            Decades of expertise, thousands of lives transformed, and unmatched precision in Vedic guidance.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="bg-white/95 rounded-2xl shadow-lg border border-[#FF9933]/20 p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 group transition-all duration-300"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#321414] mb-2">
                    <Counter end={achievement.number} suffix={achievement.suffix} />
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-[#FF5722]">
                    {achievement.label}
                  </p>
                  <p className="text-xs md:text-sm text-[#321414]/80 mt-2">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}