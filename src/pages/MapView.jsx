import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { setPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flight);
  const dispatch = useDispatch();
  console.log(flights);

  const planeIcon = icon({
    iconUrl: "plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[52.399324, 9.710618]}
      zoom={7}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <Marker
          key={flight.id}
          position={[flight.lat, flight.lng]}
          icon={planeIcon}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Kod: {flight.code}</span>
              <button onClick={() => setDetailId(flight.id)}>Detay</button>
              <button onClick={() => dispatch(setPath([]))}>
                Rotayi Temizle
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
