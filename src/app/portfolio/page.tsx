'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
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
  const [showScrollUpButton, setShowScrollUpButton] = useState(false); // State to track scroll position

  const router = useRouter(); // Initialize useRouter

  const openModal = (picture: Picture) => {
    setActivePicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePicture(null);
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
    // Get query parameters
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');

    // Update selected category if the section exists
    if (section) {
      setSelectedCategory(section);
    }
  }, [router.refresh]); // Dependency to re-run when query parameters change

  // Handle scroll position to show/hide the "Scroll Up" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUpButton(true); // Show button when scrolled down 300px
      } else {
        setShowScrollUpButton(false); // Hide button when scrolled to top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-16 px-6 min-h-screen">
        <h2 className="text-4xl md:text-6xl font-serif uppercase text-center tracking-widest mb-12 text-yellow-400">
          Portfolio.
        </h2>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Filter Buttons */}
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

            {/* Masonry Layout with Tailwind Columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
              {filteredPictures.map((picture, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg mb-6 group cursor-pointer"
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

        {/* Image Modal */}
        {activePicture && (
          <ImageModal
            isOpen={isModalOpen}
            imageSrc={activePicture.src}
            imageAlt={activePicture.alt}
            onClose={closeModal}
          />
        )}
      </section>

      {/* Scroll Up Button */}
      {showScrollUpButton && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 bg-yellow-400 text-black p-4 rounded-full cursor-pointer shadow-lg z-50 hover:bg-yellow-500 transition-all"
        >
          <FaArrowUp />
        </div>
      )}

      <Footer />
    </>
  );
};

export default PortfolioSection;
