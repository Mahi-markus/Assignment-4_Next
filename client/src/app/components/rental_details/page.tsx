import React from "react";

interface RentalDetails {
    hostInfo: {
        name: string;
    };
}

const RentalDetails: React.FC <RentalDetails>= ({
   hostInfo
}) => {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-1">
      {/* Damage Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Damage and incidentals</h2>
        <p className="text-gray-700">
          You will be responsible for any damage to the rental property caused by
          you or your party during your stay.
        </p>
      </section>

      {/* Cancellation Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cancellation</h2>
        <div className="bg-gray-100 p-4 rounded-lg relative">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full mb-2"></div>
              <span>Today</span>
              <small>Full refund</small>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full mb-2"></div>
              <span>Nov 4</span>
              <small>No refund</small>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-white border-2 border-gray-600 rounded-full mb-2"></div>
              <span>Check-in</span>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>
        </div>
        <div className="mt-4 p-4 border-l-4 border-blue-500 bg-gray-100">
          <h3 className="font-semibold">Before Nov 4</h3>
          <p className="text-gray-700">
            Full refund: Cancel your reservation before Nov 4 at 11:59 PM, and
            you'll get a full refund. Times are based on the property's local time.
          </p>
        </div>
      </section>

      {/* Important Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Important information</h2>
        <h3 className="text-lg font-medium">You need to know</h3>
        <ul className="list-none space-y-4 mt-4">
          {[
            "Extra-person charges may apply and vary depending on property policy",
            "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
            "Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed",
            "Onsite parties or group events are strictly prohibited",
            "Carbon monoxide detector",
            "Smoke detector",
            "Fire extinguisher",
            "First aid kit",
          ].map((item, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 text-blue-500">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
            "What time is check-in at Juneau Vacation Home?",
            "What time is check-out at Juneau Vacation Home?",
            "Where is Juneau Vacation Home?",
          ].map((question, index) => (
            <div key={index} className="border-b py-4 flex justify-between items-center cursor-pointer">
              <span className="text-gray-700">{question}</span>
              <span className="text-gray-500">▼</span>
            </div>
          ))}
        </div>
      </section>

      {/* Ratings Section */}
      <section className="mb-8 bg-gray-100 p-6 rounded-lg">
        <div className="flex items-baseline gap-4 mb-6">
          <div className="text-4xl font-bold text-green-600">9.8/10</div>
          <div>
            <h3 className="text-xl font-medium">Exceptional</h3>
            <p className="text-gray-500">24 reviews</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              rating: "10/10 Excellent",
              date: "Sep 25, 2024",
              review: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the area.",
              author: "Kyle G.",
            },
            {
              rating: "10/10 Excellent",
              date: "Sep 23, 2024",
              review: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
              author: "Cindy B.",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-green-600">{review.rating}</span>
                <span className="text-gray-500">{review.date}</span>
              </div>
              <p className="mb-2">{review.review}</p>
              <strong>{review.author}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Host Section */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About the host</h2>
        <p>Hosted by {hostInfo.name}</p>
        <h3 className="mt-4 font-medium">Languages:</h3>
        <div className="flex gap-4 mt-2 flex-wrap">
          {["English", "French", "German", "Spanish"].map((lang, index) => (
            <span key={index} className="bg-white px-3 py-1 rounded-full border">
              {lang}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-block mt-4 px-6 py-2 bg-transparent text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
        >
          Contact host {hostInfo.name}
        </a>
      </section>
    </main>
  );
};

export default RentalDetails;
