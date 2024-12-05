'use client';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css'; // Import Masonry
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Picture } from '../model/Picture';
import { Category } from '../model/category';
import Loader from '../components/Loader';
import ImageModal from '../components/ImageModal'; // Import ImageModal

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const breakpointColumns = {
    default: 4, // Default columns
    1024: 3,    // 3 columns for medium screens
    768: 2,     // 2 columns for small screens
    480: 1,     // 1 column for extra small screens
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
            <div className="flex justify-center gap-4 mb-8">
              {['All', ...categories.map((cat) => cat.title)].map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === cat ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Layout */}
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex gap-4"
              columnClassName="masonry-grid_column"
            >
              {filteredPictures.map((picture, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
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
            </Masonry>
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
