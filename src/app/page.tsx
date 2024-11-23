'use client'
import Link from 'next/link';
import Navbar from './components/Navbar';
import Head from "next/head";

const HomePage = () => {
  
  return (
    <>
      <Head>
        <title>TLT Media | Capturing Life in Black & White</title>
        <meta name="description" content="Photography that tells a story. Simple. Bold. Timeless." />
      </Head>

      <div className="bg-black text-white">
        {/* Nav Bar */}
        <Navbar/>

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
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6 animate__fadeIn">
              Capture Life in Black & White
            </h1>
            <p className="text-xl mt-6 mb-8 font-light max-w-xl mx-auto">
              Photography that tells a story. Simple. Bold. Timeless.
            </p>
            <button className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold">
              <Link href="/portfolio">
                View Portfolio
              </Link>
            </button>
            <button className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold ml-1">
              <Link href="/contact">
                Book a Season
              </Link>
            </button>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-16 px-6">
          <h2 className="text-4xl md:text-6xl text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group relative">
              <img
                src="/homescreen2.jpg" // Replace with real image
                alt="Portfolio 1"
                className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div className="group relative">
              <img
                src="/JFN.jpeg" // Replace with real image
                alt="Portfolio 2"
                className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div className="group relative">
              <img
                src="/homescreen1.jpg" // Replace with real image
                alt="Portfolio 3"
                className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold cursor-pointer">
              <Link href="/portfolio">
                View All Work
              </Link>
            </button>
          </div>
        </section>

        {/* About Section (Optional) */}
        <section className="py-16 px-6 bg-gray-800">
          <h2 className="text-4xl md:text-6xl text-center text-white mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-6">
              I'm a photographer passionate about capturing moments in black and white. My work focuses on the beauty of simplicity and the timeless nature of life’s special moments. I strive to tell stories through my images that resonate long after the moment has passed.
            </p>
            <button className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold cursor-pointer">
              <Link href="/about">
                Learn More
              </Link>
            </button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 bg-gray-800">
          <h2 className="text-4xl md:text-6xl text-center text-white mb-8">What Clients Say</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-6">"The black and white photography is so captivating, it tells a story in every shot!"</p>
            <p className="text-lg">- Jane Doe, Client</p>
          </div>
        </section>

        {/* Contact CTA in Footer */}
        <footer className="py-8 bg-black text-white text-center">
          <p>&copy; 2024 TLT Media. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <button className="mt-6 bg-white text-black py-3 px-8 rounded-full text-lg font-semibold cursor-pointer">
            <Link href="/contact">Book a Session</Link>
          </button>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
