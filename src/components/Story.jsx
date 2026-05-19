import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Story() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section className="py-24 bg-secondary/30 px-4 relative">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Our Love Story</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-t-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop" 
              alt="Couple" 
              className="relative z-10 w-full h-[500px] object-cover rounded-t-full shadow-lg"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-serif text-dark mb-2">Penuh Makna</h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap kisah memiliki awal, dan kisah kami dimulai dengan cara yang sederhana namun tak terlupakan. Pertemuan yang tak disengaja membawa kami pada perbincangan yang hangat, hingga akhirnya kami menyadari bahwa kami memiliki visi dan tujuan yang sama.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-dark mb-2">Melangkah Bersama</h3>
              <p className="text-gray-600 leading-relaxed">
                Hari demi hari berlalu, suka dan duka kami lewati bersama. Kini, kami siap melangkah ke jenjang yang lebih serius, mengikat janji suci untuk saling melengkapi dan mendukung satu sama lain dalam ikatan pernikahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
