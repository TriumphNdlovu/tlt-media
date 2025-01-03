'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowUp, FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

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
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-serif"
      style={{
        backgroundImage: 'url(/background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 sm:px-10 sm:py-16 mt-[4rem] sm:mt-[5rem] bg-opacity-75 animate-fadeIn">
        <div className="w-full max-w-3xl mx-auto text-center opacity-0 animate-fadeIn bg-black bg-opacity-80 rounded-sm">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-400 uppercase mb-6">
            About the Photographer.
          </h1>

          {/* Profile Picture Section */}
          <div className="flex flex-col items-center mt-4 mb-8 opacity-0 animate-fadeIn delay-200">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden mb-6 border-4 border-yellow-400 shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/me.jpg" // Replace with photographer's profile picture
                alt="Photographer's Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 px-4">
            "I’m <span className="text-yellow-400">Hlogi</span>, a passionate photographer with over <span className="text-yellow-400">5 years</span> of experience capturing life’s most precious moments. From weddings to graduations and candid portraits, I strive to preserve emotions in every frame."
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-400 uppercase mb-6">
            Why Choose Me?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 px-4">
            With a proven track record of delivering stunning photography, I have helped countless clients capture their most memorable moments in vibrant, timeless images. My portfolio includes over 50 successful projects ranging from weddings and graduations to corporate events. Clients consistently praise my ability to exceed expectations by tailoring each session to their unique vision, resulting in photos that perfectly encapsulate their story.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-400 uppercase mb-6">
            How To Contact Me?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6 px-4">
            I am available for bookings and inquiries. Please feel free to reach out to me via WhatsApp, phone or Social Media below and I will respond promptly. I look forward to hearing from you and discussing how we can work together to create lasting memories. You can use the <Link href="/book"><span className="text-yellow-400 underline">Book</span></Link> page to book a session with me.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:lehlogonologiven8@gmail.com"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaEnvelope className="text-xl" />
              lehlogonologiven8@gmail.com
            </a>

            <a
              href="https://wa.me/+27799542456"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span>+27 79 954 2456</span>
            </a>

            <a
              href="https://www.instagram.com/hlogi_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/hlogi_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.tiktok.com/@hlogi_photography"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaTiktok className="text-xl" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mt-16 sm:mt-20 bg-black bg-opacity-90 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-purple-400 uppercase mb-4">
            Need a Website? Let's Work Together.
          </h2>
          <p className="text-sm sm:text-lg text-white leading-relaxed mb-8">
            Please contact me if you need a website for your business or personal use. Let's work together to bring your vision to life!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="mailto:realtriumphndlovu@gmail.com"
              className="flex items-center gap-2 text-purple-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaEnvelope className="text-xl" />
              <span>realtriumphndlovu@gmail.com</span>
            </a>

            <a
              href="https://wa.me/+27827793863"
              className="flex items-center gap-2 text-purple-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span>+27 82 779 3863</span>
            </a>

            <a
              href="https://triumph-portfolio-seven.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaGlobe className="text-xl" />
              <span>Personal Website</span>
            </a>

            <a
              href="https://www.linkedin.com/in/triumph-ndlovu-425b73274/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 text-lg font-semibold hover:underline transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
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
