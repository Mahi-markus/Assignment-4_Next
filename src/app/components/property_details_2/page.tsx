import React from "react";


interface Amenity {
    icon: string;
    label: string;
  }
  
  interface PropertyDetailsProps2 {
    title: string;
    rating: number;
    reviewsCount: number;
    reviewLink: string;
    bedrooms: number;
    bathrooms: number;
    sleeps: number;
    size: string;
    description:string;
    guestCount:number;
    amenities: Amenity[];
  }

const PropertyDetails2: React.FC <PropertyDetailsProps2>= ({
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
  amenities
}) => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl mb-6 text-gray-800">About the property</h2>
      <h2 className="text-xl mb-6 text-gray-800">
        {description}
      </h2>
      <div className="mb-6 text-gray-600 leading-relaxed">
        Escape to the mountains and experience the great outdoors at this lovely
        Juneau vacation rental! Perched on the shores of Lena Cove, this
        2-bedroom, 1-bath home is the perfect getaway for those looking to enjoy
        a relaxing retreat surrounded by nature. Spend your day fishing for King
        Salmon, exploring Lena Beach and the rocky coastline, or hiking the
        nearby trails. After your outdoor adventure, kick back on the private
        deck and admire the breathtaking panoramic views!
      </div>

      <div className="mb-8">
        <div className="font-semibold text-gray-700 mb-4 uppercase text-sm">
          -- THE PROPERTY --
        </div>
        <div className="mb-4 text-gray-600">
          CBJ1000104 | 1,115 Sq Ft | 2 Private Decks | Lena Cove & Mountain Views
          | 2 Bicycles Provided
        </div>
        <div className="mb-4 text-gray-600">
          Bedroom 1: Queen Bed, Full Floor Mattress | Bedroom 2: Extra Long Twin
          Bed
        </div>

        <div className="mb-4">
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-2">HOME HIGHLIGHTS:</div>
            <div className="text-gray-600">Flat-screen TV, dining table, washer/dryer</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-2">KITCHEN:</div>
            <div className="text-gray-600">
              Fridge, stove, coffee maker, microwave, cooking basics, toaster,
              dishware/flatware, trash bags/paper towels, Crockpot
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-2">GENERAL:</div>
            <div className="text-gray-600">
              Free WiFi, central heating, linens/towels, keyless entry, hair
              dryer, ceiling fans
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-2">FAQ:</div>
            <div className="text-gray-600">No A/C, stairs required to access</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-700 mb-2">PARKING:</div>
            <div className="text-gray-600">
              Driveway (2 vehicles), RV parking allowed
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="font-semibold text-gray-700 mb-4 uppercase text-sm">
          -- THE LOCATION --
        </div>
        <div className="mb-6">
          <div className="mb-6">
            <div className="font-semibold text-gray-700 mb-2">GREAT OUTDOORS:</div>
            <div className="text-gray-600">
              Lena Cove (on-site), Lena Beach Recreation Area (0.5 miles),
              Glacier Gardens Rainforest Adventure (10 miles), Mendenhall Glacier
              (10 miles), Twin Lakes (13 miles)
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold text-gray-700 mb-2">THINGS TO DO:</div>
            <div className="text-gray-600">
              Mendenhall Golf (8 miles), Dimond Park Aquatic Center (8 miles),
              Riverside Rotary Park (8 miles), Alaska State Museum (16 miles),
              Last Chance Mining Museum (18 miles), AJ Mine Gastineau Mill Tours
              (20 miles)
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold text-gray-700 mb-2">LOCAL FARE:</div>
            <div className="text-gray-600">
              Forbidden Peak Brewery (5 miles), The Grind Coffee Company (7
              miles), Four Plates Cocina Peruana (7 miles), Sandbar & Grill (7
              miles), Zerelda's Bistro (8 miles), Donna's Restaurant (9 miles),
              Alaskan Brewing Co. (13 miles)
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-2">AIRPORT:</div>
            <div className="text-gray-600">
              Juneau International Airport (9 miles)
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="font-semibold text-gray-700 mb-4 uppercase text-sm">
          -- REST EASY WITH US --
        </div>
        <div className="text-gray-600 bg-gray-100 p-4 rounded-md">
          Evolve makes it easy to find and book properties you'll never want to
          leave. You can relax knowing that our properties will always be ready
          for you and that we'll answer the phone 24/7. Even better, if anything
          is off about your stay, we'll make it right. You can count on our homes
          and our people to make you feel welcome--because we know what vacation
          means to you.
        </div>
      </div>

      <div className="mb-8">
        <div className="font-semibold text-gray-700 mb-4 uppercase text-sm">
          -- POLICIES --
        </div>
        <ul className="list-none">
          <li className="text-gray-600 mb-2">- No smoking</li>
          <li className="text-gray-600 mb-2">- No pets allowed</li>
          <li className="text-gray-600 mb-2">- No events, parties, or large gatherings</li>
          <li className="text-gray-600 mb-2">- Must be at least 25 years old to book</li>
          <li className="text-gray-600 mb-2">- Additional fees and taxes may apply</li>
          <li className="text-gray-600 mb-2">- Photo ID may be required upon check-in</li>
          <li className="text-gray-600 mb-2">
            - NOTE: The property requires stairs to access
          </li>
          <li className="text-gray-600 mb-2">
            - NOTE: The property does not have air conditioning
          </li>
          <li className="text-gray-600 mb-2">
            - NOTE: The property sleeps  guests in {bedrooms} beds, with room for {guestCount} total
            by using the full floor mattress
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails2;
