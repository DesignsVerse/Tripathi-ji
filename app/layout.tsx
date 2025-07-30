import Header from '@/components/layout/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pandit Tripathi - Vedic Astrologer | Authentic Astrological Guidance',
  description: 'Get authentic Vedic astrology guidance from Pandit Tripathi. 20+ years experience in kundli analysis, marriage compatibility, career guidance, and spiritual consultation.',
  keywords: 'vedic astrology, kundli, horoscope, marriage compatibility, career guidance, gemstones, vastu, numerology, spiritual guidance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}