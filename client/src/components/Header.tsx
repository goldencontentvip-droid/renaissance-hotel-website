import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '212630003333';
    const message = encodeURIComponent('Hello, I would like to book a stay at Hotel La Renaissance.');
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
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground font-serif font-bold text-lg">LR</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-serif font-bold text-foreground">La Renaissance</h1>
            <p className="text-xs text-muted-foreground">Hotel & Restaurant</p>
          </div>
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
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 border-l border-border pl-4">
            {(['en', 'fr', 'ar'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                  language === lang
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-serif"
          >
            {t('nav.book')}
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
              {(['en', 'fr', 'ar'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold px-3 py-2 rounded transition-colors flex-1 ${
                    language === lang
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-serif mt-2"
            >
              {t('nav.book')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
