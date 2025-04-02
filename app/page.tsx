'use client';

import { useRef } from 'react';
import VideoBackground from './components/VideoBackground';
import InfiniteSection from './components/InfiniteSection';
import ScrollButton from './components/ScrollButton';

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToSection = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'right' ? window.innerWidth : -window.innerWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main 
      ref={containerRef} 
      className="h-screen w-screen flex overflow-x-hidden snap-x snap-mandatory relative scroll-smooth"
    >
      {/* Hero Section with Video Background */}
      <section className="h-screen w-screen flex-shrink-0 snap-start relative">
        <VideoBackground videoSrc="/videos/logo.mp4">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Mada Capital
            </h1>
            <p className="text-xl md:text-2xl">
              Infinite Investment Solutions
            </p>
          </div>
        </VideoBackground>
        <ScrollButton direction="right" onClick={() => scrollToSection('right')} />
      </section>

      {/* Infinite Investment Solutions Section */}
      <section className="h-screen w-screen flex-shrink-0 snap-start relative">
        <InfiniteSection />
        <ScrollButton direction="left" onClick={() => scrollToSection('left')} />
      </section>

      {/* Rest of the content */}
      <section className="h-screen w-screen flex-shrink-0 snap-start bg-white relative">
        <div className="container mx-auto px-4 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Solutions</h2>
            <p className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
