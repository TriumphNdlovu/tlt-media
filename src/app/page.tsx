'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';

const HomePage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-center py-32 px-6 min-h-screen bg-gradient-to-r from-black to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/homescreen1.jpg" // Replace with a real image
            width={500}
            height={500}
            alt="Photographer Hero"
            className="w-full h-full object-cover opacity-70"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6 text-white"
          >
            Capture Life Through My Lens
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl mt-6 mb-8 font-light max-w-xl mx-auto text-gray-300"
          >
            Photography that tells a story. Simple. Bold. Timeless.
          </motion.p>
          <div className="flex justify-center gap-6">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                View Portfolio
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
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
          className="text-4xl md:text-6xl text-center mb-12 text-white"
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Link
                href={`/portfolio?section=${
                  item === 1 ? 'Graduation' : item === 2 ? 'Wedding' : 'videos'
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
                  <span className="text-white font-bold text-lg md:text-2xl uppercase">
                    {item === 1 ? 'Graduations 🎓' : item === 2 ? 'Weddings 💍' : 'Videos 📹'}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
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
    </div>
  );
};

export default HomePage;
