'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const HomePage = () => {

  const [showScrollUp, setShowScrollUp] = useState(false);

  const review = [
    {
      id: 1,
      name: 'Evidence Nomcebo',
      rating: 5,
      review:
        '“From our very first interaction on the 12 May 2024, it was clear that TLT Media is not just a photographer, but an artist dedicated to their craft. They took the time to understand our vision and what we were looking for, which made us feel comfortable and excited for the shoot. I would definitely do a shoot with you again best service ever!!!”',
    },
    {
      id: 2,
      name: 'Kakanyo M',
      rating: 5,
      review:
      '“TLT media did my graduation shoot, the photos are amazing, they were the best part of my day. He also made a mini video of my grad it was exceptional 👌 hes delivers quality yet reasonable. You wont regret choosing TLT media”',
    },
    {
      id: 3,
      name: 'Mmtumisho Mphahlele',
      rating: 5,
      review:
      '“I WOULD RECOMMEND TLT_MEDIA, I HAD A WONDERFUL EXPERIENCE WITH HIM, I GOT EXCELLENT SERVICE FROM HIM.”',
    },
    {
      id: 4,
      name: 'Progee Real king',
      rating: 5,
      review:
        '“Best music video Quality an directing skills 🔥🔥❤️”',
    },
    {
      id: 5,
      name: 'Triumph Ndlovu',
      rating: 5,
      review:
        '“Wonderful service I highly recommend 🔥”',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getStarRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;
  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className="text-yellow-400" />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FaStarHalfAlt key={`half-${index}`} className="text-yellow-400" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={`empty-${index}`} className="text-yellow-400" />
      ))}
    </>
  );
};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-widest text-offwhite mb-6 text-yellow-400">
              Capture Life Through My Lens
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-6 mb-8 font-light max-w-xl mx-auto text-offwhite opacity-80">
              Photography that tells a story. Simple. Bold. Timeless.
            </p>

            <div className="flex justify-center gap-4 sm:gap-6">
              <Link href="/portfolio">
                <button
                  className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
                >
                  View Portfolio
                </button>
              </Link>
              <Link href="/book">
                <button
                  className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
                >
                  Book a Session
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400 font-serif uppercase tracking-widest">
            Featured Work.
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 w-[80vw] mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative group rounded-lg overflow-hidden cursor-pointer mb-6"
              >
                <Link
                  href={`/portfolio?section=${
                    item === 1
                      ? 'Graduation'
                      : item === 2
                      ? 'Wedding'
                      : item === 3
                      ? 'Matric dance'
                      : 'Brand shoot'
                  }`}
                >
                  <div className="relative h-60 lg:h-72 w-full overflow-hidden">
                    <Image
                      src={`/homescreen${item}.jpg`}
                      alt={`Portfolio ${item}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-yellow-400 group-hover:via-yellow-500/10 transition-all duration-500 flex items-end p-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-white group-hover:text-black transition-colors duration-300">
                      {item === 1
                        ? 'Graduations 🎓'
                        : item === 2
                        ? 'Weddings 💍'
                        : item === 3
                        ? 'Matric Dance 💃'
                        : 'brand Shoot 👕'}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <button
              className="bg-yellow-400 text-black py-3 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-yellow-500 transition-colors"
            >
              <Link href="/portfolio">View More...</Link>
            </button>
          </div>
        </section>

        <section className="py-16 px-6 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-serif uppercase tracking-widest text-yellow-400">
            About TLT Media
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              {/* Logo */}
              <Image
              src="/logo.png" 
                alt="TLT Media Logo"
                width={400} 
                height={400} 
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-serif uppercase tracking-widest">
            What Our Clients Say.
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {review.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={`/user.png`}
                    alt={`${item.name}`}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <div className="text-yellow-400 flex-row flex">{getStarRating(item.rating)}</div>
                  </div>
                </div>

                <p className="text-sm">{item.review}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      {/* Scroll to top button */}
      {showScrollUp && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 bg-yellow-400 text-black p-4 rounded-full cursor-pointer shadow-lg"
        >
          ↑
        </div>
      )}
    </div>
  );
};

export default HomePage;
