import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { HOTEL_INFO, TOUR_AGENCY } from '@/lib/constants';
import { useState } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-background rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
            {t('modal.about.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Hotel Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                {t('modal.about.hotelTitle')}
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {t('modal.about.hotelDescription')}
            </p>

            {/* Hotel Contact Info */}
            <div className="bg-accent/5 rounded-lg p-4 space-y-3 mt-4">
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone size={18} className="text-accent" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-accent transition-colors">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail size={18} className="text-accent" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-accent transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin size={18} className="text-accent" />
                <span>{HOTEL_INFO.location}</span>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Tour Agency Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Globe size={24} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                {t('modal.about.tourTitle')}
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              {t('modal.about.tourDescription')}
            </p>

            {/* Tour Agency Contact Info */}
            <div className="bg-accent/5 rounded-lg p-4 space-y-3 mt-4">
              <div className="flex items-center gap-3 text-foreground/70">
                <span className="font-semibold text-accent">{TOUR_AGENCY.name}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone size={18} className="text-accent" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${TOUR_AGENCY.phone}`} className="hover:text-accent transition-colors">
                    {TOUR_AGENCY.phone}
                  </a>
                  <a href={`tel:${TOUR_AGENCY.phone2}`} className="hover:text-accent transition-colors">
                    {TOUR_AGENCY.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail size={18} className="text-accent" />
                <a href={`mailto:${TOUR_AGENCY.email}`} className="hover:text-accent transition-colors">
                  {TOUR_AGENCY.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Globe size={18} className="text-accent" />
                <a 
                  href={TOUR_AGENCY.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {t('modal.about.visitInstagram')}
                </a>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={onClose}
              className="px-6 py-3 bg-accent text-white hover:bg-accent/90 font-sans font-semibold rounded-lg transition-all duration-300"
            >
              {t('modal.about.close')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
