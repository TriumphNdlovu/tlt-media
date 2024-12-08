'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowUp, FaEnvelope, FaGlobe, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
      <section className="flex flex-col items-center justify-center text-center animate-fadeIn bg-opacity-75 px-6 py-10 sm:px-10 sm:py-16">
        <div className="w-full max-w-3xl mx-auto text-center opacity-0 animate-fadeIn bg-black bg-opacity-80 rounded-sm">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-400 uppercase mb-6">
            About the Photographer.
          </h1>
          <div>
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center mt-4 mb-8 opacity-0 animate-fadeIn delay-200">
              <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden mb-6 border-4 border-yellow-400 shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.png" // Replace with photographer's profile picture
                  alt="Photographer's Profile Picture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 px-4">
              ”I’m <span className="text-yellow-400">Hlogi</span>, a passionate photographer with over <span className="text-yellow-400">5 years</span> of experience capturing life’s most
              precious moments. From weddings to graduations and candid portraits, I strive to preserve emotions in every frame.”
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-400 uppercase mb-6">
              Why Choose Me?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 px-4">
              With a proven track record of delivering stunning photography, I have helped countless clients capture their most memorable moments in vibrant, timeless images. My portfolio includes over 50 successful projects ranging from weddings and graduations to corporate events. Clients consistently praise my ability to exceed expectations by tailoring each session to their unique vision, resulting in photos that perfectly encapsulate their story. Partner with me, and you'll receive not only exceptional photos but also a professional and seamless experience from start to finish.
            </p>

          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16 sm:mt-20">
  
            <div className="text-center mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-yellow-400 uppercase mb-4">
              Need a Website? Let's Work Together.
            </h2>
            <div className='bg-black opacity-80'>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8 px-4">
                Please contact me if you need a website for your business or personal use. I specialize in creating responsive websites that are both visually appealing and user-friendly. Let's work together to bring your vision to life!  
              </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            {/* Email */}
            <a
              href="mailto:realtriumphndlovu@gmail.com"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaEnvelope className="text-xl" />
              realtriumphndlovu@gmail.com
            </a>

            {/* Whatsapp */}
            <a
              href="https://wa.me/+27827793863"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              +27827793863
            </a>

            {/* Personal Website */}
            <a
              href="https://triumph-portfolio-seven.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaGlobe className="text-xl" />
              triumphportfolio
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </div>
            
            </div>
            </div>
          </div>


      </section>

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 bg-yellow-400 text-black p-4 rounded-full cursor-pointer shadow-lg z-50 hover:bg-yellow-500 transition-all"
        >
          <FaArrowUp />
        </div>
      )}

      <Footer />
    </section>
  );
};

export default AboutPage;
