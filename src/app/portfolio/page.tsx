'use client';
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface Picture {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const categories = [
  {
    title: "Graduation",
    pictures: [
      {
        src: "/JFN.jpeg",
        alt: "Graduation Picture 1",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Graduation Picture 2",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Graduation Picture 3",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Graduation Picture 4",
        width: 300,
        height: 400,
      },
    ],
  },
  {
    title: "Wedding",
    pictures: [
      {
        src: "/JFN.jpeg",
        alt: "Wedding Picture 1",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Wedding Picture 2",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Wedding Picture 3",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Wedding Picture 4",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Wedding Picture 5",
        width: 300,
        height: 400,
      },
    ],
  },
  {
    title: "Videos",
    pictures: [
      {
        src: "/JFN.jpeg",
        alt: "Video Picture 1",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Video Picture 2",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Video Picture 3",
        width: 300,
        height: 400,
      },
      {
        src: "/JFN.jpeg",
        alt: "Video Picture 4",
        width: 300,
        height: 400,
      },
    ],
  }
];

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePicture, setActivePicture] = useState<Picture | null>(null);

  const openModal = (picture: Picture) => {
    setActivePicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePicture(null);
  };

  return (
    <section
  id="portfolio"
  className="bg-black text-white py-16 px-6 min-h-screen scroll-mt-16"
>
  <Navbar />
  <h2 className="text-4xl md:text-6xl font-serif uppercase text-center tracking-widest mb-12">
    Portfolio.
  </h2>

  {/* Render Categories Dynamically */}
  {categories.map((category, index) => (
    <div key={index} className="mb-12">
      <h3 className="text-2xl md:text-4xl font-serif uppercase tracking-widest mb-6">
        {category.title}.
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {category.pictures.map((picture, picIndex) => (
          <div
            key={picIndex}
            className="relative group cursor-pointer"
            onClick={() => openModal(picture)}
          >
            <Image
              src={picture.src}
              alt={picture.alt}
              width={picture.width}
              height={picture.height}
              className="object-contain group-hover:opacity-75 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
              <span className="text-white text-sm md:text-lg uppercase">
                Click to View
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}

  {/* Modal */}
  {isModalOpen && activePicture && (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-lg p-6 max-w-3xl w-full shadow-lg transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-800 transition-colors"
          onClick={closeModal}
        >
          X
        </button>
        <Image
          src={activePicture.src}
          alt={activePicture.alt}
          width={activePicture.width * 2}
          height={activePicture.height * 2}
          className="object-contain rounded-md max-h-[60vh] w-full transition-all"
        />
        <p className="text-center text-gray-600 mt-4">{activePicture.alt}</p>
      </div>
    </div>
  )}
</section>

  );
};

export default PortfolioSection;
