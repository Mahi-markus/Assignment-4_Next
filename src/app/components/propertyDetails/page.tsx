import React from "react";
import BookingCard from "../bookingCard/page"; // Adjust the path if needed

interface Amenity {
  icon: string;
  label: string;
}

interface PropertyDetailsProps {
  title: string;
  rating: number;
  reviewsCount: number;
  reviewLink: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  size: string;
  amenities: Amenity[];
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  title,
  rating,
  reviewsCount,
  reviewLink,
  bedrooms,
  bathrooms,
  sleeps,
  size,
  amenities,
}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 p-4">
      {/* Left Section: Property Details */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-green-600 text-white text-sm py-1 px-3 rounded">
            {rating.toFixed(1)}
          </span>
          <span className="text-gray-600">
            {rating >= 4.5 ? "Exceptional" : "Great"}
          </span>
          <a href={reviewLink} className="text-blue-500 underline">
            {reviewsCount} reviews
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-bed text-gray-500"></i>
            <span>{bedrooms} bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-bath text-gray-500"></i>
            <span>{bathrooms} bathroom</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-users text-gray-500"></i>
            <span>Sleeps {sleeps}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-ruler text-gray-500"></i>
            <span>{size}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
        <div className="grid grid-cols-2 gap-4">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <i className={`${amenity.icon} text-gray-500`}></i>
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Booking Card */}
      <div>
        <BookingCard />
      </div>
    </div>
  );
};

export default PropertyDetails;
