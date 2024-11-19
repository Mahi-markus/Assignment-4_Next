import React from "react";

interface ExploreArea{

  latitude: number;
  longitude: number;

}

const ExploreArea: React.FC<ExploreArea> = ({
  latitude,
  longitude

}) => {
  return (
    <div className="w-3/5 mt-[-3rem] pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-semibold text-transparent-800 mb-6">Explore the area</h2>
      
      {/* Map Container */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6">
        <img
          src="./map.jpg"
          alt="Map of Juneau area"
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">Juneau, Alaska</h3>
          <p>{longitude}<br></br> 
          {latitude}</p>
          <a
            href="#"
            className="text-blue-600 hover:underline mt-1 inline-block"
          >
            
            View in a map
          </a>
        </div>
      </div>
      
      {/* Location Info */}
      <div className="mt-6">
        {[
          { name: "Auke Bay", time: "6 min drive", icon: "circle" },
          { name: "University of Alaska-Southeast", time: "10 min drive", icon: "circle" },
          { name: "Mendenhall Golf Course", time: "14 min drive", icon: "circle" },
          { name: "Juneau, AK (JNU-Juneau Intl.)", time: "14 min drive", icon: "triangle" },
        ].map((location, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 flex items-center justify-center">
                {location.icon === "circle" ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                )}
              </div>
              <span className="text-gray-800 text-sm">{location.name}</span>
            </div>
            <span className="text-gray-500 text-sm">{location.time}</span>
          </div>
        ))}
      </div>

      {/* See More Link */}
      <a
        href="#"
        className="mt-4 inline-flex items-center text-blue-600 hover:underline text-sm"
      >
        See more about this area
        <span className="ml-1 text-lg">›</span>
      </a>
    </div>
  );
};

export default ExploreArea;
