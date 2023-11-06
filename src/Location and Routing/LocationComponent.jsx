import React, { useEffect } from 'react';

const LocationComponent = ({ onLocation }) => {
  useEffect(() => {
    const onSuccess = location => {
      const coordinates = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      };
      onLocation({ loaded: true, coordinates });
    };

    const onError = error => {
      onLocation({ loaded: true, error });
    };

    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [onLocation]);

  return null; // This component doesn't render anything itself
};

export default LocationComponent;
