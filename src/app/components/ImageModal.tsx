import React, { useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md">
      {/* Modal Content */}
      <div className="relative p-4 max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-400 transition z-30"
        >
          &times;
        </button>
        {/* Image or Loader */}
        <div className="relative w-full max-h-full rounded-lg flex justify-center items-center">
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Loader />
            </div>
          )}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            loading='lazy'
            className={`rounded-lg object-contain transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              margin: '0 auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
