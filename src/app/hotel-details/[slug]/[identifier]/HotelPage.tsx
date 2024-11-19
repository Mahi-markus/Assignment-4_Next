"use client";

import Gallery from '@/app/components/gallery/page';
import Navbar from '@/app/components/navbar/page';
import Tabs from '@/app/components/tabs/page';
import Subheader from '@/app/components/sub-header/page';
import PropertyDetails from '@/app/components/propertyDetails/page';
import ExploreArea from '@/app/components/explore_area/page';
import RoomsSection from '@/app/components/room_section/page';

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

export default function HotelPage({ hotelData }: { hotelData: Hotel }) {
  return (
    <div>
      <Navbar />
      <div className="px-20">
        <Subheader />
        <Gallery images={hotelData.images} title={hotelData.title} />
        <Tabs />
        <PropertyDetails
          title={hotelData.title}
          rating={4.5} // Placeholder rating
          reviewsCount={20} // Placeholder review count
          reviewLink="#"
          bedrooms={hotelData.bedroomCount}
          bathrooms={hotelData.bathroomCount}
          sleeps={hotelData.guestCount}
          size="2000 sq ft" // Replace with actual size data
          amenities={hotelData.amenities.map((amenity) => ({
            icon: "fas fa-check", // Replace with appropriate icons if needed
            label: amenity,
          }))}
        />
        <ExploreArea />
        <RoomsSection rooms={hotelData.rooms} />
      </div>
    </div>
  );
}
