"use client";

import React, { useState, useEffect } from "react";

interface Room {
  roomSlug: string;
  roomImage: string[];
  roomTitle: string;
  roomBedroomCount: number;
}

interface Hotel {
  id: number;
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  hostInfo: string;
  address: string;
  latitude: number;
  longitude: number;
  slug: string;
  images: string[];
  rooms: Room[];
}

interface GalleryProps {
  identifier: string;
}

const Gallery: React.FC<GalleryProps> = ({ identifier }) => {
  const [hotelData, setHotelData] = useState<Hotel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<'main' | 'rooms'>('main');
  const [selectedRoom, setSelectedRoom] = useState<number>(0);

  useEffect(() => {
    // Only fetch data if identifier is available
    if (!identifier) {
      setError("No identifier provided.");
      return;
    }

    const fetchHotelData = async () => {
      try {
        console.log("Fetching data for identifier:", identifier);  // Debugging log
        const response = await fetch(`http://localhost:3001/api/hotel/${identifier}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched hotel data:", data);  // Debugging log

        if (data) {
          setHotelData(data);
        } else {
          setError("No hotel data found for this identifier.");
        }
      } catch (err) {
        console.error("Error fetching hotel data:", err);
        setError("Failed to load hotel data");
      }
    };

    fetchHotelData();
  }, [identifier]);

  // If an error occurred or hotel data is not available, return early
  if (error) return <div>Error: {error}</div>;
  if (!hotelData) return <div>Loading...</div>;

  const allImages = currentSection === 'main' 
    ? hotelData.images 
    : hotelData.rooms[selectedRoom]?.roomImage || [];

  const totalImages = allImages.length;

  const openLightbox = (index: number, section: 'main' | 'rooms' = 'main', roomIndex: number = 0) => {
    setCurrentImageIndex(index);
    setCurrentSection(section);
    setSelectedRoom(roomIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(curr => Math.max(curr - 1, 0)); // Prevent index from going below 0
    } else {
      setCurrentImageIndex(curr => Math.min(curr + 1, totalImages - 1)); // Prevent index from exceeding total images
    }
  };

  return (
    <div className="w-full">
      {/* Gallery Section */}
      <div className="gallery-section">
        <h1>{hotelData.title}</h1>
        <p>{hotelData.description}</p>

        <div className="image-thumbnails">
          {/* Show the images in the gallery */}
          {allImages.length > 0 ? (
            allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="thumbnail"
                onClick={() => openLightbox(index)}
              />
            ))
          ) : (
            <div>No images available for this section</div>
          )}
        </div>
      </div>

      {/* Lightbox for viewing images */}
      {isLightboxOpen && (
        <div className="lightbox">
          <button onClick={closeLightbox} className="close-lightbox">X</button>
          <div className="lightbox-content">
            <img
              src={allImages[currentImageIndex]}
              alt={`Lightbox Image ${currentImageIndex + 1}`}
              className="lightbox-image"
            />
            <button onClick={() => navigate('prev')} disabled={currentImageIndex === 0}>
              Previous
            </button>
            <button onClick={() => navigate('next')} disabled={currentImageIndex === totalImages - 1}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Optional: If you want to toggle between main gallery and rooms gallery */}
      <div className="room-selector">
        <h2>Select a Room to View More Images</h2>
        <ul>
          {hotelData.rooms.map((room, index) => (
            <li key={index} onClick={() => {
              setSelectedRoom(index);
              setCurrentSection('rooms');
            }}>
              {room.roomTitle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
