

import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-white">
      <Header />
      <main>
        {/* Article Header with Image */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#FFEBD5] to-[#FFF5EB] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:10px_10px] opacity-10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-[#FF5722] hover:text-[#E64A19] transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Image and Main Content */}
              <div className="lg:col-span-3 order-1">
                <div className="aspect-video overflow-hidden rounded-2xl shadow-xl border-4 border-white mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#321414] leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[#321414]/80 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-[#FF5722]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#FF5722]" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#FF5722]" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-[#FF5722]" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-[#FFEBD5] text-[#FF5722] text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1.5 bg-white text-[#321414]/80 text-xs rounded-full border border-[#FFD700]/50 hover:bg-[#FFD700]/10 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-[#FF5722] border-[#FF5722] hover:bg-[#FFEBD5] hover:text-[#E64A19] transition-colors rounded-lg"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-2 order-2 lg:order-2 space-y-6">
                {/* CTA */}
                <Card className="bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white border-0 shadow-xl rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
                    <p className="text-white/90 text-sm mb-6">
                      Discover your path with a tailored astrological reading from Pandit Tripathi.
                    </p>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full bg-white text-[#FF5722] hover:bg-white/90 font-semibold rounded-lg"
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>

                {/* More Articles */}
                <Card className="border-[#FFD700]/30 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#321414] mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-[#FF5722]" />
                      More Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map(post => (
                        <Link 
                          key={post.id} 
                          href={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-[#321414]/60">{post.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="border-[#FFD700]/30 shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#321414] mb-4 flex items-center">
                      <Tag className="w-6 h-6 mr-2 text-[#FF5722]" />
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Link 
                          key={index} 
                          href={`/blog?tag=${tag}`}
                          className="px-3 py-1.5 bg-[#FFEBD5] text-[#FF5722] text-xs font-medium rounded-full hover:bg-[#FFD700]/30 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              {post.sections.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  {section.heading && (
                    <h2 
                      id={section.heading.toLowerCase().replace(/ /g, '-')} 
                      className="text-2xl md:text-3xl font-bold text-[#321414] mb-4 scroll-mt-20"
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div 
                    className="text-[#321414]/90 leading-relaxed space-y-4 text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: section.description.replace(/\n/g, '<br />') }}
                  />
                </div>
              ))}
            </article>
            
            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#FFEBD5] to-[#FFD700]/20 rounded-2xl border border-[#FFD700]/30 shadow-md">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/astrologer-profile.jpg"
                  alt={post.author}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#321414]">{post.author}</h3>
                  <p className="text-[#321414]/80 mb-2 text-sm font-medium">Vedic Astrologer & Spiritual Guide</p>
                  <p className="text-[#321414]/80 text-sm leading-relaxed">
                    With over 20 years of experience, Pandit Tripathi has guided thousands in their spiritual journey
                    through authentic Vedic wisdom and compassionate counseling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#FFEBD5] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414]">
                More <span className="text-[#FF5722]">Spiritual Insights</span>
              </h2>
              <p className="text-[#321414]/80 mt-2 text-lg">Continue your journey with these related articles</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-shadow border-[#FFD700]/30 rounded-2xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-[#321414]/60 mb-3">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#321414] mb-2 group-hover:text-[#FF5722] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#321414]/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-[#FF5722] border-[#FF5722] hover:bg-[#FFEBD5] hover:text-[#E64A19] rounded-lg"
                      >
                        Read Article

                        {/* <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> */}
                      </Button>
                    </Link>
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