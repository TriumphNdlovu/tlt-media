import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Loader from './Loader';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal = forwardRef(
  (
    { isOpen, imageSrc, imageAlt, onClose, onNext, onPrev }: ImageModalProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true); 

    useEffect(() => {
      if (isOpen) {
        
        setScrollPosition(window.scrollY);
      }
    }, [isOpen]);

    const handleImageLoad = () => {
      setIsLoading(false); 
    };

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
        style={{
          top: `${scrollPosition}px`,
          left: 0,
        }}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            <FaTimes size={20} />
          </button>

          {/* Loader */}
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <Loader />
            </div>
          ) : null}

          {/* Image */}
          <img
            src={imageSrc}
            alt={imageAlt}
            onLoad={handleImageLoad} 
            className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`} 
          />

          <button
            onClick={onPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={onNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }
);

ImageModal.displayName = 'ImageModal';

export default ImageModal;
