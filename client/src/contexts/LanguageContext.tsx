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

    // Email Booking
    'hero.emailCta': 'Réserver par Email',
    'email.booking.subject': 'Demande de Réservation - Hôtel La Renaissance',
    'email.booking.body': 'Bonjour,\n\nJ\'aimerais réserver un séjour à l\'Hôtel La Renaissance.\n\nPouvez-vous m\'envoyer les détails et les tarifs disponibles?\n\nMerci,',

    // About Modal
    'modal.about.title': 'À Propos',
    'modal.about.hotelTitle': 'Hôtel La Renaissance',
    'modal.about.hotelDescription': 'Bienvenue à l\'Hôtel La Renaissance, votre destination de choix pour une expérience authentique de l\'hospitalité marocaine au cœur de Tata. Notre établissement combine le charme traditionnel avec le confort moderne, offrant à nos hôtes une expérience inoubliable dans un cadre enchanteur.',
    'modal.about.tourTitle': 'Agence de Voyages - TATA EXPLORE',
    'modal.about.tourDescription': 'Découvrez les joyaux cachés de Tata avec notre partenaire TATA EXPLORE. Nous proposons des expériences touristiques authentiques, des treks dans le désert, des visites de sites historiques et des immersions culturelles pour enrichir votre séjour.',
    'modal.about.visitInstagram': 'Visitez notre Instagram',
    'modal.about.close': 'Fermer',

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

    // Email Booking
    'hero.emailCta': 'احجز عبر البريد الإلكتروني',
    'email.booking.subject': 'طلب حجز - فندق رينيسانس',
    'email.booking.body': 'السلام عليكم،\n\nأود حجز إقامة في فندق رينيسانس.\n\nهل يمكنك إرسال التفاصيل والأسعار المتاحة؟\n\nشكراً،',

    // About Modal
    'modal.about.title': 'حول',
    'modal.about.hotelTitle': 'فندق رينيسانس',
    'modal.about.hotelDescription': 'مرحباً بك في فندق رينيسانس، وجهتك المفضلة لتجربة أصيلة للضيافة المغربية في قلب تاتا. يجمع فندقنا بين السحر التقليدي والراحة الحديثة، مما يوفر لضيوفنا تجربة لا تُنسى في إطار ساحر.',
    'modal.about.tourTitle': 'وكالة السياحة - تاتا إكسبلور',
    'modal.about.tourDescription': 'اكتشف الجواهر الخفية في تاتا مع شريكنا تاتا إكسبلور. نقدم تجارب سياحية أصيلة ورحلات صحراوية وزيارات مواقع تاريخية وانغماس ثقافي لإثراء إقامتك.',
    'modal.about.visitInstagram': 'زيارة حسابنا على إنستغرام',
    'modal.about.close': 'إغلاق',

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

    // Email Booking
    'hero.emailCta': 'Book by Email',
    'email.booking.subject': 'Booking Request - Hotel La Renaissance',
    'email.booking.body': 'Hello,\n\nI would like to book a stay at Hotel La Renaissance.\n\nCould you please send me the available details and rates?\n\nThank you,',

    // About Modal
    'modal.about.title': 'About',
    'modal.about.hotelTitle': 'Hotel La Renaissance',
    'modal.about.hotelDescription': 'Welcome to Hotel La Renaissance, your destination of choice for an authentic experience of Moroccan hospitality in the heart of Tata. Our establishment combines traditional charm with modern comfort, offering our guests an unforgettable experience in an enchanting setting.',
    'modal.about.tourTitle': 'Tour Agency - TATA EXPLORE',
    'modal.about.tourDescription': 'Discover the hidden gems of Tata with our partner TATA EXPLORE. We offer authentic tourism experiences, desert treks, historical site visits and cultural immersion to enrich your stay.',
    'modal.about.visitInstagram': 'Visit our Instagram',
    'modal.about.close': 'Close',

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

    // Email Booking
    'hero.emailCta': 'Reservar por Email',
    'email.booking.subject': 'Solicitud de Reserva - Hotel La Renaissance',
    'email.booking.body': 'Hola,\n\nMe gustaría reservar una estancia en el Hotel La Renaissance.\n\n¿Podrías enviarme los detalles y las tarifas disponibles?\n\nGracias,',

    // About Modal
    'modal.about.title': 'Acerca de',
    'modal.about.hotelTitle': 'Hotel La Renaissance',
    'modal.about.hotelDescription': 'Bienvenido al Hotel La Renaissance, tu destino de elección para una experiencia auténtica de la hospitalidad marroquí en el corazón de Tata. Nuestro establecimiento combina el encanto tradicional con la comodidad moderna, ofreciendo a nuestros huéspedes una experiencia inolvidable en un entorno encantador.',
    'modal.about.tourTitle': 'Agencia de Viajes - TATA EXPLORE',
    'modal.about.tourDescription': 'Descubre las joyas ocultas de Tata con nuestro socio TATA EXPLORE. Ofrecemos experiencias turísticas auténticas, treks en el desierto, visitas a sitios históricos e inmersión cultural para enriquecer tu estancia.',
    'modal.about.visitInstagram': 'Visita nuestro Instagram',
    'modal.about.close': 'Cerrar',

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

    // Email Booking
    'hero.emailCta': 'Prenota per Email',
    'email.booking.subject': 'Richiesta di Prenotazione - Hotel La Renaissance',
    'email.booking.body': 'Ciao,\n\nVorrei prenotare un soggiorno all\'Hotel La Renaissance.\n\nPotresti inviarmi i dettagli e le tariffe disponibili?\n\nGrazie,',

    // About Modal
    'modal.about.title': 'Chi Siamo',
    'modal.about.hotelTitle': 'Hotel La Renaissance',
    'modal.about.hotelDescription': 'Benvenuto all\'Hotel La Renaissance, la tua destinazione ideale per un\'esperienza autentica dell\'ospitalità marocchina nel cuore di Tata. Il nostro stabilimento combina il fascino tradizionale con il comfort moderno, offrendo ai nostri ospiti un\'esperienza indimenticabile in un ambiente incantevole.',
    'modal.about.tourTitle': 'Agenzia Turistica - TATA EXPLORE',
    'modal.about.tourDescription': 'Scopri i gioielli nascosti di Tata con il nostro partner TATA EXPLORE. Offriamo esperienze turistiche autentiche, trekking nel deserto, visite a siti storici e immersione culturale per arricchire il tuo soggiorno.',
    'modal.about.visitInstagram': 'Visita il nostro Instagram',
    'modal.about.close': 'Chiudi',

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
