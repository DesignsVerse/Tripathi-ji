'use client';

import Counter from '@/components/ui/counter';
import { Users, BookOpen, Award, Clock, Sparkles } from 'lucide-react';

// Correct and updated achievement data
const achievements = [
  {
    icon: Users,
    number: 5000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Guided on their spiritual path'
  },
  {
    icon: Clock,
    number: 20,
    suffix: '+',
    label: 'Years of Legacy',
    description: 'Continuing a sacred tradition'
  },
  {
    icon: BookOpen,
    number: 10000,
    suffix: '+',
    label: 'Kundlis Analyzed',
    description: 'In-depth birth chart readings'
  },
  {
    icon: Award,
    number: 99,
    suffix: '%',
    label: 'Success Rate',
    description: 'In trusted & effective remedies'
  }
];

export default function AchievementsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-8 left-8 text-[#FF9933] text-6xl animate-pulse">✧</div>
        <div className="absolute bottom-8 right-8 text-[#FF9933] text-6xl animate-pulse">✦</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:16px_16px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700]/50 to-[#FF9933]/50 rounded-full border border-[#FF5722]/30 shadow-md mb-6">
            <Sparkles className="w-5 h-5 text-[#321414]" />
            <span className="ml-2 text-base font-bold text-[#321414]">A Legacy of Trust</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#321414] mb-4">
            Milestones on Our Spiritual Journey
          </h2>
          <p className="text-lg md:text-xl text-[#321414]/80 max-w-3xl mx-auto leading-relaxed">
            Decades of expertise, thousands of lives transformed, and unmatched precision in both Vedic and KP astrological guidance.
          </p>
        </div>

        {/* Achievements Grid - Enhanced & Responsive */}
        <div className="bg-[#FFF9F2] backdrop-blur-sm rounded-2xl shadow-xl border border-[#FF9933]/20 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 group transition-all duration-300 rounded-xl hover:bg-gradient-to-br hover:from-[#FFF9F2] hover:to-[#FFEFD5] hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#321414]">
                    <Counter end={achievement.number} suffix={achievement.suffix} />
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-[#FF5722] mt-1">
                    {achievement.label}
                  </p>
                  <p className="text-sm text-[#321414]/70 mt-2 h-10">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
