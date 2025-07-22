import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#321414] to-[#1a0a0a] text-[#FFD700] relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-[#FF9933] text-7xl animate-pulse">✧</div>
        <div className="absolute bottom-20 right-20 text-[#FF9933] text-7xl animate-pulse">✦</div>
        <div className="absolute top-1/3 right-1/4 text-[#FFD700] text-6xl animate-pulse">★</div>
      </div>
      
      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#FFD700] font-bold text-2xl">ॐ</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#FFD700]">पंडित ज्योतिषाचार्य</h2>
                <p className="text-[#FF9933] font-medium">Master of Vedic Sciences</p>
              </div>
            </div>
            <p className="text-[#FF9933]/90 mb-8 max-w-md text-lg leading-relaxed">
              With 25+ years of expertise in Vedic astrology, numerology, and palmistry, 
              I provide authentic cosmic guidance to help align your life with universal energies.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3 text-[#FFD700]">Cosmic Insights Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-[#321414] border-2 border-[#FF9933]/30 text-[#FFD700] placeholder-[#FF9933]/50 rounded-l-lg focus:outline-none focus:border-[#FFD700] w-full"
                />
                <Button className="bg-gradient-to-br from-[#FF9933] to-[#FF5722] text-[#321414] hover:from-[#FF5722] hover:to-[#FF9933] px-6 rounded-l-none rounded-r-lg font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 bg-[#FF9933]/10 hover:bg-[#FF9933]/20 border border-[#FF9933]/30 rounded-full flex items-center justify-center text-[#FF9933] hover:text-[#FFD700] transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF9933]/10 hover:bg-[#FF9933]/20 border border-[#FF9933]/30 rounded-full flex items-center justify-center text-[#FF9933] hover:text-[#FFD700] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF9933]/10 hover:bg-[#FF9933]/20 border border-[#FF9933]/30 rounded-full flex items-center justify-center text-[#FF9933] hover:text-[#FFD700] transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#FF9933]/10 hover:bg-[#FF9933]/20 border border-[#FF9933]/30 rounded-full flex items-center justify-center text-[#FF9933] hover:text-[#FFD700] transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/services", text: "Our Services" },
                { href: "/blog", text: "Cosmic Insights" },
                { href: "/about", text: "About Me" },
                { href: "/testimonials", text: "Client Experiences" },
                { href: "/privacy", text: "Privacy Policy" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#FF9933]/90 hover:text-[#FFD700] transition-colors flex items-center group">
                    <span className="w-2 h-2 bg-[#FF9933] rounded-full mr-3 group-hover:bg-[#FFD700] transition-colors"></span>
                    <span className="text-lg">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Contact Me
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/30 mt-1 flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FF9933]" />
                </div>
                <div>
                  <p className="text-[#FF9933]/90 text-lg">+91 ९८७६५ ४३२१०</p>
                  <p className="text-[#FF9933]/90 text-lg">+91 ८७६५४ ३२१०९</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/30 mt-1 flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FF9933]" />
                </div>
                <p className="text-[#FF9933]/90 text-lg">contact@jyotishacharya.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/30 mt-1 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF9933]" />
                </div>
                <p className="text-[#FF9933]/90 text-lg">
                  १२३ ज्योतिष मार्ग,<br />
                  उज्जैन, भारत - ४५६०१०
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Consultation Hours
            </h3>
            <div className="space-y-4 text-[#FF9933]/90 text-lg">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-[#FFD700]">9 AM - 8 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-[#FFD700]">9 AM - 6 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#FFD700]">10 AM - 4 PM</span>
              </p>
              <div className="pt-6">
                <p className="text-sm text-[#FF9933]/70 italic">
                  *Closed on major Hindu festivals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FF9933]/20 mt-16 pt-8 text-center">
          <p className="text-[#FF9933]/70 text-lg">
            © {new Date().getFullYear()} पंडित ज्योतिषाचार्य. All rights reserved.
            <span className="mx-3">•</span>
            Powered by Vedic Wisdom
          </p>
        </div>
      </div>
    </footer>
  );
}