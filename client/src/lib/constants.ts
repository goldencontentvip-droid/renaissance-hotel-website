// Hotel Information
export const HOTEL_INFO = {
  name: 'Hotel La Renaissance',
  tagline: 'Authentic Moroccan Hospitality in The Heart of Tata',
  location: 'Tata, Morocco',
  phone: '+212 6 30 00 33 33',
  email: 'info@hotellarenaissance.com',
  whatsapp: '+212630003333', // WhatsApp format without spaces
  address: 'Tata, Morocco',
  coordinates: {
    lat: 29.9,
    lng: -5.9,
  },
};

// Tour Agency Information
export const TOUR_AGENCY = {
  name: 'TATA EXPLORE',
  phone: '0662243579',
  phone2: '0661607507',
  email: 'exploretata@gmail.com',
  instagram: 'https://www.instagram.com/exploretata/',
  facebook: 'https://www.facebook.com/profile.php?id=61583717133549&sk=about',
};

// Hotel Social Media
export const SOCIAL_MEDIA = {
  instagram: 'https://www.instagram.com/hotel_la_renaissance',
  facebook: 'https://www.facebook.com/hotellarenaissance',
};

// Room Types
export const ROOMS = [
  {
    id: 'double',
    titleEn: 'Double Room',
    titleFr: 'Chambre Double',
    titleAr: 'غرفة مزدوجة',
    descriptionEn: 'Comfort & Style for Two',
    descriptionFr: 'Confort et Style pour Deux',
    descriptionAr: 'الراحة والأناقة لشخصين',
    amenities: [
      'Air Conditioning',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Private Bathroom',
      'City View',
      'Work Desk',
    ],
  },
  {
    id: 'suite',
    titleEn: 'Suite',
    titleFr: 'Suite',
    titleAr: 'جناح',
    descriptionEn: 'Luxurious Space & Amenities',
    descriptionFr: 'Espace Luxueux et Équipements',
    descriptionAr: 'مساحة فاخرة والمرافق',
    amenities: [
      'Separate Living Area',
      'Air Conditioning',
      'Free Wi-Fi',
      'Premium Toiletries',
      'Panoramic Views',
      'Mini Bar',
      'Luxury Bedding',
    ],
  },
  {
    id: 'family',
    titleEn: 'Family Room',
    titleFr: 'Chambre Familiale',
    titleAr: 'غرفة عائلية',
    descriptionEn: 'Luminous Space & Amenities',
    descriptionFr: 'Espace Lumineux et Équipements',
    descriptionAr: 'مساحة مضيئة والمرافق',
    amenities: [
      'Multiple Bedrooms',
      'Living Area',
      'Air Conditioning',
      'Free Wi-Fi',
      'Kitchen Facilities',
      'Family Bathroom',
      'Garden View',
    ],
  },
];

// Tour Categories
export const TOUR_CATEGORIES = [
  {
    id: 'historical',
    titleEn: 'Historical Sites',
    titleFr: 'Sites Historiques',
    titleAr: 'المواقع التاريخية',
    descriptionEn:
      'Discover a rich diversity of rock engravings and paintings dating back thousands of years. Explore ancient Berber settlements and traditional architecture.',
    descriptionFr:
      'Découvrez une riche diversité de gravures et peintures rupestres datant de plusieurs milliers d\'années. Explorez les anciens établissements berbères et l\'architecture traditionnelle.',
    descriptionAr:
      'اكتشف تنوعًا غنيًا من النقوش والرسومات الصخرية التي يعود تاريخها إلى آلاف السنين. استكشف المستوطنات الأمازيغية القديمة والعمارة التقليدية.',
    icon: 'Building2',
  },
  {
    id: 'desert',
    titleEn: 'Desert Treks',
    titleFr: 'Treks au Désert',
    titleAr: 'رحلات الصحراء',
    descriptionEn:
      'Experience the magic of the Sahara with camel rides at sunset and sunrise. Explore nomadic life and discover the vast desert landscapes.',
    descriptionFr:
      'Vivez la magie du Sahara avec des promenades à dos de chameau au coucher et au lever du soleil. Explorez la vie nomade et découvrez les vastes paysages désertiques.',
    descriptionAr:
      'اختبر سحر الصحراء برحلات الجمال عند الغروب والشروق. استكشف الحياة البدوية واكتشف المناظر الطبيعية الصحراوية الشاسعة.',
    icon: 'Camel',
  },
  {
    id: 'cultural',
    titleEn: 'Cultural Experiences',
    titleFr: 'Expériences Culturelles',
    titleAr: 'التجارب الثقافية',
    descriptionEn:
      'Discover lush palm groves, traditional Berber villages, and earthen kasbahs. Learn about local artisanal traditions and immerse yourself in authentic Moroccan culture.',
    descriptionFr:
      'Découvrez les palmeraies luxuriantes, les villages berbères traditionnels et les kasbah en terre. Apprenez les traditions artisanales locales et immergez-vous dans la culture marocaine authentique.',
    descriptionAr:
      'اكتشف بساتين النخيل الخضراء والقرى الأمازيغية التقليدية والقصبات الطينية. تعرف على التقاليد الحرفية المحلية وانغمس في الثقافة المغربية الأصيلة.',
    icon: 'Users',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Anya S.',
    rating: 5,
    text: 'Exceptional experience! The hotel is beautifully designed and the staff is incredibly welcoming. A true gem in the heart of Tata.',
    source: 'Google Reviews',
  },
  {
    name: 'David C.',
    rating: 5,
    text: 'An unforgettable stay in the Moroccan desert. The hotel offers authentic hospitality combined with modern comfort. Highly recommended!',
    source: 'TripAdvisor',
  },
  {
    name: 'Omar K.',
    rating: 5,
    text: 'A peaceful and beautiful place. The staff is very cooperative and helpful. I will definitely return for another visit.',
    source: 'Google Reviews',
  },
];
