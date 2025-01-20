'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Picture } from '../model/Picture';
import { Category } from '../model/category';
import Loader from '../components/Loader';
import ImageModal from '../components/ImageModal';
import { FaArrowUp, FaBars, FaExpand, FaTh } from 'react-icons/fa';

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false); 
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState(0); // Store the scroll position

  const modalRef = useRef<HTMLDivElement>(null); // Reference to the modal element
  const router = useRouter();

  const openModal = (picture: Picture) => {
    setScrollPosition(window.scrollY); // Store current scroll position
    setActivePicture({ ...picture });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePicture(null);
    window.scrollTo(0, scrollPosition); // Restore the scroll position
  };

  const goToNextPicture = () => {
    if (!activePicture) return;
    const currentIndex = filteredPictures.findIndex(
      (picture) => picture.src === activePicture.src
    );
    const nextIndex = (currentIndex + 1) % filteredPictures.length;
    setActivePicture(filteredPictures[nextIndex]);
  };

  const goToPreviousPicture = () => {
    if (!activePicture) return;
    const currentIndex = filteredPictures.findIndex(
      (picture) => picture.src === activePicture.src
    );
    const prevIndex =
      (currentIndex - 1 + filteredPictures.length) % filteredPictures.length;
    setActivePicture(filteredPictures[prevIndex]);
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

  // Scroll the modal content into view when opened
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      setTimeout(() => {
        modalRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center', 
        });
      }, 150); 
    }
  }, [isModalOpen]);

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
            <div className="flex justify-between items-center w-full mb-6 px-4">
              <div className="flex flex-wrap md:flex-nowrap gap-2">
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
              <button
                onClick={() => setIsGridView(!isGridView)}
                className="bg-yellow-400 text-black p-1.5 rounded-md hover:bg-yellow-500 transition-all flex items-center justify-center w-8 h-8"
                aria-label={isGridView ? 'Switch to Column View' : 'Switch to Grid View'}
              >
                {isGridView ? <FaBars size={16} /> : <FaTh size={16} />}
              </button>
            </div>

            <div
              className={`${
                isGridView
                  ? 'columns-2 sm:columns-3 lg:columns-4 xl:columns-4'
                  : 'flex flex-col items-center'
              } gap-4 lg:w-[70%] w-full `}
            >
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
                    <p className="text-white font-serif text-lg">
                      <FaExpand className="text-5xl" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activePicture && (
          <ImageModal
            isOpen={isModalOpen}
            imageSrc={activePicture.src}
            imageAlt={activePicture.alt}
            onClose={closeModal}
            onNext={goToNextPicture}
            onPrev={goToPreviousPicture}
            ref={modalRef} 
          />
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
