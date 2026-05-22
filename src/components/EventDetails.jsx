import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function EventDetails() {
  const [refAkad, isAkadVisible] = useScrollFade();
  const [refResepsi, isResepsiVisible] = useScrollFade();
  const [refMap, isMapVisible] = useScrollFade();

  return (
    <section className="py-12 md:py-24 bg-white px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">Detail Acara</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Akad */}
          <div
            ref={refAkad}
            className={`bg-secondary/20 p-8 rounded-2xl text-center border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-1000 ease-out transform ${isAkadVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-x-16 -rotate-6 scale-95'
              }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <h3 className="text-3xl font-serif text-dark mb-6">Akad Nikah</h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-accent" size={24} />
                <p className="font-semibold text-lg">Sabtu, 30 Mei 2026</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-accent" size={24} />
                <p className="text-lg">08:00 - 10:00 WIB</p>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div
            ref={refResepsi}
            className={`bg-secondary/20 p-8 rounded-2xl text-center border border-primary/20 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-1000 ease-out transform ${isResepsiVisible ? 'opacity-100 translate-x-0 rotate-0 scale-100' : 'opacity-0 translate-x-16 rotate-6 scale-95'
              }`}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full -z-10 transition-transform group-hover:scale-110"></div>
            <h3 className="text-3xl font-serif text-dark mb-6">Resepsi</h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-accent" size={24} />
                <p className="font-semibold text-lg">Sabtu, 30 Mei 2026</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="text-accent" size={24} />
                <p className="text-lg">10:00 WIB - Selesai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Map Section */}
        <div
          ref={refMap}
          className={`bg-secondary/10 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-sm relative overflow-hidden transition-all duration-1000 delay-200 ease-out transform ${isMapVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -z-10"></div>
          <div className="text-center mb-8">
            <MapPin className="text-accent mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-serif text-dark mb-2">Lokasi Acara</h3>
            <p className="font-semibold text-gray-800 text-base md:text-lg">
              Gombong Bedahan RT 08 RW 05
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Samping Masjid Baitulhikmah, Belik, Kab. Pemalang
            </p>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-primary/30 shadow-md mb-8">
            <iframe
              src="https://maps.google.com/maps?q=-7.2095431,109.2975346&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lokasi Undangan Pernikahan"
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/jGacvudLX3r28qbPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium text-sm tracking-wider uppercase hover:scale-105 cursor-pointer"
            >
              <MapPin size={16} />
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
