import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939000240-690b22a0149e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541250848049-b4f714612052?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section className="py-24 bg-secondary/10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Our Moments</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm group">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                loading="lazy"
                className="w-full h-48 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
