"use client";

import { useEffect, useState } from "react";
import Gallery from "../gallery/page";
import Navbar from '@/app/components/navbar/page';
import Tabs from '@/app/components/tabs/page';
import Subheader from '@/app/components/sub-header/page';
import PropertyDetails from '@/app/components/propertyDetails/page' 


interface Room {
  roomSlug: string;
  roomImage: string[];
  roomTitle: string;
  roomBedroomCount: number;
}

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

const HotelPage = ({ params }: { params: Promise<{ identifier: string }> }) => {
  const [paramsUnwrapped, setParamsUnwrapped] = useState<{ identifier: string } | null>(null);
  const [hotelData, setHotelData] = useState<Hotel | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setParamsUnwrapped(resolvedParams);
    };

    unwrapParams();
  }, [params]);

  const { identifier } = paramsUnwrapped || {};

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
      <Navbar />
     
    <div className=" px-20">
      <Subheader />
     
  
      <Gallery images={hotelData.images} title={hotelData.title} />
      <Tabs />
      <PropertyDetails
          title={hotelData.title}
          rating={4.5} // Placeholder rating; replace if real rating data is available
          reviewsCount={20} // Placeholder review count
          reviewLink="#"
          bedrooms={hotelData.bedroomCount}
          bathrooms={hotelData.bathroomCount}
          sleeps={hotelData.guestCount}
          size="2000 sq ft" // Replace with actual size data if available
          amenities={hotelData.amenities.map((amenity) => ({
            icon: "fas fa-check", // Replace with appropriate icons if needed
            label: amenity,
          }))}
        />
        
    </div>

    </div>
  );
};

export default HotelPage;
