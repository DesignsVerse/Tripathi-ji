import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Star, Check, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link 
                href="/services" 
                className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Services
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900">
                  {service.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-8 text-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {service.price}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Book Consultation Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    Ask Questions
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Successful Consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Features List */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What You'll Get
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Booking Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8 border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Book Your Session
                      </h3>
                      <p className="text-gray-600">
                        Start your spiritual journey today
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Price</span>
                        <span className="font-semibold text-orange-600 text-xl">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Availability</span>
                        <span className="text-green-600 font-semibold">Available Now</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Call +91 98765 43210
                      </Button>
                      <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Consultation
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 text-center mt-4">
                      Free 15-minute consultation available for first-time clients
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple steps to get your personalized astrological guidance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Your Session</h3>
                <p className="text-gray-600">Choose your preferred consultation method and schedule a convenient time</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Provide Birth Details</h3>
                <p className="text-gray-600">Share your accurate birth date, time, and place for precise analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Guidance</h3>
                <p className="text-gray-600">Get personalized insights, predictions, and remedial solutions for your questions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              You Might Also Like
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <Card key={relatedService.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={relatedService.image}
                        alt={relatedService.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{relatedService.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{relatedService.title}</h3>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-orange-600">{relatedService.price}</span>
                        <Link href={`/services/${relatedService.slug}`}>
                          <Button size="sm" variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}