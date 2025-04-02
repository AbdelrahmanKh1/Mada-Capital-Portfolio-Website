'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollButton from './ScrollButton';

const sections = [
  {
    id: 'mission',
    title: 'MISSION',
    image: '/images/projects/mission.png',
    content: [
      'We get the job done right!',
      'We craft and grant access to unique business opportunities to our investors.',
      'We constantly make money for our stakeholders from the get-go & beyond.',
      'Change being the only constant, we consistently change and adapt to deliver business results exceeding market norms.',
      'We serve those with little access to wealth-building platforms. We give back to the community by deploying our expertise to benefit the people.',
      'We are brave enough to venture into unchartered territories and find sophisticated business solutions that defy the norms.',
      'We make money simple!'
    ]
  },
  {
    id: 'vision',
    title: 'VISION',
    image: '/images/projects/vision.png',
    content: ['Driven by integrity and passion, we aim to lead innovation in investment solutions making our investors happy by delivering results that once seemed impossible '] 
  },
  {
    id: 'values',
    title: 'VALUES',
    image: '/images/projects/values.png',
    content: [
      'Client Centric Innovation',
      'Passionate Valour',
      'Commitment To Success',
      'Commitment',
      'Versatile Ownership'
    ]
  }
];

const VisionMissionValues = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentSection(prev => (prev + 1) % sections.length);
    } else {
      setCurrentSection(prev => (prev - 1 + sections.length) % sections.length);
    }
  };

  return (
    <section className="h-screen w-screen relative bg-[#F5EDE3] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B6D3F]/20 to-transparent" />
      </div>

      <div className="relative h-full flex overflow-x-hidden">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="w-full h-full flex-shrink-0 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${(index - currentSection) * 100}%)`,
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="grid grid-cols-2 h-full">
              {/* Left side - Content */}
              <div className="p-16 flex flex-col justify-center">
                <h2 className="text-6xl font-bold text-[#8B6D3F] mb-12">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#8B6D3F] mt-2.5" />
                      <p className="text-xl text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {currentSection > 0 && (
        <ScrollButton direction="left" onClick={() => handleScroll('left')} />
      )}
      {currentSection < sections.length - 1 && (
        <ScrollButton direction="right" onClick={() => handleScroll('right')} />
      )}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection ? 'bg-[#8B6D3F] w-12' : 'bg-[#8B6D3F]/30'
            }`}
            onClick={() => setCurrentSection(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default VisionMissionValues; 