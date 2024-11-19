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

export default function HotelPage({ hotelData }: { hotelData?: Hotel }) {
  const staticData: Hotel = {
    title: "Sample Hotel",
    description:
      "Welcome to our static hotel page. This is placeholder content for users without valid data.",
    guestCount: 4,
    bedroomCount: 2,
    bathroomCount: 1,
    amenities: ["Free WiFi", "Parking", "Air Conditioning", "Swimming Pool"],
    hostInfo: "Host: Static Host",
    address: "123 Placeholder Avenue, Imaginary City",
    latitude: 0,
    longitude: 0,
    slug: "static-hotel",
    images: ["/res1.jpg",
             "/res1.jpg",
             "/res1.jpg",
             "/res1.jpg",
             "/res1.jpg",
             "/res1.jpg",

    ], // Replace with the path to your placeholder image
    rooms: [
      {
        roomSlug: "static-room",
        roomImage: [], // Replace with placeholder image path
        roomTitle: "Static Room",
        roomBedroomCount: 1,
      },
    ],
  };

  const isStatic = !hotelData;

  const dataToRender = isStatic ? staticData : hotelData;

  return (
    <div>
      <Navbar />
      <div className="px-20">
        <Subheader />
        <Gallery images={dataToRender.images} title={dataToRender.title} />
        <Tabs />
        <PropertyDetails
          title={dataToRender.title}
          rating={isStatic ? 4.0 : 4.5} // Static rating for placeholder
          reviewsCount={isStatic ? 10 : 20} // Static review count for placeholder
          reviewLink="#"
          bedrooms={dataToRender.bedroomCount}
          bathrooms={dataToRender.bathroomCount}
          sleeps={dataToRender.guestCount}
          size={isStatic ? "1000 sq ft" : "2000 sq ft"} // Static size for placeholder
          amenities={dataToRender.amenities.map((amenity) => ({
            icon: "fas fa-check", // Replace with appropriate icons if needed
            label: amenity,
          }))}
        />
        <ExploreArea />
        <RoomsSection rooms={dataToRender.rooms} />
      </div>
    </div>
  );
}
