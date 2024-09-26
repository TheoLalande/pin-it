import { PinPointType } from "../types/PinPointTypes";
// import { useCommonStore } from '@/app/store/commonStore'
// import { useMapEvents } from "react-leaflet";

export type formatedNominatimResult = {
  concatenatedCityInfo: string;
  state: string;
  postCode: number
  latitude: number;
  longitude: number;
  fullCoordinates: string;
}

// type nominatimType = {
//   place_id: number,
//   licence: string,
//   osm_type: string,
//   osm_id: number,
//   lat: string,
//   lon: string,
//   class: string,
//   type: string,
//   place_rank: number,
//   importance: number,
//   addresstype: string,
//   name: string,
//   display_name: string,
//   address: any
//   boundingbox: string[]
//   stringToDisplay: string
// }

export async function getPlacesFromUserInput(address: string) {
  const result = await getNominatimInfo(address)
  const sortedPlaces = sortNominatimPlaces(result)
  const uniquePlaces = deleteNiminatimDuplicates(sortedPlaces)
  const placesWithStringToDisplay = []
  for (const place of uniquePlaces) placesWithStringToDisplay.push({ ...place, stringToDisplay: addPlacesToDisplayToObj(place) })
  return placesWithStringToDisplay
}
async function getNominatimInfo(address: string) {
  const result = await fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&addressdetails=1`, {
    headers: {
      'User-Agent': 'Pin-it/1.0 (theo.lalande@gmail.com)',
    },
  })
  const parsedResult = await result.json()
  return parsedResult
}
function sortNominatimPlaces(places: any) {
  return places.filter((place: { address: { city: any; }; }) => place.address.city) // Filtrer les lieux avec une ville
    .sort((a: { place_rank: number; importance: number; }, b: { place_rank: number; importance: number; }) => {
      if (a.place_rank !== b.place_rank) {
        return a.place_rank - b.place_rank;
      }
      return b.importance - a.importance;
    });
}
function deleteNiminatimDuplicates(sortedPlaces: any) {
  const result = sortedPlaces.filter(
    (place: { name: any; address: { city: any; }; }, index: any, self: any[]) =>
      index ===
      self.findIndex((p) => p.name === place.name && p.address.city === place.address.city)
  );

  return result
}
function addPlacesToDisplayToObj(place: any): string {
  const address = place.address;
  const components = [
    place.name,  // Nom du lieu
    address.road !== place.name ? address.road : null,  // Route, mais uniquement si elle est différente du nom
    address.square !== place.name ? address.square : null,  // Place, mais uniquement si elle est différente du nom
    address.park !== place.name ? address.park : null,  // Parc, mais uniquement si il est différent du nom
    address.city || address.town || address.village,  // Ville
    address.county,
    address.state,
    address.country,
  ];
  return components.filter(Boolean).join(", ");
};
export function isGPSCoordinates(valueToCheck: string): boolean {
  const regex = /^\s*(-?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*(-?((1[0-7]\d|\d{1,2})(\.\d+)?|180(\.0+)?))\s*$/;
  if (regex.test(valueToCheck)) return true
  return false
}
export function formatGPSCoordinates(valueToFormat: string): { latitude: string, longitude: string } {
  const valueWithoutSpace = valueToFormat.replace(/\s+/g, '');
  const [latitude, longitude] = valueWithoutSpace.split(',');

  return { latitude, longitude }
}
export function getPinPointObj(values: { latitude: string; longitude: string; } | any, isGps: boolean) {
  console.log('🚀🚀 ~ values:', values)
  if (isGps) {
    const pinPointFromGps: PinPointType = {
      title: `${values.latitude}, ${values.longitude}`,
      description: '',
      latitude: parseFloat(values.latitude),
      longitude: parseFloat(values.longitude),
      modified_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      tags: [],
      pictures: [],
      type: 0,
      icon: 'pin',
      color: 'blue',
      created_by: 'user',
    }
    return pinPointFromGps
  }
  else {
    const pinPointFromNominatimAddress: PinPointType = {
      title: values.display_name,
      description: '',
      latitude: parseFloat(values.lat),
      longitude: parseFloat(values.lon),
      modified_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      tags: [],
      pictures: [],
      type: 0,
      icon: 'pin',
      color: '#ffffff00',
      created_by: 'user',
    }
    return pinPointFromNominatimAddress
  }
}




const exportedFunctions = { isGPSCoordinates, formatGPSCoordinates, getPlacesFromUserInput }
export default exportedFunctions

