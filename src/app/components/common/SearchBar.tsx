import { useState } from 'react'
import { getGpsCoordinatesFromAddr, isGPSCoordinates, formatGPSCoordinates, SearchedPlaceType } from '@/utils/tools/mapUtils'
import { useCommonStore } from '@/app/store/commonStore'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<any>('')
  const [searchResults, setSearchResults] = useState<SearchedPlaceType[] | null>([])
  const { setSearchedPlace } = useCommonStore()

  async function handleSearchSubmit(e: React.FormEvent): Promise<SearchedPlaceType[] | void> {
    e.preventDefault()
    let result: SearchedPlaceType[] = []
    try {
      if (isGPSCoordinates(searchValue)) result = formatGPSCoordinates(searchValue)
      result = await getGpsCoordinatesFromAddr(searchValue)
      setSearchResults(result)
      return result
    } catch (error) {
      setSearchResults(null)
      return console.error('Erreur lors de la récupération des coordonnées GPS :', error)
    }
  }
  return (
    <>
      <form className="bg-transparent absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-3/4" onSubmit={handleSearchSubmit}>
        <input onChange={e => setSearchValue(e.target.value)} type="text" className="w-full h-8 rounded-full shadow-lg focus:outline-none pl-3 bg-white text-foreground" placeholder="Search..." />
      </form>
      {searchResults ? (
        <ul className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 w-3/4 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {searchResults.map((result: { concatenatedCityInfo: string }, index: number) => (
            <li
              className="p-2 hover:bg-gray-200 cursor-pointer"
              key={index}
              onClick={() => {
                setSearchedPlace(result)
                console.log('🚀🚀 ~ result:', result)
                setSearchResults(null)
              }}
            >
              {result.concatenatedCityInfo}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default SearchBar
