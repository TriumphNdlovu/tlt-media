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

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      <Footer />
    </>
  );
};

export default PortfolioSection;
