'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { GrFormPrevious } from 'react-icons/gr'
import MapStyleElt from '@/app/components/settings/maps/MapStyleElt'

const data = [
  {
    title: 'Terrain',
    imagePath: '/assets/mapStyles/terrain.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
  },
  {
    title: 'Sombre',
    imagePath: '/assets/mapStyles/dark.png',
    description: 'Une carte utile de nuit',
  },
  {
    title: 'Lagoon',
    imagePath: '/assets/mapStyles/lagoon.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
  },
  {
    title: 'Clair',
    imagePath: '/assets/mapStyles/light.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
  },
  {
    title: 'Streets',
    imagePath: '/assets/mapStyles/streets.png',
    description: 'Une carte utile en ville',
  },
  {
    title: 'Sunny',
    imagePath: '/assets/mapStyles/sunny.png',
    description: 'Une carte utile pour avoir un aperçu des reliefs',
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
        <MapStyleElt key={d.title} title={d.title} imagePath={d.imagePath} description={d.description} />
      ))}
    </div>
  )
}

export default MapSettings
