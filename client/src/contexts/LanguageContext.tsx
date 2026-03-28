import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  language: 'fr' | 'ar' | 'en' | 'es' | 'it';
  setLanguage: (lang: 'fr' | 'ar' | 'en' | 'es' | 'it') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header & Navigation
    'header.home': 'Accueil',
    'header.rooms': 'Chambres & Suites',
    'header.restaurant': 'Restaurant',
    'header.tours': 'Agence de Voyages',
    'header.gallery': 'Galerie',
    'header.contact': 'Contact',

    // Hero Section
    'hero.title': 'Bienvenue à l\'Hôtel La Renaissance',
    'hero.subtitle': 'L\'Hospitalité Marocaine Authentique au Cœur de Tata',
    'hero.cta': 'Réservez Votre Séjour via WhatsApp',
    'hero.emailCta': 'Réserver par Email',
    'email.booking.subject': 'Demande de Réservation - Hôtel La Renaissance',
    'email.booking.body': 'Bonjour,\n\nJ\'aimerais réserver un séjour à l\'Hôtel La Renaissance.\n\nPouvez-vous m\'envoyer les détails et les tarifs disponibles?\n\nMerci,',

    // Rooms Section
    'rooms.title': 'Nos Chambres',
    'rooms.subtitle': 'Confort et Élégance pour Votre Séjour',
    'rooms.amenities': 'Équipements',
    'rooms.viewDetails': 'Voir les Détails',

    // Tours Section
    'tours.title': 'Agence de Voyages - TATA EXPLORE',
    'tours.subtitle': 'Découvrez les Merveilles de la Région',
    'tours.cta': 'Réserver une Expérience',
    'tours.planAdventure': 'Planifier l\'Aventure',

    // Testimonials Section
    'testimonials.title': 'Ce que Disent Nos Clients',
    'testimonials.subtitle': 'Expériences Inoubliables',

    // Gallery Section
    'gallery.title': 'Galerie',
    'gallery.subtitle': 'Explorez Notre Établissement',

    // Location Section
    'location.title': 'Localisation',
    'location.getDirections': 'Obtenir les Directions',

    // Contact Section
    'contact.title': 'Nous Contacter',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le Message',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',

    // Footer
    'footer.rooms': 'Chambres & Suites',
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
    'nav.book': 'Réserver',
    'nav.home': 'Accueil',
    'nav.rooms': 'Chambres & Suites',
    'nav.restaurant': 'Restaurant',
    'nav.tours': 'Agence de Voyages',
    'nav.gallery': 'Galerie',

    // About Modal
    'modal.about.title': 'À Propos',
    'modal.about.hotelTitle': 'Hôtel & Restaurant La Renaissance (La Renaissance)',
    'modal.about.hotelSubtitle': 'Le cœur battant de l\'hospitalité de Tata',
    'modal.about.hotelDescription': 'Bienvenue à l\'Hôtel "La Renaissance", votre destination de choix pour une expérience authentique de l\'hospitalité marocaine au cœur de la région de Tata et ses environs enchanteurs. Notre établissement combine le charme traditionnel avec le confort moderne, offrant à nos hôtes une expérience inoubliable dans un cadre qui mêle l\'héritage du passé et le luxe du présent.',
    'modal.about.hotelPhone': 'Téléphone: +212 6 30 00 33 33',
    'modal.about.hotelEmail': 'Email: larenaissance1982@gmail.com',
    'modal.about.hotelLocation': 'Localisation: Tata, Maroc',
    'modal.about.tourTitle': 'Agence de Voyages - TATA EXPLORE',
    'modal.about.tourSubtitle': 'Votre porte d\'accès à la découverte des destinations touristiques cachées',
    'modal.about.tourDescription': 'Découvrez les joyaux cachés de la région de Tata et des zones touristiques adjacentes avec notre partenaire "Tata Explore". Nous proposons des expériences touristiques authentiques incluant:',
    'modal.about.tourFeature1': 'Expéditions désertiques et camping dans les environs de la région.',
    'modal.about.tourFeature2': 'Visites des sites historiques et des gravures rupestres rares.',
    'modal.about.tourFeature3': 'Excursions exploratoires des oasis et des kasbahs historiques.',
    'modal.about.tourFeature4': 'Immersion culturelle locale pour enrichir votre séjour.',
    'modal.about.tourPhone': 'Téléphone: 0662243579 | 0661607507',
    'modal.about.tourEmail': 'Email: exploretata@gmail.com',
    'modal.about.tourInstagram': 'Instagram: Suivez-nous sur ExploreTata',
    'modal.about.visitInstagram': 'Visitez notre Instagram',
    'modal.about.close': 'Fermer',

    // WhatsApp Messages
    'whatsapp.booking': 'Bonjour, j\'aimerais réserver un séjour à l\'Hôtel La Renaissance.',
    'whatsapp.room': 'Bonjour, j\'aimerais réserver une chambre à l\'Hôtel La Renaissance.',
  },

  ar: {
    // Header & Navigation
    'header.home': 'الرئيسية',
    'header.rooms': 'الغرف والأجنحة',
    'header.restaurant': 'المطعم',
    'header.tours': 'وكالة السياحة',
    'header.gallery': 'المعرض',
    'header.contact': 'تواصل معنا',

    // Hero Section
    'hero.title': 'مرحباً بك في فندق لا رينيسانس',
    'hero.subtitle': 'الضيافة المغربية الأصيلة في قلب طاطا',
    'hero.cta': 'احجز إقامتك عبر واتس أب',
    'hero.emailCta': 'احجز عبر البريد الإلكتروني',
    'email.booking.subject': 'طلب حجز - فندق رينيسانس',
    'email.booking.body': 'السلام عليكم،\n\nأود حجز إقامة في فندق رينيسانس.\n\nهل يمكنك إرسال التفاصيل والأسعار المتاحة؟\n\nشكراً،',

    // Rooms Section
    'rooms.title': 'غرفنا',
    'rooms.subtitle': 'الراحة والأناقة لإقامتك',
    'rooms.amenities': 'المرافق',
    'rooms.viewDetails': 'عرض التفاصيل',

    // Tours Section
    'tours.title': 'وكالة السياحة - تاتا إكسبلور',
    'tours.subtitle': 'اكتشف عجائب المنطقة',
    'tours.cta': 'احجز تجربة سياحية',
    'tours.planAdventure': 'خطط للمغامرة',

    // Testimonials Section
    'testimonials.title': 'آراء ضيوفنا',
    'testimonials.subtitle': 'تجارب لا تُنسى',

    // Gallery Section
    'gallery.title': 'المعرض',
    'gallery.subtitle': 'استكشف منشأتنا',

    // Location Section
    'location.title': 'الموقع',
    'location.getDirections': 'احصل على التوجيهات',

    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',

    // Footer
    'footer.rooms': 'الغرف والأجنحة',
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
    'nav.book': 'احجز',
    'nav.home': 'الرئيسية',
    'nav.rooms': 'الغرف والأجنحة',
    'nav.restaurant': 'المطعم',
    'nav.tours': 'وكالة السياحة',
    'nav.gallery': 'المعرض',

    // About Modal
    'modal.about.title': 'حول',
    'modal.about.hotelTitle': 'فندق ومطعم لا رينيسانس (النهضة)',
    'modal.about.hotelSubtitle': 'قلب طاطا النابض بالضيافة',
    'modal.about.hotelDescription': 'مرحباً بكم في فندق "لا رينيسانس"، وجهتكم المفضلة لتجربة أصيلة للضيافة المغربية في قلب إقليم طاطا ونواحيه الساحرة. يجمع فندقنا بين السحر التقليدي والراحة الحديثة، مما يوفر لضيوفنا تجربة لا تُنسى في إطار يمزج بين عراقة الماضي ورفاهية الحاضر.',
    'modal.about.hotelPhone': 'الهاتف: 33 33 00 30 6 212+',
    'modal.about.hotelEmail': 'البريد الإلكتروني: larenaissance1982@gmail.com',
    'modal.about.hotelLocation': 'الموقع: طاطا، المغرب',
    'modal.about.tourTitle': 'وكالة السياحة - تاتا إكسبلور (TATA EXPLORE)',
    'modal.about.tourSubtitle': 'بوابتكم لاكتشاف المناطق السياحية الخفية',
    'modal.about.tourDescription': 'اكتشف الجواهر الخفية في إقليم طاطا والمناطق السياحية المجاورة مع شريكنا "تاتا إكسبلور". نحن نقدم تجارب سياحية أصيلة تشمل:',
    'modal.about.tourFeature1': 'رحلات صحراوية وتخييم في نواحي الإقليم.',
    'modal.about.tourFeature2': 'زيارات للمواقع التاريخية والنقوش الصخرية النادرة.',
    'modal.about.tourFeature3': 'جولات استكشافية للواحات والقصبات العريقة.',
    'modal.about.tourFeature4': 'انغماس ثقافي محلي لإثراء إقامتكم.',
    'modal.about.tourPhone': 'الهاتف: 0662243579 | 0661607507',
    'modal.about.tourEmail': 'البريد الإلكتروني: exploretata@gmail.com',
    'modal.about.tourInstagram': 'إنستغرام: تابعونا على ExploreTata',
    'modal.about.visitInstagram': 'تابعونا على إنستغرام',
    'modal.about.close': 'إغلاق',

    // WhatsApp Messages
    'whatsapp.booking': 'السلام عليكم، أود حجز إقامة في فندق رينيسانس.',
    'whatsapp.room': 'السلام عليكم، أود حجز غرفة في فندق رينيسانس.',
  },

  en: {
    // Header & Navigation
    'header.home': 'Home',
    'header.rooms': 'Rooms & Suites',
    'header.restaurant': 'Restaurant',
    'header.tours': 'Tour Agency',
    'header.gallery': 'Gallery',
    'header.contact': 'Contact',

    // Hero Section
    'hero.title': 'Welcome to Hotel La Renaissance',
    'hero.subtitle': 'Authentic Moroccan Hospitality in the Heart of Tata',
    'hero.cta': 'Book Your Stay via WhatsApp',
    'hero.emailCta': 'Book by Email',
    'email.booking.subject': 'Booking Request - Hotel La Renaissance',
    'email.booking.body': 'Hello,\n\nI would like to book a stay at Hotel La Renaissance.\n\nCould you please send me the available details and rates?\n\nThank you,',

    // Rooms Section
    'rooms.title': 'Our Rooms',
    'rooms.subtitle': 'Comfort and Elegance for Your Stay',
    'rooms.amenities': 'Amenities',
    'rooms.viewDetails': 'View Details',

    // Tours Section
    'tours.title': 'Tour Agency - TATA EXPLORE',
    'tours.subtitle': 'Discover the Wonders of the Region',
    'tours.cta': 'Book an Experience',
    'tours.planAdventure': 'Plan Your Adventure',

    // Testimonials Section
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Unforgettable Experiences',

    // Gallery Section
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Explore Our Establishment',

    // Location Section
    'location.title': 'Location',
    'location.getDirections': 'Get Directions',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.address': 'Address',

    // Footer
    'footer.rooms': 'Rooms & Suites',
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
    'nav.book': 'Book',
    'nav.home': 'Home',
    'nav.rooms': 'Rooms & Suites',
    'nav.restaurant': 'Restaurant',
    'nav.tours': 'Tour Agency',
    'nav.gallery': 'Gallery',

    // About Modal
    'modal.about.title': 'About',
    'modal.about.hotelTitle': 'Hotel & Restaurant La Renaissance (Renaissance)',
    'modal.about.hotelSubtitle': 'The beating heart of Tata\'s hospitality',
    'modal.about.hotelDescription': 'Welcome to Hotel "La Renaissance", your destination of choice for an authentic experience of Moroccan hospitality in the heart of the Tata region and its enchanting surroundings. Our establishment combines traditional charm with modern comfort, offering our guests an unforgettable experience in a setting that blends the heritage of the past with the luxury of the present.',
    'modal.about.hotelPhone': 'Phone: +212 6 30 00 33 33',
    'modal.about.hotelEmail': 'Email: larenaissance1982@gmail.com',
    'modal.about.hotelLocation': 'Location: Tata, Morocco',
    'modal.about.tourTitle': 'Tour Agency - TATA EXPLORE',
    'modal.about.tourSubtitle': 'Your gateway to discovering hidden tourist destinations',
    'modal.about.tourDescription': 'Discover the hidden gems of the Tata region and adjacent tourist areas with our partner "Tata Explore". We offer authentic tourism experiences including:',
    'modal.about.tourFeature1': 'Desert expeditions and camping in the region\'s surroundings.',
    'modal.about.tourFeature2': 'Visits to historical sites and rare rock engravings.',
    'modal.about.tourFeature3': 'Exploratory excursions of oases and historic kasbahs.',
    'modal.about.tourFeature4': 'Local cultural immersion to enrich your stay.',
    'modal.about.tourPhone': 'Phone: 0662243579 | 0661607507',
    'modal.about.tourEmail': 'Email: exploretata@gmail.com',
    'modal.about.tourInstagram': 'Instagram: Follow us on ExploreTata',
    'modal.about.visitInstagram': 'Follow us on Instagram',
    'modal.about.close': 'Close',

    // WhatsApp Messages
    'whatsapp.booking': 'Hello, I would like to book a stay at Hotel La Renaissance.',
    'whatsapp.room': 'Hello, I would like to book a room at Hotel La Renaissance.',
  },

  es: {
    // Header & Navigation
    'header.home': 'Inicio',
    'header.rooms': 'Habitaciones y Suites',
    'header.restaurant': 'Restaurante',
    'header.tours': 'Agencia de Viajes',
    'header.gallery': 'Galería',
    'header.contact': 'Contacto',

    // Hero Section
    'hero.title': 'Bienvenido al Hotel La Renaissance',
    'hero.subtitle': 'Hospitalidad Marroquí Auténtica en el Corazón de Tata',
    'hero.cta': 'Reserva Tu Estancia por WhatsApp',
    'hero.emailCta': 'Reservar por Email',
    'email.booking.subject': 'Solicitud de Reserva - Hotel La Renaissance',
    'email.booking.body': 'Hola,\n\nMe gustaría reservar una estancia en el Hotel La Renaissance.\n\n¿Podrías enviarme los detalles y las tarifas disponibles?\n\nGracias,',

    // Rooms Section
    'rooms.title': 'Nuestras Habitaciones',
    'rooms.subtitle': 'Comodidad y Elegancia para tu Estadía',
    'rooms.amenities': 'Comodidades',
    'rooms.viewDetails': 'Ver Detalles',
    // Tours Section
    'tours.title': 'Agencia de Viajes - TATA EXPLORE',
    'tours.subtitle': 'Descubre las Maravillas de la Región',
    'tours.cta': 'Reserva una Experiencia',
    'tours.planAdventure': 'Planifica tu Aventura',

    // Testimonials Section
    'testimonials.title': 'Lo Que Dicen Nuestros Huéspedes',
    'testimonials.subtitle': 'Experiencias Inolvidables',

    // Gallery Section
    'gallery.title': 'Galería',
    'gallery.subtitle': 'Explora Nuestro Establecimiento',

    // Location Section
    'location.title': 'Ubicación',
    'location.getDirections': 'Obtener Direcciones',

    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.phone': 'Teléfono',
    'contact.address': 'Dirección',

    // Footer
    'footer.rooms': 'Habitaciones y Suites',
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
    'nav.book': 'Reservar',
    'nav.home': 'Inicio',
    'nav.rooms': 'Habitaciones y Suites',
    'nav.restaurant': 'Restaurante',
    'nav.tours': 'Agencia de Viajes',
    'nav.gallery': 'Galería',

    // About Modal
    'modal.about.title': 'Acerca de',
    'modal.about.hotelTitle': 'Hotel & Restaurante La Renaissance (La Renaissance)',
    'modal.about.hotelSubtitle': 'El corazón palpitante de la hospitalidad de Tata',
    'modal.about.hotelDescription': 'Bienvenido al Hotel "La Renaissance", tu destino de elección para una experiencia auténtica de la hospitalidad marroquí en el corazón de la región de Tata y sus alrededores encantadores. Nuestro establecimiento combina el encanto tradicional con la comodidad moderna, ofreciendo a nuestros huéspedes una experiencia inolvidable en un entorno que mezcla la herencia del pasado con el lujo del presente.',
    'modal.about.hotelPhone': 'Teléfono: +212 6 30 00 33 33',
    'modal.about.hotelEmail': 'Email: larenaissance1982@gmail.com',
    'modal.about.hotelLocation': 'Ubicación: Tata, Marruecos',
    'modal.about.tourTitle': 'Agencia de Viajes - TATA EXPLORE',
    'modal.about.tourSubtitle': 'Tu puerta de acceso al descubrimiento de destinos turísticos ocultos',
    'modal.about.tourDescription': 'Descubre las joyas ocultas de la región de Tata y áreas turísticas adyacentes con nuestro socio "Tata Explore". Ofrecemos experiencias turísticas auténticas que incluyen:',
    'modal.about.tourFeature1': 'Expediciones desérticas y acampada en los alrededores de la región.',
    'modal.about.tourFeature2': 'Visitas a sitios históricos y grabados rupestres raros.',
    'modal.about.tourFeature3': 'Excursiones exploratorias de oasis y kasbahs históricas.',
    'modal.about.tourFeature4': 'Inmersión cultural local para enriquecer tu estancia.',
    'modal.about.tourPhone': 'Teléfono: 0662243579 | 0661607507',
    'modal.about.tourEmail': 'Email: exploretata@gmail.com',
    'modal.about.tourInstagram': 'Instagram: Síguenos en ExploreTata',
    'modal.about.visitInstagram': 'Síguenos en Instagram',
    'modal.about.close': 'Cerrar',

    // WhatsApp Messages
    'whatsapp.booking': 'Hola, me gustaría reservar una estancia en el Hotel La Renaissance.',
    'whatsapp.room': 'Hola, me gustaría reservar una habitación en el Hotel La Renaissance.',
  },

  it: {
    // Header & Navigation
    'header.home': 'Home',
    'header.rooms': 'Camere e Suite',
    'header.restaurant': 'Ristorante',
    'header.tours': 'Agenzia Turistica',
    'header.gallery': 'Galleria',
    'header.contact': 'Contatti',

    // Hero Section
    'hero.title': 'Benvenuto all\'Hotel La Renaissance',
    'hero.subtitle': 'Ospitalità Marocchina Autentica nel Cuore di Tata',
    'hero.cta': 'Prenota il Tuo Soggiorno via WhatsApp',
    'hero.emailCta': 'Prenota per Email',
    'email.booking.subject': 'Richiesta di Prenotazione - Hotel La Renaissance',
    'email.booking.body': 'Ciao,\n\nMi piacerebbe prenotare un soggiorno all\'Hotel La Renaissance.\n\nPotresti inviarmi i dettagli e le tariffe disponibili?\n\nGrazie,',

    // Rooms Section
    'rooms.title': 'Le Nostre Camere',
    'rooms.subtitle': 'Comfort ed Eleganza per il Tuo Soggiorno',
    'rooms.amenities': 'Servizi',
    'rooms.viewDetails': 'Visualizza Dettagli',

    // Tours Section
    'tours.title': 'Agenzia Turistica - TATA EXPLORE',
    'tours.subtitle': 'Scopri le Meraviglie della Regione',
    'tours.cta': 'Prenota un\'Esperienza',
    'tours.planAdventure': 'Pianifica la Tua Avventura',

    // Testimonials Section
    'testimonials.title': 'Cosa Dicono i Nostri Ospiti',
    'testimonials.subtitle': 'Esperienze Indimenticabili',

    // Gallery Section
    'gallery.title': 'Galleria',
    'gallery.subtitle': 'Esplora la Nostra Struttura',

    // Location Section
    'location.title': 'Posizione',
    'location.getDirections': 'Ottieni Indicazioni',

    // Contact Section
    'contact.title': 'Contattaci',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia Messaggio',
    'contact.phone': 'Telefono',
    'contact.address': 'Indirizzo',

    // Footer
    'footer.rooms': 'Camere e Suite',
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
    'nav.book': 'Prenota',
    'nav.home': 'Home',
    'nav.rooms': 'Camere e Suite',
    'nav.restaurant': 'Ristorante',
    'nav.tours': 'Agenzia Turistica',
    'nav.gallery': 'Galleria',

    // About Modal
    'modal.about.title': 'Chi Siamo',
    'modal.about.hotelTitle': 'Hotel & Ristorante La Renaissance (La Renaissance)',
    'modal.about.hotelSubtitle': 'Il cuore pulsante dell\'ospitalità di Tata',
    'modal.about.hotelDescription': 'Benvenuto all\'Hotel "La Renaissance", la tua destinazione ideale per un\'esperienza autentica dell\'ospitalità marocchina nel cuore della regione di Tata e dei suoi affascinanti dintorni. Il nostro stabilimento combina il fascino tradizionale con il comfort moderno, offrendo ai nostri ospiti un\'esperienza indimenticabile in un ambiente che fonde l\'eredità del passato con il lusso del presente.',
    'modal.about.hotelPhone': 'Telefono: +212 6 30 00 33 33',
    'modal.about.hotelEmail': 'Email: larenaissance1982@gmail.com',
    'modal.about.hotelLocation': 'Posizione: Tata, Marocco',
    'modal.about.tourTitle': 'Agenzia Turistica - TATA EXPLORE',
    'modal.about.tourSubtitle': 'La tua porta d\'accesso alla scoperta di destinazioni turistiche nascoste',
    'modal.about.tourDescription': 'Scopri i gioielli nascosti della regione di Tata e delle aree turistiche adiacenti con il nostro partner "Tata Explore". Offriamo esperienze turistiche autentiche che includono:',
    'modal.about.tourFeature1': 'Spedizioni desertiche e campeggio nei dintorni della regione.',
    'modal.about.tourFeature2': 'Visite a siti storici e incisioni rupestri rare.',
    'modal.about.tourFeature3': 'Escursioni esplorative di oasi e kasbahs storiche.',
    'modal.about.tourFeature4': 'Immersione culturale locale per arricchire il tuo soggiorno.',
    'modal.about.tourPhone': 'Telefono: 0662243579 | 0661607507',
    'modal.about.tourEmail': 'Email: exploretata@gmail.com',
    'modal.about.tourInstagram': 'Instagram: Seguici su ExploreTata',
    'modal.about.visitInstagram': 'Seguici su Instagram',
    'modal.about.close': 'Chiudi',

    // WhatsApp Messages
    'whatsapp.booking': 'Ciao, mi piacerebbe prenotare un soggiorno all\'Hotel La Renaissance.',
    'whatsapp.room': 'Ciao, mi piacerebbe prenotare una camera all\'Hotel La Renaissance.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<'fr' | 'ar' | 'en' | 'es' | 'it'>('fr');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
