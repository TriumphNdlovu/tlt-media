'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Show the scroll-up button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-offwhite font-serif">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-center py-24 sm:py-32 px-6 min-h-screen bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src="/homescreen1.jpg" // Replace with a real image
            width={500}
            height={500}
            alt="Photographer Hero"
            className="w-full h-full object-cover opacity-70" // Slightly muted image for retro feel
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest text-offwhite mb-6"
          >
            Capture Life Through My Lens
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl mt-6 mb-8 font-light max-w-xl mx-auto text-offwhite opacity-80"
          >
            Photography that tells a story. Simple. Bold. Timeless.
          </motion.p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
              >
                Book a Session
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6 bg-black">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400 font-serif uppercase tracking-widest"
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl cursor-pointer border border-yellow-500 shadow-lg">
              <Link
                href={`/portfolio?section=${
                  item === 1 ? 'Graduation' : item === 2 ? 'Wedding' : 'Videos'
                }`}
              >
                <Image
                  src={`/homescreen${item}.jpg`}
                  alt={`Portfolio ${item}`}
                  width={500}
                  height={500}
                  className="w-full h-72 object-cover group-hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 hover:text-4xl transition-opacity z-20 flex justify-center items-center">
                  <span className="text-white font-bold text-lg md:text-2xl uppercase tracking-widest">
                    {item === 1 ? 'Graduations 🎓' : item === 2 ? 'Weddings 💍' : 'Videos 📹'}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
            >
              View more..
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p>&copy; 2024 TLT Media. All rights reserved.</p>
      </footer>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 text-black p-4 rounded-full shadow-xl hover:bg-yellow-500 transition-colors
            z-50"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
