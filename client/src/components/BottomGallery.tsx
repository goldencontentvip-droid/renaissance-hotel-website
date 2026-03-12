import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    title: 'Hotel Courtyard',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    title: 'Bedroom Suite',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1571115764595-644a262f8a94?w=400&h=300&fit=crop',
    title: 'Desert Landscape',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1564078516577-ee0ebc4b37cd?w=400&h=300&fit=crop',
    title: 'Moroccan Architecture',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1566154969555-2be619edc82b?w=400&h=300&fit=crop',
    title: 'Restaurant Dining',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1542314503-37143f4f6b13?w=400&h=300&fit=crop',
    title: 'Desert Adventure',
  },
];

export default function BottomGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      goToPrevious();
    }
  };

  return (
    <div className="w-full bg-background py-8">
      <div className="container">
        <div
          className="relative flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Gallery Container */}
          <div className="w-full max-w-6xl">
            {/* Main Image */}
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-border/20">
              <img
                src={GALLERY_IMAGES[currentIndex].url}
                alt={GALLERY_IMAGES[currentIndex].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-serif font-semibold text-lg">{GALLERY_IMAGES[currentIndex].title}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto px-4 flex-1 mx-4">
                {GALLERY_IMAGES.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-accent shadow-lg scale-105'
                        : 'border-border/20 hover:border-border/40'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-border hover:bg-muted'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
