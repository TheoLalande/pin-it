import { MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PinPoint from './PinPoint'
import Layer from './Layer'
import data from '../../../../public/data/pinPoints'
import React from 'react'

type propsType = {
  position: [number, number]
  zoom: number
}

const Map = (props: propsType) => {
  const { position, zoom } = props

  return (
    <div className="flex h-screen w-screen absolute z-0">
      <MapContainer id="mapId" center={position} zoom={zoom} zoomControl={false} scrollWheelZoom={true}>
        <Layer />
        {data.map(pinPoint => (
          <PinPoint
            popupData={{ title: pinPoint.title, description: pinPoint.description, latitude: position[0], longitude: position[1], imagePath: '/assets/popUpPic.jpg' }}
            icon={pinPoint.icon}
            color={pinPoint.color}
            key={pinPoint.id}
            position={[pinPoint.latitude, pinPoint.longitude]}
          />
        ))}
      </MapContainer>
    </div>
  )
}
export default React.memo(Map)
