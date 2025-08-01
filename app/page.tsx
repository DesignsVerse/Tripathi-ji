import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import BlogSection from '@/components/home/BlogSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import SupportBox from '@/components/home/SupportBox';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutPage from './about/page';
import AboutPanditji from '@/components/home/panditjiabout';

export default function Home() {
  return (
    <div className="min-h-screen">
     
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutPanditji />
        <AchievementsSection />
        <BlogSection />
        <CTASection />
        <TestimonialsSection />
        
        <FAQSection />
      </main>
     
    </div>
  );
}