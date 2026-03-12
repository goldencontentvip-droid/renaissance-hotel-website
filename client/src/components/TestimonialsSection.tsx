import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
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
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container">
        <h2 className="section-title">{t('testimonials.title')}</h2>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div
            className="relative cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="card-luxury p-8 md:p-12 min-h-64 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl font-sans text-foreground mb-6 leading-relaxed italic">
                "{TESTIMONIALS[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-foreground">
                    {TESTIMONIALS[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans">
                    {TESTIMONIALS[currentIndex].source}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 text-accent hover:text-accent/70 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 text-accent hover:text-accent/70 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-border hover:bg-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
