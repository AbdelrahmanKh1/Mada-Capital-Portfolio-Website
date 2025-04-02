'use client';

import React from 'react';

const InfiniteSection = () => {
  return (
    <section className="h-screen w-screen flex-shrink-0 relative snap-start">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/qaitbay citadel.webp')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-wider mb-4">
          INFINITE
        </h2>
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-wider mb-4">
          INVESTMENT
        </h2>
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-wider">
          SOLUTIONS
        </h2>
      </div>
    </section>
  );
};

export default InfiniteSection; 