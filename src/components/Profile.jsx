import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Profile() {
  const [refIntro, isIntroVisible] = useScrollFade();
  const [refGroom, isGroomVisible] = useScrollFade();
  const [refAmp, isAmpVisible] = useScrollFade();
  const [refBride, isBrideVisible] = useScrollFade();

  return (
    <section className="pt-6 pb-12 md:pb-24 bg-white px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Intro Text */}
        <div
          ref={refIntro}
          className={`mb-16 transition-all duration-1000 ease-out transform ${isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-3xl md:text-4xl text-dark mb-6 font-arabic" dir="rtl" style={{ fontFamily: '"Amiri", "Scheherazade New", serif' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p className="font-serif text-xl md:text-2xl text-dark mb-6">
            Assalamu'alaikum Warahmatullaahi Wabarakaatuh
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.
          </p>
        </div>

        {/* Profiles */}
        <div className="flex flex-col justify-center items-center gap-16">

          {/* Groom - slides in from left */}
          <div
            ref={refGroom}
            className={`flex flex-col items-center transition-all duration-1000 delay-200 ease-out transform ${isGroomVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'
              }`}
          >
            <div className="relative mb-8 group cursor-pointer">
              <div className="absolute inset-0 border-2 border-primary rotate-6 rounded-t-full rounded-b-full transition-all duration-500 group-hover:rotate-12 group-hover:scale-105"></div>
              <img
                src="/groom.png"
                alt="Ikhsan Sandi Putra"
                className="relative z-10 w-64 h-80 object-cover rounded-t-full rounded-b-full shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-script text-5xl md:text-6xl text-dark mb-3 tracking-wide">Ikhsan Sandi Putra</h3>
            <p className="text-gray-600 font-serif italic text-xl text-center">
              Putra Kelima dari <br /> Bapak Ilyas Abdullah &amp; Ibu Siti Anisah
            </p>
          </div>

          {/* Ampersand - scale up */}
          <div
            ref={refAmp}
            className={`flex items-center justify-center my-2 transition-all duration-700 ease-out transform ${isAmpVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
              }`}
          >
            <span className="font-script text-7xl text-primary opacity-80 animate-pulse">&amp;</span>
          </div>

          {/* Bride - slides in from right */}
          <div
            ref={refBride}
            className={`flex flex-col items-center transition-all duration-1000 delay-200 ease-out transform ${isBrideVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'
              }`}
          >
            <div className="relative mb-8 group cursor-pointer">
              <div className="absolute inset-0 border-2 border-primary -rotate-6 rounded-t-full rounded-b-full transition-all duration-500 group-hover:-rotate-12 group-hover:scale-105"></div>
              <img
                src="/bride.png"
                alt="Alma Nur Annisa"
                className="relative z-10 w-64 h-80 object-cover rounded-t-full rounded-b-full shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-script text-5xl md:text-6xl text-dark mb-3 tracking-wide">Alma Nur Annisa</h3>
            <p className="text-gray-600 font-serif italic text-xl text-center">
              Putri Pertama dari <br /> Bapak Saritno &amp; Ibu Dasirah
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
