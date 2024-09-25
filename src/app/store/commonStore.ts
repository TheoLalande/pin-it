import { create } from 'zustand';
import { PinPointType } from '@/utils/types/PinPointTypes';


interface CommonState {
  searchedPlace: PinPointType
  setSearchedPlace: (place: any) => void; // Ajoute cette méthode dans l'interface
}

export const useCommonStore = create<CommonState>((set) => ({
  searchedPlace: {
    title: '',
    description: '',
    latitude: 0,
    longitude: 0,
    modified_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    tags: [],
    pictures: [],
    type: 0,
    icon: 'pin',
    color: 'blue',
    created_by: '',
  },
  setSearchedPlace: (place: any) => set(() => ({ searchedPlace: place })),

}));