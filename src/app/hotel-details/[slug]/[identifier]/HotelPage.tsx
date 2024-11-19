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

interface hostInfo {
  name: string;
}

export default function HotelPage({ hotelData }: { hotelData: Hotel }) {
  return (
    <div>
      <Navbar />
      <div className="px-5 sm:px-10 lg:px-20">
        {/* Subheader Section */}
        <Subheader />

        {/* Gallery Section */}
        <Gallery images={hotelData.images} title={hotelData.title} />

        {/* Tabs Section */}
        <Tabs />

        {/* Property Details Section */}
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

        {/* Explore Area Section */}
        <div className="my-10">
          <ExploreArea
            longitude={hotelData.longitude}
            latitude={hotelData.latitude}
          />
        </div>

        {/* Rooms Section */}
        <RoomsSection rooms={hotelData.rooms} />

        {/* Property Details 2 Section */}
        <div className="my-10">
          <PropertyDetails2
            title={hotelData.title}
            rating={4.5} // Placeholder rating
            reviewsCount={20} // Placeholder review count
            reviewLink="#"
            bedrooms={hotelData.bedroomCount}
            bathrooms={hotelData.bathroomCount}
            sleeps={hotelData.guestCount}
            guestCount={hotelData.guestCount}
            description={hotelData.description}
            size="2000 sq ft" // Replace with actual size data
            amenities={hotelData.amenities.map((amenity) => ({
              icon: "fas fa-check", // Replace with appropriate icons if needed
              label: amenity,
            }))}
          />
        </div>

        {/* Property Manager Section */}
        <div className="my-10">
          <PropertyManager
            hostInfo={hotelData.hostInfo}
            title={hotelData.title}
            rating={4.5} // Placeholder rating
            reviewsCount={20} // Placeholder review count
            reviewLink="#"
            bedrooms={hotelData.bedroomCount}
            bathrooms={hotelData.bathroomCount}
            sleeps={hotelData.guestCount}
            guestCount={hotelData.guestCount}
            description={hotelData.description}
            size="2000 sq ft" // Replace with actual size data
            amenities={hotelData.amenities.map((amenity) => ({
              icon: "fas fa-check", // Replace with appropriate icons if needed
              label: amenity,
            }))}
          />
        </div>

        {/* Rental Details Section */}
        <div className="my-10">
          <RentalDetails hostInfo={hotelData.hostInfo} />
        </div>
      </div>
    </div>
  );
}
