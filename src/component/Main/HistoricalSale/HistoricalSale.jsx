// /* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import PropertyCard from "./PropertyCard";

function HistoricalSale() {
  const [searchTerm, setSearchTerm] = useState("");

  const properties = [
    {
      id: 1,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Hassocks close, Beeston Oxford N24",
      type: "Flat",
      bedrooms: 6,
      lease: "Leasehold",
      history: [
        { date: "26 Jan 2025", price: 150000 },
        { date: "8 Feb 2024", price: 120000 },
      ],
    },
    {
      id: 1,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Hassocks close, Beeston Oxford N24",
      type: "Flat",
      bedrooms: 6,
      lease: "Leasehold",
      history: [
        { date: "26 Jan 2025", price: 150000 },
        { date: "8 Feb 2024", price: 120000 },
      ],
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Greenwich Village, London SW10",
      type: "House",
      bedrooms: 4,
      lease: "Freehold",
      history: [
        { date: "15 Mar 2023", price: 450000 },
        { date: "10 Jan 2021", price: 400000 },
      ],
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Elm Street, Manchester M1",
      type: "Apartment",
      bedrooms: 3,
      lease: "Leasehold",
      history: [
        { date: "12 Dec 2024", price: 320000 },
        { date: "7 Nov 2022", price: 300000 },
      ],
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Baker Street, London NW1",
      type: "Penthouse",
      bedrooms: 5,
      lease: "Freehold",
      history: [
        { date: "1 May 2024", price: 950000 },
        { date: "19 Jan 2022", price: 900000 },
      ],
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/jZ6y2FVj/Rectangle-18839.png",
      address: "Oxford Road, Cambridge CB2",
      type: "Townhouse",
      bedrooms: 4,
      lease: "Leasehold",
      history: [
        { date: "20 Aug 2023", price: 620000 },
        { date: "11 Jul 2021", price: 590000 },
      ],
    },
  ];

  // Filter properties based on search input
  const filteredProperties = properties.filter((property) =>
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f1eee7] px-2 md:px-0">
    {/* <div className="min-h-screen bg-gradient-to-t from-[#b6bb92] to-[#b6bb92cb] px-2 md:px-0"> */}
      <div className="flex justify-center pt-10">
        <div className="bg-[#E6E6F2] rounded-2xl shadow-lg p-4 md:p-8 md:w-[80%] lg:w-[50%] w-full">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Unlock Historical Sale Prices
          </h2>

          {/* Subheading */}
          <p className="text-center text-[#000080] mb-6">
            Navigating the home-buying process? Weve got you covered.
          </p>

          {/* Search Box */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter a Street, Town, or Postcode"
              className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => console.log("Search clicked!")}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filtered Property Cards */}
      <div className="flex justify-center pt-6">
        <div className="md:w-[80%] lg:w-[50%] w-full space-y-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="text-center text-gray-600 py-10">
              No properties found for {searchTerm}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoricalSale;
