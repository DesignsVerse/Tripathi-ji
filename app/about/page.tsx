import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Award, Users, Clock, BookOpen, Heart, Shield, Target, Sparkles, Gem, Globe, Scroll } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: '5000+', label: 'Happy Clients' },
    { icon: Clock, number: '20+', label: 'Years Experience' },
    { icon: BookOpen, number: '10000+', label: 'Kundli Analyzed' },
    { icon: Award, number: '99%', label: 'Success Rate' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Guidance',
      description: 'Empathetic consultations recognizing each journey as sacred'
    },
    {
      icon: Shield,
      title: 'Authentic Wisdom',
      description: 'Rooted in traditional Vedic astrology passed through generations'
    },
    {
      icon: Target,
      title: 'Practical Solutions',
      description: 'Actionable insights for real transformation in daily life'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#FFEBD5] to-[#FFF5EB] overflow-hidden">
          {/* Cosmic elements */}
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-[#FF9933]/30 animate-pulse" />
          <Star className="absolute bottom-20 right-20 w-8 h-8 text-[#FF9933]/30 animate-spin-slow" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/30 shadow-md mb-6">
                  <Sparkles className="w-5 h-5 text-[#321414]" />
                  <span className="ml-2 text-sm font-bold text-[#321414]">Vedic Astrologer</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#321414] leading-tight">
                  Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">Pandit Tripathi</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed">
                  A beacon of ancient wisdom guiding souls toward their true purpose through sacred Vedic sciences.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-[#FF5722]">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">Master Astrologer</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#FF5722]">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">20+ Years Experience</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF5722] to-[#FF9933] hover:from-[#E64A19] hover:to-[#FF5722] text-white shadow-lg hover:shadow-[#FF5722]/50 mt-6"
                >
                  Book Personal Consultation
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                  <img
                    src="/astrologer-profile.jpg"
                    alt="Pandit Tripathi"
                    className="w-full h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321414]/40 to-transparent" />
                </div>
                
                {/* Floating elements */}
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

        {/* Journey Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-6">
                  Spiritual <span className="text-[#FF5722]">Journey</span>
                </h2>
                
                <div className="space-y-6 text-[#321414]/90 leading-relaxed">
                  <p>
                    Born into a lineage of Vedic scholars in Varanasi, Pandit Tripathi was initiated into 
                    Jyotish Shastra at age 12. His grandfather, a renowned astrologer, recognized his 
                    spiritual inclination and began his training in the sacred texts.
                  </p>
                  
                  <p>
                    Over two decades, he mastered Vedic astrology under various gurus across India, 
                    combining traditional knowledge with modern applicability. His approach makes cosmic 
                    wisdom accessible to contemporary seekers without diluting its profundity.
                  </p>
                  
                  <p>
                    Panditji believes astrology should illuminate paths, not create fear. His consultations 
                    blend accuracy with compassion, offering practical remedies that transform lives.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-[#FFF5EB] to-[#FFEBD5] border-0 shadow-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-[#321414] mb-4 flex items-center">
                      <Scroll className="w-6 h-6 text-[#FF5722] mr-2" />
                      Education
                    </h3>
                    <ul className="space-y-3 text-[#321414]/90">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Masters in Vedic Astrology, Sanskrit University</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Advanced Palmistry & Numerology Certification</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Gemstone Therapy Specialist</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#FF5722] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Certified Vastu Consultant</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-[#FFD700] shadow-sm">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-[#321414] mb-4 flex items-center">
                      <Target className="w-6 h-6 text-[#FF5722] mr-2" />
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['Kundli Analysis', 'Career Guidance', 'Marriage Compatibility', 
                        'Gemstone Therapy', 'Vastu Shastra', 'Numerology'].map((item) => (
                        <span key={item} className="text-sm bg-[#FFEBD5] text-[#FF5722] px-3 py-1.5 rounded-full">
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
                Two Decades of <span className="text-[#FF5722]">Spiritual Service</span>
              </h2>
              <p className="text-lg text-[#321414]/90 max-w-3xl mx-auto">
                Our authentic Vedic guidance has brought clarity and transformation to seekers worldwide
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
                Principles that guide our spiritual counseling and astrological practice
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
          {/* Decorative elements */}
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
              "To bridge ancient Vedic wisdom with modern life, helping individuals discover their 
              true purpose and live in harmony with their cosmic blueprint."
            </p>
            
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-[#FF5722] hover:bg-orange-50 px-8 py-4 font-bold shadow-lg hover:shadow-xl"
            >
              Begin Your Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}