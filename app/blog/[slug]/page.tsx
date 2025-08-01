import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, Tag, Star } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      <main>
        {/* Top Banner/Title */}
        <section className="w-full bg-gradient-to-b from-[#FFEBD5] to-[#FFF5EB] pt-5 pb-3 border-b border-[#FFD700]/30">
          <div className="container mx-auto px-4 flex items-center gap-4">
            <Link
              href="/blog"
              className="flex items-center text-[#FF5722] hover:text-[#E64A19] font-medium"
            >
              <ArrowLeft className="w-5 h-5 mr-1" />
              Back
            </Link>
            <span className="ml-auto text-[#321414]/80 text-xs">{post.category}</span>
          </div>
        </section>

        {/* Main Blog Content area */}
        <section className="container mx-auto px-4 py-6 grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Article column */}
          <article className="xl:col-span-8 col-span-1 w-full">
            {/* Feature Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 sm:h-80 object-cover transition-transform duration-300"
              />
            </div>

            {/* Title & Metadata */}
            <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#321414] mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center mb-4 text-sm text-[#321414]/70">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-[#FF5722]" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-[#FF5722]" />{" "}
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#FF5722]" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#FF5722]" /> {post.category}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap mb-8 gap-2">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#FFEBD5] text-[#FF5722] rounded-full font-semibold text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Body Sections */}
            <div className="prose prose-lg text-[#321414]/90 mb-10">
              {post.sections.map((section, idx) => (
                <div key={idx} className="mb-8 last:mb-0">
                  {section.heading && (
                    <h2
                      id={section.heading.toLowerCase().replace(/ /g, "-")}
                      className="text-2xl font-bold mb-3 text-[#321414] border-l-4 border-[#FFD700] pl-3"
                    >
                      {section.heading}
                    </h2>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.description.replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Author Box */}
            <div className="flex items-center bg-gradient-to-r from-[#FFEBD5] to-[#FFD700]/20 rounded-2xl border border-[#FFD700]/20 shadow p-5 mb-12">
              <img
                src="/astrologer-profile.jpg"
                alt={post.author}
                className="w-20 h-20 rounded-full border-2 border-white shadow-inner"
              />
              <div className="ml-6">
                <h3 className="text-lg font-bold text-[#321414]">{post.author}</h3>
                <div className="text-[#321414]/70 text-xs mb-1">Vedic Astrologer & Spiritual Guide</div>
                <div className="text-[#321414]/70 text-sm">
                  With over 20 years of experience, Pandit Tripathi guides thousands through Vedic wisdom & compassionate counseling.
                </div>
              </div>
            </div>

            {/* Related Articles Slider / Grid */}
            <h2 className="text-2xl font-bold mb-6 text-[#321414] flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#FF5722]" /> More Insights
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Card key={rel.id} className="hover:shadow-lg transition-shadow border-[#FFD700]/20">
                  <div className="aspect-video rounded-t-xl overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-[#321414] line-clamp-2 mb-1">{rel.title}</h3>
                    <div className="text-xs text-[#321414]/50 mb-2">{rel.readTime}</div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="text-[#FF5722] font-medium hover:underline text-sm"
                    >
                      Read Article
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </article>

          {/* Sidebar / Mobile-bottom bar */}
          <aside className="xl:col-span-4 col-span-1 space-y-6 sticky top-24 h-max">
            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white border-0 shadow-xl rounded-2xl">
              <CardContent className="p-7 text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Guidance</h3>
                <p className="text-sm mb-4 leading-relaxed opacity-90">
                  Get an exclusive astrological reading from Pandit Tripathi.
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

            {/* Topics / Tags */}
            <Card className="shadow rounded-2xl border-[#FFD700]/30">
              <CardContent className="p-6">
                <h4 className="mb-3 font-semibold text-[#321414] flex items-center gap-1">
                  <Tag className="w-5 h-5 text-[#FF5722]" />
                  Related Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Link
                      key={i}
                      href={`/blog?tag=${tag}`}
                      className="bg-[#FFEBD5] text-[#FF5722] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#FFD700]/30"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>


      {/* Mobile sticky share bar */}
      <div className="fixed xl:hidden bottom-0 left-0 right-0 bg-white z-30 border-t border-[#FFEBD5] flex px-4 py-3 gap-4 justify-between">
        <Button variant="outline" size="sm" className="flex-1 text-[#FF5722] border-[#FF5722]">
          <Share2 className="w-5 h-5" />
          <span className="ml-2">Share</span>
        </Button>
        <Button variant="default" size="sm" className="flex-1 bg-[#FF9933] text-white font-semibold">
          Book Consultation
        </Button>
      </div>
    </div>
  );
}
