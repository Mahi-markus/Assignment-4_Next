import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Amenities", "Policies"];

  return (
    <div className="border-b border-gray-300 mb-4">
      <div className="flex space-x-4 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-blue-500 font-bold"
                : "text-gray-500 hover:text-blue-400"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
