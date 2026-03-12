import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ROOMS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageCircle } from 'lucide-react';

export default function RoomsSection() {
  const { language, t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = '212630003333';
    const message = encodeURIComponent('Hello, I would like to book a room at Hotel La Renaissance.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const getRoomTitle = (room: typeof ROOMS[0]) => {
    if (language === 'fr') return room.titleFr;
    if (language === 'ar') return room.titleAr;
    return room.titleEn;
  };

  const getRoomDescription = (room: typeof ROOMS[0]) => {
    if (language === 'fr') return room.descriptionFr;
    if (language === 'ar') return room.descriptionAr;
    return room.descriptionEn;
  };

  const selectedRoomData = ROOMS.find((r) => r.id === selectedRoom);

  return (
    <section id="rooms" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">{t('rooms.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="card-luxury overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedRoom(room.id)}
            >
              {/* Room Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center overflow-hidden relative">
                <div className="text-center text-muted-foreground">
                  <div className="text-5xl mb-2">🛏️</div>
                  <p className="text-sm font-sans">{getRoomTitle(room)}</p>
                </div>
              </div>

              {/* Room Info */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {getRoomTitle(room)}
                </h3>
                <p className="text-accent font-serif font-semibold mb-4">
                  {getRoomDescription(room)}
                </p>
                <p className="text-muted-foreground text-sm font-sans mb-6">
                  {language === 'ar'
                    ? 'اكتشف الراحة والفخامة في غرفنا المصممة بعناية'
                    : language === 'fr'
                    ? 'Découvrez le confort et le luxe dans nos chambres soigneusement conçues'
                    : 'Discover comfort and luxury in our carefully designed rooms'}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRoom(room.id);
                  }}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-serif"
                >
                  {t('rooms.viewDetails')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <Dialog open={!!selectedRoom} onOpenChange={(open) => !open && setSelectedRoom(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {selectedRoomData && getRoomTitle(selectedRoomData)}
            </DialogTitle>
            <DialogDescription className="text-accent font-serif font-semibold">
              {selectedRoomData && getRoomDescription(selectedRoomData)}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Amenities */}
            <div>
              <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                {language === 'ar'
                  ? 'المرافق'
                  : language === 'fr'
                  ? 'Équipements'
                  : 'Amenities'}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedRoomData?.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground font-sans">
                    <span className="text-accent">✓</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                {language === 'ar'
                  ? 'الوصف'
                  : language === 'fr'
                  ? 'Description'
                  : 'Description'}
              </h4>
              <p className="text-foreground font-sans leading-relaxed">
                {language === 'ar'
                  ? 'تم تصميم غرفنا بعناية فائقة لتوفير أقصى درجات الراحة والفخامة. كل غرفة مجهزة بأحدث المرافق والتكنولوجيا الحديثة.'
                  : language === 'fr'
                  ? 'Nos chambres sont conçues avec soin pour offrir le maximum de confort et de luxe. Chaque chambre est équipée des dernières installations et technologies modernes.'
                  : 'Our rooms are carefully designed to provide maximum comfort and luxury. Each room is equipped with the latest facilities and modern technology.'}
              </p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-serif py-6 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {t('common.bookNow')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
