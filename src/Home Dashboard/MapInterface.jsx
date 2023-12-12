import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [44.9019, -68.6688];

function MapInterface({ coordinates, drivers }) {
    // Ensure drivers array is not undefined
    drivers = drivers || [];

    return (
        <MapContainer center={coordinates.lat && coordinates.lng ? [coordinates.lat, coordinates.lng] : center} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker for current location */}
            <Marker position={coordinates.lat && coordinates.lng ? [coordinates.lat, coordinates.lng] : center}>
            </Marker>

            {/* Markers for drivers */}
            {drivers.map((driver, index) => (
                <Marker
                    key={index}
                    position={[driver.location.latitude, driver.location.longitude]}
                >
                    <Tooltip direction="top" offset={[0, -20]} opacity={1} className="driver-tooltip">
                        {driver.name}
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapInterface;


