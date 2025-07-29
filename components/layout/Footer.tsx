'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2D0B0B] to-[#1A0404] text-[#FFD700] relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-16 left-16 text-[#FF9933] text-6xl md:text-8xl animate-pulse">✧</div>
        <div className="absolute bottom-16 right-16 text-[#FF9933] text-6xl md:text-8xl animate-pulse">✦</div>
        <div className="absolute top-1/4 right-1/3 text-[#FFD700] text-5xl md:text-7xl animate-pulse">★</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
      </div>
      
      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-full flex items-center justify-center shadow-xl">
                <Star className="w-8 h-8 text-[#FFD700]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFD700]">Pandit Jyotishacharya</h2>
                <p className="text-[#FF9933] font-medium text-lg">Master of Vedic Sciences</p>
              </div>
            </div>
            <p className="text-[#FF9933]/90 mb-8 max-w-lg text-base md:text-lg leading-relaxed">
              With over 25 years of expertise in Vedic astrology, numerology, and palmistry, 
              I offer authentic cosmic guidance to align your life with the universe’s energies.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-[#FFD700] flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
                Cosmic Insights Newsletter
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 bg-[#2D0B0B] border-2 border-[#FF9933]/40 text-[#FFD700] placeholder-[#FF9933]/60 rounded-l-lg focus:outline-none focus:border-[#FFD700] w-full transition-all duration-300"
                />
                <Button className="bg-gradient-to-br from-[#FF9933] to-[#FF5722] text-[#321414] hover:from-[#FF5722] hover:to-[#FF9933] px-6 py-3 rounded-l-none rounded-r-lg font-bold text-base">
                  Subscribe
                </Button>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="w-12 h-12 bg-[#FF9933]/10 hover:bg-[#FF9933]/30 border border-[#FF9933]/40 rounded-full flex items-center justify-center text-[#FF9933] hover:text-[#FFD700] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services", text: "Our Services" },
                { href: "/blog", text: "Cosmic Insights" },
                { href: "/about", text: "About Me" },
                { href: "/testimonials", text: "Client Experiences" },
                { href: "/privacy", text: "Privacy Policy" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-[#FF9933]/90 hover:text-[#FFD700] transition-colors flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 bg-[#FF9933] rounded-full mr-3 group-hover:bg-[#FFD700] transition-colors"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Contact Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/40 mt-1 flex-shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-[#FF9933]" />
                </div>
                <div>
                  <p className="text-[#FF9933]/90 text-lg">+91 98765 43210</p>
                  <p className="text-[#FF9933]/90 text-lg">+91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/40 mt-1 flex-shrink-0 shadow-sm">
                  <Mail className="w-6 h-6 text-[#FF9933]" />
                </div>
                <p className="text-[#FF9933]/90 text-lg">contact@jyotishacharya.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF9933]/10 rounded-full flex items-center justify-center border border-[#FF9933]/40 mt-1 flex-shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-[#FF9933]" />
                </div>
                <p className="text-[#FF9933]/90 text-lg">
                  123 Jyotish Marg,<br />
                  Ujjain, India - 456010
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Hours */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FFD700] flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-[#FF9933]" />
              Consultation Hours
            </h3>
            <div className="space-y-3 text-[#FF9933]/90 text-lg">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-[#FFD700] font-medium">9 AM - 8 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-[#FFD700] font-medium">9 AM - 6 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#FFD700] font-medium">10 AM - 4 PM</span>
              </p>
              <div className="pt-4">
                <p className="text-sm text-[#FF9933]/70 italic">
                  *Closed on major festivals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FF9933]/30 mt-12 pt-8 text-center">
          <p className="text-[#FF9933]/80 text-base">
            © {new Date().getFullYear()} Pandit Jyotishacharya. All rights reserved.
            <span className="mx-3">•</span>
            Powered by Vedic Wisdom
          </p>
        </div>
      </div>
    </footer>
  );
}