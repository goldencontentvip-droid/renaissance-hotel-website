import { useLanguage } from '@/contexts/LanguageContext';
import { HOTEL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function LocationSection() {
  const { t, language } = useLanguage();

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(HOTEL_INFO.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="location" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">{t('location.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Placeholder */}
          <div className="w-full h-96 lg:h-full rounded-2xl shadow-lg overflow-hidden border border-border bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin size={48} className="mx-auto mb-3 text-accent" />
              <p className="font-serif font-semibold text-lg">Tata, Morocco</p>
              <p className="text-sm font-sans mt-2">Interactive Map</p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Address */}
            <div className="card-luxury p-6">
              <div className="flex gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {language === 'ar'
                      ? 'العنوان'
                      : language === 'fr'
                      ? 'Adresse'
                      : 'Address'}
                  </h3>
                  <p className="text-foreground/80 font-sans">{HOTEL_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card-luxury p-6">
              <div className="flex gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {language === 'ar'
                      ? 'الهاتف'
                      : language === 'fr'
                      ? 'Téléphone'
                      : 'Phone'}
                  </h3>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="text-accent font-serif font-semibold hover:underline"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-luxury p-6">
              <div className="flex gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {language === 'ar'
                      ? 'البريد الإلكتروني'
                      : language === 'fr'
                      ? 'Email'
                      : 'Email'}
                  </h3>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-accent font-serif font-semibold hover:underline"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleGetDirections}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-serif py-6 w-full"
            >
              {t('location.getDirections')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
