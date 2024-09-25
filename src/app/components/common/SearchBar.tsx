import { useEffect, useRef, useState } from 'react'
import { getPlacesFromUserInput, isGPSCoordinates, formatGPSCoordinates, formatedNominatimResult, getPinPointObj } from '@/utils/tools/mapUtils'
import { useCommonStore } from '@/app/store/commonStore'
import { PinPointType } from '@/utils/types/PinPointTypes'

const SearchBar = () => {
  const [userInput, setUserInput] = useState<any>('')
  const [nominatimSearchResults, setNominatimSearchResults] = useState<formatedNominatimResult[] | null>([])
  const { setSearchedPlace } = useCommonStore()
  const resultsRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setNominatimSearchResults(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [resultsRef])

  async function handleSearchSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault()
    let result: any = null
    try {
      if (isGPSCoordinates(userInput)) {
        result = formatGPSCoordinates(userInput)
        const pinPointFromGPS: PinPointType = getPinPointObj(result, true)
        setSearchedPlace(pinPointFromGPS)
      } else {
        result = await getPlacesFromUserInput(userInput)
        setNominatimSearchResults(result)
      }
    } catch (error) {
      setNominatimSearchResults(null)
      console.error('Erreur lors de la récupération des coordonnées GPS :', error)
    }
  }
  return (
    <>
      <form className="bg-transparent absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-3/4" onSubmit={handleSearchSubmit}>
        <input onChange={e => setUserInput(e.target.value)} type="text" className="w-full h-8 rounded-full shadow-lg focus:outline-none pl-3 bg-white text-foreground" placeholder="Search..." />
      </form>
      {nominatimSearchResults ? (
        <ul ref={resultsRef} className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 w-3/4 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {nominatimSearchResults.map((result: any, index: number) => (
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              key={index}
              onClick={() => {
                setSearchedPlace(getPinPointObj(result, false))
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
