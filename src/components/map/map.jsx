import Image from "next/image";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Icon } from "leaflet";
import icon from "../../../public/images/icon-pin.png";

export default function Map() {
  const customIcon = new Icon({
    iconUrl: "/images/icon-pin.png",
    iconSize: [38, 38],
  });

  return (
    <>
      <MapContainer
        className="about-map-container"
        center={[-15.785843, 35.006590]}
        zoom={20}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        touchZoom={false}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-15.785843,35.006590]} icon={customIcon}></Marker>
      </MapContainer>
    </>
  );
}
