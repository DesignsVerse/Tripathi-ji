"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For highlight active menu
import { Menu, X, Mail, IndianRupee, Sparkles, BookOpen, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

// If you want an "active menu" highlight, use Next.js's usePathname hook.
const navigation = [
  { name: "Home", href: "/", },
  { name: "About", href: "/about",  },
  { name: "Services", href: "/services",  },
  { name: "Panchang", href: "/panchang",  },
  { name: "Horoscope", href: "/horoscope"},
  { name: "Blog", href: "/blog", },

  { name: "Support", href: "/support"},
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Optionally trap scroll when menu is open (optional, not shown here for brevity)

  return (
    <header className="bg-[#FF9933] shadow-lg sticky top-0 z-50 border-b-2 border-[#FF5722] transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo, much bolder */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-[#321414] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#FFD700]/60 relative">
              <span className="text-[#FFD700] font-extrabold text-3xl">ॐ</span>
              <div className="absolute -bottom-1 -right-1 bg-[#FFD700] text-[#321414] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                <IndianRupee className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#321414] leading-tight drop-shadow-sm">Astro Abhishek Tripathi</h1>
              <p className="hidden sm:block text-xs text-[#321414] font-medium">Vedic Astrology & Numerology Expert</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 flex items-center space-x-2
                  ${pathname === item.href
                    ? "underline underline-offset-8 text-[#321414] bg-[#FFD700]/20"
                    : "text-[#321414] hover:bg-[#FF5722] hover:text-white"}
                `}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Contact CTA - visible on all, more contrast on desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              type="button"
              className="bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700] shadow-lg px-6 py-2 text-base font-bold tracking-wide"
              aria-label="Contact Us"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-[#321414] hover:bg-[#FF5722] hover:text-white rounded-full"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu: with Vedic color, touch friendly, closes on nav click */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FF9933] border-t border-[#FF5722] transition-all">
          <div className="px-3 pt-2 pb-4 space-y-0.5 sm:px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-2 text-[#321414]  px-4 py-3 rounded-md text-lg font-semibold tracking-wide transition-colors
                  ${pathname === item.href
                    ? "bg-[#FFD700]/40 underline underline-offset-4"
                    : "hover:bg-[#FF5722] hover:text-white"}
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="mt-4 w-full bg-[#321414] hover:bg-[#4A2A2A] text-[#FFD700] text-base font-bold py-3"
              aria-label="Contact Us"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
