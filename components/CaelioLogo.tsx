'use client';

import React from 'react';

interface CaelioLogoProps {
  className?: string;
  iconSize?: number;
  showTagline?: boolean;
  color?: string; // defaults to hashtag color matching brand gold
  variant?: 'full' | 'icon';
  align?: 'left' | 'center';
}

export const CaelioLogo: React.FC<CaelioLogoProps> = ({
  className = '',
  iconSize = 64,
  showTagline = true,
  color = '#C9A84C',
  variant = 'full',
  align = 'center'
}) => {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center justify-center text-center';
  return (
    <div className={`flex flex-col select-none ${alignClass} ${className}`}>
      {/* SVG Emblem matches the sprouted coffee bean with double cradled wings/leaves */}
      <svg
        width={iconSize}
        height={iconSize * 0.65}
        viewBox="0 0 100 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 hover:scale-[1.03]"
      >
        {/* Stylized Coffee Bean at the Center Top */}
        <path
          d="M48.5 31C47.2 27.2 51.5 21 55 21.8C58.5 22.6 56.5 29.5 53 30.5C49.5 31.5 48.5 31 48.5 31Z"
          fill={color}
        />
        {/* Central diagonal crease of the coffee bean */}
        <path
          d="M50 28C51.5 26.8 53.5 25.5 55 23"
          stroke="#07080b"
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        {/* Master Double-Winged Leaves Cradle */}
        <path
          d="M 22 34 C 27 38.5, 43 56, 50 56 C 57 56, 73 38.5, 78 34 C 75.5 33, 70 31.5, 64 34.5 C 59.5 36.5, 55 42, 50 42 C 45 42, 40.5 36.5, 36 34.5 C 30 31.5, 24.5 33, 22 34 Z"
          fill={color}
        />

        {/* Inner Elegant leaf divide shadow to create depth */}
        <path
          d="M 28 39 C 33 44, 43 49, 50 49 C 57 49, 67 44, 72 39 C 68 42.5, 60 45, 50 45 C 40 45, 32 42.5, 28 39 Z"
          fill="#07080b"
          fillOpacity="0.4"
        />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col items-center mt-1">
          {/* Main Brand Name Typo */}
          <span 
            className="font-heading text-brand-gold tracking-[0.25em] uppercase font-bold text-lg md:text-xl leading-none"
            style={{ color }}
          >
            CAELIO
          </span>
          {showTagline && (
            <span 
              className="text-[8px] md:text-[9px] tracking-[0.16em] uppercase font-body mt-2 text-brand-ivory/50 font-light"
            >
              - Exclusive Coffee & Artisanal Food -
            </span>
          )}
        </div>
      )}
    </div>
  );
};
