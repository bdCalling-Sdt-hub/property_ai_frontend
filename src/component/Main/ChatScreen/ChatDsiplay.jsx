/* eslint-disable react/prop-types */

import { useState } from "react";
import PropertyDetailsModal from "./PropertyDetailsModal";

const ChatDisplay = ({ chatsData }) => {
  const [open, setOpen] = useState(false);
  const [property, setProperty] = useState({});

  const handleClose = () => setOpen(false);


  return (
    <div className="space-y-4 p-4">
      {chatsData?.map((chat, index) => (
        <div
          key={chat.id || index}
          className={`flex flex-col rounded-lg p-3 w-fit ${chat?.sender!=="user" && 'min-w-[50%]'} max-w-[80%] ${
            chat.sender === 'user' ? 'bg-green-100 ml-auto text-right' : 'bg-gray-100 mr-auto text-left'
          }`}
        >
          {chat?.sender === 'user' && typeof chat?.message === 'string' ? (
            <p className="text-lg text-gray-800">{chat.message}</p>
          ) : chat?.sender === 'ai' && typeof chat?.message === 'string' ? (
            <div className="text-sm text-gray-800 space-y-2 max-h-[40vh] overflow-auto" dangerouslySetInnerHTML={{ __html: chat?.message || "N/A" }} />
          ) : chat?.sender === 'zoopla' && Array.isArray(chat?.message) ? (
            <div className="space-y-2 max-h-[50vh] overflow-auto ">
              {chat?.message.map((item, itemIndex) => (
                <div  onClick={()=>{
                  setOpen(true);
                  setProperty(item)
                }} key={itemIndex} className="bg-white rounded-md shadow-sm p-3">
                 {item.imageUris && item.imageUris?.length > 0 && (
                    <img
                      src={item?.imageUris[0]}
                      alt={item?.address}
                      className="max-w-[200px] h-auto rounded-md mt-1"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-blue-600">{item?.address || "N/A"}</h3>
                  <h3 className="text-[15px] text-gray-500">Bed Room: {item?.attributes?.bedrooms || "N/A"}</h3>
                  {/* <h3 className="text-[15px] text-gray-500">Living Room: {item?.attributes?.livingRoom || "N/A"}</h3> */}
                  <h3 className="text-[15px] text-gray-500">Bath rooms: {item?.attributes?.bathrooms || "N/A"}</h3>
                  <p className="text-[15px] text-gray-500">Branch: {item?.agent?.branchName || 'N/A'}</p>
                  <p className="text-[15px] text-gray-500">Phone: {item?.agent?.phone || 'N/A'}</p>
                  
                  <p className="text-lg text-green-600 font-medium mt-1">
                    Price: {item?.pricing?.label || 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-800">{JSON.stringify(chat.message)}</p>
          )}
        </div>
      ))}
        {property && open && 
        <>
                {/* <LoadScript googleMapsApiKey="AIzaSyBwapnpvig2OudZciAgqtdize9IowNV4Lw"> */}
                <PropertyDetailsModal property={property} open={open} handleClose={handleClose} />
                   {/* </LoadScript> */}
{/*  */}
        </>
        }
    </div>
  );
};

export default ChatDisplay;