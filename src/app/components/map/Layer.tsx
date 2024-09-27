import React from 'react'
import { TileLayer } from 'react-leaflet'
import { useCommonStore } from '@/app/store/commonStore'

const Layer = () => {
  const { mapStyle } = useCommonStore()

  return <TileLayer url={mapStyle.mapURL} />
}

export default Layer
