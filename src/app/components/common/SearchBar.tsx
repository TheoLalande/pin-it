import { useState } from 'react'
import { isGPSCoordinates } from '@/utils/tools/mapUtils'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  function handleSearchSubmit(e: React.FormEvent): boolean {
    e.preventDefault()
    const isBoolean = isGPSCoordinates(searchValue)
    return isBoolean
  }
  return (
    <>
      <form className="bg-transparent absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-3/4" onSubmit={handleSearchSubmit}>
        <input onChange={e => setSearchValue(e.target.value)} type="text" className="w-full h-8 rounded-full shadow-lg focus:outline-none pl-3  bg-white text-foreground" placeholder="Search..." />
      </form>
    </>
  )
}

export default SearchBar
