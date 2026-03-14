import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '212630003333';
    const message = encodeURIComponent(t('whatsapp.booking'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.rooms', href: '#rooms' },
    { key: 'nav.restaurant', href: '#restaurant' },
    { key: 'nav.tours', href: '#tours' },
    { key: 'nav.gallery', href: '#gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-1 px-1 md:px-4 md:py-2">
        {/* Logo */}
        <div className="flex items-center gap-0 flex-shrink-0">
          {/* Mobile Logo - Compact */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/IMG_20260314_081608_a245c813.png"
            alt="La Renaissance Logo"
            className="h-8 md:hidden w-auto object-contain"
          />
          {/* Desktop Logo - Full */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/AI_Generated_Logo_2026-03-14_47cec9a6-ffdb-4d1d-9f72-981fb7e939ea_4486e312.png"
            alt="La Renaissance Logo"
            className="hidden md:block h-18 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors font-sans text-sm"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-1 md:gap-4">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-1 border-l border-border pl-4">
            {(['fr', 'ar', 'en', 'es', 'it'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs font-semibold px-2 py-1 rounded-md transition-all duration-200 ${
                  language === lang
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'text-foreground hover:bg-secondary/80'
                }`}
              >
                {lang === 'fr' ? '🇫🇷' : lang === 'ar' ? '🇲🇦' : lang === 'en' ? '🇬🇧' : lang === 'es' ? '🇪🇸' : '🇮🇹'}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex px-4 md:px-8 py-2.5 bg-white text-black hover:bg-white/90 font-serif font-semibold rounded-full text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-200 items-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="hidden md:inline">{t('nav.book')}</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-accent transition-colors font-sans text-sm py-2"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t border-border">
              {(['fr', 'ar', 'en', 'es', 'it'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold px-3 py-2 rounded-md transition-colors flex-1 ${
                    language === lang
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {lang === 'fr' ? '🇫🇷' : lang === 'ar' ? '🇲🇦' : lang === 'en' ? '🇬🇧' : lang === 'es' ? '🇪🇸' : '🇮🇹'}
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white hover:bg-white/90 text-black font-serif mt-2 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              {t('nav.book')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
