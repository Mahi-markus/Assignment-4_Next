"use client";

import Gallery from '@/app/components/gallery/page';
import Navbar from '@/app/components/navbar/page';
import Tabs from '@/app/components/tabs/page';
import Subheader from '@/app/components/sub-header/page';
import PropertyDetails from '@/app/components/propertyDetails/page';
import ExploreArea from '@/app/components/explore_area/page';
import RoomsSection from '@/app/components/room_section/page';
import PropertyDetails2 from '@/app/components/property_details_2/page';
import PropertyManager from '@/app/components/property_manager/page';
import RentalDetails from '@/app/components/rental_details/page';

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
    hostInfo: "Static Host",
    address: "123 Placeholder Avenue, Imaginary City",
    latitude: 34.56,
    longitude: 45.54,
    slug: "static-hotel",
    images: [
      "/res1.jpg",
      "/res1.jpg",
      "/res1.jpg",
      "/res1.jpg",
      "/res1.jpg",
      "/res1.jpg",
    ],
    rooms: [
      {
        roomSlug: "static-room",
        roomImage: [],
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
      <div className="px-4 sm:px-6 lg:px-20">
        <Subheader />
        <div className="mb-8">
          <Gallery images={dataToRender.images} title={dataToRender.title} />
        </div>
        <div className="mb-8">
          <Tabs />
        </div>
        <div className="mb-8">
          <PropertyDetails
            title={dataToRender.title}
            rating={4.5}
            reviewsCount={20}
            reviewLink="#"
            bedrooms={dataToRender.bedroomCount}
            bathrooms={dataToRender.bathroomCount}
            sleeps={dataToRender.guestCount}
            size="2000 sq ft"
            amenities={dataToRender.amenities.map((amenity) => ({
              icon: "fas fa-check",
              label: amenity,
            }))}
          />
        </div>
        <div className="mb-8">
          <ExploreArea
            longitude={dataToRender.longitude}
            latitude={dataToRender.latitude}
          />
        </div>
        <div className="mb-8">
          <RoomsSection rooms={dataToRender.rooms} />
        </div>
        <div className="mb-8">
          <PropertyDetails2
            title={dataToRender.title}
            rating={4.5}
            reviewsCount={20}
            reviewLink="#"
            bedrooms={dataToRender.bedroomCount}
            bathrooms={dataToRender.bathroomCount}
            sleeps={dataToRender.guestCount}
            guestCount={dataToRender.guestCount}
            description={dataToRender.description}
            size="2000 sq ft"
            amenities={dataToRender.amenities.map((amenity) => ({
              icon: "fas fa-check",
              label: amenity,
            }))}
          />
        </div>
        <div className="mb-8">
          <PropertyManager
            hostInfo={{ name: dataToRender.hostInfo }}
            title={dataToRender.title}
            rating={4.5}
            reviewsCount={20}
            reviewLink="#"
            bedrooms={dataToRender.bedroomCount}
            bathrooms={dataToRender.bathroomCount}
            sleeps={dataToRender.guestCount}
            guestCount={dataToRender.guestCount}
            description={dataToRender.description}
            size="2000 sq ft"
            amenities={dataToRender.amenities.map((amenity) => ({
              icon: "fas fa-check",
              label: amenity,
            }))}
          />
        </div>
        <div className="mb-8">
          <RentalDetails hostInfo={{ name: dataToRender.hostInfo }} />
        </div>
      </div>
    </div>
  );
}

