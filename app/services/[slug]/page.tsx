import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, Check, Phone, Mail } from 'lucide-react';
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
    <div className="bg-[#FFF9F2] min-h-screen flex flex-col">
      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto w-full px-4 py-12 grid grid-cols-1 lg:grid-cols-9 gap-10">
          {/* --- LEFT Side: Image + Content --- */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Service Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video w-full bg-[#FFEBD5]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Service Content */}
            <div>
              <Link
                href="/services"
                className="flex items-center gap-2 text-[#FF5722] hover:text-[#E64A19] text-sm mb-2"
              >
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
              <div className="mb-3 flex flex-wrap items-center gap-4">
                <span className="text-4xl">{service.icon}</span>
                <span className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                  ))}
                </span>
              </div>
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#321414] mb-2 leading-tight">
                {service.title}
              </h1>
              <p className="text-[#321414]/80 text-lg mb-5">{service.description}</p>
              {/* Features as modern cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.featureList.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FFF5EB] rounded-xl p-4 shadow">
                    <span className="bg-[#FFEBD5] rounded-full p-2 mt-1">
                      <Check className="w-4 h-4 text-[#FF5722]" />
                    </span>
                    <span className="text-base text-[#321414]/90">{feature}</span>
                  </div>
                ))}
              </div>
              {service.contentSections?.map((sec, idx) => (
                <div key={idx} className="mb-10">
                  <h2 className="text-xl md:text-2xl font-bold text-[#321414] mb-2">{sec.heading}</h2>
                  <p className="text-[#321414]/90 text-base">{sec.description}</p>
                </div>
              ))}
              {service.faqs?.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-[#321414] mb-5">Frequently Asked Questions</h2>
                  <div className="flex flex-col gap-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="rounded-lg bg-white shadow p-4">
                        <div className="font-semibold text-[#FF5722] mb-1">{faq.question}</div>
                        <div className="text-[#321414]/80">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* --- RIGHT Side: Booking/CTA Card (Sticky) --- */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24">
            <Card className="rounded-2xl shadow-xl bg-white border-0 overflow-hidden">
              <CardContent className="p-7">
        
                <h2 className="text-2xl font-bold text-[#321414] mb-2 text-center">{service.title}</h2>
                <p className="text-[#321414]/70 text-sm mb-6 text-center">{service.description.slice(0, 90)}...</p>
                <Button className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white rounded-md font-semibold mb-3 py-3 flex gap-2 items-center justify-center">
                  <Phone className="w-4 h-4" /> Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#FF5722] text-[#FF5722] hover:bg-[#FFEBD5] font-semibold rounded-md py-3 flex gap-2 items-center justify-center"
                >
                  <Mail className="w-4 h-4" /> Ask a Question
                </Button>
                <div className="mt-6 text-xs text-[#321414]/70 text-center">
                  Trusted by <span className="font-bold text-[#FF5722]">5,000+</span> clients.
                </div>
              </CardContent>
            </Card>
            {/* Optionally add related or promo cards */}
          </aside>
        </div>
        {/* Related Services */}
        <section className="bg-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#321414] mb-8 text-center">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map(s => (
                <Card key={s.id} className="rounded-xl group hover:shadow-lg border-0 transition-all duration-300">
                  <div className="aspect-video rounded-t-xl overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="font-semibold text-[#321414]">{s.title}</h3>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <Link href={`/services/${s.slug}`}>
                        <Button size="sm" variant="outline" className="text-[#FF5722] border-[#FF5722] hover:bg-[#FFEBD5] rounded-md">
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
        {/* Sticky mobile CTA */}
        <div className="fixed xl:hidden bottom-0 left-0 right-0 bg-white z-30 border-t border-[#FFEBD5] flex px-4 py-3 gap-4 justify-between">
          <Button variant="outline" size="sm" className="flex-1 text-[#FF5722] border-[#FF5722]">
            Call Now
          </Button>
          <Button variant="default" size="sm" className="flex-1 bg-[#FF9933] text-white font-semibold">
            Book Consultation
          </Button>
        </div>
      </main>
      <SupportBox />
    </div>
  );
}
