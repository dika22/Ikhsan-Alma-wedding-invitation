import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Hero() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 bg-[url('/main-photo.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/90" />

      <div 
        ref={ref}
        className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-semibold">
          The Wedding Celebration of
        </p>
        <h1 className="font-script text-6xl md:text-8xl text-dark mb-4 drop-shadow-sm">
          Ikhsan <span className="text-primary text-5xl md:text-7xl">&amp;</span> Alma
        </h1>
        <p className="text-gray-600 mt-6 text-lg md:text-xl font-serif italic">
          "Two souls, one heart."
        </p>
        <div className="mt-12">
          <p className="text-dark font-semibold tracking-widest uppercase border-y border-primary/30 py-4 inline-block px-8">
            Sabtu, 30 Mei 2026
          </p>
        </div>
      </div>
    </section>
  );
}
