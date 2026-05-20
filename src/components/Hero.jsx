import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Hero({ isOpened }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background decoration with dreamy slow zoom-in & fade-in */}
      <div 
        className={`absolute inset-0 bg-[url('/main-photo.jpg')] bg-cover bg-center transition-all duration-[2500ms] ease-out transform ${
          isOpened ? 'scale-100 opacity-40' : 'scale-110 opacity-0'
        }`} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/90" />

      <div 
        className={`relative z-10 text-center px-4 transition-all duration-[1500ms] delay-300 ease-out transform ${
          isOpened ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-semibold">
          Pernikahan
        </p>
        <h1 className="font-script text-6xl md:text-8xl text-dark mb-4 drop-shadow-sm">
          Ikhsan <span className="text-primary text-5xl md:text-7xl">&amp;</span> Alma
        </h1>
        <p className="text-gray-600 mt-6 text-lg md:text-xl font-serif italic">
          "Dua jiwa, satu hati."
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
