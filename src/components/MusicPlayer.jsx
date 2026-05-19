import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause, Play, ChevronDown, PauseCircle } from 'lucide-react';

export default function MusicPlayer({ isOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const audioRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Play music when invitation is opened
  useEffect(() => {
    if (isOpened && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Autoplay prevented:", err));
    }
  }, [isOpened]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      clearInterval(scrollIntervalRef.current);
      setIsAutoScrolling(false);
    } else {
      setIsAutoScrolling(true);
      scrollIntervalRef.current = setInterval(() => {
        window.scrollBy({ top: 1, left: 0 });

        // Stop if reached bottom
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          clearInterval(scrollIntervalRef.current);
          setIsAutoScrolling(false);
        }
      }, 30);
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  // Pause autoscroll if user scrolls manually upwards (optional refinement)
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAutoScrolling && e.deltaY < 0) {
        toggleAutoScroll();
      }
    };
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleWheel); // simple cancel on touch
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleWheel);
    };
  }, [isAutoScrolling]);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

      {/* Auto Scroll Button */}
      <button
        onClick={toggleAutoScroll}
        className="bg-white text-primary p-3 rounded-full shadow-lg border border-primary/20 hover:bg-primary/10 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Toggle auto scroll"
        title="Auto Scroll"
      >
        {isAutoScrolling ? <PauseCircle size={24} /> : <ChevronDown size={24} className="animate-bounce" />}
      </button>

      {/* Music Button */}
      <audio
        ref={audioRef}
        src="wedding-song.mp3"
        loop
      />
      <button
        onClick={togglePlay}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 flex items-center justify-center animate-pulse-slow"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </button>
    </div>
  );
}
