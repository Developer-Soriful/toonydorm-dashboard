// LocationMap.jsx
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Map container style
const containerStyle = {
    width: '100%',
    height: '628px', // fixed height, can be adjusted
};

// Default map center
const DEFAULT_CENTER = { lat: 51.505, lng: -0.09 };
const DEFAULT_ZOOM = 12;

// Dummy locations
const DUMMY_LOCATIONS = [
    { id: "1", lat: 51.516, lng: -0.11, name: "Trafalgar Square Base" },
    { id: "2", lat: 51.52, lng: -0.09, name: "Camden Town Node" },
    { id: "3", lat: 51.498, lng: -0.15, name: "Victoria Operations" },
    { id: "4", lat: 51.505, lng: -0.02, name: "Greenwich Control" },
    { id: "5", lat: 51.50, lng: -0.1, name: "London Eye Viewpoint" },
];

const LocationMap = ({ locations = DUMMY_LOCATIONS, center = DEFAULT_CENTER, zoom = DEFAULT_ZOOM }) => {
    // Load Google Maps API (replace with your API key)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDvNVrqjBre9DHez6fesWsvmCCKVhv8rYo",
    });

    if (!isLoaded) return <div>Loading Map...</div>;

    return (
        <div className="relative w-full h-full rounded-lg overflow-hidden">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={{ zoomControl: true, scrollwheel: true }}
            >
                {locations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={{ lat: loc.lat, lng: loc.lng }}
                        title={loc.name}
                    />
                ))}
            </GoogleMap>

            <button className="absolute bottom-4 right-4 bg-white text-gray-700 px-3 py-1.5 rounded-md shadow-lg z-[1000] text-xs font-medium hover:bg-gray-50 border border-gray-200">
                View Full Map
            </button>
        </div>
    );
};

export default LocationMap;
