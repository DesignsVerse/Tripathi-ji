'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, IndianRupee, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#FF9933] shadow-lg sticky top-0 z-50 border-b-2 border-[#FF5722] transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center py-3">

          {/* 1. Logo (Left Aligned) */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#321414] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#FFD700]/60">
                  <span className="text-[#FFD700] font-extrabold text-2xl sm:text-3xl">ॐ</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#FFD700] text-[#321414] rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                  <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#321414] leading-tight drop-shadow-sm whitespace-nowrap">Astro Abhishek Tripathi</h1>
                <p className="block text-xs text-[#321414] font-medium">Vedic Astrology & Numerology Expert</p>
              </div>
            </Link>
          </div>

          {/* 2. Desktop Navigation (Center Aligned) */}
          <nav className="hidden md:flex justify-self-center items-center gap-1 lg:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-150
                  ${pathname === item.href
                    ? "bg-[#FFD700]/30 text-[#321414] underline underline-offset-4"
                    : "text-[#321414] hover:bg-[#FF5722] hover:text-white"}
                `}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* 3. CTA & Mobile Menu Button (Right Aligned) */}
          <div className="justify-self-end flex items-center">
            {/* Desktop Contact CTA */}
            <div className="hidden md:block">
  <a href="tel:+919827175769" aria-label="Call Now">
    <Button
      type="button"
      className="bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700] shadow-lg px-5 py-2 text-sm font-bold tracking-wide"
    >
      <Phone className="w-4 h-4 mr-2" />
      Call Now +91 9827175769
    </Button>
  </a>
</div>


            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-[#321414] hover:bg-[#FF5722] hover:text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FF9933] border-t border-[#FF5722]">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 text-[#321414] px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors
                  ${pathname === item.href
                    ? "bg-[#FFD700]/40"
                    : "hover:bg-[#FF5722] hover:text-white"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-[#FF5722]/50 pt-3 mt-3">
              <Button
                className="w-full bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700] text-base font-bold py-3"
                aria-label="Contact Us"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
