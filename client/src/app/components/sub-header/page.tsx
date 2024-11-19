"use client";

import React, { useState, useEffect } from "react";

const Subheader: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isLoved, setIsLoved] = useState(false);

  // Load "Loved" state from localStorage on component mount
  useEffect(() => {
    const savedLovedState = localStorage.getItem("isLoved");
    if (savedLovedState) {
      setIsLoved(JSON.parse(savedLovedState));
    }
  }, []);

  // Save "Loved" state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoved", JSON.stringify(isLoved));
  }, [isLoved]);

  // Toggle Share Modal
  const toggleShareModal = () => {
    setIsShareModalOpen(!isShareModalOpen);
  };

  // Toggle Loved State
  const toggleLove = () => {
    setIsLoved((prev) => !prev);
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

        {/* Share and Love Buttons */}
        <div className="flex gap-3">
          {/* Share Button */}
          <button
            onClick={toggleShareModal}
            className="flex items-center gap-2 px-4 py-1.5 text-sm bg-transparent text-gray-800 border border-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            <i className="fas fa-share"></i> Share
          </button>

          {/* Love Button */}
          <button
            onClick={toggleLove}
            className="flex items-center gap-2 px-4 py-1.5 text-sm bg-transparent text-gray-800 border border-black rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            title="Love"
          >
            <i
              className={`fas fa-heart transition-colors ${
                isLoved ? "text-red-500" : "text-gray-800"
              }`}
            ></i>
          </button>
        </div>
      </header>

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
                  navigator.clipboard.writeText(window.location.href);
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

export default Subheader;

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
