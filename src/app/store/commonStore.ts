import { create } from 'zustand';
import { PinPointType } from '@/utils/types/PinPointTypes';


interface CommonState {
  searchedPlace: PinPointType
  isMenuShown: boolean

  muteIsSearchedPlace: (place: any) => void; // Ajoute cette méthode dans l'interface
  muteIsMenuShown: (value: any) => void; // Ajoute cette méthode dans l'interface

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
  isMenuShown: true,


  muteIsSearchedPlace: (place: any) => set(() => ({ searchedPlace: place })),
  muteIsMenuShown: (value: boolean) => set(() => ({ isMenuShown: value })),
}));