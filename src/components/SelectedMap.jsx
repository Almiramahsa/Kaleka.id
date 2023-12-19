import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';

function SelectedMap({ selectedCoordinate }) {
  const [center, setCenter] = React.useState([-2.5, 116]);
  const [zoom, setZoom] = React.useState(4);

  useEffect(() => {
    if (selectedCoordinate) {
      const [longitude, latitude] = selectedCoordinate.coordinates;
      setCenter([latitude, longitude]);
      setZoom(10);
    }
  }, [selectedCoordinate]);

  const icon = L.divIcon({
    html: `<button class="w-8 h-8 flex items-center justify-center text-kalekaBlue rounded-full border-2 border-blue-500"></button>`,
    className: 'custom-marker-icon',
  });

  return (
    <div className='text-center'>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '60vh', width: '65%', margin: 'auto', position: 'relative', zIndex: 1 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedCoordinate && (
          <Marker
            position={[
              selectedCoordinate.coordinates[1],
              selectedCoordinate.coordinates[0],
            ]}
            icon={icon}
          >
            <Popup>
              <div>
                <h3 className="text-kalekaRed font-inter-bold">LIHAT DETAIL</h3>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div style={{ height: '20px' }}></div>
    </div>
  );
}

SelectedMap.propTypes = {
  selectedCoordinate: PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number),
    icon: PropTypes.string,
  }),
};

export default SelectedMap;
