'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

const HomePage = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200);
    };

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <div
      className="bg-[url('/background-image.jpg')] bg-cover bg-center min-h-screen text-offwhite font-serif relative"
      style={{
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="flex justify-center items-center text-center py-24 sm:py-32 px-6 min-h-screen">
          <div className="text-center text-white">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest text-offwhite mb-6 text-yellow-400"
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
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    opacity: 0.9,
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
                >
                  View Portfolio
                </motion.button>
              </Link>
              <Link href="/book">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    opacity: 0.9,
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
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
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400 font-serif uppercase tracking-widest"
          >
            Featured Work.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-[80vw] mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  scale: 1.02,
                  translateY: -5,
                }}
                whileTap={{
                  scale: 0.98,
                  rotate: -3,
                }}
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              >
                <Link
                  href={`/portfolio?section=${
                    item === 1 ? 'Graduation' : item === 2 ? 'Wedding' : 'Videos'
                  }`}
                >
                  <motion.div
                    className="relative h-60 lg:h-72 w-full overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                  >
                    <Image
                      src={`/homescreen${item}.jpg`}
                      alt={`Portfolio ${item}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-yellow-400 group-hover:via-yellow-500/10 transition-all duration-500 flex items-end p-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-white group-hover:text-black transition-colors duration-300">
                      {item === 1
                        ? 'Graduations 🎓'
                        : item === 2
                        ? 'Weddings 💍'
                        : 'Videos 📹'}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 10,
                opacity: 0.9,
              }}
              whileTap={{
                scale: 0.95,
                rotate: -5,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
            >
              <Link href="/portfolio">View More...</Link>
            </motion.button>
          </div>
        </section>

        <section className="py-16 px-6 text-white">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={textVariants}
    className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-serif uppercase tracking-widest text-yellow-400"
  >
    About TLT Media
  </motion.h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="flex justify-center items-center">
      {/* Logo */}
      <Image
      src="/logo.png" // Replace with your actual logo path
        alt="TLT Media Logo"
        width={300} // Adjust size as needed
        height={300} // Adjust size as needed
        className="rounded-lg shadow-md"
      />
    </div>

    <div className="flex flex-col justify-center">
      <p className="text-lg text-white">
        “TLT Media is a dynamic photography and videography studio dedicated to capturing life's most precious moments. With a passion for 
        storytelling through the lens, we specialize in weddings, graduations, 
        corporate events, and creative video projects.”
      </p>
    </div>
  </div>
</section>

       <section className="py-16 px-6 bg-yellow-500 text-black">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={textVariants}
    className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-serif uppercase tracking-widest"
  >
    What Our Clients Say.
  </motion.h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((item) => (
      <motion.div
        key={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: item * 0.2 } },
        }}
        className="p-6 bg-white rounded-lg shadow-md"
      >
        <div className="flex items-center mb-4">
          <Image
            src={`/testimonials/user${item}.jpg`} // Replace with actual images or placeholders
            alt={`Client ${item}`}
            width={50}
            height={50}
            className="rounded-full border-2 border-yellow-400"
          />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Client {item}</h3>
            <p className="text-sm text-gray-600">Location {item}</p>
          </div>
        </div>
        <p className="text-base text-gray-800 mb-4">
          {item === 1
            ? "“TLT Media captured my wedding beautifully! The team was professional and friendly throughout. Highly recommend!”"
            : item === 2
            ? "“Absolutely loved their service. They made my graduation shoot a dream come true!”"
            : "“The video quality and editing were top-notch. They really tell stories through their work!”"}
        </p>
      </motion.div>
    ))}
  </div>

  {/* See More Reviews and Add Review Buttons */}
  <div className="text-center mt-12">
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="https://www.google.com/search?q=TLT+Media" // Replace with your actual "See More Reviews" URL
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-yellow-400 py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-gray-800 hover:text-yellow-300 transition-colors"
    >
      See More Reviews
    </a>
    <a
      href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID" // Replace with your actual "Add Review" URL
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-yellow-400 py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-grey-500 hover:text-yellow-300 hover:bg-gray-800 transition-colors"
    >
      Add a Review
    </a>
  </div>
</div>

</section>




        {/* Footer */}
        
      <Footer/>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 ${
          showScrollUp ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      >
      </div>
    </div>
  );
};

export default HomePage;
