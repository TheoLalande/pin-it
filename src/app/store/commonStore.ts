import { create } from 'zustand';

interface CommonState {
  searchedPlace: any
  setSearchedPlace: (place: any) => void; // Ajoute cette méthode dans l'interface
}

export const useCommonStore = create<CommonState>((set) => ({
  searchedPlace: '',
  setSearchedPlace: (place: any) => set(() => ({ searchedPlace: place })),

}));