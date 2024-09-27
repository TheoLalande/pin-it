import { useEffect, useRef, useState } from 'react'
import { getPlacesFromUserInput, isGPSCoordinates, formatGPSCoordinates, formatedNominatimResult, getPinPointObj } from '@/utils/tools/mapUtils'
import { useCommonStore } from '@/app/store/commonStore'
import { PinPointType } from '@/utils/types/PinPointTypes'
import { MdMyLocation } from 'react-icons/md'
import { getUserLocation } from '@/utils/tools/mapUtils'
import { RxCrossCircled } from 'react-icons/rx'

const SearchBar = () => {
  const [userInput, setUserInput] = useState<string>('')
  const [nominatimSearchResults, setNominatimSearchResults] = useState<formatedNominatimResult[] | null>([])
  const { muteIsSearchedPlace, isMenuShown } = useCommonStore()
  const resultsRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    function handleClickOutsideOfResultList(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setNominatimSearchResults(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutsideOfResultList)
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideOfResultList)
    }
  }, [resultsRef])

  async function handleSearchSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault()
    try {
      if (isGPSCoordinates(userInput)) {
        const result: { latitude: string; longitude: string } = formatGPSCoordinates(userInput)
        const pinPointFromGPS: PinPointType = getPinPointObj(result, true)
        muteIsSearchedPlace(pinPointFromGPS)
      } else {
        const result = await getPlacesFromUserInput(userInput)
        setNominatimSearchResults(result)
      }
    } catch (error) {
      setNominatimSearchResults(null)
      console.error('Erreur lors de la récupération des coordonnées GPS :', error)
    }
  }
  function handleDeleteUserInput(): void {
    const elt = document.getElementById('searchBarInput') as HTMLInputElement
    elt.value = ''
    setUserInput('')
  }
  async function handleLocation(): Promise<void> {
    const gpsOfUserLocation: { latitude: number; longitude: number } = await getUserLocation()
    const pinPointFromUserLocation: PinPointType = getPinPointObj(gpsOfUserLocation, true)
    muteIsSearchedPlace(pinPointFromUserLocation)
  }
  return (
    <>
      <form
        className={`bg-transparent absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-4/5 transition-all duration-300 ${
          isMenuShown ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
        onSubmit={handleSearchSubmit}
      >
        <div className="relative">
          <input
            id="searchBarInput"
            onChange={e => setUserInput(e.target.value)}
            type="text"
            className="w-full  h-8 rounded-lg shadow-lg focus:outline-none pl-10 bg-white text-foreground"
            placeholder="Search..."
          />
          {userInput !== '' ? (
            <button
              type="button" // Assure que ce bouton n'agit pas comme un bouton de soumission de formulaire
              className="absolute top-2 right-3 text-gray-500"
              onClick={handleDeleteUserInput} // Pas besoin de preventDefault ici
            >
              <RxCrossCircled />
            </button>
          ) : null}
          <button type="button" className="absolute top-2 left-3 text-gray-500" onClick={handleLocation}>
            <MdMyLocation />
          </button>
        </div>
      </form>
      {nominatimSearchResults ? (
        <ul ref={resultsRef} className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 w-3/4 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {nominatimSearchResults.map((result: any, index: number) => (
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              key={index}
              onClick={() => {
                muteIsSearchedPlace(getPinPointObj(result, false))
                setNominatimSearchResults(null)
              }}
            >
              {result.stringToDisplay}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default SearchBar
