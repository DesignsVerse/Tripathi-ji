import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Our Spiritual Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the ancient wisdom of Vedic astrology through our comprehensive 
                range of services. Each consultation is personalized to guide you on 
                your unique life journey with authentic spiritual insights.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl">{service.icon}</span>
                      <div className="flex items-center space-x-1 text-orange-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                      <span className="font-semibold text-orange-600 text-lg">{service.price}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-orange-600 text-xs">
                            +{service.features.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-3 pt-4">
                      <Link href={`/services/${service.slug}`} className="flex-1">
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:border-orange-300 group-hover:text-orange-700"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of authentic Vedic astrology with our 
                time-tested approach and personalized guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Authentic Methods</h3>
                <p className="text-sm text-gray-600">Traditional Vedic astrology practices passed down through generations</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">20+ Years Experience</h3>
                <p className="text-sm text-gray-600">Decades of expertise in providing accurate astrological guidance</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">5000+ Happy Clients</h3>
                <p className="text-sm text-gray-600">Thousands of satisfied clients worldwide trust our guidance</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">99% Accuracy</h3>
                <p className="text-sm text-gray-600">Highly accurate predictions and effective remedial solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Take the first step towards understanding your cosmic destiny. 
              Book your consultation today and let the ancient wisdom guide your journey.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 text-lg"
            >
              Book Your Consultation Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}