import { MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PinPoint from './PinPoint'
import Layer from './Layer'
import data from '../../../../public/data/pinPoints'
import React from 'react'
import { LeafletMouseEvent } from 'leaflet'
import MapEventHandler from './MapEventHandler'

type propsType = {
  position: [number, number]
  zoom: number
}

const Map = (props: propsType) => {
  const { position, zoom } = props
  function handleMapClick(e: LeafletMouseEvent) {
    const map = e.target._map // Récupère l'instance de la carte
    if (map) map.panTo(e.latlng, { animate: true, duration: 1.0 })
  }

  return (
    <div className="flex h-screen w-screen">
      <MapContainer id="mapId" center={position} zoom={zoom} zoomControl={false} scrollWheelZoom={true}>
        <Layer />
        <MapEventHandler onMapClick={handleMapClick} />
        {data.map(pinPoint => (
          <PinPoint icon={pinPoint.icon} color={pinPoint.color} key={pinPoint.id} position={[pinPoint.latitude, pinPoint.longitude]} />
        ))}
      </MapContainer>
    </div>
  )
}

export default React.memo(Map)
