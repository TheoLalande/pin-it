import { create } from 'zustand';
import { SearchedPlaceType } from '@/utils/tools/mapUtils';


interface CommonState {
  searchedPlace: SearchedPlaceType
  setSearchedPlace: (place: any) => void; // Ajoute cette méthode dans l'interface
}

export const useCommonStore = create<CommonState>((set) => ({
  searchedPlace: {
    concatenatedCityInfo: '',
    state: '',
    postCode: 0,
    latitude: 0,
    longitude: 0,
    fullCoordinates: '',
  },
  setSearchedPlace: (place: any) => set(() => ({ searchedPlace: place })),

}));