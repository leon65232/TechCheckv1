// src/pages/Map.jsx
import React from 'react';
import Map from "../components/Map";

const Maps = () => {
  return (
    <div>
      <h1>Map Section</h1>
      <p>Find locations for electronic waste disposal.</p>
    <Map googleMapsApiKey='AIzaSyDj63pqt9XEjmOk0-j7NZ5FeuKg0-gPhts' />
    </div>
  );
};

export default Maps;