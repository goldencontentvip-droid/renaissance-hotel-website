# Hotel La Renaissance - Official Website

A professional, high-end website for Hotel & Restaurant La Renaissance in Tata, Morocco, featuring authentic Moroccan hospitality, luxury accommodations, and integrated tour agency services.

## 🏨 Project Overview

Hotel La Renaissance is a luxury hospitality establishment offering authentic Moroccan experiences combined with modern amenities. The website serves as a digital showcase for:

- **Hotel Accommodations:** Three room types (Double, Suite, Family Room)
- **Tours & Experiences:** TATA EXPLORE adventure packages
- **Restaurant & Dining:** Traditional Moroccan and international cuisine
- **Cultural Heritage:** Historical sites, desert treks, and cultural experiences

## 🎨 Design Philosophy

The website embodies a **Luxury Moroccan Aesthetic** with:

- **Color Palette:** Warm terracotta (#B8860B), beige (#F5E6D3), warm brown (#8B6F47)
- **Typography:** Elegant serif fonts (Playfair Display) for headings, clean sans-serif (Lato) for body text
- **Spacing:** Generous whitespace reflecting luxury and refinement
- **Interactions:** Smooth animations and transitions for a premium feel

## 🌐 Website Sections

### 1. Header & Navigation
- Sticky header with logo and navigation menu
- Language switcher (English, French, Arabic)
- "Book Your Stay" WhatsApp integration button

### 2. Hero Section
- Full-screen hero with hotel courtyard background
- Prominent headline and subheading
- WhatsApp booking call-to-action button

### 3. Rooms & Suites
- Three room type cards with descriptions
- Modal details view with amenities list
- "Book Now" buttons linked to WhatsApp

### 4. Tours Agency (TATA EXPLORE)
- Three tour categories: Historical Sites, Desert Treks, Cultural Experiences
- Agency contact information and social media links
- "Plan Your Adventure" WhatsApp integration

### 5. Testimonials
- Auto-rotating carousel of guest reviews
- Star ratings and source attribution
- Manual navigation controls

### 6. Location & Contact
- Hotel location and contact information
- "Get Directions" button for Google Maps
- Phone, email, and address details

### 7. Footer
- Quick navigation links
- Social media integration
- Copyright and legal links

## 🚀 Technology Stack

- **Frontend:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4 with custom luxury theme
- **UI Components:** shadcn/ui for consistent, accessible components
- **Routing:** Wouter for client-side navigation
- **Animations:** Framer Motion for smooth transitions
- **Icons:** Lucide React for consistent iconography
- **Multilingual:** Custom context-based translation system

## 📱 Features

### Multilingual Support
- **Languages:** English, French, Arabic
- **Language Switcher:** Available in header and footer
- **Full Translation:** All major sections translated

### Booking Integration
- **WhatsApp Integration:** All booking buttons redirect to WhatsApp chat
- **No Pricing Display:** As per requirements, prices are not shown
- **Manager Contact:** +212 6 30 00 33 33

### SEO Optimization
- Meta tags for all pages
- Structured data markup
- Mobile-first responsive design
- Performance optimizations

### Accessibility
- WCAG 2.1 compliance
- Keyboard navigation support
- ARIA labels and semantic HTML
- High contrast text

## 📂 Project Structure

```
client/
  src/
    pages/
      Home.tsx              # Main landing page
      NotFound.tsx          # 404 page
    components/
      Header.tsx            # Navigation header
      Hero.tsx              # Hero section
      RoomsSection.tsx      # Room display cards
      ToursSection.tsx      # Tours agency section
      TestimonialsSection.tsx # Guest reviews
      LocationSection.tsx   # Location & contact
      Footer.tsx            # Footer component
    contexts/
      LanguageContext.tsx   # Multilingual state management
      ThemeContext.tsx      # Theme management
    lib/
      constants.ts          # Hotel info, contact details, room data
      utils.ts              # Utility functions
    index.css               # Global styles & theme
    main.tsx                # React entry point
    App.tsx                 # Root component
  public/
    favicon.ico             # Website favicon
    robots.txt              # SEO robots file
  index.html                # HTML template
package.json                # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ and npm/pnpm
- Modern web browser

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Variables

The project uses the following environment variables (automatically injected):

- `VITE_FRONTEND_FORGE_API_KEY` - API key for Manus services
- `VITE_FRONTEND_FORGE_API_URL` - API URL for Manus services
- `VITE_APP_ID` - Application ID
- `VITE_APP_TITLE` - Application title
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

## 🎯 Key Features

### WhatsApp Integration
All booking buttons are configured to open WhatsApp with pre-filled messages:

```javascript
const phoneNumber = '212630003333';
const message = encodeURIComponent('Hello, I would like to book a stay at Hotel La Renaissance.');
window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
```

### Language Switching
The language context provides translation strings for all UI elements:

```typescript
const { language, setLanguage, t } = useLanguage();
// Usage: {t('nav.home')} renders "Home" in the current language
```

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Tested on all major devices and browsers

## 📊 Content Management

### Hotel Information
- **Name:** Hotel & Restaurant La Renaissance
- **Location:** Tata, Morocco
- **Phone:** +212 6 30 00 33 33
- **Email:** info@hotellarenaissance.com

### Tour Agency (TATA EXPLORE)
- **Phone:** 0662243579 / 0661607507
- **Email:** exploretata@gmail.com
- **Instagram:** https://www.instagram.com/exploretata/
- **Facebook:** https://www.facebook.com/profile.php?id=61583717133549&sk=about

## 🔍 SEO

The website includes:

- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data (Schema.org)
- Mobile-friendly design
- Fast loading times
- Sitemap and robots.txt

## 🌍 Deployment

The website is hosted on Manus with automatic deployment:

- **Domain:** Renaissance-tata.com (custom domain)
- **SSL:** Automatic HTTPS
- **CDN:** Global content delivery
- **Analytics:** Built-in analytics tracking

## 📝 Customization

### Updating Hotel Information
Edit `client/src/lib/constants.ts`:

```typescript
export const HOTEL_INFO = {
  name: 'Hotel La Renaissance',
  phone: '+212 6 30 00 33 33',
  // ... other details
};
```

### Adding Translations
Edit `client/src/contexts/LanguageContext.tsx` and add new translation keys to the `translations` object.

### Changing Colors
Update CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #B8860B; /* Terracotta */
  --accent: #B8860B;
  /* ... other colors */
}
```

## 🐛 Troubleshooting

### Development Server Issues
```bash
# Clear cache and restart
rm -rf .vite node_modules/.vite
pnpm dev
```

### Build Errors
```bash
# Clear build artifacts
rm -rf dist
pnpm build
```

### TypeScript Errors
```bash
# Check types
pnpm check
```

## 📄 License

© 2024 Hotel La Renaissance. All rights reserved.

## 📞 Support

For technical issues or questions about the website:

- **Email:** info@hotellarenaissance.com
- **Phone:** +212 6 30 00 33 33
- **WhatsApp:** https://wa.me/212630003333

## 🎉 Credits

Built with ❤️ by Manus AI for Hotel La Renaissance, Tata, Morocco.

Website features authentic Moroccan design elements and luxury hospitality branding to reflect the hotel's commitment to authentic experiences and modern comfort.
