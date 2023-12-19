import { create } from 'zustand'

const useCoordinateStore = create((set) => ({
  selectedCoordinate: null,
  setSelectedCoordinate: (coordinate) => set({ selectedCoordinate: coordinate }),
}));

export default useCoordinateStore;
