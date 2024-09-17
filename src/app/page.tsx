"use client";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/map/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Map zoom={6} position={[43.0, 3.0]} />
    </div>
  );
}
