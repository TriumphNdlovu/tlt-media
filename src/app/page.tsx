'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';

const HomePage = () => {
  // Variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-center py-32 px-6 min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/homescreen1.jpg" // Replace with a real image
            alt="Photographer Hero"
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6"
          >
            Capture Life in Black & White
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl mt-6 mb-8 font-light max-w-xl mx-auto"
          >
            Photography that tells a story. Simple. Bold. Timeless.
          </motion.p>
          <div className="flex justify-center gap-4">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold"
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold"
              >
                Book a Session
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl md:text-6xl text-center mb-12"
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative">
              <img
                src={`/homescreen${item}.jpg`} // Replace with real image paths
                alt={`Portfolio ${item}`}
                className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold"
            >
              View All Work
            </motion.button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-800">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl md:text-6xl text-center text-white mb-8"
        >
          About Me
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-xl mb-6 max-w-3xl mx-auto text-center"
        >
          I'm a photographer passionate about capturing moments in black and
          white. My work focuses on the beauty of simplicity and the timeless
          nature of life’s special moments.
        </motion.p>
        <div className="text-center">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-800">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl md:text-6xl text-center text-white mb-8"
        >
          What Clients Say
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-xl mb-6 max-w-2xl mx-auto text-center"
        >
          "The black and white photography is so captivating, it tells a story
          in every shot!"
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-lg text-center"
        >
          - Jane Doe, Client
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <p>&copy; 2024 TLT Media. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
