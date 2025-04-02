'use client';

import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  children?: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Log video source
      console.log('Video source:', videoSrc);
      
      // Add event listeners for debugging
      video.addEventListener('loadedmetadata', () => {
        console.log('Video metadata loaded');
      });

      video.addEventListener('loadeddata', () => {
        console.log('Video data loaded successfully');
        // Force play after data is loaded
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video playing successfully');
            })
            .catch(error => {
              console.error("Video play failed:", error);
            });
        }
      });
      
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        console.error('Video error details:', video.error);
      });

      // Set video source directly
      video.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        Your browser does not support the video tag.
      </video>
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground; 