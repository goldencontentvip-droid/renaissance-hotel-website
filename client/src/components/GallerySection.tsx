import { useLanguage } from '@/contexts/LanguageContext';

export default function GallerySection() {
  const { language, t } = useLanguage();

  const galleryImages = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/gallery-kasbah-PHkTTANoj6GHCyXAMaTK5n.webp',
      alt: 'Moroccan Kasbah',
      title: language === 'ar' ? 'القصبة المغربية' : language === 'fr' ? 'Kasbah Marocain' : 'Moroccan Kasbah'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/gallery-market-9ptUyvyXwA25pJ4yaBj66j.webp',
      alt: 'Moroccan Market',
      title: language === 'ar' ? 'السوق التقليدي' : language === 'fr' ? 'Souk Traditionnel' : 'Traditional Market'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/gallery-pool-6RAftArkL3DwfiB27S3rsY.webp',
      alt: 'Hotel Pool',
      title: language === 'ar' ? 'حمام السباحة' : language === 'fr' ? 'Piscine de l\'Hôtel' : 'Hotel Pool'
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663113079627/WYdVPGNXtFVxRfZMFbQdS7/gallery-dining-KoGC5UdUEkBGafVYU5qqnr.webp',
      alt: 'Gourmet Dining',
      title: language === 'ar' ? 'الطعام الفاخر' : language === 'fr' ? 'Gastronomie' : 'Gourmet Dining'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title text-foreground">{t('gallery.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-lg font-semibold text-center px-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
