'use client'
import dynamic from 'next/dynamic'
import SearchBar from './components/common/searchbar/SearchBar'
import Landing from './components/common/Landing'
const Map = dynamic(() => import('./components/map/Map'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Landing />
      {/* <div className="h-screen w-screen relative">
        <SearchBar />
        <Map zoom={6} position={[43.0, 3.0]} />
      </div> */}
    </>
  )
}
