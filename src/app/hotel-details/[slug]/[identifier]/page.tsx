import HotelPage from '@/app/hotel-details/[slug]/[identifier]/HotelPage';
import { notFound } from 'next/navigation';

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

export default async function Page({
  params,
}: {
  params: { slug: string; identifier: string };
}) {
  const { slug, identifier } = params;

  try {
    const response = await fetch(`http://localhost:3001/api/hotel/${identifier}`, {
      next: { revalidate: 10 }, // Optional caching control
    });

    if (!response.ok) {
      throw new Error("Invalid identifier");
    }

    const hotelData: Hotel = await response.json();

    // Validate that the slug matches the data
    if (hotelData.slug !== slug) {
      return (
        <div>
          <h1>Error</h1>
          <p>Provide an existing slug name or identifier.</p>
        </div>
      );
    }

    return <HotelPage hotelData={hotelData} />;
  } catch (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>Provide an existing slug name or identifier.</p>
      </div>
    );
  }
}
