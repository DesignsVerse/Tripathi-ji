'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Star, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/astrotripathiujjain", name: "Instagram" },
    { Icon: Facebook, href: "#", name: "Facebook" },
    { Icon: Twitter, href: "#", name: "Twitter" },
    { Icon: Youtube, href: "#", name: "Youtube" },
  ];

  const quickLinks = [
    { href: "/about", text: "About Abhishek Tripathi" },
    { href: "/services", text: "Astrological Services" },
    { href: "/#testimonials", text: "Client Testimonials" },
    { href: "/contact", text: "Contact Us" },
    { href: "/privacy-policy", text: "Privacy Policy" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2D0B0B] to-[#1A0404] text-[#FFD700] relative overflow-hidden">
   
     
      
      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#FF5722] rounded-full flex items-center justify-center shadow-xl">
                <Star className="w-8 h-8 text-[#FFD700]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#FFD700]">Astro Abhishek Tripathi</h2>
                <p className="text-[#FF9933] font-medium text-lg">Vedic & KP Astrologer, Ujjain</p>
              </div>
            </div>
            <p className="text-[#FF9933]/90 mb-8 max-w-lg text-base md:text-lg leading-relaxed">
              Continuing the sacred astrological legacy of his father & guru, Pandit R.K. Tripathi Ji, Abhishek Tripathi offers authentic guidance to find clarity, purpose, and balance.
            </p>
            
            {/* Social Media */}
            <h4 className="text-lg md:text-xl font-semibold mb-4 text-[#FFD700] flex items-center">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, name }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} page`}
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
              {quickLinks.map((link, index) => (
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
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#FF9933] mt-1 flex-shrink-0" />
                <p className="text-[#FF9933]/90 text-lg">+91 9827175769</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#FF9933] mt-1 flex-shrink-0" />
                <p className="text-[#FF9933]/90 text-lg">lucky.tipo@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF9933] mt-1 flex-shrink-0" />
                <p className="text-[#FF9933]/90 text-lg leading-snug">
                  21/1 Mahakal Marg, Gali No. 1, Infront of Mahakal Temple, Ujjain (M.P), 456006
                </p>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                 <Clock className="w-5 h-5 text-[#FF9933] mt-1 flex-shrink-0" />
                 <p className="text-[#FF9933]/90 text-lg leading-snug">
                   Mon - Sun: 9:00 AM - 9:00 PM
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#FF9933]/30 mt-16 pt-8 text-center">
          <p className="text-[#FF9933]/80 text-base">
            © {new Date().getFullYear()} Astro Abhishek Tripathi. All rights reserved.
            <span className="mx-3">•</span>
            Designed with Spiritual Intent
          </p>
        </div>
      </div>
    </footer>
  );
}
