import HotelPage from '@/app/hotel-details/[slug]/[identifier]/HotelPage';
import { notFound } from 'next/navigation';
import Custom404 from '@/app/components/custom_404/page';

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
  const { slug, identifier } = await params;

  try {
    // Fetch the hotel data from the API using the identifier
    const response = await fetch(`http://localhost:3001/api/hotel/${identifier}`, {
      next: { revalidate: 10 }, // Optional caching control
    });

    if (!response.ok) {
      throw new Error("Hotel not found");
    }

    const hotelData: Hotel = await response.json();

    // Validate that the slug in the URL matches the one in the fetched data
    if (hotelData.slug !== slug) {
      return <Custom404 message="The hotel id or slug does not exist." />; // This will trigger the default 404 page in Next.js
    }

    // If everything is okay, render the HotelPage component with the hotel data
    return <HotelPage hotelData={hotelData} />;
  } catch (error) {
    // If an error occurs (e.g., invalid identifier or network issues), show the 404 page
    return <Custom404 message="The hotel id does not exist." />;
  }
}
