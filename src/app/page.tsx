'use client'

import dynamic from 'next/dynamic'
import SearchBar from './components/common/SearchBar'
const Map = dynamic(() => import('./components/map/Map'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <Map zoom={6} position={[43.0, 3.0]} />
      <SearchBar />
    </div>
  )
}
