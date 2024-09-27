'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { GrFormPrevious } from 'react-icons/gr'
import MapStyleElt from '@/app/components/settings/maps/MapStyleElt'
import { mapPath } from '@/utils/enums/mapEnums'

const data = [
  {
    id: 1,
    title: 'Terrain',
    imagePath: '/assets/mapStyles/terrain.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
    mapURL: mapPath.TERRAIN,
  },
  {
    id: 2,
    title: 'Sombre',
    imagePath: '/assets/mapStyles/dark.png',
    description: 'Une carte utile de nuit',
    mapURL: mapPath.DARK,
  },
  {
    id: 3,
    title: 'Lagoon',
    imagePath: '/assets/mapStyles/lagoon.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
    mapURL: mapPath.LAGOON,
  },
  {
    id: 4,
    title: 'Clair',
    imagePath: '/assets/mapStyles/light.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
    mapURL: mapPath.LIGHT,
  },
  {
    id: 5,
    title: 'Streets',
    imagePath: '/assets/mapStyles/streets.png',
    description: 'Une carte utile en ville',
    mapURL: mapPath.STREET,
  },
  {
    id: 6,
    title: 'Sunny',
    imagePath: '/assets/mapStyles/sunny.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
    mapURL: mapPath.SUNNY,
  },
]

const MapSettings = () => {
  const router = useRouter()
  return (
    <div className="p-8 mb-10">
      <button className="mb-5" onClick={() => router.push('/settings')}>
        <GrFormPrevious size={25} />
      </button>
      {data.map(d => (
        <MapStyleElt key={d.title} title={d.title} imagePath={d.imagePath} description={d.description} id={d.id} mapURL={d.mapURL} />
      ))}
    </div>
  )
}

export default MapSettings
