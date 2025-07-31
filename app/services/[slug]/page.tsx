import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Check, Phone, Mail,Infinity, BookOpen, Zap, ScrollText, Home, BrainCircuit, CalendarCheck, Gem, ShieldAlert, Compass, Hash, Hand, HelpCircle, Flame, Moon, Heart, Target } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) notFound();

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-100 to-amber-50 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6 max-w-3xl">
                  {service.description}
                </p>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-gray-700 font-medium">5.0 (120+ reviews)</span>
                </div>
              </div>
              <div className="w-full md:w-80">
                <img 
                  alt={service.title}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Features */}
              

              {/* Content Sections */}
              {service.contentSections?.map((section, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
                </div>
              ))}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.featureList.map((feature, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-amber-100 flex items-start gap-3">
                      <div className="bg-amber-50 p-2 rounded-full">
                        <Check className="w-5 h-5 text-amber-600" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* FAQs */}
              {service.faqs?.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-lg border border-amber-100">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Book This Service</h3>
                    <p className="text-gray-600">Starting from ₹{service.startingPrice}</p>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white mb-4 py-3">
                    <Phone className="w-5 h-5 mr-2" />
                    Instant Consultation
                  </Button>
                  
                  <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 py-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Inquiry
                  </Button>

                  <div className="mt-6 pt-6 border-t border-amber-100">
                    <h4 className="font-medium text-gray-900 mb-3">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.featureList.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map(service => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-amber-100 to-amber-50 flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')]"></div>
                    {/* <div className="relative z-10 p-4 bg-white rounded-full shadow-md border border-amber-200">
                      {iconMap[service.slug] || <Star className="w-8 h-8 text-amber-500" />}
                    </div> */}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-amber-50 hover:border-amber-300">
                        View Details
                        <BookOpen className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SupportBox />
    </div>
  );
}

const iconMap = {
  'janm-patrika': <ScrollText className="w-8 h-8 text-blue-600" />,
  'kundli-ghar-tak': <Home className="w-8 h-8 text-amber-600" />,
  'falit-jyotish': <BrainCircuit className="w-8 h-8 text-purple-600" />,
  'gemstone-astrology': <Gem className="w-8 h-8 text-emerald-600" />,
  'dosha-yoga': <ShieldAlert className="w-8 h-8 text-red-600" />,
  'vastu': <Compass className="w-8 h-8 text-teal-600" />,
  'palmistry': <Hand className="w-8 h-8 text-pink-600" />,
  'prashna': <HelpCircle className="w-8 h-8 text-indigo-600" />,
  'kundli-milan': <Heart className="w-8 h-8 text-rose-600" />,
  'kp-astrology': <Target className="w-8 h-8 text-orange-600" />,
  'sadesati': <Moon className="w-8 h-8 text-violet-600" />,
  'manglik': <Flame className="w-8 h-8 text-red-700" />,
  'kaalsarp': <Infinity className="w-8 h-8 text-yellow-700" />,
  'numerology': <Hash className="w-8 h-8 text-cyan-600" />,
  'muhurat': <CalendarCheck className="w-8 h-8 text-green-600" />,
};