import React, { useEffect, useState } from 'react';

// Predefined petal colors to match the theme (soft pink/cream and rose gold highlights)
const PETAL_COLORS = [
  '#F3E5F5', // Soft lavender/pink
  '#FFF9C4', // Soft cream/gold hint
  '#FFEB3B', // Soft gold
  '#FCE4EC', // Very soft blush pink
  '#E8F5E9', // Soft green hint for leaf-like particles
];

export default function FallingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate 25 petals with random sizes, positions, delays, and speeds
    const initialPetals = Array.from({ length: 25 }).map((_, index) => {
      const size = Math.random() * 12 + 8; // Size between 8px and 20px
      const left = Math.random() * 100; // Left position in %
      const delay = Math.random() * 15; // Delay before animation starts (seconds)
      const duration = Math.random() * 10 + 10; // Speed of falling (10s to 20s)
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const swingDuration = Math.random() * 4 + 3; // Left-right swing duration

      return {
        id: index,
        size,
        left,
        delay,
        duration,
        color,
        swingDuration,
        // Random tilt angle
        rotate: Math.random() * 360,
      };
    });
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden select-none">
      {/* Dynamic inline styles for the keyframes */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes swing {
          0%, 100% {
            transform: translateX(0px) rotate(-10deg);
          }
          50% {
            transform: translateX(30px) rotate(10deg);
          }
        }
      `}</style>

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animation: `fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            top: '-20px',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: '100%',
              height: '100%',
              fill: petal.color,
              transform: `rotate(${petal.rotate}deg)`,
              animation: `swing ${petal.swingDuration}s ease-in-out infinite`,
            }}
          >
            {/* Elegant organic petal path */}
            <path d="M12,2 C17,6 20,13 17,18 C14,22 7,22 4,18 C1,13 4,6 12,2 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
