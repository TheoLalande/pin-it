import { MapContainer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import PinPoint from './PinPoint'
import { PinPointType } from '@/utils/types/PinPointTypes'
import Layer from './Layer'
import data from '../../../../public/data/pinPoints'
import React from 'react'
import { useCommonStore } from '@/app/store/commonStore'
import { getPinPointObj } from '@/utils/tools/mapUtils'
import { LeafletMouseEvent } from 'leaflet'

type propsType = {
  position: [number, number]
  zoom: number
}

const Map = (props: propsType) => {
  const { position, zoom } = props
  const { searchedPlace, isMarkerToolUsed, muteSearchedPlace, muteIsMarkerToolUsed, muteIsMenuShown } = useCommonStore()

  function MapEvents(): any {
    detectMapMotion()
  }
  function setNewPinPointWithTool(e: LeafletMouseEvent, muteSearchedPlace: (place: any) => void, muteIsMarkerToolUsed: (value: boolean) => void, muteIsMenuShown: (value: any) => void) {
    const [latitude, longitude] = [e.latlng.lat, e.latlng.lng]
    const pinPoint: PinPointType = getPinPointObj({ latitude: latitude, longitude: longitude }, true)
    muteSearchedPlace(pinPoint)
    muteIsMarkerToolUsed(false)
    muteIsMenuShown(true)
  }

  function detectMapMotion() {
    const { isMenuShown, muteIsMenuShown } = useCommonStore.getState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMapEvents({
      click(e) {
        muteIsMenuShown(!isMenuShown)
        if (isMarkerToolUsed) {
          setNewPinPointWithTool(e, muteSearchedPlace, muteIsMarkerToolUsed, muteIsMenuShown)
        }
      },
      zoomstart: () => {
        if (!isMenuShown) muteIsMenuShown(false)
      },
      movestart: () => {
        if (!isMenuShown) muteIsMenuShown(false)
      },
    })
  }

  return (
    <div className="flex h-screen w-screen absolute z-0">
      <MapContainer id="mapId" center={position} zoom={zoom} zoomControl={false} scrollWheelZoom={true}>
        <MapEvents />
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
        {searchedPlace ? (
          <PinPoint
            key={searchedPlace.title}
            popupData={{ title: searchedPlace.title, description: '', latitude: searchedPlace.latitude, longitude: searchedPlace.longitude, imagePath: '/assets/popUpPic.jpg' }}
            icon="pin"
            color="blue"
            position={[searchedPlace.latitude, searchedPlace.longitude]}
          />
        ) : null}
      </MapContainer>
    </div>
  )
}
export default React.memo(Map)
