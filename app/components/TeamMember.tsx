'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  position: string;
  quote: string;
  imageSrc: string;
  isActive?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, quote, imageSrc, isActive = false }) => {
  return (
    <div className={`relative h-screen w-screen flex-shrink-0 snap-start ${isActive ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-2 h-full">
        {/* Left side - Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8B6D3F]/50 rounded-full p-4 z-20">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="bg-[#F5EDE3] p-16 flex flex-col justify-center relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 bottom-0">
              <Image
                src="/images/infinity-watermark.png"
                alt="Infinity Watermark"
                width={600}
                height={600}
                className="opacity-20"
              />
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-6xl font-bold text-white mb-4">OUR LEADERSHIP TEAM</h2>
            <h3 className="text-4xl font-bold text-[#8B6D3F] mb-2">{name}</h3>
            <p className="text-2xl text-gray-600 mb-8">{position}</p>
            <blockquote className="text-xl italic text-[#8B6D3F] mb-8">
              "{quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember; 