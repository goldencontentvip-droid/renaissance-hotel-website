import { useLanguage } from '@/contexts/LanguageContext';
import { TOUR_CATEGORIES, TOUR_AGENCY } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Building2, Compass, Users } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  Camel: Compass,
  Users: Users,
};

export default function ToursSection() {
  const { language, t } = useLanguage();

  const getTourTitle = (tour: typeof TOUR_CATEGORIES[0]) => {
    if (language === 'fr') return tour.titleFr;
    if (language === 'ar') return tour.titleAr;
    return tour.titleEn;
  };

  const getTourDescription = (tour: typeof TOUR_CATEGORIES[0]) => {
    if (language === 'fr') return tour.descriptionFr;
    if (language === 'ar') return tour.descriptionAr;
    return tour.descriptionEn;
  };

  const handlePlanAdventure = () => {
    const phoneNumber = '212662243579';
    const message = encodeURIComponent(t('whatsapp.tour'));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section
      id="tours"
      className="section-padding bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="palm-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <text x="25" y="25" fontSize="40" textAnchor="middle" fill="currentColor">
                🌴
              </text>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#palm-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <h2 className="section-title text-foreground">{t('tours.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TOUR_CATEGORIES.map((tour) => {
            const IconComponent = iconMap[tour.icon as keyof typeof iconMap];
            return (
              <div
                key={tour.id}
                className="card-luxury p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <IconComponent size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {getTourTitle(tour)}
                </h3>
                <p className="text-foreground/80 font-sans leading-relaxed">
                  {getTourDescription(tour)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desert Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg h-96">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/desert-camels-sunset-F2T3i3GJ9qTkunfhfqx3Mi.webp"
            alt="Desert Sunset with Camels"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Agency Info & CTA */}
        <div className="bg-white/95 rounded-2xl p-8 md:p-12 shadow-sm border border-border/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                {TOUR_AGENCY.name}
              </h3>
              <p className="text-foreground/80 font-sans mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'استكشف جمال تاتا الطبيعي والثقافي مع وكالة تاتا إكسبلور. نحن نقدم تجارب فريدة لا تُنسى في قلب الصحراء المغربية.'
                  : language === 'fr'
                  ? 'Explorez la beauté naturelle et culturelle de Tata avec Tata Explore. Nous proposons des expériences uniques et inoubliables au cœur du désert marocain.'
                  : 'Explore the natural and cultural beauty of Tata with Tata Explore. We offer unique and unforgettable experiences in the heart of the Moroccan desert.'}
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground font-sans">
                    {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Email' : 'Email'}
                  </p>
                  <a
                    href={`mailto:${TOUR_AGENCY.email}`}
                    className="text-accent font-serif font-semibold hover:underline"
                  >
                    {TOUR_AGENCY.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-sans">
                    {language === 'ar' ? 'الهاتف' : language === 'fr' ? 'Téléphone' : 'Phone'}
                  </p>
                  <a
                    href={`tel:${TOUR_AGENCY.phone}`}
                    className="text-accent font-serif font-semibold hover:underline"
                  >
                    {TOUR_AGENCY.phone}
                  </a>
                </div>
              </div>

              <Button
                onClick={handlePlanAdventure}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-serif py-6"
              >
                {t('tours.planAdventure')}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <a
                href={TOUR_AGENCY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center border border-accent/20"
              >
                <p className="text-sm text-muted-foreground font-sans mb-2">Instagram</p>
                <p className="text-foreground font-serif font-semibold">@exploretata</p>
              </a>
              <a
                href={TOUR_AGENCY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-center border border-accent/20"
              >
                <p className="text-sm text-muted-foreground font-sans mb-2">Facebook</p>
                <p className="text-foreground font-serif font-semibold">TATA EXPLORE</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
