import { create } from 'zustand'

export const useDogFiltersStore = create((set) => ({
    size: '',
    startDate: '',
    endDate: '',
    walksPerDay: '',
    availability: '',

    setSize: (size) => set({ size }),
    setStartDate: (startDate) => set({ startDate }),
    setEndDate: (endDate) => set({ endDate }),
    setWalksPerDay: (walksPerDay) => set({ walksPerDay }),
    setAvailability: (availability) => set({ availability }),

    resetFilters: () =>
        set({
            size: '',
            startDate: '',
            endDate: '',
            walksPerDay: '',
            availability: '',
        }),
}))