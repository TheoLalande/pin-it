import React from "react";
import { TileLayer } from "react-leaflet";

const Layer = () => {
  return (
    <TileLayer url="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=nrGnG2vPRIN3tdQBFvFLMnriBCRxtMcffJCdYpZaV4F9Igqwgp1B8LJFhLHXjlem" />
  );
};

export default Layer;
