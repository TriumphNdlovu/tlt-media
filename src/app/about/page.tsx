'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 relative">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif uppercase tracking-widest mb-4">
          About Me.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 font-light">
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white">
            Capturing moments. Telling stories. Creating timeless art.
          </span>
        </p>
      </div>

      {/* Content Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Photographer's Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Image
            src="/homescreen1.jpg" // Replace with your photographer's image
            alt="Photographer"
            fill
            className="object-cover rounded-md hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Bio Section */}
        <div className="bg-gray-800 text-gray-200 p-4 sm:p-6 rounded-md shadow-md terminal-text">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif uppercase mb-4">
            Hi, I’m <span className="text-yellow-400">Hlogi</span>.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            With over <span className="text-yellow-400">5 years</span> of experience, I’ve
            dedicated my life to capturing the moments that matter. Whether it’s the magic of
            weddings, the joy of graduations, or the raw emotions of candid moments, my goal is to
            turn fleeting instances into timeless memories.
          </p>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            Inspired by the retro charm of analog photography and the clean aesthetics of
            minimalism, I bring a unique touch to every project. Let’s create something
            unforgettable together.
          </p>
        </div>
      </div>

      {/* Philosophy or Fun Fact */}
      <div className="mt-12 sm:mt-16 text-center">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-serif uppercase mb-4">
          Photography Philosophy.
        </h3>
        <div className="bg-gray-900 text-yellow-300 p-4 sm:p-6 rounded-md max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg italic">
            “Photography is the art of frozen time. It’s the ability to store emotion and feelings
            within a frame.”
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 sm:mt-16 text-center">
        <button
          onClick={() => window.location.href = '#portfolio'}
          className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md text-sm sm:text-lg uppercase font-bold shadow-lg hover:bg-yellow-500 transition-colors"
        >
          View My Work
        </button>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default AboutPage;
