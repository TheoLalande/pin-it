import { create } from 'zustand';
import { PinPointType } from '@/utils/types/PinPointTypes';


interface CommonState {
  searchedPlace: PinPointType
  isMenuShown: boolean
  mapStyle: string

  muteIsSearchedPlace: (place: any) => void; // Ajoute cette méthode dans l'interface
  muteIsMenuShown: (value: any) => void; // Ajoute cette méthode dans l'interface
  muteMapStyle: (value: string) => void;

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
  mapStyle: 'https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=nrGnG2vPRIN3tdQBFvFLMnriBCRxtMcffJCdYpZaV4F9Igqwgp1B8LJFhLHXjlem',


  muteIsSearchedPlace: (place: any) => set(() => ({ searchedPlace: place })),
  muteIsMenuShown: (value: boolean) => set(() => ({ isMenuShown: value })),
  muteMapStyle: (value: string) => set(() => ({ mapStyle: value }))
}));