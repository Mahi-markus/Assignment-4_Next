// app/hotel/[identifier]/page.tsx (using App Directory)
"use client";
import { useEffect, useState } from "react";

const HotelPage = ({ params }: { params: { identifier: string } }) => {
  const { identifier } = params; // Access dynamic parameter from params

  const [hotelData, setHotelData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!identifier) return; // Only fetch when identifier is available

    const fetchHotelData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/hotel/0af658ce-11ec-4ff7-9e85-3734d4c6a790`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        if (response.ok) {
          console.log("connection success");
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
      <h1>{hotelData.name}</h1>
      <p>{hotelData.description}</p>
      <p>{hotelData.location}</p>
    </div>
  );
};

export default HotelPage;
