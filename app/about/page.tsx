
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Award, Users, Clock, BookOpen, Heart, Shield, Target, Sparkles, Gem, Globe, Scroll } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Clock, number: '20+', label: 'Years of Legacy' },
    { icon: BookOpen, number: '10000+', label: 'Kundli Analyzed' },
    { icon: Award, number: '99%', label: 'Success Rate' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Guidance',
      description: 'Empathetic consultations that honor the sacredness of each individual’s journey.'
    },
    {
      icon: Shield,
      title: 'Authentic Wisdom',
      description: 'Rooted in the timeless legacy of Vedic & KP astrology, passed down through generations.'
    },
    {
      icon: Target,
      title: 'Practical Solutions',
      description: 'Offering clear insights and actionable remedies for real-world transformation and balance.'
    },
  ];

  const specializations = [
    'Vedic Astrology', 
    'KP Astrology', 
    'Kundali Milan (Matchmaking)', 
    'Career & Business Guidance', 
    'Gemstone Recommendations', 
    'Muhurat Selection',
    'Prashna Jyotish (Horary)',
    'Astrological Remedies & Upay'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-white">
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-10 bg-gradient-to-br from-[#FFEBD5] to-[#FFF5EB] overflow-hidden">
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-[#FF9933]/30 animate-pulse" />
          <Star className="absolute bottom-20 right-20 w-8 h-8 text-[#FF9933]/30 animate-spin-slow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/30 shadow-md ">
                  <Sparkles className="w-5 h-5 text-[#321414]" />
                  <span className=" text-sm font-bold text-[#321414]">Vedic & KP Astrologer in Ujjain</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#321414] leading-tight">
                  Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">Abhishek Tripathi</span>
                </h1>
                
                <p className="text-m text-justify md:text-m text-[#321414]/90 leading-relaxed">
                Abhishek Tripathi Vedic astrologer, proudly carrying forward the legacy of his late father, Pandit Shri R.K. Tripathi Ji — a distinguished astrologer, revered teacher, and spiritual guide based in Ujjain.

With blessings from his guru-father and the divine energy of Shri Mahakaleshwar Jyotirlinga, Abhishek ji continues the sacred tradition of astrology through R.K. Tripathi Jyotish Kendra, offering trusted guidance in Vedic Astrology, KP Astrology, Kundali Matching, Career & Business Counseling, Muhurat Selection, Remedies, and Gemstone Suggestions.

Known for his precise analysis and ethical practice, Abhishek ji blends ancient Jyotish knowledge with a practical, modern approach — helping individuals find clarity, direction, and purpose in life.

                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-[#FF5722]">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">Vedic & KP Astrology Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#FF5722]">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Trusted Family Legacy</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919827175769?text=Nashit%20Pandit,%20I%20want%20to%20know%20more%20about%20services"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white shadow-lg hover:shadow-[#FF5722]/50"
    >
        Book Personal Consultation
    </Button>
  </a>

  {/* Call Now Button */}
  <a href="tel:+919827175769">
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white shadow-lg hover:shadow-[#FF5722]/50"
    >
      Call Now
    </Button>
  </a>
</div>

              </div>
              
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                  <img
                    src="/cta/t.jpg"
                    alt="Astrologer Abhishek Tripathi in Ujjain providing vedic astrology consultation"
                    className="w-full h-[600px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/40 to-transparent" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-[#FFD700] z-20">
                  <div className="flex items-center">
                    <Gem className="w-6 h-6 text-[#FF5722]" />
                    <span className="ml-2 text-sm font-medium">Gemstone Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section - ENHANCED & CORRECTED */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-6">
                  A Legacy of <span className="text-[#FF5722]">Spiritual Wisdom</span>
                </h2>
                
                <div className="space-y-6 text-[#321414]/90 leading-relaxed">
                  <p>
                    The journey of Abhishek Tripathi is a continuation of a sacred heritage. He follows in the revered footsteps of his late father and guru, <strong>Pandit Shri R.K. Tripathi Ji</strong>, a name synonymous with astrological wisdom and spiritual guidance in the holy city of Ujjain.
                  </p>
                  
                  <p>
                    Nurtured under his father's direct mentorship at the renowned <strong>R.K. Tripathi Jyotish Kendra</strong>, Abhishek ji was immersed in the profound principles of both Vedic and KP Astrology. His unique approach merges timeless traditions with a practical, modern perspective, making cosmic guidance relevant for today's challenges.
                  </p>
                  
                  <p>
                    Operating with the divine blessings of <strong>Shri Mahakaleshwar Jyotirlinga</strong>, his practice is founded on a deep commitment to truth and ethical counsel. He believes astrology is a tool for empowerment—a light to illuminate one's path, not to instill fear.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-[#FFF5EB] to-[#FFEBD5] border-0 shadow-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-[#321414] mb-4 flex items-center">
                      <Scroll className="w-6 h-6 text-[#FF5722] mr-2" />
                      Our Foundation
                    </h3>
                    <ul className="space-y-3 text-[#321414]/90">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Inherited wisdom from a renowned astrological lineage.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Practice centered in the spiritual city of Ujjain.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Expertise in both traditional Vedic and modern KP systems.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Commitment to ethical, truthful, and practical guidance.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-[#FFD700] shadow-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-[#321414] mb-4 flex items-center">
                      <Target className="w-6 h-6 text-[#FF5722] mr-2" />
                      Our Astrological Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {specializations.map((item) => (
                        <span key={item} className="text-sm bg-[#FFEBD5] text-[#FF5722] px-3 py-1.5 rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF5EB] to-[#FFEBD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
                A Legacy of <span className="text-[#FF5722]">Trust in Ujjain</span>
              </h2>
              <p className="text-lg text-[#321414]/90 max-w-3xl mx-auto">
                Our authentic Vedic guidance has brought clarity and transformation to thousands of seekers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                
                return (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FF9933] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#321414] mb-1">
                      {achievement.number}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-[#FF5722]">
                      {achievement.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
                Our <span className="text-[#FF5722]">Core Values</span>
              </h2>
              <p className="text-lg text-[#321414]/90 max-w-3xl mx-auto">
                Principles that guide our spiritual counseling and astrological practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-[#FFD700]">
                    <CardContent className="p-0 space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FF5722] to-[#FF9933] rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#321414]">
                        {value.title}
                      </h3>
                      <p className="text-[#321414]/80">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white overflow-hidden">
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-white/20" />
          <Star className="absolute bottom-20 right-20 w-8 h-8 text-white/20 animate-spin-slow" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
              <Globe className="w-5 h-5 text-white" />
              <span className="ml-2 text-sm font-bold">Our Spiritual Mission</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Guiding You Toward <span className="text-[#FFD700]">Cosmic Harmony</span>
            </h2>
            
            <p className="text-xl text-orange-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              "To bridge ancient Vedic wisdom with modern life, helping you discover your true purpose and live in harmony with your cosmic blueprint."
            </p>
            
            <div className="flex flex-col text-center  gap-3 sm:gap-4 mt-6">
  <a
    href="https://wa.me/919827175769?text=Namaste%20Pandit%20Ji%20I%20want%20to%20know%20more%20about%20services"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button 
      size="lg" 
      variant="secondary" 
      className="bg-white text-[#FF5722] hover:bg-orange-50 px-8 py-4 font-bold shadow-lg hover:shadow-xl"
    >
      WhatsApp Us
    </Button>
  </a>

  {/* Call Now Button */}
  <a href="tel:+919827175769">
    <Button 
      size="lg" 
      variant="secondary" 
      className="bg-white text-[#FF5722] hover:bg-orange-50 px-8 py-4 font-bold shadow-lg hover:shadow-xl"
    >
      Call Now
    </Button>
  </a>
</div>

          </div>
        </section>
      </main>
    </div>
  );
}
