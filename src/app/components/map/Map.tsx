import { MapContainer, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PinPoint from "./PinPoint";
import Layer from "./Layer";
import data from "../../../../public/data/pinPoints";
import React from "react";
import { LeafletMouseEvent } from "leaflet";

type propsType = {
  position: [number, number];
  zoom: number;
};

// Composant pour gérer les événements de la carte (comme le clic sur la carte)
const MapEventHandler = ({
  onMapClick,
}: {
  onMapClick: (e: LeafletMouseEvent) => void;
}) => {
  useMapEvents({
    click(e) {
      onMapClick(e);
    },
  });
  return null;
};

// Composant pour gérer le clic sur un marker
const PanToMarker = ({ position }: { position: [number, number] }) => {
  const map = useMap(); // Utilise useMap pour accéder directement à l'instance de la carte

  const handleMarkerClick = () => {
    // Utilise un léger délai avant d'appeler panTo pour corriger le décalage initial
    setTimeout(() => {
      map.panTo(position, { animate: true, duration: 1.0 });
    }, 100); // Ajuste ce délai si nécessaire (100ms ici)
  };

  return (
    <PinPoint
      position={position}
      onMarkerClick={handleMarkerClick} // Gérer le clic sur un marker
    />
  );
};

const Map = (props: propsType) => {
  const { position, zoom } = props;

  // Fonction pour gérer le clic sur la carte
  const handleMapClick = (e: LeafletMouseEvent) => {
    const map = e.target._map; // Récupère l'instance de la carte
    if (map) map.panTo(e.latlng, { animate: true, duration: 1.0 });
  };

  return (
    <div className="flex h-screen w-screen">
      <MapContainer
        id="mapId"
        center={position}
        zoom={zoom}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <Layer />

        {/* Gestionnaire d'événements pour la carte */}
        <MapEventHandler onMapClick={handleMapClick} />

        {/* Affichage des marqueurs */}
        {data.map((pinPoint) => (
          <PanToMarker
            key={pinPoint.id}
            position={[pinPoint.latitude, pinPoint.longitude]}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
