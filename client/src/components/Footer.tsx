import { useLanguage } from '@/contexts/LanguageContext';
import { HOTEL_INFO, SOCIAL_MEDIA } from '@/lib/constants';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const footerLinks = [
    { key: 'footer.about', href: '#home' },
    { key: 'footer.rooms', href: '#rooms' },
    { key: 'footer.restaurant', href: '#restaurant' },
    { key: 'footer.tours', href: '#tours' },
    { key: 'footer.gallery', href: '#gallery' },
    { key: 'footer.contact', href: '#location' },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/ai_image_1773381367936_0756e328.png"
                alt="La Renaissance Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-serif font-bold text-background">La Renaissance</h3>
                <p className="text-xs text-background/80">Hotel & Restaurant</p>
              </div>
            </div>
            <p className="text-sm text-background/70 font-sans">
              {language === 'ar'
                ? 'ضيافة مغربية أصيلة في قلب تاتا'
                : language === 'fr'
                ? 'Hospitalité marocaine authentique au cœur de Tata'
                : 'Authentic Moroccan hospitality in the heart of Tata'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              {language === 'ar'
                ? 'روابط سريعة'
                : language === 'fr'
                ? 'Liens Rapides'
                : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              {language === 'ar'
                ? 'المزيد'
                : language === 'fr'
                ? 'Plus'
                : 'More'}
            </h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors text-sm font-sans"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif font-bold text-background mb-4">
              {language === 'ar'
                ? 'تواصل معنا'
                : language === 'fr'
                ? 'Nous Contacter'
                : 'Contact Us'}
            </h4>
            <div className="space-y-3 mb-4">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors text-sm font-sans"
              >
                <Phone size={16} />
                {HOTEL_INFO.phone}
              </a>
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors text-sm font-sans"
              >
                <Mail size={16} />
                {HOTEL_INFO.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70 font-sans text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-background/70 hover:text-accent transition-colors font-sans"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="#"
                className="text-sm text-background/70 hover:text-accent transition-colors font-sans"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
