'use client';

import React from 'react';

interface ScrollButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute z-20 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 group"
      style={{ [direction === 'left' ? 'left' : 'right']: '2rem' }}
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'right' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      )}
    </button>
  );
};

export default ScrollButton; 