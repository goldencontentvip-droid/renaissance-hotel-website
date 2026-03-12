import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Rooms & Suites',
    'nav.restaurant': 'Restaurant',
    'nav.tours': 'Tours Agency',
    'nav.gallery': 'Gallery',
    'nav.book': 'Book Your Stay',

    // Hero
    'hero.title': 'Welcome to Hotel La Renaissance',
    'hero.subtitle': 'Authentic Moroccan Hospitality in The Heart of Tata',
    'hero.cta': 'Book Your Stay via WhatsApp',

    // Rooms
    'rooms.title': 'Our Rooms',
    'rooms.double': 'Double Room',
    'rooms.double.desc': 'Comfort & Style for Two',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Luxurious Space & Amenities',
    'rooms.family': 'Family Room',
    'rooms.family.desc': 'Luminous Space & Amenities',
    'rooms.viewDetails': 'View Details',

    // Tours
    'tours.title': 'Discover Tata\'s Hidden Gems with Our Tour Agency',
    'tours.historical': 'Historical Sites',
    'tours.desert': 'Desert Treks',
    'tours.cultural': 'Cultural Experiences',
    'tours.planAdventure': 'Plan Your Adventure',

    // Testimonials
    'testimonials.title': 'What Our Guests Say',

    // Location
    'location.title': 'Our Location',
    'location.getDirections': 'Get Directions',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.address': 'Address',

    // Footer
    'footer.about': 'About',
    'footer.rooms': 'Rooms',
    'footer.restaurant': 'Restaurant',
    'footer.tours': 'Tours',
    'footer.gallery': 'Gallery',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.copyright': '© 2024 Hotel La Renaissance. All rights reserved.',

    // Common
    'common.learnMore': 'Learn More',
    'common.bookNow': 'Book Now',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.rooms': 'Chambres & Suites',
    'nav.restaurant': 'Restaurant',
    'nav.tours': 'Agence de Voyages',
    'nav.gallery': 'Galerie',
    'nav.book': 'Réservez Votre Séjour',

    // Hero
    'hero.title': 'Bienvenue à l\'Hôtel La Renaissance',
    'hero.subtitle': 'L\'Hospitalité Marocaine Authentique au Cœur de Tata',
    'hero.cta': 'Réservez Votre Séjour via WhatsApp',

    // Rooms
    'rooms.title': 'Nos Chambres',
    'rooms.double': 'Chambre Double',
    'rooms.double.desc': 'Confort et Style pour Deux',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Espace Luxueux et Équipements',
    'rooms.family': 'Chambre Familiale',
    'rooms.family.desc': 'Espace Lumineux et Équipements',
    'rooms.viewDetails': 'Voir les Détails',

    // Tours
    'tours.title': 'Découvrez les Joyaux Cachés de Tata avec Notre Agence de Voyages',
    'tours.historical': 'Sites Historiques',
    'tours.desert': 'Treks au Désert',
    'tours.cultural': 'Expériences Culturelles',
    'tours.planAdventure': 'Planifiez Votre Aventure',

    // Testimonials
    'testimonials.title': 'Ce que Disent Nos Clients',

    // Location
    'location.title': 'Notre Localisation',
    'location.getDirections': 'Obtenir les Directions',

    // Contact
    'contact.title': 'Nous Contacter',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',

    // Footer
    'footer.about': 'À Propos',
    'footer.rooms': 'Chambres',
    'footer.restaurant': 'Restaurant',
    'footer.tours': 'Voyages',
    'footer.gallery': 'Galerie',
    'footer.contact': 'Contact',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.copyright': '© 2024 Hôtel La Renaissance. Tous droits réservés.',

    // Common
    'common.learnMore': 'En Savoir Plus',
    'common.bookNow': 'Réserver Maintenant',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.rooms': 'الغرف والأجنحة',
    'nav.restaurant': 'المطعم',
    'nav.tours': 'وكالة السياحة',
    'nav.gallery': 'المعرض',
    'nav.book': 'احجز إقامتك',

    // Hero
    'hero.title': 'مرحبا بك في فندق لا رينيسانس',
    'hero.subtitle': 'الضيافة المغربية الأصيلة في قلب تاتا',
    'hero.cta': 'احجز إقامتك عبر واتساب',

    // Rooms
    'rooms.title': 'غرفنا',
    'rooms.double': 'غرفة مزدوجة',
    'rooms.double.desc': 'الراحة والأناقة لشخصين',
    'rooms.suite': 'جناح',
    'rooms.suite.desc': 'مساحة فاخرة والمرافق',
    'rooms.family': 'غرفة عائلية',
    'rooms.family.desc': 'مساحة مضيئة والمرافق',
    'rooms.viewDetails': 'عرض التفاصيل',

    // Tours
    'tours.title': 'اكتشف الجواهر الخفية في تاتا مع وكالة السياحة لدينا',
    'tours.historical': 'المواقع التاريخية',
    'tours.desert': 'رحلات الصحراء',
    'tours.cultural': 'التجارب الثقافية',
    'tours.planAdventure': 'خطط لمغامرتك',

    // Testimonials
    'testimonials.title': 'ما يقوله ضيوفنا',

    // Location
    'location.title': 'موقعنا',
    'location.getDirections': 'احصل على الاتجاهات',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',

    // Footer
    'footer.about': 'حول',
    'footer.rooms': 'الغرف',
    'footer.restaurant': 'المطعم',
    'footer.tours': 'الرحلات',
    'footer.gallery': 'المعرض',
    'footer.contact': 'تواصل',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.copyright': '© 2024 فندق لا رينيسانس. جميع الحقوق محفوظة.',

    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.bookNow': 'احجز الآن',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
