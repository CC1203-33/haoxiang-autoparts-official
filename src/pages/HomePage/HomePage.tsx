import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import FeaturedProductSection from './sections/FeaturedProductSection';
import FactorySection from './sections/FactorySection';
import CertificationsSection from './sections/CertificationsSection';
import AdvantagesSection from './sections/AdvantagesSection';
import ContactSection from './sections/ContactSection';
import { Toaster } from 'sonner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturedProductSection />
        <FactorySection />
        <CertificationsSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}
