import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag } from 'lucide-react';
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Article Header */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link 
                href="/blog" 
                className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex space-x-1">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg prose-orange max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
                </article>
                
                {/* Author Bio */}
                <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                      <p className="text-gray-600 mb-2">Vedic Astrologer & Spiritual Guide</p>
                      <p className="text-gray-600 text-sm">
                        With over 20 years of experience in Vedic astrology, Pandit Tripathi has helped 
                        thousands of people find clarity and direction in their spiritual journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Table of Contents */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                        Quick Navigation
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-orange-600 hover:text-orange-700">Introduction</a></li>
                        <li><a href="#" className="text-orange-600 hover:text-orange-700">Understanding Vedic Astrology</a></li>
                        <li><a href="#" className="text-orange-600 hover:text-orange-700">Modern Applications</a></li>
                        <li><a href="#" className="text-orange-600 hover:text-orange-700">Practical Benefits</a></li>
                        <li><a href="#" className="text-orange-600 hover:text-orange-700">Conclusion</a></li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Tags */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Tag className="w-5 h-5 mr-2 text-orange-600" />
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* CTA */}
                  <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white border-0">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold mb-2">Need Personal Guidance?</h3>
                      <p className="text-orange-100 text-sm mb-4">
                        Get personalized astrological insights from Pandit Tripathi
                      </p>
                      <Button variant="secondary" size="sm" className="w-full bg-white text-orange-600 hover:bg-orange-50">
                        Book Consultation
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <Clock className="w-3 h-3 ml-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button size="sm" variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                          Read More
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