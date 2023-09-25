import React from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from "react";

export default function Map(){
  const [items, setItems] = useState([]);
  const center =  {lat: 40.8075, lng: -73.9626}
  const zoom = 13;

  useEffect(() => {
        axios.get('/item').then(response => {
            setItems(response.data);
        });
  }, []);
    
    const renderMarkers = (map, maps, item) => {
        console.log(item.myLat);
        
        let marker = new maps.Marker({
            position: {lat: Number(item?.myLat), lng: Number(item?.myLng)},
            map,
        });
        return marker;
    };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "PLEASE SUBSTITUTDE AN GOOGLE CLOUD API KEY HERE" }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
            items?.map((item) => {
                renderMarkers(map, maps, item);
            });
        }}
      >
        
      </GoogleMapReact>
    </div>
  );
}
