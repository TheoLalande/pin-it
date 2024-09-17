import { LeafletMouseEvent } from 'leaflet'
import { useMapEvents } from 'react-leaflet'

const MapEventHandler = ({ onMapClick }: { onMapClick: (e: LeafletMouseEvent) => void }) => {
  useMapEvents({
    click(e) {
      onMapClick(e)
    },
  })
  return null
}

export default MapEventHandler
