'use client';

import React, { useEffect, useState } from 'react';

export const Starfield = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`, // Scaled down for minimalism
      duration: `${Math.random() * 3 + 2}s`,
    }));
    const timeout = setTimeout(() => {
      setStars(newStars);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="dot-pattern" />
      <div className="starfield overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              // @ts-ignore
              '--duration': star.duration,
            }}
          />
        ))}
      </div>
    </>
  );
};

export const GrainOverlay = () => <div className="grain-overlay" />;
