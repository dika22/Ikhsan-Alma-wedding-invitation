import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Verse from './components/Verse';
import Profile from './components/Profile';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });

  // Prevent scrolling when invitation is closed
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  // Countdown logic for the cover
  useEffect(() => {
    const targetDate = new Date("2026-05-30T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
      } else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          detik: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-light relative">
      {/* Intro Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out bg-secondary ${
          isOpened ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Floral Top Decoration */}
        <div className="absolute top-0 left-0 w-full h-48 bg-[url('/flower-top.png')] bg-contain bg-top bg-no-repeat opacity-90" />
        
        {/* Floral Bottom Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-[url('/flower-bottom.png')] bg-contain bg-bottom bg-no-repeat opacity-90" />

        <div className="relative z-10 text-center px-6 w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
          <p className="text-gray-600 tracking-[0.3em] uppercase text-xs md:text-sm mb-6 font-semibold">
            Wedding Invitation
          </p>
          
          <h1 className="font-script text-6xl md:text-7xl text-dark mb-8 leading-tight">
            Ikhsan & <br/> Alma
          </h1>

          {/* Countdown */}
          <div className="flex gap-3 mb-6">
            <div className="bg-white/60 px-3 py-2 rounded shadow-sm text-center min-w-[60px] border border-primary/30">
              <p className="text-xl font-bold text-dark">{timeLeft.hari}</p>
              <p className="text-xs text-gray-600 mt-1">Days</p>
            </div>
            <div className="bg-white/60 px-3 py-2 rounded shadow-sm text-center min-w-[60px] border border-primary/30">
              <p className="text-xl font-bold text-dark">{timeLeft.jam}</p>
              <p className="text-xs text-gray-600 mt-1">Hours</p>
            </div>
            <div className="bg-white/60 px-3 py-2 rounded shadow-sm text-center min-w-[60px] border border-primary/30">
              <p className="text-xl font-bold text-dark">{timeLeft.menit}</p>
              <p className="text-xs text-gray-600 mt-1">Minutes</p>
            </div>
            <div className="bg-white/60 px-3 py-2 rounded shadow-sm text-center min-w-[60px] border border-primary/30">
              <p className="text-xl font-bold text-dark">{timeLeft.detik}</p>
              <p className="text-xs text-gray-600 mt-1">Seconds</p>
            </div>
          </div>

          <p className="text-dark tracking-widest uppercase text-xs md:text-sm mb-8 font-bold border-b border-gray-300 pb-2">
            SATURDAY, MAY 30, 2026
          </p>

          {/* Recipient Box */}
          <div className="bg-white/60 p-6 rounded-lg mb-8 w-full backdrop-blur-sm border border-primary/30 shadow-sm">
            <p className="text-gray-700 font-serif mb-2 text-sm">Dear Family & Friends,</p>
            <p className="font-bold text-xl text-dark mb-1 font-serif">Our Honored Guest</p>
            <p className="text-gray-600 text-sm">You are cordially invited</p>
          </div>

          <button 
            onClick={() => setIsOpened(true)}
            className="px-8 py-3 bg-primary text-white rounded-full font-medium tracking-widest text-sm hover:bg-primary/85 transition-all shadow-md uppercase hover:shadow-lg hover:scale-105"
          >
            Open Invitation
          </button>
        </div>
      </div>

      <Hero />
      <Verse />
      <Profile />
      <Story />
      <EventDetails />
      <RSVP />
      <MusicPlayer isOpened={isOpened} />
      
      <footer className="py-12 bg-gradient-to-b from-secondary to-secondary/80 text-center border-t border-primary/20">
        <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-6"></div>
        <p className="font-serif italic mb-3 text-dark/70 text-sm">Merupakan suatu kehormatan dan kebahagiaan apabila</p>
        <p className="font-serif italic mb-6 text-dark/70 text-sm">Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu</p>
        <p className="font-script text-3xl text-primary mb-4">Ikhsan & Alma</p>
        <div className="w-16 h-[1px] bg-primary/40 mx-auto mt-6"></div>
        <p className="text-dark/40 text-xs mt-6 tracking-widest uppercase">With Love</p>
      </footer>
    </main>
  );
}

export default App;

