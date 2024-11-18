import BookingCard from "../bookingCard/page"; // Adjust the path if needed

const PropertyDetails = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 p-4">
      {/* Left Section: Property Details */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-4">
          Waterfront Vacation Home with Stunning View
        </h1>
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-green-600 text-white text-sm py-1 px-3 rounded">
            4.9
          </span>
          <span className="text-gray-600">Exceptional</span>
          <a href="#" className="text-blue-500 underline">
            24 reviews
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <i className="fas fa-bed text-gray-500"></i>
            <span>2 bedrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-bath text-gray-500"></i>
            <span>1 bathroom</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-users text-gray-500"></i>
            <span>Sleeps 4</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-ruler text-gray-500"></i>
            <span>1155 sq ft</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Popular amenities</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "fas fa-utensils", label: "Kitchen" },
            { icon: "fas fa-glass-water", label: "Washer" },
            { icon: "fas fa-tshirt", label: "Dryer" },
            { icon: "fas fa-parking", label: "Parking" },
            { icon: "fas fa-fire", label: "BBQ grill" },
            { icon: "fas fa-tree", label: "Outdoor space" },
          ].map((amenity, idx) => (
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
