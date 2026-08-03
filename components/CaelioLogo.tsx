'use client';

import React from 'react';

interface CaelioLogoProps {
  className?: string;
  showTagline?: boolean;
  color?: string; // defaults to hashtag/espresso color matching brand
  taglineColor?: string;
  variant?: 'full' | 'wordmark' | 'icon';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CaelioLogo: React.FC<CaelioLogoProps> = ({
  className = '',
  showTagline = true,
  color = 'currentColor',
  taglineColor,
  variant = 'full',
  align = 'center',
  size = 'md'
}) => {
  const alignClass = 
    align === 'left' 
      ? 'items-start text-left' 
      : align === 'right' 
        ? 'items-end text-right' 
        : 'items-center text-center';

  const sizeMap = {
    sm: { wordmark: 'text-lg md:text-xl tracking-[0.18em]', tagline: 'text-[9px] md:text-[10px] tracking-[0.12em]', gap: 'gap-0.5' },
    md: { wordmark: 'text-2xl md:text-3xl tracking-[0.2em]', tagline: 'text-[11px] md:text-[12px] tracking-[0.14em]', gap: 'gap-1' },
    lg: { wordmark: 'text-4xl md:text-5xl lg:text-6xl tracking-[0.22em]', tagline: 'text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.16em]', gap: 'gap-2' },
    xl: { wordmark: 'text-6xl md:text-7xl lg:text-8xl tracking-[0.24em]', tagline: 'text-[18px] md:text-[22px] lg:text-[26px] tracking-[0.18em]', gap: 'gap-3' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex flex-col select-none ${alignClass} ${currentSize.gap} ${className}`}>
      {/* Primary Brand Wordmark */}
      <span
        className={`font-serif font-medium uppercase leading-none ${currentSize.wordmark}`}
        style={{
          color,
          fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", "Lora", serif'
        }}
      >
        CAELIO
      </span>

      {/* Subtitle / Tagline: "Specialty Coffee | Artisanal Food" */}
      {variant === 'full' && showTagline && (
        <div
          className={`font-serif leading-tight whitespace-nowrap font-normal ${currentSize.tagline}`}
          style={{
            color: taglineColor || color,
            fontFamily: '"Times New Roman MT", "Times New Roman", "Playfair Display", "Lora", serif'
          }}
        >
          <span>Specialty Coffee</span>
          <span className="mx-1.5 opacity-60">|</span>
          <span>Artisanal Food</span>
        </div>
      )}
    </div>
  );
};

