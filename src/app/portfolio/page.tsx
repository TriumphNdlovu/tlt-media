'use client';
import { useState } from "react";
import Image from "next/image";

interface Picture {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const GraduationPictures: Picture[] = [
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
];

const WeddingPictures: Picture[] = [
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
    <section id="portfolio" className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl md:text-6xl font-serif uppercase text-center tracking-widest mb-12">
        Portfolio.
      </h2>

      {/* Graduation Pictures */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-4xl font-serif uppercase tracking-widest mb-6">
          Graduation.
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {GraduationPictures.map((picture, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(picture)}
            >
              <Image
                src={picture.src}
                alt={picture.alt}
                width={picture.width}
                height={picture.height}
                className="object-contain group-hover:opacity-75 transition-opacity"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <span className="text-white text-sm md:text-lg uppercase">
                  Click to View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding Pictures */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-4xl font-serif uppercase tracking-widest mb-6">
          Wedding.
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {WeddingPictures.map((picture, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(picture)}
            >
              <Image
                src={picture.src}
                alt={picture.alt}
                width={picture.width}
                height={picture.height}
                className="object-contain group-hover:opacity-75 transition-opacity"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                <span className="text-white text-sm md:text-lg uppercase">
                  Click to View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activePicture && (
        <div
          className ="fixed inset-1 bg-black bg-opacity-80 h-[80vh] w-[80vw] flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Image */}
            <Image
              src={activePicture.src}
              alt={activePicture.alt}
              width={activePicture.width * 2}
              height={activePicture.height * 2}
              className="object-contain rounded-md max-h-[60vh] w-full"
            />
            {/* Caption */}
            <p className="text-center text-black mt-4">{activePicture.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
