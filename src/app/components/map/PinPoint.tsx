import { Marker, useMap } from "react-leaflet";
import React from "react";
import PinPopUp from "./PinPopUp";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LeafletMouseEvent } from "leaflet";
// import createCustomIcon from "./CreateCustomIcon"; // Met le bon chemin ici

type pinPointProps = {
  position: [number, number];
  onMarkerClick?: (e: LeafletMouseEvent) => void; // Rendre cette prop optionnelle si non utilisée
};

export default function PinPoint(props: pinPointProps) {
  const map = useMap(); // Accès à la carte

  function handleMarkerClick(e: LeafletMouseEvent) {
    setTimeout(() => {
      map.panTo(props.position, { animate: true, duration: 1.0 });
    }, 100);

    if (props.onMarkerClick) props.onMarkerClick(e);
  }
  return (
    <Marker
      position={props.position}
      // icon={createCustomIcon("#c0033f", "carabiner")}
      eventHandlers={{
        click: handleMarkerClick, // Gérer le clic sur un marker
      }}
    >
      <PinPopUp />
    </Marker>
  );
}
