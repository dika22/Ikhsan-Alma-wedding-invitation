import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function EventDetails() {
  const [refAkad, isAkadVisible] = useScrollFade();
  const [refResepsi, isResepsiVisible] = useScrollFade();

  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Detail Acara</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Akad */}
          <div 
            ref={refAkad}
            className={`bg-secondary/20 p-8 rounded-2xl text-center border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-1000 ease-out transform ${
              isAkadVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-16 -rotate-6 scale-95'
            }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <h3 className="text-3xl font-serif text-dark mb-6">Akad Nikah</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-accent" size={24} />
                <p className="font-semibold">Sabtu, 30 Mei 2026</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-accent" size={24} />
                <p>08:00 - 10:00 WIB</p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <MapPin className="text-accent" size={24} />
                <p className="font-semibold text-sm">Gombong Bedahan RT 08 RW 05</p>
                <p className="text-sm">Samping Masjid Baitulhikmah, Belik, Kab. Pemalang</p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Masjid+Baitulhikmah+Gombong+Bedahan+Belik+Pemalang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-sm text-sm tracking-wide uppercase"
            >
              Lihat Peta
            </a>
          </div>

          {/* Resepsi */}
          <div 
            ref={refResepsi}
            className={`bg-secondary/20 p-8 rounded-2xl text-center border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-1000 ease-out transform ${
              isResepsiVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 translate-x-16 rotate-6 scale-95'
            }`}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full -z-10 transition-transform group-hover:scale-110"></div>
            <h3 className="text-3xl font-serif text-dark mb-6">Resepsi</h3>
            
            <div className="space-y-4 text-gray-700">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-accent" size={24} />
                <p className="font-semibold">Sabtu, 30 Mei 2026</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-accent" size={24} />
                <p>10:00 WIB - Selesai</p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <MapPin className="text-accent" size={24} />
                <p className="font-semibold text-sm">Gombong Bedahan RT 08 RW 05</p>
                <p className="text-sm">Samping Masjid Baitulhikmah, Belik, Kab. Pemalang</p>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Masjid+Baitulhikmah+Gombong+Bedahan+Belik+Pemalang" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-8 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-sm text-sm tracking-wide uppercase"
            >
              Lihat Peta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
