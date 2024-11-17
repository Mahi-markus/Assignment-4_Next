"use client";

import React, { useState } from "react";

const images = [
  "/res1.jpg",
  "/res1.jpg",
  "/res1.jpg",
  "/res1.jpg",
  "/res1.jpg", // Adjust paths as needed
];

const Gallery: React.FC = () => {
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
    if (currentImageIndex < images.length - 1)
      setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <main className="p-4">
      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
        {/* Main Image */}
        <div
          className="cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <img
            src={images[0]}
            alt="Lakeside view"
            className="rounded-lg object-cover w-full h-80"
          />
        </div>
        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg object-cover w-full h-40"
              />
            </div>
          ))}
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
            <div className="absolute bottom-16 left-0 right-0 text-center text-white text-lg">
              Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required
            </div>
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
