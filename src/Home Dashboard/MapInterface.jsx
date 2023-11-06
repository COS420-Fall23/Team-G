import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [44.9019,-68.6688];

function MapInterface(coordinates) {
    console.log(coordinates)
  return (
    <MapContainer center={coordinates.lat&&coordinates.long?[coordinates.lat,coordinates.long]:center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates.lat&&coordinates.long?[coordinates.lat,coordinates.long]:center}>
      </Marker>
    </MapContainer>
  );
}

export default MapInterface;
