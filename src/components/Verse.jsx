import React from 'react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function Verse() {
  const [ref, isVisible] = useScrollFade();

  return (
    <section className="py-24 bg-white px-4">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-serif italic text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
        </p>
        <p className="text-accent font-semibold tracking-wide">
          (QS. Ar-Rum: 21)
        </p>
      </div>
    </section>
  );
}
