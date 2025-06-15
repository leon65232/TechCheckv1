// src/components/GoogleMapsComponent.jsx

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';

// --- Configuration ---
const containerStyle = {
  width: '100%',
  height: '50rem',
};

const center = {
  lat: -6.2088, // Default center (e.g., Jakarta)
  lng: 106.8456,
};

const predeterminedLocations = [
  { id: 1, name: 'Location A', lat: -6.2100, lng: 106.8500 },
  { id: 2, name: 'Location B', lat: -6.1900, lng: 106.8300 },
  { id: 3, name: 'Location C', lat: -6.2200, lng: 106.8600 },
];

const libraries = ['places', 'geometry']; // 'geometry' is crucial for distance calculation

const GoogleMapsComponent = ({ googleMapsApiKey }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey, // Pass your API key as a prop
    libraries,
  });

  const [userLocation, setUserLocation] = useState(null);
  const [closestLocation, setClosestLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [showUserLocationPrompt, setShowUserLocationPrompt] = useState(true); // Control when to show the prompt

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // --- 1. Request User Location ---
  useEffect(() => {
    if (showUserLocationPrompt) {
      if (navigator.geolocation) {
        // Using a setTimeout to allow the UI to render before the prompt appears
        // This is a common pattern to avoid blocking the initial render.
        const timer = setTimeout(() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLat = position.coords.latitude;
              const userLng = position.coords.longitude;
              setUserLocation({ lat: userLat, lng: userLng });
              setShowUserLocationPrompt(false); // Hide prompt after getting location
              console.log('User location obtained:', { lat: userLat, lng: userLng });
            },
            (error) => {
              console.error("Error getting user's location:", error);
              // Handle permission denied or other errors gracefully
              setShowUserLocationPrompt(false); // Hide prompt even if there's an error
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Options for geolocation
          );
        }, 500); // Small delay

        return () => clearTimeout(timer); // Cleanup the timer
      } else {
        console.log("Geolocation is not supported by this browser.");
        setShowUserLocationPrompt(false);
      }
    }
  }, [showUserLocationPrompt]); // Rerun when showUserLocationPrompt changes

  // --- 2. Calculate Closest Predetermined Location ---
  useEffect(() => {
    if (userLocation && window.google && window.google.maps) {
      let minDistance = Infinity;
      let closest = null;

      predeterminedLocations.forEach(location => {
        const p1 = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
        const p2 = new window.google.maps.LatLng(location.lat, location.lng);
        const distance = window.google.maps.geometry.spherical.computeDistanceBetween(p1, p2); // Distance in meters

        if (distance < minDistance) {
          minDistance = distance;
          closest = location;
        }
      });
      setClosestLocation(closest);
      console.log('Closest predetermined location:', closest);

      // --- 3. Adjust Map View to Closest Location if User Agrees ---
      // This part would typically be triggered by a user's explicit consent,
      // but for demonstration, we'll auto-center if a closest location is found.
      if (map && closest) {
        map.panTo(closest);
        map.setZoom(14); // Zoom in on the closest location
      }
    }
  }, [userLocation, map]); // Recalculate when userLocation or map changes

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div style={containerStyle}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || center} // Center on user location if available, otherwise default
        zoom={userLocation ? 14 : 10} // Zoom in more if user location is known
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Markers for all predetermined locations */}
        {predeterminedLocations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
            // You can customize the icon if needed
          />
        ))}

        {/* Marker for user's current location */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#4285F4',
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: '#ffffff',
            }}
            title="Your Location"
          />
        )}

        {/* Highlight the closest location */}
        {closestLocation && (
          <Circle
            center={closestLocation}
            radius={200} // Radius in meters for the circle (e.g., 200 meters)
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
            }}
          />
        )}
      </GoogleMap>

      {/* Basic UI to prompt user (can be a modal or better styled) */}
      {showUserLocationPrompt && (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid #ccc',
            zIndex: 1000, // Ensure it's above the map
            textAlign: 'center'
        }}>
            <p>Allow us to access your location to find the closest store?</p>
            <p style={{fontSize: '0.8em', color: '#666'}}>
                (Your browser will ask for permission)
            </p>
        </div>
      )}

    </div>
  );
};

export default GoogleMapsComponent;