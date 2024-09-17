import { Marker } from "react-leaflet";
import React from "react";
import PinPopUp from "./PinPopUp";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { LeafletMouseEvent } from "leaflet";

type pinPointProps = {
  position: [number, number];
  onMarkerClick: (e: LeafletMouseEvent) => void;
};

export default function PinPoint(props: pinPointProps) {
  // function handleMarkerClick(e: LeafletMouseEvent) {
  //   console.log("Marker clicked", e.latlng);
  // }
  return (
    <Marker
      position={props.position}
      eventHandlers={{
        click: (e) => {
          props.onMarkerClick(e);
        },
      }}
    >
      <PinPopUp />
    </Marker>
  );
}
