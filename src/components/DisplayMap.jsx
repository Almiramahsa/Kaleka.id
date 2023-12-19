import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useCoordinateStore from '../store/getCoordinate.js';
import getCoordinate from '../store/apiCoordinate.js';
import L from 'leaflet';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function DisplayMap({ onCoordinateClick }) {
  const [center, setCenter] = React.useState([-2.5, 116]);
  const [zoom, setZoom] = React.useState(4);
  const coordinates = React.useState([]);
  const selectedCoordinate = useCoordinateStore((state) => state.selectedCoordinate);
  const setSelectedCoordinate = useCoordinateStore((state) => state.setSelectedCoordinate);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (selectedCoordinate) {
      navigate('/coordinate-details');
    } else {
      console.error('Selected coordinate is null.');
    }
  };

  const handleMarkerClick = (coordinate) => {
    setSelectedCoordinate(coordinate);
    onCoordinateClick('DETAIL COORDINATE');
    handleButtonClick();
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoordinate();
        coordinates[1](data.data);

        if (data.data.length > 0) {
          const [longitude, latitude] = data.data[0].coordinates;
          setCenter([latitude, longitude]);
          setZoom(10);
        }
      } catch (error) {
        console.error('Error fetching coordinate data:', error);
      }
    };

    fetchData();
  }, [coordinates]);

  useEffect(() => {
    if (selectedCoordinate) {
      navigate('/coordinate-details');
    }
  }, [selectedCoordinate, navigate]);
  

  return (
    <div className="text-center">
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
        {coordinates[0].map((coord, index) => {
          const [longitude, latitude] = coord.coordinates;

          const icon = L.divIcon({
            html: `<button class="w-8 h-8 flex items-center justify-center text-kalekaBlue rounded-full border-2 border-blue-500"></button>`,
            className: 'custom-marker-icon',
          });

          return (
            <Marker
              key={index}
              position={[latitude, longitude]}
              icon={icon}
              eventHandlers={{
                click: () => {
                  handleMarkerClick(coord);
                },
              }}
            >
              <Popup>
                <div>
                  <h3 className="text-kalekaRed font-inter-bold">LIHAT DETAIL</h3>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <div style={{ height: '20px' }}></div>
    </div>
  );
}

DisplayMap.propTypes = {
  onCoordinateClick: PropTypes.func.isRequired,
};

export default DisplayMap;
