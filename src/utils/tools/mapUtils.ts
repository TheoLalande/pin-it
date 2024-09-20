export type SearchedPlaceType = {
  city: string;
  state: string;
  postCode: number
  latitude: number;
  longitude: number;
  fullCoordinates: string;
}

export function isGPSCoordinates(valueToCheck: string): boolean {
  const regex = /^\s*(-?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*(-?((1[0-7]\d|\d{1,2})(\.\d+)?|180(\.0+)?))\s*$/;
  if (regex.test(valueToCheck)) return true
  return false
}

export function formatGPSCoordinates(valueToFormat: string): SearchedPlaceType[] {
  const valueWithoutSpace = valueToFormat.replace(/\s+/g, '');
  const [latitude, longitude] = valueWithoutSpace.split(',');
  const searchedPlace: SearchedPlaceType[] = [{
    city: '',
    state: '',
    postCode: 0,
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    fullCoordinates: valueWithoutSpace,
  }]
  return searchedPlace
}

export async function getGpsCoordinatesFromAddr(address: string) {
  const result = await fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1`, {
    headers: {
      'User-Agent': 'Pin-it/1.0 (theo.lalande@gmail.com)',
    },
  })
  const formatedData = formatResults(await result.json())
  return formatedData
}

function formatResults(results: any) {
  const formatedResult: Array<SearchedPlaceType> = []
  for (const result of results) {
    const city = result.address.city
      ? result.address.city
      : result.address.village
        ? result.address.village
        : result.address.municipality
    const concatenatedString = `${city}, ${result.address.state}, ${result.address.country}`
    const isDuplicate = formatedResult.some((item) => item.city === concatenatedString)
    if (!isDuplicate) {
      const resultObj: SearchedPlaceType = {
        city: concatenatedString,
        state: result.address.state,
        postCode: result.address.postcode,
        latitude: parseFloat(result.lat),
        longitude: parseFloat(result.lon),
        fullCoordinates: `${result.lat}, ${result.lon}`,
      }
      formatedResult.push(resultObj)
    }
  }
  return formatedResult
}

const exportedFunctions = { isGPSCoordinates, formatGPSCoordinates, getGpsCoordinatesFromAddr }
export default exportedFunctions

