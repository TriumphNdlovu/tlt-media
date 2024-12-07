'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <section
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
      style={{
        backgroundImage: 'url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center  text-center  animate-fadeIn  bg-opacity-75 px-10 py-10">
      <div className="flex flex-col items-center justify-center text-center opacity-0 animate-fadeIn w-full">
        <h1 className="text-4xl sm:text-5xl font-serif text-yellow-400 uppercase mb-6">
          About.
        </h1>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mt-4 mb-8 opacity-0 animate-fadeIn delay-200">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mb-6 border-4 border-yellow-400 shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Photographer's Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
          ”I’m <span className="text-yellow-400">Hlogi</span>, a passionate photographer with over{' '}
          <span className="text-yellow-400">5 years</span> of experience capturing life’s most
          precious moments. From weddings to graduations and candid portraits, I strive to preserve
          emotions in every frame.”
        </p>

        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => window.location.href = '/portfolio'}
            className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
          >
            View my Work
          </button>
        </div>

        {/* Services Section */}
        </div>

      </section>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
        >
          ↑
        </button>
      )}
      <Footer />
    </section>
  );
};

export default AboutPage;
