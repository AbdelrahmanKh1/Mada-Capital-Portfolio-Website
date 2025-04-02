'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TeamMember from '../components/TeamMember';
import ScrollButton from '../components/ScrollButton';
import VisionMissionValues from '../components/VisionMissionValues';

const AboutPage = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Essam Hawash",
      position: "Chief Executive Officer",
      quote: "See life with clarity, fight with purpose, & embrace the vision of your destiny. For in the arena of existence, only those who dare to see beyond the struggle can claim true victory.",
      imageSrc: "/images/qaitbay citadel.webp"
    },
    {
      name: "Tarek Elshabrawy CPA, CFE",
      position: "CFO & Deputy CEO",
      quote: "Without commitment, you'll never start, Without consistency, you'll never finish",
      imageSrc: "/images/qaitbay citadel.webp"
    },
    {
      name: "Bruno Martorana",
      position: "Head of Asset Management",
      quote: "Challenges exist to help us grow.",
      imageSrc: "/images/qaitbay citadel.webp"
    },
    {
      name: "Nader Bassit",
      position: "Managing Director",
      quote: "There is nothing like a dream to create the future, for it belongs to those who prepare for it today.",
      imageSrc: "/images/qaitbay citadel.webp"
    }
  ];

  const handleTeamScroll = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentTeamMember(prev => (prev + 1) % teamMembers.length);
    } else {
      setCurrentTeamMember(prev => (prev - 1 + teamMembers.length) % teamMembers.length);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Vision, Mission, Values section */}
      <VisionMissionValues />

      {/* Regular sections with vertical scroll */}
      <section className="min-h-screen bg-[#F5EDE3] relative">
       
        <div className="relative z-10 container mx-auto px-8 py-16">
          <h2 className="text-6xl font-bold text-[#8B6D3F] mb-8">OUR HISTORY</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
            Mada Capital was founded on the principles of trust, expertise, and innovation. With management 
teams from across the UAE, Saudi Arabia, Egypt, and Russia, our leadership has successfully 
launched global ventures and managed multibillion-dollar assets over the past 5 years. 
<br></br>
<br></br>
Our track record includes leading over 15 IPOs across regional markets and launching more than 30 
funds in real estate and private equity. With an intricate understanding of the financial landscape in 
the GCC and beyond, we navigate cultural complexities to offer best-in-class service to our diverse 
clientele. 
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#F5EDE3] relative">
       
        <div className="relative z-10 container mx-auto px-8 py-16">
          <h2 className="text-6xl font-bold text-[#8B6D3F] mb-8">OUR IMPACT</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
            Mada Capital was founded on the principles of trust, expertise, and innovation. With management 
teams from across the UAE, Saudi Arabia, Egypt, and Russia, our leadership has successfully 
launched global ventures and managed multibillion-dollar assets over the past 5 years. 
<br></br>
<br></br>
Our track record includes leading over 15 IPOs across regional markets and launching more than 30 
funds in real estate and private equity. With an intricate understanding of the financial landscape in 
the GCC and beyond, we navigate cultural complexities to offer best-in-class service to our diverse 
clientele. 
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#F5EDE3] relative">
     
        <div className="relative z-10 container mx-auto px-8 py-16">
          <h2 className="text-6xl font-bold text-[#8B6D3F] mb-8">OUR STORY</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
            At Mada Capital, we are more than just an investment firm—we are your trusted financial partner. With 
a deep commitment to building long-term relationships, we empower our clients to take full control of 
their investment decisions. Our holistic and impartial approach ensures that each client receives tailored 
financial solutions that align with their unique goals. 
<br></br>
<br></br>
Backed by a team of top-tier financial professionals, Mada Capital provides expert insights across 
multiple asset classes. We aim to drive sustainable financial growth, foster trust, and deliver innovative 
investment solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team section with horizontal scroll */}
      <section className="h-screen w-screen flex overflow-x-hidden snap-x snap-mandatory relative">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={member.name}
            {...member}
            isActive={currentTeamMember === index}
          />
        ))}

        {/* Navigation buttons */}
        {currentTeamMember > 0 && (
          <ScrollButton direction="left" onClick={() => handleTeamScroll('left')} />
        )}
        {currentTeamMember < teamMembers.length - 1 && (
          <ScrollButton direction="right" onClick={() => handleTeamScroll('right')} />
        )}
      </section>
    </main>
  );
};

export default AboutPage; 