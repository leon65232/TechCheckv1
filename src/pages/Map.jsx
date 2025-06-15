// src/pages/Map.jsx
import React from 'react';
import Map from "../components/Map";

const Maps = () => {
  return (
    <div>
    {/* Dead API key */}
    <Map googleMapsApiKey='AIzaSyDj63pqt9XEjmOk0-j7NZ5FeuKg0-gPhts' />
    </div>
  );
};

export default Maps;