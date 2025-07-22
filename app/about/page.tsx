import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Award, Users, Clock, BookOpen, Heart, Shield, Target } from 'lucide-react';

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
      description: 'We approach every consultation with empathy and understanding, recognizing that each person\'s journey is unique and sacred.'
    },
    {
      icon: Shield,
      title: 'Authentic Wisdom',
      description: 'Our practices are rooted in traditional Vedic astrology, passed down through generations of learned spiritual masters.'
    },
    {
      icon: Target,
      title: 'Practical Solutions',
      description: 'We provide actionable insights and remedies that can be practically implemented in your daily life for positive transformation.'
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    About
                    <span className="text-orange-600 block">Pandit Tripathi</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    A beacon of ancient wisdom in the modern world, guiding souls 
                    toward their true purpose through the sacred science of Vedic astrology.
                  </p>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2 text-orange-600">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">Master Astrologer</span>
                  </div>
                  <div className="flex items-center space-x-2 text-orange-600">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">20+ Years Experience</span>
                  </div>
                </div>

                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Book Personal Consultation
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/6473766/pexels-photo-6473766.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pandit Tripathi - Master Vedic Astrologer"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-96 h-96 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-full opacity-30 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  A Journey of Spiritual Discovery
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Born into a family of traditional astrologers in the sacred city of Varanasi, 
                    Pandit Tripathi was introduced to the divine science of Jyotish at an early age. 
                    Under the guidance of his revered grandfather, a renowned astrologer of his time, 
                    he began his spiritual journey into the depths of Vedic wisdom.
                  </p>
                  
                  <p>
                    For over two decades, Pandit Tripathi has dedicated his life to mastering the 
                    intricate art of Vedic astrology, studying ancient Sanskrit texts, and learning 
                    from various gurus across India. His approach combines traditional knowledge 
                    with practical understanding, making cosmic wisdom accessible to modern seekers.
                  </p>
                  
                  <p>
                    What sets Pandit Tripathi apart is his compassionate approach to astrology. 
                    He believes that the stars guide us not to create fear, but to illuminate the 
                    path toward our highest potential. His consultations are known for their accuracy, 
                    depth, and the practical remedies that bring real transformation to people's lives.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-0">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Background</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Master's in Vedic Astrology from Sanskrit University</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Advanced Certification in Palmistry & Numerology</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Specialized Training in Gemstone Therapy</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Certified Vastu Consultant</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-6 border-orange-200">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Specializations</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Kundli Analysis</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Career Guidance</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Marriage Compatibility</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Gemstone Therapy</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Vastu Shastra</span>
                      <span className="text-sm bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-center">Numerology</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Two Decades of Dedicated Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to authentic Vedic wisdom has touched thousands of lives 
                across the globe, bringing clarity, peace, and positive transformation.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                
                return (
                  <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                    </h3>
                    <p className="text-lg font-semibold text-orange-600">
                      {achievement.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Recognition */}
            <Card className="max-w-4xl mx-auto border-0 shadow-xl">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Recognition & Awards</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <Award className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Best Astrologer Award</h4>
                    <p className="text-sm text-gray-600">Indian Astrology Council 2022</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <Star className="w-8 h-8 text-orange-600 fill-current" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Excellence in Service</h4>
                    <p className="text-sm text-gray-600">Vedic Sciences Institute 2021</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Community Service</h4>
                    <p className="text-sm text-gray-600">Social Welfare Society 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our approach to spiritual counseling and astrological consultation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                
                return (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-orange-100">
                    <CardContent className="p-0 space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-orange-100 leading-relaxed mb-12">
              "To bridge the ancient wisdom of Vedic astrology with modern life, 
              helping individuals discover their true purpose, overcome challenges, 
              and live in harmony with their cosmic blueprint."
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-orange-100">
                  To be the most trusted source of authentic Vedic astrological guidance, 
                  spreading spiritual awareness and positive transformation across the globe.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Our Promise</h3>
                <p className="text-orange-100">
                  Every consultation is treated with the utmost respect, confidentiality, 
                  and spiritual dedication, ensuring you receive genuine guidance for your journey.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 text-lg"
              >
                Begin Your Spiritual Journey
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}