/* eslint-disable react/prop-types */
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const Maps = ({ latitude, longitude }) => {
  console.log(latitude, longitude);
  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={{ lat: latitude, lng: longitude }}
      zoom={15}
    >
      <MarkerF position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
    // <GoogleMap
    //     zoom={15}
    //     center={coordinates}
    //     mapContainerStyle={{ width: "100%", height: "100%" }}
    //   >
    //     <Marker position={coordinates} />
    //   </GoogleMap>
  );
};

export default Maps;
