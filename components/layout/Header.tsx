'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Numerology', href: '/numerology' },
  { name: 'Palmistry', href: '/palmistry' },
  { name: 'Horoscope', href: '/horoscope' },
  { name: 'Vastu', href: '/vastu' },
  { name: 'Blog', href: '/blog' }, // Added blog section
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF9933] shadow-lg sticky top-0 z-50 border-b-2 border-[#FF5722]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo with Vedic touch */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#321414] rounded-full flex items-center justify-center shadow-lg relative">
                <span className="text-[#FFD700] font-bold text-2xl">ॐ</span>
                <div className="absolute -bottom-1 -right-1 bg-[#FFD700] text-[#321414] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  <IndianRupee className="w-3 h-3" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#321414]">पंडित ज्योतिषाचार्य</h1>
                <p className="text-sm text-[#321414] font-medium">वैदिक ज्योतिष एवं अंकज्योतिष विशेषज्ञ</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#321414] hover:bg-[#FF5722] hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center"
              >
                {item.name === 'Numerology' && (
                  <span className="mr-1 text-[#FFD700]">⑧</span>
                )}
                {item.name === 'Palmistry' && (
                  <span className="mr-1 text-[#FFD700]">✋</span>
                )}
                {item.name === 'Blog' && (
                  <span className="mr-1 text-[#FFD700]">✍️</span>
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700] shadow-lg hover:shadow-[#FF5722]/50 transition-all">
              सम्पर्क करें
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#321414] hover:bg-[#FF5722] hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FF9933] border-t border-[#FF5722]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#321414] hover:bg-[#FF5722] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  {item.name === 'Numerology' && (
                    <span className="mr-2 text-[#FFD700]">⑧</span>
                  )}
                  {item.name === 'Palmistry' && (
                    <span className="mr-2 text-[#FFD700]">✋</span>
                  )}
                  {item.name === 'Blog' && (
                    <span className="mr-2 text-[#FFD700]">✍️</span>
                  )}
                  {item.name}
                </div>
              </Link>
            ))}
            <div className="px-3 pt-2 space-y-2 border-t border-[#FF5722]/50 mt-2">
              <Button className="w-full bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700]">
                सम्पर्क करें
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}