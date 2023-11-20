import React, { useState, useEffect } from "react";

export const Location = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        });
      }
    }, []);
  return (
    <>
    <h4>
      Latitude: {location.latitude}, Longitude: {location.longitude}
    </h4>
    </>
  );
};


