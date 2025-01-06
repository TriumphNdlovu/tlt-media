'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Picture } from '../model/Picture';
import { Category } from '../model/category';
import Loader from '../components/Loader';
import ImageModal from '../components/ImageModal';
import { FaArrowUp } from 'react-icons/fa';

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false); 
  const [scrollPosition, setScrollPosition] = useState(0); // To store the scroll position

  const router = useRouter();

  const openModal = (picture: Picture) => {
    setScrollPosition(window.scrollY); // Store the current scroll position
    setActivePicture({ ...picture });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePicture(null);
    window.scrollTo(0, scrollPosition); // Restore the scroll position after closing modal
  };

  const filteredPictures =
    selectedCategory === 'All'
      ? categories.flatMap((category) => category.pictures)
      : categories.find((cat) => cat.title === selectedCategory)?.pictures || [];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/fetch-categories');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');

    if (section) {
      setSelectedCategory(section);
    }
  }, [router.refresh]);

  useEffect(() => {
    // Handle scroll position change based on modal state
    if (isModalOpen) {
      // Disable scrolling when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Ensure overflow is reset when the component unmounts or when the modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUpButton(true);
      } else {
        setShowScrollUpButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="text-offwhite font-serif">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center animate-fadeIn px-6 py-10 sm:px-10 sm:py-16 mt-[4rem] sm:mt-[5rem] bg-black">

        <h2 className="text-4xl md:text-6xl font-serif uppercase text-center tracking-widest mb-12 text-yellow-400">
          Portfolio.
        </h2>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 mb-4 px-4 overflow-x-scroll scrollbar-hide">
              {['All', ...categories.map((cat) => cat.title)].map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 text-sm md:text-base rounded-full transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 lg:w-[70%] w-full">
              {filteredPictures.map((picture, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg mb-6 group cursor-pointer "
                  onClick={() => openModal(picture)}
                >
                  <Image
                    src={picture.src}
                    alt={picture.alt}
                    width={picture.width}
                    height={picture.height}
                    className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-serif text-lg">View</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activePicture && (
          <div className="z-50 flex items-center justify-center text-center">
            <ImageModal
              isOpen={isModalOpen}
              imageSrc={activePicture.src}
              imageAlt={activePicture.alt}
              onClose={closeModal}
            />
          </div>
        )}
      </section>

      {showScrollUpButton && (
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

export default PortfolioSection;
