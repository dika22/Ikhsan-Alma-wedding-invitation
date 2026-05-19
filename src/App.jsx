import React, { useState, useEffect } from 'react';
import { MailOpen } from 'lucide-react';
import Hero from './components/Hero';
import Verse from './components/Verse';
import Profile from './components/Profile';
import Story from './components/Story';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scrolling when invitation is closed
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <main className="min-h-screen bg-light relative">
      {/* Intro Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary transition-transform duration-1000 ease-in-out ${
          isOpened ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-secondary/80" />
        
        <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-dark tracking-widest uppercase text-sm mb-4 font-semibold">
            The Wedding Of
          </p>
          <h1 className="font-script text-5xl md:text-7xl text-dark mb-10 drop-shadow-sm">
            Ikhsan & Alma
          </h1>
          <p className="text-gray-700 font-serif mb-8 text-lg">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <button 
            onClick={() => setIsOpened(true)}
            className="group relative px-8 py-3 bg-primary text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <MailOpen size={20} className="relative z-10" />
            <span className="relative z-10 font-medium tracking-wide">Buka Undangan</span>
          </button>
        </div>
      </div>

      <Hero />
      <Verse />
      <Profile />
      <Story />
      <EventDetails />
      <Gallery />
      <RSVP />
      <MusicPlayer isOpened={isOpened} />
      
      <footer className="py-8 bg-dark text-white text-center">
        <p className="font-serif italic mb-2">Terima kasih atas doa dan restu Anda</p>
        <p className="font-script text-2xl text-primary">Ikhsan & Alma</p>
      </footer>
    </main>
  );
}

export default App;

