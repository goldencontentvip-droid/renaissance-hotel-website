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
          {/* Google Maps */}
          <div className="w-full h-96 lg:h-full rounded-2xl shadow-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.823!2d-5.9833!3d29.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f3c8d8d8d8d8d9%3A0x1234567890abcdef!2sHotel%20La%20Renaissance!5e0!3m2!1sen!2sma!4v1710246000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel La Renaissance Location"
            />
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
