import React from "react";
import L, { LatLngExpression, Icon, CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer,ImageOverlay } from "react-leaflet";

L.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

export const FloorMap = () => {
    
    const image = {
      url: "images/hiroshige_hakone.jpg",
      width: 4307,
      height: 2820,
  };
  const imageBounds = L.latLngBounds([0, 0], [image.height / 16, image.width / 16]);
  const position = imageBounds.getCenter();
  return (
    <MapContainer center={position} zoom={1} scrollWheelZoom={false}  style={{ height: "100vh" }} crs={CRS.Simple}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <ImageOverlay url="/hiroshige_hakone.jpg" bounds={imageBounds} />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
