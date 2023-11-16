import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ apiKey, selectedLocation }) => {
    const mapStyles = {
        height: '500px',
        width: '100%',
    };

    // Coordonnées par défaut (Point-E)
    let defaultCenter = {
        lat: 14.696923,
        lng: -17.456932,
    };

    // Coordonnées en fonction du lieu sélectionné
    if (selectedLocation === 'Yoff') {
        defaultCenter = { lat: 14.75502, lng: -17.47500 };
    }

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={20} center={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
