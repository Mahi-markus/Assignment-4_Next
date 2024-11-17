"use client"; // This component requires client-side rendering

import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("United States");
  const countryButtonRef = useRef<HTMLAnchorElement>(null);
  const currencySelectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    // Load the country from localStorage or default to United States
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  const handleOpenModal = () => {
    const modal = document.getElementById("regionModal");
    if (modal) {
      modal.style.display = "block"; // Show the modal
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    localStorage.setItem("selectedCountry", selectedCountry); // Persist the selected country

    // Update the country name in the button
    if (countryButtonRef.current) {
      countryButtonRef.current.textContent = selectedCountry;
    }

    // Dynamically change currency based on selected country
    const currencyMapping: { [key: string]: string } = {
      "portugal": "EUR",
      "us": "USD",
      "uk": "GBP",
      "canada": "CAD",
      "australia": "AUD",
      "bangladesh": "BDT",
      "brazil": "BRL",
      "china": "CNY",
      "denmark": "DKK",
      "egypt": "EGP",
      "france": "EUR",
      "germany": "EUR",
      "india": "INR",
      "japan": "JPY",
      "mexico": "MXN",
      "netherlands": "EUR",
      "norway": "NOK",
      "russia": "RUB",
      "saudi_arabia": "SAR",
      "south_africa": "ZAR",
      "south_korea": "KRW",
      "spain": "EUR",
      "sweden": "SEK",
      "switzerland": "CHF",
      "turkey": "TRY",
      "uae": "AED",
      "vietnam": "VND",
    };

    // Update the currency select based on the selected country
    if (currencySelectRef.current) {
      const selectedCurrency = currencyMapping[selectedCountry];
      const options = Array.from(currencySelectRef.current.options);
      const selectedOption = options.find((option) => option.value === selectedCurrency);
      if (selectedOption) {
        currencySelectRef.current.value = selectedCurrency; // Update currency dropdown
      }
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("regionModal");
    if (modal) {
      modal.style.display = "none"; // Close the modal
    }
  };

  // Define common classes to avoid repetition
  const linkClass =
    "px-4 py-3 hover:bg-blue-500 hover:text-white  text-gray-800 transition-colors duration-200";
  const signInButtonClass =
    "bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors duration-200";
    const modalClass =
    "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
  // Ensuring modal is on top
  const modalContentClass = "bg-white p-8 rounded-lg w-96  shadow-lg relative"; // Adjust width for better visibility
  const warningTextClass = "text-red-500 text-sm mb-4";
  const selectClass = "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <nav className="bg-white border-b border-blue-200 dark:bg-blue-900 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#" className="text-2xl font-bold text-gray-800 hover:text-blue-500">
            Logo
          </a>
          <ul className="flex space-x-10">
            <li>
              <a
                href="#"
                ref={countryButtonRef}
                className={classNames(linkClass)}
                onClick={handleOpenModal}
              >
                {selectedCountry} {/* Displaying the selected country */}
              </a>
            </li>
            <li>
              <a href="#" className={classNames(linkClass)}>
                Trip Boards
              </a>
            </li>
            <li>
              <a href="#" className={classNames(linkClass)}>
                List Your Property
              </a>
            </li>
            <li>
              <a href="#" className={classNames(linkClass)}>
                Help
              </a>
            </li>
            <li>
              <a href="#" className={classNames(linkClass)}>
                My Trips
              </a>
            </li>
            <li>
              <a href="#" className={classNames(signInButtonClass)}>
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Region Selection Modal */}
      <div
        className={modalClass}
        id="regionModal"
        style={{ display: "none" }}
      >
        <div className={modalContentClass}>
          <button
            className="absolute top-2 right-2 text-gray-600 text-xl"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Display settings</h2>
          <div className={warningTextClass}>
            <span role="img" aria-label="warning">⚠️</span>
            Changing your region could change your rewards program
          </div>
          <p className="text-gray-700 text-sm mb-4">
            To stay with your current rewards program, keep your region the same.
            One Key is currently only available in select regions.
          </p>
          <label htmlFor="regionSelect" className="block text-gray-700 mb-2">Region:</label>
          <select
            className={selectClass}
            id="regionSelect"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="portugal">Portugal</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="brazil">Brazil</option>
            <option value="china">China</option>
            <option value="denmark">Denmark</option>
            <option value="egypt">Egypt</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="india">India</option>
            <option value="japan">Japan</option>
            <option value="mexico">Mexico</option>
            <option value="netherlands">Netherlands</option>
            <option value="norway">Norway</option>
            <option value="russia">Russia</option>
            <option value="saudi_arabia">Saudi Arabia</option>
            <option value="south_africa">South Africa</option>
            <option value="south_korea">South Korea</option>
            <option value="spain">Spain</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="turkey">Turkey</option>
            <option value="uae">United Arab Emirates</option>
            <option value="vietnam">Vietnam</option>
          </select>

          <label htmlFor="currencySelect" className="block text-gray-700 mt-4 mb-2">Currency:</label>
          <select
            className={selectClass}
            id="currencySelect"
            ref={currencySelectRef}
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
            <option value="BDT">BDT</option>
            <option value="BRL">BRL</option>
            <option value="CNY">CNY</option>
            <option value="DKK">DKK</option>
            <option value="EGP">EGP</option>
            <option value="INR">INR</option>
            <option value="JPY">JPY</option>
            <option value="MXN">MXN</option>
            <option value="NOK">NOK</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="ZAR">ZAR</option>
            <option value="KRW">KRW</option>
            <option value="SEK">SEK</option>
            <option value="CHF">CHF</option>
            <option value="TRY">TRY</option>
            <option value="AED">AED</option>
            <option value="VND">VND</option>
          </select>

          <div className="flex justify-end mt-6">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
              onClick={handleCloseModal}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
