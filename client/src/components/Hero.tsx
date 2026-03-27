import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/constants';

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage }: HeroProps) {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '212630003333';
    const message = encodeURIComponent(t('whatsapp.booking'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${HOTEL_INFO.email}?subject=${encodeURIComponent(t('email.booking.subject'))}&body=${encodeURIComponent(t('email.booking.body'))}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-96 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/hero-sunset-courtyard-85Ho22jhLmKhLDCQz2fhba.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container flex flex-col items-center justify-center text-center gap-4 md:gap-6 py-12 md:py-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-lg leading-tight">
          {t('hero.title')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light drop-shadow-md max-w-2xl">
          {t('hero.subtitle')}
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            onClick={handleWhatsAppClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white/95 text-black hover:bg-white font-sans font-semibold rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <MessageCircle size={18} />
            {t('hero.cta')}
          </Button>
          <Button
            onClick={handleEmailClick}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-accent/90 text-white hover:bg-accent font-sans font-semibold rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            <Mail size={18} />
            {t('hero.emailCta')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-sans">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
