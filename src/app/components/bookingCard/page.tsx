const BookingCard = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="text-xl font-bold mb-2">
          $134 <span className="text-gray-500 text-sm">per night</span>
        </div>
        <p className="text-green-600 text-sm mb-4">Free cancellation available</p>
        <p className="text-gray-600 text-sm mb-6">Cancel before Mon, Nov 4</p>
  
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <label className="text-sm text-gray-700">Start Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">End Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
        </div>
  
        <div className="mb-4">
          <label className="text-sm text-gray-700">Number of Travelers</label>
          <input
            type="text"
            value="2 travelers"
            className="w-full p-2 border rounded-md text-sm cursor-pointer"
            readOnly
          />
        </div>
  
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Book now
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          You won't be charged yet
        </p>
      </div>
    );
  };
  
  export default BookingCard;
  