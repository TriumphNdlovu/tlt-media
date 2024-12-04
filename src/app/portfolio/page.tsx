'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Picture } from '../model/Picture';
import { Category } from '../model/category';


useEffect(() => {
    // Make the GET request to the Next.js API route
    
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/fetch-categories'); // Assuming your API route is at /api/images
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        console.log(data)
         // Set the response data in the state
      } catch (err) {
        console.log(err); // Handle error
      }
    };

    fetchImages();
  }, []);


const categories: Category[] = [
  {
    title: 'Graduation',
    pictures: [
      { src: '/JFN.jpeg', alt: 'Graduation Picture 1', width: 300, height: 400 },
      { src: '/JFN.jpeg', alt: 'Graduation Picture 2', width: 300, height: 400 },
    ],
  },
  {
    title: 'Wedding',
    pictures: [
      { src: '/JFN.jpeg', alt: 'Wedding Picture 1', width: 300, height: 400 },
      { src: '/JFN.jpeg', alt: 'Wedding Picture 2', width: 300, height: 400 },
    ],
  },
  {
    title: 'Videos',
    pictures: [
      { src: '/JFN.jpeg', alt: 'Video Picture 1', width: 300, height: 400 },
      { src: '/JFN.jpeg', alt: 'Video Picture 2', width: 300, height: 400 },
    ],
  },
];

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isVisible, setIsVisible] = useState(false);

  const openModal = (picture: Picture) => {
    setActivePicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePicture(null);
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredPictures =
    selectedCategory === 'All'
      ? categories.flatMap((category) => category.pictures)
      : categories.find((cat) => cat.title === selectedCategory)?.pictures || [];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className="bg-black text-white py-16 px-6 min-h-screen scroll-mt-16"
        style={{
          backgroundImage: 'url(/background-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
        }}
      >
        <Navbar />
        <motion.h2
          className="text-4xl md:text-6xl font-serif uppercase text-center tracking-widest mb-12 text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio.
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {['All', ...categories.map((cat) => cat.title)].map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'
              } transition-all hover:scale-105`}
              whileHover={{ scale: 1.1 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {filteredPictures.map((picture, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openModal(picture)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={picture.src}
                alt={picture.alt}
                width={200}
                height={150}
                className="w-full h-auto object-cover transition-all group-hover:brightness-75"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center"
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-serif text-lg tracking-wide">View</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && activePicture && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative bg-white rounded-lg p-6 max-w-6xl w-[90%] lg:w-[70%] shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-black text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-800"
                  onClick={closeModal}
                >
                  X
                </button>
                <Image
                  src={activePicture.src}
                  alt={activePicture.alt}
                  width={activePicture.width * 3}
                  height={activePicture.height * 3}
                  className="object-contain max-h-[80vh] mx-auto rounded-md"
                />
                <p className="text-center text-gray-600 mt-4">{activePicture.alt}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Up Button */}
        {isVisible && (
          <motion.button
            onClick={scrollUp}
            className="fixed bottom-10 right-10 bg-yellow-400 text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            ↑
          </motion.button>
        )}
      </section>
      <Footer />
    </>
  );
};

export default PortfolioSection;
