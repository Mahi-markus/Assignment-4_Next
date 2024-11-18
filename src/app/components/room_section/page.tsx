"use client";

import React from "react";

interface Room {
  roomSlug: string;
  roomImage: string[];
  roomTitle: string;
  roomBedroomCount: number;
}

interface RoomsSectionProps {
  rooms: Room[];
}

const RoomsSection: React.FC<RoomsSectionProps> = ({ rooms }) => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-300">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Rooms & Beds</h2>

      {/* Dynamic Room Rendering */}
      {rooms.map((room) => (
        <div key={room.roomSlug} className="mb-8">
          <div className="text-lg font-medium mb-4">{room.roomTitle}</div>
          <div className="flex flex-col space-y-4">
            {/* Bedroom Count */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2H8V7h8v3z" />
              </svg>
              <span>{`${room.roomBedroomCount} Beds`}</span>
            </div>
            {/* Room Images */}
            <div className="flex items-center gap-3">
              {room.roomImage.map((imgUrl, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgUrl}
                  alt={`${room.roomTitle} Image ${imgIndex + 1}`}
                  className="w-24 h-16 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Static Properties */}
      <div className="mb-8 pb-4 border-b border-gray-300">
        <div className="text-lg font-medium mb-4">1 bathroom</div>
        <div className="text-gray-600">Full Bathroom</div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Spaces</h2>
        <div className="flex flex-col space-y-4">
          {[
            { name: "Deck or patio", iconPath: "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" },
            { name: "Kitchen", iconPath: "M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v3H8z" },
            { name: "Balcony", iconPath: "M2 12h20v2H2zm2 4h16v2H4zm2 4h12v2H6z" },
            { name: "Garden", iconPath: "M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5z" },
          ].map((space, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d={space.iconPath} />
              </svg>
              <span className="text-gray-800">{space.name}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#" className="text-blue-600 hover:underline text-sm">
        See all rooms and beds details
      </a>
    </div>
  );
};

export default RoomsSection;
