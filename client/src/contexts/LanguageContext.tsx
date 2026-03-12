import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
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

    // WhatsApp Messages
    'whatsapp.booking': 'Bonjour, j\'aimerais réserver un séjour à l\'Hôtel La Renaissance.',
    'whatsapp.room': 'Bonjour, j\'aimerais réserver une chambre à l\'Hôtel La Renaissance.',
    'whatsapp.tour': 'Bonjour TATA EXPLORE, j\'aimerais planifier une aventure touristique.',
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
    'hero.title': 'مرحبا بك في فندق رينيسانس',
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
    'footer.copyright': '© 2024 فندق رينيسانس. جميع الحقوق محفوظة.',

    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.bookNow': 'احجز الآن',

    // WhatsApp Messages
    'whatsapp.booking': 'السلام عليكم، أود حجز إقامة في فندق رينيسانس.',
    'whatsapp.room': 'السلام عليكم، أود حجز غرفة في فندق رينيسانس.',
    'whatsapp.tour': 'السلام عليكم، أود التخطيط لرحلة سياحية مع تاتا إكسبلور.',
  },
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

    // WhatsApp Messages
    'whatsapp.booking': 'Hello, I would like to book a stay at Hotel La Renaissance.',
    'whatsapp.room': 'Hello, I would like to book a room at Hotel La Renaissance.',
    'whatsapp.tour': 'Hello TATA EXPLORE, I would like to plan an adventure tour.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.rooms': 'Habitaciones y Suites',
    'nav.restaurant': 'Restaurante',
    'nav.tours': 'Agencia de Viajes',
    'nav.gallery': 'Galería',
    'nav.book': 'Reserva Tu Estancia',

    // Hero
    'hero.title': 'Bienvenido al Hotel La Renaissance',
    'hero.subtitle': 'Auténtica Hospitalidad Marroquí en el Corazón de Tata',
    'hero.cta': 'Reserva Tu Estancia por WhatsApp',

    // Rooms
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.double': 'Habitación Doble',
    'rooms.double.desc': 'Comodidad y Estilo para Dos',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Espacio Lujoso y Comodidades',
    'rooms.family': 'Habitación Familiar',
    'rooms.family.desc': 'Espacio Luminoso y Comodidades',
    'rooms.viewDetails': 'Ver Detalles',

    // Tours
    'tours.title': 'Descubre las Joyas Ocultas de Tata con Nuestra Agencia de Viajes',
    'tours.historical': 'Sitios Históricos',
    'tours.desert': 'Treks en el Desierto',
    'tours.cultural': 'Experiencias Culturales',
    'tours.planAdventure': 'Planifica Tu Aventura',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Huéspedes',

    // Location
    'location.title': 'Nuestra Ubicación',
    'location.getDirections': 'Obtener Direcciones',

    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.phone': 'Teléfono',
    'contact.address': 'Dirección',

    // Footer
    'footer.about': 'Acerca de',
    'footer.rooms': 'Habitaciones',
    'footer.restaurant': 'Restaurante',
    'footer.tours': 'Viajes',
    'footer.gallery': 'Galería',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.copyright': '© 2024 Hotel La Renaissance. Todos los derechos reservados.',

    // Common
    'common.learnMore': 'Más Información',
    'common.bookNow': 'Reservar Ahora',

    // WhatsApp Messages
    'whatsapp.booking': 'Hola, me gustaría reservar una estancia en el Hotel La Renaissance.',
    'whatsapp.room': 'Hola, me gustaría reservar una habitación en el Hotel La Renaissance.',
    'whatsapp.tour': 'Hola TATA EXPLORE, me gustaría planificar un tour de aventura.',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.rooms': 'Camere e Suite',
    'nav.restaurant': 'Ristorante',
    'nav.tours': 'Agenzia Turistica',
    'nav.gallery': 'Galleria',
    'nav.book': 'Prenota il Tuo Soggiorno',

    // Hero
    'hero.title': 'Benvenuto all\'Hotel La Renaissance',
    'hero.subtitle': 'Autentica Ospitalità Marocchina nel Cuore di Tata',
    'hero.cta': 'Prenota il Tuo Soggiorno via WhatsApp',

    // Rooms
    'rooms.title': 'Le Nostre Camere',
    'rooms.double': 'Camera Doppia',
    'rooms.double.desc': 'Comfort e Stile per Due',
    'rooms.suite': 'Suite',
    'rooms.suite.desc': 'Spazio Lussuoso e Servizi',
    'rooms.family': 'Camera Familiare',
    'rooms.family.desc': 'Spazio Luminoso e Servizi',
    'rooms.viewDetails': 'Visualizza Dettagli',

    // Tours
    'tours.title': 'Scopri i Gioielli Nascosti di Tata con la Nostra Agenzia Turistica',
    'tours.historical': 'Siti Storici',
    'tours.desert': 'Trekking nel Deserto',
    'tours.cultural': 'Esperienze Culturali',
    'tours.planAdventure': 'Pianifica la Tua Avventura',

    // Testimonials
    'testimonials.title': 'Cosa Dicono i Nostri Ospiti',

    // Location
    'location.title': 'La Nostra Posizione',
    'location.getDirections': 'Ottieni Indicazioni',

    // Contact
    'contact.title': 'Contattaci',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.phone': 'Telefono',
    'contact.address': 'Indirizzo',

    // Footer
    'footer.about': 'Chi Siamo',
    'footer.rooms': 'Camere',
    'footer.restaurant': 'Ristorante',
    'footer.tours': 'Viaggi',
    'footer.gallery': 'Galleria',
    'footer.contact': 'Contatti',
    'footer.privacy': 'Politica sulla Privacy',
    'footer.terms': 'Termini di Utilizzo',
    'footer.copyright': '© 2024 Hotel La Renaissance. Tutti i diritti riservati.',

    // Common
    'common.learnMore': 'Scopri di Più',
    'common.bookNow': 'Prenota Ora',

    // WhatsApp Messages
    'whatsapp.booking': 'Ciao, vorrei prenotare un soggiorno all\'Hotel La Renaissance.',
    'whatsapp.room': 'Ciao, vorrei prenotare una camera all\'Hotel La Renaissance.',
    'whatsapp.tour': 'Ciao TATA EXPLORE, vorrei pianificare un tour avventuroso.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // French as default language
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
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
