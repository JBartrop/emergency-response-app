'use client';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, {  useState }  from "react";

const containerStyle = {
    width: "100%",
    height: "80vh",
};
  
const center = {
    lat: 5.614818, 
    lng: -0.205874, 
};

const GoogleMapsComponent : React.FC = () => {

    const [Maps, setMaps] = useState(false);

    return(
        <LoadScript
        googleMapsApiKey={process.env.MapsApi || ""}
        onLoad={() => setMaps(true)}
        >
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          <Marker position={center} />
          </GoogleMap>
          {!Maps && <p>Loading map...</p>}
        </LoadScript>
    )
}


export default GoogleMapsComponent;