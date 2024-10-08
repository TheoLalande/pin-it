import { Marker, useMap } from 'react-leaflet'
import React, { useEffect } from 'react'
import PinPopUp from './PinPopUp'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { LeafletMouseEvent } from 'leaflet'
import PPIcon from './PinPointIcon'
import { useCommonStore } from '@/app/store/commonStore'

type pinPointProps = {
  position: [number, number]
  icon: string
  color: string
  onMarkerClick?: (e: LeafletMouseEvent) => void // Rendre cette prop optionnelle si non utilisée
  popupData: {
    title: string
    description: string
    latitude: number
    longitude: number
    imagePath: string
  }
}

export default function PinPoint(props: pinPointProps) {
  const map = useMap() // Accès à la carte
  const { searchedPlace } = useCommonStore()

  useEffect(() => {
    if (searchedPlace.latitude !== 0 && searchedPlace.longitude !== 0) map.panTo([searchedPlace.latitude, searchedPlace.longitude], { animate: true, duration: 1.0 })
  }, [searchedPlace, map])

  function handleMarkerClick(e: LeafletMouseEvent) {
    setTimeout(() => {
      map.panTo(props.position, { animate: true, duration: 1.0 })
    }, 100)
    if (props.onMarkerClick) props.onMarkerClick(e)
  }
  return (
    <Marker
      position={props.position}
      icon={PPIcon({ color: props.color, iconName: props.icon })}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <PinPopUp
        title={props.popupData.title}
        description={props.popupData.description}
        imagePath={props.popupData.imagePath}
        latitude={props.popupData.latitude}
        longitude={props.popupData.longitude}
      />
    </Marker>
  )
}
