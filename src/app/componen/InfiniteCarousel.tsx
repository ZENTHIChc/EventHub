"use client";

import React, { useState, useRef, useEffect } from 'react';

const InfiniteCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);

  // ========== EDIT DATA DI SINI ==========
  const items = [
    {
      id: 1,
      name: "TechCorp",
      image: "./logo.png" // Ganti dengan path foto kamu
    },
    {
      id: 2,
      name: "DesignHub",
      image: "./logo.png"
    },
    {
      id: 3,
      name: "CloudNet",
      image: "./logo.png"
    },
    {
      id: 4,
      name: "DataFlow",
      image: "./logo.png"
    },
    {
      id: 5,
      name: "CodeBase",
      image: "./logo.png"
    },
    {
      id: 6,
      name: "AICore",
      image: "./logo.png"
    }
  ];

  // ========== SETTINGS ==========
  const duration = 30000; // Durasi scroll dalam ms
  const gap = "gap-30"; // Jarak antar item
  const itemWidth = "w-34"; // Lebar card
  const itemHeight = "h-15"; // Tinggi card

  // Duplikasi items untuk infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let startTime: number | null = null;
    const totalDistance = -33.333;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime - progressRef.current;
      
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      progressRef.current = elapsed % duration;
      
      const translateX = progress * totalDistance;
      element.style.transform = `translateX(${translateX}%)`;

      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, duration]);

  return (
    <div className="relative overflow-hidden py-8 ">
      {/* Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scroll Container */}
      <div
        ref={scrollRef}
        className={`flex ${gap}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: 'fit-content',
          willChange: 'transform'
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`flex-shrink-0 ${itemWidth} ${itemHeight} cursor-pointer group`}
          >
            {/* Foto dengan efek zoom saja saat hover */}
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              style={{ transform: 'rotate(0deg)' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;