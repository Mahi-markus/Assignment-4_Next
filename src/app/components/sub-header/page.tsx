"use client";

import React, { useState } from "react";

const App: React.FC = () => {
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");

  // Toggle Region Modal
  const toggleRegionModal = () => {
    setIsRegionModalOpen(!isRegionModalOpen);
  };

  // Toggle Share Modal
  const toggleShareModal = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };

  // Save Selected Region
  const saveRegion = (country: string) => {
    setSelectedCountry(country);
    toggleRegionModal();
  };

  return (
    <div className="min-h-screen-5 bg-gray-10">
      {/* Header */}
      <header className="flex justify-between items-center mt-6 mx-3">
        {/* Back Link */}
        <a
          href="#"
          className="text-base font-medium text-gray-800 hover:text-blue-600"
        >
          ← All properties
        </a>

        {/* Share and Save Buttons */}
        <div className="flex gap-3">
          <button
            onClick={toggleShareModal}
            className="flex items-center gap-2 px-4 py-1.5 text-sm bg-transparent text-gray-800 border border-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            <i className="fas fa-share"></i> Share
          </button>
          <button
            onClick={toggleRegionModal}
            className="flex items-center gap-2 px-4 py-1.5 text-sm bg-transparent text-gray-800 border border-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            {selectedCountry}
          </button>
        </div>
      </header>

      {/* Region Modal */}
      {isRegionModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={toggleRegionModal}
        >
          <div
            className="bg-white rounded-lg shadow-md w-80 p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleRegionModal}
              className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-base font-semibold mb-3">Select Region</h3>
            <ul className="space-y-1">
              {["United States", "Canada", "Australia", "India"].map(
                (country) => (
                  <li
                    key={country}
                    className={`p-1 cursor-pointer rounded-md ${
                      selectedCountry === country
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => saveRegion(country)}
                  >
                    {country}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={toggleShareModal}
        >
          <div
            className="bg-white rounded-lg shadow-md w-80 p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleShareModal}
              className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-base font-semibold mb-2">Share this link</h3>
            <p className="text-sm text-gray-600 mb-3">
              Juneau Vacation Home: Stunning View + Beach Access
            </p>

            {/* Share Options */}
            <div className="grid grid-cols-2 gap-2">
              <ShareOption
                label="Message"
                imageUrl="./icons/messege_icon.png"
                link="sms:?body=Check%20out%20this%20link:%20https://yourwebsite.com"
              />
              <ShareOption
                label="WhatsApp"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                link="https://wa.me/?text=Check%20out%20this%20link:%20https://yourwebsite.com"
              />
              <ShareOption
                label="Messenger"
                imageUrl="./icons/messenger_icon.png"
                link="fb-messenger://share?link=https://yourwebsite.com"
              />
              <ShareOption
                label="Facebook"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                link="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
              />
              <ShareOption
                label="X"
                imageUrl="./icons/twitter_icon.png"
                link="https://twitter.com/share?url=https://yourwebsite.com"
              />
              <ShareOption
                label="Copy link"
                imageUrl="./icons/copy_link.png"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://yourwebsite.com"
                  );
                  alert("Link copied to clipboard!");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

// Share Option Component
interface ShareOptionProps {
  label: string;
  imageUrl: string;
  link?: string;
  onClick?: () => void;
}

const ShareOption: React.FC<ShareOptionProps> = ({
  label,
  imageUrl,
  link,
  onClick,
}) => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={onClick || (() => window.open(link, "_blank"))}
    >
      <img src={imageUrl} alt={label} className="w-5 h-5" />
      <span className="text-gray-800 text-sm">{label}</span>
    </div>
  );
};
