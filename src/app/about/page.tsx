'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <motion.section
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
      style={{
        backgroundImage: 'url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center px-8 py-32 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-serif text-yellow-400 uppercase mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me.
        </motion.h1>

        {/* Profile Picture Section */}
        <motion.div
          className="flex flex-col items-center mt-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div
            className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mb-6 border-4 border-yellow-400 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.png"
              alt="Photographer's Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
          ”I’m <span className="text-yellow-400">Hlogi</span>, a passionate photographer with over{' '}
          <span className="text-yellow-400">5 years</span> of experience capturing life’s most
          precious moments. From weddings to graduations and candid portraits, I strive to preserve
          emotions in every frame.”
        </p>

        <motion.button
          onClick={() => window.location.href = '/portfolio'}
          className="bg-yellow-400 text-black px-8 py-4 rounded-md uppercase font-bold shadow-lg hover:bg-yellow-500 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Photography Philosophy Section */}
      <motion.div
        className="text-center py-12 px-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-serif text-yellow-400 mb-6">
          My Photography Philosophy
        </h2>
        <motion.div
          className="max-w-3xl mx-auto p-6 rounded-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg sm:text-xl italic text-gray-300">
            “Photography is the art of frozen time. It’s the ability to store emotion and feelings
            within a frame.”
          </p>
        </motion.div>
      </motion.div>

      {/* Fun Fact Section */}
      <motion.div
        className="text-center py-12 px-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-serif text-yellow-400 mb-6">
          A Fun Fact About Me
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I started my photography journey with an old film camera my grandfather gifted me, and it
          ignited my love for capturing stories that transcend time.
        </p>
      </motion.div>

      {/* Contact and Social Media Links Section */}
      <motion.div
        className="text-center py-16 px-8 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h3 className="text-2xl sm:text-3xl font-serif text-yellow-400 mb-6">
          Contact Me
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          You can reach me via email or through my social media channels for inquiries and bookings.
        </p>

        {/* Contact Information */}
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Email: <a href="mailto:contact@hlogi.com" className="text-yellow-400 hover:underline">contact@hlogi.com</a>
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://www.instagram.com/hlogi_photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/hlogi.photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/hlogi_photo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-white"
          >
            X (formally Twitter)
          </a>
        </div>
      </motion.div>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          ↑
        </motion.button>
      )}
      <Footer />
    </motion.section>
  );
};

export default AboutPage;
