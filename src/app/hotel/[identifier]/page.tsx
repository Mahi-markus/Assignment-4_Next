"use client";

import { useEffect, useState } from "react";

// Define the Room interface
interface Room {
  roomSlug: string;
  roomImage: string[];
  roomTitle: string;
  roomBedroomCount: number;
}

// Define the Hotel interface
interface Hotel {
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

// The params object is now a Promise and needs to be unwrapped
const HotelPage = ({ params }: { params: Promise<{ identifier: string }> }) => {
  const [paramsUnwrapped, setParamsUnwrapped] = useState<{ identifier: string } | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setParamsUnwrapped(resolvedParams);
    };

    unwrapParams();
  }, [params]);

  const { identifier } = paramsUnwrapped || {}; // Access the identifier once params are unwrapped

  const [hotelData, setHotelData] = useState<Hotel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!identifier) return;

    const fetchHotelData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/hotel/${identifier}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHotelData(data);
      } catch (err) {
        setError("Failed to load hotel data");
      }
    };

    fetchHotelData();
  }, [identifier]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!hotelData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{hotelData.title}</h1>
      <p>Description: {hotelData.description}</p>
      <p>Guest Count: {hotelData.guestCount}</p>
      <p>Bedroom Count: {hotelData.bedroomCount}</p>
      <p>Bathroom Count: {hotelData.bathroomCount}</p>
      <p>Amenities: {hotelData.amenities.join(", ")}</p>
      <p>Host Info: {hotelData.hostInfo}</p>
      <p>Address: {hotelData.address}</p>
      <p>Latitude: {hotelData.latitude}</p>
      <p>Longitude: {hotelData.longitude}</p>
      <p>Slug: {hotelData.slug}</p>
      <div>
        <h2>Images:</h2>
        {hotelData.images.map((image, index) => (
          <img key={index} src={image} alt={`Hotel Image ${index + 1}`} width="200" />
        ))}
      </div>
      <div>
        <h2>Rooms:</h2>
        {hotelData.rooms.map((room, index) => (
          <div key={index}>
            <h3>{room.roomTitle}</h3>
            <p>Room Slug: {room.roomSlug}</p>
            <p>Bedroom Count: {room.roomBedroomCount}</p>
            <div>
              <h4>Room Images:</h4>
              {room.roomImage.map((img, imgIndex) => (
                <img key={imgIndex} src={img} alt={`Room Image ${imgIndex + 1}`} width="200" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelPage;
