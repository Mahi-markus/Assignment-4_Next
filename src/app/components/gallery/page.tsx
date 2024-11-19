"use client";

import React, { useState } from "react";

interface GalleryProps {
  images: string[];
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const totalImages = images.length;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const prevImage = () => {
    if (currentImageIndex > 0) setCurrentImageIndex(currentImageIndex - 1);
  };

  const nextImage = () => {
    if (currentImageIndex < totalImages - 1)
      setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <main className="p-4 relative">
      {/* Gallery */}
      {totalImages > 0 ? (
        <div className="relative flex gap-2">
          {/* Main Image */}
          <div className="flex-shrink-0 w-[800px] h-[380px] cursor-pointer py-3 ">
            <img
              src={images[0]}
              alt="Main View"
              className="rounded-lg object-cover w-full h-full"
              onClick={() => openLightbox(0)}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex-grow overflow-x-auto py-3 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-2">
              {/* Display only first 4 thumbnails, arranged in 2x2 grid */}
              {images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openLightbox(index + 1)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="rounded-lg object-cover w-full h-44" // Reduced height for thumbnails
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Total Images Badge */}
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-lg flex items-center gap-2">
            <span>{totalImages}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div>No images available.</div>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative">
            {/* Lightbox Image */}
            <img
              src={images[currentImageIndex]}
              alt="Lightbox"
              className="max-w-full max-h-screen object-contain"
            />
            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-lg">
              {currentImageIndex + 1}/{totalImages}
            </div>
            {/* Title */}
            {title && (
              <div className="absolute bottom-16 left-0 right-0 text-center text-white text-lg">
                {title}
              </div>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
          >
            ×
          </button>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 flex gap-4">
            <button
              onClick={prevImage}
              className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center"
            >
              →
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
