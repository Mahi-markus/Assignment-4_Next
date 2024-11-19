import React from "react";

interface Amenity {
  icon: string; // Icon class or SVG path
  label: string;
}

interface PropertyManagerProps {
    hostInfo: {
        name: string;
    };
}


interface PropertyManagerProps {
  title: string;
  rating: number;
  reviewsCount: number;
  reviewLink: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  size: string;
  description: string;
  guestCount: number;
  amenities: Amenity[];
}

const PropertyManager: React.FC<PropertyManagerProps> = ({
  title,
  rating,
  reviewsCount,
  reviewLink,
  bedrooms,
  bathrooms,
  sleeps,
  description,
  guestCount,
  size,
  amenities,
  hostInfo
}) => {
  return (
    <section className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-lg font-medium mb-4">Property Manager</h2>
      <img src="/img/logo.png" alt="Evolve logo" className="w-12 h-12 mb-6" />
      <div className="mb-4">{hostInfo.name}</div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Languages</h3>
        <div className="text-gray-600">English, French, German, Spanish</div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-6">Amenities</h3>
        <div className="grid grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-600"
            >
              {/* Display the icon, assuming it's a FontAwesome class or SVG */}
              {amenity.icon.startsWith("fas") || amenity.icon.startsWith("far") ? (
                <i className={amenity.icon}></i>
              ) : (
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d={amenity.icon} />
                </svg>
              )}
              {amenity.label}
            </div>
          ))}
        </div>
      </div>
      <a href="#" className="text-blue-600 mt-4 inline-block">
        See all {amenities.length} amenities
      </a>
      <div className="mt-8 bg-blue-200 p-6 rounded-lg">
        <div className="text-xs font-medium uppercase bg-gray-100 text-gray-800 py-1 px-2 rounded inline-block mb-4">
          Beta
        </div>
        <h3 className="text-lg font-medium mb-2">Have a question?</h3>
        <p className="text-gray-600 mb-4">
          Get instant answers with AI powered search of property information
          and reviews.
        </p>
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Is there free parking?"
            className="w-full pl-12 py-3 border border-gray-300 rounded-lg text-gray-800"
          />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-6">House Rules</h3>
        <div className="mb-8">
          <div className="mb-2">Check in after 3:00 PM</div>
          <div className="mb-2">Check out before 11:00 AM</div>
          <div className="mb-2">Minimum age to rent: 25</div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-1">
              <i className="fas fa-child"></i> Children
            </h4>
            <div className="text-gray-600">Children allowed: ages 0-17</div>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              <i className="fas fa-calendar-alt"></i> Events
            </h4>
            <div className="text-gray-600">No events allowed</div>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              <i className="fas fa-paw"></i> Pets
            </h4>
            <div className="text-gray-600">No pets allowed</div>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              <i className="fas fa-smoking-ban"></i> Smoking
            </h4>
            <div className="text-gray-600">Smoking is not permitted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyManager;
