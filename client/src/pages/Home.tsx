import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoomsSection from '@/components/RoomsSection';
import ToursSection from '@/components/ToursSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

/**
 * Hotel La Renaissance - Main Landing Page
 *
 * Design Philosophy: Luxury Moroccan Hospitality
 * - Warm earthy color palette (terracotta, beige, warm brown)
 * - Elegant serif typography for headings
 * - Generous whitespace and refined spacing
 * - Smooth animations and transitions
 * - High-quality imagery and professional presentation
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Hotel Courtyard Background */}
        <Hero backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" />

        {/* Rooms Section */}
        <RoomsSection />

        {/* Tours Agency Section */}
        <ToursSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Location & Maps Section */}
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
