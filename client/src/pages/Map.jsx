import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBhugTV_plQlisSrFStXbzR7VLfz_eJMtM',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <ActualMap />;
}

function ActualMap() {
  const center = useMemo(() => ({ lat: 12, lng: 12 }), []);

  return (
    <div className="w-fit h-fit top-0">
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container ">
             {/* <Marker position={center} /> */}
        </GoogleMap>
    </div>
    
  );
}