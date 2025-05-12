/* eslint-disable react/prop-types */

import { FaHome, FaBed, FaKey, FaMoneyBillWave } from "react-icons/fa";
const PropertyCard = ({ property }) => {
   const {image, address, type, bedrooms, lease, history} = property;
  return (
    <div className="flex flex-col md:flex-row bg-[#DDE0F2] rounded-2xl shadow-md overflow-hidden w-full  my-5  border border-gray-200">
      {/* Property Image */}
      <div className="md:w-1/3 w-full">
        <img
          src={image}
          alt="Property"
          className="object-cover w-full m-1 md:rounded-l-2xl md:rounded-none rounded-t-2xl"
        />
      </div>

      {/* Property Info */}
      <div className="flex flex-col justify-between p-6 md:w-2/3 w-full ">
        {/* Address */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {address}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <FaHome className="text-indigo-600" />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBed className="text-indigo-600" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaKey className="text-indigo-600" />
            <span>{lease}</span>
          </div>
        </div>

        {/* Sale History */}
        <div className="space-y-4 text-gray-700">
          {history.length > 0 ? (
            history.map((record, index) => (
              <div key={index} className="flex justify-between border-t-2 border-gray-400 pt-3">
                <div>{record.date}</div>
                <div className="flex items-center gap-1 font-medium">
                  <FaMoneyBillWave className="text-indigo-600" />
                  {record.price.toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <div className="pt-4 text-sm text-gray-500">
              No Historical Records Found
            </div>
          )}
          <div className="pt-4 text-sm text-gray-500 underline">
              No Historical Records Found
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
